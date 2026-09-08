import { describe, expect, it } from "vitest";
import { computeResult, gradeQuestion } from "../src/lib/scoring";
import type { MultipleChoiceQuestion, SingleChoiceQuestion } from "../src/data/types";

const singleQ: SingleChoiceQuestion = {
  id: 1,
  type: "single",
  selectCount: 1,
  body: "test",
  options: [
    { id: "A", body: "a" },
    { id: "B", body: "b" },
    { id: "C", body: "c" },
  ],
  correctAnswers: ["C"],
  explanation: "because C",
};

const multiQ: MultipleChoiceQuestion = {
  id: 2,
  type: "multiple",
  selectCount: 2,
  body: "test multi",
  options: [
    { id: "A", body: "a" },
    { id: "B", body: "b" },
    { id: "C", body: "c" },
    { id: "D", body: "d" },
    { id: "E", body: "e" },
  ],
  correctAnswers: ["A", "D"],
  explanation: "because A and D",
};

describe("gradeQuestion - single answer", () => {
  it("grades the correct single answer as correct", () => {
    expect(gradeQuestion(singleQ, ["C"])).toBe("correct");
  });

  it("grades a wrong single answer as incorrect", () => {
    expect(gradeQuestion(singleQ, ["A"])).toBe("incorrect");
  });
});

describe("gradeQuestion - exact-set multi-select", () => {
  it("grades the exact correct set as correct", () => {
    expect(gradeQuestion(multiQ, ["A", "D"])).toBe("correct");
  });

  it("grades the exact correct set in reverse order as correct", () => {
    expect(gradeQuestion(multiQ, ["D", "A"])).toBe("correct");
  });

  it("grades a partial subset (A only) as incorrect", () => {
    expect(gradeQuestion(multiQ, ["A"])).toBe("incorrect");
  });

  it("grades a partial subset (D only) as incorrect", () => {
    expect(gradeQuestion(multiQ, ["D"])).toBe("incorrect");
  });

  it("grades the correct set plus an extra option as incorrect", () => {
    expect(gradeQuestion(multiQ, ["A", "D", "E"])).toBe("incorrect");
  });

  it("grades a completely wrong set as incorrect", () => {
    expect(gradeQuestion(multiQ, ["B", "C"])).toBe("incorrect");
  });
});

describe("gradeQuestion - unanswered", () => {
  it("grades an undefined answer as unanswered", () => {
    expect(gradeQuestion(singleQ, undefined)).toBe("unanswered");
  });

  it("grades an empty-array answer as unanswered", () => {
    expect(gradeQuestion(multiQ, [])).toBe("unanswered");
  });
});

describe("computeResult - aggregate scoring", () => {
  const questions = [singleQ, multiQ];

  it("computes correct/incorrect/unanswered counts, raw score, and percentage", () => {
    const result = computeResult(questions, { 1: ["C"], 2: ["A"] }, 125);
    expect(result.correct).toBe(1);
    expect(result.incorrect).toBe(1);
    expect(result.unanswered).toBe(0);
    expect(result.total).toBe(2);
    expect(result.percentage).toBeCloseTo(50);
    expect(result.completionSeconds).toBe(125);
    expect(result.perQuestion[1]).toBe("correct");
    expect(result.perQuestion[2]).toBe("incorrect");
  });

  it("counts an unanswered question separately from incorrect", () => {
    const result = computeResult(questions, { 1: ["C"] }, 60);
    expect(result.correct).toBe(1);
    expect(result.incorrect).toBe(0);
    expect(result.unanswered).toBe(1);
    expect(result.perQuestion[2]).toBe("unanswered");
  });

  it("scores a fully unanswered exam as zero correct with all unanswered", () => {
    const result = computeResult(questions, {}, 0);
    expect(result.correct).toBe(0);
    expect(result.unanswered).toBe(2);
    expect(result.percentage).toBe(0);
  });
});
