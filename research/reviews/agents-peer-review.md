# Independent cross-bank review by Agents author

Reviewed 2026-09-08: all 46 candidates in `tools-code.json` and all 47 then-current candidates in `apps-design.json`, compared with the 49 Agents candidates and the original 53 stems. This records the reviewed snapshot: several authors have since replaced the identified variants. It is not a claim that those defects remain in the final bank. No peer production or draft file was modified by this reviewer.

## Strong semantic duplicates identified

| Reviewed pair | Shared binding discriminator | Recommendation |
|---|---|---|
| TM-027 / AI-081 | Explicitly select one plugin's same-named skill using plugin namespace | Replace one |
| TM-034 / AI-080 | Package several maintained extension types as one reusable plugin | Replace one |
| CC-002 / AI-095 | Personal setting for one checkout, without global or shared effects, belongs in project-local settings | Replace one; the extra untracked-file answer does not rescue the repeated primary decision |
| CC-007 / AI-104 | Load specialized guidance only for matching file paths | Replace one |
| CC-011 / AI-098 | Relative CLAUDE.md imports resolve against the importing file | Replace one |
| TM-028 / AI-091 | Plugin components belong at the plugin root alongside .claude-plugin | Replace one; directory-layout repair and path selection expose the same root distinction |
| TM-008 / legacy Q31 | Schema-valid data can still violate application/business constraints | Preserve legacy; replace new candidate |
| TM-032 / AW-009 | Validate a structured intermediate artifact before the next expensive or mutating stage | Replace one; wrapping the gate in a skill does not change the tested distinction |
| CC-008 / AW-038 | File-edit checkpointing excludes Bash mutations | Root chose retain AW-038 and replace CC-008 |
| TM-006 / AW-008 | A dependent read must follow its producing write/stage | AW-008 replaced with measured routing-bottleneck diagnosis |

## Related topics with materially different reasoning

- TM-007 versus legacy Q48: a skipped, unexecuted call still needs its own error result, versus reporting a tool that actually ran and failed. The skipped-call obligation is a distinct lifecycle case.
- TM-005 versus legacy Q2: reverse completion of two same-named tools tests call-ID correlation, whereas legacy Q2 asks the basic next step after a client tool request.
- AI-076 versus AI-092: a schema-transforming SDK helper retains original validation, whereas a raw API caller must repair an unsupported schema and preserve business checks itself.
- AW-017 versus CC-004: selecting a supported subprocess bridge from another language versus invoking print mode in an existing CLI integration. Root permits both with a shared concept key.
- AW-020 versus CC-005: SDK partial-event configuration versus the concrete CLI JSON-lines flag combination. Root permits both with a shared concept key.
- AW-035 versus AW-039: session forking does not isolate the filesystem, while file rewinding does not rewind conversation. These operate on different state layers and are retained after scope qualifications.

## Ambiguity and distractor concerns

TM-011 originally described a property present in `properties` but missing from `required`, then asked for TWO schema changes including declaring string type. It did not establish that string type was absent. Show the initial schema or explicitly state that both type and required declaration are missing.

No demonstrated answer-key contradiction was found in the remaining peer snapshot. This is an adversarial content/duplication review, not a replacement for each author's source reading or central technical adjudication.

Several tools/code distractors were too easily eliminated without topic knowledge, including model-weight registration (TM-026), output tokens enabling network (TM-022), a larger model merging filesystems (TM-025), a transport per release tag (TM-030), and guessed instruction paths (CC-012). Root and authors were notified. Apps-design was already revising weak distractors during this review.

## Inbound peer review and changes to Agents candidates

- AW-039: success alone does not prove every intended file was restored because unsafe/link paths can be skipped. Revised to establish restored regular files and no skipped paths explicitly.
- AW-049: added the prerequisite that the same programmatic agents definition is supplied when resuming the custom worker.
- AW-045 versus AI-064: both tested running-interface verification. Replaced AW-045 with preserving immutable acceptance criteria while allowing verified completion-status changes in a long-running agent's feature ledger.
- Strengthened central-review distractors and recorded all replacements in `agents-decisions.json`.

The Agents set contains 49 current candidates drawn from 54 fully authored variants, with five replaced full variants. Three concepts were rejected before complete drafting and are counted separately. Approval remains the root reviewer's responsibility.
