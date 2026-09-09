// Generated from centrally reviewed authoring records. See scripts/build-question-bank.mjs.
import type { BankQuestion } from "../../bankTypes";
export const agentsWorkflows: BankQuestion[] = [
  {
    "id": "AW-001",
    "domain": "agents-workflows",
    "objective": "D1.1",
    "conceptKey": "routing-specialized-prompt-interference",
    "type": "single",
    "selectCount": 1,
    "body": "A ticket assistant handles two reliably identifiable categories: contract questions and incident reports. Tuning one shared prompt for contracts repeatedly harms incident responses. Each ticket belongs to exactly one category. Which architecture directly separates these competing instructions?",
    "options": [
      {
        "id": "A",
        "body": "Send every ticket through both prompts and concatenate the answers."
      },
      {
        "id": "B",
        "body": "Classify the ticket, then route it to the appropriate specialized prompt."
      },
      {
        "id": "C",
        "body": "Ask a worker to revise the shared prompt after every ticket."
      },
      {
        "id": "D",
        "body": "Make the two specialists critique each other on every ticket."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Routing selects a specialized path for the identified category, avoiding competing task instructions in one prompt. Running both paths is unnecessary when each input needs only one.",
    "sourceRefs": [
      "https://www.anthropic.com/engineering/building-effective-agents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-002",
    "domain": "agents-workflows",
    "objective": "D1.1",
    "conceptKey": "sectioning-independent-versus-voting",
    "type": "single",
    "selectCount": 1,
    "body": "A release review must check licensing, accessibility, and localization. These checks use the same release bundle but do not depend on one another. All three findings are required, and elapsed time matters. Which design fits?",
    "options": [
      {
        "id": "A",
        "body": "Run each check after the preceding check completes."
      },
      {
        "id": "B",
        "body": "Ask three workers to repeat the licensing check and take a majority vote."
      },
      {
        "id": "C",
        "body": "Route each release to only one of the three checks."
      },
      {
        "id": "D",
        "body": "Run one focused worker per check concurrently, then combine their findings."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Independent required subtasks support parallel sectioning. Voting repeats one task; it does not cover three different required checks.",
    "sourceRefs": [
      "https://www.anthropic.com/engineering/building-effective-agents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-003",
    "domain": "agents-workflows",
    "objective": "D1.1",
    "conceptKey": "voting-repeated-judgment-versus-partitioning",
    "type": "single",
    "selectCount": 1,
    "body": "An evaluation experiment needs several independently prompted judgments of the SAME ambiguous passage, then an aggregate decision. It is not trying to divide the passage into sections. Which pattern implements this experiment?",
    "options": [
      {
        "id": "A",
        "body": "Parallel voting: repeat the judgment and aggregate the results."
      },
      {
        "id": "B",
        "body": "Prompt chaining: each judge rewrites the previous judge’s response."
      },
      {
        "id": "C",
        "body": "Routing: choose one specialist and discard the other judgments."
      },
      {
        "id": "D",
        "body": "Sectioning: assign each judge a different paragraph and never show the whole passage."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Voting gathers multiple attempts at the same task. Chaining introduces dependence, while sectioning distributes different subtasks.",
    "sourceRefs": [
      "https://www.anthropic.com/engineering/building-effective-agents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-004",
    "domain": "agents-workflows",
    "objective": "D1.1",
    "conceptKey": "orchestrator-input-dependent-subtasks",
    "type": "single",
    "selectCount": 1,
    "body": "A document migration pipeline initially launches the same three workers for every input. New document types require different combinations of transformations that can only be identified after inspecting each document. The team wants a coordinator to discover those transformations and allocate workers accordingly. What architectural change addresses this requirement?",
    "options": [
      {
        "id": "A",
        "body": "Increase the number of identical fixed workers."
      },
      {
        "id": "B",
        "body": "Use majority voting among workers running the old transformation."
      },
      {
        "id": "C",
        "body": "Use an orchestrator that derives and delegates input-specific subtasks."
      },
      {
        "id": "D",
        "body": "Keep fixed tasks but shuffle their execution order."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Orchestrator-workers supports subtasks determined from the specific input. Adding or reordering fixed workers does not provide that decomposition.",
    "sourceRefs": [
      "https://www.anthropic.com/engineering/building-effective-agents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-005",
    "domain": "agents-workflows",
    "objective": "D1.1",
    "conceptKey": "evaluator-optimizer-actionable-feedback",
    "type": "single",
    "selectCount": 1,
    "body": "A drafting experiment has a concrete rubric, a critic that reliably identifies rubric failures, and evidence that revision using those critiques improves scores. Which workflow uses that evidence most directly?",
    "options": [
      {
        "id": "A",
        "body": "Route each draft to a random topic specialist once."
      },
      {
        "id": "B",
        "body": "Alternate generation with rubric-based critique and revision, with a stopping condition."
      },
      {
        "id": "C",
        "body": "Run the generator repeatedly but hide all critiques from it."
      },
      {
        "id": "D",
        "body": "Give the critic sole control over changing the rubric until each draft passes."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "An evaluator-optimizer loop uses actionable feedback to refine a candidate against stable criteria. The stated evidence supports iteration rather than unrelated reruns.",
    "sourceRefs": [
      "https://www.anthropic.com/engineering/building-effective-agents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-006",
    "domain": "agents-workflows",
    "objective": "D1.1",
    "conceptKey": "agent-pattern-composition-gated-drafting",
    "type": "single",
    "selectCount": 1,
    "body": "A proposal system needs an agent to investigate an unfamiliar problem adaptively. Once research is complete, every proposal must pass a fixed format validator before delivery. Which design preserves both requirements?",
    "options": [
      {
        "id": "A",
        "body": "Let the agent decide whether the validator is needed."
      },
      {
        "id": "B",
        "body": "Force every research query into a predetermined list."
      },
      {
        "id": "C",
        "body": "Use only the format validator, without research."
      },
      {
        "id": "D",
        "body": "Use an adaptive research agent followed by an enforced validation step."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Agent and workflow patterns can be combined. Adaptive investigation can feed a deterministic gate that every deliverable must pass.",
    "sourceRefs": [
      "https://www.anthropic.com/engineering/building-effective-agents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-007",
    "domain": "agents-workflows",
    "objective": "D1.1",
    "conceptKey": "single-call-versus-unjustified-agent-complexity",
    "type": "single",
    "selectCount": 1,
    "body": "A fixed-format text transformation already meets every measured acceptance criterion with one Claude call. A proposal adds a planner and three workers but shows no quality improvement and exceeds the latency ceiling. Which decision follows the supplied evidence?",
    "options": [
      {
        "id": "A",
        "body": "Retain the validated single-call design."
      },
      {
        "id": "B",
        "body": "Adopt the workers because delegation necessarily improves reliability."
      },
      {
        "id": "C",
        "body": "Use the larger workflow only for short inputs without measuring them."
      },
      {
        "id": "D",
        "body": "Remove the latency criterion to make the new design acceptable."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Additional orchestration must justify its cost and latency. Here it fails a binding limit while adding no measured benefit.",
    "sourceRefs": [
      "https://www.anthropic.com/engineering/building-effective-agents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-008",
    "domain": "agents-workflows",
    "objective": "D1.1",
    "conceptKey": "routing-classification-bottleneck",
    "type": "single",
    "selectCount": 1,
    "body": "A routed assistant has two specialized downstream workflows. On labeled tests, each workflow answers at 97% accuracy when given the correct category, but the router assigns the correct category only 62% of the time. Production errors concentrate on misrouted requests. Which investigation most directly targets the demonstrated architecture bottleneck?",
    "options": [
      {
        "id": "A",
        "body": "Increase the depth of both specialized workflows while preserving every routing decision."
      },
      {
        "id": "B",
        "body": "Tune the shared response style of the specialists without examining category assignments."
      },
      {
        "id": "C",
        "body": "Analyze the router’s category errors against labeled inputs and improve that decision boundary."
      },
      {
        "id": "D",
        "body": "Add workers behind each existing route while preserving the same misclassified assignments."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Routing depends on selecting the appropriate specialized path. The evidence identifies category assignment as the failure point, so inspect and improve the router against labeled inputs before changing already-validated downstream behavior.",
    "sourceRefs": [
      "https://www.anthropic.com/engineering/building-effective-agents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-009",
    "domain": "agents-workflows",
    "objective": "D1.1",
    "conceptKey": "prompt-chain-programmatic-intermediate-gate",
    "type": "single",
    "selectCount": 1,
    "body": "A two-stage writing workflow first chooses an outline, then expands it. Expansion is expensive, and an outline missing any mandatory section must not proceed. The required section list is machine-checkable. Where should the check run?",
    "options": [
      {
        "id": "A",
        "body": "Only after the entire document has been expanded."
      },
      {
        "id": "B",
        "body": "Between outline generation and expansion, branching on the check result."
      },
      {
        "id": "C",
        "body": "Only inside the instruction asking the writer to remember the sections."
      },
      {
        "id": "D",
        "body": "Only on a randomly sampled subset of completed documents."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "A programmatic intermediate gate can stop an invalid outline before downstream generation. A prompt request alone does not enforce the transition.",
    "sourceRefs": [
      "https://www.anthropic.com/engineering/building-effective-agents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-010",
    "domain": "agents-workflows",
    "objective": "D1.1",
    "conceptKey": "agent-observation-versus-imagined-progress",
    "type": "single",
    "selectCount": 1,
    "body": "A repair agent claims its patch solved a failure immediately after proposing an edit, without executing the edit or checking tests. Which missing part of the control loop most directly explains this unsupported conclusion?",
    "options": [
      {
        "id": "A",
        "body": "A larger set of repair hypotheses generated before any tool execution."
      },
      {
        "id": "B",
        "body": "An internal critic that checks whether the proposed patch sounds consistent."
      },
      {
        "id": "C",
        "body": "A planner that expands the same unexecuted patch into smaller proposed edits."
      },
      {
        "id": "D",
        "body": "Environmental feedback from actual execution and verification."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "An agent needs observations from tools or execution to assess progress. A proposed action is not evidence that the environment changed successfully.",
    "sourceRefs": [
      "https://www.anthropic.com/engineering/building-effective-agents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-011",
    "domain": "agents-workflows",
    "objective": "D1.1",
    "conceptKey": "agent-loop-bounded-autonomy",
    "type": "multiple",
    "selectCount": 2,
    "body": "An exploratory agent sometimes revisits the same hypothesis indefinitely. The product requires control even when Claude never declares completion. Select TWO architectural controls that directly address that requirement.",
    "options": [
      {
        "id": "A",
        "body": "Enforce a maximum iteration count in the harness."
      },
      {
        "id": "B",
        "body": "Allow only Claude’s self-reported completion to stop the run."
      },
      {
        "id": "C",
        "body": "Provide a checkpoint path for human judgment when the agent is blocked."
      },
      {
        "id": "D",
        "body": "Increase the number of autonomous workers without adding limits."
      },
      {
        "id": "E",
        "body": "Treat an unfinished run as completed once its output looks confident."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "A harness stopping condition bounds execution independently of model decisions. A blocker checkpoint allows human judgment instead of endless autonomous cycling.",
    "sourceRefs": [
      "https://www.anthropic.com/engineering/building-effective-agents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-012",
    "domain": "agents-workflows",
    "objective": "D1.1",
    "conceptKey": "specialist-instructions-versus-parent-prompt-bloat",
    "type": "single",
    "selectCount": 1,
    "body": "An orchestrator has four specialties available, but only a subset is relevant to each request. Each specialty needs lengthy procedural guidance that should govern that specialist’s work, without making every other worker follow it. Which design fits?",
    "options": [
      {
        "id": "A",
        "body": "Put every specialty’s procedure into one undifferentiated instruction block for all workers."
      },
      {
        "id": "B",
        "body": "Have workers infer the missing procedures from their names."
      },
      {
        "id": "C",
        "body": "Give each specialist its own task-specific system prompt and delegate relevant work to it."
      },
      {
        "id": "D",
        "body": "Move all procedures into the user’s request and treat every one as mandatory."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Subagents support specialized instructions for focused subtasks. Separate prompts avoid imposing unrelated procedures on every worker.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/subagents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-013",
    "domain": "agents-workflows",
    "objective": "D1.1",
    "conceptKey": "subagent-tool-surface-for-focused-role",
    "type": "single",
    "selectCount": 1,
    "body": "A documentation reviewer should inspect Markdown files but has no task requiring commands, edits, or external services. You are defining its Agent SDK AgentDefinition. Which configuration most directly expresses that narrow capability set?",
    "options": [
      {
        "id": "A",
        "body": "Set its tools to Read, Glob, and Grep."
      },
      {
        "id": "B",
        "body": "Omit tools and assume the reviewer name removes mutating capabilities."
      },
      {
        "id": "C",
        "body": "Add a sentence saying “read-only” while leaving all tools available."
      },
      {
        "id": "D",
        "body": "Give it Bash so it can implement every action through a shell."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "An AgentDefinition tools list restricts the subagent’s available tools. Naming or describing a role alone does not remove capabilities.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/subagents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-014",
    "domain": "agents-workflows",
    "objective": "D1.2",
    "conceptKey": "agent-sdk-local-loop-versus-client-sdk",
    "type": "single",
    "selectCount": 1,
    "body": "A Python service must run inside the team’s own process environment and use Claude Code’s built-in file tools and agent loop. The team does not want to implement repeated model/tool round trips. Which interface matches?",
    "options": [
      {
        "id": "A",
        "body": "The Client SDK with only messages.create and no tool-loop implementation."
      },
      {
        "id": "B",
        "body": "A static MCP resource containing task instructions."
      },
      {
        "id": "C",
        "body": "The Claude Agent SDK."
      },
      {
        "id": "D",
        "body": "A Message Batch containing one unrelated request per possible tool."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The Agent SDK provides the Claude Code loop and tools as a library. Direct Client SDK model calls leave loop orchestration to the application.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/overview"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-015",
    "domain": "agents-workflows",
    "objective": "D1.2",
    "conceptKey": "hooks-vs-prompt-instruction-guarantee",
    "type": "single",
    "selectCount": 1,
    "body": "A coding-assistant integration must guarantee that a destructive shell command is blocked before it runs, regardless of what the model decides, rather than merely being discouraged in the system prompt. Which Claude Agent SDK / Claude Code mechanism directly provides that guarantee?",
    "options": [
      {
        "id": "A",
        "body": "A stronger system-prompt instruction asking the model not to run destructive commands"
      },
      {
        "id": "B",
        "body": "A PreToolUse hook that inspects the proposed command and can block it before execution"
      },
      {
        "id": "C",
        "body": "Increasing the model's reasoning effort so it double-checks itself"
      },
      {
        "id": "D",
        "body": "A PostToolUse hook that logs the command after it runs"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Hooks give deterministic, code-level control over tool execution. A PreToolUse hook can inspect and block a proposed action before it runs; approaches that depend on the model's own judgment, such as prompt wording or reasoning effort, provide no such guarantee.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/hooks"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-016",
    "domain": "agents-workflows",
    "objective": "D1.2",
    "conceptKey": "agent-sdk-subprocess-hosting-model",
    "type": "single",
    "selectCount": 1,
    "body": "A platform team estimates Agent SDK capacity as if each active agent were only a lightweight stateless HTTP request object. What documented runtime fact must change that estimate?",
    "options": [
      {
        "id": "A",
        "body": "A new local process is created for each text token, with no session state."
      },
      {
        "id": "B",
        "body": "All self-hosted SDK work executes only in the remote model-provider process."
      },
      {
        "id": "C",
        "body": "All concurrent SDK sessions are multiplexed into one guaranteed shared subprocess."
      },
      {
        "id": "D",
        "body": "An active SDK session has a CLI subprocess with local working state."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The SDK supervises a CLI subprocess that owns shell and filesystem state. Concurrency planning must account for those processes rather than treating the SDK as a stateless wrapper.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/hosting"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-017",
    "domain": "agents-workflows",
    "objective": "D1.2",
    "conceptKey": "claude-code-programmatic-print-mode",
    "type": "single",
    "selectCount": 1,
    "body": "A Rust service wants to drive Claude Code’s existing agent loop without writing its own model/tool loop. It cannot embed Python or TypeScript libraries, but it may run a subprocess and parse JSON. Which supported integration approach fits?",
    "options": [
      {
        "id": "A",
        "body": "Import the TypeScript Agent SDK directly as a native Rust crate."
      },
      {
        "id": "B",
        "body": "Run the Claude Code CLI in print mode with JSON output."
      },
      {
        "id": "C",
        "body": "Call a raw Messages API request and assume it runs local file tools."
      },
      {
        "id": "D",
        "body": "Encode Rust source as an MCP prompt and expect it to launch the loop."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "For languages other than Python and TypeScript, the documented bridge to the same loop is the CLI as a subprocess with print mode and JSON output.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/overview"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-018",
    "domain": "agents-workflows",
    "objective": "D1.2",
    "conceptKey": "sdk-final-result-versus-intermediate-message",
    "type": "single",
    "selectCount": 1,
    "body": "An SDK integration marks a task successful as soon as it sees any AssistantMessage containing text. In a failing run, the text said “I will inspect the error” before further tool calls. What should determine loop outcome instead?",
    "options": [
      {
        "id": "A",
        "body": "Whether the first text is grammatical."
      },
      {
        "id": "B",
        "body": "Whether any tool was requested."
      },
      {
        "id": "C",
        "body": "The ResultMessage and its success or error subtype."
      },
      {
        "id": "D",
        "body": "Whether the system init event contains a session ID."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Assistant messages occur throughout execution. The result message records the loop outcome, and its subtype distinguishes success from stopping on an error or limit.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/agent-loop"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-019",
    "domain": "agents-workflows",
    "objective": "D1.2",
    "conceptKey": "sdk-turn-cap-not-output-token-limit",
    "type": "single",
    "selectCount": 1,
    "body": "A tool-using SDK agent must stop after a configured number of model/tool round trips, even when every individual response is short. Which setting controls that boundary?",
    "options": [
      {
        "id": "A",
        "body": "maxTurns in TypeScript, or max_turns in Python."
      },
      {
        "id": "B",
        "body": "A lower maximum output-token budget for each individual model response."
      },
      {
        "id": "C",
        "body": "A smaller allowedTools list that still contains the repeatedly called tool."
      },
      {
        "id": "D",
        "body": "A shorter timeout on each individual tool execution, reset for every call."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The SDK’s turn limit bounds tool-use round trips. Short output or small logs do not bound how many times the loop executes.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/agent-loop"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-020",
    "domain": "agents-workflows",
    "objective": "D1.2",
    "conceptKey": "claude-code-partial-output-streaming",
    "type": "single",
    "selectCount": 1,
    "body": "A TypeScript SDK app correctly receives complete assistant responses but needs to render text while each response is being generated. Which change addresses that specific gap?",
    "options": [
      {
        "id": "A",
        "body": "Treat each complete AssistantMessage as one token."
      },
      {
        "id": "B",
        "body": "Enable includePartialMessages and handle text deltas in stream_event messages."
      },
      {
        "id": "C",
        "body": "Start a new query for every character."
      },
      {
        "id": "D",
        "body": "Wait only for the final ResultMessage."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Partial-message streaming adds raw events as generation proceeds. The app must extract text deltas rather than waiting for complete assistant messages.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/streaming-output"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-021",
    "domain": "agents-workflows",
    "objective": "D1.2",
    "conceptKey": "sdk-stream-complete-message-double-display",
    "type": "single",
    "selectCount": 1,
    "body": "With partial SDK output enabled, a UI appends text deltas and then appends the complete AssistantMessage text to the same buffer. Users see each response twice. Which fix preserves streaming without duplicating output?",
    "options": [
      {
        "id": "A",
        "body": "Disable tool execution."
      },
      {
        "id": "B",
        "body": "Append the complete message once more to identify the final copy."
      },
      {
        "id": "C",
        "body": "Delete all non-text events and stop reading after the first delta."
      },
      {
        "id": "D",
        "body": "Use deltas for incremental display and reconcile the complete message instead of appending it again."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Partial events are emitted in addition to complete assistant messages. Treating both as new text duplicates the same content.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/streaming-output"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-022",
    "domain": "agents-workflows",
    "objective": "D1.2",
    "conceptKey": "managed-agent-environment-session-distinction",
    "type": "single",
    "selectCount": 1,
    "body": "A Managed Agents integration has a reusable model/prompt/tool configuration and a sandbox configuration. It needs a separate task execution that references both. Which object represents that execution?",
    "options": [
      {
        "id": "A",
        "body": "An environment."
      },
      {
        "id": "B",
        "body": "A tool schema."
      },
      {
        "id": "C",
        "body": "A session."
      },
      {
        "id": "D",
        "body": "The reusable agent definition itself."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "A session is the running agent instance within an environment. Agent and environment resources describe configuration rather than one specific task execution.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/managed-agents/overview"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-023",
    "domain": "agents-workflows",
    "objective": "D1.2",
    "conceptKey": "managed-session-created-without-work-event",
    "type": "single",
    "selectCount": 1,
    "body": "Using the documented Managed Agents beta API, an application creates a session with agent and environment IDs but sends no initial events. It expects a task mentioned only in the application’s local variable to begin. What is missing?",
    "options": [
      {
        "id": "A",
        "body": "A user event delivering the task to that session."
      },
      {
        "id": "B",
        "body": "An arbitrary assistant message fabricated as a completed result."
      },
      {
        "id": "C",
        "body": "A local Agent SDK subprocess for every managed session."
      },
      {
        "id": "D",
        "body": "A new environment for each sentence of the task."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Creating a session and sending its work are separate steps unless initial events are supplied. The task must be delivered as a user event.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/managed-agents/sessions"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-024",
    "domain": "agents-workflows",
    "objective": "D1.2",
    "conceptKey": "managed-agent-version-pin-at-session-start",
    "type": "single",
    "selectCount": 1,
    "body": "A Managed Agents beta deployment must compare two agent configurations reproducibly. Passing only an agent ID selects its latest version, which may change during the experiment. What session-creation choice removes that variability?",
    "options": [
      {
        "id": "A",
        "body": "Pin only the environment ID while continuing to use the bare agent ID."
      },
      {
        "id": "B",
        "body": "Pass the agent reference with the required explicit version."
      },
      {
        "id": "C",
        "body": "Record whichever version is latest before launching each unpinned session."
      },
      {
        "id": "D",
        "body": "Keep one local SDK package version fixed while using the same bare managed-agent ID."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "A versioned agent reference pins which agent configuration the session runs. A bare ID selects the latest version.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/managed-agents/sessions"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-025",
    "domain": "agents-workflows",
    "objective": "D1.2",
    "conceptKey": "ephemeral-sdk-working-artifacts-persistence",
    "type": "single",
    "selectCount": 1,
    "body": "A one-off SDK job writes a report into its container’s working directory. The container is destroyed at completion. The product must let the user download the report tomorrow. Which action is required before teardown?",
    "options": [
      {
        "id": "A",
        "body": "Keep only the model’s response-token count."
      },
      {
        "id": "B",
        "body": "Store only the session ID in the browser."
      },
      {
        "id": "C",
        "body": "Assume the SDK transcript automatically contains the report file’s bytes."
      },
      {
        "id": "D",
        "body": "Export the report to durable artifact storage."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Working-directory artifacts need their own persistence strategy. A session identifier or transcript is not a durable copy of every generated file.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/hosting"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-026",
    "domain": "agents-workflows",
    "objective": "D1.2",
    "conceptKey": "sdk-headless-not-default-interactive-prompt",
    "type": "single",
    "selectCount": 1,
    "body": "A headless SDK agent runs in default permission mode. A requested tool is not covered by an allow rule, and no canUseTool callback is configured. What should the developer expect under the documented SDK behavior?",
    "options": [
      {
        "id": "A",
        "body": "The terminal always opens an interactive approval dialog."
      },
      {
        "id": "B",
        "body": "The request automatically switches to bypassPermissions."
      },
      {
        "id": "C",
        "body": "The tool is denied."
      },
      {
        "id": "D",
        "body": "The tool runs because default means approve everything."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "In SDK default mode, uncovered tools go to canUseTool; without that callback they are denied. A headless embedding should not expect an interactive terminal prompt.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/agent-loop"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-027",
    "domain": "agents-workflows",
    "objective": "D1.2",
    "conceptKey": "sdk-budget-includes-subagent-spend",
    "type": "single",
    "selectCount": 1,
    "body": "An SDK deployment uses Claude Code v2.1.217 or later and delegates work to several subagents. It must account for the whole query when applying its configured spend cap. Which statement follows the documented budget behavior?",
    "options": [
      {
        "id": "A",
        "body": "Subagent requests count toward the query’s total spend used by maxBudgetUsd / max_budget_usd."
      },
      {
        "id": "B",
        "body": "Subagent requests are excluded because they have separate conversation contexts."
      },
      {
        "id": "C",
        "body": "A maxTurns value alone is an exact dollar-denominated cap."
      },
      {
        "id": "D",
        "body": "The cap applies only to text returned to the end user, excluding tool-use work."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The SDK query budget includes subagent spend. Separate worker contexts do not create free or excluded model requests.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/agent-loop"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-028",
    "domain": "agents-workflows",
    "objective": "D1.2",
    "conceptKey": "sdk-tool-execution-owned-by-harness",
    "type": "single",
    "selectCount": 1,
    "body": "A team migrating a manual loop to the Agent SDK sees a tool-use block in an AssistantMessage and executes that tool itself. The SDK then executes it too. What responsibility was carried over incorrectly?",
    "options": [
      {
        "id": "A",
        "body": "The responsibility to display progress."
      },
      {
        "id": "B",
        "body": "The responsibility to execute normal SDK-managed tool requests."
      },
      {
        "id": "C",
        "body": "The responsibility to inspect final outcomes."
      },
      {
        "id": "D",
        "body": "The responsibility to store the application’s own business records."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The Agent SDK executes requested tools and feeds their results back into its loop. Executing the same managed call again outside that loop duplicates the action.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/agent-loop"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-029",
    "domain": "agents-workflows",
    "objective": "D1.2",
    "conceptKey": "sdk-host-network-dependencies",
    "type": "multiple",
    "selectCount": 2,
    "body": "A self-hosted SDK agent can read local files but cannot reach Claude or its configured remote MCP service after deployment. The container has no outbound network routes. Select TWO destinations its hosting design must allow, subject to the organization’s network controls.",
    "options": [
      {
        "id": "A",
        "body": "Every Internet domain without restriction."
      },
      {
        "id": "B",
        "body": "Only localhost, regardless of the configured services."
      },
      {
        "id": "C",
        "body": "The configured model-provider API endpoint."
      },
      {
        "id": "D",
        "body": "The configured remote MCP endpoint."
      },
      {
        "id": "E",
        "body": "An inbound public port for every local file tool."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "The hosted SDK needs outbound access to its model provider and any remote tools it uses. Local file access alone does not establish either connection.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/hosting"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-030",
    "domain": "agents-workflows",
    "objective": "D1.2",
    "conceptKey": "sdk-ephemeral-task-container-pattern",
    "type": "single",
    "selectCount": 1,
    "body": "A service runs isolated one-off investigations. After exporting each result, it must destroy that task’s runtime; no follow-up conversation is required. Which documented SDK hosting pattern most closely matches?",
    "options": [
      {
        "id": "A",
        "body": "Keep every task container alive permanently."
      },
      {
        "id": "B",
        "body": "Put all tasks into one continuing conversation."
      },
      {
        "id": "C",
        "body": "Use one permanent agent definition as the task’s filesystem."
      },
      {
        "id": "D",
        "body": "Create an ephemeral container per task and remove it after completion."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Ephemeral sessions tie a container’s lifetime to one task. They fit one-off work whose results are exported before teardown.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/hosting"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-031",
    "domain": "agents-workflows",
    "objective": "D1.2",
    "conceptKey": "sdk-stream-consume-through-completion",
    "type": "single",
    "selectCount": 1,
    "body": "An SDK consumer breaks out of its message iterator immediately after receiving ResultMessage. The integration must also process any trailing system events, which the documented stream can emit. What should it do?",
    "options": [
      {
        "id": "A",
        "body": "Record the result when received, then continue iterating to stream completion."
      },
      {
        "id": "B",
        "body": "Assume all system events precede the result and discard the remainder."
      },
      {
        "id": "C",
        "body": "Restart the completed task to recover trailing events."
      },
      {
        "id": "D",
        "body": "Treat every trailing event as a new user request."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "ResultMessage marks the loop outcome, but a small number of system events can follow. Consuming the stream to completion preserves those events.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/agent-loop"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-032",
    "domain": "agents-workflows",
    "objective": "D1.3",
    "conceptKey": "framework-abstraction-inspect-underlying-calls",
    "type": "single",
    "selectCount": 1,
    "body": "An agent framework reports only a high-level “research failed” error. The team cannot see the prompts, tool requests, or responses that led to it. What should they expose before changing the model or adding workers?",
    "options": [
      {
        "id": "A",
        "body": "Compare only aggregate success rates across framework versions."
      },
      {
        "id": "B",
        "body": "The underlying model calls and tool interactions hidden by the abstraction."
      },
      {
        "id": "C",
        "body": "Add more workers to the same opaque graph and compare final answer lengths."
      },
      {
        "id": "D",
        "body": "Rewrite the final error message to include a likely cause inferred from the task name."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Framework abstractions can hide the prompts and responses needed for debugging. Inspecting the underlying interactions reveals which assumption failed.",
    "sourceRefs": [
      "https://www.anthropic.com/engineering/building-effective-agents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-033",
    "domain": "agents-workflows",
    "objective": "D1.3",
    "conceptKey": "sdk-explicit-session-versus-most-recent",
    "type": "single",
    "selectCount": 1,
    "body": "A server handles several independent customer conversations in one working directory. A returning customer’s session is not the most recently active one. Which session-selection method avoids continuing the wrong conversation?",
    "options": [
      {
        "id": "A",
        "body": "Use continue because it always identifies the current customer."
      },
      {
        "id": "B",
        "body": "Pick the last transcript written by any customer."
      },
      {
        "id": "C",
        "body": "Start a fresh session and assume the customer ID retrieves its history automatically."
      },
      {
        "id": "D",
        "body": "Look up that customer’s authorized session ID and pass it to resume."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Continue selects the most recent session in the directory; resume targets a specific session ID. Multi-session applications must select the intended authorized conversation explicitly.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/sessions"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-034",
    "domain": "agents-workflows",
    "objective": "D1.3",
    "conceptKey": "session-fork-preserves-original-thread",
    "type": "single",
    "selectCount": 1,
    "body": "An analyst wants to explore a contrary hypothesis using an existing SDK conversation’s evidence, while keeping the original conversation unchanged for later continuation. Which operation fits?",
    "options": [
      {
        "id": "A",
        "body": "Fork the existing session and retain both session IDs."
      },
      {
        "id": "B",
        "body": "Resume the original and overwrite its direction with the contrary hypothesis."
      },
      {
        "id": "C",
        "body": "Use continue and assume it creates a branch."
      },
      {
        "id": "D",
        "body": "Delete the original transcript after copying only its title."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Forking creates a separate conversation initialized from the original history. The original thread remains available under its own ID.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/sessions"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-035",
    "domain": "agents-workflows",
    "objective": "D1.3",
    "conceptKey": "session-fork-not-filesystem-branch",
    "type": "single",
    "selectCount": 1,
    "body": "Two SDK sessions fork from the same history and work in the same directory. One edits a source file. The other subsequently reads the edited file. Which explanation is correct?",
    "options": [
      {
        "id": "A",
        "body": "Forking failed because a fork must copy the entire disk."
      },
      {
        "id": "B",
        "body": "Only the model’s temperature can make file contents differ."
      },
      {
        "id": "C",
        "body": "Forking branches conversation history, while the directory remains shared."
      },
      {
        "id": "D",
        "body": "Each session receives a private filesystem whenever its ID differs."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "A session fork does not branch the filesystem. Separate working copies or another filesystem isolation strategy are needed to keep edits apart.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/sessions"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-036",
    "domain": "agents-workflows",
    "objective": "D1.3",
    "conceptKey": "sdk-cross-host-resume-transcript-availability",
    "type": "multiple",
    "selectCount": 2,
    "body": "An SDK job records its session ID, then its ephemeral host is destroyed. A fresh host has no transcript files and no external session store. Passing the ID alone cannot restore the conversation. Select TWO valid continuity designs.",
    "options": [
      {
        "id": "A",
        "body": "Mirror session transcripts to shared storage supported by the SDK and restore or load them for resumption."
      },
      {
        "id": "B",
        "body": "Save only the session ID in a durable table and resume it on an empty host."
      },
      {
        "id": "C",
        "body": "Enable prompt caching on the next call and use its cache as the transcript store."
      },
      {
        "id": "D",
        "body": "Persist the required findings as application state and supply them to a fresh session."
      },
      {
        "id": "E",
        "body": "Use continue on the new host without restoring any earlier session files."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Cross-host continuity requires available state. You can retain transcripts for resumption or preserve the needed task state and seed a new conversation; an ID alone contains neither.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/sessions"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-037",
    "domain": "agents-workflows",
    "objective": "D1.3",
    "conceptKey": "sdk-stateless-transcript-write-option",
    "type": "single",
    "selectCount": 1,
    "body": "A TypeScript Agent SDK integration performs independent one-shot tasks and must suppress SDK session transcript writes to disk. It does not need later resumption. Which documented option directly implements that requirement?",
    "options": [
      {
        "id": "A",
        "body": "Set persistSession: false for the query."
      },
      {
        "id": "B",
        "body": "Use a fresh query each time and assume fresh sessions are never written to disk."
      },
      {
        "id": "C",
        "body": "Record a new session ID after each task while keeping default persistence."
      },
      {
        "id": "D",
        "body": "Delete transcripts only after completion, allowing them to be written during the task."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "TypeScript persistSession: false keeps the session in memory for the call instead of writing its transcript. A fresh default session can still be persisted.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/sessions"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-038",
    "domain": "agents-workflows",
    "objective": "D1.3",
    "conceptKey": "checkpoint-tracked-tools-not-shell-writes",
    "type": "multiple",
    "selectCount": 2,
    "body": "File checkpointing is enabled for a main SDK agent. It changes alpha.ts using Edit, beta.ts using Write, and gamma.ts through a Bash command. Select TWO changes the documented checkpoint mechanism tracks.",
    "options": [
      {
        "id": "A",
        "body": "The Edit change to alpha.ts."
      },
      {
        "id": "B",
        "body": "The Bash change to gamma.ts."
      },
      {
        "id": "C",
        "body": "The Write change to beta.ts."
      },
      {
        "id": "D",
        "body": "All later edits made by unrelated external programs."
      },
      {
        "id": "E",
        "body": "Every database update caused by a shell script."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Checkpointing tracks designated file-editing tools, including Edit and Write. Bash changes and unrelated external side effects are outside that mechanism.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/file-checkpointing"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-039",
    "domain": "agents-workflows",
    "objective": "D1.3",
    "conceptKey": "file-rewind-keeps-conversation",
    "type": "multiple",
    "selectCount": 2,
    "body": "An SDK application calls rewindFiles for tracked regular files. The intended changes are restored to the selected checkpoint, with no skipped or unsafe paths. It then sends a follow-up. Select TWO statements about the state after the rewind.",
    "options": [
      {
        "id": "A",
        "body": "The earlier conversation messages have necessarily been deleted."
      },
      {
        "id": "B",
        "body": "The tracked files have been restored to the selected checkpoint."
      },
      {
        "id": "C",
        "body": "The session has necessarily been forked to a new ID."
      },
      {
        "id": "D",
        "body": "The conversation still contains its earlier discussion unless handled separately."
      },
      {
        "id": "E",
        "body": "Any previously sent email has necessarily been recalled."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "File rewinding restores tracked filesystem state while retaining conversation context. It is not a conversation fork or rollback of external actions.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/file-checkpointing"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-040",
    "domain": "agents-workflows",
    "objective": "D1.3",
    "conceptKey": "nonfork-subagent-task-context-transfer",
    "type": "single",
    "selectCount": 1,
    "body": "A parent SDK agent knows the failing test path and the exact error from earlier turns. It invokes a non-fork subagent with only “fix that failure.” The worker does not know which failure is meant. What should the parent change?",
    "options": [
      {
        "id": "A",
        "body": "Assume the worker automatically receives every parent tool result."
      },
      {
        "id": "B",
        "body": "Increase the worker’s output limit without changing its task."
      },
      {
        "id": "C",
        "body": "Include the relevant path, error, and task constraints in the delegation prompt."
      },
      {
        "id": "D",
        "body": "Give the worker the parent’s session title only."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "A non-fork subagent does not receive the parent’s conversation history. The delegation prompt must carry the specific facts needed for the subtask.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/subagents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-041",
    "domain": "agents-workflows",
    "objective": "D1.3",
    "conceptKey": "subagent-description-versus-role-prompt",
    "type": "single",
    "selectCount": 1,
    "body": "A programmatic SDK subagent behaves correctly when explicitly invoked, but its description merely says “helper.” The parent rarely selects it for the intended database-review tasks. Which field most directly needs a clearer selection cue?",
    "options": [
      {
        "id": "A",
        "body": "The description explaining when the parent should use the subagent."
      },
      {
        "id": "B",
        "body": "The prompt governing the worker’s analysis after it has already been selected."
      },
      {
        "id": "C",
        "body": "The worker’s model setting while leaving its intended purpose unspecified."
      },
      {
        "id": "D",
        "body": "The worker’s tool list, even though its current tools already support database review."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AgentDefinition.description tells the parent when to use the subagent. Its prompt governs the subagent’s behavior after selection.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/subagents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-042",
    "domain": "agents-workflows",
    "objective": "D1.3",
    "conceptKey": "programmatic-agent-definition-precedence",
    "type": "single",
    "selectCount": 1,
    "body": "An SDK application supplies a programmatic agent named reviewer and also has a filesystem definition with that name. Their prompts differ. The reviewer follows the programmatic prompt. What explains this?",
    "options": [
      {
        "id": "A",
        "body": "The filesystem prompt is always concatenated after the programmatic prompt."
      },
      {
        "id": "B",
        "body": "The name collision guarantees a random choice each turn."
      },
      {
        "id": "C",
        "body": "The larger file wins automatically."
      },
      {
        "id": "D",
        "body": "The programmatic definition takes precedence over the same-named filesystem definition."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Programmatic agent definitions take precedence over filesystem definitions with the same name. Maintaining both with divergent content can therefore obscure the effective configuration.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/subagents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-043",
    "domain": "agents-workflows",
    "objective": "D1.3",
    "conceptKey": "long-running-feature-ledger-prevents-premature-done",
    "type": "single",
    "selectCount": 1,
    "body": "A coding agent works across many fresh contexts. After implementing the landing page, a later session declares the whole product complete even though several required flows are missing. Which harness artifact most directly exposes that incompleteness?",
    "options": [
      {
        "id": "A",
        "body": "A summary listing only the features implemented in the preceding session."
      },
      {
        "id": "B",
        "body": "A durable feature list with acceptance steps and per-feature completion status."
      },
      {
        "id": "C",
        "body": "The diff from the most recent commit, without the complete requirement list."
      },
      {
        "id": "D",
        "body": "A completion flag set whenever the latest build compiles successfully."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "A feature ledger makes remaining requirements visible across sessions. Visible progress on one part no longer substitutes for evidence that every required feature works.",
    "sourceRefs": [
      "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-044",
    "domain": "agents-workflows",
    "objective": "D1.3",
    "conceptKey": "fresh-agent-baseline-verification",
    "type": "multiple",
    "selectCount": 2,
    "body": "A fresh coding-agent session inherits a repository and progress notes from yesterday. Before adding the next feature, it must avoid building on an unnoticed broken baseline. Select TWO actions that directly establish the starting state.",
    "options": [
      {
        "id": "A",
        "body": "Read recent progress notes and version-control history."
      },
      {
        "id": "B",
        "body": "Assume yesterday’s summary proves today’s checkout works."
      },
      {
        "id": "C",
        "body": "Run a basic end-to-end check of the current application."
      },
      {
        "id": "D",
        "body": "Begin a broad refactor before inspecting the repository."
      },
      {
        "id": "E",
        "body": "Mark unfinished features complete to simplify the task list."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Reading the handoff establishes intended recent work; exercising the current application checks the actual baseline. Neither a stale summary nor immediate new edits establishes both.",
    "sourceRefs": [
      "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-045",
    "domain": "agents-workflows",
    "objective": "D1.3",
    "conceptKey": "agent-feature-ledger-criteria-integrity",
    "type": "single",
    "selectCount": 1,
    "body": "A long-running coding-agent harness keeps a feature ledger with original acceptance steps and a passes field. Agents may update completion status after verification, but the approved requirements must remain unchanged. A worker makes its task appear complete by deleting an unmet acceptance step. Which ledger-update policy directly prevents this failure while permitting legitimate progress updates?",
    "options": [
      {
        "id": "A",
        "body": "Allow deletion of an acceptance step whenever the current implementation cannot satisfy it."
      },
      {
        "id": "B",
        "body": "Accept any ledger edit accompanied by a passing build, even if requirements changed."
      },
      {
        "id": "C",
        "body": "Allow agents to replace the original acceptance steps with a summary of implemented behavior."
      },
      {
        "id": "D",
        "body": "Reject edits to acceptance descriptions or steps; permit verified updates to completion status."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The harness must preserve the acceptance definition while recording verified progress. Restricting ledger updates to status changes prevents an agent from making unfinished work disappear by rewriting the requirements.",
    "sourceRefs": [
      "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-046",
    "domain": "agents-workflows",
    "objective": "D1.3",
    "conceptKey": "agent-handoff-clean-incremental-state",
    "type": "multiple",
    "selectCount": 2,
    "body": "A long-running agent has time for one bounded feature before its context ends. Previous sessions left half-finished changes that the next session spent hours untangling. Select TWO handoff practices that directly reduce this problem.",
    "options": [
      {
        "id": "A",
        "body": "Start several additional features just before ending."
      },
      {
        "id": "B",
        "body": "Leave a verified, coherent incremental change recorded in version control."
      },
      {
        "id": "C",
        "body": "Rely on compaction to reconstruct every undocumented file change exactly."
      },
      {
        "id": "D",
        "body": "Write a concise progress update with completed work and remaining steps."
      },
      {
        "id": "E",
        "body": "Delete the tests that currently fail without recording why."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "A coherent versioned increment plus explicit progress notes gives the next session a recoverable working state and task handoff. Unfinished undocumented work defeats both goals.",
    "sourceRefs": [
      "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-047",
    "domain": "agents-workflows",
    "objective": "D1.3",
    "conceptKey": "sdk-compaction-boundary-observation",
    "type": "single",
    "selectCount": 1,
    "body": "An SDK event consumer sees a system event with subtype compact_boundary during a long investigation. What happened to the agent context?",
    "options": [
      {
        "id": "A",
        "body": "Older conversation history was summarized to free context space."
      },
      {
        "id": "B",
        "body": "A file checkpoint was created for a pending source edit."
      },
      {
        "id": "C",
        "body": "The SDK loaded the most recent session’s full transcript in response to continue."
      },
      {
        "id": "D",
        "body": "The SDK finished a subagent and replaced the parent’s entire conversation with that worker’s transcript."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The compact boundary event identifies conversation compaction. It concerns context management, not file restoration, permissions, or model training.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/agent-loop"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-048",
    "domain": "agents-workflows",
    "objective": "D1.3",
    "conceptKey": "subagent-depth-versus-concurrency-controls",
    "type": "multiple",
    "selectCount": 2,
    "body": "An SDK deployment uses Claude Code v2.1.219 or later, with ultracode inactive. It must allow four first-level subagents to run simultaneously, refuse a fifth concurrent worker, and prevent those workers from spawning their own subagents. Select TWO documented limit settings that directly express these requirements.",
    "options": [
      {
        "id": "A",
        "body": "Set CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH to 4."
      },
      {
        "id": "B",
        "body": "Set CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS to 1."
      },
      {
        "id": "C",
        "body": "Set CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH to 1."
      },
      {
        "id": "D",
        "body": "Set CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS to 4."
      },
      {
        "id": "E",
        "body": "Leave depth and concurrency unset and use only a dollar budget."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Spawn depth 1 permits children of the main agent but no grandchildren. The concurrent-subagent limit separately caps how many workers can run at once.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/subagents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-049",
    "domain": "agents-workflows",
    "objective": "D1.3",
    "conceptKey": "subagent-resume-session-and-agent-identities",
    "type": "single",
    "selectCount": 1,
    "body": "A custom SDK subagent completed an investigation. A later query must ask that same worker a follow-up using its detailed prior work, not launch a fresh worker with the same role name. The application retains and supplies the same programmatic agents definition on the later query. Under the documented resume workflow, which identifiers are needed?",
    "options": [
      {
        "id": "A",
        "body": "Only the role name, because every worker of a role shares one transcript."
      },
      {
        "id": "B",
        "body": "The containing session ID and the completed subagent’s agent ID."
      },
      {
        "id": "C",
        "body": "The parent session ID alone, with no identity for the particular worker."
      },
      {
        "id": "D",
        "body": "The worker agent ID in an unrelated new session with no restored parent transcript."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Resuming the containing session makes its subagent transcript available; the agent ID identifies the specific worker to continue. A role name alone does not select a past execution.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/subagents"
    ],
    "qualityStatus": "APPROVED"
  }
];
