# Agents and Workflows source reading notes

Accessed 2026-09-08. All entries below are Level A first-party pages actually retrieved and read. Guide skill descriptions D1.1–D1.3 were read from the mirrored official guide. All items remain CANDIDATE pending central adjudication.

- [patterns](https://www.anthropic.com/engineering/building-effective-agents): used by AW-001, AW-002, AW-003, AW-004, AW-005, AW-006, AW-007, AW-008, AW-009, AW-010, AW-011, AW-032.
- [overview](https://code.claude.com/docs/en/agent-sdk/overview): used by AW-014, AW-017.
- [loop](https://code.claude.com/docs/en/agent-sdk/agent-loop): used by AW-018, AW-019, AW-026, AW-027, AW-028, AW-031, AW-047, AW-048.
- [hosting](https://code.claude.com/docs/en/agent-sdk/hosting): used by AW-016, AW-025, AW-029, AW-030.
- [managed](https://platform.claude.com/docs/en/managed-agents/overview): used by AW-015, AW-022.
- [sessions](https://code.claude.com/docs/en/agent-sdk/sessions): used by AW-033, AW-034, AW-035, AW-036, AW-037.
- [subagents](https://code.claude.com/docs/en/agent-sdk/subagents): used by AW-012, AW-013, AW-040, AW-041, AW-042, AW-049.
- [harness](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents): used by AW-043, AW-044, AW-045, AW-046.
- [stream](https://code.claude.com/docs/en/agent-sdk/streaming-output): used by AW-020, AW-021.
- [checkpoint](https://code.claude.com/docs/en/agent-sdk/file-checkpointing): used by AW-038, AW-039.
- [managedsession](https://platform.claude.com/docs/en/managed-agents/sessions): used by AW-023, AW-024.

## Boundaries observed during drafting

- Current SDK documentation permits nested subagents and distinguishes fork from non-fork context inheritance. No historical blanket no-nesting claim was used.
- Managed Agents now includes a self-hosted sandbox option; self-hosting alone does not uniquely select Agent SDK. Product selection items instead bind control of the loop or own-process library requirements.
- SDK allowedTools auto-approval is not a complete tool-surface restriction. The narrow reviewer question uses AgentDefinition.tools, whose omission/inclusion behavior was read directly.
- Session resume/fork preserves conversations, not filesystem branches. File checkpointing is limited to tracked tool edits; main-agent qualification avoids subagent exceptions.
- SDK events and Managed Agents beta fields are based on documentation accessed on the stated date. No model-specific versions or exact performance figures are used.
- The 2024 architecture article labels examples as patterns, not universal prescriptions. Scenario constraints make the architectural choices unique; no claim that every task benefits from agents, parallelism, or voting.
- Checked existing Q5/Q8/Q17/Q23/Q30/Q37/Q43/Q50 for semantic overlap. Candidate items test more specific transitions, identity/state boundaries, or evidence conditions than those legacy stems.

## Central and cross-bank review revisions

The final candidate set remains 49 items. Four earlier full draft variants were replaced (AW-008, AW-027, AW-037, AW-048), for 53 fully authored variants total. Three rejected pre-draft concepts remain separately counted. AW-008 now diagnoses a measured routing bottleneck; AW-048 now distinguishes version-qualified subagent nesting depth from concurrency. AW-048 uses the first-party subagents documentation, including the explicit ultracode exception, read during drafting. Ten other alternatives were strengthened after central review. All candidates still require root approval.

Final peer corrections qualify AW-039 regular-file restoration/no skipped paths, retain the programmatic definition in AW-049, and replace AW-045 with acceptance-ledger integrity. Total authored full variants now 54, of which five were replaced; 49 candidates remain. Pre-draft rejected concepts remain a separate count of three.
