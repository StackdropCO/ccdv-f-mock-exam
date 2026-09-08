# Peer cross-bank duplicate review

Reviewed 2026-09-08 by apps-design worker, independently from the original model/prompt-security drafting workers. Scope: models.json (53), prompt-security.json (59), apps-design.json (47), and the preserved 53 legacy stems. This is a semantic discriminator review, not a claim of independent expert certification validation.

## Material overlaps reported for central adjudication

- PC-029 / AI-076: Python helper strips unsupported numerical constraints and validates against original schema. Same discriminator; replacement requested from prompt/security worker.
- PC-032 / AI-071: native citations plus structured output configuration is incompatible. Same request failure and cause; replacement requested from prompt/security worker.
- MO-010 / PC-013: misleading few-shot correlations repaired by varied demonstrations. Changing length/sentiment to language/topic does not supply a materially new discriminator; replace one.
- PC-010 / legacy37: compact active context plus externally persisted durable milestones. Multiple-response framing does not sufficiently distinguish the design; replace new item.
- AI-083 / legacy38: image content contributes input tokens despite attachment representation. **AI-083 replaced** with authorized removal of PDF encryption before submission; full rejected variant retained in apps-design-decisions.json.
- MO-017 / legacy14: asynchronous SDK avoids blocking network I/O. Root had already flagged and requested replacement before this peer review.

## Related pairs retained as different reasoning

- MO-034 / legacy27: EventSource cannot send upstream application messages on its connection, versus relaying upstream SSE to a separately selected browser WebSocket transport.
- MO-043 / legacy33: per-segment quality requirement hidden by an aggregate score, versus a global quality/latency/cost table.
- PC-030 / legacy7: explicit refusal with HTTP200 and non-JSON content, versus general structured-output completion checks.
- SS-001 / legacy4 and41: precise correction of third-party content promoted into the system channel, versus broader trust boundaries and action controls. Related concept metadata can avoid excessive concentration.
- AI-076 / AI-092: transformed SDK schema versus raw API rejection; share conceptKey schema-unsupported-numeric-constraints to avoid both in one form when feasible.

All findings were sent to root; root owns final dispositions and cross-bank counts. No changes were made to other workers’ draft files during this peer review.
