# Independent peer review of agent candidates

Reviewer: tools/code worker. Accessed/reviewed 2026-09-08. Read all 49 current agent stems, options, keys, explanations, and source references, plus legacy content and tools/code candidates. This is a second review, not central approval.

First-party sources independently retrieved/read: Building effective agents; Effective harnesses for long-running agents; Agent SDK overview, agent-loop, hosting, sessions, subagents, streaming-output, file-checkpointing; Managed Agents overview and sessions. Exact URLs are recorded in the reviewed candidates' sourceRefs. Focused rereads confirmed subprocess/session ownership, turn versus dollar limits, v2.1.217 subagent spend enforcement, v2.1.219 depth/concurrency controls with ultracode exception, resume requirements, output streaming, and checkpoint exclusions.

Findings delivered to central adjudicator:

- AW-039: Successful return from rewindFiles does not necessarily mean every tracked path was restored; current documentation describes skipped links/unsafe paths. State that intended regular-file changes were restored with no skipped paths before asserting that outcome.
- AW-049: Custom-subagent resume instructions additionally require passing the same agent definition. Add that retained-definition condition to the stem; the session and agent IDs remain the uniquely useful identifiers among the options.
- AW-045 and AI-064: Potential exact reasoning duplicate: unit/static evidence does not establish the required user interaction through the running UI. Central adjudication should replace one.
- AW-038 and original CC-008 were exact checkpoint-source duplicates. CC-008 was rejected and replaced by background-task status reasoning.
- AW-008 original dependency-order scenario overlapped TM-006; the agent worker has replaced AW-008 with router-error diagnosis. Reviewed the replacement: supplied labels and conditional specialist accuracy clearly identify the router bottleneck.
- AW-017/CC-004 and AW-020/CC-005 have similar underlying knowledge but concrete CLI versus SDK integration contracts. Central adjudicator accepted these distinctions with shared concept keys to discourage coexistence in a form.

No alternate correct option was identified in the other 46 agents items as read. This is not a guarantee against every possible expert objection. AW-039/AW-049 require the qualifications above; AW-045 requires central duplication disposition. Several wrong choices in operational items are easy; the bank should retain its mixture with more discriminating architectural items rather than claim uniform difficulty.
