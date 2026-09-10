# Question bank summary

*For the current, maintained description of how the bank is organized, sourced, and contributed to, see [../docs/question-bank-methodology.md](../docs/question-bank-methodology.md). This file is a historical snapshot of the bank's construction and its first independent review pass; it is not re-updated on every content change.*

Provenance and methodology are in [EXAM_BLUEPRINT.md](EXAM_BLUEPRINT.md); disclosed legacy concerns are in [LEGACY_QUESTION_AUDIT.md](LEGACY_QUESTION_AUDIT.md). The detailed drafting, peer-review, and independent-review trail behind this bank is not kept in the working tree — it is preserved in Git history and in the pull requests that introduced the 318-item expansion, its first corrections, and its later replacement pass.

## Counts (current, verified against the live bank)

53 original questions, preserved unchanged in `src/data/questions.ts`.
318 new questions, grouped by domain in `src/data/questions/new/`.
371 total, supporting **seven fully disjoint 53-question mocks per rotation cycle** (verified by
a large multi-cycle simulation in `tests/questionBank.test.ts`).

New: 275 single-answer, 43 Select TWO, 0 Select THREE.
Existing: 40 single-answer, 12 Select TWO, 1 Select THREE.
Combined: 315 single-answer, 55 Select TWO, 1 Select THREE.

## Domain allocation

| Domain | Weight | Per mock | Existing | New | Total |
|---|---:|---:|---:|---:|---:|
| Agents and Workflows | 14.7% | 8 | 7 | 49 | 56 |
| Applications and Integration | 33.1% | 17 | 13 | 106 | 119 |
| Claude Code | 3.1% | 2 | 2 | 12 | 14 |
| Eval, Testing, and Debugging | 2.6% | 1 | 2 | 5 | 7 |
| Model Selection and Optimization | 16.8% | 9 | 10 | 53 | 63 |
| Prompt and Context Engineering | 11% | 6 | 7 | 35 | 42 |
| Security and Safety | 8.1% | 4 | 4 | 24 | 28 |
| Tools and MCPs | 10.6% | 6 | 8 | 34 | 42 |

Domain weights and per-mock quotas come from the official CCDV-F Exam Guide v1.0 (Section 6);
`quota` is a largest-remainder allocation of 53 across those weights. Existing/New/Total are this
bank's own item counts, not official figures. Full skill-level (D#.#) breakdown is in
`src/data/blueprint.ts`, which is the single source of truth for both the runtime selector and
this document's numbers.

## First independent review (historical, 2026-09-09)

All 318 new items were independently re-verified against live, current Anthropic/MCP
documentation (not just the original authoring citations), split by domain and cross-checked
against every legacy item for semantic duplication. Findings and corrections at the time:

- **Two items rested on an MCP protocol mechanism removed in the then-current spec
  revision** (a session-ID-based authentication premise in the Security and Safety domain) —
  rewritten against the current "state handle" terminology and guidance.
- **Four items were near-duplicates of an existing legacy question** (same discriminator tested
  in different scenario dress) — each retargeted to a genuinely distinct, freshly-sourced fact
  within its objective.
- A small number of items had a correct, defensible answer but a citation that didn't fully
  support the specific claim attributed to it; the content was kept (the underlying practice is
  sound and appropriate for a hands-on Developer Foundations audience) and was noted rather
  than silently presented as more tightly sourced than it was.
- Several **domain-wide balance observations** were raised as worth watching in future
  authoring passes rather than requiring an immediate fix: some skills (SDK reference mechanics
  in Model Selection, MCP-OAuth session/protocol trivia in Security, beta-feature parameters in
  Context Engineering) lean toward implementation-detail depth relative to their "Foundations"
  framing. No item was rejected outright at this stage.

A first wording-correction pass on the same date resolved four legacy precision caveats
(Q1, Q7, Q9, Q40) and two legacy content concerns (Q31, Q42) disclosed above, with corrected
`body`/affected `options`/`explanation`. `id`, `type`, `selectCount`, `correctAnswers`, and
domain/objective mapping were unchanged for all six, and the other 47 legacy items were
unaffected. See [LEGACY_QUESTION_AUDIT.md](LEGACY_QUESTION_AUDIT.md) for the resolved
before/after record.

## Second independent review and replacement pass (later)

A subsequent, separate audit of the 318-item expanded bank replaced 179 items outright (new
stem/options/answer/explanation, same production `id`, `domain`, and `objective`) and applied 7
further narrow wording corrections to remove unnecessary exact-recall trivia from otherwise-sound
items. See `tests/bank-change-baseline.json` for the exact set of changed IDs and content-hash
pins, and [docs/question-bank-methodology.md](../docs/question-bank-methodology.md) for how
replacements and corrections are defined and validated going forward. The counts and domain
allocation table above already reflect the bank *after* this pass; the counts don't change
(a replacement swaps content within the same domain/objective slot), but a meaningful share of
the 318 expanded-bank questions carry different content than what the first review pass above
describes.

## Maintaining the bank

`src/data/questions/new/*.ts` are hand-maintained, directly-edited source files — there is no
separate draft/approval/generation pipeline. To add or correct a question: edit the relevant
domain file directly, keep `id` stable and unique, keep `sourceRefs` pointing at a live
authoritative first-party page, and re-run `npm test` — `tests/questionBank.test.ts` and
`src/data/validateBank.ts` will catch missing fields, duplicate stems/options, invalid answer
keys, wrong `selectCount`, and domain/skill count drift from `src/data/blueprint.ts`.
