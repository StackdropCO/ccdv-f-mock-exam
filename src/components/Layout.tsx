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
  children: ReactNode;
}

export function Layout({ modeLabel, timerStartTimestamp, onExitExam, theme, onToggleTheme, children }: LayoutProps) {
  return (
    <>
      <header className={styles.header}>
        <p className={styles.title}>
          <span className={styles.titleAccent}>CCDV-F</span> Final Mock Exam
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
          Unofficial practice exam. Not affiliated with or endorsed by Anthropic or Pearson VUE.
        </p>
      </footer>
    </>
  );
}
