import { useState } from "react";
import type { ExamState } from "../state/examState";
import type { Question } from "../data/types";
import { ConfirmDialog } from "./ConfirmDialog";
import btn from "../styles/buttons.module.css";
import navStyles from "./NavigatorGrid.module.css";
import styles from "./ReviewSubmitScreen.module.css";

interface ReviewSubmitScreenProps {
  state: ExamState;
  questions: Question[];
  actions: {
    goToQuestion: (id: number) => void;
    returnToExam: () => void;
    submitExam: () => void;
  };
}

export function ReviewSubmitScreen({ state, questions, actions }: ReviewSubmitScreenProps) {
  const [confirming, setConfirming] = useState(false);

  const unanswered = questions.filter((q) => (state.answers[q.id]?.length ?? 0) === 0);
  const flagged = questions.filter((q) => !!state.flags[q.id]);
  const answeredCount = questions.length - unanswered.length;

  const message =
    unanswered.length > 0
      ? `You have answered ${answeredCount} of ${questions.length} questions.\n${unanswered.length} question${unanswered.length === 1 ? " is" : "s are"} unanswered.\n\nSubmitting is final for this attempt.`
      : "You have answered all questions. Submitting is final for this attempt.";

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Exam Review</h1>

      <div className={styles.summaryRow}>
        <div className={styles.summaryItem}>
          <span className={styles.summaryValue}>{answeredCount}</span>
          <span className={styles.summaryLabel}>Answered</span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.summaryValue}>{unanswered.length}</span>
          <span className={styles.summaryLabel}>Unanswered</span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.summaryValue}>{flagged.length}</span>
          <span className={styles.summaryLabel}>Flagged</span>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Unanswered</h2>
        {unanswered.length === 0 ? (
          <p className={styles.emptyNote}>All questions are answered.</p>
        ) : (
          <div className={styles.chipGrid}>
            {unanswered.map((q) => (
              <button
                key={q.id}
                type="button"
                className={navStyles.cell}
                onClick={() => actions.goToQuestion(q.id)}
                aria-label={`Go to question ${q.id}, unanswered`}
              >
                {q.id}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Flagged</h2>
        {flagged.length === 0 ? (
          <p className={styles.emptyNote}>No questions are flagged.</p>
        ) : (
          <div className={styles.chipGrid}>
            {flagged.map((q) => (
              <button
                key={q.id}
                type="button"
                className={navStyles.cell}
                onClick={() => actions.goToQuestion(q.id)}
                aria-label={`Go to question ${q.id}, flagged for review`}
              >
                {q.id}
                <span className={navStyles.flag} aria-hidden="true">
                  ⚑
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className={styles.actions}>
        <button type="button" className={btn.secondary} onClick={actions.returnToExam}>
          Return to Exam
        </button>
        <button type="button" className={btn.primary} onClick={() => setConfirming(true)}>
          Submit Exam
        </button>
      </div>

      {confirming && (
        <ConfirmDialog
          title="Submit exam?"
          message={message}
          confirmLabel="Submit Exam"
          onConfirm={actions.submitExam}
          onCancel={() => setConfirming(false)}
        />
      )}
    </div>
  );
}
