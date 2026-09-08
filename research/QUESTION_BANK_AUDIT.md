# Question bank audit

Final editorial audit: 2026-09-08. This supersedes the initial research-access checkpoint, which remains in branch history. Scope: original public-objective practice content, not leaked questions, official endorsement or psychometric calibration.

## Counts and acceptance accounting

53 original questions retained unchanged; **343 fully drafted candidate variants, 25 rejected/replaced variants, 318 new approved items, 371 total**. Replaced variants reuse their candidate slot's ID; they are not extra published questions. Minor wording/distractor revisions are not counted as additional full drafts. Pre-item rejected ideas are separate and excluded from these counts.

| Authoring batch | Fully drafted variants | Rejected variants | Accepted |
|---|---:|---:|---:|
| Applications core | 65 | 1 | 64 |
| Application design and debugging | 50 | 3 | 47 |
| Agents | 54 | 5 | 49 |
| Models | 55 | 2 | 53 |
| Prompt and security | 64 | 5 | 59 |
| Tools and Code | 55 | 9 | 46 |
| Total | 343 | 25 | 318 |

New items: 270 single-answer, 48 Select TWO, zero Select THREE. Preserved items: 40 single-answer, 12 Select TWO, one Select THREE. Combined: **310 single-answer, 61 multiple-response (60 TWO, one THREE)**. The 15.1% new multiple-response mix was an editorial outcome, not an official exam percentage. Quality took priority over making every batch or form share an exact format ratio.

## Domain and official skill distribution

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

Weights are guide percentages of the whole exam. D-number identifiers and primary legacy mappings are editorial; skill names/order come from the guide. The original 53 are not distributed exactly as the new mock quotas. Therefore generation counts differ from the user's provisional six-times-domain-quota numbers: the new bank fills the actual legacy deficits. Every domain now has exactly seven times its mock quota.

## Review performed

The central blueprint and authoring contract were frozen before parallel domain drafting. Each author read current primary sources, drafted by skill, recorded a binding discriminator and why every wrong option fails, and challenged alternative interpretations. Cross-domain peer reviews compared candidate concepts with one another and the legacy bank. Central adjudication read all 318 current stems, options, keys and explanations, reviewed supporting assertions and peer findings, and returned ambiguous, stale or redundant candidates for replacement or revision. Approval hashes bind the precise published fields to the reviewed version; the generation script cannot approve its own drafts.

Authoring JSON retains its historical CANDIDATE label. Final authority is `reviews/central-approval.json`, whose 318 entries are APPROVED; production records carry APPROVED. Preserved originals carry LEGACY_RETAINED, not a misleading new-item approval.

Rejected variants and revision reasons are retained in `reviews/*-decisions.json` and the separate rejected-variant files. Examples: AW-045 completion evidence duplicated AI-064; AI-083 PDF visual-token reasoning duplicated legacy Q38; PC-032 schema/business-validity reasoning duplicated AI-071; TM-008's first schema/business-truth variant duplicated existing coverage; MO-010 duplicated a prompt demonstration distinction. Their replacements test different requirements. AI-057 was changed from a redundant Select TWO pair to a single discrimination. Plausible alternatives were strengthened across all six batches, rather than accepting irrelevant distractors merely to fill slots.

Stale assumptions rejected before full drafting include “SDK subagents cannot nest,” “omitted settingSources loads no files,” “plugin manifests are always mandatory,” and a universal sandbox-ownership distinction contradicted by current Managed Agents capabilities. Version-dependent accepted questions state their model/API/SDK conditions where needed. Hypothetical cost and measurement tables are labeled by their stems rather than passed off as published benchmarks.

## Duplicate and ambiguity findings

No normalized exact duplicate stems or option sets. Manual semantic review is the main duplicate check. A supplementary TF-IDF stem/explanation/correct-option comparison flagged four pairs above 0.25; this is a screening heuristic, not proof of uniqueness. AI-034/035 distinguish typed base64 versus URL input; AI-079/091 distinguish repository checkout from plugin-root location; AI-076/092 distinguish SDK schema transformation from raw unsupported-schema validation. Shared concept keys discourage closely related distinctions in one form. Legacy Q8/Q50 are a known retained near-duplicate; Q4/Q41 share a trust-boundary concept.

All 318 new items have a recorded alternate-answer challenge and exact per-wrong-option rationale. Editorial review found no unresolved alternate answer set in an accepted new item. This is a reasoned, source-backed judgment; it does not claim infallibility or candidate-tested difficulty calibration. The same approval contract was applied to the final items as to the first items.

## Source coverage and legacy exception

318/318 new items have source references and current-source assertions; 92 distinct primary technical URLs. The structured registry distinguishes Anthropic/Claude/MCP Level A from primary language/protocol/web-standard references for software foundations. No third-party practice answer keys or dumps establish correctness.

Legacy audit: 47 supported, four precision caveats (Q1, Q7, Q9, Q40), two substantive concerns (Q31, Q42). Q31 displays a non-schema object while calling it a schema. Q42 overstates plan mode as an unconditional nonmutation guarantee under current configurable permissions. Proposed corrections and sources are in LEGACY_QUESTION_AUDIT.md. Originals remain unchanged and selectable under the user's preservation instruction. Consequently the entire combined bank cannot honestly be described as free of known legacy concerns; all 318 new items passed the new standard.

## Form and answer-position audit

Seven fully disjoint 53-question forms per completed cycle. The actual bank was tested across 1,400 forms / 200 cycles; synthetic fixtures across 2,800 forms / 400 cycles. No domain-quota failures, within-cycle repeated IDs or avoidable immediate previous-form repeats at reset occurred.

Authored single-answer positions: new A=68, B=68, C=68, D=66; combined A=76, B=80, C=81, D=73. Runtime options remain fixed. The selector uses type and answer-position balance only after reset avoidance, concept diversity and weighted skill coverage. Actual simulation per-form single-answer counts: A 8–15, B 9–15, C 9–13, D 9–13. Multiple-response counts ranged 4–12. These observed ranges are not guaranteed quotas.

79 of 1,400 forms contained a repeated concept key, with at most two repeats, as remaining domain pools became constrained. This does not violate disjoint IDs or domain quotas; concept avoidance is a preference, not a claim of a global optimal packing algorithm. Full simulation metrics are in reviews/rotation-simulation.json.
