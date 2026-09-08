// Generated from centrally reviewed authoring records. See scripts/build-question-bank.mjs.
import type { BankQuestion } from "../../bankTypes";
export const toolsMcp: BankQuestion[] = [
  {
    "id": "TM-001",
    "domain": "tools-mcp",
    "objective": "D8.1",
    "conceptKey": "tool-parameter-unit-contract",
    "type": "single",
    "selectCount": 1,
    "body": "A shipping tool accepts `weight` as a number in kilograms. Claude repeatedly supplies the customer’s pound value unchanged. The tool is selected correctly and all calls pass type validation. Which change addresses the missing contract most directly?",
    "options": [
      {
        "id": "A",
        "body": "Mark the existing numeric parameter as required without specifying its unit"
      },
      {
        "id": "B",
        "body": "Explain the unit and conversion requirement in the parameter description"
      },
      {
        "id": "C",
        "body": "Change the parameter to an unrestricted string"
      },
      {
        "id": "D",
        "body": "Add strict type validation while keeping the same unit-free numeric schema"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The missing information is the meaning of the numeric parameter. Documenting kilograms and the conversion requirement addresses an error that numeric type validation alone cannot detect.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-002",
    "domain": "tools-mcp",
    "objective": "D8.1",
    "conceptKey": "tool-input-examples-schema-validity",
    "type": "single",
    "selectCount": 1,
    "body": "A user-defined tool requires `account_id` in its input schema. A developer adds `input_examples` containing only `region`, and the request now fails with HTTP 400 before inference. Which repair preserves the required account identifier?",
    "options": [
      {
        "id": "A",
        "body": "Remove `account_id` from the schema’s required list"
      },
      {
        "id": "B",
        "body": "Move the malformed example into the model’s previous answer"
      },
      {
        "id": "C",
        "body": "Make every example conform to the existing input schema"
      },
      {
        "id": "D",
        "body": "Retry the unchanged request until it succeeds"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Input examples must validate against the tool’s schema. Correct the examples rather than relaxing the application’s required field.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-003",
    "domain": "tools-mcp",
    "objective": "D8.1",
    "conceptKey": "tool-choice-enforcement",
    "type": "single",
    "selectCount": 1,
    "body": "A Messages request includes tool definitions for reuse, but this particular turn must produce no tool calls. The application will enforce this through the documented `tool_choice` setting. Which value fits?",
    "options": [
      {
        "id": "A",
        "body": "`{\"type\":\"auto\"}`"
      },
      {
        "id": "B",
        "body": "`{\"type\":\"any\"}`"
      },
      {
        "id": "C",
        "body": "`{\"type\":\"tool\",\"name\":\"lookup\"}`"
      },
      {
        "id": "D",
        "body": "`{\"type\":\"none\"}`"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "`none` disables tool use for that request. `auto` still permits calls, while the forced choices request calls on models that support them.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-004",
    "domain": "tools-mcp",
    "objective": "D8.1",
    "conceptKey": "client-result-content-order",
    "type": "single",
    "selectCount": 1,
    "body": "An assistant turn contains only client-tool calls. The next user message puts explanatory text first and valid `tool_result` blocks afterward. All call IDs match. The API rejects the history. What should change?",
    "options": [
      {
        "id": "A",
        "body": "Put all `tool_result` blocks before the explanatory text in that same user message"
      },
      {
        "id": "B",
        "body": "Change the user role to `tool`"
      },
      {
        "id": "C",
        "body": "Assign new IDs to the results"
      },
      {
        "id": "D",
        "body": "Insert a separate user explanation between the call and its results"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Client results must precede text within the immediately following user message. Correct IDs do not waive this ordering requirement.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-005",
    "domain": "tools-mcp",
    "objective": "D8.1",
    "conceptKey": "same-tool-concurrent-correlation",
    "type": "single",
    "selectCount": 1,
    "body": "Claude emits two calls to the same user-defined lookup tool for different invoices. They finish in reverse order. Which field must the application use to associate each result with its original request?",
    "options": [
      {
        "id": "A",
        "body": "The position in which execution finishes"
      },
      {
        "id": "B",
        "body": "The tool name, since both calls use one handler"
      },
      {
        "id": "C",
        "body": "The unique `tool_use` ID echoed as `tool_use_id`"
      },
      {
        "id": "D",
        "body": "The common conversation message ID"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Each call has its own identifier even when names repeat. Result correlation follows that identifier, not completion order.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-006",
    "domain": "tools-mcp",
    "objective": "D8.1",
    "conceptKey": "execution-data-dependency",
    "type": "single",
    "selectCount": 1,
    "body": "One assistant response proposes two custom client tools: change a record, then read that record. The application requires the read to observe the completed write. What is the correct execution policy?",
    "options": [
      {
        "id": "A",
        "body": "Run both concurrently because a shared assistant response guarantees dependency ordering"
      },
      {
        "id": "B",
        "body": "Execute the write successfully before running the read"
      },
      {
        "id": "C",
        "body": "Run the read first to reduce perceived latency"
      },
      {
        "id": "D",
        "body": "Submit the read result before executing either call"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The harness chooses execution order; the API does not impose it for custom client tools. The stated read-after-write dependency requires sequential execution.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/parallel-tool-use"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-007",
    "domain": "tools-mcp",
    "objective": "D8.1",
    "conceptKey": "skipped-tool-call-result-obligation",
    "type": "single",
    "selectCount": 1,
    "body": "A custom client-tool batch contains two writes. After the first fails, application policy skips the second. Which response correctly accounts for the skipped call?",
    "options": [
      {
        "id": "A",
        "body": "Omit it from history because it did not run"
      },
      {
        "id": "B",
        "body": "Mark it successful with empty content"
      },
      {
        "id": "C",
        "body": "Reuse the first call’s ID for both failures"
      },
      {
        "id": "D",
        "body": "Return its own `tool_result` with `is_error: true` and explain that it was not executed"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Every proposed client call still needs a corresponding result. A skipped action should be reported explicitly under its own call ID.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/parallel-tool-use"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-008",
    "domain": "tools-mcp",
    "objective": "D8.1",
    "conceptKey": "tool-choice-enforcement",
    "type": "single",
    "selectCount": 1,
    "body": "A Messages integration uses a model and configuration verified to support forced tool selection. Several tools are supplied, but this request must call `validate_manifest` specifically rather than any other tool. Which setting expresses that requirement?",
    "options": [
      {
        "id": "A",
        "body": "`tool_choice: {\"type\":\"auto\"}`"
      },
      {
        "id": "B",
        "body": "`tool_choice: {\"type\":\"any\"}`"
      },
      {
        "id": "C",
        "body": "`tool_choice: {\"type\":\"tool\",\"name\":\"validate_manifest\"}`"
      },
      {
        "id": "D",
        "body": "`tool_choice: {\"type\":\"none\"}`"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Named forced selection requires the specified tool. `any` requires a call but does not constrain it to this particular tool.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-009",
    "domain": "tools-mcp",
    "objective": "D8.1",
    "conceptKey": "agent-tool-query-pushdown",
    "type": "single",
    "selectCount": 1,
    "body": "A diagnostic tool returns an entire month of raw traces. The agent needs only errors for one request ID; the backend already supports that exact filter. The output is routinely truncated before the matching trace appears. Which tool redesign addresses this failure?",
    "options": [
      {
        "id": "A",
        "body": "Accept the request ID and filter in the backend before returning relevant traces"
      },
      {
        "id": "B",
        "body": "Return the same traces with shorter field names only"
      },
      {
        "id": "C",
        "body": "Sort the full unfiltered response by newest timestamp and keep the same truncation"
      },
      {
        "id": "D",
        "body": "Add another tool that returns the same unfiltered month"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Filtering through the tool avoids spending context on irrelevant records. The backend can locate the required data before the response is truncated.",
    "sourceRefs": [
      "https://www.anthropic.com/engineering/writing-tools-for-agents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-010",
    "domain": "tools-mcp",
    "objective": "D8.1",
    "conceptKey": "tool-response-actionable-identifiers",
    "type": "single",
    "selectCount": 1,
    "body": "A search tool returns compact issue summaries, but omits the stable issue IDs required by the update tool. Claude must make extra lookup calls to act on each result. Which output change directly removes those calls while keeping responses concise?",
    "options": [
      {
        "id": "A",
        "body": "Return every database column"
      },
      {
        "id": "B",
        "body": "Include each matching issue’s stable ID alongside its summary"
      },
      {
        "id": "C",
        "body": "Remove summaries and return only a success boolean"
      },
      {
        "id": "D",
        "body": "Ask the update tool to guess the intended issue from its title"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Include the identifier the next action requires with the relevant summary. This supports reliable follow-up without a full database dump.",
    "sourceRefs": [
      "https://www.anthropic.com/engineering/writing-tools-for-agents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-011",
    "domain": "tools-mcp",
    "objective": "D8.1",
    "conceptKey": "tool-schema-required-versus-described",
    "type": "multiple",
    "selectCount": 2,
    "body": "A tool handler requires a string `project_id`, but its schema is `{\"type\":\"object\",\"properties\":{\"project_id\":{\"description\":\"Mandatory project identifier\"}}}`. Which TWO additions correctly encode the required contract? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Remove the property because the handler can infer it"
      },
      {
        "id": "B",
        "body": "Declare `project_id` with `type: \"string\"`"
      },
      {
        "id": "C",
        "body": "List `project_id` in `required`"
      },
      {
        "id": "D",
        "body": "Put the mandatory requirement only in the tool name"
      },
      {
        "id": "E",
        "body": "Set `project_id` to an unrestricted object"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "The property type defines the expected value, and `required` establishes presence. Description text alone is not the schema’s required-field constraint.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-012",
    "domain": "tools-mcp",
    "objective": "D8.1",
    "conceptKey": "tool-description-no-output-format-parser",
    "type": "single",
    "selectCount": 1,
    "body": "A client parser finds tool calls by matching the sentence “I will call lookup now” in assistant text. A model update uses a different sentence, although the structured response still contains valid calls. What should the parser use?",
    "options": [
      {
        "id": "A",
        "body": "A longer regular expression over introductory prose"
      },
      {
        "id": "B",
        "body": "The first assistant text block regardless of type"
      },
      {
        "id": "C",
        "body": "A fixed phrase required through examples"
      },
      {
        "id": "D",
        "body": "The structured `tool_use` blocks and their `name` and `input` fields"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Tool calls are represented structurally. Assistant commentary can vary and is not a reliable dispatch protocol.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-013",
    "domain": "tools-mcp",
    "objective": "D8.1",
    "conceptKey": "parallel-read-latency-with-complete-results",
    "type": "multiple",
    "selectCount": 2,
    "body": "Claude proposes two custom client calls that read unrelated services. They have no side effects or data dependencies. The application wants lower wall-clock latency without dropping either observation. Which TWO actions fit? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Execute the independent calls concurrently"
      },
      {
        "id": "B",
        "body": "Return only whichever call completes first"
      },
      {
        "id": "C",
        "body": "Require a new model turn between executions"
      },
      {
        "id": "D",
        "body": "Collect both results and return them with their respective call IDs"
      },
      {
        "id": "E",
        "body": "Combine both observations under a newly invented call ID"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Independent reads can run concurrently. Both observations must still be returned and correlated to their original calls.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/parallel-tool-use"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-014",
    "domain": "tools-mcp",
    "objective": "D8.2",
    "conceptKey": "mcp-initialization-readiness",
    "type": "single",
    "selectCount": 1,
    "body": "An MCP 2025-11-25 client has received a successful response to `initialize`. Before normal tool operations begin, what must the client send?",
    "options": [
      {
        "id": "A",
        "body": "Another `initialize` with a new request ID"
      },
      {
        "id": "B",
        "body": "`notifications/initialized`"
      },
      {
        "id": "C",
        "body": "A tool result containing the protocol version"
      },
      {
        "id": "D",
        "body": "A server capability notification on behalf of the server"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The client signals readiness with `notifications/initialized` after successful initialization. Normal operations follow that handshake.",
    "sourceRefs": [
      "https://modelcontextprotocol.io/specification/2025-11-25/basic/lifecycle"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-015",
    "domain": "tools-mcp",
    "objective": "D8.2",
    "conceptKey": "mcp-stdio-diagnostics-channel",
    "type": "single",
    "selectCount": 1,
    "body": "A local MCP 2025-11-25 server intermittently causes JSON parsing failures at startup. It prints “Server ready” to stdout before its first JSON-RPC response. Which change preserves startup diagnostics and protocol compliance?",
    "options": [
      {
        "id": "A",
        "body": "Send diagnostics to stderr and reserve stdout for valid MCP messages"
      },
      {
        "id": "B",
        "body": "Print the banner twice so the client can recognize it"
      },
      {
        "id": "C",
        "body": "Change the banner to a valid JSON string with no JSON-RPC envelope"
      },
      {
        "id": "D",
        "body": "Move JSON-RPC replies to stderr instead"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Stdout carries protocol messages in the stdio transport. Diagnostic logging belongs on stderr.",
    "sourceRefs": [
      "https://modelcontextprotocol.io/specification/2025-11-25/basic/transports"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-016",
    "domain": "tools-mcp",
    "objective": "D8.2",
    "conceptKey": "mcp-resource-content-update-versus-list",
    "type": "multiple",
    "selectCount": 2,
    "body": "An MCP 2025-11-25 client reads a resource and wants notifications when that resource’s contents change. The server advertises `resources.subscribe: true`. Which TWO protocol elements provide that flow? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "`tools/call` with the resource URI as a tool name"
      },
      {
        "id": "B",
        "body": "`notifications/resources/list_changed` alone for every content revision"
      },
      {
        "id": "C",
        "body": "`resources/subscribe` for that URI"
      },
      {
        "id": "D",
        "body": "`notifications/resources/updated` identifying the changed URI"
      },
      {
        "id": "E",
        "body": "Repeated `initialize` requests after every edit"
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Subscription addresses a particular resource’s changes. An updated notification identifies the resource; a list-change notification addresses the available-resource list.",
    "sourceRefs": [
      "https://modelcontextprotocol.io/specification/2025-11-25/server/resources"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-017",
    "domain": "tools-mcp",
    "objective": "D8.2",
    "conceptKey": "mcp-prompt-list-versus-get",
    "type": "single",
    "selectCount": 1,
    "body": "An MCP 2025-11-25 client lists a server’s review prompts. The user selects one with a `language` argument. Which request retrieves the actual messages with that argument supplied?",
    "options": [
      {
        "id": "A",
        "body": "`resources/read` using the prompt’s name as a URI"
      },
      {
        "id": "B",
        "body": "`tools/call` using the prompt’s description"
      },
      {
        "id": "C",
        "body": "`prompts/list` with the desired language appended to its cursor"
      },
      {
        "id": "D",
        "body": "`prompts/get` with the prompt name and arguments"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Listing exposes prompt definitions. `prompts/get` retrieves the selected template’s messages using supplied arguments.",
    "sourceRefs": [
      "https://modelcontextprotocol.io/specification/2025-11-25/server/prompts"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-018",
    "domain": "tools-mcp",
    "objective": "D8.2",
    "conceptKey": "mcp-protocol-error-versus-business-error",
    "type": "single",
    "selectCount": 1,
    "body": "An MCP 2025-11-25 server receives a valid `tools/call` for an existing reservation tool. The requested date passes parsing but violates the tool’s booking window. How should this business-rule failure be represented?",
    "options": [
      {
        "id": "A",
        "body": "As a successful reservation with an empty reference"
      },
      {
        "id": "B",
        "body": "As a tool result with `isError: true` and actionable booking-window feedback"
      },
      {
        "id": "C",
        "body": "As an unknown-method error because the date was rejected"
      },
      {
        "id": "D",
        "body": "By dropping the response so the client retries indefinitely"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The request reached a known tool and failed its business rule. MCP distinguishes such tool execution errors from protocol errors such as unknown tools or malformed requests.",
    "sourceRefs": [
      "https://modelcontextprotocol.io/specification/2025-11-25/server/tools"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-019",
    "domain": "tools-mcp",
    "objective": "D8.2",
    "conceptKey": "mcp-output-schema-structured-result",
    "type": "single",
    "selectCount": 1,
    "body": "An MCP 2025-11-25 tool advertises an `outputSchema` requiring numeric `total`. Its successful result returns `structuredContent: {\"total\":\"twelve\"}`. Which assessment is correct?",
    "options": [
      {
        "id": "A",
        "body": "The server’s structured result violates its advertised output schema"
      },
      {
        "id": "B",
        "body": "Output schemas constrain only tool arguments"
      },
      {
        "id": "C",
        "body": "Any JSON object satisfies every output schema"
      },
      {
        "id": "D",
        "body": "A text content block automatically exempts structuredContent from validation"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "When an output schema is advertised, structured results must conform to it. A string does not satisfy the stated numeric field.",
    "sourceRefs": [
      "https://modelcontextprotocol.io/specification/2025-11-25/server/tools"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-020",
    "domain": "tools-mcp",
    "objective": "D8.3",
    "conceptKey": "skill-plus-mcp-procedure-and-access",
    "type": "single",
    "selectCount": 1,
    "body": "A team already has a working MCP connection to its case-management system. Claude can read cases, but needs the team’s reusable escalation procedure to interpret them. No new remote operation is required. What should the team add?",
    "options": [
      {
        "id": "A",
        "body": "A second MCP server exposing the identical tools"
      },
      {
        "id": "B",
        "body": "A reusable skill explaining the escalation procedure and how to use the existing tools"
      },
      {
        "id": "C",
        "body": "A static export replacing the live case connection"
      },
      {
        "id": "D",
        "body": "A new transport for the same server without procedure instructions"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "MCP supplies system access; a skill supplies reusable workflow knowledge. The missing capability is procedural guidance, not another connection.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/features-overview"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-021",
    "domain": "tools-mcp",
    "objective": "D8.3",
    "conceptKey": "sdk-in-process-custom-tool-deployment",
    "type": "single",
    "selectCount": 1,
    "body": "An Agent SDK application needs a domain calculation implemented as an existing Python function. Deployment policy forbids adding a listening service or subprocess. Which extension can expose the function without either?",
    "options": [
      {
        "id": "A",
        "body": "A new remote HTTP MCP deployment"
      },
      {
        "id": "B",
        "body": "A stdio MCP subprocess"
      },
      {
        "id": "C",
        "body": "A custom tool wrapped in the SDK’s in-process MCP server"
      },
      {
        "id": "D",
        "body": "A skill containing only the function’s name"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The SDK supports custom handlers through an MCP server that runs inside the application process. It need not create an external service or subprocess.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/custom-tools"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-022",
    "domain": "tools-mcp",
    "objective": "D8.3",
    "conceptKey": "server-code-execution-no-outbound-network",
    "type": "single",
    "selectCount": 1,
    "body": "A Claude API workflow uses the documented code-execution sandbox to analyze a supplied CSV. A proposed next step is to fetch a fresh private API response directly from Python in that sandbox. Under the sandbox’s documented network restriction, which adjustment works?",
    "options": [
      {
        "id": "A",
        "body": "Change the private API URL from HTTP to HTTPS but keep the call inside the sandbox"
      },
      {
        "id": "B",
        "body": "Install an HTTP library and retry the same direct request"
      },
      {
        "id": "C",
        "body": "Set a longer Python request timeout and retry inside the sandbox"
      },
      {
        "id": "D",
        "body": "Fetch the authorized data through application code or a suitable client tool, then supply it for analysis"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The API code-execution sandbox has no outbound network access. Supplying data through the application or an appropriate external tool separates retrieval from sandbox analysis.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/code-execution-tool"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-023",
    "domain": "tools-mcp",
    "objective": "D8.3",
    "conceptKey": "skill-supporting-reference-on-demand",
    "type": "single",
    "selectCount": 1,
    "body": "A skill’s main instructions include a long catalog of rarely used file-format details. Every invocation loads the catalog even when only a short checklist is needed. Which organization preserves access while reducing unnecessary context?",
    "options": [
      {
        "id": "A",
        "body": "Keep the checklist in SKILL.md and link separate reference files with guidance on when to read them"
      },
      {
        "id": "B",
        "body": "Copy the catalog into CLAUDE.md so it loads every session"
      },
      {
        "id": "C",
        "body": "Remove the catalog without leaving any access path"
      },
      {
        "id": "D",
        "body": "Rename the catalog without changing what the main file contains"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Skills can link supporting files that are read when needed. The main instructions can remain concise while preserving access to detailed material.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/skills"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-024",
    "domain": "tools-mcp",
    "objective": "D8.3",
    "conceptKey": "web-fetch-versus-browser-rendering",
    "type": "single",
    "selectCount": 1,
    "body": "A workflow must read a page whose useful content appears only after JavaScript renders and a tab is clicked. The current Claude API web-fetch tool returns no useful content. What capability is missing?",
    "options": [
      {
        "id": "A",
        "body": "Retry the static fetch with a longer timeout"
      },
      {
        "id": "B",
        "body": "A browser-capable integration that renders JavaScript and can interact with the page"
      },
      {
        "id": "C",
        "body": "Parse the fetched HTML with a stricter JSON output format"
      },
      {
        "id": "D",
        "body": "A second fetch of the same static content without browser interaction"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The web-fetch tool does not render JavaScript or perform page interactions. A browser-capable integration is needed for the stated page behavior.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-fetch-tool"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-025",
    "domain": "tools-mcp",
    "objective": "D8.3",
    "conceptKey": "bash-client-versus-server-filesystem",
    "type": "multiple",
    "selectCount": 2,
    "body": "A Claude API application exposes both `bash_20250124` and server-side code execution. A file exists only in the application’s local Bash environment. Which TWO statements are correct? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "The server sandbox automatically mounts the application’s local working directory"
      },
      {
        "id": "B",
        "body": "The Bash tool runs in a shell owned by the application"
      },
      {
        "id": "C",
        "body": "Both tools always share environment variables"
      },
      {
        "id": "D",
        "body": "The local file must be explicitly made available to the server sandbox if server code needs it"
      },
      {
        "id": "E",
        "body": "Reuse an identical filename in both environments to make it refer to the same bytes"
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "The client Bash session and Anthropic’s sandbox are separate execution environments. Data does not become shared merely because both tools appear in one request.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/bash-tool"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-026",
    "domain": "tools-mcp",
    "objective": "D8.3",
    "conceptKey": "sdk-tool-registration-not-preapproval",
    "type": "single",
    "selectCount": 1,
    "body": "A developer defines a custom Agent SDK tool and adds its qualified name to `allowedTools`, but never passes its server to `mcpServers`. Why is the tool absent?",
    "options": [
      {
        "id": "A",
        "body": "The tool must be renamed to a built-in tool name before it can be registered"
      },
      {
        "id": "B",
        "body": "The tool must always be deployed on a public server"
      },
      {
        "id": "C",
        "body": "Allowing a name does not register the tool; the SDK must receive its server configuration"
      },
      {
        "id": "D",
        "body": "Tool registration occurs only when its name appears in the prompt"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Permission configuration and tool registration are separate. Pass the in-process server through `mcpServers` so the tool exists, then configure its allowed name as needed.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/custom-tools"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-027",
    "domain": "tools-mcp",
    "objective": "D8.3",
    "conceptKey": "local-skill-dynamic-context-before-model",
    "type": "single",
    "selectCount": 1,
    "body": "A filesystem-based Claude Code skill contains a documented dynamic-context placeholder that runs a local command to read the current Git diff. The command is permitted and succeeds. When is its output supplied to Claude?",
    "options": [
      {
        "id": "A",
        "body": "The command runs during skill preprocessing, and its output replaces the placeholder before Claude receives the skill content"
      },
      {
        "id": "B",
        "body": "Claude must first receive the literal placeholder and decide whether to implement it"
      },
      {
        "id": "C",
        "body": "The output is available only after Claude finishes its final response"
      },
      {
        "id": "D",
        "body": "The command output is stored only as skill metadata and never enters the instructions"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Local skill dynamic-context commands run before the rendered skill is sent to Claude. Their output becomes part of the provided context.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/skills"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-028",
    "domain": "tools-mcp",
    "objective": "D8.3",
    "conceptKey": "skill-frontmatter-first-line",
    "type": "single",
    "selectCount": 1,
    "body": "A developer inserts a prose introduction before the opening `---` of a local SKILL.md. Settings that used to be parsed as frontmatter now appear as ordinary instruction text. Which repair restores the documented parsing?",
    "options": [
      {
        "id": "A",
        "body": "Indent every YAML key beneath the prose introduction"
      },
      {
        "id": "B",
        "body": "Rename the skill directory but leave the file unchanged"
      },
      {
        "id": "C",
        "body": "Put the YAML block after the final instruction paragraph"
      },
      {
        "id": "D",
        "body": "Move the opening `---` to the file’s first line and place introductory prose after the closing delimiter"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Claude Code recognizes skill frontmatter when its opening delimiter is the first line. Otherwise the apparent metadata is treated as content.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/skills"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-029",
    "domain": "tools-mcp",
    "objective": "D8.3",
    "conceptKey": "skill-user-only-invocation-control",
    "type": "single",
    "selectCount": 1,
    "body": "A Claude Code skill prepares a release checklist. The team wants it invocable by a user’s command but unavailable for Claude to invoke automatically. Which frontmatter setting expresses that invocation policy?",
    "options": [
      {
        "id": "A",
        "body": "`user-invocable: false`"
      },
      {
        "id": "B",
        "body": "`disable-model-invocation: true`"
      },
      {
        "id": "C",
        "body": "`description: always run automatically`"
      },
      {
        "id": "D",
        "body": "`context: fork`"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "`disable-model-invocation: true` makes invocation user-controlled. It is an invocation setting, not an authorization boundary for every action the skill may describe.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/skills"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-030",
    "domain": "tools-mcp",
    "objective": "D8.3",
    "conceptKey": "skill-arguments-reusable-command",
    "type": "single",
    "selectCount": 1,
    "body": "A local Claude Code skill should inspect whichever release tag the user supplies, such as `/inspect-release v7.2`. Its instructions currently hard-code v7.1. Which change lets one skill serve different tags?",
    "options": [
      {
        "id": "A",
        "body": "Create a separate hard-coded skill for each tag"
      },
      {
        "id": "B",
        "body": "Change the skill’s description to the latest tag each time"
      },
      {
        "id": "C",
        "body": "Use `$ARGUMENTS` in the skill body where the tag is needed"
      },
      {
        "id": "D",
        "body": "Leave the hard-coded target and document new tags only in the skill name"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Claude Code substitutes invocation arguments into the skill body. The procedure can be reused without hard-coding each target.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/skills"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-031",
    "domain": "tools-mcp",
    "objective": "D8.3",
    "conceptKey": "skill-bundled-deterministic-utility",
    "type": "single",
    "selectCount": 1,
    "body": "A document-processing skill repeatedly asks Claude to recreate the same checksum routine. The team already has a tested local script implementing the required algorithm, and the skill’s environment can execute it. What should the skill instruct Claude to do?",
    "options": [
      {
        "id": "A",
        "body": "Regenerate the routine each time to encourage diversity"
      },
      {
        "id": "B",
        "body": "Bundle or reference the tested script and execute it for the checksum step"
      },
      {
        "id": "C",
        "body": "Read the script and estimate its output without running it"
      },
      {
        "id": "D",
        "body": "Replace the exact checksum requirement with a prose summary"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Reusable utility scripts provide consistent deterministic operations without regenerating code. The skill should clearly request execution rather than merely reference reading.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-032",
    "domain": "tools-mcp",
    "objective": "D8.3",
    "conceptKey": "skill-specificity-task-variability",
    "type": "single",
    "selectCount": 1,
    "body": "A review skill must help choose among several valid database designs. The decision depends on each project’s latency, consistency, and operational requirements; no single design is always required. Which instruction style matches this task?",
    "options": [
      {
        "id": "A",
        "body": "Hard-code one design and forbid considering the project requirements"
      },
      {
        "id": "B",
        "body": "Require the same ordered sequence of implementation commands for every project"
      },
      {
        "id": "C",
        "body": "Use decision criteria and contextual guidance that let Claude compare the valid approaches"
      },
      {
        "id": "D",
        "body": "Select a design solely from the project’s name to make the procedure reproducible"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Context-dependent decisions with multiple valid solutions need room for judgment guided by criteria. Rigid implementation instructions would impose a solution before evaluating the requirements.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-033",
    "domain": "tools-mcp",
    "objective": "D8.3",
    "conceptKey": "api-mcp-connector-versus-full-client",
    "type": "single",
    "selectCount": 1,
    "body": "A developer wants to retrieve MCP resources and prompts, not tool calls, through the Messages API’s server-side MCP connector as documented in September 2026. What should they account for?",
    "options": [
      {
        "id": "A",
        "body": "The connector’s documented supported MCP feature is tool calls; resource/prompt retrieval needs a suitable client-side integration"
      },
      {
        "id": "B",
        "body": "The full MCP specification guarantees every connector implements every primitive"
      },
      {
        "id": "C",
        "body": "Changing a resource URI into a prompt name makes the connector fetch it"
      },
      {
        "id": "D",
        "body": "Every MCP resource is automatically copied into the system prompt when a server URL is supplied"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The server-side connector supports a subset of MCP. Full protocol capability does not imply identical feature support in that connector; client-side integration can retrieve other primitives.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/agents-and-tools/mcp-connector"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-034",
    "domain": "tools-mcp",
    "objective": "D8.3",
    "conceptKey": "skill-allowed-tools-not-exclusive-set",
    "type": "single",
    "selectCount": 1,
    "body": "A Claude Code skill lists `Read` in `allowed-tools`. During its invocation, another tool remains available but asks for permission under the normal settings. The author expected every unlisted tool to disappear. Which explanation is correct?",
    "options": [
      {
        "id": "A",
        "body": "The skill file must be ignored whenever an unlisted tool appears"
      },
      {
        "id": "B",
        "body": "`allowed-tools` preapproves listed tools; it does not itself define the exclusive available tool set"
      },
      {
        "id": "C",
        "body": "All unlisted tools are automatically approved by the same field"
      },
      {
        "id": "D",
        "body": "The field changes only the order of tool descriptions"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The allowed-tools field grants preapproval for the listed tools. Other tools remain governed by normal permissions unless separately restricted.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/skills"
    ],
    "qualityStatus": "APPROVED"
  }
];
