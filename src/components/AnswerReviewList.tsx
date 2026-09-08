import { useState } from "react";
import type { Question } from "../data/types";
import type { AnswersMap, ExamResult, QuestionStatus } from "../lib/scoring";
import { ExamMarkdown } from "./ExamMarkdown";
import styles from "./AnswerReviewList.module.css";

type FilterKey = "all" | "incorrect" | "unanswered" | "flagged";

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "incorrect", label: "Incorrect" },
  { key: "unanswered", label: "Unanswered" },
  { key: "flagged", label: "Flagged" },
];

const STATUS_LABEL: Record<QuestionStatus, string> = {
  correct: "Correct",
  incorrect: "Incorrect",
  unanswered: "Unanswered",
};

const STATUS_CLASS: Record<QuestionStatus, string> = {
  correct: styles.statusCorrect,
  incorrect: styles.statusIncorrect,
  unanswered: styles.statusUnanswered,
};

function formatAnswer(letters: string[]): string {
  return letters.length > 0 ? letters.join(" + ") : "No answer selected";
}

interface AnswerReviewListProps {
  questions: Question[];
  answers: AnswersMap;
  flags: Record<number, boolean>;
  result: ExamResult;
}

export function AnswerReviewList({ questions, answers, flags, result }: AnswerReviewListProps) {
  const [filter, setFilter] = useState<FilterKey>("all");

  const visible = questions.filter((q) => {
    const status = result.perQuestion[q.id];
    if (filter === "incorrect") return status === "incorrect";
    if (filter === "unanswered") return status === "unanswered";
    if (filter === "flagged") return !!flags[q.id];
    return true;
  });

  return (
    <div>
      <div className={styles.filterBar} role="group" aria-label="Filter reviewed questions">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            className={`${styles.filterButton} ${filter === f.key ? styles.active : ""}`}
            onClick={() => setFilter(f.key)}
            aria-pressed={filter === f.key}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className={styles.list}>
        {visible.length === 0 && <p>No questions match this filter.</p>}
        {visible.map((q) => {
          const status = result.perQuestion[q.id];
          const userAnswer = answers[q.id] ?? [];
          return (
            <article key={q.id} className={styles.card} aria-labelledby={`review-q-${q.id}`}>
              <div className={styles.cardHeader}>
                <div className={styles.cardHeaderLeft}>
                  <h3 id={`review-q-${q.id}`} className={styles.questionNumber}>
                    Question {q.id}
                  </h3>
                  {flags[q.id] && (
                    <span className={styles.flagBadge}>
                      <span aria-hidden="true">⚑</span> Flagged
                    </span>
                  )}
                </div>
                <span className={`${styles.statusBadge} ${STATUS_CLASS[status]}`}>{STATUS_LABEL[status]}</span>
              </div>

              <div className={styles.cardBody}>
                <ExamMarkdown>{q.body}</ExamMarkdown>
              </div>

              <ul className={styles.optionList}>
                {q.options.map((opt) => (
                  <li key={opt.id}>
                    <span className={styles.optionLetter}>{opt.id}.</span>
                    <ExamMarkdown>{opt.body}</ExamMarkdown>
                  </li>
                ))}
              </ul>

              <div className={styles.answerGrid}>
                <div>
                  <span className={styles.answerLabel}>Your answer</span>
                  <span className={styles.answerValue}>{formatAnswer(userAnswer)}</span>
                </div>
                <div>
                  <span className={styles.answerLabel}>Correct answer</span>
                  <span className={styles.answerValue}>{formatAnswer(q.correctAnswers)}</span>
                </div>
              </div>

              <div>
                <span className={styles.explanationLabel}>Explanation</span>
                <ExamMarkdown>{q.explanation}</ExamMarkdown>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
