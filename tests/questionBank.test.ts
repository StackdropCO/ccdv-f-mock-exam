import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { QUESTION_BANK } from '../src/data/questionBank';
import { NEW_QUESTIONS } from '../src/data/questions/new';
import { QUESTIONS } from '../src/data/questions';
import { BLUEPRINT } from '../src/data/blueprint';
import { assertBank, assertForm } from '../src/data/validateBank';
import { completeExamForm, emptyHistory, selectExamForm } from '../src/lib/examForm';

const read = (p: string) => JSON.parse(readFileSync(p, 'utf8'));
const hash = (s: string) => createHash('sha256').update(s).digest('hex');

// Authoritative first-party domains every new item's sourceRefs must resolve to: Anthropic/Claude
// product docs, the MCP specification, or primary language/protocol/web-standard references for
// the Software Engineering Foundations skill (see LEGACY_QUESTION_AUDIT.md / EXAM_BLUEPRINT.md).
const AUTHORITATIVE_HOSTS = [
  'platform.claude.com', 'code.claude.com', 'docs.claude.com', 'www.anthropic.com', 'anthropic.com',
  'support.claude.com', 'claude.com', 'modelcontextprotocol.io',
  'docs.python.org', 'git-scm.com', 'httpwg.org', 'www.rfc-editor.org', 'html.spec.whatwg.org',
  'github.com',
];

describe('published question bank', () => {
  // Baseline approved 2026-09-09 (Approved Change 4): six originals (Q1, Q7, Q9, Q31, Q40, Q42)
  // carry explicitly user-approved wording corrections; the other 47 are the original content.
  // This fixture pins that whole-file baseline byte for byte so any *other* edit to either file
  // is caught immediately, and separately confirms every legacy record's bank projection
  // (LEGACY-0xx) still matches the maintained question record exactly.
  it('matches the approved original-question baseline and keeps every legacy bank projection in sync', () => {
    for (const [p, expected] of Object.entries(read('tests/legacy-hashes.json'))) expect(hash(readFileSync(p, 'utf8'))).toBe(expected);
    expect(QUESTIONS).toHaveLength(53);
    for (const q of QUESTIONS) {
      const legacy = QUESTION_BANK.find(b => b.id === `LEGACY-${String(q.id).padStart(3, '0')}`)!;
      for (const key of ['body', 'options', 'correctAnswers', 'explanation', 'type', 'selectCount'] as const) expect(legacy[key]).toEqual(q[key]);
    }
  });

  it('contains exactly 318 approved new items and meets every frozen domain and skill count', () => {
    expect(NEW_QUESTIONS).toHaveLength(318);
    expect(QUESTION_BANK).toHaveLength(371);
    expect(() => assertBank(QUESTION_BANK, 7)).not.toThrow();
    for (const d of BLUEPRINT) {
      expect(QUESTION_BANK.filter(q => q.domain === d.id)).toHaveLength(d.quota * 7);
      for (const o of d.objectives) {
        expect(QUESTION_BANK.filter(q => q.objective === o.id)).toHaveLength(o.target);
        expect(NEW_QUESTIONS.filter(q => q.objective === o.id)).toHaveLength(o.newTarget);
      }
    }
  });

  it('gives every approved item at least one https source reference from an authoritative first-party host', () => {
    for (const q of NEW_QUESTIONS) {
      expect(q.qualityStatus).toBe('APPROVED');
      expect(q.sourceRefs.length).toBeGreaterThan(0);
      for (const url of q.sourceRefs) {
        const parsed = new URL(url);
        expect(parsed.protocol).toBe('https:');
        expect(AUTHORITATIVE_HOSTS).toContain(parsed.hostname);
      }
    }
  });

  it('simulates 1,400 actual-bank forms across 200 rotation cycles with no quota, overlap, or capacity failures', () => {
    let seed = 71093;
    const rng = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
    let history = emptyHistory();
    let conceptRepeatForms = 0;
    for (let cycle = 1; cycle <= 200; cycle++) {
      const used = new Set<string>();
      for (let n = 0; n < 7; n++) {
        const form = selectExamForm(QUESTION_BANK, history, rng), ids = form.questions.map(q => q.bankId);
        assertForm(QUESTION_BANK, ids);
        expect(form.history.cycle).toBe(cycle);
        if (n === 0 && cycle > 1) expect(ids.some(id => history.lastCompletedFormIds.includes(id))).toBe(false);
        for (const id of ids) { expect(used.has(id)).toBe(false); used.add(id); }
        if (53 - new Set(form.questions.map(q => q.conceptKey)).size > 0) conceptRepeatForms++;
        history = completeExamForm(QUESTION_BANK, form);
      }
      // Every domain's quota times 7 sums to exactly the bank size: a full cycle uses the entire
      // bank with nothing left over and nothing repeated.
      expect(used.size).toBe(371);
    }
    // Documented in LEGACY_QUESTION_AUDIT.md / QUESTION_BANK_SUMMARY.md: concept-key collisions are
    // a soft preference, not a hard constraint, and become more likely as a cycle's pools narrow.
    expect(conceptRepeatForms).toBeLessThan(1400 * 0.1);
  }, 30_000);
});
