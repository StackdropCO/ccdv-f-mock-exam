import { useEffect, useState } from "react";
import { formatDuration, remainingSeconds } from "../lib/timer";
import styles from "./TimerDisplay.module.css";

export function TimerDisplay({ startTimestamp }: { startTimestamp: number }) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const remaining = remainingSeconds(startTimestamp, now);
  const isElapsed = remaining <= 0;

  return (
    <div>
      <div className={`${styles.timer} ${isElapsed ? styles.elapsed : ""}`}>
        <span className={styles.value}>{formatDuration(remaining)}</span>
        <span>remaining</span>
      </div>
      {isElapsed && <p className={styles.notice}>Recommended exam time has elapsed.</p>}
    </div>
  );
}
