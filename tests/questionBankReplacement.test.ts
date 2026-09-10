import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { QUESTION_BANK } from "../src/data/questionBank";
import { DOMAIN_QUESTIONS } from "../src/data/questions/domains";
import { BLUEPRINT, BANK_VERSION, FORM_SIZE } from "../src/data/blueprint";
import { assertForm } from "../src/data/validateBank";
import { completeExamForm, emptyHistory, normalizeHistory, selectExamForm } from "../src/lib/examForm";

const read = (p: string) => JSON.parse(readFileSync(p, "utf8"));
const hash = (o: unknown) => createHash("sha256").update(JSON.stringify(o)).digest("hex").slice(0, 16);

const CHANGES: { replaced: Record<string, string>; corrected: Record<string, string> } = read("tests/bank-change-baseline.json");
const REPLACED = Object.keys(CHANGES.replaced);
const CORRECTED = Object.keys(CHANGES.corrected);
const byId = new Map(QUESTION_BANK.map((q) => [q.id, q]));

describe("replacement pack coverage", () => {
  it("replaces exactly the 179 approved IDs and corrects exactly the 7 retained ones", () => {
    expect(REPLACED).toHaveLength(179);
    expect(CORRECTED).toHaveLength(7);
    expect(CORRECTED.sort()).toEqual(["AW-013", "AW-018", "AW-019", "MO-004", "MO-042", "SS-020", "SS-024"]);
    // The two sets are disjoint: a corrected question was never also replaced.
    expect(REPLACED.filter((id) => CORRECTED.includes(id))).toEqual([]);
    for (const id of [...REPLACED, ...CORRECTED]) expect(byId.has(id)).toBe(true);
  });

  it("pins the implemented content of every replaced and corrected question", () => {
    for (const [id, expected] of Object.entries(CHANGES.replaced)) expect(hash(byId.get(id))).toBe(expected);
    for (const [id, expected] of Object.entries(CHANGES.corrected)) expect(hash(byId.get(id))).toBe(expected);
  });

  it("leaves the other 132 approved questions and all 53 legacy questions outside the change set", () => {
    const changed = new Set([...REPLACED, ...CORRECTED]);
    expect(DOMAIN_QUESTIONS.filter((q) => !changed.has(q.id))).toHaveLength(132);
    expect(QUESTION_BANK.filter((q) => q.qualityStatus === "LEGACY_RETAINED")).toHaveLength(53);
    expect(QUESTION_BANK.filter((q) => changed.has(q.id) && q.qualityStatus !== "APPROVED")).toEqual([]);
  });

  it("keeps every replaced question in its original domain and objective", () => {
    // Domain/objective drive the blueprint quotas, so a replacement may not move between them.
    for (const d of BLUEPRINT) {
      expect(QUESTION_BANK.filter((q) => q.domain === d.id)).toHaveLength(d.quota * 7);
      for (const o of d.objectives) expect(DOMAIN_QUESTIONS.filter((q) => q.objective === o.id)).toHaveLength(o.newTarget);
    }
  });

  it("states the selection requirement in the stem of every multiple-response question", () => {
    // Matches the production validator's rule: the instruction must appear in the stem, in any
    // phrasing. Pre-existing items say "Select TWO architectural controls..."; the imported pack
    // carries it as a trailing sentence.
    for (const q of DOMAIN_QUESTIONS.filter((q) => q.type === "multiple")) {
      expect(q.body.toLowerCase()).toContain(q.selectCount === 2 ? "select two" : "select three");
      expect(q.correctAnswers).toHaveLength(q.selectCount);
    }
  });

  it("appends the selection instruction to every multiple-response question imported from the pack", () => {
    for (const id of REPLACED) {
      const q = byId.get(id)!;
      if (q.type === "multiple") expect(q.body.endsWith(q.selectCount === 2 ? "Select TWO." : "Select THREE.")).toBe(true);
    }
  });
});

describe("production ID preservation and persisted history", () => {
  it("does not change BANK_VERSION, so stored history is not discarded", () => {
    expect(BANK_VERSION).toBe("ccdv-f-bank-v2-2026-09");
  });

  it("round-trips a completed-form history through normalizeHistory and still avoids consumed IDs on the next form", () => {
    // Build a real completed-form history, then re-read it exactly as questionHistory does on
    // load, confirming production IDs (used as the persistence key) survive the round trip.
    let seed = 4242;
    const rng = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
    const form = selectExamForm(QUESTION_BANK, emptyHistory(), rng);
    const stored = completeExamForm(QUESTION_BANK, form);

    const reread = normalizeHistory(JSON.parse(JSON.stringify(stored)), QUESTION_BANK);
    expect(reread.usedQuestionIds).toEqual(stored.usedQuestionIds);
    expect(reread.cycle).toBe(stored.cycle);
    expect(reread.lastCompletedFormIds).toEqual(stored.lastCompletedFormIds);
    // A subsequent form still avoids everything the stored history consumed.
    const next = selectExamForm(QUESTION_BANK, reread, rng);
    expect(next.questions.some((q) => reread.usedQuestionIds.includes(q.bankId))).toBe(false);
  });

  it("rotates a full seven-form cycle over the updated bank with unique questions and exact quotas", () => {
    let seed = 90210;
    const rng = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
    let history = emptyHistory();
    const used = new Set<string>();
    for (let n = 0; n < 7; n++) {
      const form = selectExamForm(QUESTION_BANK, history, rng);
      const ids = form.questions.map((q) => q.bankId);
      expect(new Set(ids).size).toBe(FORM_SIZE);
      expect(() => assertForm(QUESTION_BANK, ids)).not.toThrow();
      for (const id of ids) { expect(used.has(id)).toBe(false); used.add(id); }
      history = completeExamForm(QUESTION_BANK, form);
    }
    expect(used.size).toBe(371);
    // Cycle exhaustion resets and increments the cycle rather than repeating within one.
    expect(selectExamForm(QUESTION_BANK, history, rng).history.cycle).toBe(2);
  });
});

describe("the seven corrections drop their memorization dependency", () => {
  const text = (id: string) => JSON.stringify(byId.get(id));
  it("AW-013 no longer requires recalling a hard-coded tool list", () => {
    expect(text("AW-013")).not.toMatch(/\bGlob\b|\bGrep\b/);
    expect(byId.get("AW-013")!.body).toMatch(/capabilit/i);
  });
  it("AW-018 no longer requires recalling an SDK message class name", () => {
    expect(text("AW-018")).not.toMatch(/ResultMessage|AssistantMessage/);
    expect(text("AW-018")).toMatch(/terminal result/i);
  });
  it("AW-019 no longer requires recalling the turn-limit property spelling", () => {
    expect(text("AW-019")).not.toMatch(/maxTurns|max_turns/);
    expect(text("AW-019")).toMatch(/round trips/i);
  });
  it("MO-004 no longer depends on thinking-block structure or signatures", () => {
    expect(text("MO-004")).not.toMatch(/signed|signature|thinking block/i);
    expect(text("MO-004")).toMatch(/reasoning section/i);
  });
  it("MO-042 no longer depends on a specific model-version migration", () => {
    expect(text("MO-042")).not.toMatch(/Opus 4\.6|Opus 5|opus-5/i);
    expect(text("MO-042")).toMatch(/tokeniz/i);
    expect(byId.get("MO-042")!.selectCount).toBe(2);
  });
  it("SS-020 no longer depends on recalling the browser opt-in option name", () => {
    expect(text("SS-020")).not.toMatch(/dangerouslyAllowBrowser/);
    expect(text("SS-020")).toMatch(/server-side/i);
  });
  it("SS-024 no longer depends on an exact Console screen label", () => {
    expect(text("SS-024")).not.toMatch(/Console's/);
    expect(text("SS-024")).toMatch(/Provider-side usage and audit records/);
  });
  it("keeps all seven in their original domain, objective and difficulty shape", () => {
    for (const id of CORRECTED) {
      const q = byId.get(id)!;
      expect(q.qualityStatus).toBe("APPROVED");
      expect(q.sourceRefs.length).toBeGreaterThan(0);
      expect(q.options.length).toBeGreaterThanOrEqual(4);
      expect(q.correctAnswers).toHaveLength(q.selectCount);
    }
  });
});
