import type { ExamMode } from "../state/examState";
import styles from "./StartScreen.module.css";

export function StartScreen({ onStart }: { onStart: (mode: ExamMode) => void }) {
  return (
    <div className={styles.wrap}>
      <p className={styles.eyebrow}>Claude Certified Developer &ndash; Foundations</p>
      <h1 className={styles.title}>Final Mock Exam</h1>

      <div className={styles.metaRow}>
        <span className={styles.metaItem}>
          <strong>53</strong> Questions
        </span>
      </div>

      <p className={styles.modeHeading}>Choose your mode</p>
      <div className={styles.modeGrid}>
        <button
          type="button"
          className={styles.modeCard}
          onClick={() => onStart("timed")}
          aria-label="Timed Exam. 120 minutes. Take the mock under realistic time pressure."
        >
          <span className={styles.modeCardTitle} aria-hidden="true">
            Timed Exam
          </span>
          <span className={styles.modeCardMeta} aria-hidden="true">
            120 minutes
          </span>
          <span className={styles.modeCardDesc} aria-hidden="true">
            Take the mock under realistic time pressure.
          </span>
        </button>
        <button
          type="button"
          className={styles.modeCard}
          onClick={() => onStart("untimed")}
          aria-label="Untimed Practice. No time limit. Work through the same exam at your own pace."
        >
          <span className={styles.modeCardTitle} aria-hidden="true">
            Untimed Practice
          </span>
          <span className={styles.modeCardMeta} aria-hidden="true">
            No time limit
          </span>
          <span className={styles.modeCardDesc} aria-hidden="true">
            Work through the same exam at your own pace.
          </span>
        </button>
      </div>
      <p className={styles.noSaveNote}>Progress is not saved if you leave or refresh the page.</p>

      <ul className={styles.list}>
        <li>Includes single-choice and multiple-response (Select TWO / Select THREE) questions.</li>
        <li>Select TWO / Select THREE questions use exact-set grading &mdash; no partial credit.</li>
        <li>Correct answers and explanations appear only after you submit.</li>
        <li>No login required.</li>
      </ul>

      <p className={styles.disclaimerBox}>
        Unofficial practice exam. Not affiliated with or endorsed by Anthropic or Pearson VUE.
      </p>
    </div>
  );
}
