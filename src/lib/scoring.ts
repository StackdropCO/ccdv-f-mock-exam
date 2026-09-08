import type { Question } from "../data/types";

export type QuestionStatus = "correct" | "incorrect" | "unanswered";

export type AnswersMap = Record<number, string[]>;

function sortedEqual(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false;
  const sa = [...a].sort();
  const sb = [...b].sort();
  return sa.every((v, i) => v === sb[i]);
}

export function gradeQuestion(question: Question, selected: string[] | undefined): QuestionStatus {
  if (!selected || selected.length === 0) return "unanswered";
  return sortedEqual(selected, question.correctAnswers) ? "correct" : "incorrect";
}

export interface ExamResult {
  correct: number;
  incorrect: number;
  unanswered: number;
  total: number;
  percentage: number;
  completionSeconds: number;
  perQuestion: Record<number, QuestionStatus>;
}

export function computeResult(
  questions: Question[],
  answers: AnswersMap,
  completionSeconds: number
): ExamResult {
  const perQuestion: Record<number, QuestionStatus> = {};
  let correct = 0;
  let incorrect = 0;
  let unanswered = 0;

  for (const q of questions) {
    const status = gradeQuestion(q, answers[q.id]);
    perQuestion[q.id] = status;
    if (status === "correct") correct++;
    else if (status === "incorrect") incorrect++;
    else unanswered++;
  }

  const total = questions.length;
  const percentage = total === 0 ? 0 : (correct / total) * 100;

  return {
    correct,
    incorrect,
    unanswered,
    total,
    percentage,
    completionSeconds,
    perQuestion,
  };
}
