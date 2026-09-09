import { useState } from "react";
import type { ExamState } from "../state/examState";
import type { Question } from "../data/types";
import { formatDuration } from "../lib/timer";
import { AnswerReviewList } from "./AnswerReviewList";
import { ConfirmDialog } from "./ConfirmDialog";
import btn from "../styles/buttons.module.css";
import styles from "./ResultsScreen.module.css";

const MODE_LABEL: Record<string, string> = {
  timed: "Timed Exam",
  untimed: "Untimed Practice",
};

interface ResultsScreenProps {
  state: ExamState;
  questions: Question[];
  onRetake: () => void;
}

export function ResultsScreen({ state, questions, onRetake }: ResultsScreenProps) {
  const [reviewing, setReviewing] = useState(false);
  const [confirmingRetake, setConfirmingRetake] = useState(false);

  const result = state.result;
  if (!result) return null;

  return (
    <div className={styles.page}>
      <h1 className={styles.scoreLabel}>Mock exam score</h1>
      {state.mode && <p className={styles.modeLabel}>Mode: {MODE_LABEL[state.mode]}</p>}
      <div className={styles.scoreRow}>
        <span className={styles.scoreFraction}>
          {result.correct} / {result.total}
        </span>
        <span className={styles.scorePercent}>{result.percentage.toFixed(1)}%</span>
      </div>

      <div className={styles.statsRow}>
        <div className={styles.statItem}>
          <span className={styles.statValue}>{result.correct}</span>
          <span className={styles.statLabel}>Correct</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statValue}>{result.incorrect}</span>
          <span className={styles.statLabel}>Incorrect</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statValue}>{result.unanswered}</span>
          <span className={styles.statLabel}>Unanswered</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statValue}>{formatDuration(result.completionSeconds)}</span>
          <span className={styles.statLabel}>Completion time</span>
        </div>
      </div>

      <p className={styles.disclaimer}>
        This is an unofficial mock exam score, not an official certification result or pass/fail determination.
      </p>

      <div className={styles.actions}>
        <button type="button" className={btn.primary} onClick={() => setReviewing((r) => !r)}>
          {reviewing ? "Hide Review" : "Review Answers"}
        </button>
        <button type="button" className={btn.secondary} onClick={() => setConfirmingRetake(true)}>
          Take another mock
        </button>
      </div>

      {reviewing && (
        <div>
          <h2 className={styles.reviewHeading}>Answer Review</h2>
          <AnswerReviewList questions={questions} answers={state.answers} flags={state.flags} result={result} />
        </div>
      )}

      {confirmingRetake && (
        <ConfirmDialog
          title="Take another mock?"
          message="This will clear your answers, flags, and score, and return you to the start screen to choose Timed or Untimed again."
          confirmLabel="Take another mock"
          destructive
          onConfirm={onRetake}
          onCancel={() => setConfirmingRetake(false)}
        />
      )}
    </div>
  );
}
