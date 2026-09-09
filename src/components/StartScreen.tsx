import type { ExamMode } from "../state/examState";
import { QUESTION_BANK } from "../data/questionBank";
import { FORM_SIZE } from "../data/blueprint";
import { ArrowRightIcon, BookOpenIcon, CheckCircleIcon, ClockIcon, StackIcon } from "./icons";
import btn from "../styles/buttons.module.css";
import styles from "./StartScreen.module.css";

const BANK_SIZE = QUESTION_BANK.length;
const MOCKS_PER_CYCLE = Math.floor(BANK_SIZE / FORM_SIZE);

export function StartScreen({ onStart }: { onStart: (mode: ExamMode) => void }) {
  return (
    <div className={styles.wrap}>
      <span className={styles.accentBar} aria-hidden="true" />
      <h1 className={styles.title}>Practice for the CCDV-F exam</h1>
      <p className={styles.supporting}>
        53 questions covering the exam&rsquo;s topics, with more questions on the areas that count most.
      </p>

      <div className={styles.modeGrid}>
        <div className={styles.modeCard}>
          <div className={styles.modeCardTop}>
            <span className={styles.modeIconChip}>
              <ClockIcon className={styles.modeIcon} />
            </span>
            <span className={styles.durationBadge}>120 minutes</span>
          </div>
          <h2 className={styles.modeCardTitle}>Timed Exam</h2>
          <p className={styles.modeCardDesc}>Practice against the clock.</p>
          <button type="button" className={`${btn.primary} ${styles.startButton}`} onClick={() => onStart("timed")}>
            Start timed exam
            <ArrowRightIcon />
          </button>
        </div>

        <div className={styles.modeCard}>
          <div className={styles.modeCardTop}>
            <span className={styles.modeIconChip}>
              <BookOpenIcon className={styles.modeIcon} />
            </span>
            <span className={styles.durationBadge}>No time limit</span>
          </div>
          <h2 className={styles.modeCardTitle}>Untimed Practice</h2>
          <p className={styles.modeCardDesc}>Take your time with each question.</p>
          <button type="button" className={`${btn.primary} ${styles.startButton}`} onClick={() => onStart("untimed")}>
            Start practice
            <ArrowRightIcon />
          </button>
        </div>
      </div>

      <div className={styles.notes}>
        <CheckCircleIcon className={styles.notesIcon} />
        <div>
          <p className={styles.note}>Review your answers and explanations after you submit.</p>
          <p className={styles.note}>Leaving or refreshing clears your current attempt.</p>
        </div>
      </div>

      <div className={styles.bankSummary}>
        <span className={styles.bankSummaryIconChip}>
          <StackIcon className={styles.bankSummaryIcon} />
        </span>
        <div>
          <p className={styles.bankSummaryHeading}>
            {BANK_SIZE} questions. {MOCKS_PER_CYCLE} fresh mocks.
          </p>
          <p className={styles.bankSummaryBody}>
            No repeats within a mock or across seven completed mocks. Then a new cycle begins.
          </p>
        </div>
      </div>
    </div>
  );
}
