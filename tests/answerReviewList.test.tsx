import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { AnswerReviewList } from "../src/components/AnswerReviewList";
import { defaultReviewFilter } from "../src/lib/reviewFilter";
import { computeResult } from "../src/lib/scoring";
import type { FormQuestion } from "../src/data/bankTypes";

afterEach(() => cleanup());

function singleQ(id: number, overrides: Partial<FormQuestion> = {}): FormQuestion {
  return {
    id,
    bankId: `BANK-${id}`,
    domain: "applications-integration",
    objective: "D2.1",
    conceptKey: `concept-${id}`,
    type: "single",
    selectCount: 1,
    body: `Question stem ${id}`,
    options: [
      { id: "A", body: "First option body" },
      { id: "B", body: "Second option body" },
      { id: "C", body: "Third option body" },
      { id: "D", body: "Fourth option body" },
    ],
    correctAnswers: ["C"],
    explanation: "C is correct because of the stated reason.",
    ...overrides,
  };
}

function multiQ(id: number, overrides: Partial<FormQuestion> = {}): FormQuestion {
  return {
    ...singleQ(id, overrides),
    type: "multiple",
    selectCount: 2,
    correctAnswers: ["A", "C"],
  };
}

function renderList(questions: FormQuestion[], answers: Record<number, string[]>, flags: Record<number, boolean> = {}) {
  const result = computeResult(questions, answers, 60);
  const onFilterChange = vi.fn();
  const utils = render(
    <AnswerReviewList
      questions={questions}
      answers={answers}
      flags={flags}
      result={result}
      filter={defaultReviewFilter(result)}
      onFilterChange={onFilterChange}
    />
  );
  return { ...utils, result, onFilterChange };
}

describe("defaultReviewFilter", () => {
  it("prefers incorrect when incorrect answers exist", () => {
    const questions = [singleQ(1), singleQ(2)];
    const result = computeResult(questions, { 1: ["A"], 2: ["C"] }, 0); // Q1 wrong, Q2 right
    expect(defaultReviewFilter(result)).toBe("incorrect");
  });

  it("falls back to unanswered when there are no incorrect answers but some unanswered", () => {
    const questions = [singleQ(1), singleQ(2)];
    const result = computeResult(questions, { 1: ["C"] }, 0); // Q1 right, Q2 unanswered
    expect(defaultReviewFilter(result)).toBe("unanswered");
  });

  it("falls back to all for a fully correct completed mock", () => {
    const questions = [singleQ(1), singleQ(2)];
    const result = computeResult(questions, { 1: ["C"], 2: ["C"] }, 0);
    expect(defaultReviewFilter(result)).toBe("all");
  });
});

describe("AnswerReviewList - filters", () => {
  it("shows accurate counts in filter labels and lets flagged overlap with correctness filters", () => {
    const questions = [singleQ(1), singleQ(2), singleQ(3)];
    const answers = { 1: ["A"], 2: ["C"] }; // Q1 incorrect, Q2 correct, Q3 unanswered
    const flags = { 1: true, 2: true };
    renderList(questions, answers, flags);

    const bar = screen.getByRole("group", { name: "Filter reviewed questions" });
    expect(within(bar).getByRole("button", { name: "Incorrect (1)" })).not.toBeNull();
    expect(within(bar).getByRole("button", { name: "Unanswered (1)" })).not.toBeNull();
    expect(within(bar).getByRole("button", { name: "Correct (1)" })).not.toBeNull();
    expect(within(bar).getByRole("button", { name: "Flagged (2)" })).not.toBeNull();
    expect(within(bar).getByRole("button", { name: "All (3)" })).not.toBeNull();
  });

  it("disables a filter button when its count is zero, but keeps it accessible", () => {
    const questions = [singleQ(1)];
    renderList(questions, { 1: ["C"] }); // fully correct, nothing incorrect/unanswered/flagged
    const bar = screen.getByRole("group", { name: "Filter reviewed questions" });
    const incorrectBtn = within(bar).getByRole("button", { name: "Incorrect (0)" });
    expect(incorrectBtn.hasAttribute("disabled")).toBe(true);
  });

  it("shows an accurate 'Showing N ... questions' status line with correct singular/plural wording", () => {
    const questions = [singleQ(1), singleQ(2)];
    renderList(questions, { 1: ["A"], 2: ["A"] }); // both incorrect
    expect(screen.getByText("Showing 2 incorrect questions")).not.toBeNull();
  });
});

describe("AnswerReviewList - answer display", () => {
  it("shows the complete selected and correct option bodies for an incorrect single-answer question, not just letters", () => {
    const questions = [singleQ(1)];
    renderList(questions, { 1: ["A"] }); // selected A, correct is C
    expect(screen.getByText("First option body")).not.toBeNull();
    expect(screen.getByText("Third option body")).not.toBeNull();
    expect(screen.getByText("Your answer")).not.toBeNull();
    expect(screen.getByText("Correct answer")).not.toBeNull();
  });

  it("shows 'No answer selected' plus the complete correct answer for an unanswered question", () => {
    const questions = [singleQ(1)];
    renderList(questions, {});
    expect(screen.getByText("No answer selected")).not.toBeNull();
    expect(screen.getByText("Third option body")).not.toBeNull();
  });

  it("does not duplicate content for a correct question, using 'Your answer · Correct' once", () => {
    const questions = [singleQ(1)];
    renderList(questions, { 1: ["C"] });
    expect(screen.getByText("Your answer · Correct")).not.toBeNull();
    expect(screen.getAllByText("Third option body")).toHaveLength(1);
    expect(screen.queryByText("Correct answer")).toBeNull();
  });

  it("keeps a partially-selected multiple-response question Incorrect and shows every selected and every required option", () => {
    const questions = [multiQ(1)]; // correct = A, C
    renderList(questions, { 1: ["A"] }); // only one of two required
    expect(screen.getByText("Incorrect")).not.toBeNull();

    // "Your answer" shows the one option the user selected.
    const yourAnswerLabel = screen.getByText("Your answer");
    const yourAnswerBlock = yourAnswerLabel.closest("div")!;
    expect(within(yourAnswerBlock).getByText("First option body")).not.toBeNull();
    expect(within(yourAnswerBlock).queryByText("Third option body")).toBeNull();

    // "Correct answers" shows both required options, regardless of what was selected.
    const correctLabel = screen.getByText("Correct answers");
    const correctBlock = correctLabel.closest("div")!;
    expect(within(correctBlock).getByText("First option body")).not.toBeNull();
    expect(within(correctBlock).getByText("Third option body")).not.toBeNull();
  });

  it("renders the explanation Markdown for every row", () => {
    const questions = [singleQ(1)];
    renderList(questions, { 1: ["C"] });
    expect(screen.getByText("Why this is correct")).not.toBeNull();
    expect(screen.getByText(/C is correct because of the stated reason/)).not.toBeNull();
  });

  it("shows the human-readable domain label, not the raw domain id", () => {
    const questions = [singleQ(1, { domain: "applications-integration" })];
    renderList(questions, { 1: ["A"] });
    expect(screen.getByText("Applications and Integration")).not.toBeNull();
    expect(screen.queryByText("applications-integration")).toBeNull();
  });

  it("labels the row with the form display position, never the internal bank id", () => {
    const questions = [singleQ(7, { bankId: "LEGACY-042" })];
    renderList(questions, { 7: ["A"] });
    expect(screen.getByText("Question 7")).not.toBeNull();
    expect(screen.queryByText(/LEGACY-042/)).toBeNull();
  });

  it("renders code blocks inside a reviewed question safely without crashing", () => {
    const questions = [singleQ(1, { body: "Given:\n\n```json\n{\"a\": 1}\n```\n\nWhat happens?" })];
    expect(() => renderList(questions, { 1: ["A"] })).not.toThrow();
    expect(screen.getByText('{"a": 1}')).not.toBeNull();
  });

  it("never crashes on a malformed answer/option-id reference and never leaks another question's content", () => {
    const questions = [singleQ(1, { correctAnswers: ["Z"] })]; // "Z" does not exist in options
    expect(() => renderList(questions, { 1: ["Y"] })).not.toThrow(); // "Y" also does not exist
    // Neither phantom id resolves to any option body being shown for this question.
    expect(screen.queryByText("First option body")).toBeNull();
  });
});
