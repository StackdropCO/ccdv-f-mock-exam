import type { ExamMode } from "../state/examState";
import { QUESTION_BANK } from "../data/questionBank";
import { FORM_SIZE } from "../data/blueprint";
import { AlertCircleIcon, ArrowRightIcon, BookOpenIcon, CheckCircleIcon, ClockIcon } from "./icons";
import styles from "./StartScreen.module.css";

const BANK_SIZE = QUESTION_BANK.length;
const MOCKS_PER_CYCLE = Math.floor(BANK_SIZE / FORM_SIZE);

export function StartScreen({ onStart }: { onStart: (mode: ExamMode) => void }) {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.intro}>
          <span className={styles.accentBar} aria-hidden="true" />
          <p className={styles.eyebrow}>Claude Certified Developer &mdash; Foundations</p>
          <h1 className={styles.heading}>
            <span className={styles.headingSans}>Practice for the</span>{" "}
            <span className={styles.headingSerif}>CCDV-F exam.</span>
          </h1>
          <p className={styles.supporting}>
            A focused 53-question mock shaped around the exam&rsquo;s domains. Review every answer when you finish.
          </p>
        </div>

        <div className={styles.modes}>
          <h2 className={styles.modesHeading}>Choose a mode</h2>
          <p className={styles.modesSupporting}>Same question mix. Different pace.</p>

          <div className={styles.modeRow}>
            <span className={styles.modeIcon}>
              <ClockIcon />
            </span>
            <div className={styles.modeInfo}>
              <div className={styles.modeTitleRow}>
                <span className={styles.modeTitle}>Timed Exam</span>
                <span className={styles.modeMeta}>120 minutes</span>
              </div>
              <p className={styles.modeDesc}>Practice at exam pace.</p>
            </div>
            <button
              type="button"
              className={`${styles.modeStart} ${styles.modeStartPrimary}`}
              onClick={() => onStart("timed")}
              aria-label="Start timed exam"
            >
              Start
              <ArrowRightIcon />
            </button>
          </div>

          <div className={styles.modeDivider} aria-hidden="true" />

          <div className={styles.modeRow}>
            <span className={styles.modeIcon}>
              <BookOpenIcon />
            </span>
            <div className={styles.modeInfo}>
              <div className={styles.modeTitleRow}>
                <span className={styles.modeTitle}>Untimed Practice</span>
                <span className={styles.modeMeta}>No time limit</span>
              </div>
              <p className={styles.modeDesc}>Work through every question.</p>
            </div>
            <button
              type="button"
              className={styles.modeStart}
              onClick={() => onStart("untimed")}
              aria-label="Start untimed practice"
            >
              Start
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.specRail}>
        <div className={styles.specItem}>
          <span className={styles.specNumber}>{FORM_SIZE}</span>
          <span className={styles.specLabel}>Questions per mock</span>
        </div>
        <div className={styles.specItem}>
          <span className={styles.specNumber}>{BANK_SIZE}</span>
          <span className={styles.specLabel}>Question bank</span>
        </div>
        <div className={styles.specItem}>
          <span className={styles.specNumber}>{MOCKS_PER_CYCLE}</span>
          <span className={styles.specLabel}>No-repeat mocks</span>
        </div>
        <p className={styles.specNote}>
          No repeats within a mock or across seven completed mocks in this browser. Then a new cycle begins.
        </p>
      </div>

      <div className={styles.utilityNotes}>
        <span className={styles.utilityNote}>
          <CheckCircleIcon className={styles.utilityIcon} />
          Answers and explanations after submission
        </span>
        <span className={styles.utilityNote}>
          <AlertCircleIcon className={styles.utilityIcon} />
          Refreshing or leaving clears your current attempt
        </span>
      </div>
    </div>
  );
}
