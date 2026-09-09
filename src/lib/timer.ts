export const RECOMMENDED_SECONDS = 120 * 60;

export function remainingSeconds(startTimestamp: number, now: number): number {
  const elapsed = Math.floor((now - startTimestamp) / 1000);
  return Math.max(0, RECOMMENDED_SECONDS - elapsed);
}

export function elapsedSeconds(startTimestamp: number, now: number): number {
  return Math.max(0, Math.floor((now - startTimestamp) / 1000));
}

export function formatDuration(totalSeconds: number): string {
  const s = Math.max(0, Math.floor(totalSeconds));
  const hours = Math.floor(s / 3600);
  const minutes = Math.floor((s % 3600) / 60);
  const seconds = s % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

// A compact MM:SS (or H:MM:SS past an hour) rendering for prose, e.g. "Completed in 25:27" —
// distinct from formatDuration's always-HH:MM:SS countdown format used by the exam timer.
export function formatCompactDuration(totalSeconds: number): string {
  const s = Math.max(0, Math.floor(totalSeconds));
  const hours = Math.floor(s / 3600);
  const minutes = Math.floor((s % 3600) / 60);
  const seconds = s % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");
  return hours > 0 ? `${hours}:${pad(minutes)}:${pad(seconds)}` : `${minutes}:${pad(seconds)}`;
}
