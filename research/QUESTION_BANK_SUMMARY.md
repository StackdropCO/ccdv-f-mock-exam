# Question bank summary

Live reference for the maintained question bank. Provenance and methodology are in
[EXAM_BLUEPRINT.md](EXAM_BLUEPRINT.md); disclosed legacy concerns are in
[LEGACY_QUESTION_AUDIT.md](LEGACY_QUESTION_AUDIT.md). The detailed drafting, peer-review, and
independent-review trail behind this bank is not kept in the working tree — it is preserved in
Git history and in the pull request that introduced the 318-item expansion and its corrections.

## Counts

53 original questions, preserved unchanged in `src/data/questions.ts` and
`CCDV-F_Final_Mock_Exam.md`. 318 new questions, grouped by domain in `src/data/questions/new/`.
371 total, supporting **seven fully disjoint 53-question mocks per rotation cycle** (verified by
a 1,400-form / 200-cycle simulation in `tests/questionBank.test.ts`).

New: 270 single-answer, 48 Select TWO, 0 Select THREE.
Existing: 40 single-answer, 12 Select TWO, 1 Select THREE.
Combined: 310 single-answer, 60 Select TWO, 1 Select THREE.

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

## Independent review (2026-09-09)

All 318 new items were independently re-verified against live, current Anthropic/MCP
documentation (not just the original authoring citations), split by domain and cross-checked
against every legacy item for semantic duplication. Findings and corrections:

- **Two items rested on an MCP protocol mechanism removed in the current (2026-07-28) spec
  revision** (a session-ID-based authentication premise in the Security and Safety domain) —
  rewritten against the current "state handle" terminology and guidance.
- **Four items were near-duplicates of an existing legacy question** (same discriminator tested
  in different scenario dress) — each retargeted to a genuinely distinct, freshly-sourced fact
  within its objective.
- A small number of items had a correct, defensible answer but a citation that didn't fully
  support the specific claim attributed to it; the content was kept (the underlying practice is
  sound and appropriate for a hands-on Developer Foundations audience) and is noted here rather
  than silently presented as more tightly sourced than it is.
- Several **domain-wide balance observations** were raised and are worth watching in future
  authoring passes rather than requiring an immediate fix: some skills (SDK reference mechanics
  in Model Selection, MCP-OAuth session/protocol trivia in Security, beta-feature parameters in
  Context Engineering) lean toward implementation-detail depth relative to their "Foundations"
  framing. No item was rejected outright — every one of the 318 has exactly one defensible
  correct answer after this review.

See [LEGACY_QUESTION_AUDIT.md](LEGACY_QUESTION_AUDIT.md) for the four preserved legacy precision
caveats (Q1, Q7, Q9, Q40) and two preserved legacy content concerns (Q31, Q42) — all left
unchanged per the original-content preservation rule, disclosed rather than silently fixed.

## Maintaining the bank

`src/data/questions/new/*.ts` are hand-maintained, directly-edited source files — there is no
separate draft/approval/generation pipeline. To add or correct a question: edit the relevant
domain file directly, keep `id` stable and unique, keep `sourceRefs` pointing at a live
authoritative first-party page, and re-run `npm test` — `tests/questionBank.test.ts` and
`src/data/validateBank.ts` will catch missing fields, duplicate stems/options, invalid answer
keys, wrong `selectCount`, and domain/skill count drift from `src/data/blueprint.ts`.
