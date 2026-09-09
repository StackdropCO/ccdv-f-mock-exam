import { BANK_VERSION, BLUEPRINT, FORM_SIZE } from "../data/blueprint";
import type { BankQuestion, FormQuestion } from "../data/bankTypes";
import { assertBank, assertForm } from "../data/validateBank";

export interface RotationHistory {
  bankVersion: string;
  cycle: number;
  usedQuestionIds: string[];
  lastCompletedFormIds: string[];
}
export interface ExamForm {
  questions: FormQuestion[];
  history: RotationHistory;
}
export const emptyHistory = (): RotationHistory => ({ bankVersion: BANK_VERSION, cycle: 1, usedQuestionIds: [], lastCompletedFormIds: [] });

export function normalizeHistory(value: unknown, bank: readonly BankQuestion[]): RotationHistory {
  if (!value || typeof value !== "object") return emptyHistory();
  const h = value as RotationHistory;
  if (h.bankVersion !== BANK_VERSION || !Number.isSafeInteger(h.cycle) || h.cycle < 1 || h.cycle >= Number.MAX_SAFE_INTEGER) return emptyHistory();
  const known = new Set(bank.map(q => q.id));
  for (const list of [h.usedQuestionIds, h.lastCompletedFormIds]) {
    if (!Array.isArray(list) || list.some(id => typeof id !== "string" || !known.has(id)) || new Set(list).size !== list.length) return emptyHistory();
  }
  if (h.usedQuestionIds.length % FORM_SIZE !== 0) return emptyHistory();
  const completed = h.usedQuestionIds.length / FORM_SIZE;
  const used = new Set(h.usedQuestionIds);
  if (completed === 0) {
    // Persisted history can only be empty initially, never a provisional reset.
    if (h.lastCompletedFormIds.length) return emptyHistory();
  } else {
    try { assertForm(bank, h.lastCompletedFormIds); } catch { return emptyHistory(); }
    if (h.lastCompletedFormIds.some(id => !used.has(id))) return emptyHistory();
  }
  for (const d of BLUEPRINT) {
    if (bank.filter(q => q.domain === d.id && used.has(q.id)).length !== completed * d.quota) return emptyHistory();
  }
  return { bankVersion: BANK_VERSION, cycle: h.cycle, usedQuestionIds: [...h.usedQuestionIds], lastCompletedFormIds: [...h.lastCompletedFormIds] };
}

function shuffle<T>(values: readonly T[], rng: () => number): T[] {
  const out = [...values];
  for (let i = out.length - 1; i > 0; i--) {
    const random = rng();
    if (!Number.isFinite(random) || random < 0 || random >= 1) throw new Error("RNG must return a finite value in [0, 1)");
    const j = Math.floor(random * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export function selectExamForm(bank: readonly BankQuestion[], rawHistory: unknown, rng: () => number = Math.random): ExamForm {
  assertBank(bank);
  let history = normalizeHistory(rawHistory, bank);
  let used = new Set(history.usedQuestionIds);
  const reset = BLUEPRINT.some(d => bank.filter(q => q.domain === d.id && !used.has(q.id)).length < d.quota);
  if (reset) {
    history = { ...history, cycle: history.cycle + 1, usedQuestionIds: [] };
    used = new Set();
  }
  const last = new Set(reset ? history.lastCompletedFormIds : []);
  const selected: BankQuestion[] = [];
  const concepts = new Set<string>();
  const typeCounts = new Map<string, number>();
  const answerCounts = new Map<string, number>();
  const typeTotals = new Map<string, number>();
  const answerTotals = new Map<string, number>();
  for (const q of bank) {
    typeTotals.set(q.type, (typeTotals.get(q.type) ?? 0) + 1);
    if (q.type === "single") answerTotals.set(q.correctAnswers[0], (answerTotals.get(q.correctAnswers[0]) ?? 0) + 1);
  }
  for (const d of BLUEPRINT) {
    let pool = shuffle(bank.filter(q => q.domain === d.id && !used.has(q.id)), rng);
    const counts = new Map<string, number>();
    for (let i = 0; i < d.quota; i++) {
      // Lexicographic priorities: avoid last form at reset, avoid repeated
      // concepts, then fill the most underrepresented weighted objective.
      // Authored type/answer-position balance breaks remaining ties only;
      // it is not an official exam quota and never shuffles options.
      const rank = (q: BankQuestion) => [
        last.has(q.id) ? 1 : 0,
        concepts.has(q.conceptKey) ? 1 : 0,
        (counts.get(q.objective) ?? 0) / (d.objectives.find(o => o.id === q.objective)?.weight ?? 1),
        (typeCounts.get(q.type) ?? 0) / (typeTotals.get(q.type) ?? 1),
        q.type === "single" ? (answerCounts.get(q.correctAnswers[0]) ?? 0) / (answerTotals.get(q.correctAnswers[0]) ?? 1) : 0,
      ];
      pool.sort((a, b) => {
        const x = rank(a), y = rank(b);
        return x[0] - y[0] || x[1] - y[1] || x[2] - y[2] || x[3] - y[3] || x[4] - y[4];
      });
      const q = pool.shift();
      if (!q) throw new Error(`Cannot fill ${d.id}`);
      selected.push(q);
      concepts.add(q.conceptKey);
      typeCounts.set(q.type, (typeCounts.get(q.type) ?? 0) + 1);
      if (q.type === "single") answerCounts.set(q.correctAnswers[0], (answerCounts.get(q.correctAnswers[0]) ?? 0) + 1);
      counts.set(q.objective, (counts.get(q.objective) ?? 0) + 1);
    }
  }
  const ordered = shuffle(selected, rng);
  assertForm(bank, ordered.map(q => q.id));
  const questions: FormQuestion[] = ordered.map((q, index) => ({ ...q, bankId: q.id, id: index + 1 }));
  return { questions, history };
}

// This is the only operation that consumes a selected form. No storage effects.
export function completeExamForm(bank: readonly BankQuestion[], form: ExamForm): RotationHistory {
  const ids = form.questions.map(q => q.bankId);
  assertForm(bank, ids);
  const used = new Set(form.history.usedQuestionIds);
  if (ids.some(id => used.has(id))) throw new Error("Cannot complete an already-used form in this cycle");
  const completed = { ...form.history, usedQuestionIds: [...used, ...ids], lastCompletedFormIds: ids };
  const normalized = normalizeHistory(completed, bank);
  if (normalized.usedQuestionIds.length !== completed.usedQuestionIds.length || normalized.cycle !== completed.cycle) throw new Error("Invalid completion history");
  return normalized;
}
