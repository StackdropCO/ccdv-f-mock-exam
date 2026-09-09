import type { ReactNode } from "react";
import type { Theme } from "../lib/theme";
import { ThemeToggle } from "./ThemeToggle";
import { TimerDisplay } from "./TimerDisplay";
import styles from "./Layout.module.css";

interface LayoutProps {
  modeLabel?: string;
  timerStartTimestamp?: number | null;
  onExitExam?: () => void;
  theme: Theme;
  onToggleTheme: () => void;
  /** Decorative background painted behind every band of the layout. */
  backdrop?: ReactNode;
  children: ReactNode;
}

export function Layout({
  modeLabel,
  timerStartTimestamp,
  onExitExam,
  theme,
  onToggleTheme,
  backdrop,
  children,
}: LayoutProps) {
  return (
    <div className={styles.shell}>
      {backdrop}
      <header className={backdrop ? `${styles.header} ${styles.headerSeamless}` : styles.header}>
        <p className={styles.title}>
          <span className={styles.titleAccent}>CCDV-F</span> Practice
          <span className={styles.attribution}>by Stackdrop</span>
        </p>
        <div className={styles.headerRight}>
          {modeLabel && <span className={styles.modeIndicator}>{modeLabel}</span>}
          {timerStartTimestamp != null && <TimerDisplay startTimestamp={timerStartTimestamp} />}
          {onExitExam && (
            <button type="button" className={styles.exitLink} onClick={onExitExam}>
              Exit Exam
            </button>
          )}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p className={styles.disclaimer}>
          Independent practice material. Not affiliated with or endorsed by Anthropic or Pearson VUE.
        </p>
      </footer>
    </div>
  );
}
