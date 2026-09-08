# Applications core — source reading and author review

Accessed 2026-09-08. Assignment: D2.1 Understanding Requirements (11), D2.2 Systems Life Cycle (9), D2.3 Claude API Mechanics (19), D2.4 Software Engineering Foundations (25). All 64 current entries are **CANDIDATE**, pending central approval.

## Direct Anthropic documentation (Level A)

- https://platform.claude.com/docs/en/test-and-evaluate/develop-tests — read measurable/specific/relevant/achievable criteria, multidimensional evaluation, latency/price/privacy/context utilization, held-out task distributions and edge cases, reliability checks before scaling LLM grading. Requirements scenarios instantiate these principles with explicit business constraints; their invented thresholds are stem assumptions, not official exam targets.
- https://platform.claude.com/docs/en/about-claude/use-case-guides/ticket-routing — read understanding existing routing workflow, defining intent categories, evolving categories, ambiguity handling, and multilingual performance evaluation. No published example benchmark percentage is used as a universal requirement.
- https://platform.claude.com/docs/en/about-claude/model-deprecations — read deprecated versus retired status, migration before retirement, provider-specific schedules and usage export by key/model. No hard-coded model retirement date is needed for the authored questions.
- https://platform.claude.com/docs/en/build-with-claude/batch-processing — read create/tracking/results/cancel interfaces, independent requests, simultaneous count/size limits, asynchronous validation, per-item terminal outcomes, limited result-download retention, unsupported live stream parameter. The initial custom_id correlation draft was rejected because it reproduced legacy Q29’s reasoning; its complete prior version is retained in the decisions record.
- https://platform.claude.com/docs/en/build-with-claude/streaming — read event order, block indices, partial input JSON, cumulative usage, pings and additive event handling. No claim that content_block_stop ends a whole response. No current beta reasoning/fallback feature is tested.
- https://platform.claude.com/docs/en/build-with-claude/working-with-messages — read synthetic historical assistant messages and typed image sources. Current docs allow certain mid-conversation system messages on specific newer models and reject prefill on newer models. The authored synthetic-history question explicitly excludes final prefill; no blanket assertion that every system role is invalid was drafted.
- https://platform.claude.com/docs/en/build-with-claude/handling-stop-reasons — read stop_reason taxonomy and dedicated stop_sequence identification. No model-dependent fallback behavior is tested.
- https://platform.claude.com/docs/en/api/versioning — read mandatory direct-request protocol header and permitted additive output changes. Direct HTTP header requirement is distinct from models worker’s SDK default-header configuration, though root may assign shared concepts if desired.
- https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/python — read retry policy, max_retries, with_options overrides, timeout/retry interaction. All exact retry arithmetic uses explicit settings in the stem. SDK type/rawresponse/pagination/resource cleanup questions were reserved to the Models worker and not duplicated here.
- https://code.claude.com/docs/en/best-practices — read verification through executable checks and evidence, visual verification of UI, exploration before implementation. Foundation questions test concrete requirements for an adapter or viewport, not permission-mode behavior.

## Primary language/protocol/tool documentation (Level A-primary; not Anthropic-owned)

The official D2.4 skill expressly includes JSON, REST, asynchronous programming, version control, review and refactoring. The following authorities establish those generic semantics more directly than an Anthropic product page:

- https://www.rfc-editor.org/rfc/rfc8259 — RFC 8259, sections 3–8: JSON types/literals, duplicate member interoperability, ordered arrays, string escaping, non-finite-number prohibition, numeric precision interoperability. Read the actual specification, including its SHOULD for unique member names; the question does not falsely declare all duplicates syntactically invalid.
- https://docs.python.org/3/library/asyncio-task.html — Python documentation: coroutine results/dependencies, gather order and exception collection, TaskGroup cancellation/awaiting, cancellation cleanup propagation. TaskGroup stem explicitly requires Python 3.11+. No 3.14-only feature is required.
- https://docs.python.org/3/library/asyncio-sync.html — shared semaphore counter, waiting on acquisition, release in finally/async context management. The question limits concurrent calls; it does not claim this enforces token-per-minute limits.
- https://httpwg.org/specs/rfc9110.html — HTTP Semantics: section 9.2.2 idempotency and uncertain POST retry; sections 15.3.3 and 15.3.5 for 202 and 204. The questions explicitly describe internal endpoints and make no unsupported assertion about Anthropic idempotency.
- https://git-scm.com/docs/git-revert — inverse commits preserve existing history; non-merge and clean-tree assumptions explicit; conflicts require resolution and verification.
- https://git-scm.com/docs/git-diff — index versus working-tree versus HEAD comparisons; three-dot compares merge base to feature tip. Diverged branch stem makes the distinction meaningful.

Other sources read for planning but not required by current keys: Anthropic TypeScript SDK docs, Python SDK repository README/migration guide, Python json module docs. They are not counted as additional item source coverage.

## Author QA and limitations

65 complete variants were drafted: 64 current candidates and one rejected duplicate (original AI-022, replaced by dual batch limits). 46 distinct candidate IDs underwent substantive revisions. Full prior records and reasons are in apps-core-decisions.json; these numbers count actual stored drafting/revision activity, not hypothetical rejected ideas.

Initial review found many distractors too easily dismissible or outside the question’s requested abstraction. They were replaced with competing measurement choices, protocol representations, lifecycle assumptions, or implementation strategies that fail the stem’s binding condition. AI-005 was rewritten to taxonomy ownership because semantic wording consistency overlapped legacy Q3. Final alternatives were checked for unique answer sets and each incorrect option has an individual rejection reason.

The 64 candidates contain 54 single-answer and 10 Select TWO items. Ten multiple-response items is an authoring mix, not an official percentage. No Select THREE was needed for these particular distinctions. Option order is authored and must remain stable.

Related concepts deliberately distinguished: batch create/tracking vs mixed results vs cancellation; block assembly vs partial JSON vs cumulative usage vs message completion; retry multiplication vs retry ownership vs scoped override vs total deadline; async data dependency vs gather ordering vs gather collect-all vs TaskGroup fail-fast. Root retains final semantic-duplication adjudication across workers. AI-031 uses shared conceptKey `forward-compatible-enumeration` to avoid clustering with similar extension-handling questions.

Legacy content was only read for overlap detection and was not edited. Canonical exam Markdown was not changed. No third-party practice answer key or dump was used.
