import { useCallback, useEffect, useReducer } from "react";
import { QUESTIONS } from "../data/questions";
import { computeResult } from "../lib/scoring";
import { elapsedSeconds } from "../lib/timer";
import { createInitialState, examReducer, type ExamMode } from "../state/examState";

export type Screen = "start" | "exam" | "review" | "results";

export function useExamState() {
  const [state, dispatch] = useReducer(examReducer, undefined, createInitialState);

  const isUnfinished = state.started && !state.submitted;

  useEffect(() => {
    if (!isUnfinished) return;
    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [isUnfinished]);

  const startExam = useCallback((mode: ExamMode) => {
    dispatch({ type: "START_EXAM", mode, startTimestamp: Date.now() });
  }, []);

  const selectSingle = useCallback((questionId: number, optionId: string) => {
    dispatch({ type: "SELECT_SINGLE", questionId, optionId });
  }, []);

  const toggleMultiOption = useCallback((questionId: number, optionId: string) => {
    dispatch({ type: "TOGGLE_MULTI", questionId, optionId });
  }, []);

  const goToQuestion = useCallback((id: number) => {
    dispatch({ type: "GOTO_QUESTION", id });
  }, []);

  const next = useCallback(() => {
    if (state.currentQuestion >= QUESTIONS.length) return;
    dispatch({ type: "NEXT" });
  }, [state.currentQuestion]);

  const prev = useCallback(() => {
    if (state.currentQuestion <= 1) return;
    dispatch({ type: "PREV" });
  }, [state.currentQuestion]);

  const toggleFlag = useCallback((id: number) => {
    dispatch({ type: "TOGGLE_FLAG", id });
  }, []);

  const goToReview = useCallback(() => dispatch({ type: "GOTO_REVIEW" }), []);
  const returnToExam = useCallback(() => dispatch({ type: "RETURN_TO_EXAM" }), []);

  const submitExam = useCallback(() => {
    const now = Date.now();
    const completion = state.startTimestamp ? elapsedSeconds(state.startTimestamp, now) : 0;
    const result = computeResult(QUESTIONS, state.answers, completion);
    dispatch({ type: "SUBMIT", submittedAt: now, result });
  }, [state.startTimestamp, state.answers]);

  const resetToStart = useCallback(() => dispatch({ type: "RESET" }), []);

  const screen: Screen = !state.started
    ? "start"
    : state.submitted
      ? "results"
      : state.reviewing
        ? "review"
        : "exam";

  return {
    state,
    screen,
    isUnfinished,
    questions: QUESTIONS,
    actions: {
      startExam,
      selectSingle,
      toggleMultiOption,
      goToQuestion,
      next,
      prev,
      toggleFlag,
      goToReview,
      returnToExam,
      submitExam,
      resetToStart,
    },
  };
}
