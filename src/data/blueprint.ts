// Claude Certified Developer – Foundations, Exam Guide v1.0, effective July 2026.
// Domain/skill weights are copied directly from the official exam guide (Section 6, Exam
// Content Outline). `quota` is this app's per-mock item count per domain (largest-remainder
// allocation of 53 across the published weights); `target`/`newTarget` are this bank's total
// and new-item allocations per skill across a full seven-form rotation cycle. These allocation
// choices are this project's own editorial decisions, not part of the official guide.
export const BLUEPRINT = [
  {
    "id": "agents-workflows",
    "name": "Agents and Workflows",
    "weight": 14.7,
    "quota": 8,
    "objectives": [
      { "id": "D1.1", "name": "Agent Architecture", "weight": 4.5, "target": 17, "newTarget": 13 },
      { "id": "D1.2", "name": "Agent Construction with Claude", "weight": 5.3, "target": 20, "newTarget": 18 },
      { "id": "D1.3", "name": "Agent Patterns and Frameworks", "weight": 4.9, "target": 19, "newTarget": 18 }
    ]
  },
  {
    "id": "applications-integration",
    "name": "Applications and Integration",
    "weight": 33.1,
    "quota": 17,
    "objectives": [
      { "id": "D2.1", "name": "Understanding Requirements", "weight": 3.4, "target": 12, "newTarget": 11 },
      { "id": "D2.2", "name": "Systems Life Cycle", "weight": 2.8, "target": 10, "newTarget": 9 },
      { "id": "D2.3", "name": "Claude API Mechanics", "weight": 6.8, "target": 24, "newTarget": 19 },
      { "id": "D2.4", "name": "Software Engineering Foundations", "weight": 7.4, "target": 27, "newTarget": 25 },
      { "id": "D2.5", "name": "Claude Application Design", "weight": 8.6, "target": 31, "newTarget": 30 },
      { "id": "D2.6", "name": "Configuration Management", "weight": 4.1, "target": 15, "newTarget": 12 }
    ]
  },
  {
    "id": "claude-code",
    "name": "Claude Code",
    "weight": 3.1,
    "quota": 2,
    "objectives": [
      { "id": "D3.1", "name": "Claude Code Operation", "weight": 3.1, "target": 14, "newTarget": 12 }
    ]
  },
  {
    "id": "eval-testing-debugging",
    "name": "Eval, Testing, and Debugging",
    "weight": 2.6,
    "quota": 1,
    "objectives": [
      { "id": "D4.1", "name": "Debugging and Error Handling", "weight": 2.6, "target": 7, "newTarget": 5 }
    ]
  },
  {
    "id": "model-selection-optimization",
    "name": "Model Selection and Optimization",
    "weight": 16.8,
    "quota": 9,
    "objectives": [
      { "id": "D5.1", "name": "LLM Fundamentals", "weight": 5.2, "target": 19, "newTarget": 16 },
      { "id": "D5.2", "name": "Technical Fundamentals", "weight": 6.1, "target": 23, "newTarget": 20 },
      { "id": "D5.3", "name": "Model Selection and Tradeoffs", "weight": 2.7, "target": 10, "newTarget": 8 },
      { "id": "D5.4", "name": "Cost and Token Management", "weight": 2.8, "target": 11, "newTarget": 9 }
    ]
  },
  {
    "id": "prompt-context-engineering",
    "name": "Prompt and Context Engineering",
    "weight": 11,
    "quota": 6,
    "objectives": [
      { "id": "D6.1", "name": "Context Engineering", "weight": 3.8, "target": 14, "newTarget": 11 },
      { "id": "D6.2", "name": "Prompt Engineering", "weight": 4.6, "target": 18, "newTarget": 16 },
      { "id": "D6.3", "name": "Output Handling", "weight": 2.6, "target": 10, "newTarget": 8 }
    ]
  },
  {
    "id": "security-safety",
    "name": "Security and Safety",
    "weight": 8.1,
    "quota": 4,
    "objectives": [
      { "id": "D7.1", "name": "AI Application Security", "weight": 3.2, "target": 11, "newTarget": 10 },
      { "id": "D7.2", "name": "Guardrails and Safe Deployment", "weight": 2.3, "target": 8, "newTarget": 7 },
      { "id": "D7.3", "name": "Claude Hooks", "weight": 1, "target": 3, "newTarget": 2 },
      { "id": "D7.4", "name": "Identity, Secrets, and Key Management", "weight": 1.6, "target": 6, "newTarget": 5 }
    ]
  },
  {
    "id": "tools-mcp",
    "name": "Tools and MCPs",
    "weight": 10.6,
    "quota": 6,
    "objectives": [
      { "id": "D8.1", "name": "Tool Implementation", "weight": 4.4, "target": 17, "newTarget": 13 },
      { "id": "D8.2", "name": "MCP Server Development", "weight": 2.1, "target": 8, "newTarget": 6 },
      { "id": "D8.3", "name": "Agentic Customization", "weight": 4.1, "target": 17, "newTarget": 15 }
    ]
  }
] as const;


export type Domain = (typeof BLUEPRINT)[number]["id"];
export const FORM_SIZE = 53;
export const BANK_VERSION = "ccdv-f-bank-v2-2026-09";

// Production-friendly domain names for presentation (results/review), derived from the
// blueprint itself so there is exactly one source of truth for each domain's display name.
export const DOMAIN_LABEL: Record<Domain, string> = Object.fromEntries(
  BLUEPRINT.map((d) => [d.id, d.name])
) as Record<Domain, string>;

// Blueprint declaration order, used as a deterministic tie-breaker when sorting domains
// by performance (e.g. equal percentages).
export const DOMAIN_ORDER: Domain[] = BLUEPRINT.map((d) => d.id);
