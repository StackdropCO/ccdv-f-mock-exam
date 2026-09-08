# Source matrix

Research checkpoint frozen 2026-09-08. Evidence levels: **A** accessible first-party Anthropic/Claude/MCP/Pearson documentation; **B** mirrored official document with provenance; **C** independent guide-based corroboration; **D** community impressions, never technical authority. Blueprint B + C is sufficient; individual technical answers normally require A. Skilljar HTTP 403 does not block generation.

| Level | Source | Establishes | Accessed |
|---|---|---|---|
| B | [Mirrored official Exam Guide v1.0](https://github.com/Amey-Thakur/CLAUDE-CERTIFICATIONS/blob/main/developer-foundations/exam-guide.pdf) | July 2026 version; format; domains; 25 skills and weights; three illustrative samples and rationales | 2026-09-08 |
| C (provenance) | [Mirror provenance](https://github.com/Amey-Thakur/CLAUDE-CERTIFICATIONS/blob/main/guide/official-sources.md) | Maintainer reports canonical comparison 2026-09-05; this report is not an Anthropic attestation | 2026-09-08 |
| C | [Claude Certification Guide](https://claudecertificationguide.com/ccdv-f) | Independently reproduces v1.0 July 2026, 53/120, domains and skill weights | 2026-09-08 |
| C | [Panaversity Agent Factory](https://agentfactory.panaversity.org/docs/certifications/pcdv-f) | CCDV-F reference blueprint and format agree; its separate PCDV-F extensions are excluded | 2026-09-08 |
| A | [Anthropic partners](https://claude.com/partners) | Links to certification destination; does not establish blueprint itself | 2026-09-08 |

## First-party technical coverage at the research checkpoint

These establish coverage routes, not blanket approval of every possible claim on a topic. Each item must identify the specific source assertion in its review record. Drafting adds more focused first-party references after reading them. No answer key from a practice provider is technical evidence.

| Objectives | Documentation | Establishes | Accessed |
|---|---|---|---|
| D1.1, D1.3, D2.5 | [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) | Workflow/agent distinction; orchestration patterns and explicit tradeoffs | 2026-09-08 |
| D1.2, D8.3 | [Agent SDK](https://code.claude.com/docs/en/agent-sdk/overview) | In-process agent loop, SDK versus Client SDK, sessions, extension points | 2026-09-08 |
| D2.1, D2.2, D2.4, D4.1 | [Define success and evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests) | Measurable criteria, representative tests, grading and iteration | 2026-09-08 |
| D2.3, D5.4 | [Message Batches](https://platform.claude.com/docs/en/build-with-claude/batch-processing) | Asynchronous processing, discount, per-item results and correlation; no guaranteed overnight deadline | 2026-09-08 |
| D2.5, D6.3 | [Structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs) | JSON output configuration, strict tools, documented exceptions and schema limitations | 2026-09-08 |
| D2.6, D3.1, D7.2 | [Claude Code permissions](https://code.claude.com/docs/en/permissions) | Enforced permission configuration, separate from prompt instructions | 2026-09-08 |
| D3.1, D7.1 | [Permission modes](https://code.claude.com/docs/en/permission-modes) | Plan-mode intent and configuration qualifications | 2026-09-08 |
| D5.1, D5.2, D5.3 | [Models overview](https://platform.claude.com/docs/en/models/overview) | Version-specific capability comparisons; avoid invented universal model hierarchy | 2026-09-08 |
| D6.1, D6.2 | [Prompt engineering](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview) | Empirical success criteria before prompt iteration; links to current techniques | 2026-09-08 |
| D7.3, D7.4 | [Agent SDK capabilities](https://code.claude.com/docs/en/agent-sdk/overview) | Hooks and permission/authentication entry points; detailed behavior requires linked first-party pages during drafting | 2026-09-08 |
| D8.1, D8.2 | [MCP tools, specification 2025-11-25](https://modelcontextprotocol.io/specification/2025-11-25/server/tools) | Discovery/invocation, schemas, capabilities and trust boundaries | 2026-09-08 |

## Limits

Canonical Skilljar and its linked S3 PDF returned 403. PDF extraction and visual inspection of the mirror succeeded. Pearson retrieval was unavailable; delivery statements therefore rely on B, not a claimed direct Pearson read. No dumps were sought or used. No newer guide was found, which is not proof that none can exist. Current product documentation and July exam scope can differ: avoid newer features with no defensible objective connection.
