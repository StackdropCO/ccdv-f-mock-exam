import type { Question } from "../data/types";
import type { AnswersMap } from "../lib/scoring";
import styles from "./NavigatorGrid.module.css";

interface NavigatorGridProps {
  questions: Question[];
  currentId: number;
  answers: AnswersMap;
  flags: Record<number, boolean>;
  onJump: (id: number) => void;
}

export function NavigatorGrid({ questions, currentId, answers, flags, onJump }: NavigatorGridProps) {
  return (
    <>
      <div className={styles.grid} role="group" aria-label="Question navigator">
        {questions.map((q) => {
          const isAnswered = (answers[q.id]?.length ?? 0) > 0;
          const isCurrent = q.id === currentId;
          const isFlagged = !!flags[q.id];
          const label = `Question ${q.id}${isCurrent ? ", current" : ""}, ${isAnswered ? "answered" : "unanswered"}${isFlagged ? ", flagged for review" : ""}`;
          return (
            <button
              key={q.id}
              type="button"
              className={`${styles.cell} ${isAnswered ? styles.answered : ""} ${isCurrent ? styles.current : ""}`}
              onClick={() => onJump(q.id)}
              aria-label={label}
              aria-current={isCurrent ? "true" : undefined}
            >
              {q.id}
              {isAnswered && (
                <span className={styles.dot} aria-hidden="true">
                  ●
                </span>
              )}
              {isFlagged && (
                <span className={styles.flag} aria-hidden="true">
                  ⚑
                </span>
              )}
            </button>
          );
        })}
      </div>
      <div className={styles.legend}>
        <span className={styles.legendItem}>
          <span className={`${styles.legendSwatch}`} aria-hidden="true" />
          Unanswered
        </span>
        <span className={styles.legendItem}>
          <span className={`${styles.legendSwatch} ${styles.answered}`} aria-hidden="true">
            ●
          </span>
          Answered
        </span>
        <span className={styles.legendItem}>
          <span aria-hidden="true">⚑</span>
          Flagged
        </span>
        <span className={styles.legendItem}>
          <span className={`${styles.legendSwatch} ${styles.current}`} aria-hidden="true" />
          Current
        </span>
      </div>
    </>
  );
}
