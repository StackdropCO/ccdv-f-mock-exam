// Generated from centrally reviewed authoring records. See scripts/build-question-bank.mjs.
import type { BankQuestion } from "../../bankTypes";
export const securitySafety: BankQuestion[] = [
  {
    "id": "SS-001",
    "domain": "security-safety",
    "objective": "D7.1",
    "conceptKey": "injection-third-party-tool-result-channel",
    "type": "single",
    "selectCount": 1,
    "body": "A fetch tool retrieves a third-party page. The integration currently inserts its text into the next system prompt for convenience. Which change follows current Anthropic guidance for this untrusted content?",
    "options": [
      {
        "id": "A",
        "body": "Return it in the associated `tool_result`, with its source identified"
      },
      {
        "id": "B",
        "body": "Keep it in system but put it after the trusted policy"
      },
      {
        "id": "C",
        "body": "Treat it as a new user instruction because the user requested the fetch"
      },
      {
        "id": "D",
        "body": "Append it as an assistant assertion without attribution"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Third-party retrieved content belongs in tool results with clear provenance. Fetching content on a user's behalf does not make its embedded instructions trusted.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "SS-002",
    "domain": "security-safety",
    "objective": "D7.1",
    "conceptKey": "injection-trusted-followup-not-tool-result",
    "type": "single",
    "selectCount": 1,
    "body": "After returning a retrieved email, the application needs to instruct Claude to summarize only the sender's scheduling request. It places that instruction inside the tool-result body, and Claude treats it as suspicious email text. What is the documented correction?",
    "options": [
      {
        "id": "A",
        "body": "Mark the entire email as a system instruction"
      },
      {
        "id": "B",
        "body": "Send the application's follow-up instruction in a user turn following the tool result"
      },
      {
        "id": "C",
        "body": "Remove the instruction and execute every request in the email"
      },
      {
        "id": "D",
        "body": "Place the instruction inside the email's quoted footer"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Keep application instructions separate from tool-returned data. Anthropic recommends a following user turn for such instructions rather than hiding them in an untrusted result.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "SS-003",
    "domain": "security-safety",
    "objective": "D7.1",
    "conceptKey": "mcp-oauth-url-opening-not-shell-execution",
    "type": "multiple",
    "selectCount": 2,
    "body": "A desktop MCP client opens an authorization URL received from a server by interpolating it into a shell command. The deployment is production, and an attacker-controlled URL could contain a dangerous scheme or shell syntax. Select TWO changes required by MCP security guidance.",
    "options": [
      {
        "id": "A",
        "body": "Validate the URL and allow only the production HTTPS authorization scheme"
      },
      {
        "id": "B",
        "body": "Assume any server-supplied string is safe if the tool list loaded correctly"
      },
      {
        "id": "C",
        "body": "Reject only the one malicious hostname observed in testing"
      },
      {
        "id": "D",
        "body": "Use a platform-specific non-shell URL-opening mechanism"
      },
      {
        "id": "E",
        "body": "Log the command after executing it instead of validating the URL"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Validate authorization URLs before opening them and avoid shell execution for that operation. These controls address dangerous schemes and shell interpretation at separate boundaries.",
    "sourceRefs": [
      "https://modelcontextprotocol.io/docs/2025-11-25/tutorials/security/security_best_practices"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "SS-004",
    "domain": "security-safety",
    "objective": "D7.1",
    "conceptKey": "injection-threat-model-third-party-origin",
    "type": "single",
    "selectCount": 1,
    "body": "A legitimate user asks an assistant to summarize a received invoice. The invoice's OCR text tells the assistant to export unrelated customer records. Which threat model fits the attack origin?",
    "options": [
      {
        "id": "A",
        "body": "A direct jailbreak by the legitimate user"
      },
      {
        "id": "B",
        "body": "An authorized user request because it appeared in a document the user submitted"
      },
      {
        "id": "C",
        "body": "Ordinary invoice data that becomes trusted merely because OCR extracted it"
      },
      {
        "id": "D",
        "body": "Indirect prompt injection through third-party content"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The adversarial instruction comes from content processed on the trusted user's behalf. That is indirect prompt injection.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "SS-005",
    "domain": "security-safety",
    "objective": "D7.1",
    "conceptKey": "prompt-leak-unneeded-proprietary-context",
    "type": "single",
    "selectCount": 1,
    "body": "A support summarizer's system prompt includes an internal pricing formula that the task never uses. A new requirement is to reduce the chance that this formula appears in output. Which change removes the unnecessary exposure at its source?",
    "options": [
      {
        "id": "A",
        "body": "Remove the formula from the model context"
      },
      {
        "id": "B",
        "body": "Keep it but repeat never reveal it more often"
      },
      {
        "id": "C",
        "body": "Move it from system to the user message"
      },
      {
        "id": "D",
        "body": "Ask Claude to paraphrase the formula if questioned"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Do not include proprietary details the task does not need. Moving or warning about unnecessary sensitive content still leaves it available to leak.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-prompt-leak"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "SS-006",
    "domain": "security-safety",
    "objective": "D7.1",
    "conceptKey": "structured-output-phi-schema-separation",
    "type": "single",
    "selectCount": 1,
    "body": "A healthcare extraction application has an approved arrangement for protected message content. It proposes embedding a patient name directly as a JSON Schema property name. Which change follows Anthropic's structured-output data-handling guidance?",
    "options": [
      {
        "id": "A",
        "body": "Move the patient name into a schema enum instead"
      },
      {
        "id": "B",
        "body": "Use generic schema fields and keep patient-specific data in permitted message content"
      },
      {
        "id": "C",
        "body": "Put the name into the schema regex pattern"
      },
      {
        "id": "D",
        "body": "Assume every schema artifact receives the same PHI protections as messages"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Use generic schema definitions and keep PHI out of property names, enums, constants, and patterns. Compiled schemas are cached separately from message content.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/structured-outputs"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "SS-007",
    "domain": "security-safety",
    "objective": "D7.1",
    "conceptKey": "mcp-oauth-discovery-redirect-ssrf",
    "type": "single",
    "selectCount": 1,
    "body": "An internet-facing MCP client blocks private addresses in the initial OAuth discovery URL but blindly follows redirects. A public URL redirects to a cloud metadata address. Which correction closes the described gap?",
    "options": [
      {
        "id": "A",
        "body": "Accept the redirect because the original hostname passed validation"
      },
      {
        "id": "B",
        "body": "Validate only that the redirect status and Location header are syntactically correct"
      },
      {
        "id": "C",
        "body": "Apply destination restrictions to every redirect target before fetching it"
      },
      {
        "id": "D",
        "body": "Ask the language model whether the redirected page looks safe after fetching it"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "SSRF protections must cover redirect destinations as well as the first URL. Validation after fetching is too late to prevent access to the forbidden endpoint.",
    "sourceRefs": [
      "https://modelcontextprotocol.io/docs/2025-11-25/tutorials/security/security_best_practices"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "SS-008",
    "domain": "security-safety",
    "objective": "D7.1",
    "conceptKey": "mcp-session-id-not-authentication",
    "type": "single",
    "selectCount": 1,
    "body": "An HTTP MCP server authenticates the first request, then accepts later requests solely because they include an existing session ID. What security requirement is missing?",
    "options": [
      {
        "id": "A",
        "body": "A rule allowing any request with a long random session ID without token verification"
      },
      {
        "id": "B",
        "body": "A policy to rotate session IDs without verifying later requests"
      },
      {
        "id": "C",
        "body": "A check that the requested session is present in the session store"
      },
      {
        "id": "D",
        "body": "Authorization checks on inbound requests rather than using the session ID as authentication"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "MCP sessions must not serve as authentication. Servers implementing authorization must verify inbound requests, even when a valid session ID is present.",
    "sourceRefs": [
      "https://modelcontextprotocol.io/docs/2025-11-25/tutorials/security/security_best_practices"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "SS-009",
    "domain": "security-safety",
    "objective": "D7.1",
    "conceptKey": "mcp-local-install-exact-command-consent",
    "type": "multiple",
    "selectCount": 2,
    "body": "A client offers one-click setup for a local MCP server. The UI shows only a friendly server name and silently executes a startup command with arguments. Select TWO changes required by the documented pre-configuration consent guidance.",
    "options": [
      {
        "id": "A",
        "body": "Show the exact untruncated command and arguments before execution"
      },
      {
        "id": "B",
        "body": "Treat the friendly name as proof of publisher identity"
      },
      {
        "id": "C",
        "body": "Execute first and show a completion notification as consent"
      },
      {
        "id": "D",
        "body": "Require explicit approval and permit cancellation before executing"
      },
      {
        "id": "E",
        "body": "Hide shell arguments to reduce user anxiety"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Local MCP setup executes code on the user's machine. The consent flow must show the actual command and obtain approval before it runs.",
    "sourceRefs": [
      "https://modelcontextprotocol.io/docs/2025-11-25/tutorials/security/security_best_practices"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "SS-010",
    "domain": "security-safety",
    "objective": "D7.1",
    "conceptKey": "mcp-authenticated-user-session-queue-binding",
    "type": "single",
    "selectCount": 1,
    "body": "A multi-user MCP service shares an event queue. Authorization is checked, but queue entries are keyed only by session ID. The service wants to prevent an event for one authorized user being attached to another user's session. What additional binding follows MCP guidance?",
    "options": [
      {
        "id": "A",
        "body": "Use a user ID supplied in the untrusted event body without verification"
      },
      {
        "id": "B",
        "body": "Associate queue/session data with both session ID and user identity derived from the authenticated token"
      },
      {
        "id": "C",
        "body": "Use only a hash of session ID as the queue key"
      },
      {
        "id": "D",
        "body": "Associate events with the user name written in the event text"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Bind session data to authenticated user-specific information as well as the session ID. The identity must come from verified authorization, not attacker-controlled event text.",
    "sourceRefs": [
      "https://modelcontextprotocol.io/docs/2025-11-25/tutorials/security/security_best_practices"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "SS-011",
    "domain": "security-safety",
    "objective": "D7.2",
    "conceptKey": "guardrail-screen-tool-content-before-main-agent",
    "type": "multiple",
    "selectCount": 2,
    "body": "An assistant screens user inputs, but an injection test succeeds through a fetched document. Select TWO changes that apply the documented screening pattern to this missing entry point.",
    "options": [
      {
        "id": "A",
        "body": "Run the document through an injection screen before returning its raw content to the main agent"
      },
      {
        "id": "B",
        "body": "Screen only the main agent's final answer after all tools have run"
      },
      {
        "id": "C",
        "body": "On a flagged result, return an error or safe stripped summary instead of the raw attack text"
      },
      {
        "id": "D",
        "body": "Allow flagged documents whenever the requesting user is trusted"
      },
      {
        "id": "E",
        "body": "Move the fetched document into system instructions"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Screen tool outputs before the main agent acts on them. Flagged content can be replaced with an error or stripped summary while preserving the untrusted tool-result boundary.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "SS-012",
    "domain": "security-safety",
    "objective": "D7.2",
    "conceptKey": "guardrail-redteam-end-to-end-confirmation",
    "type": "multiple",
    "selectCount": 2,
    "body": "Before enabling a document-processing agent's write tool, a team has tested only benign summaries. It wants evidence that malicious documents cannot redirect that write path. Select TWO checks directly relevant to that goal.",
    "options": [
      {
        "id": "A",
        "body": "Verify only that benign summaries have good grammar"
      },
      {
        "id": "B",
        "body": "Run end-to-end cases with deliberately malicious document/tool content"
      },
      {
        "id": "C",
        "body": "Treat a model benchmark score as proof the application guardrails work"
      },
      {
        "id": "D",
        "body": "Verify that screening and action-confirmation controls intercept attempted unauthorized writes"
      },
      {
        "id": "E",
        "body": "Skip the tool execution path and inspect only the system prompt"
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "Test attacks through the actual content path and verify that the surrounding controls stop unauthorized actions. A strong model or a sound-looking prompt does not test application enforcement.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "SS-013",
    "domain": "security-safety",
    "objective": "D7.2",
    "conceptKey": "sandbox-filesystem-and-network-complementarity",
    "type": "multiple",
    "selectCount": 2,
    "body": "A sandboxed Bash agent is allowed to read sensitive local files but is network-restricted; another design restricts files but allows arbitrary outbound network. The team seeks the documented stronger containment boundary. Select TWO dimensions it should configure together.",
    "options": [
      {
        "id": "A",
        "body": "Filesystem access restrictions"
      },
      {
        "id": "B",
        "body": "A permission prompt for the initial command with no restrictions on child-process access"
      },
      {
        "id": "C",
        "body": "A final output filter that runs after the process exits"
      },
      {
        "id": "D",
        "body": "A log of tool descriptions approved at startup"
      },
      {
        "id": "E",
        "body": "Network access restrictions"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Effective sandboxing needs both filesystem and network isolation. Each limits a different route by which a compromised process could expose data or alter resources.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/sandboxing"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "SS-014",
    "domain": "security-safety",
    "objective": "D7.2",
    "conceptKey": "sandbox-process-enforcement-versus-command-review",
    "type": "single",
    "selectCount": 1,
    "body": "An approved Bash command starts a child process that attempts an unexpected file write. The requirement is to block access outside the permitted filesystem boundary even if the command review misses the behavior. Which layer enforces that while the process runs?",
    "options": [
      {
        "id": "A",
        "body": "A tool description that says read-only"
      },
      {
        "id": "B",
        "body": "A natural-language explanation of the command before approval"
      },
      {
        "id": "C",
        "body": "An enabled, appropriately configured OS-enforced sandbox for the command and children"
      },
      {
        "id": "D",
        "body": "A final response filter after execution"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Sandbox boundaries constrain the running Bash process and child processes at the operating-system level. Pre-execution review and output filtering do not enforce that runtime boundary.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/sandboxing"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "SS-015",
    "domain": "security-safety",
    "objective": "D7.2",
    "conceptKey": "guardrail-sandbox-scope-not-all-tools",
    "type": "single",
    "selectCount": 1,
    "body": "A reviewer claims enabling Claude Code's sandboxed Bash tool automatically applies that same OS boundary to every separately hosted MCP server. What should the team conclude?",
    "options": [
      {
        "id": "A",
        "body": "The claim is valid whenever the remote server exposes the same tool names as local Bash utilities"
      },
      {
        "id": "B",
        "body": "The claim is valid if each remote tool has a strict input schema"
      },
      {
        "id": "C",
        "body": "Remote servers inherit the local filesystem allowlist through the MCP handshake"
      },
      {
        "id": "D",
        "body": "Bash sandboxing covers Bash commands and their children; other tool runtimes need their own applicable controls"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The documented Bash sandbox scope is Bash and its child processes. Do not assume that independently running or remote tool servers inherit that boundary.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/sandboxing"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "SS-016",
    "domain": "security-safety",
    "objective": "D7.2",
    "conceptKey": "guardrail-leak-controls-evaluate-quality-tradeoff",
    "type": "multiple",
    "selectCount": 2,
    "body": "A long anti-leak prompt reduces a chatbot's task accuracy in an evaluation. The protected proprietary detail is necessary to this task, so simply removing it is not an option. Select TWO actions supported by Anthropic's guidance.",
    "options": [
      {
        "id": "A",
        "body": "Add still more defensive instructions without measuring their effects"
      },
      {
        "id": "B",
        "body": "Evaluate simpler leak controls against both leak risk and task performance"
      },
      {
        "id": "C",
        "body": "Assume any leak-resistant wording is foolproof"
      },
      {
        "id": "D",
        "body": "Try output screening or post-processing and measure its effectiveness"
      },
      {
        "id": "E",
        "body": "Remove all task evaluation because security prompts cannot affect quality"
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "Leak prevention can increase prompt complexity and degrade task performance. Evaluate simpler controls, including output screening, against both objectives.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-prompt-leak"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "SS-017",
    "domain": "security-safety",
    "objective": "D7.2",
    "conceptKey": "guardrail-monitor-new-injection-patterns",
    "type": "single",
    "selectCount": 1,
    "body": "A deployed agent passed its original injection tests, but monitoring now shows a new attack pattern reaching tool outputs. Which response follows the documented ongoing guardrail process?",
    "options": [
      {
        "id": "A",
        "body": "Analyze the observed failures and refine validation, filtering, and relevant regression cases"
      },
      {
        "id": "B",
        "body": "Disable monitoring because the original tests passed"
      },
      {
        "id": "C",
        "body": "Rely on the old test result until the next scheduled model release"
      },
      {
        "id": "D",
        "body": "Increase tool privileges so the agent can investigate without restrictions"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Guardrails need ongoing monitoring and iteration. New observed attack patterns should inform validation, filtering, and tests.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "SS-018",
    "domain": "security-safety",
    "objective": "D7.3",
    "conceptKey": "hooks-pretool-matcher-does-not-cover-direct-reference",
    "type": "single",
    "selectCount": 1,
    "body": "A Claude Code hook matching `PreToolUse` for `Read` blocks selected sensitive paths. A user includes one of those files through an `@` reference in the prompt, and the hook never fires. Which control addresses this documented bypass of the hook path?",
    "options": [
      {
        "id": "A",
        "body": "Move the same hook to `PostToolUse`"
      },
      {
        "id": "B",
        "body": "Add a `Read` deny rule for the protected paths"
      },
      {
        "id": "C",
        "body": "Add a longer explanation to the `Read` hook output"
      },
      {
        "id": "D",
        "body": "Match only `Bash` instead of `Read`"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Prompt `@` references add file content without a tool call, so `PreToolUse` does not run. The hooks reference directs users to `Read` deny rules for blocking those paths.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/hooks"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "SS-019",
    "domain": "security-safety",
    "objective": "D7.3",
    "conceptKey": "hooks-conflicting-pretool-decisions-deny-wins",
    "type": "single",
    "selectCount": 1,
    "body": "Two `PreToolUse` hooks match the same valid tool call. One returns `permissionDecision: \"allow\"`; the other returns `permissionDecision: \"deny\"`. What is the documented outcome?",
    "options": [
      {
        "id": "A",
        "body": "The call runs because at least one hook allows it"
      },
      {
        "id": "B",
        "body": "The last hook to finish always wins"
      },
      {
        "id": "C",
        "body": "The deny decision takes precedence and blocks the call"
      },
      {
        "id": "D",
        "body": "The decisions are ignored unless Claude agrees"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "When matching PreToolUse hooks disagree, deny takes precedence over allow. The policy does not depend on which hook finishes last.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/hooks"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "SS-020",
    "domain": "security-safety",
    "objective": "D7.4",
    "conceptKey": "credential-browser-flag-not-secret-protection",
    "type": "single",
    "selectCount": 1,
    "body": "A public web app embeds an organization API key in downloaded JavaScript and enables the TypeScript SDK's `dangerouslyAllowBrowser` option. What security property does that option provide?",
    "options": [
      {
        "id": "A",
        "body": "It encrypts the embedded key so users cannot recover it"
      },
      {
        "id": "B",
        "body": "It binds the key to the page's domain"
      },
      {
        "id": "C",
        "body": "It converts the key into a non-secret public identifier"
      },
      {
        "id": "D",
        "body": "It permits browser use but does not protect the exposed secret; keep organization credentials in trusted server-side infrastructure"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The SDK disables browser use by default to avoid secret exposure. Enabling it does not turn a secret organization API key into a safe public credential.",
    "sourceRefs": [
      "https://github.com/anthropics/anthropic-sdk-typescript"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "SS-021",
    "domain": "security-safety",
    "objective": "D7.4",
    "conceptKey": "credential-support-ticket-no-secret-sharing",
    "type": "single",
    "selectCount": 1,
    "body": "An engineer is preparing a Claude API support ticket containing a request ID, redacted error details, and the full production API key. Support has not requested the key. Which part should be removed to follow Anthropic's published key guidance?",
    "options": [
      {
        "id": "A",
        "body": "The full API key"
      },
      {
        "id": "B",
        "body": "Every error code"
      },
      {
        "id": "C",
        "body": "The request ID even if it contains no secret"
      },
      {
        "id": "D",
        "body": "The timestamp even if it contains no secret"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Never include the API key in support tickets, including tickets to Anthropic. Non-secret diagnostic identifiers can describe the issue without exposing the credential.",
    "sourceRefs": [
      "https://support.claude.com/en/articles/9767949-api-key-best-practices-keeping-your-keys-safe-and-secure"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "SS-022",
    "domain": "security-safety",
    "objective": "D7.4",
    "conceptKey": "mcp-access-token-audience-separation",
    "type": "single",
    "selectCount": 1,
    "body": "An MCP server receives a valid access token intended only for a different downstream API. The developer proposes accepting it and forwarding it unchanged. Under MCP authorization specification 2025-11-25, what should happen?",
    "options": [
      {
        "id": "A",
        "body": "Accept it because a valid signature is sufficient for every service"
      },
      {
        "id": "B",
        "body": "Reject it as an MCP credential unless it was issued for this server; use separate appropriately issued downstream credentials"
      },
      {
        "id": "C",
        "body": "Accept it if Claude confirms the user intent"
      },
      {
        "id": "D",
        "body": "Skip audience checks when both services use HTTPS"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The MCP server must validate that the token is intended for it. Token passthrough to a downstream API is prohibited; downstream access uses a separately issued token.",
    "sourceRefs": [
      "https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "SS-023",
    "domain": "security-safety",
    "objective": "D7.4",
    "conceptKey": "credential-secret-injection-and-ignore",
    "type": "multiple",
    "selectCount": 2,
    "body": "A team is setting up a new Claude API service. No key has been exposed yet. Select TWO controls that follow Anthropic's storage guidance for local development and cloud deployment.",
    "options": [
      {
        "id": "A",
        "body": "Commit the local `.env` file so everyone gets the same key"
      },
      {
        "id": "B",
        "body": "Store the cloud key as plaintext in a shared deployment manifest"
      },
      {
        "id": "C",
        "body": "Exclude local dotenv secrets from source control"
      },
      {
        "id": "D",
        "body": "Use the cloud secret manager to inject the key into the service environment"
      },
      {
        "id": "E",
        "body": "Put the key in a prompt so the model can supply it to each request"
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Exclude local secret files from source control and use managed secret injection in cloud environments. This keeps credentials out of shared code and prompts.",
    "sourceRefs": [
      "https://support.claude.com/en/articles/9767949-api-key-best-practices-keeping-your-keys-safe-and-secure"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "SS-024",
    "domain": "security-safety",
    "objective": "D7.4",
    "conceptKey": "credential-usage-monitoring-detect-anomalies",
    "type": "single",
    "selectCount": 1,
    "body": "A service's application logs show normal traffic, but the team suspects its API key may be used outside that service. Which additional evidence source most directly addresses usage made with the key elsewhere?",
    "options": [
      {
        "id": "A",
        "body": "Only the application's own request counter"
      },
      {
        "id": "B",
        "body": "A review of source-code search results for the key, without inspecting API usage"
      },
      {
        "id": "C",
        "body": "A latency chart containing only requests routed through this application"
      },
      {
        "id": "D",
        "body": "The Console's API key usage patterns and logs"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Review API-side key usage and logs to detect activity not visible in one application's logs. Anthropic recommends regularly monitoring those patterns.",
    "sourceRefs": [
      "https://support.claude.com/en/articles/9767949-api-key-best-practices-keeping-your-keys-safe-and-secure"
    ],
    "qualityStatus": "APPROVED"
  }
];
