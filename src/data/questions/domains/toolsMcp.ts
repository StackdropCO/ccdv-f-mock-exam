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
    "conceptKey": "encode-required-input-type-clearly",
    "type": "single",
    "selectCount": 1,
    "body": "A tool requires a `customer_id` string, but its description says only 'Look up customer information' and the schema does not mark the field as required. Claude often omits it. What should the developer improve?",
    "options": [
      {
        "id": "A",
        "body": "Add unrelated examples to the system prompt while leaving the tool contract ambiguous."
      },
      {
        "id": "B",
        "body": "Increase max_tokens."
      },
      {
        "id": "C",
        "body": "Encode the required input and type clearly in the tool schema and describe what the parameter means."
      },
      {
        "id": "D",
        "body": "Make the handler infer a missing customer from other request context instead of fixing the declared contract."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Tool reliability starts with a clear contract: required fields, types, and descriptions should match what the handler actually needs. Prompt tricks should not compensate for an incomplete schema.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-003",
    "domain": "tools-mcp",
    "objective": "D8.1",
    "conceptKey": "enforce-no-tool-policy-through-application",
    "type": "single",
    "selectCount": 1,
    "body": "An application normally exposes several tools, but one compliance-sensitive turn must be answered without any tool execution. What should enforce that requirement?",
    "options": [
      {
        "id": "A",
        "body": "Increase temperature so tool selection becomes less likely."
      },
      {
        "id": "B",
        "body": "Remove tool validation from the application."
      },
      {
        "id": "C",
        "body": "Leave all tools unrestricted and assume Claude will remember the compliance rule."
      },
      {
        "id": "D",
        "body": "Enforce a no-tool policy through the application's tool controls for that turn."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "When tool use itself is disallowed by policy, the application should enforce that constraint through the tool-control surface, not merely ask the model to comply.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-004",
    "domain": "tools-mcp",
    "objective": "D8.1",
    "conceptKey": "result-remain-associated-specific-tool",
    "type": "multiple",
    "selectCount": 2,
    "body": "Claude requests two client-side tools in one turn. The application executes them and one fails. Which TWO properties must the results preserve when they are sent back? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "The application should replace the failure with the most likely value."
      },
      {
        "id": "B",
        "body": "Each result must remain associated with the specific tool call it answers."
      },
      {
        "id": "C",
        "body": "The failed call should be deleted from history."
      },
      {
        "id": "D",
        "body": "The failed call should be represented honestly as an error observation rather than fabricated success."
      },
      {
        "id": "E",
        "body": "Both results should be merged under a new invented call identifier."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "A correct tool loop preserves correlation between calls and results and exposes failures as observations. That lets Claude reason about what actually happened.",
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
    "conceptKey": "parallel-tool-result-correlation",
    "type": "single",
    "selectCount": 1,
    "body": "Claude proposes three tool calls in one turn as a parallel batch, each with its own `tool_use` id. The application executes all three and returns their results. Which requirement must the returned `tool_result` blocks satisfy?",
    "options": [
      {
        "id": "A",
        "body": "Each `tool_result` must reference the `tool_use_id` of the specific call it answers, matching one-to-one"
      },
      {
        "id": "B",
        "body": "A single combined `tool_result` may answer all three calls if concatenated in order"
      },
      {
        "id": "C",
        "body": "Results may be spread across multiple later turns, as long as the total count eventually matches"
      },
      {
        "id": "D",
        "body": "The application may reuse one call's `tool_use_id` for multiple results if the calls are related"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Every tool_use block in a parallel batch needs its own matching tool_result, correlated by tool_use_id. Combining results, deferring them to later turns, or reusing an ID breaks Claude's ability to match a result back to the call that produced it.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/parallel-tool-use"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-008",
    "domain": "tools-mcp",
    "objective": "D8.1",
    "conceptKey": "validation-deterministic-workflow-step-claude",
    "type": "single",
    "selectCount": 1,
    "body": "A payment workflow must run a deterministic validation check before Claude is allowed to propose a transfer. Several other tools are also available. What is the strongest design?",
    "options": [
      {
        "id": "A",
        "body": "Make validation a deterministic workflow step before Claude may propose the transfer."
      },
      {
        "id": "B",
        "body": "Run the transfer first and validate afterward."
      },
      {
        "id": "C",
        "body": "Describe the validator as 'important' and leave execution optional."
      },
      {
        "id": "D",
        "body": "Increase reasoning effort so the tool is probably selected."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Hard workflow requirements belong in deterministic orchestration. Tool choice is useful for model-directed work, but mandatory policy gates should not depend on probabilistic selection.",
    "sourceRefs": [
      "https://www.anthropic.com/engineering/building-effective-agents",
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
    "conceptKey": "commit-shared-mcp-server-configuration",
    "type": "single",
    "selectCount": 1,
    "body": "A team builds an MCP connection to its internal issue tracker.\n\nEvery developer working on the repository should load the same server configuration, but each developer must authenticate with their own credentials. No credential may be committed to Git.\n\nWhich design best fits these requirements?",
    "options": [
      {
        "id": "A",
        "body": "Commit the shared MCP server configuration to the project, while keeping authentication credentials outside the repository"
      },
      {
        "id": "B",
        "body": "Commit one shared API token with the MCP configuration so every developer gets identical access"
      },
      {
        "id": "C",
        "body": "Configure the server separately in each developer’s personal global configuration and do not version the shared connection details"
      },
      {
        "id": "D",
        "body": "Put the API token in `CLAUDE.md` and instruct Claude not to reveal it"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The connection definition is team-shared configuration, while credentials are user- or environment-specific secrets. Sharing the server configuration without sharing the secret gives the team reproducibility without leaking credentials.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/mcp",
      "https://support.claude.com/en/articles/9767949-api-key-best-practices-keeping-your-keys-safe-and-secure"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-015",
    "domain": "tools-mcp",
    "objective": "D8.2",
    "conceptKey": "stdio-client-locally-spawned-server",
    "type": "single",
    "selectCount": 1,
    "body": "A developer is building an MCP server used only as a child process by a local desktop client. Which transport is the natural fit?",
    "options": [
      {
        "id": "A",
        "body": "stdio between the client and the locally spawned server."
      },
      {
        "id": "B",
        "body": "Use Streamable HTTP even though the server is always spawned and owned by the local client process."
      },
      {
        "id": "C",
        "body": "A model prompt that contains the server code."
      },
      {
        "id": "D",
        "body": "A public internet HTTP endpoint solely because MCP requires networking."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "stdio is suited to a local process spawned and controlled by its client. Remote/shared deployments generally use a network transport instead.",
    "sourceRefs": [
      "https://modelcontextprotocol.io/docs/learn/architecture"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-016",
    "domain": "tools-mcp",
    "objective": "D8.2",
    "conceptKey": "resource-mcp-server-living",
    "type": "single",
    "selectCount": 1,
    "body": "An MCP server exposes a living policy document that clients should read as context. Reading it has no side effect. Which MCP primitive best represents it?",
    "options": [
      {
        "id": "A",
        "body": "A destructive tool."
      },
      {
        "id": "B",
        "body": "A resource."
      },
      {
        "id": "C",
        "body": "A permission mode."
      },
      {
        "id": "D",
        "body": "A transport."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "MCP resources expose retrievable data/context. Tools represent callable actions or computations, while prompts package reusable prompt templates.",
    "sourceRefs": [
      "https://modelcontextprotocol.io/docs/learn/architecture"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-017",
    "domain": "tools-mcp",
    "objective": "D8.2",
    "conceptKey": "prompt-mcp-server-offer",
    "type": "single",
    "selectCount": 1,
    "body": "An MCP server should offer a reusable 'review this incident' prompt template that accepts the service name as an argument. No external action occurs when the template is retrieved. Which primitive fits?",
    "options": [
      {
        "id": "A",
        "body": "A prompt."
      },
      {
        "id": "B",
        "body": "A server credential."
      },
      {
        "id": "C",
        "body": "A transport connection."
      },
      {
        "id": "D",
        "body": "A tool that deletes incidents."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "MCP prompts are reusable prompt/instruction templates that clients can discover and retrieve with arguments. This is distinct from tools and resources.",
    "sourceRefs": [
      "https://modelcontextprotocol.io/docs/learn/architecture"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-018",
    "domain": "tools-mcp",
    "objective": "D8.2",
    "conceptKey": "explicit-tool-level-error-enough-information",
    "type": "single",
    "selectCount": 1,
    "body": "An MCP reservation tool receives a syntactically valid request, but the requested date violates the business's booking policy. How should the server expose the outcome to the agent?",
    "options": [
      {
        "id": "A",
        "body": "Return an explicit tool-level error with enough information to choose a valid next step."
      },
      {
        "id": "B",
        "body": "Pretend the reservation succeeded."
      },
      {
        "id": "C",
        "body": "Drop the connection so the client cannot distinguish the cause."
      },
      {
        "id": "D",
        "body": "Report that the MCP protocol itself is unsupported."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Expected business failures are useful tool observations. They should be represented explicitly and actionably rather than fabricated as success or confused with transport/protocol failure.",
    "sourceRefs": [
      "https://modelcontextprotocol.io/docs/learn/architecture",
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-019",
    "domain": "tools-mcp",
    "objective": "D8.2",
    "conceptKey": "validate-successful-structured-results-conform",
    "type": "single",
    "selectCount": 1,
    "body": "An MCP tool promises to return a structured object containing a numeric `total`, but one implementation path returns `\"twelve\"` as a string. What should the server do?",
    "options": [
      {
        "id": "A",
        "body": "Validate that successful structured results conform to the tool's advertised output contract."
      },
      {
        "id": "B",
        "body": "Ask Claude to rewrite the returned object after every call."
      },
      {
        "id": "C",
        "body": "Assume clients will infer the intended type."
      },
      {
        "id": "D",
        "body": "Remove all output contracts because only inputs matter."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Tool output contracts are useful only when the implementation honors them. Server-side validation catches representation drift before it becomes an agent or client failure.",
    "sourceRefs": [
      "https://modelcontextprotocol.io/docs/learn/architecture"
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
    "conceptKey": "calculation-application-local-custom-tool-through",
    "type": "single",
    "selectCount": 1,
    "body": "An Agent SDK application has a deterministic domain calculation already implemented inside its process. Claude needs to invoke it, but the organization does not want to expose a new public service. What architecture is appropriate?",
    "options": [
      {
        "id": "A",
        "body": "Expose the calculation as an application-local custom tool through the agent's supported tool integration."
      },
      {
        "id": "B",
        "body": "Store the function name in a Skill without any executable handler."
      },
      {
        "id": "C",
        "body": "Publish the function source in the system prompt and ask Claude to simulate it."
      },
      {
        "id": "D",
        "body": "Create a public internet endpoint solely so Claude can call it."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Existing deterministic application logic can be wrapped as a local/custom tool. The important distinction is executable capability versus instructional knowledge.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/overview",
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-022",
    "domain": "tools-mcp",
    "objective": "D8.3",
    "conceptKey": "fetch-authorized-data-through-trusted",
    "type": "single",
    "selectCount": 1,
    "body": "Claude can analyze a CSV in a sandboxed code-execution environment, but the data needed for the analysis must first be fetched from a private authenticated API. What design is safest?",
    "options": [
      {
        "id": "A",
        "body": "Assume every sandbox can access private networks directly."
      },
      {
        "id": "B",
        "body": "Let the sandbox call the private API directly and place the production credential in its environment."
      },
      {
        "id": "C",
        "body": "Fetch authorized data through trusted integration infrastructure, then provide it to the sandbox."
      },
      {
        "id": "D",
        "body": "Put the API credential inside the CSV."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Separate retrieval from computation according to each environment's permissions. Credentials and private network access should remain in the trusted integration layer, while the sandbox receives only the data it needs.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview",
      "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks"
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
    "conceptKey": "reusable-authenticated-tool-mcp-integration",
    "type": "single",
    "selectCount": 1,
    "body": "A research agent can search the public web, but a later step must create a ticket in the company's authenticated issue tracker. No existing tool can perform that action. What customization should the team add?",
    "options": [
      {
        "id": "A",
        "body": "A longer system prompt describing the issue tracker without connecting to it."
      },
      {
        "id": "B",
        "body": "A few-shot example showing what a completed ticket looks like, with no executable integration."
      },
      {
        "id": "C",
        "body": "A reusable authenticated tool or MCP integration exposing the specific issue-creation capability with scoped permissions."
      },
      {
        "id": "D",
        "body": "More web-search calls, because search results can create the ticket indirectly."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Search provides information, not access to an authenticated business action. The missing capability should be exposed through a scoped executable integration rather than simulated through prompting.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/mcp",
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-025",
    "domain": "tools-mcp",
    "objective": "D8.3",
    "conceptKey": "assuming-environment-variables-secrets-present",
    "type": "multiple",
    "selectCount": 2,
    "body": "An agent can use a local shell tool and a provider-hosted code-execution tool in the same workflow. Which TWO assumptions should the application avoid? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Treating the two environments as separate unless data is deliberately transferred."
      },
      {
        "id": "B",
        "body": "Assuming environment variables or secrets present locally are automatically present in the hosted sandbox."
      },
      {
        "id": "C",
        "body": "Documenting which environment owns each artifact."
      },
      {
        "id": "D",
        "body": "Assuming both tools automatically share the same filesystem."
      },
      {
        "id": "E",
        "body": "Explicitly passing required nonsensitive data between environments."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "Tools that run in different environments have separate state and trust boundaries. Data, files, and credentials should be transferred only through deliberate application mechanisms.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview",
      "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-026",
    "domain": "tools-mcp",
    "objective": "D8.3",
    "conceptKey": "tool-availability-registration-separate-permission",
    "type": "single",
    "selectCount": 1,
    "body": "A developer adds a custom tool name to an allow list but never actually registers or connects the tool implementation. Claude cannot call it. What concept did they confuse?",
    "options": [
      {
        "id": "A",
        "body": "Tool availability/registration is separate from permission to use the tool."
      },
      {
        "id": "B",
        "body": "Any Skill containing the tool name registers it."
      },
      {
        "id": "C",
        "body": "Tool names automatically create implementations."
      },
      {
        "id": "D",
        "body": "A permission rule downloads missing MCP servers."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Availability and authorization are separate layers. A tool must first be exposed/registered, then its use can be governed by permissions.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/overview",
      "https://code.claude.com/docs/en/permissions"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-027",
    "domain": "tools-mcp",
    "objective": "D8.3",
    "conceptKey": "skill-concise-load-supporting-reference",
    "type": "single",
    "selectCount": 1,
    "body": "A reusable Skill has a short core procedure plus a 200-page reference manual needed only for rare cases. What is the best organization?",
    "options": [
      {
        "id": "A",
        "body": "Move the manual into every user's system prompt."
      },
      {
        "id": "B",
        "body": "Keep the Skill concise and load supporting reference material only when needed."
      },
      {
        "id": "C",
        "body": "Paste the entire manual into the core Skill so every invocation loads it."
      },
      {
        "id": "D",
        "body": "Delete the manual and rely on model memory."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Skills can package supporting resources while keeping always-loaded instructions focused. This improves context efficiency without losing access to detailed material.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/skills"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-028",
    "domain": "tools-mcp",
    "objective": "D8.3",
    "conceptKey": "describe-clearly-skill",
    "type": "single",
    "selectCount": 1,
    "body": "A Skill is technically valid but Claude rarely chooses it for the intended task because its description says only 'helper'. What should be improved?",
    "options": [
      {
        "id": "A",
        "body": "Make the directory name longer without changing the description."
      },
      {
        "id": "B",
        "body": "Describe clearly what the Skill does and when it should be used."
      },
      {
        "id": "C",
        "body": "Remove all task-specific guidance."
      },
      {
        "id": "D",
        "body": "Add secrets to the Skill so it appears more capable."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Discovery depends on useful descriptions. A Skill should communicate its purpose and trigger conditions so Claude can select it appropriately.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/skills"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-029",
    "domain": "tools-mcp",
    "objective": "D8.3",
    "conceptKey": "invocation-convenience-separate-authorization-gate",
    "type": "single",
    "selectCount": 1,
    "body": "A release Skill contains a step that can publish externally. The team wants users to invoke the Skill freely for preparation, but publishing must still require approval. What is the correct security design?",
    "options": [
      {
        "id": "A",
        "body": "Hide the publish capability from the user while allowing Claude to call it unrestricted."
      },
      {
        "id": "B",
        "body": "Publish first and ask for approval afterward."
      },
      {
        "id": "C",
        "body": "Treat permission to invoke the Skill as blanket approval for every side effect it may trigger."
      },
      {
        "id": "D",
        "body": "Keep invocation convenience separate from authorization and gate the concrete publish action before execution."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Skill invocation is not an authorization boundary for consequential tools. Side effects should retain their own least-privilege and approval controls.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/skills",
      "https://code.claude.com/docs/en/permissions"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-030",
    "domain": "tools-mcp",
    "objective": "D8.3",
    "conceptKey": "changing-repository-tag-documented-inputs",
    "type": "single",
    "selectCount": 1,
    "body": "A reusable release-review Skill is currently hard-coded to one repository and one release tag. What makes it genuinely reusable?",
    "options": [
      {
        "id": "A",
        "body": "Ask Claude to infer the target from unrelated files."
      },
      {
        "id": "B",
        "body": "Expose the changing repository/tag as documented inputs or invocation arguments while keeping the shared procedure stable."
      },
      {
        "id": "C",
        "body": "Maintain one copied Skill per repository and release tag instead of parameterizing the shared workflow."
      },
      {
        "id": "D",
        "body": "Edit the Skill source manually before each invocation."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Reusable workflows separate stable logic from engagement-specific parameters. This is a core accelerator/Skill design principle independent of one placeholder syntax.",
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
    "conceptKey": "mcp-integration-path-supports-primitives",
    "type": "single",
    "selectCount": 1,
    "body": "A Messages API application needs MCP tools, resources, and prompts from the same enterprise server. A convenient connector supports only part of that capability set. What should the developer do?",
    "options": [
      {
        "id": "A",
        "body": "Assume any MCP-compatible label guarantees every primitive is available through every interface."
      },
      {
        "id": "B",
        "body": "Copy all enterprise data into the system prompt."
      },
      {
        "id": "C",
        "body": "Use an MCP integration path that supports all primitives the application requires."
      },
      {
        "id": "D",
        "body": "Rename resources as tools without changing their semantics."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "MCP defines a protocol, while individual integration surfaces may expose subsets. Architecture should be chosen from the capabilities the application actually needs.",
    "sourceRefs": [
      "https://modelcontextprotocol.io/docs/learn/architecture",
      "https://code.claude.com/docs/en/mcp"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "TM-034",
    "domain": "tools-mcp",
    "objective": "D8.3",
    "conceptKey": "preapproving-tool-defining-complete-set",
    "type": "single",
    "selectCount": 1,
    "body": "A Skill lists a tool as convenient to use without prompting. The author assumes this also removes every other tool from the agent. What distinction should they understand?",
    "options": [
      {
        "id": "A",
        "body": "Preapproving a tool and defining the complete set of available tools are separate controls."
      },
      {
        "id": "B",
        "body": "Skills cannot influence tool permissions at all."
      },
      {
        "id": "C",
        "body": "Tool availability is determined only by the model's context window."
      },
      {
        "id": "D",
        "body": "Any tool mentioned in a Skill automatically disables all others."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Authorization shortcuts for selected tools should not be confused with capability restriction. Tool availability and permission policy need to be configured deliberately.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/skills",
      "https://code.claude.com/docs/en/permissions"
    ],
    "qualityStatus": "APPROVED"
  }
];
