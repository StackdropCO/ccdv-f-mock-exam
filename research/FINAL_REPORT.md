# Change 2 final report

Repository: StackdropCO/ccdv-f-mock-exam. Branch: `question-bank-rotation`. Continued the user's `be49bd9` checkpoint; research freeze committed as `52411a3`, followed by the implementation/content commit containing this report. Work started from main `d9ec840`; no history rewritten, main merge or deployment performed. The connected GitHub API supplies the private-repository snapshot and creates branch commits because shell cloning lacked credentials.

## Research result

The mirrored [official Exam Guide v1.0, effective July 2026](https://github.com/Amey-Thakur/CLAUDE-CERTIFICATIONS/blob/main/developer-foundations/exam-guide.pdf) establishes CCDV-F, 53 items, 120 minutes, multiple-choice and multiple-response formats, eight domains and 25 weighted skills. Its [provenance record](https://github.com/Amey-Thakur/CLAUDE-CERTIFICATIONS/blob/main/guide/official-sources.md) reports canonical comparison in September 2026. Blueprint facts agree with [Claude Certification Guide](https://claudecertificationguide.com/ccdv-f) and [Panaversity's CCDV-F comparison](https://agentfactory.panaversity.org/docs/certifications/pcdv-f). Mirror provenance is evidence, not a claimed Anthropic attestation. Skilljar/S3 403 did not block progress. Direct Pearson retrieval was unavailable, so delivery statements rely on the mirrored guide.

Official sample rationales were recovered and studied: asynchronous batch cost under a nonurgent requirement, untrusted-content injection boundaries, and maintained live-inventory MCP integration. New questions use the binding-constraint reasoning style without copying samples. Current first-party technical sources are enumerated in SOURCE_MATRIX.md and source-registry.json (92 URLs with per-item assertions). No dump or third-party practice answer key was used for technical correctness.

No exact response-format ratio, difficulty distribution, answer-letter ratio, per-form skill quota, unscored-item count or raw-to-scaled conversion was found published. The mock quotas use largest remainder; skill allocation and difficulty estimates are editorial. No superseding guide was found; this is not proof that a later version cannot exist. Documentation-dependent behavior is dated 2026-09-08, with explicit version conditions where required.

## Bank delivered

53 original + 318 approved new = **371 total**, supporting **seven fully disjoint completed 53-question mocks per cycle**. 343 full candidate variants were drafted; 25 rejected variants were replaced. Minor edits and pre-draft rejected concepts are excluded from those counts. New: 270 single-answer / 48 multiple-response. Combined: 310 single-answer / 61 multiple-response, consisting of 60 Select TWO and one Select THREE.

| Domain | Weight | Per form | Existing | New approved | Total |
|---|---:|---:|---:|---:|---:|
| Agents and Workflows | 14.7% | 8 | 7 | 49 | 56 |
| Applications and Integration | 33.1% | 17 | 13 | 106 | 119 |
| Claude Code | 3.1% | 2 | 2 | 12 | 14 |
| Eval, Testing, and Debugging | 2.6% | 1 | 2 | 5 | 7 |
| Model Selection and Optimization | 16.8% | 9 | 10 | 53 | 63 |
| Prompt and Context Engineering | 11% | 6 | 7 | 35 | 42 |
| Security and Safety | 8.1% | 4 | 4 | 24 | 28 |
| Tools and MCPs | 10.6% | 6 | 8 | 34 | 42 |

| Skill | Published weight | Existing | New approved | Total |
|---|---:|---:|---:|---:|
| D1.1 Agent Architecture | 4.5% | 4 | 13 | 17 |
| D1.2 Agent Construction with Claude | 5.3% | 2 | 18 | 20 |
| D1.3 Agent Patterns and Frameworks | 4.9% | 1 | 18 | 19 |
| D2.1 Understanding Requirements | 3.4% | 1 | 11 | 12 |
| D2.2 Systems Life Cycle | 2.8% | 1 | 9 | 10 |
| D2.3 Claude API Mechanics | 6.8% | 5 | 19 | 24 |
| D2.4 Software Engineering Foundations | 7.4% | 2 | 25 | 27 |
| D2.5 Claude Application Design | 8.6% | 1 | 30 | 31 |
| D2.6 Configuration Management | 4.1% | 3 | 12 | 15 |
| D3.1 Claude Code Operation | 3.1% | 2 | 12 | 14 |
| D4.1 Debugging and Error Handling | 2.6% | 2 | 5 | 7 |
| D5.1 LLM Fundamentals | 5.2% | 3 | 16 | 19 |
| D5.2 Technical Fundamentals | 6.1% | 3 | 20 | 23 |
| D5.3 Model Selection and Tradeoffs | 2.7% | 2 | 8 | 10 |
| D5.4 Cost and Token Management | 2.8% | 2 | 9 | 11 |
| D6.1 Context Engineering | 3.8% | 3 | 11 | 14 |
| D6.2 Prompt Engineering | 4.6% | 2 | 16 | 18 |
| D6.3 Output Handling | 2.6% | 2 | 8 | 10 |
| D7.1 AI Application Security | 3.2% | 1 | 10 | 11 |
| D7.2 Guardrails and Safe Deployment | 2.3% | 1 | 7 | 8 |
| D7.3 Claude Hooks | 1% | 1 | 2 | 3 |
| D7.4 Identity, Secrets, and Key Management | 1.6% | 1 | 5 | 6 |
| D8.1 Tool Implementation | 4.4% | 4 | 13 | 17 |
| D8.2 MCP Server Development | 2.1% | 2 | 6 | 8 |
| D8.3 Agentic Customization | 4.1% | 2 | 15 | 17 |

The new per-domain counts fill actual legacy coverage, which differs from the provisional allocation in the request. QUESTION_BANK_AUDIT.md includes batch rejection accounting, ambiguity/duplication findings, response distribution and source coverage. Rejected versions and peer findings are retained. Central content hashes prevent a later edit from silently retaining an old approval.

## Implementation

Static bank plus pure injectable-RNG selector plus existing reducer. Each mode choice creates one in-memory form; bank IDs project to existing question positions 1–53. Internal navigation, flags, review and theme changes cannot regenerate it. Timed and Untimed share selection/scoring; timer behavior remains 120 minutes, untimed has no countdown. Exact-set grading and post-submission explanation visibility are preserved.

Selection validates bank metadata and history, fills exact quotas from unused IDs, favors distinct concepts and weighted skill breadth, then uses authored type/answer-position balance as tie-breakers. Question order is shuffled; option order is fixed. When any domain cannot fill another form, all used IDs reset together in the proposed form history, avoiding the last completed form where possible. Only final submission commits history; aborts do not. Duplicate submission is guarded.

Persisted data is limited to theme preference and completed history: `{bankVersion, cycle, usedQuestionIds, lastCompletedFormIds}` under `ccdv-f-question-history-v2`. Active answers, flags, selected form, position, timer, result and mode are NOT persisted. Invalid JSON/IDs/counts or a stale bank version safely normalize to fresh history. Storage failure preserves scoring and in-page rotation with a visible limitation. Concurrent tabs are not transactional; detected intervening history changes produce a notice and preserve the newer stored history.

## Files and tests

Added bank metadata/blueprint/validation modules, eight grouped new-question modules and index, pure form selection, small history helper, reproducible content export script, four test suites and original-content hash fixtures. Changed `useExamState`, `App`, start/results copy, package script and the intentional completed-history assertion in the old no-persistence test. Existing reducer, scoring, timer, theme logic, CSS and canonical questions remain unchanged. REQUIREMENTS.md preserves prior history and appends Approved Change 2 plus the corrected evidence methodology. Research includes blueprint, matrix, construction, complete legacy audit, full authoring/rejection/source/central-review records, bank audit and simulation output.

Verification: **73 tests passed in 12 files**. Existing 51 baseline tests remain, with only the authorized persistence exception updated. New tests cover selection invariants, malformed/stale history, exact approved-bank content and sources, original hashes, stable active forms, submit versus abort, reload/remount, storage failure/recovery, cross-tab conflict, scoring the selected form, both modes and DOM interaction flows. Simulations cover **2,800 synthetic forms plus 1,400 actual-bank forms**: no quota failures, within-cycle repeats or avoidable immediate-reset overlap.

`npm run typecheck`: PASS. `npm run lint`: PASS. `npm run build`: PASS. Production JS is about 750 kB / 213 kB gzip; Vite reports its normal >500 kB chunk-size warning because the complete static bank ships with the app. The warning was not suppressed and no backend or lazy question service was introduced. npm also reports a pre-existing environment http-proxy configuration warning.

Functional DOM smoke: PASS for first visit, Timed start, 53-question navigation, answer/flag, mobile navigator drawer, exit cancel, submission confirmation, score, answer review and flagged filter, another mock, Untimed mode, zero completed-form overlap, and seven forms plus reset. Hook/regression tests verify leave warning, active-attempt loss on remount, completed-history survival and theme behavior. Live browser smoke could not run: the provided browser blocked the local preview URL with ERR_BLOCKED_BY_CLIENT. Therefore rendered mobile layout, real browser unload-dialog behavior and visual theme appearance are not claimed newly browser-verified. No deployment was made to bypass that restriction.

## Remaining qualifications

The legacy audit finds 47 supported originals, four precision caveats (Q1, Q7, Q9, Q40), and two substantive concerns (Q31's purported JSON Schema and Q42's absolute plan-mode safety claim). Their proposed corrections are concrete and sourced in LEGACY_QUESTION_AUDIT.md; no original text/key/explanation was altered. These retained issues mean the combined bank is not presented as universally free of known concerns.

All 318 new items passed the same editorial standard from beginning to end. I judge the new-item quality consistent, with source-grounded unique answer sets after adversarial and duplicate review. This does not replace human subject-matter review or psychometric calibration; difficulty estimates are editorial. Greedy concept preference is not globally optimal packing: 79/1,400 simulated forms had at most two repeated concept keys when pools narrowed. Exact IDs remained disjoint throughout each cycle. Multi-tab simultaneous attempts and unavailable/cleared localStorage remain explicitly bounded limitations of browser-local rotation.
