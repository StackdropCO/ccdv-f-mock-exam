import type { BankQuestion } from "../data/bankTypes";
import { emptyHistory, normalizeHistory, type RotationHistory } from "./examForm";

export const HISTORY_STORAGE_KEY = "ccdv-f-question-history-v2";
export function readQuestionHistory(bank: readonly BankQuestion[]): RotationHistory {
  try {
    return normalizeHistory(JSON.parse(window.localStorage.getItem(HISTORY_STORAGE_KEY) ?? "null"), bank);
  } catch { return emptyHistory(); }
}
export function writeQuestionHistory(history: RotationHistory): boolean {
  try { window.localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(history)); return true; }
  catch { return false; }
}
