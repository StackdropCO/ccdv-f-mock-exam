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
    "body": "A parser for a model using adaptive reasoning rejects a valid assistant turn because it contains a direct answer with no reasoning section. The request used a supported configuration that allows the model to skip extended reasoning. What should change?",
    "options": [
      {
        "id": "A",
        "body": "Accept valid turns that contain no reasoning section and process whichever content types are returned"
      },
      {
        "id": "B",
        "body": "Treat every direct answer as a provider transport error"
      },
      {
        "id": "C",
        "body": "Insert a fabricated reasoning section ahead of the answer"
      },
      {
        "id": "D",
        "body": "Retry every such answer until a reasoning section appears"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Adaptive reasoning lets the model skip visible deliberation on a given turn. Application code should handle whatever supported content a valid response contains rather than assuming every turn has the same internal shape.",
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
    "conceptKey": "complete-output-tool-behavior-supported",
    "type": "single",
    "selectCount": 1,
    "body": "A team disables extended thinking for a simple classification endpoint but still changes another supported reasoning/effort control. They assume the setting cannot affect cost or output because visible thinking is off. What should they do instead?",
    "options": [
      {
        "id": "A",
        "body": "Assume reasoning controls affect only hidden text and never final output."
      },
      {
        "id": "B",
        "body": "Ignore tool usage because only visible prose consumes resources."
      },
      {
        "id": "C",
        "body": "Treat every lower-effort configuration as guaranteed cheaper and equally accurate."
      },
      {
        "id": "D",
        "body": "Measure the complete output and tool behavior under each supported configuration rather than equating 'no visible thinking' with identical execution."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Reasoning controls can influence the overall behavior and resource use of a request. Production choice should be empirical rather than inferred solely from whether a thinking block is visible.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/thinking-steering-and-cost",
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
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
    "conceptKey": "variable-time-quality-latency-effects",
    "type": "single",
    "selectCount": 1,
    "body": "A product needs lower latency. Engineers propose changing both the Claude model tier and the reasoning configuration at the same time, then measuring the result. Why is that a weak experiment?",
    "options": [
      {
        "id": "A",
        "body": "Change one variable at a time so quality and latency effects can be attributed."
      },
      {
        "id": "B",
        "body": "Reasoning configuration never affects latency."
      },
      {
        "id": "C",
        "body": "Model tier and reasoning configuration are the same setting."
      },
      {
        "id": "D",
        "body": "A model tier cannot be evaluated on production-like requests."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Model selection and reasoning mode are separate engineering choices. Changing one variable at a time produces evidence that can support a defensible trade-off.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/about-claude/models/choosing-a-model",
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-009",
    "domain": "model-selection-optimization",
    "objective": "D5.1",
    "conceptKey": "time-first-token-meaningful-output",
    "type": "single",
    "selectCount": 1,
    "body": "An interactive application has a long wait before any output appears, but once generation begins the response streams quickly. Which latency metric should the team investigate first?",
    "options": [
      {
        "id": "A",
        "body": "Only the maximum context-window size."
      },
      {
        "id": "B",
        "body": "Only output tokens per second."
      },
      {
        "id": "C",
        "body": "Only total monthly token spend."
      },
      {
        "id": "D",
        "body": "Time to first token or first meaningful output."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Different latency metrics describe different user experiences. A delay before output begins is primarily a first-token/initial-response problem, not a generation-throughput problem.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/streaming"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-010",
    "domain": "model-selection-optimization",
    "objective": "D5.1",
    "conceptKey": "count-model-visible-input-finite-context",
    "type": "single",
    "selectCount": 1,
    "body": "A developer estimates context capacity by counting only the user's latest message. The request also contains a long system prompt, tool definitions, earlier messages, and a PDF. Why is the estimate wrong?",
    "options": [
      {
        "id": "A",
        "body": "Count all model-visible input in the finite context budget."
      },
      {
        "id": "B",
        "body": "Only generated output counts toward the context window."
      },
      {
        "id": "C",
        "body": "Tool definitions and documents are stored outside the context window."
      },
      {
        "id": "D",
        "body": "System instructions are free once they are reused."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The context window is a budget for the complete model input and generated output. Application design must account for all supplied content.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/context-windows"
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
    "conceptKey": "compare-task-quality-latency-token",
    "type": "single",
    "selectCount": 1,
    "body": "A team wants to know whether extended thinking improves a difficult extraction task. They inspect whether reasoning text is visible and use that alone as the success metric. What is the better evaluation?",
    "options": [
      {
        "id": "A",
        "body": "Choose whichever configuration displays the longest reasoning text."
      },
      {
        "id": "B",
        "body": "Ignore final-task accuracy because reasoning mode is the only variable that matters."
      },
      {
        "id": "C",
        "body": "Assume visible thinking guarantees a correct answer."
      },
      {
        "id": "D",
        "body": "Compare task quality, latency, and token cost on representative cases under the relevant reasoning configurations."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Reasoning mode is an engineering lever, not a quality certificate. Evaluate the actual task outcomes and operational trade-offs rather than the visibility or length of thinking content.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/thinking-steering-and-cost",
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
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
    "conceptKey": "access-paths-underlying-claude-api",
    "type": "single",
    "selectCount": 1,
    "body": "A team sends the same model, messages, and supported options once through an official SDK and once through correctly constructed raw REST. Which expectation is sound?",
    "options": [
      {
        "id": "A",
        "body": "The SDK uses a different model with hidden extra context."
      },
      {
        "id": "B",
        "body": "REST calls cannot use the same Claude models as SDK calls."
      },
      {
        "id": "C",
        "body": "The two access paths use the same underlying Claude API semantics; the SDK mainly provides language-level convenience."
      },
      {
        "id": "D",
        "body": "Using an SDK automatically makes the conversation stateful."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "SDKs are convenience layers over the API. Choosing SDK versus REST changes developer ergonomics and transport handling, not the fundamental model operation being requested.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/api/errors"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-018",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "integration-boilerplate-preserving-underlying-api",
    "type": "single",
    "selectCount": 1,
    "body": "A team has a supported language SDK for a straightforward Claude integration and no unusual transport requirements. Why would the SDK usually be the better starting point than hand-written HTTP?",
    "options": [
      {
        "id": "A",
        "body": "It guarantees deterministic model output."
      },
      {
        "id": "B",
        "body": "It gives the model a larger context window."
      },
      {
        "id": "C",
        "body": "It removes the need to understand errors, rate limits, or application state."
      },
      {
        "id": "D",
        "body": "It reduces integration boilerplate while preserving the same underlying API semantics."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "An SDK reduces integration boilerplate, but it does not change Claude's core semantics or remove production responsibilities such as state, validation, and error handling.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/api/errors"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-019",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "construct-documented-request-including-authentication",
    "type": "single",
    "selectCount": 1,
    "body": "A developer chooses raw REST instead of an SDK for a small integration. Which responsibility now belongs explicitly to their HTTP client?",
    "options": [
      {
        "id": "A",
        "body": "Persist the conversation automatically on Anthropic's servers."
      },
      {
        "id": "B",
        "body": "Train the selected Claude model before each request."
      },
      {
        "id": "C",
        "body": "Construct the documented request, including authentication, API headers, JSON body, and response handling."
      },
      {
        "id": "D",
        "body": "Convert synchronous calls into Message Batches."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Raw REST is a direct access path. The application must construct and handle the HTTP protocol details that an SDK would normally wrap.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/api/errors"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-020",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "normal-synchronous-request",
    "type": "single",
    "selectCount": 1,
    "body": "A command-line script makes one Claude request, waits for the complete result, prints it, and exits. There is no concurrent work and no need for partial output. Which access pattern is simplest?",
    "options": [
      {
        "id": "A",
        "body": "A normal synchronous request."
      },
      {
        "id": "B",
        "body": "An asynchronous event loop used only to wait for this one request."
      },
      {
        "id": "C",
        "body": "A multi-worker agent solely to make the HTTP call."
      },
      {
        "id": "D",
        "body": "A large Message Batch."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Synchronous access is appropriate when the caller simply waits for one request and has no responsiveness or concurrency requirement. Async and streaming solve different needs.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/streaming"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-021",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "asynchronous-bounded-concurrency-appropriate-service",
    "type": "single",
    "selectCount": 1,
    "body": "A web server must keep handling other users while several independent Claude requests are in flight. Its current handler blocks a worker on each network call. What should the team evaluate?",
    "options": [
      {
        "id": "A",
        "body": "Making every request a single shared conversation."
      },
      {
        "id": "B",
        "body": "Increasing output length so network calls finish together."
      },
      {
        "id": "C",
        "body": "Asynchronous I/O with bounded concurrency appropriate to the service and API limits."
      },
      {
        "id": "D",
        "body": "Switching from JSON to plain text transport."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Async access lets a service remain responsive while network operations are pending. Concurrency should still be bounded by workload and rate-limit constraints.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/api/errors"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-022",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "application-waits-changed-message-batches",
    "type": "single",
    "selectCount": 1,
    "body": "A developer changes a blocking Claude SDK call to an awaited asynchronous SDK call and expects the request to become cheaper batch processing. What actually changed?",
    "options": [
      {
        "id": "A",
        "body": "The request is now persisted as a batch job."
      },
      {
        "id": "B",
        "body": "Only how the application waits changed; Message Batches remain a separate API pattern."
      },
      {
        "id": "C",
        "body": "The context window becomes larger."
      },
      {
        "id": "D",
        "body": "The model automatically changes to the cheapest tier."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Asynchronous client code and Message Batches solve different problems. Async improves application concurrency; batches are a distinct asynchronous bulk API with different delivery characteristics.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/batch-processing"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-023",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "perceived-responsiveness-time-first-output",
    "type": "single",
    "selectCount": 1,
    "body": "Users wait eight seconds for a long answer. The team enables streaming and users can now read the first sentence after one second, although the complete response still takes about eight seconds. What improved?",
    "options": [
      {
        "id": "A",
        "body": "The model's context-window size."
      },
      {
        "id": "B",
        "body": "The request automatically received batch pricing."
      },
      {
        "id": "C",
        "body": "The factual accuracy of the answer by definition."
      },
      {
        "id": "D",
        "body": "Perceived responsiveness/time to first output, not necessarily total inference time."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Streaming exposes output as it is generated. It can substantially improve perceived latency even when the total generation duration is similar.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/streaming"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-024",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "track-received-content-partial-rather",
    "type": "multiple",
    "selectCount": 2,
    "body": "A streamed Claude response is interrupted before the terminal completion event. Which TWO behaviors should the client implement? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Disable all future streaming requests."
      },
      {
        "id": "B",
        "body": "Fabricate the remainder from the partial text."
      },
      {
        "id": "C",
        "body": "Track that the received content is partial rather than silently marking it complete."
      },
      {
        "id": "D",
        "body": "Apply the application's recovery policy, such as a safe retry or an explicit interrupted-response state."
      },
      {
        "id": "E",
        "body": "Assume any received text proves normal completion."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Streaming clients need explicit completion state because partial output can arrive before a failure. Recovery should be intentional and observable.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/streaming",
      "https://platform.claude.com/docs/en/api/errors"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-025",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "parse-stream-protocol-assemble-logical",
    "type": "single",
    "selectCount": 1,
    "body": "A streaming client appends raw network chunks directly to the user's answer. Sometimes one logical event is split across chunks and parsing breaks. What should it do?",
    "options": [
      {
        "id": "A",
        "body": "Assume each TCP chunk is one complete Claude content block."
      },
      {
        "id": "B",
        "body": "Convert the request to a Message Batch."
      },
      {
        "id": "C",
        "body": "Retry whenever a chunk does not contain a full English sentence."
      },
      {
        "id": "D",
        "body": "Parse the stream protocol and assemble logical events instead of treating network chunks as complete messages."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Streaming has a defined event structure. Network chunk boundaries are not a reliable application message boundary, so the client should consume the protocol correctly.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/streaming"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-026",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "async-controls-application-waits-streaming",
    "type": "single",
    "selectCount": 1,
    "body": "An application uses asynchronous I/O and also enables response streaming. An engineer says one of these features makes the other redundant. What is the correct distinction?",
    "options": [
      {
        "id": "A",
        "body": "Async and streaming are two names for the same API mode."
      },
      {
        "id": "B",
        "body": "Async controls how the application waits for I/O; streaming controls whether output is delivered incrementally."
      },
      {
        "id": "C",
        "body": "Streaming automatically runs all application code concurrently."
      },
      {
        "id": "D",
        "body": "Async always waits for a complete response before any data can be processed."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Asynchronous execution and streaming are orthogonal. A service can use async with either streaming or non-streaming responses depending on its concurrency and UX needs.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/streaming"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-027",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "task-unchanged-application-simply-gains",
    "type": "single",
    "selectCount": 1,
    "body": "A team migrates from a synchronous SDK client to the asynchronous client while keeping the same model, prompt, and request options. What should it expect about the model task itself?",
    "options": [
      {
        "id": "A",
        "body": "The task is unchanged; the application simply gains a non-blocking way to wait."
      },
      {
        "id": "B",
        "body": "The async client automatically enables extended thinking."
      },
      {
        "id": "C",
        "body": "The async client changes the request into a persistent conversation."
      },
      {
        "id": "D",
        "body": "The async client guarantees responses finish in submission order."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Async SDK access changes application I/O behavior, not the semantic task sent to Claude. Model configuration remains a separate choice.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/api/errors"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-028",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "documented-rest-api-directly-implement",
    "type": "single",
    "selectCount": 1,
    "body": "A service is written in a language for which the team does not want to depend on an SDK. The Claude API is documented over HTTPS. What is a valid integration strategy?",
    "options": [
      {
        "id": "A",
        "body": "Use a Python SDK binary as a network protocol without running Python."
      },
      {
        "id": "B",
        "body": "Call the documented REST API directly and implement the required HTTP/authentication/serialization handling."
      },
      {
        "id": "C",
        "body": "Send prompts through an MCP resource instead of the Claude API."
      },
      {
        "id": "D",
        "body": "Assume Claude can be invoked only from languages with official SDKs."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "REST is the underlying language-independent access path. SDKs are optional convenience layers when they fit the language and requirements.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/api/errors"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-029",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "sdk-still-needs-valid-credentials",
    "type": "single",
    "selectCount": 1,
    "body": "A developer says, 'Because the official SDK handles authentication headers for me, I do not need to provide or configure credentials.' What is wrong with that statement?",
    "options": [
      {
        "id": "A",
        "body": "The SDK provides its own shared credential automatically for every application."
      },
      {
        "id": "B",
        "body": "The SDK still needs valid credentials supplied through a secure configuration path."
      },
      {
        "id": "C",
        "body": "The credential can be omitted when requests use a supported model identifier."
      },
      {
        "id": "D",
        "body": "Authentication is required only for raw REST, not for official SDK calls."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "SDK convenience does not eliminate authentication. Credentials still need to be provisioned securely; the SDK simply helps send them correctly.",
    "sourceRefs": [
      "https://support.claude.com/en/articles/9767949-api-key-best-practices-keeping-your-keys-safe-and-secure"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-030",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "interactive-deadline-favors-realtime-requests",
    "type": "single",
    "selectCount": 1,
    "body": "A user-facing service receives many independent requests that each need an answer within seconds. The team considers Message Batches because the code is already asynchronous. Which requirement matters most?",
    "options": [
      {
        "id": "A",
        "body": "Realtime requests cannot be awaited asynchronously."
      },
      {
        "id": "B",
        "body": "Using async code requires Message Batches."
      },
      {
        "id": "C",
        "body": "The interactive deadline favors realtime requests rather than delayed batch processing."
      },
      {
        "id": "D",
        "body": "Batches are the only way to process requests concurrently."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Application async and provider batch processing are independent decisions. An interactive deadline generally favors realtime requests even when the service handles them asynchronously.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/batch-processing"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-031",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "asynchronous-code-still-needs-bounded",
    "type": "single",
    "selectCount": 1,
    "body": "An async service launches hundreds of Claude requests at once and immediately hits rate limits and downstream resource pressure. What did the team overlook?",
    "options": [
      {
        "id": "A",
        "body": "Asynchronous code still needs bounded concurrency and respect for API/service capacity."
      },
      {
        "id": "B",
        "body": "Streaming should be disabled because it causes all rate limits."
      },
      {
        "id": "C",
        "body": "The model tier determines the number of application threads."
      },
      {
        "id": "D",
        "body": "Async requests are exempt from rate limits."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Async makes concurrency possible; it does not make unlimited concurrency safe. The application must bound in-flight work and handle service limits.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/api/errors"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-032",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "second-request-still-depends-value",
    "type": "single",
    "selectCount": 1,
    "body": "A workflow has two Claude calls where the second prompt depends on a value extracted by the first. Can converting both functions to async make the two model calls safely run in parallel?",
    "options": [
      {
        "id": "A",
        "body": "Yes. Async removes data dependencies."
      },
      {
        "id": "B",
        "body": "Yes, if both calls use the same SDK client."
      },
      {
        "id": "C",
        "body": "No. The second request still depends on the value produced by the first."
      },
      {
        "id": "D",
        "body": "No, because Claude APIs never support concurrent requests."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Async scheduling does not remove logical dependencies. Independent calls can overlap; dependent calls must preserve the required ordering.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/api/errors"
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
    "conceptKey": "backend-adapt-provider-streaming-transport",
    "type": "single",
    "selectCount": 1,
    "body": "A backend consumes a Claude SSE stream and forwards cleaned text deltas to a mobile app over the app's existing protocol. Is this architecture valid?",
    "options": [
      {
        "id": "A",
        "body": "Yes. The backend can adapt the provider's streaming transport into the application's own downstream transport."
      },
      {
        "id": "B",
        "body": "No. Every network hop must expose raw SSE."
      },
      {
        "id": "C",
        "body": "No. Claude streaming works only when the model connects directly to the end-user device."
      },
      {
        "id": "D",
        "body": "Yes, but only if the request is also submitted as a Message Batch."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The provider-facing and client-facing transports do not have to match. The backend can parse Claude's stream and expose an application-specific event channel.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/streaming"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-035",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "application-miss-non-text-blocks-completion",
    "type": "single",
    "selectCount": 1,
    "body": "An SDK returns a structured Message object containing several content blocks and metadata. A developer reads only the first text field and treats that as the entire API response. What risk does this create?",
    "options": [
      {
        "id": "A",
        "body": "The application can miss non-text blocks and completion/usage metadata needed for correct handling."
      },
      {
        "id": "B",
        "body": "Reading structured fields changes the model's output."
      },
      {
        "id": "C",
        "body": "The SDK automatically converts every non-text block into the first string."
      },
      {
        "id": "D",
        "body": "Only plain text is ever returned by the Messages API."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "SDK response objects preserve the structure of the underlying API. Applications should inspect the fields and content types relevant to their feature instead of assuming every response is a single string.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview",
      "https://platform.claude.com/docs/en/build-with-claude/streaming"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-036",
    "domain": "model-selection-optimization",
    "objective": "D5.2",
    "conceptKey": "sdk-convenience-apis-differ-follow",
    "type": "single",
    "selectCount": 1,
    "body": "A team ports a Claude integration between two language SDKs. One SDK offers a convenience helper the other does not. What should the team conclude?",
    "options": [
      {
        "id": "A",
        "body": "The two SDKs must expose identical method names and helper types."
      },
      {
        "id": "B",
        "body": "The target language therefore cannot access that Claude capability."
      },
      {
        "id": "C",
        "body": "A different SDK helper implies a different model behavior."
      },
      {
        "id": "D",
        "body": "SDK convenience APIs can differ; follow the target SDK or underlying REST operation."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "SDKs are language-specific interfaces over the same service and need not have identical convenience helpers. Port against the underlying API semantics and target-language documentation.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/api/errors"
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
    "conceptKey": "model-identifier-configuration-whose-upgrade",
    "type": "single",
    "selectCount": 1,
    "body": "A production team wants model upgrades to happen only after an explicit evaluation. Which configuration property matters most?",
    "options": [
      {
        "id": "A",
        "body": "Assume any short model name always points to a fixed version."
      },
      {
        "id": "B",
        "body": "Choose model IDs based on how many digits they contain."
      },
      {
        "id": "C",
        "body": "Assume any long model name always moves automatically."
      },
      {
        "id": "D",
        "body": "Use a model identifier/configuration whose upgrade behavior is understood and controlled, then promote changes deliberately."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The durable principle is controlled model versioning, not memorizing a particular naming convention. Production should know whether an identifier is fixed or moving and manage upgrades accordingly.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/about-claude/models/choosing-a-model",
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-041",
    "domain": "model-selection-optimization",
    "objective": "D5.3",
    "conceptKey": "review-target-model-supported-controls",
    "type": "single",
    "selectCount": 1,
    "body": "A team migrates to a newer Claude model and copies every old sampling and reasoning option unchanged. The new model rejects part of the request. What is the correct migration approach?",
    "options": [
      {
        "id": "A",
        "body": "Change only the prompt wording and ignore request validation errors."
      },
      {
        "id": "B",
        "body": "Review the target model's supported controls, remove obsolete assumptions, and re-evaluate behavior on representative cases."
      },
      {
        "id": "C",
        "body": "Keep every old parameter because model upgrades guarantee request-level compatibility."
      },
      {
        "id": "D",
        "body": "Add more unsupported parameters until one is accepted."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Model generations can differ in supported controls. Migration should follow current documented capabilities and empirical evaluation rather than blindly preserving configuration.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/about-claude/models/choosing-a-model",
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
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
    "body": "An application migrates to a newer Claude model. Its admission checks reuse token counts measured on the previous model for the same text. After migration, some requests consume more input tokens than the stored counts predicted. Which TWO conclusions are supported? Select TWO.",
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
        "body": "Only generated output can be affected by a change in tokenization"
      },
      {
        "id": "D",
        "body": "Recount representative and boundary inputs against the target model"
      },
      {
        "id": "E",
        "body": "A change in tokenization can alter input-token usage without changing the text"
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "Tokenization can differ between model releases, so the same text may consume a different number of input tokens after a migration. Token-sensitive checks should be measured against the model actually being called rather than carried over from the previous one.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/token-counting"
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
    "conceptKey": "compare-configurations-equivalent-cache-workload",
    "type": "single",
    "selectCount": 1,
    "body": "A benchmark compares two Claude configurations, but one run benefits from a warm prompt cache while the other processes the full prefix. The team attributes the entire cost and latency difference to model choice. What should it do?",
    "options": [
      {
        "id": "A",
        "body": "Ignore caching because it never affects cost or latency."
      },
      {
        "id": "B",
        "body": "Choose whichever run happened second."
      },
      {
        "id": "C",
        "body": "Compare only answer length."
      },
      {
        "id": "D",
        "body": "Compare the configurations under equivalent cache and workload conditions."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Controlled comparisons require comparable surrounding conditions. Cache state can materially affect measured input processing, so it is a confounding variable in model/configuration benchmarks.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/prompt-caching",
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-045",
    "domain": "model-selection-optimization",
    "objective": "D5.4",
    "conceptKey": "expected-reuse-pattern-supported-cache",
    "type": "single",
    "selectCount": 1,
    "body": "A large stable prompt prefix is reused frequently during active conversations but may sit idle for long periods. What should determine the caching strategy?",
    "options": [
      {
        "id": "A",
        "body": "Never cache anything that appears in a system prompt."
      },
      {
        "id": "B",
        "body": "Treat caching as permanent storage."
      },
      {
        "id": "C",
        "body": "Expected reuse pattern, supported cache lifetime options, and measured cost/latency benefit."
      },
      {
        "id": "D",
        "body": "Always use the longest possible cache lifetime regardless of reuse."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Prompt caching is an optimization whose value depends on how often and when a stable prefix is reused. Choose a supported strategy from measured workload behavior.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/prompt-caching"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-046",
    "domain": "model-selection-optimization",
    "objective": "D5.4",
    "conceptKey": "whether-supported-longer-lived-cache-option",
    "type": "single",
    "selectCount": 1,
    "body": "A team marks a reusable prefix for caching, but typical follow-up requests arrive after the chosen cache entry is no longer reusable. What should it evaluate?",
    "options": [
      {
        "id": "A",
        "body": "Whether putting changing user content before the prefix makes it live longer."
      },
      {
        "id": "B",
        "body": "Whether a cache can be used as permanent conversation memory."
      },
      {
        "id": "C",
        "body": "Whether increasing max_tokens extends the cache automatically."
      },
      {
        "id": "D",
        "body": "Whether a supported longer-lived cache option or a different workload design better matches the actual reuse interval."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Cache lifetime should fit the application's reuse interval. Output limits and message order do not turn a short-lived cache into durable state.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/prompt-caching"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-047",
    "domain": "model-selection-optimization",
    "objective": "D5.4",
    "conceptKey": "current-model-caching-eligibility-thresholds",
    "type": "single",
    "selectCount": 1,
    "body": "A service tries to cache a very small prefix and sees no measurable cache benefit. What is the best next step?",
    "options": [
      {
        "id": "A",
        "body": "Pad the prefix with irrelevant text until it is large enough to cache, without measuring the added input cost."
      },
      {
        "id": "B",
        "body": "Check the current model's caching eligibility/thresholds and measure whether the prefix is large enough to justify caching."
      },
      {
        "id": "C",
        "body": "Assume every marked string must create a billable cache entry."
      },
      {
        "id": "D",
        "body": "Treat lack of a cache hit as a model-quality failure."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Prompt caching has model-specific eligibility and economic considerations. The production question is whether the reusable prefix qualifies and creates real benefit, not memorizing one threshold value.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/prompt-caching"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-048",
    "domain": "model-selection-optimization",
    "objective": "D5.4",
    "conceptKey": "changing-early-cached-prefix-invalidate",
    "type": "single",
    "selectCount": 1,
    "body": "A cached prompt begins with tool definitions and stable policy, followed by changing conversation text. A developer frequently edits the tool schema and is surprised that later cache reuse falls. What principle explains the behavior?",
    "options": [
      {
        "id": "A",
        "body": "Tool definitions are never part of model input."
      },
      {
        "id": "B",
        "body": "Only the final user message affects cache identity."
      },
      {
        "id": "C",
        "body": "Changing an early cached prefix can invalidate reuse of the content after it."
      },
      {
        "id": "D",
        "body": "Cache reuse depends only on the model's final answer."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Prompt caching reuses matching prefixes. Changes near the beginning of that prefix can invalidate reuse for subsequent content, so stable material should remain stable when possible.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/prompt-caching"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "MO-049",
    "domain": "model-selection-optimization",
    "objective": "D5.4",
    "conceptKey": "cold-concurrent-requests-race-reusable",
    "type": "single",
    "selectCount": 1,
    "body": "A service launches a burst of identical large-prefix requests at exactly the same moment before any cache entry has been established. It expects only the first to pay the cache-write cost. Why should it measure the real behavior?",
    "options": [
      {
        "id": "A",
        "body": "Cold concurrent requests can race before the reusable cache entry is available."
      },
      {
        "id": "B",
        "body": "A shared SDK object guarantees one network request for every identical prompt."
      },
      {
        "id": "C",
        "body": "Cache behavior is independent of request timing."
      },
      {
        "id": "D",
        "body": "Prompt caching deduplicates all simultaneous requests into one model answer."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Caching reuses processed prefixes; it is not a general request-deduplication system. Bursty cold starts can behave differently from steady-state reuse, so measure the workload.",
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
    "conceptKey": "separate-stable-frequently-changing-material",
    "type": "single",
    "selectCount": 1,
    "body": "A prompt contains a company manual that changes monthly and session notes that change every few minutes. What caching design principle is strongest?",
    "options": [
      {
        "id": "A",
        "body": "Put the most volatile content first."
      },
      {
        "id": "B",
        "body": "Separate stable and frequently changing material so cache boundaries reflect their different reuse patterns."
      },
      {
        "id": "C",
        "body": "Use one cache setting and assume all content has the same lifecycle."
      },
      {
        "id": "D",
        "body": "Combine long-lived and short-lived material into one frequently changing prefix."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Good caching follows content stability. Structuring long-lived and short-lived prefixes separately improves reuse and makes cache behavior easier to reason about without relying on an exact TTL-ordering fact.",
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
