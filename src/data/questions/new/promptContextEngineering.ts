// Generated from centrally reviewed authoring records. See scripts/build-question-bank.mjs.
import type { BankQuestion } from "../../bankTypes";
export const promptContextEngineering: BankQuestion[] = [
  {
    "id": "PC-001",
    "domain": "prompt-context-engineering",
    "objective": "D6.1",
    "conceptKey": "context-just-in-time-identifiers",
    "type": "single",
    "selectCount": 1,
    "body": "A repository assistant can search and read files on demand. Most files will never matter to a given task, and loading the entire repository exceeds the available context. Which initial context design preserves access without loading everything?",
    "options": [
      {
        "id": "A",
        "body": "A file manifest with descriptive paths and tools that retrieve selected contents"
      },
      {
        "id": "B",
        "body": "Load the entire repository once and rely on increasing only the answer-token budget"
      },
      {
        "id": "C",
        "body": "A summary of every file followed by removal of all retrieval tools"
      },
      {
        "id": "D",
        "body": "Distribute all file bodies among user messages in the same request"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Keep lightweight references and retrieve relevant content when needed. Splitting all contents across messages still consumes context.",
    "sourceRefs": [
      "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-002",
    "domain": "prompt-context-engineering",
    "objective": "D6.1",
    "conceptKey": "durable-notes-content-selection",
    "type": "single",
    "selectCount": 1,
    "body": "An agent writes external notes before a context reset to preserve its progress. Which content belongs in those durable notes, rather than being left out because it can be regenerated later by rerunning a tool?",
    "options": [
      {
        "id": "A",
        "body": "The full raw output of every tool call made so far"
      },
      {
        "id": "B",
        "body": "Verified conclusions and unresolved questions the agent has reached so far"
      },
      {
        "id": "C",
        "body": "Nothing; durable notes should stay empty until the task fully completes"
      },
      {
        "id": "D",
        "body": "A copy of the system prompt, in case it changes later"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Durable notes should capture conclusions and open questions that took real work to derive, not raw tool output that can be regenerated on demand. Persisting everything defeats the purpose of pruning; persisting nothing loses the agent's progress.",
    "sourceRefs": [
      "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-003",
    "domain": "prompt-context-engineering",
    "objective": "D6.1",
    "conceptKey": "compaction-recall-before-compression",
    "type": "single",
    "selectCount": 1,
    "body": "A compaction summary is short, but a replay test shows that it loses an unresolved compatibility constraint needed three steps later. The raw trace contains that constraint. What should the team change first?",
    "options": [
      {
        "id": "A",
        "body": "Reduce the summary length further"
      },
      {
        "id": "B",
        "body": "Keep only the most recent tool response"
      },
      {
        "id": "C",
        "body": "Revise and test the summary instructions to preserve unresolved constraints before optimizing brevity"
      },
      {
        "id": "D",
        "body": "Treat the missing constraint as evidence that every raw message must always remain"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Compaction must retain information required for continuation. Start with recall of relevant state, then remove unnecessary detail.",
    "sourceRefs": [
      "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-004",
    "domain": "prompt-context-engineering",
    "objective": "D6.1",
    "conceptKey": "context-editing-client-history-unchanged",
    "type": "single",
    "selectCount": 1,
    "body": "An integration enables server-side tool-result clearing with `clear_tool_uses_20250919`. After the API clears old results for inference, the application still has their full text in its local history. What is the documented interpretation?",
    "options": [
      {
        "id": "A",
        "body": "The clearing operation failed"
      },
      {
        "id": "B",
        "body": "The application must overwrite its stored transcript with placeholders"
      },
      {
        "id": "C",
        "body": "The API has replaced both its inference context and the application's stored audit transcript"
      },
      {
        "id": "D",
        "body": "Server-side editing affects the prompt sent to Claude; the client can retain its full history"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Context editing runs server-side before inference. The client continues managing its unmodified conversation history.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/context-editing"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-005",
    "domain": "prompt-context-engineering",
    "objective": "D6.1",
    "conceptKey": "context-editing-protect-tool-class",
    "type": "single",
    "selectCount": 1,
    "body": "Tool-result clearing is appropriate for an agent's search results, but every result from `read_active_contract` must remain available even when old. With the documented clearing strategy enabled, which setting directly expresses that exception?",
    "options": [
      {
        "id": "A",
        "body": "Add `read_active_contract` to `exclude_tools`"
      },
      {
        "id": "B",
        "body": "Increase the number of recent tool interactions kept, without a named-tool exception"
      },
      {
        "id": "C",
        "body": "Lower the clearing trigger so search results are removed sooner"
      },
      {
        "id": "D",
        "body": "Set clear_tool_inputs to false and otherwise use defaults"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "`exclude_tools` protects specified tools' uses and results from clearing. It expresses the tool-specific retention requirement directly.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/context-editing"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-006",
    "domain": "prompt-context-engineering",
    "objective": "D6.1",
    "conceptKey": "compaction-pause-preserve-verbatim",
    "type": "single",
    "selectCount": 1,
    "body": "A supported API integration uses `compact_20260112`. Before continuing after each summary, the application must append the latest user constraint verbatim. Which configuration provides that intervention point?",
    "options": [
      {
        "id": "A",
        "body": "Raise the compaction trigger while leaving automatic continuation enabled"
      },
      {
        "id": "B",
        "body": "Enable `pause_after_compaction`, then continue with the compaction block and required additional content"
      },
      {
        "id": "C",
        "body": "Discard the summary and send only the latest constraint"
      },
      {
        "id": "D",
        "body": "Place the exact-preservation rule only in summarization instructions and let the API continue immediately"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Pausing after compaction lets the application add content before continuation. Preserve the compaction block when resuming the shortened conversation.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/compaction"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-007",
    "domain": "prompt-context-engineering",
    "objective": "D6.1",
    "conceptKey": "compaction-custom-instructions-replace",
    "type": "single",
    "selectCount": 1,
    "body": "A developer sets custom `instructions` on `compact_20260112` to preserve database names and assumes the default summary instructions are still appended. What should the reviewer flag?",
    "options": [
      {
        "id": "A",
        "body": "Custom instructions are appended after the default summary prompt"
      },
      {
        "id": "B",
        "body": "The default remains active whenever custom instructions mention only one topic"
      },
      {
        "id": "C",
        "body": "Custom instructions replace the default summary prompt, so they must state all needed retention requirements"
      },
      {
        "id": "D",
        "body": "Custom instructions alter only the first compaction, after which the default is always restored"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Custom compaction instructions replace the default prompt rather than supplementing it. Include the state needed for successful continuation.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/compaction"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-008",
    "domain": "prompt-context-engineering",
    "objective": "D6.1",
    "conceptKey": "context-retrieval-hybrid-speed",
    "type": "single",
    "selectCount": 1,
    "body": "A policy assistant always needs a short, stable glossary, while the relevant case files vary widely. A measured latency budget rules out an extra tool call just to obtain that glossary. Which context plan satisfies both facts?",
    "options": [
      {
        "id": "A",
        "body": "Retrieve even the glossary through a mandatory first tool call"
      },
      {
        "id": "B",
        "body": "Preload all case files to avoid any later search"
      },
      {
        "id": "C",
        "body": "Remove the glossary and let the model infer terminology"
      },
      {
        "id": "D",
        "body": "Include the glossary up front and retrieve relevant case files on demand"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "A hybrid approach supplies known essential context immediately and retrieves variable details as needed. The glossary avoids an otherwise unnecessary initial lookup.",
    "sourceRefs": [
      "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-009",
    "domain": "prompt-context-engineering",
    "objective": "D6.1",
    "conceptKey": "context-editing-clear-inputs-explicit",
    "type": "single",
    "selectCount": 1,
    "body": "An agent's old tool calls contain large code snippets in their input arguments. The team enables tool-result clearing with default `clear_tool_inputs` behavior, yet those arguments remain. Why?",
    "options": [
      {
        "id": "A",
        "body": "By default the strategy clears results; clearing tool inputs must be enabled separately"
      },
      {
        "id": "B",
        "body": "A cache hit prevents the context-editing strategy from examining tool arguments"
      },
      {
        "id": "C",
        "body": "The strategy protects every code-containing block regardless of configuration"
      },
      {
        "id": "D",
        "body": "Inputs are cleared only when their tool is listed in exclude_tools"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Default tool-result clearing retains tool inputs. Set `clear_tool_inputs` when the application also intends to remove those old arguments.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/context-editing"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-010",
    "domain": "prompt-context-engineering",
    "objective": "D6.1",
    "conceptKey": "context-token-counting-no-new-compaction",
    "type": "multiple",
    "selectCount": 2,
    "body": "An application using `compact_20260112` calls the token-counting endpoint before sending a long conversation. The history includes an existing compaction block. Select TWO statements describing what this preflight count does.",
    "options": [
      {
        "id": "A",
        "body": "Generates a new summary whenever the configured compaction threshold is exceeded"
      },
      {
        "id": "B",
        "body": "Applies the existing compaction block when calculating effective context size"
      },
      {
        "id": "C",
        "body": "Produces the assistant's next answer along with the token count"
      },
      {
        "id": "D",
        "body": "Does not trigger a new compaction"
      },
      {
        "id": "E",
        "body": "Replaces every tool result in the client's stored transcript"
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "Token counting accounts for existing compaction blocks but does not generate new summaries. A count is a preflight measurement, not a compaction execution.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/compaction"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-011",
    "domain": "prompt-context-engineering",
    "objective": "D6.1",
    "conceptKey": "context-editing-minimum-clear-threshold",
    "type": "single",
    "selectCount": 1,
    "body": "With tool-result clearing enabled, a team wants to avoid invalidating a useful cached prefix for a negligible reduction. Which documented control can require a minimum amount of removable content before clearing is applied?",
    "options": [
      {
        "id": "A",
        "body": "Increase the number of recent tool uses retained with keep"
      },
      {
        "id": "B",
        "body": "Lower trigger so clearing begins earlier"
      },
      {
        "id": "C",
        "body": "`clear_at_least`"
      },
      {
        "id": "D",
        "body": "Set clear_tool_inputs to true on every call"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "`clear_at_least` prevents the strategy from applying unless it can clear the specified amount. That can make a cache-breaking edit worthwhile.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/context-editing"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-012",
    "domain": "prompt-context-engineering",
    "objective": "D6.2",
    "conceptKey": "missing-task-policy",
    "type": "single",
    "selectCount": 1,
    "body": "A ticket classifier receives only the labels urgent and normal. Evaluators disagree about a ticket due tomorrow because the prompt never defines the cutoff. Product policy defines urgent as a deadline within 24 hours. Which prompt change addresses the documented failure?",
    "options": [
      {
        "id": "A",
        "body": "Add examples of clear emergencies but leave the cutoff implicit"
      },
      {
        "id": "B",
        "body": "State the 24-hour rule and how the input timestamp determines the deadline"
      },
      {
        "id": "C",
        "body": "Add more examples without deciding what urgent means"
      },
      {
        "id": "D",
        "body": "Require a written rationale for each prediction without adding the cutoff"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Supply the missing decision rule and its inputs explicitly. More verbosity or examples without a defined boundary do not resolve the ambiguity.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-013",
    "domain": "prompt-context-engineering",
    "objective": "D6.2",
    "conceptKey": "prompt-examples-spurious-language-correlation",
    "type": "single",
    "selectCount": 1,
    "body": "A classifier's examples label every French request as billing and every English request as technical. In production, topic and language are independent. The prompt budget permits replacing examples but no extra examples. What repair targets the misleading demonstration pattern?",
    "options": [
      {
        "id": "A",
        "body": "Translate production requests into one language without repairing the examples"
      },
      {
        "id": "B",
        "body": "Keep the same topic-language pairing but add a more emphatic classification instruction"
      },
      {
        "id": "C",
        "body": "Replace examples with a set that includes both topics in both languages"
      },
      {
        "id": "D",
        "body": "Increase the example count without changing the correlation"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Diverse examples should avoid accidental correlations. Crossing topic and language demonstrates the intended decision instead of a language shortcut.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-014",
    "domain": "prompt-context-engineering",
    "objective": "D6.2",
    "conceptKey": "prompt-examples-conflict-with-policy",
    "type": "single",
    "selectCount": 1,
    "body": "The written rule says a canceled order gets label CLOSED, but two prompt examples label canceled orders OPEN. Failures concentrate on canceled orders. Which first change most directly removes this inconsistency?",
    "options": [
      {
        "id": "A",
        "body": "Add more examples of orders that were never canceled"
      },
      {
        "id": "B",
        "body": "Add an instruction to follow examples exactly while retaining the written rule"
      },
      {
        "id": "C",
        "body": "Move the contradictory examples earlier"
      },
      {
        "id": "D",
        "body": "Correct the example labels to follow the written rule and re-evaluate those cases"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Demonstrations steer output and should represent the intended behavior. Contradictory examples undermine an otherwise explicit rule.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-015",
    "domain": "prompt-context-engineering",
    "objective": "D6.2",
    "conceptKey": "prompt-structural-boundary-examples-vs-input",
    "type": "single",
    "selectCount": 1,
    "body": "A prompt concatenates a trusted instruction, several demonstrations, and the new text with no labels. Claude sometimes treats a demonstration as the new case. Which change directly makes the roles of these prompt parts explicit?",
    "options": [
      {
        "id": "A",
        "body": "Wrap and label instructions, examples, and the new input as distinct sections"
      },
      {
        "id": "B",
        "body": "Separate the same unlabeled pieces only with blank lines"
      },
      {
        "id": "C",
        "body": "Place the new text among the demonstrations without marking which case is new"
      },
      {
        "id": "D",
        "body": "Mark every block with the same example tag, including the production case"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Descriptive sections or XML tags distinguish instructions, examples, and variable input. They address parsing ambiguity without changing the task.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-016",
    "domain": "prompt-context-engineering",
    "objective": "D6.2",
    "conceptKey": "prompt-long-documents-query-at-end",
    "type": "single",
    "selectCount": 1,
    "body": "A team is testing a prompt-layout change for several long, trusted reports. All report content must remain and no caching constraint applies. Which arrangement follows Anthropic's long-context prompting recommendation?",
    "options": [
      {
        "id": "A",
        "body": "Query first, then reports, with no final task reminder"
      },
      {
        "id": "B",
        "body": "Long report content near the top, with the query after the reports"
      },
      {
        "id": "C",
        "body": "Put the task query only at the beginning of the first report's content section"
      },
      {
        "id": "D",
        "body": "Split the query into fragments placed between successive report paragraphs"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Anthropic recommends placing long-form inputs before the query. This is guidance to evaluate on the task, not a guarantee of a fixed accuracy gain.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-017",
    "domain": "prompt-context-engineering",
    "objective": "D6.2",
    "conceptKey": "prompt-quote-first-evidence-grounding",
    "type": "single",
    "selectCount": 1,
    "body": "A long-document summarizer invents details that are absent from the supplied report. The application must remain limited to that report. Which prompt step targets factual grounding before synthesis?",
    "options": [
      {
        "id": "A",
        "body": "Ask for a fluent synthesis first and permit unsupported details when they sound consistent"
      },
      {
        "id": "B",
        "body": "Ask for plausible facts from general knowledge"
      },
      {
        "id": "C",
        "body": "Ask for relevant exact passages first, then base the summary on those passages"
      },
      {
        "id": "D",
        "body": "Request multiple summaries and accept statements that recur without checking the report"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Extracting relevant source passages before synthesis grounds the answer in the supplied material. It reduces unsupported claims but does not eliminate the need to verify critical output.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-018",
    "domain": "prompt-context-engineering",
    "objective": "D6.2",
    "conceptKey": "prompt-system-role-vs-request-data",
    "type": "single",
    "selectCount": 1,
    "body": "An application needs a consistent coaching tone across all tasks. The per-request user message supplies a different practice exercise each time. Which placement matches the documented role-prompting pattern?",
    "options": [
      {
        "id": "A",
        "body": "Put the coaching role only in the first exercise example"
      },
      {
        "id": "B",
        "body": "Keep the stable role only in application logs and send the exercise to Claude"
      },
      {
        "id": "C",
        "body": "Use the coaching role as the complete user input, omitting the exercise"
      },
      {
        "id": "D",
        "body": "Put the stable coaching role in `system` and the current exercise in the user message"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "A system role focuses consistent behavior and tone, while the user message supplies the current task. The role is instruction, not a replacement for task data.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-019",
    "domain": "prompt-context-engineering",
    "objective": "D6.2",
    "conceptKey": "prompt-positive-format-target",
    "type": "single",
    "selectCount": 1,
    "body": "A voice application rejects lists and Markdown. The prompt currently says only do not use Markdown, and outputs still vary between headings and fragments. Which revision most clearly specifies the desired replacement format?",
    "options": [
      {
        "id": "A",
        "body": "Require complete prose paragraphs suitable for reading aloud, with no headings or lists"
      },
      {
        "id": "B",
        "body": "Forbid Markdown headings but leave lists and fragments unspecified"
      },
      {
        "id": "C",
        "body": "Ask for concise output without specifying prose paragraphs"
      },
      {
        "id": "D",
        "body": "Request a JSON object because it is not Markdown"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Specify the format the application actually needs, not only a prohibited format. Complete prose paragraphs directly express the voice-output requirement.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-020",
    "domain": "prompt-context-engineering",
    "objective": "D6.2",
    "conceptKey": "prompt-ordered-completeness-instructions",
    "type": "single",
    "selectCount": 1,
    "body": "A compliance summary must first list missing evidence, then assess only supported claims, then give next steps. All three parts are required in that order. Which prompt best represents this contract?",
    "options": [
      {
        "id": "A",
        "body": "Ask for the three topics in any order"
      },
      {
        "id": "B",
        "body": "Use a numbered instruction sequence naming the three required parts in their required order"
      },
      {
        "id": "C",
        "body": "Require three sections but allow Claude to select their topics"
      },
      {
        "id": "D",
        "body": "Start with next steps and mention evidence if space remains"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Use explicit sequential instructions when order and completeness matter. The three named parts capture the stated contract.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-021",
    "domain": "prompt-context-engineering",
    "objective": "D6.2",
    "conceptKey": "prompt-permitted-abstention-missing-evidence",
    "type": "single",
    "selectCount": 1,
    "body": "An extraction prompt requires a founding year for every company even when the supplied source omits it. The downstream interface already supports UNKNOWN. Which change directly removes pressure to invent a year?",
    "options": [
      {
        "id": "A",
        "body": "Require a best estimate with a confidence score whenever the year is absent"
      },
      {
        "id": "B",
        "body": "Ask for the most likely year if evidence is missing"
      },
      {
        "id": "C",
        "body": "Explicitly instruct UNKNOWN when the source does not establish the year"
      },
      {
        "id": "D",
        "body": "Ask for a historical explanation accompanying every guessed year"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Allow a defined uncertainty response when evidence is absent. Requiring a concrete value for unsupported facts encourages fabrication.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-022",
    "domain": "prompt-context-engineering",
    "objective": "D6.2",
    "conceptKey": "prompt-motivation-generalization",
    "type": "single",
    "selectCount": 1,
    "body": "A screen-reader application needs sentences that remain understandable when punctuation is spoken inconsistently. The team wants Claude to apply this principle to new wording cases, not memorize a fixed list of forbidden symbols. Which instruction supplies the missing context?",
    "options": [
      {
        "id": "A",
        "body": "Supply a fixed blacklist of symbols with no explanation of the read-aloud context"
      },
      {
        "id": "B",
        "body": "Copy the punctuation from the input exactly"
      },
      {
        "id": "C",
        "body": "Optimize the punctuation for how the transcript looks on screen"
      },
      {
        "id": "D",
        "body": "Explain that the answer is read aloud and require wording understandable without visual punctuation cues"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Explaining why a constraint exists helps Claude apply it beyond enumerated cases. The speech context gives a usable basis for new wording decisions.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-023",
    "domain": "prompt-context-engineering",
    "objective": "D6.2",
    "conceptKey": "prompt-prefill-unsupported-migration",
    "type": "single",
    "selectCount": 1,
    "body": "An integration moves to Claude Sonnet 4.6 and sends a partial final assistant message to force a JSON opening brace. Requests now return 400. Which change addresses the documented incompatibility?",
    "options": [
      {
        "id": "A",
        "body": "Remove the final-turn prefill and use supported structured output configuration for the JSON requirement"
      },
      {
        "id": "B",
        "body": "Retry the identical request until the prefill is accepted"
      },
      {
        "id": "C",
        "body": "Keep the final assistant prefill but request plain JSON in the system prompt too"
      },
      {
        "id": "D",
        "body": "Send the final assistant prefill as a complete assistant message containing only an opening brace"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Claude 4.6 and later do not support final-turn assistant prefills. Use structured outputs for a schema-based JSON requirement instead.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-024",
    "domain": "prompt-context-engineering",
    "objective": "D6.2",
    "conceptKey": "prompt-tool-action-intent",
    "type": "single",
    "selectCount": 1,
    "body": "A tool-enabled coding assistant is authorized to edit a function. The prompt says suggest improvements, and the assistant consistently returns advice without applying it. Which prompt change directly aligns the requested behavior with the authorization?",
    "options": [
      {
        "id": "A",
        "body": "Add more background examples while retaining suggest"
      },
      {
        "id": "B",
        "body": "Explicitly ask it to apply the specified edits and verify the result"
      },
      {
        "id": "C",
        "body": "Make the editing tool description more detailed but continue asking only for suggestions"
      },
      {
        "id": "D",
        "body": "Require the assistant to list a complete patch as advice without applying it"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Explicitly request implementation when implementation is intended. A request for suggestions can reasonably produce advice without edits.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-025",
    "domain": "prompt-context-engineering",
    "objective": "D6.2",
    "conceptKey": "prompt-overtrigger-obsolete-unconditional-tool-rule",
    "type": "single",
    "selectCount": 1,
    "body": "After a model upgrade, an assistant repeatedly searches even when the supplied document fully answers the task. Its legacy prompt says always search to be thorough. Current product policy requires search only when the supplied material lacks a needed fact. Which prompt revision addresses the observed overtriggering?",
    "options": [
      {
        "id": "A",
        "body": "Keep always search and add more encouragement to be thorough"
      },
      {
        "id": "B",
        "body": "Remove the unconditional search instruction and state the evidence-gap condition for using search"
      },
      {
        "id": "C",
        "body": "Delete the search tool even for questions the supplied material cannot answer"
      },
      {
        "id": "D",
        "body": "Ask for shorter search queries while still requiring a search on every request"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Replace a blanket tool-use directive with the actual condition for using the tool. Anthropic warns that prompts compensating for older models can overtrigger tools on newer models.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-026",
    "domain": "prompt-context-engineering",
    "objective": "D6.2",
    "conceptKey": "prompt-before-iteration-success-criteria",
    "type": "single",
    "selectCount": 1,
    "body": "Two engineers are rewriting a prompt, but one optimizes terse answers and the other optimizes exhaustive answers. No acceptance criteria or evaluation cases exist. What should they establish before judging one rewrite superior?",
    "options": [
      {
        "id": "A",
        "body": "A clear task success definition and an empirical way to test it"
      },
      {
        "id": "B",
        "body": "Agree that the rewrite with fewer tokens is superior regardless of output quality"
      },
      {
        "id": "C",
        "body": "Choose whichever rewrite performs better on one engineer's favorite example"
      },
      {
        "id": "D",
        "body": "Compare average answer length without deciding the required level of detail"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Prompt iteration needs agreed success criteria and empirical tests. Without them, the engineers are optimizing conflicting goals.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-027",
    "domain": "prompt-context-engineering",
    "objective": "D6.2",
    "conceptKey": "prompt-citation-retract-unsupported-claim",
    "type": "single",
    "selectCount": 1,
    "body": "A report-generation prompt requires every factual assertion to be supported by the supplied sources. During a verification pass, no passage supports one generated assertion. Which instruction is consistent with that requirement?",
    "options": [
      {
        "id": "A",
        "body": "Keep the assertion with a high confidence label but no support"
      },
      {
        "id": "B",
        "body": "Cite a topically related paragraph even if it does not establish the assertion"
      },
      {
        "id": "C",
        "body": "Remove or retract the unsupported assertion"
      },
      {
        "id": "D",
        "body": "Ask another generation to repeat the claim and use agreement instead of source evidence"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Require supporting evidence for each claim and retract claims that cannot be supported. Confidence and unrelated citations do not satisfy source grounding.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-028",
    "domain": "prompt-context-engineering",
    "objective": "D6.3",
    "conceptKey": "output-json-versus-strict-tool-scopes",
    "type": "multiple",
    "selectCount": 2,
    "body": "A supported Claude request needs schema-constrained function arguments and a separately structured final report. Select TWO settings that target those separate output surfaces.",
    "options": [
      {
        "id": "A",
        "body": "`strict: true` on the relevant tool definition"
      },
      {
        "id": "B",
        "body": "`temperature: 0` as a replacement for both schemas"
      },
      {
        "id": "C",
        "body": "A JSON example only in the user message"
      },
      {
        "id": "D",
        "body": "`output_config.format` with the final report schema"
      },
      {
        "id": "E",
        "body": "A larger `max_tokens` as the tool-argument schema"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Strict tool use constrains tool inputs; JSON output configuration constrains the final response. They are complementary and can be used together, subject to documented exceptions.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/structured-outputs"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-029",
    "domain": "prompt-context-engineering",
    "objective": "D6.3",
    "conceptKey": "output-required-nullable-versus-optional",
    "type": "multiple",
    "selectCount": 2,
    "body": "A structured report must always contain a `middle_name` key. Its value must be a string when known and JSON null when unknown; omission is not permitted. Select TWO schema choices jointly express that contract.",
    "options": [
      {
        "id": "A",
        "body": "Leave middle_name out of required so unknown values can be omitted"
      },
      {
        "id": "B",
        "body": "Include middle_name in the object's required list"
      },
      {
        "id": "C",
        "body": "Restrict its type to string and use an empty string for unknown values"
      },
      {
        "id": "D",
        "body": "Restrict its type to null even when a name is known"
      },
      {
        "id": "E",
        "body": "Allow the field type to be either string or null"
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "Presence and allowed value types are separate constraints. Requiring the key while allowing string or null represents both known and explicitly unknown values without omission.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/structured-outputs"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-030",
    "domain": "prompt-context-engineering",
    "objective": "D6.3",
    "conceptKey": "output-refusal-http-success",
    "type": "single",
    "selectCount": 1,
    "body": "A structured-output request receives HTTP 200 with `stop_reason: \"refusal\"` and text that is not the requested JSON object. Which interpretation should drive the handler?",
    "options": [
      {
        "id": "A",
        "body": "A 200 status proves that parsing as the requested schema must succeed"
      },
      {
        "id": "B",
        "body": "Classify every 200 response as an application report, and treat non-JSON refusal text as an API outage"
      },
      {
        "id": "C",
        "body": "A safety refusal can return 200 and take precedence over the output schema; handle that path explicitly"
      },
      {
        "id": "D",
        "body": "Retry forever because refusals are ordinary transport failures"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "HTTP success does not guarantee the requested structured payload when the model refuses. The refusal stop reason identifies a documented exception to schema-shaped output.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/structured-outputs"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-031",
    "domain": "prompt-context-engineering",
    "objective": "D6.3",
    "conceptKey": "output-enum-capitalization-limitation",
    "type": "single",
    "selectCount": 1,
    "body": "A structured-output schema uses two category strings that differ only by capitalization. Current documented enum casing behavior must be respected. Which redesign avoids relying on an unsupported distinction?",
    "options": [
      {
        "id": "A",
        "body": "Keep the categories and treat normal completion as proof of exact capitalization"
      },
      {
        "id": "B",
        "body": "Preserve the case-only distinction but retry until the response happens to use one desired capitalization"
      },
      {
        "id": "C",
        "body": "Use the same case-only categories as strict tool arguments instead"
      },
      {
        "id": "D",
        "body": "Give the categories values that differ beyond capitalization and validate the returned category"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Current structured-output documentation does not guarantee enum/const capitalization. Distinct category values should not depend solely on case.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/structured-outputs"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-032",
    "domain": "prompt-context-engineering",
    "objective": "D6.3",
    "conceptKey": "output-citation-exclusive-page-end",
    "type": "single",
    "selectCount": 1,
    "body": "A citation renderer receives a PDF `page_location` with `start_page_number: 4` and `end_page_number: 5`. It highlights both pages 4 and 5. Which correction matches the documented citation coordinates?",
    "options": [
      {
        "id": "A",
        "body": "Treat both values as zero-based inclusive indices"
      },
      {
        "id": "B",
        "body": "Ignore the start value and highlight only page 5"
      },
      {
        "id": "C",
        "body": "Interpret the range as one-based with an exclusive end, so this citation covers page 4"
      },
      {
        "id": "D",
        "body": "Subtract one from the start but keep the end inclusive"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "PDF citation page numbers are one-based and the end page number is exclusive. The range 4 to 5 therefore covers only page 4.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/citations"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-033",
    "domain": "prompt-context-engineering",
    "objective": "D6.3",
    "conceptKey": "output-combined-schema-complexity",
    "type": "multiple",
    "selectCount": 2,
    "body": "Each tool schema compiles when tested alone, but combining many strict tools and an output schema produces `Schema is too complex for compilation`. Select TWO responses consistent with the documented cause.",
    "options": [
      {
        "id": "A",
        "body": "Assume independent compilation proves the combined request must be valid"
      },
      {
        "id": "B",
        "body": "Reduce unnecessary optional or deeply nested structure in the combined schemas"
      },
      {
        "id": "C",
        "body": "Keep all schemas unchanged and retry with a higher output-token limit"
      },
      {
        "id": "D",
        "body": "Split the work into requests with smaller relevant schema sets"
      },
      {
        "id": "E",
        "body": "Validate each schema separately and bypass combined-request error handling"
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "Schema complexity is evaluated across the request and interacting features can make combined grammars expensive. Simplify structures or divide the schema set across requests.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/structured-outputs"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-034",
    "domain": "prompt-context-engineering",
    "objective": "D6.3",
    "conceptKey": "output-unsupported-regex-raw-schema",
    "type": "single",
    "selectCount": 1,
    "body": "A developer sends a raw structured-output schema whose string pattern uses lookbehind. The API rejects the schema before generation. What should the developer change?",
    "options": [
      {
        "id": "A",
        "body": "Add a longer prose example but send the same schema"
      },
      {
        "id": "B",
        "body": "Retry the same schema with more output tokens"
      },
      {
        "id": "C",
        "body": "Express a supported pattern and enforce any remaining condition in application validation"
      },
      {
        "id": "D",
        "body": "Move the unsupported pattern into another required property unchanged"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Structured outputs support only a subset of regex features, excluding lookbehind. Use supported constraints and validate any remaining requirement separately.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/structured-outputs"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-035",
    "domain": "prompt-context-engineering",
    "objective": "D6.3",
    "conceptKey": "output-json-text-versus-entire-envelope",
    "type": "single",
    "selectCount": 1,
    "body": "A successful, non-refusal structured-output response contains a text content block holding the report JSON. The consumer instead validates the entire Messages response object against the report schema and fails. Which layer should it parse and validate as the report?",
    "options": [
      {
        "id": "A",
        "body": "The usage object that accompanies the response"
      },
      {
        "id": "B",
        "body": "The stop_reason string after a successful completion"
      },
      {
        "id": "C",
        "body": "The entire response including usage and stop metadata"
      },
      {
        "id": "D",
        "body": "The text payload of the relevant content block, after checking the response state"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The requested report JSON is returned in a text content block. The outer response envelope contains API metadata and is not the report object.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/structured-outputs"
    ],
    "qualityStatus": "APPROVED"
  }
];
