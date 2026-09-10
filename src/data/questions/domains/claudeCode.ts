// Generated from centrally reviewed authoring records. See scripts/build-question-bank.mjs.
import type { BankQuestion } from "../../bankTypes";
export const claudeCode: BankQuestion[] = [
  {
    "id": "CC-001",
    "domain": "claude-code",
    "objective": "D3.1",
    "conceptKey": "claude-md-nested-demand-loading",
    "type": "single",
    "selectCount": 1,
    "body": "A monorepo has root instructions and `packages/mobile/CLAUDE.md`. Claude Code starts at the root without reading mobile files yet. The developer expects the mobile instructions to load immediately solely because the file exists. Which explanation matches the documented hierarchy?",
    "options": [
      {
        "id": "A",
        "body": "Only the deepest CLAUDE.md is loaded and the root is discarded"
      },
      {
        "id": "B",
        "body": "Nested instructions replace every ancestor instruction at startup"
      },
      {
        "id": "C",
        "body": "Every CLAUDE.md anywhere on disk is loaded at startup"
      },
      {
        "id": "D",
        "body": "Ancestor instructions load at launch; nested instructions load as Claude reads files in those subdirectories"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Claude Code loads instructions above the working directory at launch and discovers nested instructions as work enters their directories. A nested file’s existence alone does not imply startup loading.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/memory"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "CC-002",
    "domain": "claude-code",
    "objective": "D3.1",
    "conceptKey": "repository-wide-conventions-apply-consistently-everyone",
    "type": "single",
    "selectCount": 1,
    "body": "A repository has coding conventions that every engineer and CI session should follow. One developer has useful personal notes learned from previous sessions. Which information belongs in the shared project context?",
    "options": [
      {
        "id": "A",
        "body": "The repository-wide conventions that should apply consistently to everyone."
      },
      {
        "id": "B",
        "body": "Every personal note from one developer's prior sessions."
      },
      {
        "id": "C",
        "body": "API secrets required by local tools."
      },
      {
        "id": "D",
        "body": "Nothing; Claude Code cannot load durable project instructions."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Shared project guidance belongs in versioned project context such as CLAUDE.md or scoped rules. Personal memory and secrets have different scopes and should not be promoted into shared instructions automatically.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/memory"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "CC-003",
    "domain": "claude-code",
    "objective": "D3.1",
    "conceptKey": "claude-code-scalar-settings-precedence",
    "type": "single",
    "selectCount": 1,
    "body": "For a documented scalar preference, the shared project settings file and the user settings file disagree. There is no managed, command-line, project-local, or environment override. Which value does Claude Code use?",
    "options": [
      {
        "id": "A",
        "body": "The shared project value"
      },
      {
        "id": "B",
        "body": "Whichever file was edited most recently"
      },
      {
        "id": "C",
        "body": "Both values alternately"
      },
      {
        "id": "D",
        "body": "The user value because personal configuration always wins"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Shared project settings take precedence over user settings for the same scalar key. The stem excludes higher levels and key-specific environment overrides.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/settings"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "CC-004",
    "domain": "claude-code",
    "objective": "D3.1",
    "conceptKey": "claude-code-programmatic-print-mode",
    "type": "single",
    "selectCount": 1,
    "body": "A CI job already supplies authentication and tool permissions. It needs Claude Code to process a prompt and exit without opening the interactive interface. Which command form fits?",
    "options": [
      {
        "id": "A",
        "body": "`claude` with no prompt or mode flags"
      },
      {
        "id": "B",
        "body": "`claude mcp list` followed by the prompt as a server name"
      },
      {
        "id": "C",
        "body": "`claude -p \"Summarize the test failures\"`"
      },
      {
        "id": "D",
        "body": "`claude --continue` with no non-interactive flag"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "`-p`/`--print` runs Claude Code non-interactively and returns output for a script. Authentication and permissions remain separate concerns.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/headless"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "CC-005",
    "domain": "claude-code",
    "objective": "D3.1",
    "conceptKey": "non-interactive-execution-path-plus-explicit",
    "type": "single",
    "selectCount": 1,
    "body": "A CI pipeline needs Claude Code to perform an analysis non-interactively and return machine-consumable output. No human will be present to answer permission prompts. What must the automation design establish?",
    "options": [
      {
        "id": "A",
        "body": "A non-interactive execution path plus explicit permissions for the tools the job may use."
      },
      {
        "id": "B",
        "body": "That every CI run opens the interactive terminal UI."
      },
      {
        "id": "C",
        "body": "Run with the same broad permissions used on a developer machine because CI has no interactive user."
      },
      {
        "id": "D",
        "body": "That prompts are converted into Message Batches before Claude Code can run."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Automation requires both a non-interactive invocation and a permission design suitable for unattended execution. Headless operation should not depend on a person being available to approve unexpected actions.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/permissions"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "CC-006",
    "domain": "claude-code",
    "objective": "D3.1",
    "conceptKey": "claude-inspect-repository-review-keep",
    "type": "single",
    "selectCount": 1,
    "body": "A new engineer opens a large unfamiliar repository with Claude Code. They want a useful project instruction file, but they do not yet know the repository's build and test conventions. What is the best way to create it?",
    "options": [
      {
        "id": "A",
        "body": "Have Claude inspect the repository, then review and keep concise instructions grounded in the actual project."
      },
      {
        "id": "B",
        "body": "Paste a generic CLAUDE.md from an unrelated repository unchanged."
      },
      {
        "id": "C",
        "body": "Put every source file into CLAUDE.md."
      },
      {
        "id": "D",
        "body": "Store the project's secrets in CLAUDE.md so tools can use them."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Durable project guidance should reflect the real repository and remain focused on useful conventions. Generic or oversized instructions create noise and can encode incorrect assumptions.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/memory"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "CC-007",
    "domain": "claude-code",
    "objective": "D3.1",
    "conceptKey": "explore-relevant-code-constraints-form",
    "type": "single",
    "selectCount": 1,
    "body": "Claude Code is asked to change a subsystem the developer has never worked with. The change is risky and the developer wants to understand the implementation before edits begin. Which working pattern fits best?",
    "options": [
      {
        "id": "A",
        "body": "Enable unrestricted permissions and edit immediately."
      },
      {
        "id": "B",
        "body": "Explore the relevant code and constraints, form a plan, then implement after the plan is reviewed."
      },
      {
        "id": "C",
        "body": "Make the changes first and only then decide what the requirements were."
      },
      {
        "id": "D",
        "body": "Skip repository inspection because the model can infer the architecture from the task name."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The explore-plan-code loop separates understanding from mutation. This is especially useful when the repository is unfamiliar or the cost of a wrong change is high.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/permissions"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "CC-008",
    "domain": "claude-code",
    "objective": "D3.1",
    "conceptKey": "eventual-test-outcome-merely-evidence",
    "type": "single",
    "selectCount": 1,
    "body": "Claude Code starts a long-running test command and continues with other work. Before telling the developer the task is finished, what evidence is needed?",
    "options": [
      {
        "id": "A",
        "body": "A second identical command launch."
      },
      {
        "id": "B",
        "body": "The eventual test outcome, not merely evidence that the command started."
      },
      {
        "id": "C",
        "body": "Only Claude's prediction that the tests should pass."
      },
      {
        "id": "D",
        "body": "Only the command's process identifier."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Launching work is not the same as verifying it. Claude-assisted development should base completion claims on observable results from the relevant checks.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "CC-009",
    "domain": "claude-code",
    "objective": "D3.1",
    "conceptKey": "whether-server-actually-connected-authenticated",
    "type": "single",
    "selectCount": 1,
    "body": "A project has an MCP server configured, but Claude Code cannot use the expected tools. Before rewriting prompts, what should the developer investigate?",
    "options": [
      {
        "id": "A",
        "body": "Whether the server is actually connected/authenticated and exposing the expected capabilities."
      },
      {
        "id": "B",
        "body": "Whether the system prompt contains the tool name at least ten times."
      },
      {
        "id": "C",
        "body": "Whether the selected model has a larger context window."
      },
      {
        "id": "D",
        "body": "Whether the repository has more than one branch."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Configuration presence does not prove a live, authorized MCP connection. Connection and capability health should be checked before treating a tool-availability problem as prompt failure.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/mcp"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "CC-010",
    "domain": "claude-code",
    "objective": "D3.1",
    "conceptKey": "evolve-workflow-skill-package-structure",
    "type": "single",
    "selectCount": 1,
    "body": "A team has a reusable `/review-release` workflow that began as a short custom command. It now needs supporting reference files, scripts, and clearer reusable documentation. What packaging direction best fits?",
    "options": [
      {
        "id": "A",
        "body": "Put it in managed permissions because permissions are workflow instructions."
      },
      {
        "id": "B",
        "body": "Move or evolve the workflow into a Skill/package structure designed to carry reusable instructions and supporting assets."
      },
      {
        "id": "C",
        "body": "Turn the workflow into an MCP server even though no new external capability is needed."
      },
      {
        "id": "D",
        "body": "Copy the full workflow into every user's prompt."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Skills are designed for reusable task expertise and can include supporting material. MCP is for external capabilities, while permissions enforce authority rather than describe a workflow.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/skills"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "CC-011",
    "domain": "claude-code",
    "objective": "D3.1",
    "conceptKey": "reproduce-task-clean-deliberately-reduced",
    "type": "multiple",
    "selectCount": 2,
    "body": "Claude Code starts behaving unexpectedly after several hooks, Skills, and plugins were added. Which TWO troubleshooting steps best isolate whether customization is the cause? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Reproduce the task with a clean or deliberately reduced customization set."
      },
      {
        "id": "B",
        "body": "Add more customizations before reproducing the failure."
      },
      {
        "id": "C",
        "body": "Change the model and every prompt at the same time."
      },
      {
        "id": "D",
        "body": "Re-enable components incrementally to identify which one changes behavior."
      },
      {
        "id": "E",
        "body": "Assume the newest plugin is responsible without testing."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Configuration problems are easier to diagnose by controlling variables. A clean comparison followed by incremental reintroduction isolates the component responsible without relying on a particular CLI flag.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/plugins",
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "CC-012",
    "domain": "claude-code",
    "objective": "D3.1",
    "conceptKey": "whether-intended-instruction-configuration-source",
    "type": "single",
    "selectCount": 1,
    "body": "A developer suspects that Claude Code is not following a repository rule. Before editing the rule itself, what should they establish?",
    "options": [
      {
        "id": "A",
        "body": "Rewrite the rule immediately and assume its current text must be the problem."
      },
      {
        "id": "B",
        "body": "Whether a different engineer's personal settings contain the same text."
      },
      {
        "id": "C",
        "body": "Whether the answer can be made longer."
      },
      {
        "id": "D",
        "body": "Whether the intended instruction/configuration source is actually being loaded for the current work."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "First distinguish a loading/scope problem from an instruction-quality problem. Editing text cannot fix guidance the active session never received.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/memory",
      "https://code.claude.com/docs/en/settings"
    ],
    "qualityStatus": "APPROVED"
  }
];
