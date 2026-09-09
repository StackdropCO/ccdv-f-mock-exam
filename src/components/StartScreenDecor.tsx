import styles from "./StartScreenDecor.module.css";

/**
 * Purely decorative background for the start screen. Rendered as a Layout backdrop so it
 * spans the whole page and runs behind the header, rather than starting below it.
 */
export function StartScreenDecor() {
  return (
    <div className={styles.decor} aria-hidden="true">
      <div className={styles.decorGrid} />
      <div className={styles.decorGlow} />
      <div className={styles.decorOrbit}>
        <span className={styles.decorRing} />
        <span className={styles.decorRing} />
        <span className={styles.decorRing} />
        <span className={`${styles.decorNode} ${styles.decorNode1}`} />
        <span className={`${styles.decorNode} ${styles.decorNode2}`} />
        <span className={`${styles.decorNode} ${styles.decorNode3}`} />
      </div>
    </div>
  );
}
