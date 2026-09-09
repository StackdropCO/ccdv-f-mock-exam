import type { ExamMode } from "../state/examState";
import styles from "./StartScreen.module.css";

export function StartScreen({ onStart }: { onStart: (mode: ExamMode) => void }) {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Practice for the CCDV-F exam</h1>
      <p className={styles.supporting}>
        53 questions covering the exam&rsquo;s topics, with more questions on the areas that count most.
      </p>

      <div className={styles.modeGrid}>
        <button
          type="button"
          className={styles.modeCard}
          onClick={() => onStart("timed")}
          aria-label="Timed Exam. 120 minutes. Practice against the clock."
        >
          <span className={styles.modeCardTitle} aria-hidden="true">
            Timed Exam
          </span>
          <span className={styles.modeCardMeta} aria-hidden="true">
            120 minutes
          </span>
          <span className={styles.modeCardDesc} aria-hidden="true">
            Practice against the clock.
          </span>
        </button>
        <button
          type="button"
          className={styles.modeCard}
          onClick={() => onStart("untimed")}
          aria-label="Untimed Practice. No time limit. Take your time with each question."
        >
          <span className={styles.modeCardTitle} aria-hidden="true">
            Untimed Practice
          </span>
          <span className={styles.modeCardMeta} aria-hidden="true">
            No time limit
          </span>
          <span className={styles.modeCardDesc} aria-hidden="true">
            Take your time with each question.
          </span>
        </button>
      </div>

      <p className={styles.note}>Review your answers and explanations after you submit.</p>
      <p className={styles.note}>Leaving or refreshing clears your current attempt.</p>
    </div>
  );
}
