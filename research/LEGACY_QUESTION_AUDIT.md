# Legacy question audit

Audit date: 2026-09-08. All 53 original items were read against the verified blueprint and current primary documentation. This replaces the earlier preliminary research-access checkpoint; inaccessible Skilljar is not a generation blocker.

**Update, 2026-09-09 (Approved Change 4):** the six items below (Q1, Q7, Q9, Q31, Q40, Q42) were
independently re-confirmed against current documentation, then corrected with user-approved
replacement wording for `body`/affected `options`/`explanation`. See "Corrections" below for the
resolved before/after record. The other 47 items are still unchanged from the original content.

This is a bounded source-and-answer audit, not an assertion that preserved legacy items passed the new-item authoring contract. Status totals as of the original 2026-09-08 audit: **47 supported, 4 precision caveats, 2 content concerns**; all 6 precision caveats/content concerns were resolved on 2026-09-09 per Approved Change 4. No legacy item is labeled APPROVED. The original answer key is recorded for traceability, not derived from third-party practice material.

## Per-item evidence

Domain/objective/concept-key mapping for each original item is in `src/data/legacyMetadata.ts`. All sources below are Level A primary documentation; Python documentation is primary language documentation, distinguished from Anthropic-owned documentation. Architecture/process conclusions identified as inference follow the binding constraints in each stem.

| ID | Objective | Key | Audit status | Current evidence and finding |
|---|---|---|---|---|
| Q1 | D2.3 | C | resolved 2026-09-09 | Batch pricing and independent asynchronous processing support C; overnight is a precision caveat, not an invalid key. [batch](https://platform.claude.com/docs/en/build-with-claude/batch-processing) |
| Q2 | D8.1 | B | supported | Application executes a client tool and returns the matching tool_use_id; Claude does not execute this client function. [tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls) |
| Q3 | D4.1 | D | supported | Semantic and structural grading fits the stated acceptance criteria; wording equality is not required. [eval](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests) |
| Q4 | D7.1 | A, D | supported | Untrusted retrieved text is a prompt-injection vector; privilege restrictions and approval boundaries reduce its consequences. [security](https://code.claude.com/docs/en/agent-sdk/secure-deployment); [tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls) |
| Q5 | D1.1 | B | supported | Predetermined steps fit a workflow; adaptive model-directed orchestration adds no requirement benefit. [agents](https://www.anthropic.com/engineering/building-effective-agents) |
| Q6 | D2.3 | C | supported | Messages requests are stateless; reusing an SDK client does not resend conversation history. [messages](https://platform.claude.com/docs/en/build-with-claude/working-with-messages) |
| Q7 | D6.3 | A, C | resolved 2026-09-09 | Schema-constrained output and completion-state checks are the best offered pair; current enum-casing exception needs precision. [structured](https://platform.claude.com/docs/en/build-with-claude/structured-outputs) |
| Q8 | D1.1 | C | supported | Isolated specialist contexts can return compact findings to a coordinator; substantially overlaps Q50. [contexteng](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) |
| Q9 | D2.6 | B, D | resolved 2026-09-09 | Pinning a fixed model and evaluating upgrades address a moving alias. Dateless modern model IDs are already pinned; not every short ID floats. [versions](https://platform.claude.com/docs/en/about-claude/models/model-ids-and-versions); [eval](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests) |
| Q10 | D5.1 | A | supported | Request content and generated output share a finite context budget; it is not just user-text capacity. [context](https://platform.claude.com/docs/en/build-with-claude/context-windows) |
| Q11 | D8.3 | D | supported | MCP standardizes reusable tool/data integration. Selection of a shared server is a scenario inference from the stated maintenance constraint. [mcp](https://modelcontextprotocol.io/specification/2025-11-25) |
| Q12 | D2.3 | A | supported | Streaming exposes incremental response content and improves perceived latency without promising faster total generation. [stream](https://platform.claude.com/docs/en/build-with-claude/streaming) |
| Q13 | D3.1 | B | supported | CLAUDE.md holds broadly persistent project guidance; task-specific procedures belong in relevant skills. [memory](https://code.claude.com/docs/en/memory) |
| Q14 | D2.4 | C | supported | The asynchronous client supports concurrent network waiting; bounded access controls concurrency while rate limits still apply. [python](https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/python); [async](https://docs.python.org/3/library/asyncio-sync.html) |
| Q15 | D6.1 | B | supported | Removing old tool outputs can reclaim context after necessary findings have been retained. [contexteng](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) |
| Q16 | D5.4 | B, C | supported | Cache matching covers the ordered prompt prefix; place the checkpoint after stable shared content and before variable content. [cache](https://platform.claude.com/docs/en/build-with-claude/prompt-caching) |
| Q17 | D1.2 | D | supported | Managed Agents provides hosted harness/runtime options and server-side event history, matching the hosting requirement. [managed](https://platform.claude.com/docs/en/managed-agents/overview) |
| Q18 | D7.3 | A, C | supported | PreToolUse can prevent execution; PostToolUse observes successful completion and cannot prevent the action already performed. [hooks](https://code.claude.com/docs/en/hooks) |
| Q19 | D2.5 | A | supported | Anthropic states consumer system prompts do not apply to the API; copying visible text does not reproduce surrounding instructions. [consumer](https://platform.claude.com/docs/en/release-notes/system-prompts/overview) |
| Q20 | D5.3 | C | supported | The stem already establishes quality on the cheaper configuration; selection follows its stated cost/latency objective, not model prestige. [eval](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests) |
| Q21 | D8.1 | D | supported | Clear names, descriptions and parameter schemas distinguish when each tool should be used. [define](https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools) |
| Q22 | D5.2 | B | supported | The client library wraps the HTTP API with language conveniences; it does not create a separate model protocol. [python](https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/python) |
| Q23 | D1.2 | B | supported | Continuation requires the session-aware client or a session ID/resume path; unrelated calls do not imply continuation. [sessions](https://code.claude.com/docs/en/agent-sdk/sessions) |
| Q24 | D5.1 | B | supported | One supplied demonstration is one-shot prompting; adding examples is prompt conditioning rather than a training update. [prompt](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices) |
| Q25 | D2.1 | A | supported | Documented success criteria and deployment boundaries support gathering the stated constraints first; architecture ordering is an engineering inference. [eval](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests); [security](https://code.claude.com/docs/en/agent-sdk/secure-deployment) |
| Q26 | D4.1 | B, D | supported | Rate-limit responses call for backoff/retry handling; a malformed request needs correction before retry. [rate](https://platform.claude.com/docs/en/api/rate-limits); [python](https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/python) |
| Q27 | D5.2 | C | supported | Claude streaming uses SSE. Relaying received events through an application-owned WebSocket is an application architecture inference. [stream](https://platform.claude.com/docs/en/build-with-claude/streaming) |
| Q28 | D8.2 | A, B, C | supported | Tools expose operations, resources expose contextual data, and prompts expose reusable message templates. [mtools](https://modelcontextprotocol.io/specification/2025-11-25/server/tools); [mresources](https://modelcontextprotocol.io/specification/2025-11-25/server/resources); [mprompts](https://modelcontextprotocol.io/specification/2025-11-25/server/prompts) |
| Q29 | D2.3 | A, C | supported | Result order is not guaranteed; custom_id correlates records and per-request outcomes require individual handling. [batch](https://platform.claude.com/docs/en/build-with-claude/batch-processing) |
| Q30 | D1.1 | A | supported | An orchestrator decomposes work, delegates and synthesizes; that role matches the described supervisor. [agents](https://www.anthropic.com/engineering/building-effective-agents) |
| Q31 | D6.3 | D | resolved 2026-09-09 | The keyed distinction between output shape and external business approval is sound, but the displayed object is not a JSON Schema. [structured](https://platform.claude.com/docs/en/build-with-claude/structured-outputs) |
| Q32 | D6.1 | C | supported | Compaction and context curation preserve relevant facts while removing redundant or stale material. [contexteng](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) |
| Q33 | D5.3 | B | supported | Using the hypothetical measurements in the stem, only Sonnet meets both thresholds. These figures are not published model benchmarks. [eval](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests) |
| Q34 | D7.4 | B, D | supported | A potentially exposed key must be revoked; replacement credentials should be protected outside committed source. [keys](https://support.claude.com/en/articles/8384961-what-should-i-do-if-i-suspect-my-api-key-has-been-compromised) |
| Q35 | D2.6 | A | supported | Versioned, reviewable changes and repeatable evaluation support prompt/configuration traceability; the precise release process is an engineering inference. [code](https://code.claude.com/docs/en/best-practices); [eval](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests) |
| Q36 | D8.2 | A, C | supported | stdio suits a spawned local subprocess; Streamable HTTP suits the specified independently hosted remote endpoint. [transports](https://modelcontextprotocol.io/specification/2025-11-25/basic/transports) |
| Q37 | D1.3 | C | supported | Persistent notes outside the transient context retain selected facts for later retrieval after compaction. [contexteng](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) |
| Q38 | D5.1 | B | supported | Images consume visual tokens and context; replacing text with screenshots does not make their content free. [vision](https://platform.claude.com/docs/en/build-with-claude/vision); [context](https://platform.claude.com/docs/en/build-with-claude/context-windows) |
| Q39 | D5.4 | C | supported | Usage categories and workload measurements distinguish cost changes; per-call attribution is an observability inference from those measurable quantities. [cache](https://platform.claude.com/docs/en/build-with-claude/prompt-caching); [eval](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests) |
| Q40 | D2.3 | A | resolved 2026-09-09 | Initial system instructions use the top-level field. Current selected models also permit later system-role messages, so the explanation is too broad. [messages](https://platform.claude.com/docs/en/build-with-claude/working-with-messages) |
| Q41 | D6.2 | A, D | supported | External content stays untrusted data; higher-priority application instructions and limited authority help contain injection. [tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls); [security](https://code.claude.com/docs/en/agent-sdk/secure-deployment) |
| Q42 | D3.1 | B | resolved 2026-09-09 | Plan is the intended inspection/planning mode, but current configuration can remove plan-mode permission blocks; the absolute nonmutation promise is unsafe. [plan](https://code.claude.com/docs/en/permission-modes) |
| Q43 | D1.1 | D | supported | Adaptive investigation with unknown next steps fits agent-directed decisions instead of a predetermined workflow. [agents](https://www.anthropic.com/engineering/building-effective-agents) |
| Q44 | D8.3 | C | supported | Server tools execute on the platform; the stem explicitly establishes that the built-in search already satisfies requirements. [web](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool); [tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls) |
| Q45 | D2.4 | B | supported | Reviewable incremental changes with executable checks match the explicit behavior-preservation and risk constraints; no unique platform feature is implied. [code](https://code.claude.com/docs/en/best-practices) |
| Q46 | D5.2 | C | supported | Updating the SDK or using the documented HTTP interface addresses client surface lag; model capability is not defined by an old local SDK. [python](https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/python) |
| Q47 | D7.2 | B, D | supported | A gate can inspect concrete proposed tool inputs before execution; least privilege limits authority before human approval. [approval](https://code.claude.com/docs/en/agent-sdk/user-input); [security](https://code.claude.com/docs/en/agent-sdk/secure-deployment) |
| Q48 | D8.1 | B | supported | Tool failure is returned as a correlated tool_result marked is_error, not falsely represented as a successful result. [tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls) |
| Q49 | D8.1 | C | supported | Manual tool handling provides the requested inspection and approval control. This does not imply all automated runners lack customization. [tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls); [approval](https://code.claude.com/docs/en/agent-sdk/user-input) |
| Q50 | D6.1 | A | supported | Delegate detailed exploration to an isolated context and return its summary; near-duplicate of Q8 merits form separation. [contexteng](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) |
| Q51 | D2.2 | D | supported | Representative evaluation and controlled review support promotion and rollback decisions; rollout sequencing is an engineering inference. [eval](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests); [code](https://code.claude.com/docs/en/best-practices) |
| Q52 | D6.2 | A, D | supported | Several in-prompt demonstrations are few-shot conditioning and do not modify model weights. [prompt](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices) |
| Q53 | D2.6 | C | supported | Versioned marketplace sources and reproducible configuration support consistent team installs; exact dependency policy remains a deployment design choice. [plugins](https://code.claude.com/docs/en/plugin-marketplaces) |

## Corrections — resolved 2026-09-09 (Approved Change 4)

All six corrections proposed below were explicitly approved by the user and applied verbatim to
both `src/data/questions.ts` and `CCDV-F_Final_Mock_Exam.md`. Each entry below is the historical
finding as originally recorded, followed by what was actually applied. `id`, `type`,
`selectCount`, `correctAnswers`, and domain/objective/concept mapping are unchanged for all six.

### Q31 — content concern — RESOLVED

The stem labeled a JSON instance as a schema. Also, some business constraints can be expressed in a schema, so the distinction must be constraints not encoded or requiring external authorization.

**Applied correction:** The stem now separately describes the schema's requirements (an `approved` boolean and a `refund_amount` number in euros), the returned JSON *instance*, and an explicitly external, separately-checked authorization requirement not encoded in that schema. Option D and the explanation now state the object passes the schema but the application must still block the refund pending that separate authorization. Key D unchanged.

Sources: [structured-outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs).

### Q42 — content concern — RESOLVED

Current Plan mode documentation says permission blocks are not enforced when bypass permissions is available, and execution permissions vary by configuration. Choosing Plan alone is not an absolute guarantee against mutation.

**Applied correction:** The stem now asks which mode is specifically intended for investigation/planning before implementation, rather than asserting an absolute prohibition on edits. The explanation now states plan mode is not an unconditional read-only security boundary and that its enforcement depends on the session's permissions/configuration. Key B unchanged.

Sources: [permission-modes](https://code.claude.com/docs/en/permission-modes).

### Q1 — precision caveat — RESOLVED

A hard overnight deadline is not a documented Batch guarantee; requests may expire after the processing window. The mirrored official guide itself uses overnight batch scenarios, so this is an exam-style precision caveat rather than evidence that C is wrong.

**Applied correction:** The stem no longer asserts an "overnight" deadline; it states there is no hard completion deadline and the application can handle failed/expired requests and resubmit. The explanation now states Batches do not guarantee overnight completion. Key C unchanged.

Sources: [batch-processing](https://platform.claude.com/docs/en/build-with-claude/batch-processing).

### Q7 — precision caveat — RESOLVED

Current structured-output documentation lists enum/const casing as an exception even for normally completed responses. Stop-state checks alone are not an unconditional application-validation guarantee.

**Applied correction:** Option C and the explanation now describe checking for refusal/incomplete generation and then validating the returned data against the application's own schema/value requirements, rather than an unqualified "completion/stop conditions" check. Key A, C unchanged.

Sources: [structured-outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs).

### Q9 — precision caveat — RESOLVED

The stem explicitly specifies a moving alias and the key is defensible. Modern dateless model IDs are pinned snapshots; a date suffix is not universally necessary.

**Applied correction:** Options A and B now distinguish a documented *moving* alias from a canonical *fixed* model snapshot ID, dated or dateless, rather than implying every non-dated reference floats. Key B, D unchanged.

Sources: [model-ids-and-versions](https://platform.claude.com/docs/en/about-claude/models/model-ids-and-versions), [develop-tests](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests).

### Q40 — precision caveat — RESOLVED

The first-message example is correctly fixed using top-level system. The explanation generalizes beyond that case: selected current models accept mid-conversation system messages after a user message.

**Applied correction:** The stem now asks specifically about the *initial* system instruction. The explanation now states a system-role message cannot be the first entry in `messages` and that some supported models permit later system-role messages, rather than implying the Messages API never accepts a system role in `messages` at all. Key A unchanged.

Sources: [working-with-messages](https://platform.claude.com/docs/en/build-with-claude/working-with-messages).

## Cross-item and scope observations

- Q8 and Q50 test the same subagent-context distinction; Q4 and Q41 overlap on the untrusted-content boundary. Shared concept keys allow form selection to avoid these combinations where feasible. Legacy duplication cannot be repaired by silently rewriting originals.
- Q9/Q51 both touch evaluated model rollout but have distinct immediate constraints; Q15/Q32/Q37 distinguish discarded outputs, context curation and durable persistence.
- Q33 explicitly supplies scenario measurements; they are not claims about current model performance or pricing. Q17 refers to currently documented Managed Agents behavior, which is beta and warrants maintenance review.
- Several legacy distractors are easier to reject than the new authoring contract prefers. Supported status means the keyed technical distinction has current evidence, not that every distractor is exam-calibrated.
- All six wording concerns above (Q1, Q7, Q9, Q31, Q40, Q42) were resolved on 2026-09-09 per Approved Change 4, with explicit user approval and verbatim replacement text. This audit's remaining "supported" findings, and the duplication/scope observations above (Q8/Q50, Q4/Q41, Q9/Q51, Q15/Q32/Q37, Q17's beta status), are unaffected and still stand as recorded.
