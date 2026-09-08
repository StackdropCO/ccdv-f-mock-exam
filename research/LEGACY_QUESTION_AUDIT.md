# Legacy question audit — preliminary concerns

Date: 2026-09-08. All 53 original items are preserved. This is not a completed source-by-source audit; official objective mapping remains blocked.

| ID | Concern | Authoritative reference | Proposed correction for separate approval |
|---|---|---|---|
| 1 | “Overnight” can be read as a binding completion deadline. Batches are a cost-efficient fit, but docs allow processing up to 24 hours and expiry without completion. Do not imply overnight completion is guaranteed. | https://platform.claude.com/docs/en/build-with-claude/batch-processing | Explicitly permit up to 24 hours and handling/retrying expired jobs, or state overnight is a preference rather than a guaranteed deadline. |
| 31 | The displayed object is an example instance, not a JSON Schema, despite being introduced as “this schema.” D's business-rule distinction is sensible, but the stem conflates schema and instance. | https://platform.claude.com/docs/en/build-with-claude/structured-outputs | Describe it as a returned JSON object conforming to a separately defined schema. |
| 42 | B remains the best offered mode, but the absolute “must not ... make mutating changes” framing and explanation overstate plan mode as universal enforcement. Current docs describe classifier-approved commands and bypass-available exceptions. | https://code.claude.com/docs/en/permission-modes ; https://code.claude.com/docs/en/permissions | Specify the configuration and ask which mode is intended for inspection/planning; distinguish mode intent from a hard sandbox boundary. |

## Semantic overlap identified by manual inspection

Items 8 and 50 test the same large-context subagent isolation distinction with changed task settings. Items 9/51 substantially overlap deliberate model promotion; 4/41 overlap trusted versus retrieved instructions. Preserve them; assign shared or related concept metadata after objective mapping, then avoid grouping near-duplicates where feasible.

## Audit limits

None of the other items has received a full current-source approval in this session. Existing items have no sourceRefs, domain, objective, or conceptKey. Do not infer “no concerns” from absence in the table. Item 33's numbers are explicit scenario data; they should not be represented as current measured model benchmarks.
