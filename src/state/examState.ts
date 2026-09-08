import type { AnswersMap, ExamResult } from "../lib/scoring";

export type ExamMode = "timed" | "untimed";

export interface ExamState {
  mode: ExamMode | null;
  started: boolean;
  startTimestamp: number | null;
  currentQuestion: number;
  answers: AnswersMap;
  flags: Record<number, boolean>;
  reviewing: boolean;
  submitted: boolean;
  submittedAt: number | null;
  result: ExamResult | null;
}

export function createInitialState(): ExamState {
  return {
    mode: null,
    started: false,
    startTimestamp: null,
    currentQuestion: 1,
    answers: {},
    flags: {},
    reviewing: false,
    submitted: false,
    submittedAt: null,
    result: null,
  };
}

export type ExamAction =
  | { type: "START_EXAM"; mode: ExamMode; startTimestamp: number }
  | { type: "SELECT_SINGLE"; questionId: number; optionId: string }
  | { type: "TOGGLE_MULTI"; questionId: number; optionId: string }
  | { type: "GOTO_QUESTION"; id: number }
  | { type: "NEXT" }
  | { type: "PREV" }
  | { type: "TOGGLE_FLAG"; id: number }
  | { type: "GOTO_REVIEW" }
  | { type: "RETURN_TO_EXAM" }
  | { type: "SUBMIT"; submittedAt: number; result: ExamResult }
  | { type: "RESET" };

export function examReducer(state: ExamState, action: ExamAction): ExamState {
  switch (action.type) {
    case "START_EXAM":
      return {
        ...createInitialState(),
        mode: action.mode,
        started: true,
        startTimestamp: action.startTimestamp,
      };

    case "SELECT_SINGLE":
      return {
        ...state,
        answers: { ...state.answers, [action.questionId]: [action.optionId] },
      };

    case "TOGGLE_MULTI": {
      const current = state.answers[action.questionId] ?? [];
      const next = current.includes(action.optionId)
        ? current.filter((o) => o !== action.optionId)
        : [...current, action.optionId];
      return { ...state, answers: { ...state.answers, [action.questionId]: next } };
    }

    case "GOTO_QUESTION":
      return { ...state, currentQuestion: action.id, reviewing: false };

    case "NEXT":
      return { ...state, currentQuestion: state.currentQuestion + 1 };

    case "PREV":
      return { ...state, currentQuestion: state.currentQuestion - 1 };

    case "TOGGLE_FLAG":
      return { ...state, flags: { ...state.flags, [action.id]: !state.flags[action.id] } };

    case "GOTO_REVIEW":
      return { ...state, reviewing: true };

    case "RETURN_TO_EXAM":
      return { ...state, reviewing: false };

    case "SUBMIT":
      return {
        ...state,
        submitted: true,
        submittedAt: action.submittedAt,
        result: action.result,
        reviewing: false,
      };

    case "RESET":
      return createInitialState();

    default:
      return state;
  }
}
