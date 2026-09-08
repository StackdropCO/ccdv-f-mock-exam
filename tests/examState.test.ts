import { describe, expect, it } from "vitest";
import { createInitialState, examReducer } from "../src/state/examState";

describe("examReducer - starting an attempt", () => {
  it("starts a Timed Exam with the chosen mode and a start timestamp", () => {
    const state = examReducer(createInitialState(), {
      type: "START_EXAM",
      mode: "timed",
      startTimestamp: 1000,
    });
    expect(state.mode).toBe("timed");
    expect(state.started).toBe(true);
    expect(state.startTimestamp).toBe(1000);
    expect(state.submitted).toBe(false);
  });

  it("starts an Untimed Practice attempt with the chosen mode", () => {
    const state = examReducer(createInitialState(), {
      type: "START_EXAM",
      mode: "untimed",
      startTimestamp: 2000,
    });
    expect(state.mode).toBe("untimed");
    expect(state.started).toBe(true);
  });
});

describe("examReducer - mode stability while navigating", () => {
  it("keeps the selected mode unchanged across answering, flagging, and navigation", () => {
    let state = examReducer(createInitialState(), { type: "START_EXAM", mode: "timed", startTimestamp: 1000 });
    state = examReducer(state, { type: "SELECT_SINGLE", questionId: 1, optionId: "C" });
    state = examReducer(state, { type: "NEXT" });
    state = examReducer(state, { type: "TOGGLE_FLAG", id: 2 });
    state = examReducer(state, { type: "GOTO_QUESTION", id: 10 });
    state = examReducer(state, { type: "GOTO_REVIEW" });
    state = examReducer(state, { type: "RETURN_TO_EXAM" });
    expect(state.mode).toBe("timed");
    expect(state.startTimestamp).toBe(1000);
  });
});

describe("examReducer - does not auto-submit as time passes", () => {
  it("stays unsubmitted no matter how much time has elapsed since start, until SUBMIT is dispatched", () => {
    const longAgo = Date.now() - 10 * 60 * 60 * 1000; // 10 hours ago, well past 120 minutes
    let state = examReducer(createInitialState(), { type: "START_EXAM", mode: "timed", startTimestamp: longAgo });
    state = examReducer(state, { type: "NEXT" });
    state = examReducer(state, { type: "PREV" });
    state = examReducer(state, { type: "GOTO_QUESTION", id: 5 });
    expect(state.submitted).toBe(false);
    expect(state.result).toBeNull();
  });
});

describe("examReducer - submission", () => {
  it("marks the attempt submitted and stores the result", () => {
    let state = examReducer(createInitialState(), { type: "START_EXAM", mode: "untimed", startTimestamp: 1000 });
    const result = {
      correct: 1,
      incorrect: 0,
      unanswered: 52,
      total: 53,
      percentage: 1.9,
      completionSeconds: 60,
      perQuestion: {},
    };
    state = examReducer(state, { type: "SUBMIT", submittedAt: 2000, result });
    expect(state.submitted).toBe(true);
    expect(state.submittedAt).toBe(2000);
    expect(state.result).toEqual(result);
    expect(state.reviewing).toBe(false);
  });
});

describe("examReducer - RESET (Exit Exam / Retake)", () => {
  it("clears mode, timer, answers, flags, and submission state back to the mode-selection start state", () => {
    let state = examReducer(createInitialState(), { type: "START_EXAM", mode: "timed", startTimestamp: 1000 });
    state = examReducer(state, { type: "SELECT_SINGLE", questionId: 1, optionId: "A" });
    state = examReducer(state, { type: "TOGGLE_FLAG", id: 3 });
    state = examReducer(state, { type: "RESET" });

    expect(state.mode).toBeNull();
    expect(state.started).toBe(false);
    expect(state.startTimestamp).toBeNull();
    expect(state.answers).toEqual({});
    expect(state.flags).toEqual({});
    expect(state.submitted).toBe(false);
    expect(state.currentQuestion).toBe(1);
  });

  it("returns to the same shape as the initial mode-selection state", () => {
    let state = examReducer(createInitialState(), { type: "START_EXAM", mode: "untimed", startTimestamp: 5000 });
    state = examReducer(state, { type: "RESET" });
    expect(state).toEqual(createInitialState());
  });
});
