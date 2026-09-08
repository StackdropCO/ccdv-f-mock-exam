import type { Question } from "./types";

export interface ValidationIssue {
  questionId: number | null;
  message: string;
}

export function validateQuestions(questions: Question[]): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  if (questions.length !== 53) {
    issues.push({ questionId: null, message: `Expected 53 questions, found ${questions.length}` });
  }

  const seenIds = new Set<number>();
  for (let i = 0; i < questions.length; i++) {
    const expectedId = i + 1;
    const q = questions[i];

    if (q.id !== expectedId) {
      issues.push({ questionId: q.id, message: `Question at index ${i} has id ${q.id}, expected ${expectedId} (gap or out-of-order id)` });
    }
    if (seenIds.has(q.id)) {
      issues.push({ questionId: q.id, message: `Duplicate question id ${q.id}` });
    }
    seenIds.add(q.id);

    if (!q.body || q.body.trim().length === 0) {
      issues.push({ questionId: q.id, message: "Missing question body" });
    }
    if (!q.explanation || q.explanation.trim().length === 0) {
      issues.push({ questionId: q.id, message: "Missing explanation" });
    }
    if (!q.options || q.options.length === 0) {
      issues.push({ questionId: q.id, message: "Missing options" });
    }

    const optionIds = new Set(q.options.map((o) => o.id));
    if (optionIds.size !== q.options.length) {
      issues.push({ questionId: q.id, message: "Duplicate option ids" });
    }

    if (!q.correctAnswers || q.correctAnswers.length === 0) {
      issues.push({ questionId: q.id, message: "Missing correctAnswers" });
    }
    for (const letter of q.correctAnswers ?? []) {
      if (!optionIds.has(letter)) {
        issues.push({ questionId: q.id, message: `correctAnswers references non-existent option "${letter}"` });
      }
    }

    if (q.type === "single") {
      if (q.selectCount !== 1) {
        issues.push({ questionId: q.id, message: `Single-choice question has selectCount ${q.selectCount}, expected 1` });
      }
      if (q.correctAnswers.length !== 1) {
        issues.push({ questionId: q.id, message: `Single-choice question has ${q.correctAnswers.length} correct answers, expected 1` });
      }
    } else {
      if (q.selectCount !== q.correctAnswers.length) {
        issues.push({ questionId: q.id, message: `selectCount (${q.selectCount}) does not match correctAnswers.length (${q.correctAnswers.length})` });
      }
      if (q.selectCount < 2) {
        issues.push({ questionId: q.id, message: `Multi-select question has selectCount ${q.selectCount}, expected >= 2` });
      }
    }
  }

  return issues;
}
