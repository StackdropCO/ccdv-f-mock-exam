// Generated from centrally reviewed authoring records. See scripts/build-question-bank.mjs.
import type { BankQuestion } from "../../bankTypes";
export const applicationsIntegration: BankQuestion[] = [
  {
    "id": "AI-001",
    "domain": "applications-integration",
    "objective": "D2.1",
    "conceptKey": "requirements-tail-latency",
    "type": "single",
    "selectCount": 1,
    "body": "A Claude support application must return a complete reply within three seconds for at least 95% of requests. A prototype reports only its mean response time. Which additional acceptance measurement directly tests the stated requirement?",
    "options": [
      {
        "id": "A",
        "body": "The longest response in one demonstration"
      },
      {
        "id": "B",
        "body": "The 95th percentile of complete-response latency on representative traffic"
      },
      {
        "id": "C",
        "body": "The number of API calls per day"
      },
      {
        "id": "D",
        "body": "The time until the first token for each request"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The requirement is about the distribution of complete-response latency. A 95th-percentile measurement tests that threshold; a mean or first-token measurement does not.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-002",
    "domain": "applications-integration",
    "objective": "D2.1",
    "conceptKey": "requirements-critical-subset",
    "type": "single",
    "selectCount": 1,
    "body": "A ticket classifier achieves 97% overall accuracy, but the business requirement is to miss at most 1% of urgent tickets. Urgent tickets make up only 2% of traffic. Which acceptance criterion must be measured directly?",
    "options": [
      {
        "id": "A",
        "body": "At least 97% accuracy on the full traffic mix"
      },
      {
        "id": "B",
        "body": "At most 1% of all traffic classified as urgent"
      },
      {
        "id": "C",
        "body": "At least 99% recall on genuinely urgent tickets"
      },
      {
        "id": "D",
        "body": "At least 99% precision among predictions labeled urgent"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Recall on the urgent subset measures how many genuine urgent cases are caught. Overall accuracy and precision answer different questions and can conceal missed urgent tickets.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-003",
    "domain": "applications-integration",
    "objective": "D2.1",
    "conceptKey": "requirements-deadline-batch",
    "type": "single",
    "selectCount": 1,
    "body": "A team proposes Message Batches for a user-triggered eligibility check. The contract requires a final decision within ten seconds for each request; the batch job would use the same model and prompt as the working realtime prototype. What requirement invalidates the proposal?",
    "options": [
      {
        "id": "A",
        "body": "The hard ten-second per-request decision deadline"
      },
      {
        "id": "B",
        "body": "The need to correlate each decision with its source request"
      },
      {
        "id": "C",
        "body": "The need to preserve the validated model and prompt"
      },
      {
        "id": "D",
        "body": "The need to handle each input’s failure independently"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Message Batches target work that does not need immediate responses and can run until the batch expiration window. They are not a way to guarantee a ten-second interactive decision.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/batch-processing"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-004",
    "domain": "applications-integration",
    "objective": "D2.1",
    "conceptKey": "requirements-multidimensional-contract",
    "type": "multiple",
    "selectCount": 2,
    "body": "A summarization pilot passes factuality tests but exceeds the service budget and frequently finishes after the user has left. Before accepting a redesign, which TWO requirements must be added to the existing factuality criterion? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "A measurable per-workload cost limit"
      },
      {
        "id": "B",
        "body": "A rule that all summaries must have identical wording"
      },
      {
        "id": "C",
        "body": "An acceptable response-time target measured on representative requests"
      },
      {
        "id": "D",
        "body": "A requirement to use the newest model irrespective of tests"
      },
      {
        "id": "E",
        "body": "A requirement to maximize every response length"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Success criteria should include operational constraints such as price and latency alongside task fidelity. Those are the two unmet requirements described in this pilot.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-005",
    "domain": "applications-integration",
    "objective": "D2.1",
    "conceptKey": "missing-task-policy",
    "type": "single",
    "selectCount": 1,
    "body": "A Claude ticket router must assign cases to the right specialist team. Two teams use the same label for different services, and no rule says who owns a ticket spanning both. What requirements work should precede prompt optimization?",
    "options": [
      {
        "id": "A",
        "body": "Use only product names as categories and ignore priority"
      },
      {
        "id": "B",
        "body": "Let each API response invent category names without a shared definition"
      },
      {
        "id": "C",
        "body": "Select categories by ticket length alone"
      },
      {
        "id": "D",
        "body": "Define the support teams’ intended categories and how ambiguous cases should be routed"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "A routing integration needs well-defined intent categories and an understanding of how the support team handles edge cases. Resolving service ownership provides the classification contract that prompt optimization must implement.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/about-claude/use-case-guides/ticket-routing"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-006",
    "domain": "applications-integration",
    "objective": "D2.1",
    "conceptKey": "requirements-boundary-case-policy",
    "type": "single",
    "selectCount": 1,
    "body": "A Claude routing prototype is being specified for incoming support tickets. Some real tickets contain no useful text. The requirements currently cover only well-formed tickets. What should the team define before judging readiness?",
    "options": [
      {
        "id": "A",
        "body": "Use the average valid-ticket accuracy as the acceptance rule for all inputs"
      },
      {
        "id": "B",
        "body": "Expected behavior and acceptance cases for missing or irrelevant input"
      },
      {
        "id": "C",
        "body": "Choose the most frequent category as the correct label without confirming business policy"
      },
      {
        "id": "D",
        "body": "Exclude missing inputs from testing while continuing to accept them in production"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Task-specific evaluations should include edge cases such as nonexistent or irrelevant inputs. The application needs an explicit expected outcome for those cases before readiness can be measured.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-007",
    "domain": "applications-integration",
    "objective": "D2.1",
    "conceptKey": "requirements-rubric-operationalization",
    "type": "single",
    "selectCount": 1,
    "body": "A content assistant must sound professional, but two reviewers disagree on whether its outputs qualify. The team needs repeatable acceptance judgments. What should be specified next?",
    "options": [
      {
        "id": "A",
        "body": "A concrete rating rubric with examples of acceptable and unacceptable tone"
      },
      {
        "id": "B",
        "body": "A requirement that reviewers use their personal impressions independently"
      },
      {
        "id": "C",
        "body": "One polished reference response required byte-for-byte for every input"
      },
      {
        "id": "D",
        "body": "A pass criterion based only on response length"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Qualitative criteria become more repeatable when they use a defined scale and explicit rubric. Token counts and deployment size do not resolve what professional tone means.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-008",
    "domain": "applications-integration",
    "objective": "D2.1",
    "conceptKey": "requirements-context-dependent-followups",
    "type": "single",
    "selectCount": 1,
    "body": "A conversational assistant must correctly answer follow-up questions whose referents appear earlier in the same conversation. The evaluation currently sends only isolated single-turn questions. Which change addresses this missing requirement?",
    "options": [
      {
        "id": "A",
        "body": "Grade isolated responses against a style guide"
      },
      {
        "id": "B",
        "body": "Add more isolated questions with unrelated topics"
      },
      {
        "id": "C",
        "body": "Add multi-turn cases that require using earlier conversation facts"
      },
      {
        "id": "D",
        "body": "Increase the number of isolated one-turn samples and assume that covers context use"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Context utilization must be tested with cases that actually depend on earlier turns. Isolated questions cannot demonstrate that the assistant meets the follow-up requirement.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-009",
    "domain": "applications-integration",
    "objective": "D2.1",
    "conceptKey": "requirements-workload-budget-estimate",
    "type": "multiple",
    "selectCount": 2,
    "body": "A planned Claude service has a fixed monthly inference budget. The team knows expected request volume but has measured only input sizes. Which TWO additional inputs are directly needed for a realistic token-cost estimate? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Expected output-token usage per request"
      },
      {
        "id": "B",
        "body": "The selected model pricing applicable to input and output usage"
      },
      {
        "id": "C",
        "body": "Average response time used as a substitute for output-token usage"
      },
      {
        "id": "D",
        "body": "A fixed input-token price applied to output tokens without checking pricing"
      },
      {
        "id": "E",
        "body": "Character counts treated as exact billed token counts"
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Inference budgeting needs expected input and output usage, request frequency, and the applicable model prices. The stem already provides volume and input measurements, leaving output usage and pricing.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-010",
    "domain": "applications-integration",
    "objective": "D2.1",
    "conceptKey": "requirements-baseline-achievability",
    "type": "single",
    "selectCount": 1,
    "body": "A sponsor demands 100% correctness on every possible free-form request, but offers no examples or definition of correctness. What is the most defensible next requirement-setting step?",
    "options": [
      {
        "id": "A",
        "body": "Commit to a target using only one carefully selected demo"
      },
      {
        "id": "B",
        "body": "Use fluency as a proxy for every aspect of correctness"
      },
      {
        "id": "C",
        "body": "Measure only requests with a previously known easy answer while claiming all requests are covered"
      },
      {
        "id": "D",
        "body": "Define the intended task distribution and measurable criteria, then use representative experiments to establish achievable targets"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Success criteria should be specific, measurable, relevant, and achievable. An undefined universal correctness promise cannot be validated; scope and evidence are needed before committing to a target.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-011",
    "domain": "applications-integration",
    "objective": "D2.1",
    "conceptKey": "requirements-privacy-specificity",
    "type": "single",
    "selectCount": 1,
    "body": "An internal assistant requirement says only “preserve privacy.” The team wants an acceptance test for whether answers reveal prohibited customer identifiers supplied in test prompts. Which specification is most useful?",
    "options": [
      {
        "id": "A",
        "body": "Define only an average response-length threshold"
      },
      {
        "id": "B",
        "body": "Require a privacy disclaimer and count disclaimers as successful protection"
      },
      {
        "id": "C",
        "body": "Define the prohibited identifier categories, test corpus, and measurable disclosure threshold"
      },
      {
        "id": "D",
        "body": "Use overall helpfulness ratings as the sole privacy acceptance measure"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Privacy criteria must specify the information and behavior being measured. Defined prohibited categories and a disclosure metric permit testing; disclaimers and answer length do not establish privacy preservation.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-012",
    "domain": "applications-integration",
    "objective": "D2.2",
    "conceptKey": "lifecycle-deprecated-versus-retired",
    "type": "single",
    "selectCount": 1,
    "body": "An application uses a Claude model marked deprecated with a future retirement date. Requests still succeed. A maintainer concludes that no maintenance is required until errors appear. Which lifecycle action is justified?",
    "options": [
      {
        "id": "A",
        "body": "Wait for the retirement date before running compatibility tests"
      },
      {
        "id": "B",
        "body": "Assume successful requests today mean the published retirement no longer applies"
      },
      {
        "id": "C",
        "body": "Plan and test migration before the announced retirement date"
      },
      {
        "id": "D",
        "body": "Keep the same model ID and change only the SDK package version"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Deprecated models may still work, but retired models are unavailable and requests fail. Testing and migrating before retirement avoids making failure the migration trigger.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/about-claude/model-deprecations"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-013",
    "domain": "applications-integration",
    "objective": "D2.2",
    "conceptKey": "track-availability-migration-dates-actual",
    "type": "single",
    "selectCount": 1,
    "body": "A production application runs the same Claude model through two deployment platforms. One platform announces that the model version will become unavailable sooner than the other. What should the lifecycle plan do?",
    "options": [
      {
        "id": "A",
        "body": "Track availability and migration dates for each actual deployment path rather than assuming one universal schedule."
      },
      {
        "id": "B",
        "body": "Wait until both platforms start returning errors before testing a replacement."
      },
      {
        "id": "C",
        "body": "Assume the model family name guarantees identical lifecycle dates everywhere."
      },
      {
        "id": "D",
        "body": "Change only the prompt because provider availability is unrelated to deployment."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Lifecycle planning must follow the concrete environment in which the model is invoked. Platform-specific availability can differ, so each production path needs its own migration evidence and deadline.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/about-claude/models/choosing-a-model"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-014",
    "domain": "applications-integration",
    "objective": "D2.2",
    "conceptKey": "evidence-backed-inventory-current-callers-deployed",
    "type": "single",
    "selectCount": 1,
    "body": "A team must retire an old model from a large application estate. It knows the model appears in several services but has no reliable inventory of which production workloads still call it. What should it establish first?",
    "options": [
      {
        "id": "A",
        "body": "A rule that any service not reporting errors is assumed migrated."
      },
      {
        "id": "B",
        "body": "A plan to change every model in the organization at once."
      },
      {
        "id": "C",
        "body": "An evidence-backed inventory of current callers and deployed model configuration."
      },
      {
        "id": "D",
        "body": "A new prompt for the replacement model before identifying the affected systems."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "A controlled migration starts by knowing where the dependency is actually used. Usage telemetry and versioned deployment configuration are stronger evidence than assumptions based on source code or lack of errors.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests",
      "https://platform.claude.com/docs/en/about-claude/models/choosing-a-model"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-015",
    "domain": "applications-integration",
    "objective": "D2.2",
    "conceptKey": "lifecycle-holdout-after-tuning",
    "type": "single",
    "selectCount": 1,
    "body": "An engineer repeatedly adjusts a classification prompt after inspecting failures on the same evaluation set. That set now scores very well. Which evidence is still needed before claiming the improvement generalizes?",
    "options": [
      {
        "id": "A",
        "body": "A repeat of the tuning set using the final prompt"
      },
      {
        "id": "B",
        "body": "Agreement between the final prompt author and the generated answers on tuning examples"
      },
      {
        "id": "C",
        "body": "A higher score after removing the hardest tuning cases"
      },
      {
        "id": "D",
        "body": "Performance on representative held-out cases not used to tune the prompt"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "A held-out set tests task performance beyond the cases used for iteration. Reusing only the tuning examples cannot establish how the revised prompt behaves on unseen representative inputs.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-016",
    "domain": "applications-integration",
    "objective": "D2.2",
    "conceptKey": "lifecycle-new-category-maintenance",
    "type": "multiple",
    "selectCount": 2,
    "body": "After launch, a support product adds a new service category. Its Claude router still uses the original category definitions and tests. Which TWO updates directly address this lifecycle change? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Update the permitted category definitions and routing expectations"
      },
      {
        "id": "B",
        "body": "Add representative examples of the new category to evaluation coverage"
      },
      {
        "id": "C",
        "body": "Keep the old categories unchanged and treat every new case as model randomness"
      },
      {
        "id": "D",
        "body": "Increase concurrency without changing classification requirements"
      },
      {
        "id": "E",
        "body": "Remove all old-category regression cases"
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Evolving intent categories require updated definitions and evaluation examples. Capacity changes do not teach the router the new classification contract, and old-category coverage remains useful for regressions.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/about-claude/use-case-guides/ticket-routing"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-017",
    "domain": "applications-integration",
    "objective": "D2.2",
    "conceptKey": "lifecycle-regression-case-from-incident",
    "type": "single",
    "selectCount": 1,
    "body": "A deployed Claude assistant repeatedly mishandles a previously untested ambiguous ticket pattern. A prompt fix works on the incident example. Which maintenance step provides ongoing protection against this failure class?",
    "options": [
      {
        "id": "A",
        "body": "Hide the incident from the evaluation set to preserve the old score"
      },
      {
        "id": "B",
        "body": "Add representative cases of that pattern with agreed expected behavior to regression evaluations"
      },
      {
        "id": "C",
        "body": "Replace all tests with the single incident example"
      },
      {
        "id": "D",
        "body": "Treat the successful incident rerun as permanent evidence that the class is solved"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Task-specific evaluations should cover real edge cases. Adding representative cases makes the discovered failure class part of future regression checks rather than a one-time demonstration.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-018",
    "domain": "applications-integration",
    "objective": "D2.2",
    "conceptKey": "lifecycle-grader-validation",
    "type": "single",
    "selectCount": 1,
    "body": "A team replaces slow human grading with an LLM judge for nuanced response quality. Before scaling that judge across release evaluations, which step is required to justify relying on its scores?",
    "options": [
      {
        "id": "A",
        "body": "Assume using a different model as judge alone establishes grading reliability"
      },
      {
        "id": "B",
        "body": "Validate only that the judge always outputs a number"
      },
      {
        "id": "C",
        "body": "Check its reliability against the established rubric and trusted reference judgments"
      },
      {
        "id": "D",
        "body": "Use the candidate response’s own confidence as the judge score"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Anthropic recommends testing the reliability of LLM-based grading before scaling. A defined rubric and reference judgments provide evidence that the automated scores measure the intended quality.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-019",
    "domain": "applications-integration",
    "objective": "D2.2",
    "conceptKey": "lifecycle-changing-traffic-distribution",
    "type": "single",
    "selectCount": 1,
    "body": "A multilingual service was evaluated only on its original English traffic. After expansion, half its users submit other languages. What makes the original readiness evidence insufficient for ongoing operation?",
    "options": [
      {
        "id": "A",
        "body": "Treat aggregate historical English accuracy as sufficient for every language"
      },
      {
        "id": "B",
        "body": "Measure only whether the new-language requests return HTTP success"
      },
      {
        "id": "C",
        "body": "Translate the evaluation report while leaving all test inputs in English"
      },
      {
        "id": "D",
        "body": "The test distribution no longer represents the workload, so language-specific task performance must be evaluated"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Task evaluations should reflect real usage, and the ticket-routing guide calls for measuring performance across languages. The original English-only result cannot establish quality for the changed traffic mix.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/about-claude/use-case-guides/ticket-routing"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-020",
    "domain": "applications-integration",
    "objective": "D2.2",
    "conceptKey": "relevant-versioned-inputs-configuration-evaluation",
    "type": "single",
    "selectCount": 1,
    "body": "A compliance workflow must reproduce why a Claude-generated decision was accepted six months later. The team currently retains only the final text. Which lifecycle improvement is most important?",
    "options": [
      {
        "id": "A",
        "body": "Retain the relevant versioned inputs/configuration and evaluation or approval evidence needed to reproduce the decision."
      },
      {
        "id": "B",
        "body": "Keep only the current prompt because old configuration no longer matters."
      },
      {
        "id": "C",
        "body": "Rely on the model to remember how it reached the earlier decision."
      },
      {
        "id": "D",
        "body": "Increase the final answer length so it contains more narrative."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Reproducibility over time requires knowing what inputs, prompt/model/configuration, and gates produced the accepted result. A final string alone cannot establish the historical execution context.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-021",
    "domain": "applications-integration",
    "objective": "D2.3",
    "conceptKey": "batch-mixed-outcomes",
    "type": "multiple",
    "selectCount": 2,
    "body": "A Message Batch has processing_status `ended`, with 80 succeeded, 3 errored, and 2 expired requests. Which TWO statements are supported? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "All 85 requests produced valid model answers"
      },
      {
        "id": "B",
        "body": "The 80 succeeded entries include successful message results"
      },
      {
        "id": "C",
        "body": "Ended means the batch has finished processing, even though some entries failed"
      },
      {
        "id": "D",
        "body": "The expired entries are still queued to run in that same ended batch"
      },
      {
        "id": "E",
        "body": "One errored entry invalidates every succeeded entry"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Ended describes completion of batch processing, not universal success. Each request has its own outcome and must be handled accordingly.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/batch-processing"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-022",
    "domain": "applications-integration",
    "objective": "D2.3",
    "conceptKey": "message-batches-asynchronous-independent-requests",
    "type": "single",
    "selectCount": 1,
    "body": "A nightly job summarizes 60,000 independent records. Users never wait for individual results, and the team can process failures after the job finishes. Which API pattern best matches the workload?",
    "options": [
      {
        "id": "A",
        "body": "A user-facing WebSocket connection for every record."
      },
      {
        "id": "B",
        "body": "Message Batches for asynchronous independent requests."
      },
      {
        "id": "C",
        "body": "A stateful conversation that sends records one by one so later records depend on earlier ones."
      },
      {
        "id": "D",
        "body": "One permanent streaming request containing all 60,000 records."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Message Batches are designed for large sets of independent requests that do not need immediate responses. Streaming improves perceived latency for interactive calls rather than turning bulk work into a batch.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/batch-processing"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-023",
    "domain": "applications-integration",
    "objective": "D2.3",
    "conceptKey": "correlate-preserve-successful-results-inspect",
    "type": "multiple",
    "selectCount": 2,
    "body": "A Message Batch finishes with a mixture of successful and failed items. Which TWO application behaviors are appropriate? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Assume batch completion means every request succeeded."
      },
      {
        "id": "B",
        "body": "Correlate and preserve the successful results."
      },
      {
        "id": "C",
        "body": "Resubmit the entire batch unchanged regardless of failure cause."
      },
      {
        "id": "D",
        "body": "Inspect failed items individually and decide whether they should be corrected or retried."
      },
      {
        "id": "E",
        "body": "Discard every success because one item failed."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "Batch processing is per request: one item can succeed while another fails. Robust consumers reconcile individual outcomes rather than treating the batch as all-or-nothing.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/batch-processing"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-024",
    "domain": "applications-integration",
    "objective": "D2.3",
    "conceptKey": "they-chose-asynchronous-workload-api",
    "type": "single",
    "selectCount": 1,
    "body": "A product team moves an interactive 'generate now' button from the Messages API to Message Batches and then complains that users no longer receive an immediate answer. What design mistake did they make?",
    "options": [
      {
        "id": "A",
        "body": "They should enable token streaming inside each batch item."
      },
      {
        "id": "B",
        "body": "They should reuse the same conversation ID for every user."
      },
      {
        "id": "C",
        "body": "They forgot that batches require the smallest model."
      },
      {
        "id": "D",
        "body": "They chose an asynchronous workload API for a request whose defining requirement is immediate user feedback."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Batch processing trades immediate delivery for asynchronous throughput/cost benefits. Interactive latency requirements should drive the API pattern choice.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/batch-processing",
      "https://platform.claude.com/docs/en/build-with-claude/streaming"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-025",
    "domain": "applications-integration",
    "objective": "D2.3",
    "conceptKey": "validate-representative-requests-first-through",
    "type": "single",
    "selectCount": 1,
    "body": "A team is about to submit a new request shape across tens of thousands of batch items. The prompt and schema have never been exercised through the ordinary Messages API. What is the safest preparation?",
    "options": [
      {
        "id": "A",
        "body": "Submit the full batch first because batch creation proves each item is valid."
      },
      {
        "id": "B",
        "body": "Remove validation from the request so fewer items can fail."
      },
      {
        "id": "C",
        "body": "Validate representative requests first through the normal API and existing tests, then scale the known-good shape into the batch."
      },
      {
        "id": "D",
        "body": "Use a different model in the batch to make schema errors less likely."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Bulk execution amplifies mistakes. Testing representative request shapes before scaling catches malformed inputs and semantic problems cheaply while retaining per-item result checks in the batch.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/batch-processing",
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-026",
    "domain": "applications-integration",
    "objective": "D2.3",
    "conceptKey": "batch-no-live-stream-parameter",
    "type": "single",
    "selectCount": 1,
    "body": "An engineer copies a working streaming Messages request into a batch item, retaining `stream: true`. Which minimal change is required by the batch interface?",
    "options": [
      {
        "id": "A",
        "body": "Keep stream: true and poll the batch more frequently"
      },
      {
        "id": "B",
        "body": "Move stream: true from params to custom_id"
      },
      {
        "id": "C",
        "body": "Remove stream: true and consume the completed batch result file instead"
      },
      {
        "id": "D",
        "body": "Replace stream: true with speed so tokens arrive sooner"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Batch requests do not support stream: true because results are delivered as a result file. Streaming that file during download is different from live token streaming within a batch item.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/batch-processing"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-027",
    "domain": "applications-integration",
    "objective": "D2.3",
    "conceptKey": "stream-content-block-index",
    "type": "single",
    "selectCount": 1,
    "body": "A direct Messages SSE parser receives text deltas for index 0 and tool-input deltas for index 1. It appends all deltas into one string. Which implementation change preserves the response structure?",
    "options": [
      {
        "id": "A",
        "body": "Maintain separate accumulators by content-block index and apply each delta according to its type"
      },
      {
        "id": "B",
        "body": "Use a single JSON accumulator for both text and input_json_delta fragments"
      },
      {
        "id": "C",
        "body": "Start a new assistant message for each content_block_delta"
      },
      {
        "id": "D",
        "body": "Treat each block index as a tool-call ID for executing the call"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Content-block indices identify positions in the final content array, and delta types identify the field being updated. Separate typed accumulation preserves text and tool-input blocks.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/streaming"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-028",
    "domain": "applications-integration",
    "objective": "D2.3",
    "conceptKey": "stream-partial-json-assembly",
    "type": "single",
    "selectCount": 1,
    "body": "A tool input arrives as input_json_delta fragments `{\"city\":` and `\"Oslo\"}`. JSON parsing fails on the first fragment. What should a parser without partial-JSON support do?",
    "options": [
      {
        "id": "A",
        "body": "Parse each partial_json string as an independent full object"
      },
      {
        "id": "B",
        "body": "Fill missing closing braces after each fragment and execute immediately"
      },
      {
        "id": "C",
        "body": "Concatenate fragments across all tool blocks into one object"
      },
      {
        "id": "D",
        "body": "Accumulate fragments for that block and parse when its content_block_stop arrives"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Tool-input deltas are partial JSON strings. Accumulate the strings for the block and parse the completed input rather than requiring every fragment to be standalone JSON.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/streaming"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-029",
    "domain": "applications-integration",
    "objective": "D2.3",
    "conceptKey": "usage-information-reported-api-completed",
    "type": "single",
    "selectCount": 1,
    "body": "A service estimates the cost of a streamed response from the number of characters displayed in the browser. The estimate is consistently wrong. What should it use instead?",
    "options": [
      {
        "id": "A",
        "body": "A fixed characters-per-token constant for every language and input type."
      },
      {
        "id": "B",
        "body": "Usage information reported by the API for the completed request, together with the model's applicable pricing."
      },
      {
        "id": "C",
        "body": "Only the elapsed time between the first and last token."
      },
      {
        "id": "D",
        "body": "Only the number of streamed events."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Billing is based on token usage and pricing, not browser character counts or event counts. Applications should use provider usage metadata and the actual model configuration for accounting.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence",
      "https://platform.claude.com/docs/en/build-with-claude/streaming"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-030",
    "domain": "applications-integration",
    "objective": "D2.3",
    "conceptKey": "stream-block-stop-not-message-stop",
    "type": "single",
    "selectCount": 1,
    "body": "A streaming response finishes a text block and then starts a second content block. The UI has already marked the response complete on content_block_stop. Which event represents completion of the message stream?",
    "options": [
      {
        "id": "A",
        "body": "content_block_stop"
      },
      {
        "id": "B",
        "body": "message_delta"
      },
      {
        "id": "C",
        "body": "message_stop"
      },
      {
        "id": "D",
        "body": "The last text_delta observed so far"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "content_block_stop ends one block, while message_stop ends the message stream. A response can contain multiple blocks before the final event.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/streaming"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-031",
    "domain": "applications-integration",
    "objective": "D2.3",
    "conceptKey": "preserve-distinction-partial-output-successfully",
    "type": "multiple",
    "selectCount": 2,
    "body": "A streamed response is interrupted after several text fragments have reached the user. The application cannot prove the message completed. Which TWO behaviors are appropriate? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Ignore the interruption whenever at least one content fragment arrived."
      },
      {
        "id": "B",
        "body": "Preserve the distinction between partial output and a successfully completed response."
      },
      {
        "id": "C",
        "body": "Mark the partial text as complete because HTTP streaming had already started."
      },
      {
        "id": "D",
        "body": "Apply the application's recovery policy, such as retrying safely or explaining that the answer was interrupted."
      },
      {
        "id": "E",
        "body": "Invent the missing ending locally."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "Streaming can fail after partial output. A production client should track completion explicitly and recover according to the failure policy instead of silently presenting an incomplete response as final.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/streaming",
      "https://platform.claude.com/docs/en/api/errors"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-032",
    "domain": "applications-integration",
    "objective": "D2.3",
    "conceptKey": "render-content-payloads-intended-answer",
    "type": "single",
    "selectCount": 1,
    "body": "A browser UI receives Claude output incrementally from the backend. Some transport events contain control metadata rather than answer text. What should the client renderer do?",
    "options": [
      {
        "id": "A",
        "body": "Treat the first control event as the final response."
      },
      {
        "id": "B",
        "body": "Append every received event verbatim to the user's answer."
      },
      {
        "id": "C",
        "body": "Treat every transport event payload as displayable content without parsing its event type."
      },
      {
        "id": "D",
        "body": "Render only the content payloads intended for the answer and handle transport/control events separately."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Streaming protocols contain more than visible answer text. The client should parse event types and keep transport/control information separate from the user-facing content.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/streaming"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-033",
    "domain": "applications-integration",
    "objective": "D2.3",
    "conceptKey": "supply-retrieve-relevant-earlier-conversation",
    "type": "single",
    "selectCount": 1,
    "body": "A stateless API integration needs Claude to answer 'What did I decide earlier?' on the fourth turn. What must the application do?",
    "options": [
      {
        "id": "A",
        "body": "Reuse the same SDK object and omit earlier messages."
      },
      {
        "id": "B",
        "body": "Send only the phrase 'remember our conversation'."
      },
      {
        "id": "C",
        "body": "Supply or retrieve the relevant earlier conversation state in the current request."
      },
      {
        "id": "D",
        "body": "Enable streaming because streaming persists history automatically."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Messages API requests do not gain durable conversation memory from a client object or streaming. Relevant history must be supplied or retrieved into the current request.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/context-windows"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-034",
    "domain": "applications-integration",
    "objective": "D2.3",
    "conceptKey": "typed-image-source",
    "type": "single",
    "selectCount": 1,
    "body": "A service sends a PNG as a long base64 string inside a plain text block and expects the vision interface to decode it as an image. Which request representation directly supplies an image to the documented API?",
    "options": [
      {
        "id": "A",
        "body": "Wrap the base64 bytes in a text block with media_type as an extra text property"
      },
      {
        "id": "B",
        "body": "Set Content-Type: image/png for the entire Messages JSON request"
      },
      {
        "id": "C",
        "body": "Use an image block with a base64 source, image/png media_type, and encoded data"
      },
      {
        "id": "D",
        "body": "Send only the local filesystem path as the user’s text"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The vision request shape uses a typed image content block with a source describing the encoded image. Plain text containing base64 is not that image-input representation.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/working-with-messages"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-035",
    "domain": "applications-integration",
    "objective": "D2.3",
    "conceptKey": "image-through-supported-content-block",
    "type": "single",
    "selectCount": 1,
    "body": "An application wants Claude to inspect a chart image. It currently places the image URL inside ordinary user text and assumes that automatically sends the image pixels. What should the integration do?",
    "options": [
      {
        "id": "A",
        "body": "Provide the image through a supported image content block or supported file reference."
      },
      {
        "id": "B",
        "body": "Pass the public image URL as ordinary text and rely on Claude to fetch the image automatically."
      },
      {
        "id": "C",
        "body": "Increase max_tokens so the text URL is decoded as pixels."
      },
      {
        "id": "D",
        "body": "Put the URL in the system prompt."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Vision input must be represented through the API's supported image/file input mechanism. A textual URL is just text unless the application or an enabled tool actually retrieves the image.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/vision"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-036",
    "domain": "applications-integration",
    "objective": "D2.3",
    "conceptKey": "response-completion-stop-condition-transport",
    "type": "single",
    "selectCount": 1,
    "body": "A long generation stops because it reaches the configured output limit. The application nevertheless labels the answer 'complete' because the HTTP request succeeded. What should it check before doing so?",
    "options": [
      {
        "id": "A",
        "body": "Only whether the first content block contains text."
      },
      {
        "id": "B",
        "body": "The response completion/stop condition, not just transport success."
      },
      {
        "id": "C",
        "body": "Only whether the model returned a request ID."
      },
      {
        "id": "D",
        "body": "Whether the user message was shorter than the output limit."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "A successful HTTP response can still represent an incomplete generation. Completion logic should inspect the model's stop/completion metadata before treating the content as final.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/streaming",
      "https://platform.claude.com/docs/en/build-with-claude/structured-outputs"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-037",
    "domain": "applications-integration",
    "objective": "D2.3",
    "conceptKey": "api-version-header-not-model-id",
    "type": "single",
    "selectCount": 1,
    "body": "A custom HTTP client supplies a valid Claude model ID and authentication, but omits the API protocol version header. What must the direct API request also include?",
    "options": [
      {
        "id": "A",
        "body": "An anthropic-version header containing a supported API version"
      },
      {
        "id": "B",
        "body": "A model release date supplied only in the model field"
      },
      {
        "id": "C",
        "body": "A user message containing the desired protocol date"
      },
      {
        "id": "D",
        "body": "An HTTP Accept header used as a replacement for anthropic-version"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Direct requests must include anthropic-version; official SDKs normally supply it automatically. The API protocol version is separate from the model identifier.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/api/versioning"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-038",
    "domain": "applications-integration",
    "objective": "D2.3",
    "conceptKey": "construct-documented-http-request-including",
    "type": "single",
    "selectCount": 1,
    "body": "A team replaces an official SDK call with its own raw HTTPS client. The model and prompt stay the same, but requests now fail before inference. What responsibility did the custom client take on?",
    "options": [
      {
        "id": "A",
        "body": "Converting every request into a Message Batch."
      },
      {
        "id": "B",
        "body": "Creating server-side conversation memory."
      },
      {
        "id": "C",
        "body": "Construct the documented HTTP request, including required authentication and protocol headers."
      },
      {
        "id": "D",
        "body": "Rely on the model identifier and prompt body while omitting transport-specific API requirements."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "An SDK handles transport details for the developer. A raw REST integration must supply the documented endpoint, headers, authentication, serialization, and request fields itself.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/api/errors"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-039",
    "domain": "applications-integration",
    "objective": "D2.3",
    "conceptKey": "batch-create-response-not-result",
    "type": "single",
    "selectCount": 1,
    "body": "A user interface calls the Message Batches creation endpoint and tries to render response.content immediately. The returned object has id, processing_status, and request_counts. Which operation is missing?",
    "options": [
      {
        "id": "A",
        "body": "Call the creation endpoint again until it returns response.content"
      },
      {
        "id": "B",
        "body": "Track the batch until processing ends and then retrieve its results"
      },
      {
        "id": "C",
        "body": "Parse request_counts as if it contained the generated answers"
      },
      {
        "id": "D",
        "body": "Treat a nonempty batch ID as a completed successful answer"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Creation returns a batch tracking object. The application must wait for processing to end and retrieve per-request results through the batch result interface.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/batch-processing"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-040",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "define-bounded-retry-policy-account",
    "type": "single",
    "selectCount": 1,
    "body": "A Claude service has automatic retries in both its SDK layer and an outer job runner. During an outage, one user request creates far more attempts than the team expected. What is the best engineering response?",
    "options": [
      {
        "id": "A",
        "body": "Apply the same retry policy independently at every layer because each component handles only its own failures."
      },
      {
        "id": "B",
        "body": "Define one bounded retry policy and account for every layer that can retry."
      },
      {
        "id": "C",
        "body": "Add another retry loop so failures recover faster."
      },
      {
        "id": "D",
        "body": "Increase max_tokens because output length controls HTTP retries."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Nested retry mechanisms multiply attempts, latency, and load. Production code should make retry ownership explicit and bound the total behavior.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/api/errors"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-041",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "disable-duplicate-lower-layer-retries-central",
    "type": "single",
    "selectCount": 1,
    "body": "A central reliability layer already owns retry decisions for Claude calls. The SDK is also retrying transient errors automatically, which makes attempt counts and latency unpredictable. What design change best restores control?",
    "options": [
      {
        "id": "A",
        "body": "Keep both layers and hide their attempt counts from monitoring."
      },
      {
        "id": "B",
        "body": "Move retry instructions into the user prompt."
      },
      {
        "id": "C",
        "body": "Treat every failed attempt as a successful response."
      },
      {
        "id": "D",
        "body": "Disable duplicate lower-layer retries so the central reliability layer remains the owner."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "When one component is intentionally responsible for retry policy, hidden retries elsewhere undermine deadlines and observability. The implementation should avoid duplicated retry ownership.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/api/errors"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-042",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "retry-policy-explicit-per-workload",
    "type": "single",
    "selectCount": 1,
    "body": "A background workload can tolerate more retries than an interactive endpoint, but both share the same Claude client. Which design is best?",
    "options": [
      {
        "id": "A",
        "body": "Encode the retry count in the prompt for Claude to enforce."
      },
      {
        "id": "B",
        "body": "Use the same retry count for every workload regardless of latency requirements."
      },
      {
        "id": "C",
        "body": "Change the shared policy back and forth while requests are in flight."
      },
      {
        "id": "D",
        "body": "Make retry policy explicit per workload or request without mutating shared global behavior for concurrent calls."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Operational policies should follow workload requirements and remain safe under concurrency. Per-workload configuration avoids global mutable state while making behavior testable.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/api/errors"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-043",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "sdk-timeout-not-total-retry-deadline",
    "type": "single",
    "selectCount": 1,
    "body": "A Python integration sets a five-second request timeout but leaves automatic retries enabled. The owner assumes the entire SDK operation must return within five seconds including retries. Why is that conclusion unsafe?",
    "options": [
      {
        "id": "A",
        "body": "The timeout applies only after all configured retries have finished"
      },
      {
        "id": "B",
        "body": "Setting timeout automatically disables retries"
      },
      {
        "id": "C",
        "body": "Timed-out requests can be retried, so the complete operation can exceed one attempt’s timeout"
      },
      {
        "id": "D",
        "body": "Backoff delays are automatically included in a single hard five-second operation budget"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The Python SDK retries timed-out requests under its retry policy. A per-request timeout is not by itself a total wall-clock budget across attempts and backoff.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/python"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-044",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "json-escaping-user-content",
    "type": "single",
    "selectCount": 1,
    "body": "A service builds a Messages HTTP body by concatenating a user’s text into a JSON string. A user enters quotation marks and a newline, breaking the body. Which fix preserves the exact user text and valid JSON?",
    "options": [
      {
        "id": "A",
        "body": "Remove every quotation mark and newline from user input"
      },
      {
        "id": "B",
        "body": "Replace all double quotes in the whole payload with single quotes"
      },
      {
        "id": "C",
        "body": "Encode the entire HTTP body as a JSON string twice"
      },
      {
        "id": "D",
        "body": "Build a data object and use a JSON serializer for the body"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "A JSON serializer escapes quotation marks and control characters within string values while preserving their decoded content. Manual stripping changes the input, and double encoding changes the body type.",
    "sourceRefs": [
      "https://www.rfc-editor.org/rfc/rfc8259"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-045",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "represent-request-structured-application-data",
    "type": "single",
    "selectCount": 1,
    "body": "A service constructs a Claude request by manually concatenating JSON fragments from several fields. Small changes repeatedly produce malformed payloads. What is the strongest engineering fix?",
    "options": [
      {
        "id": "A",
        "body": "Represent the request as structured application data and serialize it with a standard JSON library."
      },
      {
        "id": "B",
        "body": "Keep concatenating strings but add more escaping rules by hand."
      },
      {
        "id": "C",
        "body": "Remove quotation marks from user input."
      },
      {
        "id": "D",
        "body": "Ask Claude to repair the JSON after the HTTP request fails."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Structured serialization is safer and more maintainable than manual JSON string construction. This tests an integration engineering practice rather than obscure JSON grammar.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/api/errors"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-046",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "json-object-order-versus-array-order",
    "type": "multiple",
    "selectCount": 2,
    "body": "A response adapter receives the same object fields in a different order and the same message content array in a different order. Which distinction should a review enforce? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Do not depend on JSON object member ordering for field lookup"
      },
      {
        "id": "B",
        "body": "Treat content-array order as irrelevant because JSON never has ordering"
      },
      {
        "id": "C",
        "body": "Preserve array element order when it carries message-content sequence"
      },
      {
        "id": "D",
        "body": "Require alphabetical ordering of every object before it is valid JSON"
      },
      {
        "id": "E",
        "body": "Convert arrays to sets before displaying their content"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "JSON objects and arrays have different ordering semantics: object-member order should not be relied upon, while arrays are ordered sequences. An adapter must preserve meaningful content-array order.",
    "sourceRefs": [
      "https://www.rfc-editor.org/rfc/rfc8259"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-047",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "validate-parsed-data-downstream-contract",
    "type": "single",
    "selectCount": 1,
    "body": "A downstream service expects `approved` to be a boolean, but the Claude-facing adapter sometimes forwards strings such as `\"yes\"`. The model's output schema already requires a boolean. What should the application still do at the integration boundary?",
    "options": [
      {
        "id": "A",
        "body": "Convert every unexpected value to true."
      },
      {
        "id": "B",
        "body": "Accept any truthy-looking string because the model probably meant true."
      },
      {
        "id": "C",
        "body": "Remove the downstream type contract."
      },
      {
        "id": "D",
        "body": "Validate the parsed data against the downstream contract before forwarding it."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Typed or structured model output reduces formatting risk but does not justify bypassing the application's own integration contract. Validate data before crossing system boundaries.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/structured-outputs"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-048",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "define-explicit-validation-fallback-policy",
    "type": "single",
    "selectCount": 1,
    "body": "A preprocessing step can produce a value that the downstream JSON contract cannot represent. The team is deciding whether to silently substitute a plausible value. What is the safer design?",
    "options": [
      {
        "id": "A",
        "body": "Skip validation whenever the HTTP request would otherwise be valid."
      },
      {
        "id": "B",
        "body": "Always substitute zero because JSON accepts numbers."
      },
      {
        "id": "C",
        "body": "Define an explicit validation or fallback policy for unrepresentable values rather than silently inventing data."
      },
      {
        "id": "D",
        "body": "Substitute a default value whenever serialization would otherwise fail, without surfacing that substitution."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Integration code should make invalid or missing-data behavior explicit. Silent substitution can turn a technical edge case into incorrect business data.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/structured-outputs"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-049",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "identifiers-strings-throughout-integration",
    "type": "single",
    "selectCount": 1,
    "body": "An external system uses account identifiers that may contain leading zeros and are never used for arithmetic. The Claude application currently converts them to numbers before sending them between services. Some identifiers change. What is the better contract?",
    "options": [
      {
        "id": "A",
        "body": "Treat identifiers as strings throughout the integration."
      },
      {
        "id": "B",
        "body": "Round the identifiers before sending them."
      },
      {
        "id": "C",
        "body": "Use floating-point numbers because they are more flexible."
      },
      {
        "id": "D",
        "body": "Ask Claude to restore any lost zeros."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Identifiers are labels, not quantities. Preserving them as strings avoids accidental numeric coercion and keeps the integration contract faithful to the source system.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/structured-outputs"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-050",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "second-operation-data-dependency-cannot",
    "type": "single",
    "selectCount": 1,
    "body": "A workflow first asks Claude to extract a customer ID and then calls an internal service that requires that ID. An optimization proposal launches both operations simultaneously. What should the reviewer conclude?",
    "options": [
      {
        "id": "A",
        "body": "Streaming the first response removes the dependency."
      },
      {
        "id": "B",
        "body": "The second operation has a data dependency and cannot start correctly until the ID exists."
      },
      {
        "id": "C",
        "body": "All asynchronous work should always start at the same time."
      },
      {
        "id": "D",
        "body": "The internal service can infer the missing ID from the model name."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Concurrency is useful only for independent work. A downstream operation that requires an upstream result must preserve that dependency.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/streaming"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-051",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "carry-stable-application-correlation-key",
    "type": "single",
    "selectCount": 1,
    "body": "A service sends ten independent Claude classifications concurrently. Results complete in an unpredictable order, but each must be written back to the correct source record. What design is required?",
    "options": [
      {
        "id": "A",
        "body": "Carry a stable application correlation key for each request rather than relying on completion order."
      },
      {
        "id": "B",
        "body": "Assume the fastest result belongs to the first record."
      },
      {
        "id": "C",
        "body": "Sort responses alphabetically and match them to inputs."
      },
      {
        "id": "D",
        "body": "Force the model to finish requests in submission order."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Concurrent operations may complete out of order. The application must preserve explicit correlation between a request and its business record.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/batch-processing"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-052",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "isolate-per-item-failures-error-erase",
    "type": "multiple",
    "selectCount": 2,
    "body": "A batch of independent API calls runs concurrently. One call fails, but the product wants successful results from the others and a clear record of the failure. Which TWO behaviors fit? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Isolate per-item failures so one error does not erase unrelated successes."
      },
      {
        "id": "B",
        "body": "Hide which request failed."
      },
      {
        "id": "C",
        "body": "Wrap every exception in the same successful result type so the aggregation layer remains simple."
      },
      {
        "id": "D",
        "body": "Cancel and discard all completed successes whenever any one call fails."
      },
      {
        "id": "E",
        "body": "Record each outcome with enough context to retry or investigate the failed item."
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Independent work should have independent outcomes when the product allows it. Failure isolation and correlation preserve useful successes while making recovery explicit.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/api/errors",
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-053",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "structured-cancellation-orchestration-dependent-remaining",
    "type": "single",
    "selectCount": 1,
    "body": "Several concurrent steps belong to one transaction-like workflow. If a critical step fails, continuing the remaining expensive steps would create inconsistent work. What concurrency design best fits?",
    "options": [
      {
        "id": "A",
        "body": "Use structured cancellation or orchestration so dependent remaining work is stopped and cleanup completes."
      },
      {
        "id": "B",
        "body": "Ignore the error until the user reports inconsistent results."
      },
      {
        "id": "C",
        "body": "Let every task continue regardless of the failed dependency."
      },
      {
        "id": "D",
        "body": "Increase the model temperature so failures become less correlated."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Related concurrent work needs failure semantics, not just parallelism. If later work is invalid after a critical failure, the orchestration should stop it and perform required cleanup.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/api/errors"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-054",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "unnecessary-work-perform-required-cleanup",
    "type": "single",
    "selectCount": 1,
    "body": "A user cancels a long-running Claude request while the application is writing temporary files and holding resources. What behavior should the implementation aim for?",
    "options": [
      {
        "id": "A",
        "body": "Stop displaying output but let the backend continue normally and report whatever result eventually arrives."
      },
      {
        "id": "B",
        "body": "Leave temporary resources open until the process is restarted."
      },
      {
        "id": "C",
        "body": "Immediately start an identical replacement request without user intent."
      },
      {
        "id": "D",
        "body": "Stop unnecessary work, perform required cleanup, and propagate a canceled/incomplete outcome rather than reporting success."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Cancellation is an application state that should be handled explicitly. Cleanup protects resources, and the caller should not receive a false success for work it canceled.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/streaming"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-055",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "bounded-concurrency-backpressure-outbound-work",
    "type": "single",
    "selectCount": 1,
    "body": "A web service can accept thousands of user requests, but its Claude account and downstream tools can safely handle only a limited number concurrently. What architecture prevents overload?",
    "options": [
      {
        "id": "A",
        "body": "Use bounded concurrency or backpressure at the outbound work boundary."
      },
      {
        "id": "B",
        "body": "Increase output length so calls finish more predictably."
      },
      {
        "id": "C",
        "body": "Create a separate API key for every in-flight request."
      },
      {
        "id": "D",
        "body": "Launch every request immediately and rely on rate-limit errors as the queue."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Application concurrency should be bounded according to service and downstream capacity. Backpressure avoids self-inflicted overload and excessive rate-limit/retry cascades.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/api/errors"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-056",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "http-post-retry-uncertain-side-effect",
    "type": "single",
    "selectCount": 1,
    "body": "A Claude tool calls an internal POST endpoint that creates a purchase. The connection drops before the client reads a response. The endpoint provides no documented deduplication guarantee. Why is an automatic identical retry unsafe?",
    "options": [
      {
        "id": "A",
        "body": "POST is always a read-only method"
      },
      {
        "id": "B",
        "body": "A lost response proves the purchase was never created"
      },
      {
        "id": "C",
        "body": "The original purchase might have been created, and a second POST could create another"
      },
      {
        "id": "D",
        "body": "HTTP forbids any retry of any method"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "HTTP does not generally guarantee POST is idempotent. Losing the response does not establish that the server did not apply the request, so a duplicate side effect is possible.",
    "sourceRefs": [
      "https://httpwg.org/specs/rfc9110.html"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-057",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "application-observes-service-documented-completion",
    "type": "single",
    "selectCount": 1,
    "body": "A tool call submits a long-running export to an internal service. The service acknowledges that the job was accepted but provides a separate status endpoint for completion. When may the agent truthfully tell the user the export is finished?",
    "options": [
      {
        "id": "A",
        "body": "As soon as Claude predicts the export will probably succeed."
      },
      {
        "id": "B",
        "body": "Whenever the submission call took longer than one second."
      },
      {
        "id": "C",
        "body": "Immediately after the submission request is accepted."
      },
      {
        "id": "D",
        "body": "Only after the application observes the service's documented completion condition."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Accepted work and completed work are different states. Integration code must map the external service's actual completion contract into what the agent reports.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-058",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "honor-tool-bodyless-success-contract-retry",
    "type": "single",
    "selectCount": 1,
    "body": "An internal tool operation succeeds but its documented contract returns no body. The adapter treats an empty successful response as malformed model output and retries the operation. What should change?",
    "options": [
      {
        "id": "A",
        "body": "Honor the tool's bodyless-success contract and do not retry a completed side effect."
      },
      {
        "id": "B",
        "body": "Retry until a body appears even if the operation already succeeded."
      },
      {
        "id": "C",
        "body": "Require every successful external operation to return generated prose."
      },
      {
        "id": "D",
        "body": "Treat all bodyless responses as authentication failures."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Adapters should honor the external API contract. Misclassifying a valid empty success can duplicate side effects and creates a reliability problem unrelated to Claude generation.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-059",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "new-versioned-change-restores-prior",
    "type": "single",
    "selectCount": 1,
    "body": "A production prompt change causes a regression after deployment. The team wants to undo only that change while preserving unrelated later work and keeping an auditable history. Which practice best fits?",
    "options": [
      {
        "id": "A",
        "body": "Edit the deployed prompt manually without recording the correction."
      },
      {
        "id": "B",
        "body": "Change the model and prompt simultaneously to hide the regression."
      },
      {
        "id": "C",
        "body": "Create a new versioned change that restores the prior prompt behavior and verify it with the regression suite."
      },
      {
        "id": "D",
        "body": "Rewrite shared history so nobody can see the faulty change."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Production recovery should be versioned and auditable. Reverting behavior through a recorded change plus regression verification preserves history and isolates the fix.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-060",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "review-exact-change-submitted-rather",
    "type": "multiple",
    "selectCount": 2,
    "body": "A developer has one intended Claude-integration fix mixed with unrelated experiments in the same working tree. Before review, which TWO practices improve change quality? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Include unrelated experiments so reviewers see more context."
      },
      {
        "id": "B",
        "body": "Skip tests because the diff is small."
      },
      {
        "id": "C",
        "body": "Review the exact change that will be submitted rather than relying on memory."
      },
      {
        "id": "D",
        "body": "Separate the intended fix into a focused change."
      },
      {
        "id": "E",
        "body": "Change the model version at the same time even though the fix does not require it."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Focused, reviewable changes make regressions easier to understand and reverse. Review should inspect the actual submitted delta, not an informal recollection of what changed.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-061",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "evaluate-feature-current-integration-state",
    "type": "single",
    "selectCount": 1,
    "body": "A feature branch for a Claude integration has been open for weeks while the base application changed. Before merging, what is the most important engineering goal?",
    "options": [
      {
        "id": "A",
        "body": "Assume tests from the day the branch was created are sufficient."
      },
      {
        "id": "B",
        "body": "Merge solely because the branch has fewer commits."
      },
      {
        "id": "C",
        "body": "Discard the current base behavior and preserve the old branch environment instead."
      },
      {
        "id": "D",
        "body": "Evaluate the feature against the current integration state and resolve conflicts or regressions with evidence."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Long-lived work must be validated against the system it will actually join. Current tests and review matter more than memorizing a particular version-control command.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-062",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "code-review-executable-evidence",
    "type": "single",
    "selectCount": 1,
    "body": "Claude reports that a request-validation refactor is finished, but the task required malformed-input rejection and unchanged valid-input behavior. Which evidence most directly verifies those requirements?",
    "options": [
      {
        "id": "A",
        "body": "Passing executable cases for malformed and valid inputs against the changed implementation"
      },
      {
        "id": "B",
        "body": "Passing a test that checks only the function name exists"
      },
      {
        "id": "C",
        "body": "Comparing patch line count with the previous implementation"
      },
      {
        "id": "D",
        "body": "Reading a generated explanation that repeats the required behavior"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Claude Code guidance recommends giving the agent checks it can run and showing evidence. Executable cases for both required behaviors verify the contract more directly than prose or patch size.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/best-practices"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-063",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "refactor-behavior-versus-golden-transport",
    "type": "single",
    "selectCount": 1,
    "body": "A pure request adapter is being refactored; it must produce the same JSON field values for fixed inputs. The model itself is not called in this test. Which regression check is appropriate?",
    "options": [
      {
        "id": "A",
        "body": "Replace structural assertions with semantic similarity scoring of serialized payloads"
      },
      {
        "id": "B",
        "body": "Assert only that the adapter returns valid JSON"
      },
      {
        "id": "C",
        "body": "Compare parsed request structures against fixed expected structures"
      },
      {
        "id": "D",
        "body": "Test only the current live model answer for the fixed input"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Deterministic adapter behavior can be tested against explicit expected structures. Generative variability does not excuse changes to a pure serialization contract.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/best-practices"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-064",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "verification-ui-running-artifact",
    "type": "single",
    "selectCount": 1,
    "body": "A Claude-assisted change claims to fix clipped controls on a small-screen form. Unit tests pass, but none renders that viewport. What additional verification directly addresses the claimed fix?",
    "options": [
      {
        "id": "A",
        "body": "Run only a formatter and check that CSS syntax is accepted"
      },
      {
        "id": "B",
        "body": "Render the running form at the target viewport and inspect the controls"
      },
      {
        "id": "C",
        "body": "Re-run the same non-rendering unit suite several more times"
      },
      {
        "id": "D",
        "body": "Inspect only a screenshot from a wider desktop viewport"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "For UI changes, Claude Code guidance recommends visual verification against the intended result. Rendering the affected viewport provides evidence for clipping that non-rendering unit tests do not.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/best-practices"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-065",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "pdf-visual-content-preservation",
    "type": "single",
    "selectCount": 1,
    "body": "A document assistant must interpret a chart that appears only as a graphic in a PDF. The surrounding extracted text does not contain the chart values. Which input design preserves the evidence the task needs?",
    "options": [
      {
        "id": "A",
        "body": "Send the PDF as a supported document block for combined text and visual analysis"
      },
      {
        "id": "B",
        "body": "Submit only an OCR transcript of the surrounding prose"
      },
      {
        "id": "C",
        "body": "Index the extracted text and retrieve the most relevant paragraphs"
      },
      {
        "id": "D",
        "body": "Summarize each page from its extracted text before asking about the chart"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "PDF processing supplies page images together with extracted text, preserving visual evidence that a text-only extraction would discard.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/pdf-support"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-066",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "uploaded-file-reference-reuse",
    "type": "single",
    "selectCount": 1,
    "body": "An application asks several different questions about the same supported PDF. It wants to avoid uploading the PDF bytes for every request, without assuming the model remembers prior calls. What should it do?",
    "options": [
      {
        "id": "A",
        "body": "Enable prompt caching but continue sending the full PDF bytes each time"
      },
      {
        "id": "B",
        "body": "Upload the file once and include its file_id in each relevant Messages request"
      },
      {
        "id": "C",
        "body": "Store only the returned file_id in a local variable and omit all document blocks from later requests"
      },
      {
        "id": "D",
        "body": "Compress the PDF before resending its full bytes for each question"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The Files API returns a file_id that can be referenced in later Messages requests without uploading the bytes again. The document reference still belongs in each request that needs it.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/files"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-067",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "files-immutable-replacement",
    "type": "single",
    "selectCount": 1,
    "body": "An uploaded policy PDF is corrected. Future requests must use the corrected content; existing requests are already finished. Which update strategy matches the Files API lifecycle?",
    "options": [
      {
        "id": "A",
        "body": "Update the existing file’s filename and assume future reads use the corrected local file"
      },
      {
        "id": "B",
        "body": "Replace the existing file’s content through an in-place update request"
      },
      {
        "id": "C",
        "body": "Upload the corrected PDF, update the application reference, then delete the obsolete file"
      },
      {
        "id": "D",
        "body": "Keep the old file_id and attach a correction note while treating the stored document as updated"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Uploaded files cannot be modified or renamed. Updating content requires a new upload; the application should switch its reference and retire the old file.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/files"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-068",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "files-api-model-facing-reuse-keep",
    "type": "single",
    "selectCount": 1,
    "body": "A product lets users upload policy documents for analysis and promises that the original files can be downloaded months later. The team also uses Claude's Files API to avoid repeatedly uploading the same content for inference. What is the safest architecture?",
    "options": [
      {
        "id": "A",
        "body": "Discard the original as soon as the first Claude request succeeds."
      },
      {
        "id": "B",
        "body": "Store only the model's summary because it is equivalent to the original file."
      },
      {
        "id": "C",
        "body": "Assume a model file reference is the product's permanent document archive."
      },
      {
        "id": "D",
        "body": "Use the Files API for model-facing reuse but keep product-required originals in application-controlled durable storage."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Files used for inference and files retained as part of the product have different lifecycle requirements. Product durability should be owned explicitly by the application rather than inferred from a model-input convenience layer.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/files"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-069",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "authorize-current-tenant-allowed-referenced",
    "type": "single",
    "selectCount": 1,
    "body": "A multi-tenant application stores Claude file references. A browser may request analysis by submitting an arbitrary stored file identifier. What check belongs before the identifier is sent to Claude?",
    "options": [
      {
        "id": "A",
        "body": "Assume possession of any valid identifier proves ownership."
      },
      {
        "id": "B",
        "body": "Ask the model whether the file probably belongs to the user."
      },
      {
        "id": "C",
        "body": "Authorize that the current tenant is allowed to use the referenced file."
      },
      {
        "id": "D",
        "body": "Put all file identifiers in the system prompt so Claude can choose the owner."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Application-level authorization must protect object references before they cross into downstream services. A valid technical identifier is not itself an authorization decision.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/files",
      "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-070",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "verified-text-representation-retrieval-citation",
    "type": "single",
    "selectCount": 1,
    "body": "A document assistant must answer questions from scanned contracts and show reviewers the evidence supporting each answer. OCR quality varies. What design is strongest?",
    "options": [
      {
        "id": "A",
        "body": "Treat any OCR output as unquestionably correct and discard the scan."
      },
      {
        "id": "B",
        "body": "Create a verified text representation for retrieval/citation and retain the original scan for visual inspection when needed."
      },
      {
        "id": "C",
        "body": "Ask Claude to invent exact quotations when OCR is missing."
      },
      {
        "id": "D",
        "body": "Use only page images and claim every generated statement has a precise text citation."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "For scan-heavy workflows, text extraction and visual evidence serve different purposes. Verified text supports searchable/citable evidence, while the original image remains useful for checking OCR-sensitive details.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/pdf-support"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-071",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "split-workflow-requirement-output-mechanism",
    "type": "single",
    "selectCount": 1,
    "body": "A product needs both a machine-readable decision object and a human-facing answer with source citations. One API feature combination cannot satisfy both cleanly in a single response. What is the best application-design response?",
    "options": [
      {
        "id": "A",
        "body": "Split the workflow so each requirement uses an output mechanism suited to it."
      },
      {
        "id": "B",
        "body": "Drop validation because citations make the answer trustworthy."
      },
      {
        "id": "C",
        "body": "Drop source attribution because structured data is more important."
      },
      {
        "id": "D",
        "body": "Force both requirements through prompt wording alone."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Application design can compose multiple model calls or processing stages when one response surface cannot cleanly satisfy independent contracts. The important principle is preserving both requirements rather than weakening one.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/structured-outputs"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-072",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "passage-text-together-stable-source",
    "type": "single",
    "selectCount": 1,
    "body": "An internal RAG service retrieves passages from approved policy articles. The final answer must show which article supports each claim. What should the application preserve when passing retrieved evidence to Claude?",
    "options": [
      {
        "id": "A",
        "body": "Only article titles without the relevant passages."
      },
      {
        "id": "B",
        "body": "Only the passage text after removing all source identity."
      },
      {
        "id": "C",
        "body": "The passage text together with stable source metadata that can be carried into attribution."
      },
      {
        "id": "D",
        "body": "Strip source identifiers before prompting, then reconstruct attribution from semantic similarity afterward."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Source-aware retrieval should preserve both evidence and provenance. That allows the answer layer to attribute claims to the actual retrieved source instead of reconstructing provenance afterward.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/pdf-support"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-073",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "retrieve-smaller-coherent-sections-preserve",
    "type": "single",
    "selectCount": 1,
    "body": "A RAG system retrieves entire 80-page manuals as single chunks. Answers are often correct, but citations and context are broad and noisy. What change should the team evaluate first?",
    "options": [
      {
        "id": "A",
        "body": "Concatenate more full manuals into every request."
      },
      {
        "id": "B",
        "body": "Remove retrieval metadata and let Claude rely on memory."
      },
      {
        "id": "C",
        "body": "Retrieve smaller coherent sections that preserve enough context while narrowing the evidence supplied."
      },
      {
        "id": "D",
        "body": "Increase answer length so broad evidence is easier to explain."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Retrieval granularity should match the information need. Coherent smaller sections can reduce irrelevant context and improve evidence localization without requiring arbitrary tiny fragments.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/context-windows"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-074",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "normalize-tool-results-stable-application-owned",
    "type": "single",
    "selectCount": 1,
    "body": "A retrieval tool returns results from three backends in inconsistent shapes. The agent prompt contains extensive special cases for interpreting each format and frequently breaks when a backend changes. What architectural improvement is best?",
    "options": [
      {
        "id": "A",
        "body": "Add more prompt branches for every backend-specific field."
      },
      {
        "id": "B",
        "body": "Remove result validation so all shapes are accepted."
      },
      {
        "id": "C",
        "body": "Normalize tool results into a stable application-owned contract before giving them to the agent."
      },
      {
        "id": "D",
        "body": "Ask Claude to infer the schema from failures in production."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Adapters should shield the model-facing contract from backend-specific representation changes. A stable result shape reduces prompt complexity and improves testability.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview",
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-075",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "version-effective-schema-application-artifact",
    "type": "single",
    "selectCount": 1,
    "body": "A team uses Structured Outputs for a downstream API contract. The schema is assembled dynamically from several remote definitions and occasionally changes without review. What is the strongest design improvement?",
    "options": [
      {
        "id": "A",
        "body": "Remove schema validation so remote changes cannot cause errors."
      },
      {
        "id": "B",
        "body": "Resolve and version the effective schema as an application artifact that can be tested before deployment."
      },
      {
        "id": "C",
        "body": "Ask Claude to choose which schema version seems appropriate."
      },
      {
        "id": "D",
        "body": "Resolve remote schema definitions at request time and accept changes without versioning the effective contract."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "An output schema is part of the production interface and should be reproducible. Resolving and versioning the effective contract makes changes reviewable and testable.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/structured-outputs",
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-076",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "enforce-business-authorization-rule-independently",
    "type": "single",
    "selectCount": 1,
    "body": "A structured output requires a numeric `refund_amount`. Company policy also says values above €500 need separate approval. Which responsibility belongs to the application even when schema-constrained output is used?",
    "options": [
      {
        "id": "A",
        "body": "Encode the policy only in a free-form example and remove downstream checks."
      },
      {
        "id": "B",
        "body": "Enforce the business authorization rule independently of the output shape."
      },
      {
        "id": "C",
        "body": "Assume a valid number is automatically an authorized refund."
      },
      {
        "id": "D",
        "body": "Use a larger model instead of an authorization control."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Structured Outputs constrain representation, not all business semantics. Application policy must still validate and authorize consequential values.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/structured-outputs"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-077",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "maintain-versioned-shared-base-explicit",
    "type": "single",
    "selectCount": 1,
    "body": "Several services share a carefully tested system policy, while each product adds a small task-specific instruction. Engineers currently copy and edit the full policy in every service. What design reduces drift?",
    "options": [
      {
        "id": "A",
        "body": "Keep unrelated hand-edited copies in every service."
      },
      {
        "id": "B",
        "body": "Move the entire policy into user-provided text."
      },
      {
        "id": "C",
        "body": "Maintain a versioned shared base with explicit task-specific additions."
      },
      {
        "id": "D",
        "body": "Ask Claude to reconstruct the shared policy from the product name."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Shared behavior is easier to evaluate and update when it has one maintained source and controlled extensions. Copy-pasted prompt variants create configuration drift.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices",
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-078",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "configuration-sources-loaded-hosted-runtime",
    "type": "single",
    "selectCount": 1,
    "body": "A hosted agent behaves differently from local development because it unexpectedly inherits machine-specific Claude Code configuration. The production service should use only explicitly approved project inputs. What should the design do?",
    "options": [
      {
        "id": "A",
        "body": "Copy the developer's entire home directory into production."
      },
      {
        "id": "B",
        "body": "Increase reasoning effort so hidden configuration no longer matters."
      },
      {
        "id": "C",
        "body": "Assume every machine has identical user configuration."
      },
      {
        "id": "D",
        "body": "Make the configuration sources loaded by the hosted runtime explicit and test them in the deployment environment."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Hosted agent behavior depends on its effective configuration. Production should deliberately control and verify configuration sources rather than inheriting developer-machine state by accident.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/settings",
      "https://code.claude.com/docs/en/agent-sdk/overview"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-079",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "plugin-deployment-dependency-materialize-install",
    "type": "single",
    "selectCount": 1,
    "body": "A production agent depends on a reusable plugin stored in another repository. Deployments occasionally start without it because the runtime assumes the plugin will somehow be present. What should change?",
    "options": [
      {
        "id": "A",
        "body": "Mention the plugin name in the prompt and assume that installs it."
      },
      {
        "id": "B",
        "body": "Use the newest version found on the internet at runtime without testing."
      },
      {
        "id": "C",
        "body": "Remove readiness checks so deployment can continue."
      },
      {
        "id": "D",
        "body": "Treat the plugin as a deployment dependency: materialize/install a known version and verify it is available before serving traffic."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Reusable agent extensions are dependencies. Their version and presence should be reproducible and verified just like other application dependencies.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/plugins"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-080",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "plugin-distribution-package-choice",
    "type": "single",
    "selectCount": 1,
    "body": "Several repositories need the same maintained combination of skills, hooks, and MCP configuration, released as one versioned unit. Which Claude Code packaging approach fits?",
    "options": [
      {
        "id": "A",
        "body": "Distribute only a shared CLAUDE.md import and leave hooks and MCP configuration outside the release"
      },
      {
        "id": "B",
        "body": "Install the bundle in one developer’s project-local settings and rely on coworkers to discover it"
      },
      {
        "id": "C",
        "body": "Put all components into one skill’s prose and omit hook/MCP configuration files"
      },
      {
        "id": "D",
        "body": "Package the components as a reusable plugin"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Plugins bundle skills, hooks, agents, and MCP servers for reusable, versioned distribution across projects and teams.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/plugins"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-081",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "clear-package-action-identities-intended",
    "type": "single",
    "selectCount": 1,
    "body": "Two installed workflow packages expose similarly named review actions. Operators sometimes invoke the wrong one. What packaging/design change best reduces this ambiguity?",
    "options": [
      {
        "id": "A",
        "body": "Rely on installation order to decide which action wins."
      },
      {
        "id": "B",
        "body": "Use clear package and action identities so the intended workflow is selected explicitly."
      },
      {
        "id": "C",
        "body": "Ask users to memorize which copy loaded last."
      },
      {
        "id": "D",
        "body": "Rename both actions to the same shorter name."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Reusable extensions should have clear, distinguishable identities. Explicit selection is safer than accidental resolution through load order or ambiguous names.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/plugins",
      "https://code.claude.com/docs/en/skills"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-082",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "bundled-assets-relative-installed-package",
    "type": "single",
    "selectCount": 1,
    "body": "A reusable plugin contains scripts and reference files. It works only on the author's laptop because its instructions use absolute paths from that machine. What is the portability fix?",
    "options": [
      {
        "id": "A",
        "body": "Copy the absolute paths into CLAUDE.md."
      },
      {
        "id": "B",
        "body": "Resolve bundled assets relative to the installed package/plugin location or another documented portable base."
      },
      {
        "id": "C",
        "body": "Require every developer to create the author's home-directory path."
      },
      {
        "id": "D",
        "body": "Search several likely installation directories at runtime and use the first matching file."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Reusable packages should not depend on machine-specific absolute paths. Bundled resources need paths that resolve from the deployed artifact or another explicit environment configuration.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/plugins"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-083",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "convert-supported-representation-validate-required",
    "type": "single",
    "selectCount": 1,
    "body": "A document workflow receives a file format that the Claude document interface does not accept directly, but the application can legally transform it without losing the information needed for the task. What should it do?",
    "options": [
      {
        "id": "A",
        "body": "Change only the filename extension and send the original bytes."
      },
      {
        "id": "B",
        "body": "Put the binary data into ordinary prompt text."
      },
      {
        "id": "C",
        "body": "Assume every file format is supported if its contents are readable on the developer's computer."
      },
      {
        "id": "D",
        "body": "Convert it to a supported representation and validate that the required content survived the conversion."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Input preprocessing is part of application design. Unsupported formats should be converted into a supported representation while preserving the task-relevant information.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/pdf-support"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-084",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "vision-input-quality-debugging",
    "type": "single",
    "selectCount": 1,
    "body": "An invoice reader starts misreading small text after a new image-compression step. The original images are legible. Which investigation most directly addresses this changed input condition?",
    "options": [
      {
        "id": "A",
        "body": "Tighten the output schema while leaving the compressed input unchanged"
      },
      {
        "id": "B",
        "body": "Evaluate prompts against the original images while production keeps sending compressed images"
      },
      {
        "id": "C",
        "body": "Inspect only the original high-resolution images and declare input quality unchanged"
      },
      {
        "id": "D",
        "body": "Inspect the actual compressed images sent to Claude and reduce damaging compression"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Lossy compression can introduce artifacts that make text hard to read. Inspect the actual submitted images rather than assuming they preserve the originals’ legibility.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/vision"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-085",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "vision-approximate-count-product-contract",
    "type": "single",
    "selectCount": 1,
    "body": "A parts-inspection prototype counts many tiny overlapping objects in photographs. The product contract requires exact counts with no unchecked errors. What is the defensible design decision?",
    "options": [
      {
        "id": "A",
        "body": "Add an independent verification step instead of treating Claude’s image count as guaranteed exact"
      },
      {
        "id": "B",
        "body": "Use temperature zero and accept the resulting count without independent checks"
      },
      {
        "id": "C",
        "body": "Ask for a confidence score and accept every count labeled certain"
      },
      {
        "id": "D",
        "body": "Require a valid integer in JSON and treat schema validity as count verification"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Image object counts can be approximate, especially for many small objects. A product requiring exactness needs independent verification rather than relying on output formatting or confidence wording.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/vision"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-086",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "preserve-attribution-metadata-through-application",
    "type": "single",
    "selectCount": 1,
    "body": "A document-answering API returns source-attribution metadata, but the frontend discards it and shows only prose. Reviewers need to verify individual claims. What should change?",
    "options": [
      {
        "id": "A",
        "body": "Replace citations with a single confidence percentage."
      },
      {
        "id": "B",
        "body": "Ask users to trust the answer because the backend received documents."
      },
      {
        "id": "C",
        "body": "Preserve the attribution metadata through the application and render it with the relevant answer content."
      },
      {
        "id": "D",
        "body": "Show only a list of all possible documents with no claim association."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Source attribution is useful only if the application preserves it across layers. Rendering the relationship between claims and evidence supports review and calibrated trust.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/pdf-support"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-087",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "shared-project-guidance-versioned-source",
    "type": "single",
    "selectCount": 1,
    "body": "A team wants interactive Claude Code sessions and its hosted Agent SDK service to follow the same maintained repository conventions. What architecture best reduces duplicated instructions?",
    "options": [
      {
        "id": "A",
        "body": "Keep shared project guidance in a versioned project source that both environments are deliberately configured to load."
      },
      {
        "id": "B",
        "body": "Copy the guidance into two unrelated strings and update whichever one someone remembers."
      },
      {
        "id": "C",
        "body": "Rely on the selected model to infer repository conventions automatically."
      },
      {
        "id": "D",
        "body": "Store the guidance only in one engineer's personal settings."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Shared project behavior should come from a maintained, versioned source that each relevant runtime intentionally loads. This improves consistency across interactive and hosted use.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/memory",
      "https://code.claude.com/docs/en/agent-sdk/overview"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-088",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "instruction-guidance-not-hard-precedence",
    "type": "single",
    "selectCount": 1,
    "body": "Two CLAUDE.md files loaded into an SDK agent contain contradictory formatting instructions. A reviewer assumes the nested file mechanically replaces the parent file. What should the application designer recognize?",
    "options": [
      {
        "id": "A",
        "body": "The SDK chooses exactly one file using the JSON-settings precedence stack"
      },
      {
        "id": "B",
        "body": "The parent’s text is discarded whenever a child file has any content"
      },
      {
        "id": "C",
        "body": "The SDK refuses to start whenever two instruction files express contradictory preferences"
      },
      {
        "id": "D",
        "body": "Instruction files are additive context; remove the conflict rather than assume settings-style replacement"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "CLAUDE.md sources are combined as context, not merged under a hard settings precedence rule. Conflicting instructions should be reconciled explicitly.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/claude-code-features"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-089",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "design-explicit-data-lifecycle-meets",
    "type": "single",
    "selectCount": 1,
    "body": "A regulated product promises that customer artifacts are retained for exactly a defined period and then handled according to a documented deletion policy. Can the team satisfy that obligation merely by choosing whatever default retention behavior a model API happens to provide?",
    "options": [
      {
        "id": "A",
        "body": "Yes, provided the prompt mentions the retention period."
      },
      {
        "id": "B",
        "body": "No, because Claude applications can never process regulated data."
      },
      {
        "id": "C",
        "body": "Yes. Treat the provider's current default retention as the product policy without adding application controls."
      },
      {
        "id": "D",
        "body": "Design an explicit data lifecycle that meets the product's retention and deletion commitments."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Business data-lifecycle commitments must be designed and verified explicitly. Provider features can be components of that design, but defaults should not be assumed to satisfy a contractual policy.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/files"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-090",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "consistent-evidence-contract-preserves-source",
    "type": "single",
    "selectCount": 1,
    "body": "A RAG application combines evidence from several retrieval sources. Some passages retain provenance while others are inserted as anonymous text. The product requires verifiable answers. What should the team standardize?",
    "options": [
      {
        "id": "A",
        "body": "A consistent evidence contract that preserves source identity for every passage eligible to support the answer."
      },
      {
        "id": "B",
        "body": "Provide source identity only for passages that support the expected answer."
      },
      {
        "id": "C",
        "body": "Let Claude invent missing source names from the text."
      },
      {
        "id": "D",
        "body": "Remove provenance from all passages so they are consistent."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Evidence should be handled consistently. If answers must be verifiable, every source that can support a claim should carry trustworthy provenance rather than a mix of attributable and anonymous text.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/context-windows"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-091",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "package-related-components-versioned-extension",
    "type": "single",
    "selectCount": 1,
    "body": "A reusable Claude Code extension bundles a Skill, hooks, and MCP configuration that are intended to ship and version together. What packaging decision best supports reuse?",
    "options": [
      {
        "id": "A",
        "body": "Distribute each file through unrelated chat messages."
      },
      {
        "id": "B",
        "body": "Package the related components as one versioned extension/plugin artifact with documented setup."
      },
      {
        "id": "C",
        "body": "Install the pieces manually on one engineer's laptop and call that the release."
      },
      {
        "id": "D",
        "body": "Put all behavior in a single system prompt and omit the actual hook/MCP configuration."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "When multiple extension components form one reusable capability, a versioned package makes installation, review, and reproduction tractable across environments.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/plugins"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-092",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "supported-schema-shape-enforce-remaining",
    "type": "single",
    "selectCount": 1,
    "body": "A schema can constrain the structure of Claude's final JSON, but an important business rule cannot be represented reliably in the supported schema subset. What should the application do?",
    "options": [
      {
        "id": "A",
        "body": "Use the supported schema for shape and enforce the remaining rule in application validation."
      },
      {
        "id": "B",
        "body": "Assume natural-language prompt wording turns every rule into a hard decoder constraint."
      },
      {
        "id": "C",
        "body": "Remove the business rule."
      },
      {
        "id": "D",
        "body": "Accept any schema-shaped output as semantically valid."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Structured output and application validation are complementary. Unsupported or domain-specific constraints still belong in deterministic application checks.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/structured-outputs"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-093",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "convert-supported-representation-preserves-layout",
    "type": "single",
    "selectCount": 1,
    "body": "A customer provides a rich office document whose page layout matters to the requested analysis. The API does not accept that binary format directly as a document input. What is the best preprocessing strategy?",
    "options": [
      {
        "id": "A",
        "body": "Extract only plain text even though layout carries required information."
      },
      {
        "id": "B",
        "body": "Rename the file extension without converting the bytes."
      },
      {
        "id": "C",
        "body": "Paste the binary bytes into a text message."
      },
      {
        "id": "D",
        "body": "Convert to a supported representation that preserves the layout, then verify the conversion."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Choose an input representation that the model supports and that preserves the evidence the task depends on. Conversion quality is part of the application's responsibility.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/pdf-support"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-094",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "small-capability-check-showing-required",
    "type": "multiple",
    "selectCount": 2,
    "body": "A hosted agent requires a particular plugin before it can safely accept work. Which TWO readiness checks are appropriate? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Run a small capability check showing that the required extension is actually available to the agent."
      },
      {
        "id": "B",
        "body": "Verify that the expected version is installed or materialized in the deployment."
      },
      {
        "id": "C",
        "body": "Assume process startup proves every optional extension loaded."
      },
      {
        "id": "D",
        "body": "Check only that the plugin exists on a developer laptop."
      },
      {
        "id": "E",
        "body": "Ignore missing-extension errors until a customer encounters one."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Dependency presence and effective availability are separate concerns. A production readiness gate should verify both the artifact and the capability the runtime needs.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/plugins",
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-095",
    "domain": "applications-integration",
    "objective": "D2.6",
    "conceptKey": "config-personal-project-scope",
    "type": "multiple",
    "selectCount": 2,
    "body": "A developer wants a personal setting for one Claude Code project without changing coworkers’ configuration or other projects. Which TWO actions fit? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Edit only the committed shared project settings"
      },
      {
        "id": "B",
        "body": "Use .claude/settings.local.json for the personal override"
      },
      {
        "id": "C",
        "body": "Ensure the local file stays untracked, adding it to .gitignore if created manually"
      },
      {
        "id": "D",
        "body": "Use only the user settings file for the override"
      },
      {
        "id": "E",
        "body": "Place the personal override in managed settings distributed to the team"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Project-local settings scope an override to one developer’s project. If the file is created manually, explicitly keep it out of version control.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/settings"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-096",
    "domain": "applications-integration",
    "objective": "D2.6",
    "conceptKey": "enforce-non-negotiable-restrictions-managed-policy",
    "type": "single",
    "selectCount": 1,
    "body": "A repository has team-wide Claude Code permissions plus a developer's personal preferences. The developer assumes a personal setting can always weaken a centrally enforced restriction. What principle should guide the configuration design?",
    "options": [
      {
        "id": "A",
        "body": "Enforce non-negotiable restrictions in managed policy; keep personal/project settings within that boundary."
      },
      {
        "id": "B",
        "body": "Let the model choose which configuration source to obey."
      },
      {
        "id": "C",
        "body": "Put all enforcement rules only in natural-language instructions."
      },
      {
        "id": "D",
        "body": "Any personal file should override every administrative restriction."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Configuration layers serve different purposes. Centrally enforced policy is the right place for non-negotiable restrictions, while lower scopes handle user/project behavior within that boundary.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/settings",
      "https://code.claude.com/docs/en/permissions"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-097",
    "domain": "applications-integration",
    "objective": "D2.6",
    "conceptKey": "explicit-temporary-session-scoped-override-record",
    "type": "single",
    "selectCount": 1,
    "body": "An engineer needs to experiment with a temporary configuration change for one debugging session. The change must not silently become the team's new default. What practice best fits?",
    "options": [
      {
        "id": "A",
        "body": "Edit the shared project configuration and forget to revert it."
      },
      {
        "id": "B",
        "body": "Use an explicit temporary/session-scoped override and record the experiment separately from versioned defaults."
      },
      {
        "id": "C",
        "body": "Change the managed policy for the entire organization."
      },
      {
        "id": "D",
        "body": "Hide the change in the user prompt."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Short-lived experiments should be scoped accordingly. Keeping them separate from shared versioned configuration reduces accidental drift.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/settings"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-098",
    "domain": "applications-integration",
    "objective": "D2.6",
    "conceptKey": "portable-project-relative-paths-documented-environment",
    "type": "single",
    "selectCount": 1,
    "body": "A shared Claude configuration works only from one engineer's directory because it contains machine-specific absolute paths. What should a reusable configuration use instead?",
    "options": [
      {
        "id": "A",
        "body": "A longer system prompt explaining the author's filesystem."
      },
      {
        "id": "B",
        "body": "Search the local filesystem at runtime and pick the first path with a matching filename."
      },
      {
        "id": "C",
        "body": "Portable project-relative paths or documented environment parameters where appropriate."
      },
      {
        "id": "D",
        "body": "The author's home-directory paths committed to Git."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Team configuration should reproduce across environments. Portable paths and explicit environment-specific parameters separate reusable configuration from one machine's layout.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/settings"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-099",
    "domain": "applications-integration",
    "objective": "D2.6",
    "conceptKey": "exercise-representative-behavior-depends-changed",
    "type": "multiple",
    "selectCount": 2,
    "body": "A configuration change will be rolled out to CI and developer machines. Which TWO checks should happen before treating it as ready? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Exercise a representative behavior that depends on the changed setting."
      },
      {
        "id": "B",
        "body": "Skip version control so the setting is easier to tweak."
      },
      {
        "id": "C",
        "body": "Validate that the configuration is syntactically/loadable."
      },
      {
        "id": "D",
        "body": "Assume a code-review approval proves the runtime loaded it."
      },
      {
        "id": "E",
        "body": "Change unrelated settings at the same time to save a deployment."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Configuration is executable behavior. Validate both that the runtime accepts the file and that the intended behavior actually changes as expected.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/settings",
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-100",
    "domain": "applications-integration",
    "objective": "D2.6",
    "conceptKey": "shared-guidance-concise-load-specialized",
    "type": "single",
    "selectCount": 1,
    "body": "A root project instruction file has grown to include every rare troubleshooting procedure. Most sessions never need them, and the large file consumes context. What configuration pattern is better?",
    "options": [
      {
        "id": "A",
        "body": "Duplicate the large file into every subdirectory."
      },
      {
        "id": "B",
        "body": "Delete the specialized procedures permanently."
      },
      {
        "id": "C",
        "body": "Move all instructions into each user prompt."
      },
      {
        "id": "D",
        "body": "Keep shared guidance concise and load specialized procedures only when relevant."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Configuration should match scope. Persistent project context is best for broadly relevant guidance, while task- or path-specific mechanisms keep specialized content available without loading it everywhere.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/memory",
      "https://code.claude.com/docs/en/skills"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-101",
    "domain": "applications-integration",
    "objective": "D2.6",
    "conceptKey": "config-managed-policy-versus-guidance",
    "type": "multiple",
    "selectCount": 2,
    "body": "An administrator must centrally enforce a blocked tool action and also distribute coding-style guidance. Which TWO assignments use the appropriate Claude Code mechanisms? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Put the enforced restriction in managed permission settings"
      },
      {
        "id": "B",
        "body": "Put both requirements solely in managed CLAUDE.md"
      },
      {
        "id": "C",
        "body": "Put coding-style guidance in managed CLAUDE.md"
      },
      {
        "id": "D",
        "body": "Put the restriction only in a repository’s optional local guidance file"
      },
      {
        "id": "E",
        "body": "Let project prompts override the managed block when they request an exception"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Managed settings enforce supported restrictions, while managed CLAUDE.md supplies behavioral guidance. Markdown instructions are not a hard enforcement layer.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/memory"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-102",
    "domain": "applications-integration",
    "objective": "D2.6",
    "conceptKey": "declare-dependency-through-reproducible-setup",
    "type": "single",
    "selectCount": 1,
    "body": "A plugin depends on a helper package and works on the author's machine because that dependency was installed manually. Fresh CI environments fail. What should the maintainer do?",
    "options": [
      {
        "id": "A",
        "body": "Declare the dependency through a reproducible setup mechanism and test from a clean environment."
      },
      {
        "id": "B",
        "body": "Document that CI should keep retrying until the dependency appears."
      },
      {
        "id": "C",
        "body": "Assume a plugin manifest automatically contains every language dependency."
      },
      {
        "id": "D",
        "body": "Put the helper package name in the model prompt."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Reusable extensions need reproducible dependencies. Clean-environment testing catches hidden machine state before distribution.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/plugins"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-103",
    "domain": "applications-integration",
    "objective": "D2.6",
    "conceptKey": "separate-durable-runtime-data-versioned",
    "type": "single",
    "selectCount": 1,
    "body": "A versioned plugin stores user-generated state inside the same directory as its installed code. An upgrade replaces that directory and the state disappears. What design is better?",
    "options": [
      {
        "id": "A",
        "body": "Embed the state in the plugin's source code before each run."
      },
      {
        "id": "B",
        "body": "Assume every package upgrade copies arbitrary runtime-created files."
      },
      {
        "id": "C",
        "body": "Separate durable runtime data from versioned package code and give the state an explicit persistence location."
      },
      {
        "id": "D",
        "body": "Store the state only in Claude's active context."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Versioned code artifacts and durable application state have different lifecycles. Separating them prevents an upgrade from accidentally becoming a data migration.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/plugins"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-104",
    "domain": "applications-integration",
    "objective": "D2.6",
    "conceptKey": "config-scoped-rules-token-loading",
    "type": "single",
    "selectCount": 1,
    "body": "A large repository has test-writing guidance relevant only to test files. Loading all of it into every unrelated editing task wastes context. Which arrangement is designed for this?",
    "options": [
      {
        "id": "A",
        "body": "Keep all test guidance in root CLAUDE.md for unconditional loading"
      },
      {
        "id": "B",
        "body": "Use an unconditional import from root CLAUDE.md"
      },
      {
        "id": "C",
        "body": "Put the full guidance in user-level instructions that apply to every project"
      },
      {
        "id": "D",
        "body": "Use path-scoped rules targeting the relevant test files"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Path-scoped rules load when Claude works with matching files. They keep specialized guidance from occupying every session’s context unconditionally.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/memory"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-105",
    "domain": "applications-integration",
    "objective": "D2.6",
    "conceptKey": "explicit-compatible-dependency-version-requirement",
    "type": "single",
    "selectCount": 1,
    "body": "A reusable workflow package requires another extension with capabilities that changed across versions. What should the release process capture?",
    "options": [
      {
        "id": "A",
        "body": "An explicit compatible dependency/version requirement and a test that exercises the integration."
      },
      {
        "id": "B",
        "body": "Only the dependency's display name with no version expectation."
      },
      {
        "id": "C",
        "body": "An assumption that all future versions remain compatible."
      },
      {
        "id": "D",
        "body": "A prompt telling Claude to adapt to whichever version appears."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Extension dependencies should be treated like other software dependencies: explicit compatibility plus verification prevents silent behavior drift.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/plugins",
      "https://platform.claude.com/docs/en/test-and-evaluate/develop-tests"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-106",
    "domain": "applications-integration",
    "objective": "D2.6",
    "conceptKey": "inject-credential-through-appropriate-secret",
    "type": "single",
    "selectCount": 1,
    "body": "A reusable extension needs an API credential that differs for each deployment. Where should that value live?",
    "options": [
      {
        "id": "A",
        "body": "As a hard-coded default in the plugin source."
      },
      {
        "id": "B",
        "body": "In the Skill instructions so Claude can read it."
      },
      {
        "id": "C",
        "body": "In a committed example configuration containing the real key."
      },
      {
        "id": "D",
        "body": "Inject the credential through an appropriate secret mechanism outside version-controlled code and prompts."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Environment-specific secrets should be injected securely rather than packaged with reusable code or model-visible instructions. This preserves both portability and secret hygiene.",
    "sourceRefs": [
      "https://support.claude.com/en/articles/9767949-api-key-best-practices-keeping-your-keys-safe-and-secure",
      "https://code.claude.com/docs/en/settings"
    ],
    "qualityStatus": "APPROVED"
  }
];
