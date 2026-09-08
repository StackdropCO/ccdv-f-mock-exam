# Prompt/context and security source reading notes

Accessed 2026-09-08. All sources below were retrieved through live web research, then relevant text sections were read. Level A means publisher-controlled documentation, not a guarantee that every sentence is universally applicable. Candidate records carry the narrower supporting assertions. The guide skills were read in the mirrored PDF extraction; objective IDs are the project's local IDs. No third-party practice items or answer keys were used.

| Source | Read sections / establishes | Candidate scope |
|---|---|---|
| https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents | Context retrieval, hybrid retrieval, compaction fidelity, structured notes and reloading. Published 2025-09-29; used only for still-documented conceptual patterns. | D6.1 |
| https://platform.claude.com/docs/en/build-with-claude/context-editing | Server-side editing leaves client history intact; exclude_tools, clear_tool_inputs, clear_at_least; tool clearing/cache interaction. | D6.1 |
| https://platform.claude.com/docs/en/build-with-claude/compaction | compact_20260112 pause/continuation, passing compaction blocks back, custom instructions replace the default. | D6.1 |
| https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices | Explicit instructions, examples, structuring, role placement, long-data/query layout, positive formatting instructions, motivation, tool intent, version-dependent prefill migration. | D6.2 |
| https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview | Success criteria and empirical tests before prompt iteration. Also corroborated by the root's frozen source matrix. | D6.2 |
| https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations | Allow uncertainty; source quotations before analysis; verify claims and retract unsupported statements; mitigation is not elimination. | D6.2 |
| https://platform.claude.com/docs/en/build-with-claude/structured-outputs | Separate JSON-output and strict-tool surfaces, SDK schema transformation plus local validation, refusal200 exception, enum casing exception, native citation incompatibility, combined schema complexity, regex restrictions, text payload, PHI/schema separation. | D6.3, D7.1 |
| https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks | Direct versus indirect threat models, third-party content in tool_result, own instructions in a following user turn, JSON encoding, tool-output screens, end-to-end red-team checks, ongoing monitoring. | D7.1, D7.2 |
| https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-prompt-leak | Remove unnecessary proprietary detail; output screening; no foolproof technique; complex leak controls can degrade task performance. | D7.1, D7.2 |
| https://code.claude.com/docs/en/sandboxing | OS-enforced Bash/child-process boundary; complementary network/filesystem isolation; separate from pre-execution permission review; not automatically all remote tools. | D7.2 |
| https://code.claude.com/docs/en/hooks | PreToolUse does not see @ file references; Read deny rule alternative; deny outranks allow from multiple matching hooks. | D7.3 |
| https://modelcontextprotocol.io/docs/2025-11-25/tutorials/security/security_best_practices | Live redirect of the versioned basic/security_best_practices URL. SSRF redirect validation, session IDs not authentication, token-derived user/session binding, one-click local-server exact-command consent. | D7.1 |
| https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization | Intended audience validation and prohibition on token passthrough; downstream credential separation. | D7.4 |
| https://github.com/anthropics/anthropic-sdk-typescript | Official SDK README browser security warning and dangerouslyAllowBrowser. | D7.4 |
| https://support.claude.com/en/articles/9767949-api-key-best-practices-keeping-your-keys-safe-and-secure | Official guidance dated2026-03-16: do not send keys in support tickets; dotenv exclusion/cloud encrypted secrets; usage/log monitoring. | D7.4 |
| https://code.claude.com/docs/en/security | Read for boundary context; permission-mode conditions and user responsibility. Not used as a substitute for the more precise sandbox/hook references. | Context only |

## Explicit source caveats preserved in drafting

- No question treats prompt wording, XML tags, or JSON serialization as a complete security guarantee.
- Prompt-layout questions ask what the documented recommendation is; they do not invent a guaranteed percentage improvement.
- PC-023 pins Sonnet4.6 for final-turn prefill incompatibility. Older models differ.
- PC-006/007 explicitly name the compaction feature; support is stipulated in PC-006. Newest-model internal thinking changes are not tested.
- PC-031 tests the current enum capitalization caveat explicitly; revisit it if Anthropic changes that documented behavior.
- SS-006 does not claim legal compliance; an approved arrangement for message content is stipulated, and the question tests the documented schema-artifact distinction.
- MCP technical behavior is grounded in the named2025-11-25 specification and publisher's versioned security guidance.
- Failed Admin API guessed URL retrievals supplied no evidence and produced no questions.

## Authoring and adversarial review

Drafted in bounded objective batches:11 context,16 prompt,8 output,10 application security,7 guardrails,2 hooks,5 identity. Every candidate has a binding discriminator, first-party assertion, rationale for every wrong option, and an alternative-interpretation challenge. A second pass revised36 items' distractors after root feedback that several initial alternatives were too remote. The before/after choices are preserved in the decisions JSON. Final set:59 candidates,11 multiple response,48 single response. All remain CANDIDATE pending root adjudication.

Three concept outlines were rejected before full drafting: a refund/schema semantic-validity item (legacyQ31 duplicate), a large-repository isolated-subagent item (legacyQ8/Q50 duplicate), and universal assistant-prefill support (stale/version-dependent). These are not counted as fully drafted/rejected items. No rejection count is manufactured.

## Central cross-bank review and replacement pass

The root and peer reviewers identified five complete variants whose reasoning duplicated another item. Those originals are retained in `prompt-security-rejected-variants.json`: PC-010 (legacy37), PC-025 (combined PC013/015 without new reasoning), PC-029 (AI076), PC-032 (AI071), and SS-003 (AI044). All five were rejected and replaced within the same objective. Cumulative full variants drafted:64; full variants rejected:5; current candidates:59. The three earlier rejected outlines remain separate and are not counted as full items. Current response mix remains48 single and11 multiple.

Additional first-party reading on2026-09-08:

- https://platform.claude.com/docs/en/build-with-claude/citations — successfully retrieved through the old docs.anthropic.com redirect after direct retrieval timed out. Read citation coordinate bases and exclusive end indices. PC-032 now tests a PDF renderer's inclusive-end defect.
- Compaction docs, token-counting section — counting applies existing compaction blocks but does not trigger new compaction. PC-010 now tests this preflight/execution distinction.
- Structured-output docs, supported required/null/union types — PC-029 now tests required presence separately from nullable value, rather than SDK schema transformation.
- Prompting best practices, overtriggering guidance — PC-025 now tests replacing an obsolete unconditional search directive with the current evidence-gap policy.
- MCP security guide, OAuth Authorization URL Validation — SS-003 now tests URL scheme validation and non-shell opening as separate controls. ProductionHTTPS is explicit so the loopbackdevelopment exception is not hidden.

Read all64 apps-core candidates, including stems, choices and keys, and compared with all53 legacy stems and this59-item set. Reported AI044/SS003 exact duplicate to root and replaced SS003. Reported related but distinct candidate pairs AI031/AI038, AI005/PC012, AI017/SS017, AI024/AI050; root adjudicated shared-concept metadata where useful and retention based on distinct API/lifecycle mechanics. No additional exact semantic duplicate with the legacy53 was found in that review.
