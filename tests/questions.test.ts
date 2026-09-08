import { describe, expect, it } from "vitest";
import { QUESTIONS } from "../src/data/questions";
import { validateQuestions } from "../src/data/validateQuestions";

describe("canonical question data", () => {
  it("produces no validation issues", () => {
    expect(validateQuestions(QUESTIONS)).toEqual([]);
  });

  it("contains exactly 53 questions", () => {
    expect(QUESTIONS).toHaveLength(53);
  });

  it("has all IDs 1 through 53 present with no gaps or duplicates", () => {
    const ids = QUESTIONS.map((q) => q.id).sort((a, b) => a - b);
    expect(ids).toEqual(Array.from({ length: 53 }, (_, i) => i + 1));
  });

  it("has every answer-key letter valid against that question's own options", () => {
    for (const q of QUESTIONS) {
      const optionIds = new Set(q.options.map((o) => o.id));
      for (const letter of q.correctAnswers) {
        expect(optionIds.has(letter)).toBe(true);
      }
    }
  });

  it("has selectCount 1 for every single-choice question", () => {
    for (const q of QUESTIONS.filter((q) => q.type === "single")) {
      expect(q.selectCount).toBe(1);
      expect(q.correctAnswers).toHaveLength(1);
    }
  });

  it("has selectCount matching correctAnswers.length for every multi-select question", () => {
    for (const q of QUESTIONS.filter((q) => q.type === "multiple")) {
      expect(q.selectCount).toBe(q.correctAnswers.length);
      expect(q.selectCount).toBeGreaterThanOrEqual(2);
    }
  });

  it("has an explanation for every question", () => {
    for (const q of QUESTIONS) {
      expect(q.explanation.length).toBeGreaterThan(0);
    }
  });

  it("matches the canonical answer key exactly (spot-checked sample)", () => {
    const byId = new Map(QUESTIONS.map((q) => [q.id, q]));
    expect(byId.get(1)?.correctAnswers).toEqual(["C"]);
    expect(byId.get(4)?.correctAnswers).toEqual(["A", "D"]);
    expect(byId.get(28)?.correctAnswers).toEqual(["A", "B", "C"]);
    expect(byId.get(33)?.correctAnswers).toEqual(["B"]);
    expect(byId.get(53)?.correctAnswers).toEqual(["C"]);
  });

  it("marks exactly 13 questions as multiple-choice (12 select-two + 1 select-three)", () => {
    const multi = QUESTIONS.filter((q) => q.type === "multiple");
    expect(multi).toHaveLength(13);
    expect(multi.filter((q) => q.selectCount === 2)).toHaveLength(12);
    expect(multi.filter((q) => q.selectCount === 3)).toHaveLength(1);
  });
});
