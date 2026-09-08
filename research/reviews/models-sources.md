# Model Selection and Optimization — source reading notes

Accessed 2026-09-08. The mirrored official guide's D5 skills were read before drafting: LLM fundamentals (5.2%), technical fundamentals (6.1%), model selection/tradeoffs (2.7%), cost/token management (2.8%). Local D5 numbering is an editorial reference to the published skill order.

All sources below were actually opened and relevant sections read using fresh web retrieval. No practice answer key was used. Direct `.md` fetches for several Platform pages returned 403; HTML retrieval succeeded. These failures did not block source checking.

| Level | Source | Read sections and established distinction |
|---|---|---|
| A | https://platform.claude.com/docs/en/build-with-claude/token-counting | Structured input estimates; target-model tokenization; estimates can differ slightly from billed usage. |
| A | https://platform.claude.com/docs/en/build-with-claude/context-windows | Context versus training; cached inputs occupy capacity; thinking shares output budget. Previous thinking retention is model-dependent and was not generalized. |
| A | https://platform.claude.com/docs/en/build-with-claude/prompt-caching | Lifetime refresh, one-hour option, minimums, hierarchy invalidation, concurrent write availability, separate usage categories, TTL ordering and input-versus-output caching. |
| A | https://platform.claude.com/docs/en/build-with-claude/effort | Soft behavioral control; scope includes text/tools/thinking; hard output cap differs. |
| A | https://platform.claude.com/docs/en/build-with-claude/thinking-steering-and-cost | Adaptive skipping, interleaving and measured effort before wording-sensitive steering. Old adaptive-thinking URL redirects here. |
| A | https://platform.claude.com/docs/en/build-with-claude/fast-mode | Same weights/capabilities, premium pricing, output throughput versus initial latency; support differs by model/provider. Access/model support stipulated for conceptual questions. |
| A | https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices | Distinguishes reference context, examples and inputs. Example-diversity draft rejected as cross-bank duplicate. |
| A | https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/python | Pagination, raw responses, scoped cleanup, field presence, serialization, extra-parameter precedence, async upload, seconds for timeout, runtime version inspection. |
| A | https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/typescript | Custom fetch scope, runtime versus static typing, stream cancellation/accumulation, logging contract and filtering, proxy options, milliseconds for timeout and versioning exceptions. |
| A | https://platform.claude.com/docs/en/build-with-claude/streaming | Read SSE event behavior for coordination; Apps worker owns event assembly questions. No duplicate model-domain assembly question retained. |
| A | https://platform.claude.com/docs/en/models/opus-5/migration-guide | Version-specific display default, unsupported sampling parameters, tokenizer change. REST versus Python SDK failure location explicitly distinguished. |
| A | https://platform.claude.com/docs/en/about-claude/models/choosing-a-model | Select against required capabilities, cost, speed and measured task performance. |
| A | https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence | Cost per solved task, escalation accounting/checker/latency conditions, difficult workload segments, comparable cache conditions in effort experiments, retained output cost. Benchmark numbers were not copied: arithmetic stems use supplied illustrative figures. |
| A | https://platform.claude.com/docs/en/about-claude/models/model-ids-and-versions | Dateless versioned IDs from 4.6 generation remain pinned; earlier aliases are a separate case. |
| A (standards publisher) | https://html.spec.whatwg.org/multipage/server-sent-events.html | EventSource interface receives server-sent events and offers no general upstream send operation. |
| A (standards publisher) | https://www.rfc-editor.org/rfc/rfc6455 | Abstract and protocol overview: established WebSocket supports bidirectional traffic. |
| A | https://platform.claude.com/docs/en/about-claude/glossary | Autoregressive pretraining, tokens and context; used for the replacement next-token conceptual item. |
| A (research) | https://www.anthropic.com/research/tracing-thoughts-language-model | Published counterexample to the claim that sequential emission precludes planning later words. This is a logical inference from a demonstrated phenomenon, not an assertion that every response plans ahead or every current model uses identical internal circuits. |

## QA handoff

55 full candidate versions drafted; two full versions rejected for semantic duplication (original MO-010 versus PC-013; original MO-017 versus legacy Q14). Their full content is retained in `models-rejected-variants.json`. The replacements retain bank IDs because the rejected variants were never released. Final 53 remain CANDIDATE pending root adjudication.

The final candidate distribution is 16/20/8/9 across D5.1–D5.4; 44 single and nine Select TWO. Single-answer positions are 11 each at A/B/C/D. Option placement was authored once, with exact key/rationale remapping; no runtime option randomization is proposed. Numeric options retain their meaningful ordering.

Every candidate includes a binding discriminator, per-source assertions, reasons for all incorrect options, and a specific ambiguity and duplication challenge. The second pass strengthened competing options for transport/configuration questions and replaced several irrelevant model/prompt alternatives with plausible SDK-layer mistakes. Exact changed distractors are retained in `models-distractor-revisions.json`.

Remaining central judgment: the SDK skill is broad but some SDK questions are granular; root should reject any it judges beyond suitable Foundations depth. No claim that specific September model release details are guaranteed live-exam topics. Version-pinned questions exercise the published migration/fundamentals skills using current documented behavior.
