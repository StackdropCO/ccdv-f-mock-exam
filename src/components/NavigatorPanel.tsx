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
      <h2 className={styles.panelTitle}>
        Questions ({answeredCount} of {totalCount} answered)
      </h2>
      <NavigatorGrid questions={questions} currentId={currentId} answers={answers} flags={flags} onJump={onJump} />
    </aside>
  );
}
