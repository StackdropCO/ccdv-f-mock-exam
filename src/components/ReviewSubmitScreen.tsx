import { useState } from "react";
import type { ExamState } from "../state/examState";
import type { Question } from "../data/types";
import { ConfirmDialog } from "./ConfirmDialog";
import { ArrowRightIcon, CheckCircleIcon, CircleIcon, FlagIcon } from "./icons";
import btn from "../styles/buttons.module.css";
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

const plural = (count: number, noun: string) => `${count} ${noun}${count === 1 ? "" : "s"}`;

export function ReviewSubmitScreen({ state, questions, actions }: ReviewSubmitScreenProps) {
  const [confirming, setConfirming] = useState(false);

  const unanswered = questions.filter((q) => (state.answers[q.id]?.length ?? 0) === 0);
  const flagged = questions.filter((q) => !!state.flags[q.id]);
  const answeredCount = questions.length - unanswered.length;
  const allAnswered = unanswered.length === 0;
  const noneFlagged = flagged.length === 0;
  const progressPercent = questions.length > 0 ? Math.round((answeredCount / questions.length) * 100) : 0;

  const unansweredHeading = allAnswered
    ? noneFlagged
      ? "All questions answered. Ready when you are."
      : "All questions answered"
    : plural(unanswered.length, "unanswered question");

  const flaggedHeading = noneFlagged ? "No questions flagged" : plural(flagged.length, "flagged question");

  const dialogMessage = allAnswered
    ? "Submitting ends this attempt and shows your score and explanations."
    : `${plural(unanswered.length, "question")} will remain unanswered.\n\nSubmitting ends this attempt and shows your score and explanations.`;

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Review before submitting</h1>
      <p className={styles.supporting}>Check anything you want to revisit, then submit to see your results.</p>

      <div className={styles.progressSection}>
        <p className={styles.progressText}>
          {answeredCount} of {questions.length} answered
        </p>
        <div
          className={styles.progressTrack}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={questions.length}
          aria-valuenow={answeredCount}
          aria-valuetext={`${answeredCount} of ${questions.length} answered`}
        >
          <div className={styles.progressFill} style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      <div className={styles.statusGrid}>
        <div className={styles.statusCard}>
          <div className={styles.statusHeader}>
            {allAnswered ? (
              <CheckCircleIcon className={styles.statusIconDone} />
            ) : (
              <CircleIcon className={styles.statusIconPending} />
            )}
            <h2 className={`${styles.statusHeading} ${allAnswered ? styles.statusHeadingDone : ""}`}>
              {unansweredHeading}
            </h2>
          </div>
          {!allAnswered && (
            <>
              <p className={styles.statusBody}>Go to your first unanswered question.</p>
              <button
                type="button"
                className={btn.secondary}
                onClick={() => actions.goToQuestion(unanswered[0].id)}
                aria-label={`Review unanswered questions, starting at Question ${unanswered[0].id}`}
              >
                Review unanswered
                <ArrowRightIcon />
              </button>
            </>
          )}
        </div>

        <div className={styles.statusCard}>
          <div className={styles.statusHeader}>
            <FlagIcon className={noneFlagged ? styles.statusIconDone : styles.statusIconFlag} />
            <h2 className={`${styles.statusHeading} ${noneFlagged ? styles.statusHeadingDone : ""}`}>
              {flaggedHeading}
            </h2>
          </div>
          {!noneFlagged && (
            <>
              <p className={styles.statusBody}>Go to your first flagged question.</p>
              <button
                type="button"
                className={btn.secondary}
                onClick={() => actions.goToQuestion(flagged[0].id)}
                aria-label={`Review flagged questions, starting at Question ${flagged[0].id}`}
              >
                Review flagged
                <ArrowRightIcon />
              </button>
            </>
          )}
        </div>
      </div>

      <div className={styles.submitSection}>
        <p className={styles.submitCopy}>Submitting ends this attempt and shows your score and explanations.</p>
        {!allAnswered && (
          <p className={styles.submitWarning}>{plural(unanswered.length, "question")} still unanswered.</p>
        )}
        <div className={styles.submitActions}>
          <button type="button" className={btn.secondary} onClick={actions.returnToExam}>
            Back to exam
          </button>
          <button type="button" className={btn.primary} onClick={() => setConfirming(true)}>
            Submit exam
          </button>
        </div>
      </div>

      {confirming && (
        <ConfirmDialog
          title="Submit exam?"
          message={dialogMessage}
          confirmLabel="Submit exam"
          onConfirm={actions.submitExam}
          onCancel={() => setConfirming(false)}
        />
      )}
    </div>
  );
}
