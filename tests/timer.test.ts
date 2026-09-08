import { describe, expect, it } from "vitest";
import { elapsedSeconds, remainingSeconds, RECOMMENDED_SECONDS } from "../src/lib/timer";

describe("timer - derives from an in-memory start timestamp", () => {
  it("computes remaining time based on elapsed time since the original start", () => {
    const start = Date.now() - 30 * 60 * 1000; // started 30 minutes ago
    const now = Date.now();
    const remaining = remainingSeconds(start, now);
    expect(remaining).toBeGreaterThan(89 * 60);
    expect(remaining).toBeLessThanOrEqual(90 * 60);
  });

  it("Timed mode starts at exactly 120 minutes remaining", () => {
    const start = Date.now();
    expect(remainingSeconds(start, start)).toBe(RECOMMENDED_SECONDS);
    expect(RECOMMENDED_SECONDS).toBe(120 * 60);
  });

  it("does not reset when recomputed later - it keeps counting from the same original timestamp", () => {
    const start = Date.now() - 10 * 60 * 1000;
    const firstCheck = remainingSeconds(start, Date.now());
    const secondCheck = remainingSeconds(start, Date.now() + 5000);
    expect(secondCheck).toBeLessThan(firstCheck);
    expect(firstCheck - secondCheck).toBe(5);
  });

  it("clamps remaining time to zero once the recommended duration has fully elapsed, and never goes negative", () => {
    const start = Date.now() - (RECOMMENDED_SECONDS + 600) * 1000;
    expect(remainingSeconds(start, Date.now())).toBe(0);
    const wayPast = Date.now() - (RECOMMENDED_SECONDS + 100000) * 1000;
    expect(remainingSeconds(wayPast, Date.now())).toBe(0);
  });

  it("computes elapsed seconds for completion-time reporting", () => {
    const start = Date.now() - 125 * 1000;
    expect(elapsedSeconds(start, Date.now())).toBeGreaterThanOrEqual(124);
    expect(elapsedSeconds(start, Date.now())).toBeLessThanOrEqual(126);
  });
});
