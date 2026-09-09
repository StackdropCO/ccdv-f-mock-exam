import type { FormQuestion } from "../data/bankTypes";
import { DOMAIN_ORDER, type Domain } from "../data/blueprint";
import type { QuestionStatus } from "./scoring";

export interface DomainResult {
  domain: Domain;
  correct: number;
  incorrect: number;
  unanswered: number;
  total: number;
  percentage: number;
}

/**
 * Aggregates a completed form's per-question results by domain, using only the current
 * submitted form's questions and their already-computed statuses (no re-grading, no lookup
 * against the full bank). Rows are sorted lowest percentage first, with the blueprint's
 * declared domain order breaking ties deterministically.
 */
export function computeDomainResults(
  questions: readonly FormQuestion[],
  perQuestion: Record<number, QuestionStatus>
): DomainResult[] {
  const buckets = new Map<Domain, { correct: number; incorrect: number; unanswered: number; total: number }>();
  for (const domain of DOMAIN_ORDER) buckets.set(domain, { correct: 0, incorrect: 0, unanswered: 0, total: 0 });

  for (const q of questions) {
    const bucket = buckets.get(q.domain);
    if (!bucket) continue;
    bucket.total++;
    const status = perQuestion[q.id];
    if (status === "correct") bucket.correct++;
    else if (status === "incorrect") bucket.incorrect++;
    else bucket.unanswered++;
  }

  const withOrder = DOMAIN_ORDER.map((domain, order) => {
    const b = buckets.get(domain)!;
    return { domain, order, ...b, percentage: b.total > 0 ? (b.correct / b.total) * 100 : 0 };
  }).filter((r) => r.total > 0);

  withOrder.sort((a, b) => a.percentage - b.percentage || a.order - b.order);

  return withOrder.map(({ domain, correct, incorrect, unanswered, total, percentage }) => ({
    domain,
    correct,
    incorrect,
    unanswered,
    total,
    percentage,
  }));
}
