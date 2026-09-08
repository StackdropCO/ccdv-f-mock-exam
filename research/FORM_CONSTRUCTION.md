# Form construction — frozen research checkpoint

Date: 2026-09-08. Exam Guide v1.0 (July 2026), retrieved as provenance-bearing mirror and independently corroborated, supports 53 items, 120 minutes, eight weighted domains and 25 weighted skills. Evidence methodology is in SOURCE_MATRIX.md. Research gate PASS; no material blueprint contradiction found.

## Capacity and generation target

Final accepted size: 318 new + 53 preserved = 371. All 318 new items completed editorial acceptance; legacy exceptions are disclosed in LEGACY_QUESTION_AUDIT.md. Domain quotas use largest remainder for 53; combined skill targets use largest remainder within each domain's seven-form capacity. Legacy primary-skill mappings are editorial classifications, not alterations to the original questions. The detailed allocation is in blueprint.json and EXAM_BLUEPRINT.md.

| Domain | Per form | Legacy | New target | Combined |
|---|---:|---:|---:|---:|
| Agents and Workflows | 8 | 7 | 49 | 56 |
| Applications and Integration | 17 | 13 | 106 | 119 |
| Claude Code | 2 | 2 | 12 | 14 |
| Eval, Testing, and Debugging | 1 | 2 | 5 | 7 |
| Model Selection and Optimization | 9 | 10 | 53 | 63 |
| Prompt and Context Engineering | 6 | 7 | 35 | 42 |
| Security and Safety | 4 | 4 | 24 | 28 |
| Tools and MCPs | 6 | 8 | 34 | 42 |

Capacity is min across domains of floor(eligible count / quota), not just total / 53. If quality reduces capacity, document revised complete-form targets rather than fill with weak questions.

## Authoring and review contract

Draft by objective in bounded batches. Every item has one binding discriminator; plausible alternatives must be excluded by a stated condition or documented behavior. Require source-backed answer AND an explanation of why each distractor fails. Challenge alternate interpretations, model/version dependence, and semantic duplicates. Current first-party documents establish technical correctness. Use explicit versions when necessary; reject facts that cannot be pinned down. An agent's draft is a candidate, not approval: central review must adjudicate it.

Mostly applied scenarios; authoring goal approximately 15–25% multiple response, varied across objectives, with explicit Select TWO or Select THREE and exact keys. This range is an editorial choice, NOT an official ratio or a selection quota. Guide publishes no exact response/difficulty/answer-position mix. Do not force a percentage at the expense of correctness. Audit authored option positions; never shuffle options at runtime. Official samples demonstrate a binding requirement that rules out generally sensible alternatives.

## Selection and lifecycle

Pure selector accepts bank, history and RNG. Validate IDs, objective/domain mapping and capacity. Normalize incompatible/malformed history safely. Select each domain's exact quota among unused items, preferring concepts absent from the form and broad proportional skill coverage. After those priorities, prefer the underrepresented authored response type and single-answer position as soft tie-breakers. Randomize equal choices and final question order. No exact per-form skill quota is claimed official. Once the pool is small, complete domain-valid forms take priority over concept diversity; report any legacy overlaps.

If any domain cannot fill its quota, reset ALL used IDs atomically in the proposed in-memory selection; prefer items outside the immediately previous completed form. No partially repeated form within a cycle. Only submission commits that proposed cycle/history. Starting, navigating, reviewing, flagging, changing theme, aborting or reloading cannot consume IDs.

Keep bank IDs separate from positions. The active form can project items to existing numeric positions 1–53 while retaining stable bankId. Existing reducer, answers, flags and scoring then retain their position-based contract. Active form is created once at mode choice and kept only in memory.

Persist only version, cycle, completed used IDs and last completed form IDs, plus existing separate theme preference. Mode/timer/answers/flags/form/result remain ephemeral. Guard double submission. Storage failure must not prevent scoring; disclose inability to retain rotation if encountered. Browser-local sequential attempts are the rotation scope. Simultaneous independent tabs can have overlapping active forms; re-read history on submission and avoid silent corruption, document this limitation rather than claim a cross-tab transactional guarantee.

## Final outcome and operational limits

Seven complete disjoint forms are supported. Actual-bank simulations passed across 200 cycles; detailed distributions and concept collisions are in QUESTION_BANK_AUDIT.md. New items are 270 single-answer and 48 Select TWO; the original Select THREE remains. No runtime option shuffling occurs.

If another tab changes completed history during an attempt, submission still scores but displays a notice and does not overwrite that newer history. Simultaneous active tabs are not transactionally coordinated; use one exam tab for guaranteed sequential rotation. A localStorage write failure keeps completed history in memory for the current page and displays a reload limitation. Clearing browser data deliberately resets rotation. Active attempts are never persisted.

## Verification contract

Preserve legacy source and canonical markdown byte-for-byte with hash tests. Validate all accepted item metadata and per-option review coverage. Test deterministic form selection, exact quotas, seven disjoint completed forms, exhaustion/reset, previous-form avoidance, abort versus submit, invalid/stale history and both modes. Simulate thousands of forms. Keep existing regression gates and test the real browser flows where tooling permits.
