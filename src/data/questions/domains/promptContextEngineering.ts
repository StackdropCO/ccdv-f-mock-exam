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
    "conceptKey": "full-audit-record-externally-sending",
    "type": "single",
    "selectCount": 1,
    "body": "A long-running tool-using agent has accumulated many old search results. The application keeps the full transcript for audit purposes, but Claude no longer needs most of those results to continue. What design best balances the two requirements?",
    "options": [
      {
        "id": "A",
        "body": "Keep the full audit record externally while sending Claude a curated active context containing only relevant state."
      },
      {
        "id": "B",
        "body": "Delete the audit record whenever context becomes large."
      },
      {
        "id": "C",
        "body": "Ask Claude to ignore the old results while continuing to include all of them."
      },
      {
        "id": "D",
        "body": "Send the full audit transcript on every turn because stored data must always be model-visible."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Application storage and model context are separate concerns. You can retain a complete audit trail while curating the finite active context used for inference.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/context-windows"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-005",
    "domain": "prompt-context-engineering",
    "objective": "D6.1",
    "conceptKey": "selective-retention-prune-replaceable-observations",
    "type": "single",
    "selectCount": 1,
    "body": "An agent may safely discard old web-search results, but the latest signed contract terms must remain available throughout the task. What context-management strategy fits?",
    "options": [
      {
        "id": "A",
        "body": "Keep every tool result forever."
      },
      {
        "id": "B",
        "body": "Clear every old tool result indiscriminately."
      },
      {
        "id": "C",
        "body": "Replace the exact contract terms with a short generated summary even though the terms remain decision-critical."
      },
      {
        "id": "D",
        "body": "Apply selective retention: prune replaceable observations while preserving task-critical evidence."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Context management should follow information value. Disposable observations can be removed while critical evidence and durable constraints remain.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/context-windows"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-006",
    "domain": "prompt-context-engineering",
    "objective": "D6.1",
    "conceptKey": "inspect-augment-continuation-context-autonomous",
    "type": "single",
    "selectCount": 1,
    "body": "An application compacts a long conversation into a summary. Before continuing, it must ensure a newly received legal constraint is present verbatim. What is the safest workflow?",
    "options": [
      {
        "id": "A",
        "body": "Discard the summary and all previous state."
      },
      {
        "id": "B",
        "body": "Assume every summary preserves exact wording automatically."
      },
      {
        "id": "C",
        "body": "Put the constraint only in application logs that Claude cannot see."
      },
      {
        "id": "D",
        "body": "Inspect or augment the continuation context before autonomous work resumes."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "When exact state must survive compaction, the application should deliberately preserve or reintroduce it before continuing. Summarization is lossy by nature.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/context-windows"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-007",
    "domain": "prompt-context-engineering",
    "objective": "D6.1",
    "conceptKey": "define-test-task-state-compaction",
    "type": "single",
    "selectCount": 1,
    "body": "A custom compaction prompt says only, 'Summarize the conversation briefly.' After compaction, the agent forgets unresolved requirements and pending tool failures. What should the team change?",
    "options": [
      {
        "id": "A",
        "body": "Keep only the latest assistant answer."
      },
      {
        "id": "B",
        "body": "Assume a more capable model makes summary requirements unnecessary."
      },
      {
        "id": "C",
        "body": "Define and test which task state compaction must preserve."
      },
      {
        "id": "D",
        "body": "Make the summary shorter."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Compaction quality depends on preserving the state needed for future work. The summary instructions and eval should explicitly cover open requirements, decisions, and unresolved failures.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/context-windows",
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
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
    "conceptKey": "old-tool-interactions-prune-summarize",
    "type": "single",
    "selectCount": 1,
    "body": "Old tool calls contain huge code snippets in their arguments as well as large results. The team removes only the results, but context remains bloated. What should it investigate?",
    "options": [
      {
        "id": "A",
        "body": "Whether temperature is too low."
      },
      {
        "id": "B",
        "body": "Whether the user message should be duplicated."
      },
      {
        "id": "C",
        "body": "Measure what remains in old tool interactions and prune or summarize safe parts."
      },
      {
        "id": "D",
        "body": "Whether a larger output limit will shrink the input context."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Context engineering requires measuring what actually occupies the window. Removing one component of an old interaction may not solve the problem if large arguments or other blocks remain.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/context-windows"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-010",
    "domain": "prompt-context-engineering",
    "objective": "D6.1",
    "conceptKey": "count-estimate-tokens-actual-model",
    "type": "multiple",
    "selectCount": 2,
    "body": "Before sending a long multi-turn request, a team wants to know whether it fits the selected model's context budget. Which TWO practices are appropriate? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Count or estimate tokens using the actual model and complete request structure."
      },
      {
        "id": "B",
        "body": "Assume prompt caching removes cached content from the context window."
      },
      {
        "id": "C",
        "body": "Include existing compacted/summarized state in the estimate as it will actually be sent."
      },
      {
        "id": "D",
        "body": "Increase max_tokens and assume that enlarges the model's context window."
      },
      {
        "id": "E",
        "body": "Count only the newest user sentence."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Preflight context planning should reflect the actual request the model will receive. Cached or summarized content still has to be represented correctly in the context budget.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/context-windows"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-011",
    "domain": "prompt-context-engineering",
    "objective": "D6.1",
    "conceptKey": "weigh-context-savings-cache-loss",
    "type": "single",
    "selectCount": 1,
    "body": "A team considers pruning old tool results, but doing so would save only a tiny amount of context while destroying a highly reusable cached prefix. What should guide the decision?",
    "options": [
      {
        "id": "A",
        "body": "Weigh the context savings against the cache loss and prune only when worthwhile."
      },
      {
        "id": "B",
        "body": "Choose based only on the number of tool calls, regardless of their size."
      },
      {
        "id": "C",
        "body": "Always prune something on every turn."
      },
      {
        "id": "D",
        "body": "Never prune anything once caching is enabled."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Context editing and caching interact economically. The correct choice is workload-dependent: preserve useful cache reuse when pruning would yield negligible benefit.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/context-windows",
      "https://platform.claude.com/docs/en/build-with-claude/prompt-caching"
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
    "conceptKey": "platform-supported-structured-output-mechanism-validate",
    "type": "single",
    "selectCount": 1,
    "body": "An older integration forces JSON by beginning the assistant's answer with a hand-written partial object. A newer model/configuration no longer supports that pattern reliably. What is the better production approach when a JSON schema is required?",
    "options": [
      {
        "id": "A",
        "body": "Use the platform's supported structured-output mechanism and validate the result."
      },
      {
        "id": "B",
        "body": "Ask for 'valid JSON' in prose and remove validation."
      },
      {
        "id": "C",
        "body": "Switch to a larger context window."
      },
      {
        "id": "D",
        "body": "Keep forcing the opening characters and retry until they work."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "When the application needs a hard machine-readable contract, use the supported structured output interface rather than relying on brittle answer-prefill tricks.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/structured-outputs"
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
    "conceptKey": "completion-refusal-error-state-parsing",
    "type": "single",
    "selectCount": 1,
    "body": "A structured-output request returns a response that did not complete normally. The downstream service expects the schema object. What should the handler do?",
    "options": [
      {
        "id": "A",
        "body": "Fill any missing schema fields with application defaults and treat the response as normally completed."
      },
      {
        "id": "B",
        "body": "Forward the raw response body directly to the downstream service."
      },
      {
        "id": "C",
        "body": "Assume every HTTP-success response contains the requested object."
      },
      {
        "id": "D",
        "body": "Check completion/refusal/error state before parsing or forwarding the structured payload."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Structured output is still part of a model response lifecycle. The application must handle refusal, truncation, or failure states before trusting the expected schema-shaped data.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/structured-outputs"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-031",
    "domain": "prompt-context-engineering",
    "objective": "D6.3",
    "conceptKey": "unambiguous-stable-category-values-validate",
    "type": "single",
    "selectCount": 1,
    "body": "A classification schema uses category strings that are visually very similar, and downstream code treats them as distinct business states. The team sees repeated human confusion during review. What redesign is strongest?",
    "options": [
      {
        "id": "A",
        "body": "Ask reviewers to infer the intended state from the explanation."
      },
      {
        "id": "B",
        "body": "Replace categories with free-form prose."
      },
      {
        "id": "C",
        "body": "Keep confusing values and rely on capitalization alone to communicate meaning."
      },
      {
        "id": "D",
        "body": "Use unambiguous stable category values and validate them at the application boundary."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Machine-readable outputs should use clear, stable values that make invalid or ambiguous states difficult to confuse. The goal is a robust contract, not exploitation of a decoder edge case.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/structured-outputs"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-032",
    "domain": "prompt-context-engineering",
    "objective": "D6.3",
    "conceptKey": "test-end-to-end-mapping-citation-metadata",
    "type": "single",
    "selectCount": 1,
    "body": "A document UI receives source-location metadata from Claude. Reviewers complain that clicking a citation highlights the wrong passage. What should the team test?",
    "options": [
      {
        "id": "A",
        "body": "Only the model's confidence score."
      },
      {
        "id": "B",
        "body": "Only whether the answer contains bracket characters."
      },
      {
        "id": "C",
        "body": "Test the end-to-end mapping from citation metadata to rendered source locations."
      },
      {
        "id": "D",
        "body": "Whether a longer prompt produces more citations."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Citation correctness is an integration contract between model output and UI rendering. Test the end-to-end mapping rather than memorizing one coordinate convention.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/pdf-support",
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-033",
    "domain": "prompt-context-engineering",
    "objective": "D6.3",
    "conceptKey": "task-relevant-tools-output-structures-split",
    "type": "single",
    "selectCount": 1,
    "body": "A request exposes many strict tools and a very large structured final-output schema even though each task uses only a small subset. The integration becomes fragile and expensive to maintain. What design should the team evaluate?",
    "options": [
      {
        "id": "A",
        "body": "Remove all schemas and rely on prose parsing."
      },
      {
        "id": "B",
        "body": "Expose only task-relevant tools and output structures, or split the workflow."
      },
      {
        "id": "C",
        "body": "Increase temperature so the model handles the complexity."
      },
      {
        "id": "D",
        "body": "Keep every possible schema and tool loaded because a larger capability surface avoids routing decisions."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Tool and output surfaces should match the task. Narrower contracts reduce irrelevant context and complexity while keeping deterministic validation where it matters.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/structured-outputs",
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "PC-034",
    "domain": "prompt-context-engineering",
    "objective": "D6.3",
    "conceptKey": "supported-schema-representational-structure-enforce",
    "type": "single",
    "selectCount": 1,
    "body": "A business rule cannot be expressed by the structured-output constraints the application is using. What is the correct fallback?",
    "options": [
      {
        "id": "A",
        "body": "Retry invalid business values until one happens to be acceptable without checking them."
      },
      {
        "id": "B",
        "body": "Remove the business rule."
      },
      {
        "id": "C",
        "body": "Keep the supported schema for representational structure and enforce the remaining rule deterministically after parsing."
      },
      {
        "id": "D",
        "body": "Assume a schema description is always a hard validator."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Structured decoding does not eliminate application validation. Rules that are outside the supported schema contract still need deterministic enforcement.",
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
