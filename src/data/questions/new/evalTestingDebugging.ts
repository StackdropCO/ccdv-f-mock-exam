// Generated from centrally reviewed authoring records. See scripts/build-question-bank.mjs.
import type { BankQuestion } from "../../bankTypes";
export const evalTestingDebugging: BankQuestion[] = [
  {
    "id": "ET-001",
    "domain": "eval-testing-debugging",
    "objective": "D4.1",
    "conceptKey": "stream-http-success-not-completion",
    "type": "single",
    "selectCount": 1,
    "body": "An integration records a streaming API call as successful as soon as HTTP 200 arrives. Later, the SSE stream reports an error and the user sees a partial answer. Which diagnosis is correct?",
    "options": [
      {
        "id": "A",
        "body": "Treat the HTTP success status as the sole completion criterion"
      },
      {
        "id": "B",
        "body": "Mark completion after the first content block starts"
      },
      {
        "id": "C",
        "body": "The integration conflates accepted stream headers with successful completion and must handle stream errors"
      },
      {
        "id": "D",
        "body": "Record success whenever any text was generated before the connection ended"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "An SSE error can occur after HTTP 200 has been returned. Success accounting must include the stream outcome instead of treating headers or a partial delta as completed generation.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/api/errors"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "ET-002",
    "domain": "eval-testing-debugging",
    "objective": "D4.1",
    "conceptKey": "error-request-id-correlation",
    "type": "multiple",
    "selectCount": 2,
    "body": "Support is investigating one failing direct Claude API request among thousands. They need its unique API correlation identifier and the service’s specific error category/detail, beyond the HTTP status alone. Which TWO response fields supply these? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "The HTTP status code alone as a unique request locator"
      },
      {
        "id": "B",
        "body": "The response request-id identifier"
      },
      {
        "id": "C",
        "body": "The model identifier alone as proof of the failure category"
      },
      {
        "id": "D",
        "body": "The structured error type and message"
      },
      {
        "id": "E",
        "body": "The retry attempt count alone as the service-side request identifier"
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "The request-id identifies the API request for support correlation, while the structured error type and message describe the failure category and details.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/api/errors"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "ET-003",
    "domain": "eval-testing-debugging",
    "objective": "D4.1",
    "conceptKey": "payload-bytes-versus-token-overflow",
    "type": "single",
    "selectCount": 1,
    "body": "A direct Messages request is rejected with 413 request_too_large before inference. The team proposes adjusting the prompt’s tone. What should it investigate instead?",
    "options": [
      {
        "id": "A",
        "body": "The serialized request’s byte size and the endpoint’s request-size limit"
      },
      {
        "id": "B",
        "body": "The remaining output-token budget, assuming 413 means generation exhausted it"
      },
      {
        "id": "C",
        "body": "The organization’s requests-per-minute quota, assuming 413 means throttling"
      },
      {
        "id": "D",
        "body": "The client’s response timeout, assuming the request failed while waiting for generation"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "A 413 request_too_large indicates that request bytes exceed the endpoint limit. Diagnose the payload size rather than model output or instruction style.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/api/errors"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "ET-004",
    "domain": "eval-testing-debugging",
    "objective": "D4.1",
    "conceptKey": "forward-compatible-enumeration",
    "type": "single",
    "selectCount": 1,
    "body": "An API error response adds a new error.type value. Your adapter uses an exhaustive lookup with no fallback and crashes before showing a recoverable failure to the user. Which change addresses the integration defect?",
    "options": [
      {
        "id": "A",
        "body": "Map every unfamiliar type to an authentication error and retry credentials"
      },
      {
        "id": "B",
        "body": "Assume the existing type enumeration is closed and keep the exhaustive lookup unchanged"
      },
      {
        "id": "C",
        "body": "Preserve the unknown type and message in a generic error path instead of crashing"
      },
      {
        "id": "D",
        "body": "Drop the error object and process the response as a successful completion"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The API’s error type values may expand over time. An integration should handle an unknown category through a safe generic error path while preserving its diagnostic information.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/api/errors"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "ET-005",
    "domain": "eval-testing-debugging",
    "objective": "D4.1",
    "conceptKey": "error-auth-permission-resource-isolation",
    "type": "multiple",
    "selectCount": 2,
    "body": "A valid API key can call one permitted resource, but a different requested resource returns 403 permission_error. Which TWO checks target the documented cause? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Treat the working key as expired and rotate it without checking resource access"
      },
      {
        "id": "B",
        "body": "Tune rate-limit backoff before checking any authorization settings"
      },
      {
        "id": "C",
        "body": "Check the key’s permission to the requested resource"
      },
      {
        "id": "D",
        "body": "Inspect the relevant organization and workspace access configuration"
      },
      {
        "id": "E",
        "body": "Debug only the generated output schema before inspecting resource authorization"
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "A 403 permission_error means the key lacks permission for the specified resource. Investigate resource authorization and organization/workspace access, rather than prompt generation behavior.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/api/errors"
    ],
    "qualityStatus": "APPROVED"
  }
];
