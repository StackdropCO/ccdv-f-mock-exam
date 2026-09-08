// Exam Guide v1.0, July 2026. See research/EXAM_BLUEPRINT.md.
export const BLUEPRINT = [
  {
    "id": "agents-workflows",
    "quota": 8,
    "objectives": [
      {
        "id": "D1.1",
        "weight": 4.5
      },
      {
        "id": "D1.2",
        "weight": 5.3
      },
      {
        "id": "D1.3",
        "weight": 4.9
      }
    ]
  },
  {
    "id": "applications-integration",
    "quota": 17,
    "objectives": [
      {
        "id": "D2.1",
        "weight": 3.4
      },
      {
        "id": "D2.2",
        "weight": 2.8
      },
      {
        "id": "D2.3",
        "weight": 6.8
      },
      {
        "id": "D2.4",
        "weight": 7.4
      },
      {
        "id": "D2.5",
        "weight": 8.6
      },
      {
        "id": "D2.6",
        "weight": 4.1
      }
    ]
  },
  {
    "id": "claude-code",
    "quota": 2,
    "objectives": [
      {
        "id": "D3.1",
        "weight": 3.1
      }
    ]
  },
  {
    "id": "eval-testing-debugging",
    "quota": 1,
    "objectives": [
      {
        "id": "D4.1",
        "weight": 2.6
      }
    ]
  },
  {
    "id": "model-selection-optimization",
    "quota": 9,
    "objectives": [
      {
        "id": "D5.1",
        "weight": 5.2
      },
      {
        "id": "D5.2",
        "weight": 6.1
      },
      {
        "id": "D5.3",
        "weight": 2.7
      },
      {
        "id": "D5.4",
        "weight": 2.8
      }
    ]
  },
  {
    "id": "prompt-context-engineering",
    "quota": 6,
    "objectives": [
      {
        "id": "D6.1",
        "weight": 3.8
      },
      {
        "id": "D6.2",
        "weight": 4.6
      },
      {
        "id": "D6.3",
        "weight": 2.6
      }
    ]
  },
  {
    "id": "security-safety",
    "quota": 4,
    "objectives": [
      {
        "id": "D7.1",
        "weight": 3.2
      },
      {
        "id": "D7.2",
        "weight": 2.3
      },
      {
        "id": "D7.3",
        "weight": 1
      },
      {
        "id": "D7.4",
        "weight": 1.6
      }
    ]
  },
  {
    "id": "tools-mcp",
    "quota": 6,
    "objectives": [
      {
        "id": "D8.1",
        "weight": 4.4
      },
      {
        "id": "D8.2",
        "weight": 2.1
      },
      {
        "id": "D8.3",
        "weight": 4.1
      }
    ]
  }
] as const;

export type Domain = (typeof BLUEPRINT)[number]["id"];
export const FORM_SIZE = 53;
export const BANK_VERSION = "ccdv-f-bank-v2-2026-09";
