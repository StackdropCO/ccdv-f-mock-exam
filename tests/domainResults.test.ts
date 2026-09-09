import { describe, expect, it } from "vitest";
import { computeDomainResults } from "../src/lib/domainResults";
import { computeResult } from "../src/lib/scoring";
import { DOMAIN_ORDER } from "../src/data/blueprint";
import type { FormQuestion } from "../src/data/bankTypes";
import type { Domain } from "../src/data/blueprint";

function q(id: number, domain: Domain): FormQuestion {
  return {
    id,
    bankId: `BANK-${id}`,
    domain,
    objective: `${domain}-obj`,
    conceptKey: `${domain}-concept-${id}`,
    type: "single",
    selectCount: 1,
    body: `Question body ${id}`,
    options: [
      { id: "A", body: "Option A" },
      { id: "B", body: "Option B" },
    ],
    correctAnswers: ["A"],
    explanation: "Because A is right.",
  };
}

// One question per planned status, spread across all eight domains, with two intentional
// percentage ties (0% and 100%... and a mid tie at 50%) to exercise blueprint-order tie-breaking.
const QUESTIONS: FormQuestion[] = [
  q(1, "agents-workflows"),
  q(2, "agents-workflows"),
  q(3, "applications-integration"),
  q(4, "applications-integration"),
  q(5, "applications-integration"),
  q(6, "claude-code"),
  q(7, "eval-testing-debugging"),
  q(8, "model-selection-optimization"),
  q(9, "model-selection-optimization"),
  q(10, "prompt-context-engineering"),
  q(11, "security-safety"),
  q(12, "tools-mcp"),
];

// Answers chosen to produce: Q1,3,4,7,8,11,12 correct; Q2,6,9 incorrect; Q5,10 unanswered.
const ANSWERS = {
  1: ["A"], 2: ["B"], 3: ["A"], 4: ["A"], 6: ["B"], 7: ["A"],
  8: ["A"], 9: ["B"], 11: ["A"], 12: ["A"],
};

const RESULT = computeResult(QUESTIONS, ANSWERS, 90);

describe("computeDomainResults", () => {
  it("assigns every question to exactly one domain and covers all eight present domains", () => {
    const rows = computeDomainResults(QUESTIONS, RESULT.perQuestion);
    expect(rows).toHaveLength(8);
    expect(rows.map((r) => r.domain).sort()).toEqual([...DOMAIN_ORDER].sort());
    const totalAcrossRows = rows.reduce((sum, r) => sum + r.total, 0);
    expect(totalAcrossRows).toBe(QUESTIONS.length);
  });

  it("computes correct/incorrect/unanswered/total/percentage per domain from the exact-set result", () => {
    const rows = computeDomainResults(QUESTIONS, RESULT.perQuestion);
    const byDomain = Object.fromEntries(rows.map((r) => [r.domain, r]));

    expect(byDomain["agents-workflows"]).toMatchObject({ correct: 1, incorrect: 1, unanswered: 0, total: 2, percentage: 50 });
    expect(byDomain["applications-integration"]).toMatchObject({ correct: 2, incorrect: 0, unanswered: 1, total: 3 });
    expect(byDomain["applications-integration"].percentage).toBeCloseTo((2 / 3) * 100, 5);
    expect(byDomain["claude-code"]).toMatchObject({ correct: 0, incorrect: 1, unanswered: 0, total: 1, percentage: 0 });
    expect(byDomain["eval-testing-debugging"]).toMatchObject({ correct: 1, incorrect: 0, unanswered: 0, total: 1, percentage: 100 });
    expect(byDomain["model-selection-optimization"]).toMatchObject({ correct: 1, incorrect: 1, unanswered: 0, total: 2, percentage: 50 });
    expect(byDomain["prompt-context-engineering"]).toMatchObject({ correct: 0, incorrect: 0, unanswered: 1, total: 1, percentage: 0 });
    expect(byDomain["security-safety"]).toMatchObject({ correct: 1, incorrect: 0, unanswered: 0, total: 1, percentage: 100 });
    expect(byDomain["tools-mcp"]).toMatchObject({ correct: 1, incorrect: 0, unanswered: 0, total: 1, percentage: 100 });
  });

  it("reconciles domain totals exactly with the overall result", () => {
    const rows = computeDomainResults(QUESTIONS, RESULT.perQuestion);
    expect(rows.reduce((s, r) => s + r.correct, 0)).toBe(RESULT.correct);
    expect(rows.reduce((s, r) => s + r.incorrect, 0)).toBe(RESULT.incorrect);
    expect(rows.reduce((s, r) => s + r.unanswered, 0)).toBe(RESULT.unanswered);
    expect(rows.reduce((s, r) => s + r.total, 0)).toBe(RESULT.total);
  });

  it("sorts lowest percentage first, breaking ties by blueprint declaration order", () => {
    const rows = computeDomainResults(QUESTIONS, RESULT.perQuestion);
    expect(rows.map((r) => r.domain)).toEqual([
      "claude-code",
      "prompt-context-engineering",
      "agents-workflows",
      "model-selection-optimization",
      "applications-integration",
      "eval-testing-debugging",
      "security-safety",
      "tools-mcp",
    ]);
  });

  it("derives results from the current form only, not the full 371-item bank", () => {
    // A domain with quota 17 (applications-integration) appears here with only 3 questions,
    // proving totals come from the passed-in form, not the bank's full domain membership.
    const rows = computeDomainResults(QUESTIONS, RESULT.perQuestion);
    const row = rows.find((r) => r.domain === "applications-integration")!;
    expect(row.total).toBe(3);
  });
});
