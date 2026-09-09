import { useRef, useState } from "react";
import type { ExamState } from "../state/examState";
import type { FormQuestion } from "../data/bankTypes";
import { DOMAIN_LABEL } from "../data/blueprint";
import { formatCompactDuration } from "../lib/timer";
import { computeDomainResults } from "../lib/domainResults";
import { defaultReviewFilter, type FilterKey } from "../lib/reviewFilter";
import { AnswerReviewList } from "./AnswerReviewList";
import { ConfirmDialog } from "./ConfirmDialog";
import btn from "../styles/buttons.module.css";
import styles from "./ResultsScreen.module.css";

const MODE_LABEL: Record<string, string> = {
  timed: "Timed Exam",
  untimed: "Untimed Practice",
};

const plural = (count: number, noun: string) => `${count} ${noun}${count === 1 ? "" : "s"}`;

interface ResultsScreenProps {
  state: ExamState;
  questions: FormQuestion[];
  onRetake: () => void;
}

export function ResultsScreen({ state, questions, onRetake }: ResultsScreenProps) {
  const result = state.result;
  const [filter, setFilter] = useState<FilterKey>(() => (result ? defaultReviewFilter(result) : "all"));
  const [confirmingRetake, setConfirmingRetake] = useState(false);
  const reviewHeadingRef = useRef<HTMLHeadingElement>(null);

  if (!result) return null;

  const domainResults = computeDomainResults(questions, result.perQuestion);

  const primaryFilter = defaultReviewFilter(result);
  const primaryLabel =
    primaryFilter === "incorrect"
      ? `Review ${plural(result.incorrect, "incorrect answer")}`
      : primaryFilter === "unanswered"
        ? "Review unanswered questions"
        : "Review all answers";

  const handlePrimaryReview = () => {
    setFilter(primaryFilter);
    const prefersReducedMotion = typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    reviewHeadingRef.current?.scrollIntoView?.({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
    reviewHeadingRef.current?.focus();
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Your result</h1>
        <p className={styles.meta}>
          {state.mode && MODE_LABEL[state.mode]} · Completed in {formatCompactDuration(result.completionSeconds)}
        </p>

        <div className={styles.scoreComposition}>
          <div className={styles.scoreMain}>
            <span className={styles.scorePercent}>{result.percentage.toFixed(1)}%</span>
            <span className={styles.scoreFraction}>
              {result.correct} of {result.total} correct
            </span>
          </div>

          <div
            className={styles.segmentBar}
            role="img"
            aria-label={`${result.correct} correct, ${result.incorrect} incorrect, ${result.unanswered} unanswered out of ${result.total}`}
          >
            {result.correct > 0 && (
              <span className={styles.segCorrect} style={{ width: `${(result.correct / result.total) * 100}%` }} />
            )}
            {result.incorrect > 0 && (
              <span className={styles.segIncorrect} style={{ width: `${(result.incorrect / result.total) * 100}%` }} />
            )}
            {result.unanswered > 0 && (
              <span
                className={styles.segUnanswered}
                style={{ width: `${(result.unanswered / result.total) * 100}%` }}
              />
            )}
          </div>

          <div className={styles.legendRow}>
            <span className={styles.legendItem}>
              <span className={`${styles.swatch} ${styles.swatchCorrect}`} aria-hidden="true" />
              {result.correct} correct
            </span>
            <span className={styles.legendItem}>
              <span className={`${styles.swatch} ${styles.swatchIncorrect}`} aria-hidden="true" />
              {result.incorrect} incorrect
            </span>
            <span className={styles.legendItem}>
              <span className={`${styles.swatch} ${styles.swatchUnanswered}`} aria-hidden="true" />
              {result.unanswered} unanswered
            </span>
          </div>
        </div>

        <button type="button" className={btn.primary} onClick={handlePrimaryReview}>
          {primaryLabel}
        </button>
      </section>

      <section className={styles.domainSection}>
        <h2 className={styles.sectionTitle}>Performance by domain</h2>
        <p className={styles.sectionSupporting}>See how you performed across the domains included in this mock.</p>
        <div className={styles.domainList}>
          {domainResults.map((d) => (
            <div key={d.domain} className={styles.domainRow}>
              <div className={styles.domainRowHeader}>
                <span className={styles.domainLabel}>
                  <span className={styles.domainName}>{DOMAIN_LABEL[d.domain]}</span>
                  <span className={styles.domainStats}>
                    {d.correct} / {d.total} correct
                  </span>
                </span>
                <span className={styles.domainPercent}>{Math.round(d.percentage)}%</span>
              </div>
              <div className={styles.domainBarTrack}>
                <div className={styles.domainBarFill} style={{ width: `${d.percentage}%` }} />
              </div>
            </div>
          ))}
        </div>
        <p className={styles.domainNote}>Domain percentages reflect this mock only. Smaller domains contain fewer questions.</p>
      </section>

      <section className={styles.reviewSection}>
        <h2 ref={reviewHeadingRef} tabIndex={-1} className={styles.sectionTitle}>
          Review your answers
        </h2>
        <p className={styles.sectionSupporting}>Compare your selections with the correct answers and explanations.</p>
        <AnswerReviewList
          questions={questions}
          answers={state.answers}
          flags={state.flags}
          result={result}
          filter={filter}
          onFilterChange={setFilter}
        />
      </section>

      <div className={styles.retakeSection}>
        <button type="button" className={btn.secondary} onClick={() => setConfirmingRetake(true)}>
          Take another mock
        </button>
        <p className={styles.disclaimer}>
          This is an unofficial mock result, not an official certification score or pass/fail determination.
        </p>
      </div>

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
