import { act, cleanup, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { useExamState } from "../src/hooks/useExamState";
import { useTheme } from "../src/hooks/useTheme";
import { THEME_STORAGE_KEY } from "../src/lib/theme";

beforeEach(() => {
  window.localStorage.clear();
});

afterEach(() => cleanup());

describe("exam progress is never written to localStorage", () => {
  it("writes nothing to localStorage across a full start/answer/flag/submit flow", () => {
    const { result } = renderHook(() => useExamState());
    act(() => result.current.actions.startExam("timed"));
    act(() => result.current.actions.selectSingle(1, "C"));
    act(() => result.current.actions.toggleMultiOption(4, "A"));
    act(() => result.current.actions.toggleFlag(4));
    act(() => result.current.actions.next());
    act(() => result.current.actions.goToReview());
    act(() => result.current.actions.submitExam());

    expect(window.localStorage.length).toBe(0);
  });
});

describe("switching theme does not alter exam state", () => {
  it("leaves answers, flags, mode, and timer untouched when the theme is toggled mid-attempt", () => {
    const { result } = renderHook(() => ({
      exam: useExamState(),
      themeApi: useTheme(),
    }));

    act(() => result.current.exam.actions.startExam("timed"));
    act(() => result.current.exam.actions.selectSingle(1, "C"));
    act(() => result.current.exam.actions.toggleFlag(1));

    const beforeAnswers = result.current.exam.state.answers;
    const beforeFlags = result.current.exam.state.flags;
    const beforeMode = result.current.exam.state.mode;
    const beforeStart = result.current.exam.state.startTimestamp;

    act(() => result.current.themeApi.toggleTheme());
    act(() => result.current.themeApi.toggleTheme());

    expect(result.current.exam.state.answers).toEqual(beforeAnswers);
    expect(result.current.exam.state.flags).toEqual(beforeFlags);
    expect(result.current.exam.state.mode).toBe(beforeMode);
    expect(result.current.exam.state.startTimestamp).toBe(beforeStart);

    // Theme preference is the ONLY thing allowed to land in localStorage.
    const keys = Object.keys(window.localStorage);
    expect(keys).toEqual([THEME_STORAGE_KEY]);
  });
});
