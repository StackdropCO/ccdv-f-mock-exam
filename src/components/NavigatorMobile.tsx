import { useEffect, useRef, useState } from "react";
import type { Question } from "../data/types";
import type { AnswersMap } from "../lib/scoring";
import { useFocusTrap } from "../hooks/useFocusTrap";
import { NavigatorGrid } from "./NavigatorGrid";
import styles from "./Navigator.module.css";

interface NavigatorMobileProps {
  questions: Question[];
  currentId: number;
  answers: AnswersMap;
  flags: Record<number, boolean>;
  onJump: (id: number) => void;
  answeredCount: number;
  totalCount: number;
}

export function NavigatorMobile({
  questions,
  currentId,
  answers,
  flags,
  onJump,
  answeredCount,
  totalCount,
}: NavigatorMobileProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const hasOpenedRef = useRef(false);
  useFocusTrap(drawerRef, open);

  useEffect(() => {
    if (open) {
      hasOpenedRef.current = true;
      closeRef.current?.focus();
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }
    if (hasOpenedRef.current) {
      triggerRef.current?.focus({ preventScroll: true });
    }
  }, [open]);

  const jumpAndClose = (id: number) => {
    onJump(id);
    setOpen(false);
  };

  return (
    <div className={styles.mobileTrigger}>
      <button
        ref={triggerRef}
        type="button"
        className={styles.triggerButton}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
      >
        Questions ({answeredCount}/{totalCount})
      </button>

      {open && (
        <>
          <div className={styles.backdrop} onClick={() => setOpen(false)} />
          <div ref={drawerRef} className={styles.drawer} role="dialog" aria-modal="true" aria-label="Question navigator">
            <div className={styles.drawerHeader}>
              <h2 className={styles.drawerTitle}>Questions</h2>
              <button
                ref={closeRef}
                type="button"
                className={styles.closeButton}
                onClick={() => setOpen(false)}
                aria-label="Close question navigator"
              >
                ×
              </button>
            </div>
            <NavigatorGrid
              questions={questions}
              currentId={currentId}
              answers={answers}
              flags={flags}
              onJump={jumpAndClose}
            />
          </div>
        </>
      )}
    </div>
  );
}
