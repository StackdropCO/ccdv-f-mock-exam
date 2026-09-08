import { act, cleanup, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useExamState } from "../src/hooks/useExamState";

afterEach(() => cleanup());

describe("useExamState - mode selection", () => {
  it("starts a Timed Exam and reports it as the active screen", () => {
    const { result } = renderHook(() => useExamState());
    act(() => result.current.actions.startExam("timed"));
    expect(result.current.state.mode).toBe("timed");
    expect(result.current.screen).toBe("exam");
    expect(result.current.isUnfinished).toBe(true);
  });

  it("starts an Untimed Practice attempt", () => {
    const { result } = renderHook(() => useExamState());
    act(() => result.current.actions.startExam("untimed"));
    expect(result.current.state.mode).toBe("untimed");
    expect(result.current.screen).toBe("exam");
  });

  it("keeps the chosen mode stable while navigating between questions", () => {
    const { result } = renderHook(() => useExamState());
    act(() => result.current.actions.startExam("timed"));
    act(() => result.current.actions.next());
    act(() => result.current.actions.goToQuestion(20));
    act(() => result.current.actions.toggleFlag(20));
    expect(result.current.state.mode).toBe("timed");
  });
});

describe("useExamState - retake / exit returns to mode selection", () => {
  it("resetToStart clears the attempt and returns to the start screen", () => {
    const { result } = renderHook(() => useExamState());
    act(() => result.current.actions.startExam("timed"));
    act(() => result.current.actions.selectSingle(1, "C"));
    act(() => result.current.actions.resetToStart());
    expect(result.current.screen).toBe("start");
    expect(result.current.state.mode).toBeNull();
    expect(result.current.state.answers).toEqual({});
  });
});

describe("useExamState - beforeunload guard", () => {
  let addSpy: ReturnType<typeof vi.spyOn>;
  let removeSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    addSpy = vi.spyOn(window, "addEventListener");
    removeSpy = vi.spyOn(window, "removeEventListener");
  });

  afterEach(() => {
    addSpy.mockRestore();
    removeSpy.mockRestore();
  });

  it("is not armed before an attempt starts", () => {
    renderHook(() => useExamState());
    const armed = addSpy.mock.calls.some(([type]) => type === "beforeunload");
    expect(armed).toBe(false);
  });

  it("arms the beforeunload guard once an unfinished Timed attempt exists", () => {
    const { result } = renderHook(() => useExamState());
    act(() => result.current.actions.startExam("timed"));
    const armed = addSpy.mock.calls.some(([type]) => type === "beforeunload");
    expect(armed).toBe(true);
  });

  it("arms the beforeunload guard once an unfinished Untimed attempt exists", () => {
    const { result } = renderHook(() => useExamState());
    act(() => result.current.actions.startExam("untimed"));
    const armed = addSpy.mock.calls.some(([type]) => type === "beforeunload");
    expect(armed).toBe(true);
  });

  it("disarms the beforeunload guard once the exam is submitted", () => {
    const { result } = renderHook(() => useExamState());
    act(() => result.current.actions.startExam("timed"));
    act(() => result.current.actions.submitExam());
    expect(result.current.isUnfinished).toBe(false);
    const removedAfterSubmit = removeSpy.mock.calls.some(([type]) => type === "beforeunload");
    expect(removedAfterSubmit).toBe(true);
  });
});
