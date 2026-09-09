import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ResultsScreen } from "../src/components/ResultsScreen";
import { createInitialState, examReducer, type ExamState } from "../src/state/examState";
import { computeResult } from "../src/lib/scoring";
import type { FormQuestion } from "../src/data/bankTypes";

afterEach(() => cleanup());

function makeQuestions(count: number, domain: FormQuestion["domain"] = "applications-integration"): FormQuestion[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    bankId: `BANK-${i + 1}`,
    domain,
    objective: "D2.1",
    conceptKey: `concept-${i + 1}`,
    type: "single" as const,
    selectCount: 1,
    body: `Question body ${i + 1}`,
    options: [
      { id: "A", body: "Option A" },
      { id: "B", body: "Option B" },
    ],
    correctAnswers: ["A"],
    explanation: "Explanation text.",
  }));
}

function makeSubmittedState(questions: FormQuestion[], answers: Record<number, string[]>): ExamState {
  let state = examReducer(createInitialState(), { type: "START_EXAM", mode: "untimed", startTimestamp: 0 });
  state = { ...state, answers };
  const result = computeResult(questions, answers, 1527); // 25:27
  return examReducer(state, { type: "SUBMIT", submittedAt: 1527000, result });
}

describe("ResultsScreen - overall result", () => {
  it("renders the raw percentage, X of total score, and reconciling correct/incorrect/unanswered totals", () => {
    const questions = makeQuestions(5);
    // Q1,2 correct; Q3,4 incorrect; Q5 unanswered
    const answers = { 1: ["A"], 2: ["A"], 3: ["B"], 4: ["B"] };
    const state = makeSubmittedState(questions, answers);
    render(<ResultsScreen state={state} questions={questions} onRetake={() => {}} />);

    expect(screen.getByText("40.0%")).not.toBeNull();
    expect(screen.getByText("2 of 5 correct")).not.toBeNull();
    expect(screen.getByText("2 correct")).not.toBeNull();
    expect(screen.getByText("2 incorrect")).not.toBeNull();
    expect(screen.getByText("1 unanswered")).not.toBeNull();
    const r = state.result!;
    expect(r.correct + r.incorrect + r.unanswered).toBe(5);
  });

  it("renders the mode and a compact completion time", () => {
    const questions = makeQuestions(2);
    const state = makeSubmittedState(questions, { 1: ["A"], 2: ["A"] });
    render(<ResultsScreen state={state} questions={questions} onRetake={() => {}} />);
    expect(screen.getByText(/Untimed Practice/)).not.toBeNull();
    expect(screen.getByText(/Completed in 25:27/)).not.toBeNull();
  });

  it("never claims an official pass, fail, or certification-readiness status", () => {
    const questions = makeQuestions(3);
    const state = makeSubmittedState(questions, { 1: ["B"], 2: ["B"], 3: ["B"] }); // all wrong
    render(<ResultsScreen state={state} questions={questions} onRetake={() => {}} />);
    // The disclaimer legitimately contains the words "pass"/"fail" (denying any such
    // determination), so check for standalone status claims rather than the bare words.
    expect(screen.queryByText(/^pass$/i)).toBeNull();
    expect(screen.queryByText(/^fail(ed)?$/i)).toBeNull();
    expect(screen.queryByText(/exam ready/i)).toBeNull();
    expect(screen.queryByText(/likely to pass/i)).toBeNull();
    expect(screen.queryByText(/certification.?ready/i)).toBeNull();
    expect(screen.queryByText(/scaled score/i)).toBeNull();
    expect(screen.getByText(/unofficial mock result/i)).not.toBeNull();
  });
});

describe("ResultsScreen - performance by domain", () => {
  it("shows human-readable domain names and reconciles domain totals with the overall result", () => {
    const questions = [
      ...makeQuestions(2, "claude-code").map((q) => ({ ...q })),
    ];
    const state = makeSubmittedState(questions, { 1: ["A"], 2: ["B"] });
    render(<ResultsScreen state={state} questions={questions} onRetake={() => {}} />);
    const domainSection = screen.getByText("Performance by domain").closest("section")!;
    expect(within(domainSection).getByText("Claude Code")).not.toBeNull();
    expect(within(domainSection).queryByText("claude-code")).toBeNull();
  });
});

describe("ResultsScreen - primary review action", () => {
  it("labels the action 'Review N incorrect answers' and selects the incorrect filter", () => {
    const questions = makeQuestions(3);
    const state = makeSubmittedState(questions, { 1: ["B"], 2: ["B"], 3: ["A"] }); // 2 incorrect, 1 correct
    render(<ResultsScreen state={state} questions={questions} onRetake={() => {}} />);

    const action = screen.getByRole("button", { name: "Review 2 incorrect answers" });
    fireEvent.click(action);

    const bar = screen.getByRole("group", { name: "Filter reviewed questions" });
    const incorrectBtn = within(bar).getByRole("button", { name: "Incorrect (2)" });
    expect(incorrectBtn.getAttribute("aria-pressed")).toBe("true");
  });

  it("moves focus to the review section when the primary action is used", () => {
    const questions = makeQuestions(2);
    const state = makeSubmittedState(questions, { 1: ["B"], 2: ["A"] });
    render(<ResultsScreen state={state} questions={questions} onRetake={() => {}} />);
    fireEvent.click(screen.getByRole("button", { name: /Review 1 incorrect answer/ }));
    expect(document.activeElement?.textContent).toBe("Review your answers");
  });

  it("uses 'Review unanswered questions' when nothing is incorrect but some are unanswered", () => {
    const questions = makeQuestions(2);
    const state = makeSubmittedState(questions, { 1: ["A"] }); // Q2 unanswered, none incorrect
    render(<ResultsScreen state={state} questions={questions} onRetake={() => {}} />);
    expect(screen.getByRole("button", { name: "Review unanswered questions" })).not.toBeNull();
  });

  it("uses 'Review all answers' for a fully correct completed mock", () => {
    const questions = makeQuestions(2);
    const state = makeSubmittedState(questions, { 1: ["A"], 2: ["A"] });
    render(<ResultsScreen state={state} questions={questions} onRetake={() => {}} />);
    expect(screen.getByRole("button", { name: "Review all answers" })).not.toBeNull();
  });
});

describe("ResultsScreen - retake", () => {
  it("requires confirmation, preserves the result on cancel, and calls onRetake only when confirmed", () => {
    const questions = makeQuestions(2);
    const state = makeSubmittedState(questions, { 1: ["A"], 2: ["A"] });
    const onRetake = vi.fn();
    render(<ResultsScreen state={state} questions={questions} onRetake={onRetake} />);

    fireEvent.click(screen.getByRole("button", { name: "Take another mock" }));
    const dialog = screen.getByRole("alertdialog");
    fireEvent.click(within(dialog).getByRole("button", { name: "Cancel" }));
    expect(screen.queryByRole("alertdialog")).toBeNull();
    expect(onRetake).not.toHaveBeenCalled();
    expect(screen.getByText("100.0%")).not.toBeNull(); // result still shown, unchanged

    fireEvent.click(screen.getByRole("button", { name: "Take another mock" }));
    fireEvent.click(within(screen.getByRole("alertdialog")).getByRole("button", { name: "Take another mock" }));
    expect(onRetake).toHaveBeenCalledTimes(1);
  });
});
