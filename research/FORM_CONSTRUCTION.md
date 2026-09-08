# Form construction — conditional design, not frozen

Status: research blocked; no production selector implemented. The user requires 53-item mocks and 120-minute timed mode. Whether these match the current live exam remains unverified.

## Conditional counts

If the supplied weights are verified, largest remainder produces the following. The proposed maximum initial target is seven disjoint forms (371 total), subject to item-by-item quality review.

| Domain | Form quota | Seven-form total | New items IF legacy count equals form quota |
|---|---:|---:|---:|
| Applications & Integration | 17 | 119 | 102 |
| Model Selection & Optimization | 9 | 63 | 54 |
| Agents & Workflows | 8 | 56 | 48 |
| Prompt & Context Engineering | 6 | 42 | 36 |
| Tools & MCPs | 6 | 42 | 36 |
| Security & Safety | 4 | 28 | 24 |
| Claude Code | 2 | 14 | 12 |
| Eval, Testing & Debugging | 1 | 7 | 6 |
| Total | 53 | 371 | 318 |

Crucial constraint: 371 / 53 = 7 is necessary but not sufficient. For quotas q[d] and eligible domain counts b[d], capacity is min_d floor(b[d] / q[d]). Actual new counts are 7*q[d] minus the accepted legacy count for that domain, not automatically the last column. Legacy items lack objective metadata, and the official mapping is unavailable. Seven forms are therefore not yet a defensible promise.

If any legacy question fails the factual quality gate, preserving its text does not make it approved. Resolve its participation with the user before claiming the entire bank is quality-approved.

## Planned algorithm and lifecycle

Retain the reducer and use a pure selector with injected RNG. On mode choice, normalize completed history, validate bank metadata, and calculate all unused domain capacities. If any is below quota, provisionally reset the entire cycle in memory. Prefer items absent from lastCompletedFormIds after a reset; prefer distinct concepts and broad objectives. Shuffle the selected form's question order, never its options.

Hold bank IDs and form positions separately. All navigation, review, flags and scoring must refer consistently to the same selected form. No reselection on render, navigation, review, or theme change.

Only final submission commits the form IDs and any provisional cycle reset. Abort/reload commits nothing. Guard repeated submission against duplicate commits. Malformed or incompatible stored history resets safely; malformed bank content must fail loudly.

Persist bankVersion, cycle, usedQuestionIds and lastCompletedFormIds only, separate from theme preference. No attempt state or result persistence. Storage-unavailable behavior and simultaneous-tab submissions need explicit implementation decisions and tests so the app does not falsely claim durable global disjointness.

## Item construction rules

Official objective mapping and source support are mandatory. Each item requires a binding discriminator, exactly one defensible answer set, plausible but demonstrably wrong distractors, concise explanation, internal distractor rationales, and source references. Review source currency, alternate answers, hidden assumptions, semantic duplicates, and answer-position patterns before APPROVED status.

Single/multiple-response mix is not frozen. No official percentage or sample style was verified. Preserve exact-set mock scoring; require explicit Select TWO/THREE labels for accepted multiple-response items. Define a varied authoring mix after examining public official samples, labeled as an authoring choice unless the guide specifies it.

## Checkpoint decision

FAIL / BLOCKED: official objectives, weights and sample rationales are unavailable. No bulk generation, objective quota commitment, or application implementation is authorized by a passed research gate yet. This is an evidence gap, not a request to reapprove the already-approved change.
