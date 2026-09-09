import type { ExamResult } from "./scoring";

export type FilterKey = "incorrect" | "unanswered" | "correct" | "flagged" | "all";

export const REVIEW_FILTERS: { key: FilterKey; label: string }[] = [
  { key: "incorrect", label: "Incorrect" },
  { key: "unanswered", label: "Unanswered" },
  { key: "correct", label: "Correct" },
  { key: "flagged", label: "Flagged" },
  { key: "all", label: "All" },
];

/** The filter the review section opens to: incorrect first, then unanswered, else all. */
export function defaultReviewFilter(result: ExamResult): FilterKey {
  if (result.incorrect > 0) return "incorrect";
  if (result.unanswered > 0) return "unanswered";
  return "all";
}

export function reviewStatusText(filter: FilterKey, count: number): string {
  const plural = (n: number, noun: string) => `${n} ${noun}${n === 1 ? "" : "s"}`;
  if (filter === "all") return `Showing all ${plural(count, "question")}`;
  const label = REVIEW_FILTERS.find((f) => f.key === filter)!.label.toLowerCase();
  return `Showing ${plural(count, `${label} question`)}`;
}
