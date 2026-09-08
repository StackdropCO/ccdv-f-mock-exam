# Tools and Claude Code source reading notes

Accessed 2026-09-08. All URLs below retrieved through fresh web reads; protocol questions explicitly pin MCP 2025-11-25. Technical evidence is Level A. Source assertions in the candidate file identify the narrow fact used for each question.

- https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools — Used for TM-001, TM-002, TM-003, TM-011, TM-012. Read relevant sections, including limitations; no practice answer keys used.
- https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls — Used for TM-004, TM-005. Read relevant sections, including limitations; no practice answer keys used.
- https://platform.claude.com/docs/en/agents-and-tools/tool-use/parallel-tool-use — Used for TM-006, TM-007, TM-013. Read relevant sections, including limitations; no practice answer keys used.
- https://platform.claude.com/docs/en/agents-and-tools/tool-use/strict-tool-use — Used for TM-008. Read relevant sections, including limitations; no practice answer keys used.
- https://www.anthropic.com/engineering/writing-tools-for-agents — Used for TM-009, TM-010. Read relevant sections, including limitations; no practice answer keys used.
- https://modelcontextprotocol.io/specification/2025-11-25/basic/lifecycle — Used for TM-014. Read relevant sections, including limitations; no practice answer keys used.
- https://modelcontextprotocol.io/specification/2025-11-25/basic/transports — Used for TM-015. Read relevant sections, including limitations; no practice answer keys used.
- https://modelcontextprotocol.io/specification/2025-11-25/server/resources — Used for TM-016. Read relevant sections, including limitations; no practice answer keys used.
- https://modelcontextprotocol.io/specification/2025-11-25/server/prompts — Used for TM-017. Read relevant sections, including limitations; no practice answer keys used.
- https://modelcontextprotocol.io/specification/2025-11-25/server/tools — Used for TM-018, TM-019. Read relevant sections, including limitations; no practice answer keys used.
- https://code.claude.com/docs/en/skills — Used for TM-023, TM-029, TM-030, CC-010. Read relevant sections, including limitations; no practice answer keys used.
- https://code.claude.com/docs/en/memory — Used for CC-001, CC-006, CC-007, CC-011, CC-012. Read relevant sections, including limitations; no practice answer keys used.
- https://code.claude.com/docs/en/features-overview — Used for TM-020, TM-034. Read relevant sections, including limitations; no practice answer keys used.
- https://code.claude.com/docs/en/plugins — Used for TM-027, TM-028. Read relevant sections, including limitations; no practice answer keys used.
- https://code.claude.com/docs/en/headless — Used for CC-004, CC-005. Read relevant sections, including limitations; no practice answer keys used.
- https://code.claude.com/docs/en/settings — Used for CC-002, CC-003. Read relevant sections, including limitations; no practice answer keys used.
- https://code.claude.com/docs/en/checkpointing — Used for CC-008. Read relevant sections, including limitations; no practice answer keys used.
- https://code.claude.com/docs/en/mcp — Used for CC-009. Read relevant sections, including limitations; no practice answer keys used.
- https://code.claude.com/docs/en/agent-sdk/custom-tools — Used for TM-021, TM-026. Read relevant sections, including limitations; no practice answer keys used.
- https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-fetch-tool — Used for TM-024. Read relevant sections, including limitations; no practice answer keys used.
- https://platform.claude.com/docs/en/agents-and-tools/tool-use/code-execution-tool — Used for TM-022. Read relevant sections, including limitations; no practice answer keys used.
- https://platform.claude.com/docs/en/agents-and-tools/tool-use/bash-tool — Used for TM-025. Read relevant sections, including limitations; no practice answer keys used.
- https://platform.claude.com/docs/en/agents-and-tools/mcp-connector — Used for TM-033. Read relevant sections, including limitations; no practice answer keys used.
- https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices — Used for TM-031, TM-032. Read relevant sections, including limitations; no practice answer keys used.

Current behavior cautions: forced any/tool selection is model/thinking dependent, so no universal forced-tool question was drafted. Platform Skills overview makes broad no-sync claims while the current Claude Code skills documentation describes account-synced skills; the broad cross-surface question idea was rejected. Only the server-side Messages MCP connector is tool-only; separate client-side helpers can support prompts/resources. Plan-mode absolute safety was deliberately excluded.

Self-review: 46 candidates written, 0 approved by this worker. Each includes a binding discriminator, per-incorrect-option rejection reason, alternate-interpretation challenge, and comparison to related concepts. Central approval still required. The next review should particularly inspect skill/API connector feature boundaries, which evolve quickly.

Second review: nine full variants rejected as cross-bank semantic duplicates and replaced; rejected content preserved. 55 full variants drafted historically, nine rejected, 46 current candidates (42 single, four multiple). Distractor revisions reduce unrelated alternatives; TM-011 starting schema made explicit. Additional first-party reads 2026-09-08:
- https://code.claude.com/docs/en/interactive-mode — current operational behavior used by replacements.
- https://code.claude.com/docs/en/cli-reference — current operational behavior used by replacements.
- https://code.claude.com/docs/en/common-workflows — current operational behavior used by replacements.

## Current source-to-item mapping after replacements

The earlier item-ID mapping describes the first draft, preserved here chronologically. This map supersedes it for current candidates.

- https://code.claude.com/docs/en/agent-sdk/custom-tools — TM-021, TM-026
- https://code.claude.com/docs/en/cli-reference — CC-011
- https://code.claude.com/docs/en/common-workflows — CC-007
- https://code.claude.com/docs/en/features-overview — TM-020
- https://code.claude.com/docs/en/headless — CC-004, CC-005
- https://code.claude.com/docs/en/interactive-mode — CC-008
- https://code.claude.com/docs/en/mcp — CC-009
- https://code.claude.com/docs/en/memory — CC-001, CC-002, CC-006, CC-012
- https://code.claude.com/docs/en/settings — CC-003
- https://code.claude.com/docs/en/skills — TM-023, TM-027, TM-028, TM-029, TM-030, TM-034, CC-010
- https://modelcontextprotocol.io/specification/2025-11-25/basic/lifecycle — TM-014
- https://modelcontextprotocol.io/specification/2025-11-25/basic/transports — TM-015
- https://modelcontextprotocol.io/specification/2025-11-25/server/prompts — TM-017
- https://modelcontextprotocol.io/specification/2025-11-25/server/resources — TM-016
- https://modelcontextprotocol.io/specification/2025-11-25/server/tools — TM-018, TM-019
- https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices — TM-031, TM-032
- https://platform.claude.com/docs/en/agents-and-tools/mcp-connector — TM-033
- https://platform.claude.com/docs/en/agents-and-tools/tool-use/bash-tool — TM-025
- https://platform.claude.com/docs/en/agents-and-tools/tool-use/code-execution-tool — TM-022
- https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools — TM-001, TM-002, TM-003, TM-008, TM-011, TM-012
- https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls — TM-004, TM-005
- https://platform.claude.com/docs/en/agents-and-tools/tool-use/parallel-tool-use — TM-006, TM-007, TM-013
- https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-fetch-tool — TM-024
- https://www.anthropic.com/engineering/writing-tools-for-agents — TM-009, TM-010
