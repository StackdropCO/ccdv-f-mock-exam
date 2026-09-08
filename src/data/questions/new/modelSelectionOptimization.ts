// Generated from centrally reviewed authoring records. See scripts/build-question-bank.mjs.
import type { BankQuestion } from "../../bankTypes";
export const modelSelectionOptimization: BankQuestion[] = [
  {
    "id": "MO-001",
    "domain": "model-selection-optimization",
    "objective": "D5.1",
    "conceptKey": "model-aware-input-estimate",
    "type": "single",
    "selectCount": 1,
    "body": "A multilingual document service admits requests using an English word-count estimate. Requests containing the same number of words begin exceeding its input-token allowance. It must estimate the actual structured request before generation. Which change directly addresses the failure?",
    "options": [
      {
        "id": "A",
        "body": "Use the desired output word count as the input-token estimate"
      },
      {
        "id": "B",
        "body": "Count UTF-8 bytes and treat each byte as one model token"
      },
      {
        "id": "C",
        "body": "Count only the newest user message because SDKs absorb the other inputs"
      },
      {
        "id": "D",
        "body": "Call the token-counting endpoint with the target model and the complete request inputs"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Use model-aware token counting on the actual inputs. Word counts are not reliable token budgets, especially across languages and input structures.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/token-counting"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-002",
    "domain": "model-selection-optimization",
    "objective": "D5.1",
    "conceptKey": "cached-input-still-context",
    "type": "single",
    "selectCount": 1,
    "body": "A service has a large cached reference prefix. Its engineer subtracts all cache-read tokens when checking whether the next request fits the model context window. Why can the request still exceed the window?",
    "options": [
      {
        "id": "A",
        "body": "Cache reads count only when the model generates a tool call"
      },
      {
        "id": "B",
        "body": "The context limit applies to uncached user text alone"
      },
      {
        "id": "C",
        "body": "Caching changes processing cost but cached input still occupies context"
      },
      {
        "id": "D",
        "body": "Only cache writes count toward context capacity"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Cached input still consumes context capacity. A cache hit reduces repeat processing cost; it does not make the reference material disappear from the model input.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/context-windows"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-003",
    "domain": "model-selection-optimization",
    "objective": "D5.1",
    "conceptKey": "output-cap-versus-output-target",
    "type": "single",
    "selectCount": 1,
    "body": "A report generator sets `max_tokens` to 4,000 and receives a complete 600-token answer. The engineer wants to know whether 3,400 tokens of requested output are missing. Which interpretation is correct?",
    "options": [
      {
        "id": "A",
        "body": "The API must have dropped the remaining output during transport"
      },
      {
        "id": "B",
        "body": "The parameter reserves exactly 4,000 tokens of visible text independently of thinking"
      },
      {
        "id": "C",
        "body": "The model must return exactly the configured maximum on a successful request"
      },
      {
        "id": "D",
        "body": "The parameter is an upper limit, so a complete answer can finish below it"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "`max_tokens` limits output; it does not prescribe an exact response length. Finishing naturally below that limit is normal.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/effort",
      "https://platform.claude.com/docs/en/build-with-claude/context-windows"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-004",
    "domain": "model-selection-optimization",
    "objective": "D5.1",
    "conceptKey": "adaptive-optional-thinking-block",
    "type": "single",
    "selectCount": 1,
    "body": "A parser for a model using adaptive thinking rejects a valid assistant turn because it contains a direct answer without a thinking block. The request used a supported configuration that allows the model to skip thinking. What should change?",
    "options": [
      {
        "id": "A",
        "body": "Allow valid turns with no thinking block and process the returned content types"
      },
      {
        "id": "B",
        "body": "Treat all direct answers as provider transport errors"
      },
      {
        "id": "C",
        "body": "Insert a fabricated signed thinking block before the answer"
      },
      {
        "id": "D",
        "body": "Retry every such answer until thinking appears"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Adaptive thinking can skip deliberation on a turn. Application code must not assume every valid assistant turn begins with a thinking block.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/thinking-steering-and-cost"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-005",
    "domain": "model-selection-optimization",
    "objective": "D5.1",
    "conceptKey": "effort-not-hard-budget",
    "type": "single",
    "selectCount": 1,
    "body": "A billing-sensitive endpoint uses a model that supports `output_config.effort`. A developer sets effort to `low` and claims this enforces a strict maximum of 500 generated tokens. What is the accurate response?",
    "options": [
      {
        "id": "A",
        "body": "Low effort enforces 500 tokens on every supported model"
      },
      {
        "id": "B",
        "body": "Effort guides behavior; a supported explicit output limit is needed for a hard per-response cap"
      },
      {
        "id": "C",
        "body": "Effort limits input tokens, so it enforces the cap indirectly"
      },
      {
        "id": "D",
        "body": "Effort becomes a hard cap only when streaming is enabled"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Effort is a behavioral signal, not a strict token budget. Use the output limit for a hard per-response ceiling and account for the possibility of truncation.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/effort"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-006",
    "domain": "model-selection-optimization",
    "objective": "D5.1",
    "conceptKey": "effort-beyond-thinking",
    "type": "multiple",
    "selectCount": 2,
    "body": "A team disables thinking on a model/configuration that still supports effort. They assume changing effort can no longer affect token usage. Which TWO statements correctly challenge that assumption? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Effort can change the thoroughness and length of response text"
      },
      {
        "id": "B",
        "body": "Effort can also affect tool calls and their arguments"
      },
      {
        "id": "C",
        "body": "Effort affects prose but cannot affect function-call arguments"
      },
      {
        "id": "D",
        "body": "Effort applies only to hidden thinking tokens"
      },
      {
        "id": "E",
        "body": "Low effort guarantees that no tool will ever be called"
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Effort applies to output behavior beyond thinking, including response text and tool calls. Disabling thinking does not make the supported effort control irrelevant.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/effort"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-007",
    "domain": "model-selection-optimization",
    "objective": "D5.1",
    "conceptKey": "interleaved-reasoning-between-tools",
    "type": "single",
    "selectCount": 1,
    "body": "A developer traces an adaptive-thinking request that uses several tools. Claude deliberates after a tool result and before selecting the next tool. The developer considers this an invalid extra reasoning phase. What best explains it?",
    "options": [
      {
        "id": "A",
        "body": "Interleaved thinking lets the model reason between tool calls"
      },
      {
        "id": "B",
        "body": "The SDK must have started an unrelated conversation"
      },
      {
        "id": "C",
        "body": "The tool result has necessarily injected unauthorized system instructions"
      },
      {
        "id": "D",
        "body": "Thinking must finish permanently before any tool is called"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Interleaved thinking permits reasoning between tool calls, so observations can inform subsequent decisions. This behavior is expected for adaptive thinking.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/thinking-steering-and-cost"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-008",
    "domain": "model-selection-optimization",
    "objective": "D5.1",
    "conceptKey": "fast-inference-same-weights",
    "type": "multiple",
    "selectCount": 2,
    "body": "A team has access to fast mode on a currently supported Claude model. It wants higher output speed while preserving that model's capabilities. Which TWO statements describe the documented tradeoff? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Fast mode changes to a smaller model behind the same ID"
      },
      {
        "id": "B",
        "body": "Fast mode trades away the model's supported features to reduce output latency"
      },
      {
        "id": "C",
        "body": "Fast mode uses a faster inference configuration for the same model"
      },
      {
        "id": "D",
        "body": "Fast mode achieves its speed by lowering the configured reasoning effort"
      },
      {
        "id": "E",
        "body": "Fast mode is offered at premium pricing"
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "Fast mode changes the inference configuration, not the model weights or capabilities, and carries premium pricing. It is a speed/cost choice on supported models.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/fast-mode"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-009",
    "domain": "model-selection-optimization",
    "objective": "D5.1",
    "conceptKey": "fast-mode-otps-not-ttft",
    "type": "single",
    "selectCount": 1,
    "body": "An interactive product already streams responses. Its complaint is a long delay before the first token; once generation begins, the short answer appears quickly. A proposal cites fast mode's advertised output-token speedup as proof it will solve the complaint. What is the key flaw?",
    "options": [
      {
        "id": "A",
        "body": "The documented fast-mode benefit targets output tokens per second, not time to first token"
      },
      {
        "id": "B",
        "body": "Streaming cannot be used with fast mode"
      },
      {
        "id": "C",
        "body": "Time to first token is always equal to output tokens per second"
      },
      {
        "id": "D",
        "body": "Fast mode is an asynchronous batch-delivery feature"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The cited speedup concerns generation throughput. It does not establish that the initial waiting period will improve enough to meet this product's need.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/fast-mode"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-010",
    "domain": "model-selection-optimization",
    "objective": "D5.1",
    "conceptKey": "next-token-does-not-preclude-planning",
    "type": "single",
    "selectCount": 1,
    "body": "A reviewer argues that because an autoregressive language model emits text sequentially, it cannot plan a sentence ending before emitting the beginning. Which conclusion is supported by Anthropic's explanation of next-word generation and its published planning research?",
    "options": [
      {
        "id": "A",
        "body": "Any apparent planning proves that a complete matching sentence was retrieved verbatim"
      },
      {
        "id": "B",
        "body": "Sequential generation does not rule out computations that plan multiple words ahead"
      },
      {
        "id": "C",
        "body": "Sequential output proves that each step can represent only the immediately following word"
      },
      {
        "id": "D",
        "body": "Planning ahead would require returning the whole response in one network packet"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The order in which text is emitted does not bound the planning represented in the model's computation. Anthropic's research found planning for later words despite sequential output.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/about-claude/glossary",
      "https://www.anthropic.com/research/tracing-thoughts-language-model"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-011",
    "domain": "model-selection-optimization",
    "objective": "D5.1",
    "conceptKey": "reference-data-versus-shot-example",
    "type": "single",
    "selectCount": 1,
    "body": "A prompt contains a product catalog and an instruction to assign a category to a new product. It contains no worked input-to-label demonstrations. An engineer says each catalog entry counts as a few-shot example. Which distinction matters?",
    "options": [
      {
        "id": "A",
        "body": "Unlabeled catalog entries are demonstrations whenever their topic matches the requested task"
      },
      {
        "id": "B",
        "body": "Reference facts supply context; worked demonstrations show the task's input/output pattern"
      },
      {
        "id": "C",
        "body": "Only text in a system field can count as an example"
      },
      {
        "id": "D",
        "body": "Every sentence in any supplied document is a worked example"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "A catalog provides reference information. Few-shot demonstrations illustrate how to perform the requested task, such as labeled product-to-category examples.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-012",
    "domain": "model-selection-optimization",
    "objective": "D5.1",
    "conceptKey": "context-is-not-training-corpus",
    "type": "single",
    "selectCount": 1,
    "body": "An internal code name was introduced yesterday and is absent from the model's training knowledge. A developer supplies its definition in the current request and asks Claude to use it. Which statement best explains how that can work?",
    "options": [
      {
        "id": "A",
        "body": "The SDK retrains the model whenever it sees a new definition"
      },
      {
        "id": "B",
        "body": "The definition must first be added to the model's permanent weights"
      },
      {
        "id": "C",
        "body": "A context window can contain only facts present in pretraining"
      },
      {
        "id": "D",
        "body": "The model can use supplied context during this response without changing its trained weights"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The context window is working input for the current response, distinct from the training corpus. Supplying a new definition makes it available without retraining.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/context-windows"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-013",
    "domain": "model-selection-optimization",
    "objective": "D5.1",
    "conceptKey": "prompt-cache-not-response-memo",
    "type": "single",
    "selectCount": 1,
    "body": "Two identical requests hit the same prompt cache but generate slightly different valid wording. The product requires the exact same previously approved text to be served on a repeat request. Which conclusion follows?",
    "options": [
      {
        "id": "A",
        "body": "The application needs a response reuse mechanism; prompt caching does not memoize the generated answer"
      },
      {
        "id": "B",
        "body": "Cache hits are broken whenever output wording differs"
      },
      {
        "id": "C",
        "body": "Extending the prompt-cache TTL makes the old answer the only possible generation"
      },
      {
        "id": "D",
        "body": "Adding a second prefix checkpoint fixes the answer bytes"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Prompt caching reuses prompt processing, not a saved final answer. Serving identical approved text requires retaining and reusing that text under the application's own matching rules.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/prompt-caching"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-014",
    "domain": "model-selection-optimization",
    "objective": "D5.1",
    "conceptKey": "thinking-display-not-thinking-disable",
    "type": "single",
    "selectCount": 1,
    "body": "A Claude Opus 5 response includes a thinking block with a signature but an empty thinking string under the default display setting. The team concludes that no reasoning occurred. What is the documented interpretation?",
    "options": [
      {
        "id": "A",
        "body": "The application should strip the signed block because an empty display field makes it invalid"
      },
      {
        "id": "B",
        "body": "Thinking content is omitted by default; display visibility does not establish whether reasoning occurred"
      },
      {
        "id": "C",
        "body": "The signature must be user-visible reasoning encoded as plain text"
      },
      {
        "id": "D",
        "body": "An empty thinking string proves that thinking was disabled"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "On Opus 5, the default thinking display omits the thinking text. Empty displayed content is therefore not evidence that the model did no reasoning.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/models/opus-5/migration-guide"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-015",
    "domain": "model-selection-optimization",
    "objective": "D5.1",
    "conceptKey": "thinking-shares-output-budget",
    "type": "multiple",
    "selectCount": 2,
    "body": "An application allocates a maximum of 6,000 output tokens to a thinking-enabled request. It assumes the final text can always use all 6,000 even after substantial thinking. Which TWO statements correct the budget model? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Increasing thinking necessarily increases the model's context window"
      },
      {
        "id": "B",
        "body": "Thinking tokens draw from the same `max_tokens` allowance"
      },
      {
        "id": "C",
        "body": "Thinking tokens are free additions outside the output allocation"
      },
      {
        "id": "D",
        "body": "Only visible final prose contributes to output billing"
      },
      {
        "id": "E",
        "body": "Thinking tokens are billed as output tokens when generated"
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "Thinking and final response text share the output allowance. Generated thinking is billed as output, so it must be included in planning.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/context-windows"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-016",
    "domain": "model-selection-optimization",
    "objective": "D5.1",
    "conceptKey": "effort-tuning-is-empirical",
    "type": "single",
    "selectCount": 1,
    "body": "A team adds natural-language instructions to suppress thinking and sees lower latency on routine queries but worse answers on multistep cases. It needs a measured way to set the default reasoning posture. Which action is best supported?",
    "options": [
      {
        "id": "A",
        "body": "Keep changing the wording until one routine example is fastest"
      },
      {
        "id": "B",
        "body": "Judge success only by whether a thinking block is absent"
      },
      {
        "id": "C",
        "body": "Assume the latency gain proves the instruction is suitable for all traffic"
      },
      {
        "id": "D",
        "body": "Compare supported effort levels on representative routine and multistep cases, measuring quality and latency"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Effort is the documented primary control for reasoning posture. Compare it on representative traffic because reducing reasoning can harm tasks that need it.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/thinking-steering-and-cost"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-017",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "sdk-per-client-fetch-injection",
    "type": "single",
    "selectCount": 1,
    "body": "A Node process creates two Anthropic SDK clients. Only one must use an instrumented `fetch` implementation; the other and unrelated HTTP callers must remain unaffected. Which documented configuration most directly provides that scope?",
    "options": [
      {
        "id": "A",
        "body": "Replace `globalThis.fetch` for the entire process"
      },
      {
        "id": "B",
        "body": "Patch the process-wide network module used by both clients"
      },
      {
        "id": "C",
        "body": "Pass the instrumented `fetch` function in the constructor options of the selected client"
      },
      {
        "id": "D",
        "body": "Pass the instrumentation settings as an extra Messages request body field"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The TypeScript SDK accepts a custom fetch function per client. Passing it only to the intended client preserves the scope required by the stem.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/typescript"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-018",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "sdk-pagination-data-versus-iterator",
    "type": "multiple",
    "selectCount": 2,
    "body": "A Python inventory job lists Message Batches through the SDK. It reads `first_page.data` once and reports only the first page, even though more pages exist. It must visit every batch. Which TWO changes are valid? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Use `has_next_page()` and `get_next_page()` to advance until no page remains"
      },
      {
        "id": "B",
        "body": "Iterate the SDK list result using its documented auto-pagination iterator"
      },
      {
        "id": "C",
        "body": "Treat the `limit` argument as a guarantee that the service returns every batch"
      },
      {
        "id": "D",
        "body": "Set a list page size once and assume that iterating `first_page.data` will fetch later pages"
      },
      {
        "id": "E",
        "body": "Repeat the same first-page request without advancing any cursor"
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "The SDK offers both automatic iteration across pages and explicit next-page methods. Reading a single page's data does not traverse the collection.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/python"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-019",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "sdk-raw-headers-with-parsed-body",
    "type": "single",
    "selectCount": 1,
    "body": "A Python application needs both a response header and the usual parsed Message from the same Claude request. It must avoid a second generation. Which approach uses the SDK's documented interface?",
    "options": [
      {
        "id": "A",
        "body": "Use `with_raw_response.create(...)`, inspect headers, then parse that response"
      },
      {
        "id": "B",
        "body": "Serialize the normal parsed Message to JSON and use that serialization to recover arbitrary HTTP headers"
      },
      {
        "id": "C",
        "body": "Issue one normal request for the Message and another for the headers"
      },
      {
        "id": "D",
        "body": "Read a `headers` property on the normal parsed Message and treat it as the raw HTTP response"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The raw-response interface exposes transport metadata and can parse that same response into a Message. No second model call is required.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/python"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-020",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "sdk-stream-resource-cleanup",
    "type": "single",
    "selectCount": 1,
    "body": "A Python worker opens the SDK's `with_streaming_response` interface and may stop consuming after a local validation failure. It must release the response resource reliably. Which structure is documented for this interface?",
    "options": [
      {
        "id": "A",
        "body": "Wait for eventual garbage collection of the response reference"
      },
      {
        "id": "B",
        "body": "Use the interface as a context manager so leaving its scope closes the response"
      },
      {
        "id": "C",
        "body": "Catch the validation exception and drop the local response variable without closing its scope"
      },
      {
        "id": "D",
        "body": "Depend only on reaching the final stream event to release the resource"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Use the required context manager around the streaming response. It ensures the response is closed when consumption completes or the scope exits early.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/python"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-021",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "python-null-versus-missing",
    "type": "single",
    "selectCount": 1,
    "body": "A Python adapter must distinguish an optional response field explicitly returned as `null` from the field being absent. Both appear as `None` when accessed. What extra information should it inspect?",
    "options": [
      {
        "id": "A",
        "body": "Whether the HTTP status was successful"
      },
      {
        "id": "B",
        "body": "Call `to_dict().get(field_name)` and compare the returned value to `None`"
      },
      {
        "id": "C",
        "body": "Whether the field name is present in the response model's `model_fields_set`"
      },
      {
        "id": "D",
        "body": "Whether the same field appeared in a previous request"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The response model records which fields were actually supplied. Membership in `model_fields_set` distinguishes explicit null from omission when both attribute values are `None`.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/python"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-022",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "sdk-model-serialization",
    "type": "multiple",
    "selectCount": 2,
    "body": "A Python integration must send the complete parsed SDK Message to a JSON-based audit sink. It currently uses the object's debugging string representation. Which TWO documented conversions are appropriate? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Use only the first text block and call that the complete Message"
      },
      {
        "id": "B",
        "body": "Use the response model's `to_json()` for JSON text"
      },
      {
        "id": "C",
        "body": "Use `to_dict()` and let the sink's JSON serializer encode that dictionary"
      },
      {
        "id": "D",
        "body": "Assume every object's `str(...)` is guaranteed to be valid JSON"
      },
      {
        "id": "E",
        "body": "Ask the model to generate a copy of its own response object"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Use the SDK response model's JSON or dictionary conversion. These retain the structured response rather than substituting generated text or a debugging representation.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/python"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-023",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "typescript-types-not-runtime-validation",
    "type": "single",
    "selectCount": 1,
    "body": "A JavaScript caller bypasses TypeScript checking and supplies an unsupported extra request property to the Anthropic TypeScript SDK. An engineer expects the SDK's request type to strip that property at runtime. Which statement matches the documented behavior?",
    "options": [
      {
        "id": "A",
        "body": "TypeScript request types silently remove unknown properties at runtime"
      },
      {
        "id": "B",
        "body": "The SDK does not runtime-validate the request against its TypeScript type, so extra values can be sent as supplied"
      },
      {
        "id": "C",
        "body": "The extra value is automatically moved into response metadata and never sent"
      },
      {
        "id": "D",
        "body": "A TypeScript cast triggers request-schema validation inside the SDK before sending"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Type annotations are not runtime request validation. The SDK documents that extra values can be transmitted as supplied, so the application must not rely on types to sanitize dynamic inputs.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/typescript"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-024",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "typescript-stream-cancel",
    "type": "multiple",
    "selectCount": 2,
    "body": "A Node service uses `client.messages.create({ ... , stream: true })`. A user presses Stop while its `for await` loop is consuming events. Which TWO documented actions cancel this SDK stream? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Stop rendering new text but keep consuming all SDK events"
      },
      {
        "id": "B",
        "body": "Break out of the stream iteration loop"
      },
      {
        "id": "C",
        "body": "Call `stream.controller.abort()`"
      },
      {
        "id": "D",
        "body": "Let the loop consume normally and mark its result canceled only after completion"
      },
      {
        "id": "E",
        "body": "Remove the event listener in the browser while the server continues its independent SDK loop"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "The TypeScript SDK documents breaking from the event loop or calling its stream controller's abort method. Editing variables after sending the request does not cancel the active stream.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/typescript"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-025",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "stream-iterator-memory-accumulation",
    "type": "single",
    "selectCount": 1,
    "body": "A TypeScript relay forwards Claude events immediately and never needs a complete Message object. Many long streams run concurrently, so it wants to avoid SDK accumulation of each complete response. Which documented approach fits?",
    "options": [
      {
        "id": "A",
        "body": "Use `create({ ..., stream: true })` and consume its async event iterable"
      },
      {
        "id": "B",
        "body": "Buffer every event in a process-wide array before forwarding"
      },
      {
        "id": "C",
        "body": "Use a streaming helper and always await `finalMessage()` before forwarding anything"
      },
      {
        "id": "D",
        "body": "Convert the workflow to a non-streaming request and retain every full response"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The event iterable from `create` does not build a final Message for you. It fits a relay that forwards events without requiring complete-response accumulation.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/typescript"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-026",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "sdk-debug-log-not-stable-contract",
    "type": "single",
    "selectCount": 1,
    "body": "A production metric parser depends on the exact wording of Anthropic TypeScript SDK debug log lines. An SDK update changes those lines while API responses remain valid. Which assumption in the integration was unsound?",
    "options": [
      {
        "id": "A",
        "body": "API usage must be inferred from the model's prose"
      },
      {
        "id": "B",
        "body": "HTTP response objects can contain structured metadata"
      },
      {
        "id": "C",
        "body": "SDK versions may add developer-facing diagnostics"
      },
      {
        "id": "D",
        "body": "SDK debug log format is a stable machine-readable API contract"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "SDK diagnostic log format and content may change between releases. Production metrics should consume structured response data or application-owned events with a defined schema.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/typescript"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-027",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "sdk-logger-upstream-filter",
    "type": "single",
    "selectCount": 1,
    "body": "A TypeScript SDK client is configured with `logLevel: \"error\"` and a custom logger capable of storing debug messages. The logger never receives the SDK's debug messages. Which layer must be changed to allow those messages through?",
    "options": [
      {
        "id": "A",
        "body": "Lower only the custom logger's storage threshold to debug"
      },
      {
        "id": "B",
        "body": "The SDK client's log level, because it filters messages before invoking the custom logger"
      },
      {
        "id": "C",
        "body": "Increase the retention period in the log destination"
      },
      {
        "id": "D",
        "body": "Set `ANTHROPIC_LOG=debug` while keeping the explicit `logLevel: \"error\"` option"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The SDK log level controls which messages reach even a custom logger. A downstream logger cannot record debug messages the SDK never emits to it.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/typescript"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-028",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "sdk-transport-proxy-layer",
    "type": "single",
    "selectCount": 1,
    "body": "A company requires its Node service to send Claude API traffic through an approved forward HTTP proxy that is not an alternate Claude API origin. The Claude request body and model must stay the same. Where does the documented TypeScript SDK put this configuration?",
    "options": [
      {
        "id": "A",
        "body": "Add the proxy URL as a custom model-request body field"
      },
      {
        "id": "B",
        "body": "Replace the API base URL with the proxy address and send Messages paths as ordinary destination requests"
      },
      {
        "id": "C",
        "body": "In runtime-specific HTTP/fetch proxy options on the SDK client or request"
      },
      {
        "id": "D",
        "body": "Send the proxy address in an arbitrary HTTP header while leaving the fetch transport unconfigured"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Proxy routing belongs to the HTTP transport configuration. It does not require changing the model prompt or the Messages request's semantic content.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/typescript"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-029",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "sdk-api-version-not-calendar",
    "type": "single",
    "selectCount": 1,
    "body": "A developer sees the Python SDK send `anthropic-version: 2023-06-01` and proposes replacing it with today's date in every request to make the integration current. What is the sound response?",
    "options": [
      {
        "id": "A",
        "body": "Use the installed SDK package version as the API-version header value"
      },
      {
        "id": "B",
        "body": "Keep the documented SDK default unless deliberately targeting a supported API version; a calendar date is not an upgrade mechanism"
      },
      {
        "id": "C",
        "body": "The header should be removed because SDK calls do not use HTTP versioning"
      },
      {
        "id": "D",
        "body": "Any more recent date is automatically a supported API version"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The SDK uses a documented API-version header. Arbitrarily replacing it with a date can break compatibility with the API and SDK types.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/python"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-030",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "sdk-extra-body-precedence",
    "type": "single",
    "selectCount": 1,
    "body": "A Python wrapper sets a safe request field normally, then passes an `extra_body` dictionary containing the same field name. The wrapper assumes the normal argument always wins. Which behavior must its author account for?",
    "options": [
      {
        "id": "A",
        "body": "The SDK's extra parameters can override documented parameters of the same name"
      },
      {
        "id": "B",
        "body": "Duplicate names are always removed from both dictionaries"
      },
      {
        "id": "C",
        "body": "The model chooses the winner based on the prompt"
      },
      {
        "id": "D",
        "body": "The extra dictionary is used only for client-side comments"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The SDK documents that extra parameters override documented parameters with the same name. A wrapper must not forward untrusted overrides expecting the ordinary argument to remain authoritative.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/python"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-031",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "sdk-async-file-path",
    "type": "single",
    "selectCount": 1,
    "body": "An asyncio worker uploads a large local file using the Python SDK's asynchronous client. It can supply a `PathLike` object and wants the SDK to read the file asynchronously rather than eagerly loading it in application code. Which option uses the documented behavior?",
    "options": [
      {
        "id": "A",
        "body": "Pass the path's string value as the uploaded file content"
      },
      {
        "id": "B",
        "body": "Read the entire file synchronously before every async call"
      },
      {
        "id": "C",
        "body": "Pass the `PathLike` object to the async upload interface"
      },
      {
        "id": "D",
        "body": "Base64-encode the path string instead of supplying the file contents"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The async upload interface accepts a `PathLike` object and reads its contents asynchronously. This avoids an unnecessary eager synchronous file read in the caller.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/python"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-032",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "sdk-timeout-language-units",
    "type": "single",
    "selectCount": 1,
    "body": "A team ports a Python SDK configuration with `timeout=20.0` to the TypeScript SDK and writes `timeout: 20`. The intended timeout is twenty seconds. What is the specific porting error?",
    "options": [
      {
        "id": "A",
        "body": "The TypeScript timeout is in milliseconds; use 20,000 for twenty seconds"
      },
      {
        "id": "B",
        "body": "Both SDKs interpret the numeric timeout identically, so investigate the model first"
      },
      {
        "id": "C",
        "body": "The TypeScript value is an absolute Unix timestamp rather than a duration"
      },
      {
        "id": "D",
        "body": "The Python value is also milliseconds, so the original configuration already meant 20 milliseconds"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Python's numeric timeout is in seconds, while the TypeScript SDK uses milliseconds. Copying the numeric value changes the duration by a factor of 1,000.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/python",
      "https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/typescript"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-033",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "async-client-versus-batch-job",
    "type": "single",
    "selectCount": 1,
    "body": "A developer changes a Python call from the synchronous client to `await AsyncAnthropic().messages.create(...)`. They expect this alone to create a persisted batch job with a later results file. What actually changed?",
    "options": [
      {
        "id": "A",
        "body": "Using an event loop permanently stores the conversation on the server"
      },
      {
        "id": "B",
        "body": "All awaited requests automatically receive batch pricing"
      },
      {
        "id": "C",
        "body": "The client waits asynchronously for the same Messages operation; creating a Message Batch is a separate API operation"
      },
      {
        "id": "D",
        "body": "The method now returns only a batch ID and never a Message"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "An async client changes how application code waits for network I/O. It does not turn a Messages request into a Message Batch or change its operation semantics.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/python"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-034",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "sse-not-bidirectional-channel",
    "type": "multiple",
    "selectCount": 2,
    "body": "A browser receives events through an `EventSource` connection from the application backend. The team now wants the browser to send live control messages over that very same open channel. Which TWO statements distinguish the relevant transports? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "EventSource receives a server-sent event stream; upstream controls need a separate request path"
      },
      {
        "id": "B",
        "body": "SSE guarantees that every arbitrary network chunk is a complete event"
      },
      {
        "id": "C",
        "body": "EventSource provides a send method for arbitrary upstream application messages"
      },
      {
        "id": "D",
        "body": "WebSocket supports bidirectional communication on an established connection"
      },
      {
        "id": "E",
        "body": "Both transports require all application messages to be JSON objects"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "EventSource consumes server-to-client events, while WebSocket supports communication in both directions. The existing SSE connection is not itself an upstream control channel.",
    "sourceRefs": [
      "https://html.spec.whatwg.org/multipage/server-sent-events.html",
      "https://www.rfc-editor.org/rfc/rfc6455"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-035",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "sdk-runtime-version-evidence",
    "type": "single",
    "selectCount": 1,
    "body": "An engineer upgrades the Anthropic Python package in one environment, but the running service still lacks an SDK feature. Before changing models or rewriting requests, what is the most direct check of which SDK code the service is actually using?",
    "options": [
      {
        "id": "A",
        "body": "Run the package-manager version check only in the engineer's development shell"
      },
      {
        "id": "B",
        "body": "Read the SDK version from the selected Claude model's response ID"
      },
      {
        "id": "C",
        "body": "Assume the package manager output from another environment establishes the service version"
      },
      {
        "id": "D",
        "body": "Inspect `anthropic.__version__` inside the running service environment"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Inspect the version in the process that exhibits the problem. Installing in another environment does not establish what the running service imports.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/python"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-036",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "sdk-minor-static-type-change",
    "type": "single",
    "selectCount": 1,
    "body": "A TypeScript SDK minor update introduces stricter static types. The application now fails typechecking, although its previously valid API calls behave the same at runtime. Does this necessarily contradict the SDK's documented versioning policy?",
    "options": [
      {
        "id": "A",
        "body": "No; the policy explicitly allows some type-only incompatibilities without runtime behavior changes in minor releases"
      },
      {
        "id": "B",
        "body": "Yes; minor SDK releases can change logs but are explicitly prohibited from changing types"
      },
      {
        "id": "C",
        "body": "Yes; any type-only change is explicitly forbidden in minor releases"
      },
      {
        "id": "D",
        "body": "No, because SDKs have no versioning policy at all"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The SDK documents exceptions to strict semantic-version expectations, including changes that only affect static types. Review the migration impact rather than assuming unchanged runtime behavior means typechecking cannot change.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/typescript"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-037",
    "domain": "model-selection-optimization",
    "objective": "D5.3",
    "conceptKey": "cost-per-success-not-token-price",
    "type": "single",
    "selectCount": 1,
    "body": "A team compares two Claude configurations on its own repair benchmark. Configuration R costs $12 across 100 attempts and solves 60 tasks. Configuration S costs $18 across 100 attempts and solves 90. Both meet the allowed latency. What does the evidence establish about inference cost per solved task?",
    "options": [
      {
        "id": "A",
        "body": "R is cheaper per solved task because its total spend is lower"
      },
      {
        "id": "B",
        "body": "S is cheaper per solved task because it solves more tasks"
      },
      {
        "id": "C",
        "body": "Both cost $0.20 per solved task on this benchmark"
      },
      {
        "id": "D",
        "body": "The comparison requires only the models' input-token list prices"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Divide total measured spend by successful tasks: $12/60 and $18/90 are both $0.20. Lower total spend alone does not mean a lower cost per useful result.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-038",
    "domain": "model-selection-optimization",
    "objective": "D5.3",
    "conceptKey": "routing-cost-includes-escalation",
    "type": "single",
    "selectCount": 1,
    "body": "A validated repair pipeline tries a cheaper Claude configuration for $0.01, then retries its known failures on a stronger configuration for another $0.05. Twenty percent require escalation. This full pipeline and a direct $0.05 configuration both satisfy the required quality; extra latency on escalated tasks is allowed. Ignoring other costs, which comparison is correct?",
    "options": [
      {
        "id": "A",
        "body": "The pipeline costs $0.05 per task because every task uses the stronger model"
      },
      {
        "id": "B",
        "body": "The pipeline costs $0.01 per task because failed attempts are not charged"
      },
      {
        "id": "C",
        "body": "The pipeline costs $0.06 per task because every task is retried"
      },
      {
        "id": "D",
        "body": "The pipeline averages $0.02 per task, counting the initial attempt and 20% escalations"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Every task incurs $0.01 and one fifth incur another $0.05, giving $0.02 on average. The comparison includes the failed first attempts and relies on the stated validated quality and acceptable latency.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-039",
    "domain": "model-selection-optimization",
    "objective": "D5.3",
    "conceptKey": "provider-feature-availability-gate",
    "type": "single",
    "selectCount": 1,
    "body": "A team has validated a feature on the direct Claude API and must deploy through a named cloud provider for contractual reasons. The same Claude model family is offered there. What must it establish before selecting that deployment?",
    "options": [
      {
        "id": "A",
        "body": "That the required feature and model version are supported through the chosen provider integration"
      },
      {
        "id": "B",
        "body": "Verify only that the cloud provider has a supported SDK, then infer every direct-API feature works"
      },
      {
        "id": "C",
        "body": "Only that the provider lists the family name"
      },
      {
        "id": "D",
        "body": "Check the provider's pricing table and treat a matching model price as evidence of feature parity"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Model availability does not by itself establish feature parity across provider integrations. Confirm the required capability on the actual model, provider and API path being deployed.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/about-claude/models/choosing-a-model",
      "https://platform.claude.com/docs/en/build-with-claude/fast-mode"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-040",
    "domain": "model-selection-optimization",
    "objective": "D5.3",
    "conceptKey": "dateless-model-id-is-pinned",
    "type": "single",
    "selectCount": 1,
    "body": "A deployment review rejects `claude-sonnet-4-6` solely because it has no date suffix, claiming it must be a moving alias. Which statement matches Anthropic's documented naming for the 4.6 generation and later?",
    "options": [
      {
        "id": "A",
        "body": "The SDK randomly selects a dated snapshot behind any such ID"
      },
      {
        "id": "B",
        "body": "Every dateless Claude identifier is a moving alias"
      },
      {
        "id": "C",
        "body": "A date suffix is required to make a model request valid"
      },
      {
        "id": "D",
        "body": "These versioned model IDs are pinned even though their format omits a date"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Starting with the 4.6 generation, versioned model IDs use a dateless format while identifying pinned versions. Do not infer alias behavior from the absence of a date alone.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/about-claude/models/model-ids-and-versions"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-041",
    "domain": "model-selection-optimization",
    "objective": "D5.3",
    "conceptKey": "sampling-parameter-migration",
    "type": "single",
    "selectCount": 1,
    "body": "A direct REST integration migrates from an earlier Claude model to Claude Opus 5. It retains `temperature: 0`, and the API rejects the request. Which change addresses the documented migration issue?",
    "options": [
      {
        "id": "A",
        "body": "Switch to streaming because it makes all sampling parameters valid"
      },
      {
        "id": "B",
        "body": "Omit the unsupported non-default sampling parameter and guide behavior with supported controls"
      },
      {
        "id": "C",
        "body": "Replace temperature with a non-default `top_p` setting"
      },
      {
        "id": "D",
        "body": "Keep `temperature: 0` but increase the output limit"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Opus 5 rejects non-default sampling settings such as `temperature: 0`. The migration guide recommends omitting these parameters; temperature zero never guaranteed identical output on earlier models either.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/models/opus-5/migration-guide"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-042",
    "domain": "model-selection-optimization",
    "objective": "D5.3",
    "conceptKey": "tokenizer-migration-recount",
    "type": "multiple",
    "selectCount": 2,
    "body": "An application migrates from Claude Opus 4.6 to Opus 5. Its admission checks reuse token counts measured on the old model for the same text. After migration, some requests consume more input tokens. Which TWO conclusions are supported? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Assume the SDK duplicated every user message"
      },
      {
        "id": "B",
        "body": "Identical text must always tokenize identically across model releases"
      },
      {
        "id": "C",
        "body": "Only generated output can be affected by a tokenizer change"
      },
      {
        "id": "D",
        "body": "Recount representative and boundary inputs against the target model"
      },
      {
        "id": "E",
        "body": "A changed tokenizer can alter input-token usage without changing the text"
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "Opus 5 uses the newer tokenizer introduced after Opus 4.6. Recount inputs for the target model rather than carrying over old token counts unchanged.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/token-counting",
      "https://platform.claude.com/docs/en/models/opus-5/migration-guide"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-043",
    "domain": "model-selection-optimization",
    "objective": "D5.3",
    "conceptKey": "model-tail-segment-quality",
    "type": "single",
    "selectCount": 1,
    "body": "A team compares Claude configurations for a service whose contract requires at least 98% accuracy on both ordinary and rare exception cases. Configuration L scores 99.5% overall but 84% on exceptions. Configuration H scores 99% on each segment and meets cost and latency limits. What decision follows from these results?",
    "options": [
      {
        "id": "A",
        "body": "Average the two configurations' overall scores and deploy either"
      },
      {
        "id": "B",
        "body": "Choose L because its cheaper ordinary cases compensate for exception errors under an aggregate metric"
      },
      {
        "id": "C",
        "body": "Choose L because only aggregate accuracy matters"
      },
      {
        "id": "D",
        "body": "Use H for the required workload; L has not met the explicit exception-case requirement"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The binding requirement applies to each segment, including exceptions. L's strong aggregate result does not compensate for failing that requirement.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/about-claude/models/choosing-a-model",
      "https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-044",
    "domain": "model-selection-optimization",
    "objective": "D5.3",
    "conceptKey": "model-effort-comparison-cache-confound",
    "type": "single",
    "selectCount": 1,
    "body": "A team compares two effort levels on the same Claude model. It measures one after repeated identical-prefix requests and the other only immediately after changing top-level effort, then attributes the entire latency and cost difference to reasoning. What experimental flaw must be addressed?",
    "options": [
      {
        "id": "A",
        "body": "The benchmark uses the same model for both effort levels"
      },
      {
        "id": "B",
        "body": "Changing effort can invalidate cached prefixes, so cache conditions must be made comparable"
      },
      {
        "id": "C",
        "body": "The test includes the actual application prompt"
      },
      {
        "id": "D",
        "body": "The responses are measured for both cost and latency"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "An effort change can alter cache reuse, confounding the comparison. Measure each configuration under comparable cache conditions before attributing all differences to reasoning depth.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-045",
    "domain": "model-selection-optimization",
    "objective": "D5.4",
    "conceptKey": "cache-ttl-refresh",
    "type": "single",
    "selectCount": 1,
    "body": "A service reuses an identical cached prefix every two minutes. Each request completes quickly, and no other cache conditions change. A developer expects the default five-minute cache to expire five minutes after its first write regardless of those reads. Which behavior is documented?",
    "options": [
      {
        "id": "A",
        "body": "Cache reads refresh only the uncached suffix rather than the matched prefix"
      },
      {
        "id": "B",
        "body": "Reads never refresh a prefix; only changing the prompt does"
      },
      {
        "id": "C",
        "body": "Each cache use refreshes the lifetime, so the initial write time alone does not determine expiry"
      },
      {
        "id": "D",
        "body": "The cache becomes permanent after the third request"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "A successful cache use refreshes its lifetime. Regular reuse within the default TTL can keep the prefix warm without rewriting it just because the original write is older than five minutes.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/prompt-caching"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-046",
    "domain": "model-selection-optimization",
    "objective": "D5.4",
    "conceptKey": "cache-ttl-gap-choice",
    "type": "single",
    "selectCount": 1,
    "body": "A document assistant typically pauses for fifteen minutes between turns. Its large prefix remains identical, and retaining the latency benefit across that pause matters more than the additional cache-write price. Which change fits the documented caching options?",
    "options": [
      {
        "id": "A",
        "body": "Set `ttl` to an arbitrary value of `15m`"
      },
      {
        "id": "B",
        "body": "Add another five-minute checkpoint to make the two lifetimes add together"
      },
      {
        "id": "C",
        "body": "Use the supported one-hour cache lifetime for the reusable prefix"
      },
      {
        "id": "D",
        "body": "Rely on the default five-minute TTL to guarantee reuse after fifteen minutes"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Use the supported one-hour TTL when expected reuse falls beyond five minutes and within an hour. The longer cache write costs more, which the stem explicitly permits.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/prompt-caching"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-047",
    "domain": "model-selection-optimization",
    "objective": "D5.4",
    "conceptKey": "cache-minimum-threshold",
    "type": "single",
    "selectCount": 1,
    "body": "A request marks a 300-token reusable prefix for caching on a model whose documented minimum cacheable prefix is larger than 300 tokens. The request succeeds, but both cache creation and cache read usage are zero. What is the most direct explanation?",
    "options": [
      {
        "id": "A",
        "body": "A cache hit always reports zero in both cache counters."
      },
      {
        "id": "B",
        "body": "The returned usage fields are output-token counters"
      },
      {
        "id": "C",
        "body": "The cache is working because a success status proves a cache write"
      },
      {
        "id": "D",
        "body": "The prefix is below the model's minimum and is processed without caching"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "A prefix below the model's minimum can be processed successfully without being cached. Check the model-specific threshold instead of interpreting request success as evidence of a cache write.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/prompt-caching"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-048",
    "domain": "model-selection-optimization",
    "objective": "D5.4",
    "conceptKey": "cache-prefix-hierarchy-invalidation",
    "type": "single",
    "selectCount": 1,
    "body": "A request has cached tool definitions, system instructions, and message context. The team changes a tool's input schema while leaving the system text and messages byte-identical. Under the documented prefix hierarchy, which cached portion can that change invalidate?",
    "options": [
      {
        "id": "A",
        "body": "Only the tool schema, with every later prefix guaranteed reusable"
      },
      {
        "id": "B",
        "body": "Only generated output from the previous request"
      },
      {
        "id": "C",
        "body": "Only the newest user message"
      },
      {
        "id": "D",
        "body": "The tool prefix and all subsequent system/message prefixes"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The cache hierarchy is tools, then system, then messages. A tool-definition change alters the prefix on which all later cached portions depend.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/prompt-caching"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-049",
    "domain": "model-selection-optimization",
    "objective": "D5.4",
    "conceptKey": "cache-concurrent-write-availability",
    "type": "single",
    "selectCount": 1,
    "body": "A service fires many requests with the same uncached prefix simultaneously and expects all but one to read a cache entry created by the first. It observes several writes. Which launch strategy better supports reuse for subsequent requests?",
    "options": [
      {
        "id": "A",
        "body": "Give every request a different prefix to avoid contention"
      },
      {
        "id": "B",
        "body": "Construct a single shared SDK client and assume that makes pending cache writes immediately visible"
      },
      {
        "id": "C",
        "body": "Allow the first request's response to begin before launching the others that should reuse its prefix"
      },
      {
        "id": "D",
        "body": "Launch more requests before the first response begins"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "A cache entry becomes available after the first response begins. Staging later requests behind that point avoids assuming a still-pending write is already reusable.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/prompt-caching"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-050",
    "domain": "model-selection-optimization",
    "objective": "D5.4",
    "conceptKey": "cache-usage-disjoint-buckets",
    "type": "single",
    "selectCount": 1,
    "body": "A Claude response reports `input_tokens: 200`, `cache_read_input_tokens: 8,000`, and `cache_creation_input_tokens: 1,000`. For this response, which total represents the input-token categories before applying their different prices?",
    "options": [
      {
        "id": "A",
        "body": "200, because input_tokens already contains the other two fields"
      },
      {
        "id": "B",
        "body": "9,200, because the three input categories are separate"
      },
      {
        "id": "C",
        "body": "8,200, because cache creation tokens are also always counted as cache reads"
      },
      {
        "id": "D",
        "body": "10,200, because cache creation must be counted twice"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The three fields are separate input categories: uncached input, cache reads and cache writes. Their sum is 9,200; prices are applied to the relevant categories separately.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/prompt-caching"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-051",
    "domain": "model-selection-optimization",
    "objective": "D5.4",
    "conceptKey": "cache-write-break-even",
    "type": "single",
    "selectCount": 1,
    "body": "For an illustrative price calculation, a prefix would cost $1.00 to process normally per request. A five-minute cache write costs $1.25 for that prefix and each hit costs $0.10. Exactly two identical-prefix requests occur within the cache lifetime, the first writes and the second hits. Ignore all other tokens and fees. What is the combined prefix cost?",
    "options": [
      {
        "id": "A",
        "body": "$0.20"
      },
      {
        "id": "B",
        "body": "$1.25"
      },
      {
        "id": "C",
        "body": "$1.35"
      },
      {
        "id": "D",
        "body": "$2.25"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The first request pays $1.25 for the write and the second $0.10 for the read, totaling $1.35. The write premium must be included when evaluating savings.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/prompt-caching"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-052",
    "domain": "model-selection-optimization",
    "objective": "D5.4",
    "conceptKey": "mixed-cache-ttl-order",
    "type": "single",
    "selectCount": 1,
    "body": "A prompt has a long-lived shared manual followed by shorter-lived session material. The team wants one-hour and five-minute cache checkpoints in the same request. Which arrangement follows the documented TTL ordering rule?",
    "options": [
      {
        "id": "A",
        "body": "Place the one-hour checkpoint before the five-minute checkpoint"
      },
      {
        "id": "B",
        "body": "Use alternating one-hour and five-minute checkpoints without restrictions"
      },
      {
        "id": "C",
        "body": "Use any order because TTL never affects checkpoint validity"
      },
      {
        "id": "D",
        "body": "Place the five-minute checkpoint first and the one-hour checkpoint later"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "When TTLs are mixed, longer-lived cache entries must precede shorter-lived ones. Put the one-hour checkpoint before the five-minute checkpoint.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/prompt-caching"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-053",
    "domain": "model-selection-optimization",
    "objective": "D5.4",
    "conceptKey": "cost-output-verbosity-retained-context",
    "type": "multiple",
    "selectCount": 2,
    "body": "A multi-turn analysis assistant produces a page of prose after every tool step, then resends those assistant turns in later requests. Users need only the final concise answer. Which TWO cost effects support evaluating shorter intermediate output? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "The intermediate prose has no later cost because only user-role messages are input"
      },
      {
        "id": "B",
        "body": "Fewer retained assistant tokens can also reduce later input processing charges"
      },
      {
        "id": "C",
        "body": "Any assistant output becomes free when sent back as input"
      },
      {
        "id": "D",
        "body": "Output becomes unbilled once it is summarized in a later turn"
      },
      {
        "id": "E",
        "body": "Shorter intermediate output can reduce generated output-token charges"
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "Intermediate text is billed when generated and contributes to later input when retained. Reducing unnecessary verbosity can save in both places, subject to quality validation.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence"
    ],
    "qualityStatus": "APPROVED"
  }
];
