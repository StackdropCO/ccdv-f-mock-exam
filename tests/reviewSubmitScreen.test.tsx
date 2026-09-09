import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ReviewSubmitScreen } from "../src/components/ReviewSubmitScreen";
import { createInitialState, type ExamState } from "../src/state/examState";
import type { Question } from "../src/data/types";

afterEach(() => cleanup());

function makeQuestions(count: number): Question[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    type: "single" as const,
    selectCount: 1,
    body: `Question body ${i + 1}`,
    options: [
      { id: "A", body: "Option A" },
      { id: "B", body: "Option B" },
    ],
    correctAnswers: ["A"],
    explanation: `Explanation for question ${i + 1}`,
  }));
}

function makeState(overrides: Partial<ExamState> = {}): ExamState {
  return { ...createInitialState(), started: true, mode: "untimed", startTimestamp: 1000, ...overrides };
}

function answersFor(ids: number[]): ExamState["answers"] {
  return Object.fromEntries(ids.map((id) => [id, ["A"]]));
}

function flagsFor(ids: number[]): ExamState["flags"] {
  return Object.fromEntries(ids.map((id) => [id, true]));
}

function renderScreen(state: ExamState, questions: Question[]) {
  const goToQuestion = vi.fn();
  const returnToExam = vi.fn();
  const submitExam = vi.fn();
  render(
    <ReviewSubmitScreen
      state={state}
      questions={questions}
      actions={{ goToQuestion, returnToExam, submitExam }}
    />
  );
  return { goToQuestion, returnToExam, submitExam };
}

describe("ReviewSubmitScreen - completion summary and counting", () => {
  it("shows '52 of 53 answered' and '1 unanswered question' when only Question 53 is unanswered, and never claims 53 are unanswered", () => {
    const questions = makeQuestions(53);
    const state = makeState({ answers: answersFor(Array.from({ length: 52 }, (_, i) => i + 1)) });
    renderScreen(state, questions);

    expect(screen.getByText("52 of 53 answered")).not.toBeNull();
    expect(screen.getByText("1 unanswered question")).not.toBeNull();
    expect(screen.queryByText(/53 unanswered/)).toBeNull();
  });

  it("'Review unanswered' navigates straight to Question 53 in that same scenario", () => {
    const questions = makeQuestions(53);
    const state = makeState({ answers: answersFor(Array.from({ length: 52 }, (_, i) => i + 1)) });
    const { goToQuestion } = renderScreen(state, questions);

    fireEvent.click(screen.getByRole("button", { name: /Review unanswered questions/ }));
    expect(goToQuestion).toHaveBeenCalledTimes(1);
    expect(goToQuestion).toHaveBeenCalledWith(53);
  });

  it("'Review unanswered' goes to the lowest displayed position, not bank order or a later gap", () => {
    const questions = makeQuestions(10);
    const state = makeState({ answers: answersFor([1, 2, 4, 5, 7, 8, 9, 10]) }); // missing 3 and 6
    const { goToQuestion } = renderScreen(state, questions);

    fireEvent.click(screen.getByRole("button", { name: /Review unanswered questions/ }));
    expect(goToQuestion).toHaveBeenCalledWith(3);
  });

  it("'Review flagged' goes to the lowest flagged position even when flags were set out of order", () => {
    const questions = makeQuestions(40);
    const state = makeState({
      answers: answersFor(questions.map((q) => q.id)),
      flags: flagsFor([30, 7, 15]),
    });
    const { goToQuestion } = renderScreen(state, questions);

    fireEvent.click(screen.getByRole("button", { name: /Review flagged questions/ }));
    expect(goToQuestion).toHaveBeenCalledWith(7);
  });

  it("counts a question that is both unanswered and flagged correctly in both totals, and either shortcut can reach it", () => {
    const questions = makeQuestions(5);
    const state = makeState({ answers: answersFor([1, 2]), flags: flagsFor([3]) }); // Q3 unanswered AND flagged
    const { goToQuestion } = renderScreen(state, questions);

    expect(screen.getByText("2 of 5 answered")).not.toBeNull();
    expect(screen.getByText("3 unanswered questions")).not.toBeNull();
    expect(screen.getByText("1 flagged question")).not.toBeNull();

    fireEvent.click(screen.getByRole("button", { name: /Review unanswered questions/ }));
    expect(goToQuestion).toHaveBeenCalledWith(3);
    fireEvent.click(screen.getByRole("button", { name: /Review flagged questions/ }));
    expect(goToQuestion).toHaveBeenCalledWith(3);
  });
});

describe("ReviewSubmitScreen - zero and ready states", () => {
  it("shows 'All questions answered' with no Review-unanswered action once nothing is left unanswered (but flags remain)", () => {
    const questions = makeQuestions(4);
    const state = makeState({ answers: answersFor([1, 2, 3, 4]), flags: flagsFor([2]) });
    renderScreen(state, questions);

    expect(screen.getByText("All questions answered")).not.toBeNull();
    expect(screen.queryByRole("button", { name: /Review unanswered questions/ })).toBeNull();
    expect(screen.getByRole("button", { name: /Review flagged questions/ })).not.toBeNull();
  });

  it("shows 'No questions flagged' with no Review-flagged action when nothing is flagged", () => {
    const questions = makeQuestions(4);
    const state = makeState({ answers: answersFor([1]), flags: {} });
    renderScreen(state, questions);

    expect(screen.getByText("No questions flagged")).not.toBeNull();
    expect(screen.queryByRole("button", { name: /Review flagged questions/ })).toBeNull();
  });

  it("shows the combined ready message only when everything is answered and nothing is flagged", () => {
    const questions = makeQuestions(3);
    const state = makeState({ answers: answersFor([1, 2, 3]), flags: {} });
    renderScreen(state, questions);

    expect(screen.getByText("All questions answered. Ready when you are.")).not.toBeNull();
    expect(screen.queryByRole("button", { name: /Review unanswered questions/ })).toBeNull();
    expect(screen.queryByRole("button", { name: /Review flagged questions/ })).toBeNull();
  });

  it("never implies correctness or pass likelihood in the ready state (mentioning that submitting reveals a score is fine)", () => {
    const questions = makeQuestions(3);
    const state = makeState({ answers: answersFor([1, 2, 3]), flags: {} });
    renderScreen(state, questions);

    expect(screen.queryByText(/correct/i)).toBeNull();
    expect(screen.queryByText(/pass/i)).toBeNull();
    expect(screen.queryByText(/likely/i)).toBeNull();
  });
});

describe("ReviewSubmitScreen - back to exam is distinct from the shortcuts", () => {
  it("'Back to exam' calls returnToExam and never goToQuestion", () => {
    const questions = makeQuestions(5);
    const state = makeState({ answers: answersFor([1]), flags: flagsFor([3]) });
    const { returnToExam, goToQuestion } = renderScreen(state, questions);

    fireEvent.click(screen.getByRole("button", { name: "Back to exam" }));
    expect(returnToExam).toHaveBeenCalledTimes(1);
    expect(goToQuestion).not.toHaveBeenCalled();
  });
});

describe("ReviewSubmitScreen - partially selected multi-response question", () => {
  it("counts a multi-select question with one selected option as answered, and never reveals its key or explanation", () => {
    const questions: Question[] = [
      {
        id: 1,
        type: "multiple",
        selectCount: 2,
        body: "Pick two",
        options: [
          { id: "A", body: "Option A" },
          { id: "B", body: "Option B" },
          { id: "C", body: "Option C" },
        ],
        correctAnswers: ["A", "C"],
        explanation: "Secret explanation text",
      },
    ];
    const state = makeState({ answers: { 1: ["A"] } });
    renderScreen(state, questions);

    expect(screen.getByText("1 of 1 answered")).not.toBeNull();
    expect(screen.getByText("All questions answered. Ready when you are.")).not.toBeNull();
    expect(screen.queryByText(/Secret explanation/)).toBeNull();
    expect(screen.queryByText(/Option C/)).toBeNull();
  });
});

describe("ReviewSubmitScreen - submission confirmation", () => {
  it("opens a confirmation dialog on first click, states the unanswered count, and only submits once confirmed", () => {
    const questions = makeQuestions(5);
    const state = makeState({ answers: answersFor([1, 2, 3]) }); // 2 unanswered
    const { submitExam } = renderScreen(state, questions);

    fireEvent.click(screen.getByRole("button", { name: "Submit exam" }));
    const dialog = screen.getByRole("alertdialog");
    expect(within(dialog).getByText(/2 questions will remain unanswered/)).not.toBeNull();
    expect(submitExam).not.toHaveBeenCalled();

    fireEvent.click(within(dialog).getByRole("button", { name: "Cancel" }));
    expect(screen.queryByRole("alertdialog")).toBeNull();
    expect(submitExam).not.toHaveBeenCalled();
  });

  it("submits exactly once when confirmed", () => {
    const questions = makeQuestions(3);
    const state = makeState({ answers: answersFor([1, 2, 3]) });
    const { submitExam } = renderScreen(state, questions);

    fireEvent.click(screen.getByRole("button", { name: "Submit exam" }));
    fireEvent.click(within(screen.getByRole("alertdialog")).getByRole("button", { name: "Submit exam" }));
    expect(submitExam).toHaveBeenCalledTimes(1);
  });
});
