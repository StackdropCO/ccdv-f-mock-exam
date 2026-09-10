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
    "body": "A documentation reviewer subagent should inspect Markdown files but has no task requiring commands, file edits, or calls to external services. You are defining the capabilities it will be given. Which configuration most directly expresses that narrow capability set?",
    "options": [
      {
        "id": "A",
        "body": "Grant it only the file-reading and search capabilities its review work requires."
      },
      {
        "id": "B",
        "body": "Grant no explicit capability list and assume the reviewer's name prevents mutating actions."
      },
      {
        "id": "C",
        "body": "Add a sentence saying \"read-only\" while leaving every capability available."
      },
      {
        "id": "D",
        "body": "Give it a general-purpose shell capability so it can carry out whatever it needs."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The capabilities a subagent is actually granted are what bound it, so a narrow role should receive only the ones its work requires. Naming or describing a role removes nothing, and a general-purpose shell restores exactly the reach the restriction was meant to prevent.",
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
    "conceptKey": "claude-agent-sdk-team-controlled",
    "type": "single",
    "selectCount": 1,
    "body": "A team wants an agent that can inspect a repository, edit files, run tests, and iterate until the task is complete. The team is prepared to host the runtime itself and wants direct control over filesystem access and tool permissions. Which implementation path best fits?",
    "options": [
      {
        "id": "A",
        "body": "Use Message Batches because batch jobs provide an interactive filesystem."
      },
      {
        "id": "B",
        "body": "Use a single stateless Messages API call with no tool loop."
      },
      {
        "id": "C",
        "body": "Put the repository contents in an MCP resource and assume that performs edits automatically."
      },
      {
        "id": "D",
        "body": "Use the Claude Agent SDK in the team's controlled runtime."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The Agent SDK is designed for hosted agent loops with tools and local working state. A single Messages call does not itself provide the iterative coding loop, while Message Batches target asynchronous independent requests rather than interactive repository work.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/overview"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-017",
    "domain": "agents-workflows",
    "objective": "D1.2",
    "conceptKey": "messages-api-keep-tool-execution-loop",
    "type": "single",
    "selectCount": 1,
    "body": "A service already has a mature execution engine that validates every proposed action, invokes internal tools, records audit logs, and controls retries. It needs Claude only to decide which tool to call next. Which approach gives the application the clearest ownership of that loop?",
    "options": [
      {
        "id": "A",
        "body": "Give Claude direct access to the internal tools and keep only a prompt-level instruction describing the old validation policy."
      },
      {
        "id": "B",
        "body": "Convert every tool into prompt text and ask Claude to simulate the results."
      },
      {
        "id": "C",
        "body": "Use the Messages API and keep the tool-execution loop in the application."
      },
      {
        "id": "D",
        "body": "Replace the execution engine with Message Batches."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "When an application already needs to own action validation, execution, retries, and logging, a manual Messages tool loop preserves that control. Higher-level agent runtimes are useful when the application wants them to own more of the loop.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls"
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
    "body": "An agent integration marks a task successful as soon as it sees any assistant message containing text. In a failing run, that text said \"I will inspect the error\" and the agent then made further tool calls. What should determine the loop outcome instead?",
    "options": [
      {
        "id": "A",
        "body": "Whether the first assistant text is grammatical."
      },
      {
        "id": "B",
        "body": "Whether the agent requested any tool at all."
      },
      {
        "id": "C",
        "body": "The run's terminal result and whether it reported success or an error."
      },
      {
        "id": "D",
        "body": "Whether the run's start-up event included a session identifier."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Assistant messages are emitted throughout a run, so a statement of intent is progress commentary rather than evidence of completion. Only the run's terminal result reports whether it finished successfully or stopped on an error or a limit.",
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
    "body": "A tool-using agent must stop after a configured number of model and tool round trips, even when every individual response is short. Which setting controls that boundary?",
    "options": [
      {
        "id": "A",
        "body": "A harness-level cap on how many model and tool round trips the loop may run."
      },
      {
        "id": "B",
        "body": "A lower maximum output-token budget for each individual model response."
      },
      {
        "id": "C",
        "body": "A smaller allowed-tool list that still contains the repeatedly called tool."
      },
      {
        "id": "D",
        "body": "A shorter timeout on each individual tool execution, reset for every call."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Bounding iterations requires a limit on the loop itself. Per-response output budgets, narrower tool lists, and per-call timeouts each constrain a single step while leaving the number of repetitions unbounded.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/agent-loop"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-020",
    "domain": "agents-workflows",
    "objective": "D1.2",
    "conceptKey": "surface-intermediate-progress-separately-declare",
    "type": "single",
    "selectCount": 1,
    "body": "An agent can take several minutes to investigate a repository. Users need visible progress while it works, but the application must not mistake progress text for a completed task. What is the best integration design?",
    "options": [
      {
        "id": "A",
        "body": "Hide all progress and declare success after a fixed number of seconds."
      },
      {
        "id": "B",
        "body": "Treat the first assistant text as the final result."
      },
      {
        "id": "C",
        "body": "Surface intermediate progress separately and declare completion only when the agent run reaches its actual terminal outcome."
      },
      {
        "id": "D",
        "body": "Mark the task complete whenever any tool starts."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Long-running agents can emit intermediate messages while still using tools or reasoning. The UI should distinguish progress from the terminal result so it neither appears frozen nor reports success prematurely.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/overview"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-021",
    "domain": "agents-workflows",
    "objective": "D1.2",
    "conceptKey": "incremental-output-final-assembled-response",
    "type": "multiple",
    "selectCount": 2,
    "body": "A customer-facing agent streams progress while using tools. The product team wants the UI to remain responsive without showing the same generated text twice. Which TWO principles should guide the implementation? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Treat incremental output and the final assembled response as representations of the same generation rather than independent answers."
      },
      {
        "id": "B",
        "body": "Append every partial update and then append the complete final text again."
      },
      {
        "id": "C",
        "body": "Maintain enough state to reconcile streamed content with the completed message."
      },
      {
        "id": "D",
        "body": "Start a new agent run for every streamed fragment."
      },
      {
        "id": "E",
        "body": "Discard the terminal result whenever streaming was enabled."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Streaming gives incremental views of a response that is later complete. A client should reconcile those views rather than blindly append both copies, while still retaining the terminal outcome for correctness.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/streaming",
      "https://code.claude.com/docs/en/agent-sdk/overview"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-022",
    "domain": "agents-workflows",
    "objective": "D1.2",
    "conceptKey": "managed-agent-runtime-intended-provide",
    "type": "single",
    "selectCount": 1,
    "body": "A team needs customer agents with stateful sessions, isolated runtime environments, and persistent execution history. They prefer Anthropic to operate that agent infrastructure rather than running agent containers themselves. Which direction best matches the requirement?",
    "options": [
      {
        "id": "A",
        "body": "Use a local stdio MCP server as the complete hosting platform."
      },
      {
        "id": "B",
        "body": "Use a managed agent runtime intended to provide hosted sessions and execution infrastructure."
      },
      {
        "id": "C",
        "body": "Use prompt caching as a replacement for persistent session state."
      },
      {
        "id": "D",
        "body": "Use one synchronous Messages request per customer and assume server-side memory."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The deciding requirement is who operates the stateful agent runtime. A managed agent service fits when the provider should own sessions and execution infrastructure; Messages and prompt caching do not create durable agent sessions.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/overview"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-023",
    "domain": "agents-workflows",
    "objective": "D1.2",
    "conceptKey": "way-continue-intended-agent-session",
    "type": "single",
    "selectCount": 1,
    "body": "An agent helps an analyst over several follow-up turns. The analyst expects each follow-up to build on the previous investigation. What must the application preserve?",
    "options": [
      {
        "id": "A",
        "body": "Only the model name used on the first turn."
      },
      {
        "id": "B",
        "body": "A prompt-cache key, because a cache is a durable conversation store."
      },
      {
        "id": "C",
        "body": "Only the most recent user sentence, because agent runtimes reconstruct the rest automatically."
      },
      {
        "id": "D",
        "body": "A way to continue the intended agent session or otherwise restore the relevant prior state."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Multi-turn agent work requires continuity of the relevant session or state. Model selection and prompt caching do not by themselves preserve the prior investigation.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/overview",
      "https://platform.claude.com/docs/en/build-with-claude/context-windows"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-024",
    "domain": "agents-workflows",
    "objective": "D1.2",
    "conceptKey": "evaluation-explicitly-identified-stable-configuration",
    "type": "single",
    "selectCount": 1,
    "body": "A team is comparing two versions of an agent configuration. During the experiment, engineers continue editing the default configuration. What practice makes the comparison defensible?",
    "options": [
      {
        "id": "A",
        "body": "Change the prompt and model between cases to increase variation."
      },
      {
        "id": "B",
        "body": "Record only the final answers and ignore which configuration produced them."
      },
      {
        "id": "C",
        "body": "Run each evaluation against an explicitly identified, stable configuration version."
      },
      {
        "id": "D",
        "body": "Use the mutable default configuration for every run but record only the date each case was executed."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Evaluation requires knowing what was actually tested. Pinning or otherwise identifying the agent configuration prevents an evolving default from contaminating the comparison.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
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
    "conceptKey": "define-happen-approval-cannot-obtained",
    "type": "multiple",
    "selectCount": 2,
    "body": "A headless production agent may propose actions that sometimes require human approval. There is no interactive terminal operator watching the process. Which TWO design choices are appropriate? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Automatically approve every action so the process never blocks."
      },
      {
        "id": "B",
        "body": "Define what should happen when approval cannot be obtained, such as deny or escalate."
      },
      {
        "id": "C",
        "body": "Provide an application-level approval path that can pause and decide on a concrete proposed action."
      },
      {
        "id": "D",
        "body": "Assume the runtime will always open a terminal prompt when approval is needed."
      },
      {
        "id": "E",
        "body": "Move the approval rule into generated prose after the action executes."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "A headless service needs an explicit programmatic approval and fallback path. Human-in-the-loop control must exist in the application flow before consequential execution, not depend on an unattended terminal.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/overview",
      "https://code.claude.com/docs/en/permissions"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-027",
    "domain": "agents-workflows",
    "objective": "D1.2",
    "conceptKey": "delegated-model-usage-request-level-cost",
    "type": "single",
    "selectCount": 1,
    "body": "A lead agent delegates research to several subagents. The team caps the cost of each user request, but its dashboard counts only the lead agent's visible response tokens. Why is that accounting insufficient?",
    "options": [
      {
        "id": "A",
        "body": "Subagents are free whenever their outputs are summarized."
      },
      {
        "id": "B",
        "body": "Include delegated model usage in the request-level cost budget."
      },
      {
        "id": "C",
        "body": "A budget applies only to the text displayed to the user."
      },
      {
        "id": "D",
        "body": "Only tool calls are billable in multi-agent systems."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Delegation isolates context but does not eliminate inference work. Production budgeting should include the model usage caused by the complete orchestration, not merely the lead agent's final prose.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence",
      "https://www.anthropic.com/engineering/building-effective-agents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-028",
    "domain": "agents-workflows",
    "objective": "D1.2",
    "conceptKey": "tool-failure-observation-agent-recover",
    "type": "single",
    "selectCount": 1,
    "body": "An agent calls a flaky read-only inventory tool. When the tool returns an explicit transient error, the agent currently invents an inventory value and continues. What should the system encourage instead?",
    "options": [
      {
        "id": "A",
        "body": "Remove the failed tool call from the history."
      },
      {
        "id": "B",
        "body": "Return the tool failure as an observation so the agent can recover appropriately."
      },
      {
        "id": "C",
        "body": "Convert transient failures into an empty normal result so the loop can continue without an error branch."
      },
      {
        "id": "D",
        "body": "Replace every tool error with an empty successful result."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Tool failures are part of the environment the agent must reason about. Hiding or fabricating results breaks the agent loop; exposing the failure enables an appropriate recovery strategy.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls",
      "https://platform.claude.com/docs/en/api/errors"
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
    "conceptKey": "intermediate-statement-intent-evidence-required",
    "type": "single",
    "selectCount": 1,
    "body": "During a repository task, the agent says, “I found the likely bug and will run the tests next.” The application immediately reports the task as successful. What is wrong with that completion rule?",
    "options": [
      {
        "id": "A",
        "body": "The application should report success as soon as the agent sounds confident."
      },
      {
        "id": "B",
        "body": "Agents should never communicate progress before completion."
      },
      {
        "id": "C",
        "body": "Any text emitted before a tool call is necessarily an error."
      },
      {
        "id": "D",
        "body": "An intermediate statement of intent is not evidence that the required action and verification finished."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Production agent completion should be tied to the run's actual completion and required verification, not to an intermediate natural-language statement that may precede further tool use.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/overview",
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
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
    "conceptKey": "maintain-authorized-customer-to-session-mapping-resume",
    "type": "single",
    "selectCount": 1,
    "body": "A support service runs many independent customer conversations. A returning customer must continue their own prior investigation, not whichever session happened to run most recently. What is the safest design?",
    "options": [
      {
        "id": "A",
        "body": "Maintain an authorized customer-to-session mapping and resume the specifically associated state."
      },
      {
        "id": "B",
        "body": "Let Claude infer the customer from unrelated conversation history."
      },
      {
        "id": "C",
        "body": "Use one shared session for every customer so context is easier to manage."
      },
      {
        "id": "D",
        "body": "Continue the most recently active session globally."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Session continuity in a multi-user service must be explicitly scoped to the authenticated user or task. A global 'most recent' session risks both incorrect context and cross-customer disclosure.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/overview",
      "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-034",
    "domain": "agents-workflows",
    "objective": "D1.3",
    "conceptKey": "isolated-branch-new-agent-context",
    "type": "single",
    "selectCount": 1,
    "body": "An analyst wants to explore a contrary hypothesis without losing the original line of investigation. Both paths should start from the same established evidence. What is the best conceptual approach?",
    "options": [
      {
        "id": "A",
        "body": "Run both hypotheses in the same undifferentiated context and accept whichever answer appears last."
      },
      {
        "id": "B",
        "body": "Delete the earlier evidence so the new hypothesis is not biased."
      },
      {
        "id": "C",
        "body": "Create an isolated branch or new agent context seeded with the relevant established state, while preserving the original."
      },
      {
        "id": "D",
        "body": "Overwrite the original history and rely on memory to reconstruct it later."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "When two lines of reasoning may diverge, isolating them preserves the original state and prevents one path from contaminating the other. The important principle is deliberate context branching, not a particular SDK method.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/context-windows",
      "https://www.anthropic.com/engineering/building-effective-agents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-035",
    "domain": "agents-workflows",
    "objective": "D1.3",
    "conceptKey": "shared-execution-environment-merely-model",
    "type": "single",
    "selectCount": 1,
    "body": "Two coding agents investigate different approaches in separate conversation contexts but write to the same checkout at the same time. Their edits interfere with one another. What did the architecture fail to isolate?",
    "options": [
      {
        "id": "A",
        "body": "The answer format, because JSON would prevent file conflicts."
      },
      {
        "id": "B",
        "body": "The prompt cache, because caching automatically merges files."
      },
      {
        "id": "C",
        "body": "The model family, because separate agents require different models."
      },
      {
        "id": "D",
        "body": "The shared execution environment, not merely the model context."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Separate conversational contexts do not automatically isolate external state such as a shared filesystem. Parallel agents that mutate the same resources need execution isolation or coordination as well as context isolation.",
    "sourceRefs": [
      "https://www.anthropic.com/engineering/building-effective-agents",
      "https://code.claude.com/docs/en/agent-sdk/overview"
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
    "conceptKey": "durable-preference-application-managed-state-associated",
    "type": "multiple",
    "selectCount": 2,
    "body": "A customer-support agent serves many customers. It should remember a customer's preferred contact method across future sessions, but one customer's information must never appear in another customer's conversation.\n\nWhich TWO design choices best satisfy the requirement? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Store the durable preference in application-managed state associated with the authenticated customer"
      },
      {
        "id": "B",
        "body": "Keep every customer's complete conversation permanently in one shared agent context"
      },
      {
        "id": "C",
        "body": "Retrieve only the relevant customer's stored preference when constructing that customer's active context"
      },
      {
        "id": "D",
        "body": "Put all customer preferences in the agent's global system prompt so they survive new sessions"
      },
      {
        "id": "E",
        "body": "Rely on the model to remember the preference after the original conversation is no longer supplied"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Durable information that must survive sessions should be persisted outside the transient model context. Its scope should match the entity it belongs to—in this case the authenticated customer—and only relevant state should be brought back into that customer's active context.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/context-windows"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-038",
    "domain": "agents-workflows",
    "objective": "D1.3",
    "conceptKey": "deliberate-checkpoint-versioned-recovery-point",
    "type": "single",
    "selectCount": 1,
    "body": "A coding agent makes a sequence of risky edits. The team wants a recoverable point before the refactor so it can restore known-good file state if later verification fails. Which pattern best supports that?",
    "options": [
      {
        "id": "A",
        "body": "Rely on the agent to remember the original files from conversation history."
      },
      {
        "id": "B",
        "body": "Increase the model's context window instead of recording file state."
      },
      {
        "id": "C",
        "body": "Wait until after a failure, then ask Claude to recreate the old files from memory."
      },
      {
        "id": "D",
        "body": "Create a deliberate checkpoint or versioned recovery point before the risky changes."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Recoverability should be represented in durable system state such as version control or a checkpoint, not in model memory. This lets verification failures trigger a controlled rollback.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-039",
    "domain": "agents-workflows",
    "objective": "D1.3",
    "conceptKey": "restoring-local-files-automatically-undo",
    "type": "single",
    "selectCount": 1,
    "body": "An agent edits configuration files and also sends an external notification. The team later restores the files to an earlier checkpoint. What must it still account for?",
    "options": [
      {
        "id": "A",
        "body": "Restoring local files does not automatically undo external side effects such as a notification already sent."
      },
      {
        "id": "B",
        "body": "The conversation history is necessarily deleted by the file rollback."
      },
      {
        "id": "C",
        "body": "Every external side effect is rewound whenever files are restored."
      },
      {
        "id": "D",
        "body": "The model provider automatically recalls all tool actions after a checkpoint restore."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Rollback scope matters. File-state recovery cannot be assumed to reverse independent external actions, so irreversible or compensating actions need their own controls.",
    "sourceRefs": [
      "https://www.anthropic.com/engineering/building-effective-agents"
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
    "conceptKey": "establish-authoritative-definition-effective-source",
    "type": "single",
    "selectCount": 1,
    "body": "A team defines the same specialist agent in two places with different instructions. Engineers cannot reliably tell which definition a deployment is using. What is the best configuration-management fix?",
    "options": [
      {
        "id": "A",
        "body": "Increase the model's reasoning effort so configuration ambiguity no longer matters."
      },
      {
        "id": "B",
        "body": "Establish one authoritative definition or make the effective source explicit and versioned."
      },
      {
        "id": "C",
        "body": "Add a third copy so at least one is likely to be correct."
      },
      {
        "id": "D",
        "body": "Keep both divergent definitions and let whichever loads first win."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Agent behavior should be reproducible. Multiple divergent sources of truth create hidden configuration drift; consolidating or explicitly versioning the effective definition makes evaluation and deployment defensible.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/settings",
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-043",
    "domain": "agents-workflows",
    "objective": "D1.3",
    "conceptKey": "verified-progress-unresolved-work-discovered",
    "type": "single",
    "selectCount": 1,
    "body": "A long-running agent will continue tomorrow in a fresh runtime. It has completed three of eight required tasks and discovered a constraint that affects the remaining work. What should be persisted for the handoff?",
    "options": [
      {
        "id": "A",
        "body": "Only the final sentence the agent generated today."
      },
      {
        "id": "B",
        "body": "Nothing; a fresh agent can infer all prior progress from the original goal."
      },
      {
        "id": "C",
        "body": "The verified progress, unresolved work, and the discovered constraint in durable application state."
      },
      {
        "id": "D",
        "body": "Only the model name and temperature."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Long-running work needs durable task state when active context or runtime state will disappear. Persisting verified progress and unresolved constraints preserves continuity without retaining every raw interaction.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/context-windows"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-044",
    "domain": "agents-workflows",
    "objective": "D1.3",
    "conceptKey": "relevant-current-state-repository-service",
    "type": "multiple",
    "selectCount": 2,
    "body": "A fresh agent resumes a multi-day implementation from a durable handoff. Which TWO checks help it avoid building on stale assumptions? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Verify relevant current state, such as the repository or service condition, before taking dependent actions."
      },
      {
        "id": "B",
        "body": "Read the persisted task state and remaining constraints."
      },
      {
        "id": "C",
        "body": "Mark every previously attempted task complete without verification."
      },
      {
        "id": "D",
        "body": "Discard all handoff information and restart discovery from zero."
      },
      {
        "id": "E",
        "body": "Assume the handoff proves the current external environment is unchanged."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "A durable handoff explains intended state, while a fresh observation verifies the environment still matches it. Both are needed when work spans sessions and external state may have changed.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/context-windows",
      "https://www.anthropic.com/engineering/building-effective-agents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-045",
    "domain": "agents-workflows",
    "objective": "D1.3",
    "conceptKey": "evidence-changing-completion-status-keeping",
    "type": "single",
    "selectCount": 1,
    "body": "An agent tracks a multi-step migration against an approved acceptance checklist. To make progress reporting trustworthy, which rule should the application enforce?",
    "options": [
      {
        "id": "A",
        "body": "The checklist should contain only the steps already finished."
      },
      {
        "id": "B",
        "body": "A successful model response automatically marks every checklist item complete."
      },
      {
        "id": "C",
        "body": "Require evidence before changing completion status, while keeping approved requirements fixed."
      },
      {
        "id": "D",
        "body": "The agent may remove any requirement it finds difficult."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Durable task tracking is useful only if the success criteria remain stable. Progress should update from evidence rather than by redefining the target.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-046",
    "domain": "agents-workflows",
    "objective": "D1.3",
    "conceptKey": "unresolved-uncertainties-affect-parent-next",
    "type": "multiple",
    "selectCount": 2,
    "body": "A parent agent delegates a large repository investigation to a subagent. The parent needs to continue efficiently after the worker finishes. Which TWO handoff properties are most useful? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Include unresolved uncertainties that could affect the parent's next decision."
      },
      {
        "id": "B",
        "body": "Return the decision-relevant findings and evidence rather than every raw file read."
      },
      {
        "id": "C",
        "body": "Copy the worker's entire context into the parent regardless of relevance."
      },
      {
        "id": "D",
        "body": "Hide all caveats so the handoff is shorter."
      },
      {
        "id": "E",
        "body": "Return only 'done' with no findings."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Subagents help context management when they compress substantial work into relevant findings while preserving important uncertainty. Dumping the entire worker context defeats the isolation benefit.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/context-windows",
      "https://www.anthropic.com/engineering/building-effective-agents"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-047",
    "domain": "agents-workflows",
    "objective": "D1.3",
    "conceptKey": "preserve-decision-relevant-constraints-needed-continue",
    "type": "single",
    "selectCount": 1,
    "body": "A long-running agent must compact old conversation history. One old message contains an unresolved legal constraint needed later. What should the compaction process optimize for?",
    "options": [
      {
        "id": "A",
        "body": "Keeping only the most recent message."
      },
      {
        "id": "B",
        "body": "Preserve decision-relevant constraints needed to continue the task."
      },
      {
        "id": "C",
        "body": "Keeping every raw token forever so no summarization is ever needed."
      },
      {
        "id": "D",
        "body": "Minimizing summary length regardless of lost requirements."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Context compaction is useful only if it preserves the information required to continue the task. Relevant constraints outrank maximum compression.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/context-windows"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-048",
    "domain": "agents-workflows",
    "objective": "D1.3",
    "conceptKey": "bound-concurrent-delegated-work-run-level",
    "type": "multiple",
    "selectCount": 2,
    "body": "A lead agent can launch many independent workers, but the deployment has a strict cost ceiling and limited external API capacity. Which TWO controls should the orchestration layer provide? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "A bound on concurrent delegated work."
      },
      {
        "id": "B",
        "body": "A rule that every worker must use the most expensive model."
      },
      {
        "id": "C",
        "body": "A run-level budget or stopping condition tied to the product limits."
      },
      {
        "id": "D",
        "body": "A larger final answer token limit as the only control."
      },
      {
        "id": "E",
        "body": "Unlimited worker creation because parallelism always lowers total cost."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Parallel agents can improve elapsed time but also multiply model and tool usage. Concurrency limits and explicit budgets bound resource consumption independently of model enthusiasm.",
    "sourceRefs": [
      "https://www.anthropic.com/engineering/building-effective-agents",
      "https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AW-049",
    "domain": "agents-workflows",
    "objective": "D1.3",
    "conceptKey": "scoped-access-specialist-detailed-state",
    "type": "single",
    "selectCount": 1,
    "body": "A specialist subagent completed a deep investigation and produced a concise summary. Later, a follow-up question depends on details that were not included in that summary. What is the best design if such follow-ups are an expected requirement?",
    "options": [
      {
        "id": "A",
        "body": "Assume the parent model permanently remembers details it never received."
      },
      {
        "id": "B",
        "body": "Retain scoped access to the specialist's detailed state for expected follow-ups."
      },
      {
        "id": "C",
        "body": "Put every specialist's full history into every future parent request."
      },
      {
        "id": "D",
        "body": "Discard the specialist state and rerun only the final summary prompt when a detailed follow-up arrives."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Summaries are efficient but lossy. If detailed follow-ups are part of the product, the architecture needs durable, scoped access to the relevant specialist state without bloating every parent context.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/context-windows",
      "https://code.claude.com/docs/en/agent-sdk/overview"
    ],
    "qualityStatus": "APPROVED"
  }
];
