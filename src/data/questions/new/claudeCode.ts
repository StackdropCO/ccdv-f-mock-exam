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
    "conceptKey": "claude-code-auto-memory-versus-authored-instructions",
    "type": "single",
    "selectCount": 1,
    "body": "A developer disables Claude Code auto memory for a project to stop it accumulating its own notes. The repository still contains CLAUDE.md. What should they expect about that authored file?",
    "options": [
      {
        "id": "A",
        "body": "It is deleted when auto memory is disabled"
      },
      {
        "id": "B",
        "body": "It remains a separate source of authored instructions and can still load"
      },
      {
        "id": "C",
        "body": "It is converted into tool permissions automatically"
      },
      {
        "id": "D",
        "body": "It is ignored unless auto memory is enabled again"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Auto memory and authored CLAUDE.md instructions are separate mechanisms. Disabling automatic note-taking does not disable the instruction file.",
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
    "conceptKey": "claude-code-partial-output-streaming",
    "type": "single",
    "selectCount": 1,
    "body": "A monitoring process launches Claude Code in print mode and must consume incremental token events as JSON lines, not wait for one final JSON document. Which option combination matches the documented streaming example?",
    "options": [
      {
        "id": "A",
        "body": "`--output-format json` alone"
      },
      {
        "id": "B",
        "body": "`--output-format text --verbose`"
      },
      {
        "id": "C",
        "body": "`--output-format json --continue`"
      },
      {
        "id": "D",
        "body": "`--output-format stream-json --verbose --include-partial-messages`"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "`stream-json` yields event objects as JSON lines, and the partial-message option includes incremental generation events. A final JSON response does not provide that token-event stream.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/headless"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "CC-006",
    "domain": "claude-code",
    "objective": "D3.1",
    "conceptKey": "claude-code-init-existing-instructions",
    "type": "single",
    "selectCount": 1,
    "body": "A repository already contains a carefully edited CLAUDE.md. A developer wants Claude Code to inspect the repository and suggest improvements to that file through the built-in initialization workflow. Which statement is correct?",
    "options": [
      {
        "id": "A",
        "body": "`/init` ignores an existing CLAUDE.md and offers no improvements"
      },
      {
        "id": "B",
        "body": "`/init` can suggest improvements when CLAUDE.md already exists"
      },
      {
        "id": "C",
        "body": "`/init` updates settings.json only, never project instructions"
      },
      {
        "id": "D",
        "body": "The existing file must be deleted before initialization can run"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The initialization workflow can generate starting instructions or suggest improvements to existing ones. Deleting approved guidance first is unnecessary.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/memory"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "CC-007",
    "domain": "claude-code",
    "objective": "D3.1",
    "conceptKey": "claude-code-directory-reference-not-recursive-content",
    "type": "single",
    "selectCount": 1,
    "body": "A user types `Explain @src/components` in Claude Code and assumes every component’s full source was automatically included. What should they understand about directory references?",
    "options": [
      {
        "id": "A",
        "body": "They provide a directory listing; full file contents require file references or subsequent reads"
      },
      {
        "id": "B",
        "body": "They recursively include every file’s complete contents"
      },
      {
        "id": "C",
        "body": "They include the full contents of tracked files but omit untracked files"
      },
      {
        "id": "D",
        "body": "They include only the directory’s README contents, without a listing"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "A directory reference supplies a listing rather than recursively loading all source. Reference specific files or let Claude read them when their contents are needed.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/common-workflows"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "CC-008",
    "domain": "claude-code",
    "objective": "D3.1",
    "conceptKey": "claude-code-background-id-not-completion",
    "type": "single",
    "selectCount": 1,
    "body": "Claude Code starts a long test command in the background and immediately returns a task ID. A teammate interprets that ID as proof the tests passed. What must happen before reporting success?",
    "options": [
      {
        "id": "A",
        "body": "Treat any task ID as a zero exit status"
      },
      {
        "id": "B",
        "body": "Ignore the task because background commands cannot produce output"
      },
      {
        "id": "C",
        "body": "Check the task’s eventual completion and recorded output rather than equating launch with success"
      },
      {
        "id": "D",
        "body": "Start the same command again until two IDs match"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "A background task ID identifies work still running asynchronously. Its output and final outcome provide the evidence of success or failure.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/interactive-mode"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "CC-009",
    "domain": "claude-code",
    "objective": "D3.1",
    "conceptKey": "claude-code-mcp-config-versus-health",
    "type": "single",
    "selectCount": 1,
    "body": "`claude mcp add` prints that a server was added, but Claude cannot use its tools. The developer assumes the add message proves a live connection. Which next check directly tests that assumption?",
    "options": [
      {
        "id": "A",
        "body": "Edit the system prompt to insist on the tool before checking the server"
      },
      {
        "id": "B",
        "body": "Re-add the same configuration repeatedly until an add message changes"
      },
      {
        "id": "C",
        "body": "Move tool descriptions into the user prompt"
      },
      {
        "id": "D",
        "body": "Inspect connection status with `/mcp` or the documented MCP status commands"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The add message confirms configuration was written. Connection status can still reveal authentication or connectivity failures.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/mcp"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "CC-010",
    "domain": "claude-code",
    "objective": "D3.1",
    "conceptKey": "claude-code-legacy-commands-skills-compatibility",
    "type": "single",
    "selectCount": 1,
    "body": "A project already has `.claude/commands/check.md`, invoked as `/check`. A developer adopts the newer skill-directory format for other workflows. Must the existing command be deleted immediately?",
    "options": [
      {
        "id": "A",
        "body": "Yes; command Markdown files are rejected whenever any skill exists"
      },
      {
        "id": "B",
        "body": "No; existing command files still work, while skill directories add capabilities such as supporting files"
      },
      {
        "id": "C",
        "body": "Yes; custom commands can coexist only if every command becomes an MCP tool"
      },
      {
        "id": "D",
        "body": "No; because command files support every future skill frontmatter field identically"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Custom commands have been unified with skills, and the older command-file format remains supported. Migration can be driven by needed skill features.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/skills"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "CC-011",
    "domain": "claude-code",
    "objective": "D3.1",
    "conceptKey": "claude-code-safe-mode-customization-isolation",
    "type": "single",
    "selectCount": 1,
    "body": "Claude Code behaves unexpectedly after several customizations were installed. The developer wants a troubleshooting session with customizations disabled while normal authentication, built-in tools, and permissions still work. Which documented startup option serves that purpose?",
    "options": [
      {
        "id": "A",
        "body": "`--safe-mode`"
      },
      {
        "id": "B",
        "body": "`--dangerously-skip-permissions`"
      },
      {
        "id": "C",
        "body": "`--continue`"
      },
      {
        "id": "D",
        "body": "`--output-format json`"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Safe mode disables customizations for diagnosis while keeping core operation and permissions. Bypassing permission prompts would not isolate configuration problems.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/cli-reference"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "CC-012",
    "domain": "claude-code",
    "objective": "D3.1",
    "conceptKey": "claude-code-check-loaded-instructions",
    "type": "single",
    "selectCount": 1,
    "body": "A developer suspects the intended CLAUDE.md file did not load. They want to inspect the session’s loaded memory files before changing any instruction text. Which documented action provides that evidence?",
    "options": [
      {
        "id": "A",
        "body": "Use `/mcp` to list connected servers"
      },
      {
        "id": "B",
        "body": "Inspect only the files present on disk without examining session context"
      },
      {
        "id": "C",
        "body": "Run `/context` and inspect the Memory files listing"
      },
      {
        "id": "D",
        "body": "Check only the selected model and token limit"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The context view lists loaded memory files. Checking that list isolates loading problems before changing the content itself.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/memory"
    ],
    "qualityStatus": "APPROVED"
  }
];
