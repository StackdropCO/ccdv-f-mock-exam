import type { Question } from "../data/types";
import type { AnswersMap } from "../lib/scoring";
import { NavigatorGrid } from "./NavigatorGrid";
import styles from "./Navigator.module.css";

interface NavigatorPanelProps {
  questions: Question[];
  currentId: number;
  answers: AnswersMap;
  flags: Record<number, boolean>;
  onJump: (id: number) => void;
  answeredCount: number;
  totalCount: number;
}

export function NavigatorPanel({
  questions,
  currentId,
  answers,
  flags,
  onJump,
  answeredCount,
  totalCount,
}: NavigatorPanelProps) {
  return (
    <aside className={styles.desktopPanel} aria-label="Question navigator panel">
      <div className={styles.panelHeader}>
        <h2 className={styles.panelTitle}>Questions</h2>
        <p className={styles.panelProgress}>
          {answeredCount} of {totalCount} answered
        </p>
      </div>
      <NavigatorGrid questions={questions} currentId={currentId} answers={answers} flags={flags} onJump={onJump} />
    </aside>
  );
}
