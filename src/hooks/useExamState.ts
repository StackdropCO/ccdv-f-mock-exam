import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import { QUESTION_BANK } from "../data/questionBank";
import { completeExamForm, selectExamForm, type ExamForm, type RotationHistory } from "../lib/examForm";
import { readQuestionHistory, writeQuestionHistory } from "../lib/questionHistory";
import { computeResult } from "../lib/scoring";
import { elapsedSeconds } from "../lib/timer";
import { createInitialState, examReducer, type ExamMode } from "../state/examState";

export type Screen = "start" | "exam" | "review" | "results";

export function useExamState() {
  const [state, dispatch] = useReducer(examReducer, undefined, createInitialState);

  const [form, setForm] = useState<ExamForm | null>(null);
  const [rotationNotice, setRotationNotice] = useState<string | null>(null);
  const submitted = useRef(false);
  const active = useRef(false);
  const startHistory = useRef<RotationHistory | null>(null);
  const memoryHistory = useRef<RotationHistory | null>(null);
  const questions = form?.questions ?? [];

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
    if (active.current) return;
    const persisted = readQuestionHistory(QUESTION_BANK);
    const history = memoryHistory.current ?? persisted;
    const selected = selectExamForm(QUESTION_BANK, history);
    startHistory.current = persisted;
    setForm(selected);
    setRotationNotice(null);
    submitted.current = false;
    active.current = true;
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
    if (state.currentQuestion >= questions.length) return;
    dispatch({ type: "NEXT" });
  }, [state.currentQuestion, questions.length]);

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
    if (!form || !state.started || submitted.current) return;
    submitted.current = true;
    const now = Date.now();
    const completion = state.startTimestamp ? elapsedSeconds(state.startTimestamp, now) : 0;
    const result = computeResult(form.questions, state.answers, completion);
    const latest = readQuestionHistory(QUESTION_BANK);
    // Independent active tabs cannot reserve items without persisting active forms.
    // Never overwrite another tab's completed history with a stale snapshot.
    if (JSON.stringify(latest) !== JSON.stringify(startHistory.current)) {
      memoryHistory.current = null;
      setRotationNotice("Another tab changed the completed-mock history. Your score is ready, but this mock could not be added to rotation. Use one exam tab at a time.");
    } else {
      const completed = completeExamForm(QUESTION_BANK, form);
      if (writeQuestionHistory(completed)) {
        memoryHistory.current = null;
      } else {
        memoryHistory.current = completed;
        setRotationNotice("Your score is ready. This browser could not save completed-question history, so rotation will restart if you reload.");
      }
    }
    dispatch({ type: "SUBMIT", submittedAt: now, result });
  }, [form, state.started, state.startTimestamp, state.answers]);

  const resetToStart = useCallback(() => {
    active.current = false;
    submitted.current = false;
    setForm(null);
    setRotationNotice(null);
    dispatch({ type: "RESET" });
  }, []);

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
    questions,
    rotationNotice,
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
