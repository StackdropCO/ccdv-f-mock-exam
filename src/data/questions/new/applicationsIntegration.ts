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
    "conceptKey": "lifecycle-provider-retirement-scope",
    "type": "single",
    "selectCount": 1,
    "body": "A company invokes Claude through both the direct Claude API and a partner-operated cloud platform. It sees a retirement date on Anthropic’s model-deprecations page. What must its maintenance plan account for?",
    "options": [
      {
        "id": "A",
        "body": "That partner-operated platforms can have separate retirement schedules"
      },
      {
        "id": "B",
        "body": "That the direct API retirement date is automatically binding on every provider"
      },
      {
        "id": "C",
        "body": "That a currently successful partner request proves indefinite future availability"
      },
      {
        "id": "D",
        "body": "That keeping the same model display name guarantees identical lifecycle dates"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Anthropic distinguishes its operated-platform retirement dates from partner-operated schedules. A multi-provider maintenance plan must check the relevant provider dates rather than assume one universal deadline.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/about-claude/model-deprecations"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-014",
    "domain": "applications-integration",
    "objective": "D2.2",
    "conceptKey": "lifecycle-inventory-deprecated-usage",
    "type": "single",
    "selectCount": 1,
    "body": "A deprecated model must be removed before retirement, but the team has several API keys and cannot identify all callers. Which documented evidence most directly helps scope the migration?",
    "options": [
      {
        "id": "A",
        "body": "Search only the source code of the team’s most recently deployed service"
      },
      {
        "id": "B",
        "body": "An export of API usage broken down by key and model"
      },
      {
        "id": "C",
        "body": "Inspect only the application currently producing the most tokens"
      },
      {
        "id": "D",
        "body": "Read the deprecation notice again without identifying actual callers"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The model-deprecation guide describes exporting usage by API key and model to locate remaining usage. That inventory identifies migration scope across callers.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/about-claude/model-deprecations"
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
    "conceptKey": "lifecycle-artifact-retention",
    "type": "single",
    "selectCount": 1,
    "body": "A batch-analysis application needs to retain its generated results for six months. Its current implementation stores only Message Batch IDs and expects to download results whenever an auditor asks. What must change?",
    "options": [
      {
        "id": "A",
        "body": "Persist the needed results in application-controlled storage while they are available"
      },
      {
        "id": "B",
        "body": "Store only the batch ID and rely on indefinitely repeatable downloads"
      },
      {
        "id": "C",
        "body": "Delay all result retrieval until the six-month audit date"
      },
      {
        "id": "D",
        "body": "Treat the retained batch status record as a substitute for the generated result content"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Batch result downloads have a limited retention period. Six-month application retention therefore requires storing the needed result artifacts outside that temporary download window.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/batch-processing"
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
    "conceptKey": "batch-dual-cap-partitioning",
    "type": "single",
    "selectCount": 1,
    "body": "A batch-building service has two candidate payloads: one exceeds the documented request-count cap but fits the byte-size cap; the other fits the count cap but exceeds the byte-size cap. Which submission policy is valid?",
    "options": [
      {
        "id": "A",
        "body": "Submit the entire batch because only request count is limited"
      },
      {
        "id": "B",
        "body": "Submit the entire batch because only byte size is limited"
      },
      {
        "id": "C",
        "body": "Split it into batches satisfying both the request-count cap and byte-size cap"
      },
      {
        "id": "D",
        "body": "Enable streaming on the batch so neither limit applies"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Message Batches are limited by both request count and payload size, whichever is reached first. A submission must satisfy both limits; meeting just one does not make it valid.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/batch-processing"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-023",
    "domain": "applications-integration",
    "objective": "D2.3",
    "conceptKey": "batch-cancel-partial-success",
    "type": "multiple",
    "selectCount": 2,
    "body": "An operator cancels a Message Batch after some requests have already completed. Which TWO statements should guide reconciliation? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "After cancellation finishes, inspect the per-item results for completed answers"
      },
      {
        "id": "B",
        "body": "Treat every originally submitted request as canceled"
      },
      {
        "id": "C",
        "body": "Expect completed requests to be undone by cancellation"
      },
      {
        "id": "D",
        "body": "The batch can end with a mixture of succeeded and canceled item outcomes"
      },
      {
        "id": "E",
        "body": "Expect canceling to be the permanent terminal status"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Cancellation passes through canceling to ended and can leave partial successful results. Inspecting per-request outcomes preserves completed answers.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/batch-processing"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-024",
    "domain": "applications-integration",
    "objective": "D2.3",
    "conceptKey": "execution-data-dependency",
    "type": "single",
    "selectCount": 1,
    "body": "A report requires first extracting a customer ID and then querying Claude with that extracted ID. A developer puts both Messages requests into one batch and expects the second to receive the first response automatically. What is the flaw?",
    "options": [
      {
        "id": "A",
        "body": "Submit the dependent item immediately after the first array entry to enforce a dependency"
      },
      {
        "id": "B",
        "body": "Use matching custom_id values so the API shares output between the two items"
      },
      {
        "id": "C",
        "body": "Put both requests in the same batch to share the first request’s runtime state"
      },
      {
        "id": "D",
        "body": "Obtain the first result, then construct and submit the request that depends on it"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Requests in a Message Batch are processed independently. A batch is not a dependency graph that injects one result into another request.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/batch-processing"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-025",
    "domain": "applications-integration",
    "objective": "D2.3",
    "conceptKey": "batch-parameter-validation-timing",
    "type": "multiple",
    "selectCount": 2,
    "body": "Batch creation succeeds, but later entries report invalid_request_error for their Messages params. Which TWO conclusions or actions follow from the documented interface? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Successful batch creation proves every item’s Messages params are valid"
      },
      {
        "id": "B",
        "body": "Per-item params may be validated asynchronously after creation"
      },
      {
        "id": "C",
        "body": "Test representative params with the realtime Messages API before a large batch submission"
      },
      {
        "id": "D",
        "body": "Treat every invalid_request_error as a successful classification label"
      },
      {
        "id": "E",
        "body": "Resubmit the same invalid params indefinitely without correction"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Per-item Messages parameter validation occurs asynchronously. Testing request shapes with the Messages API and inspecting item results is necessary even after batch creation succeeds.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/batch-processing"
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
    "conceptKey": "stream-cumulative-usage",
    "type": "single",
    "selectCount": 1,
    "body": "A stream sends message_delta usage output_tokens values of 10, then 18, then 25. An accounting function sums them and records 53 tokens. What is wrong?",
    "options": [
      {
        "id": "A",
        "body": "Count only changes in the number of message_delta events"
      },
      {
        "id": "B",
        "body": "Those token counts are cumulative; the latest total is 25, not their sum"
      },
      {
        "id": "C",
        "body": "Use the first total because later updates are duplicates"
      },
      {
        "id": "D",
        "body": "Average the three values to estimate final usage"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Usage token counts in message_delta events are cumulative. Summing successive totals double-counts earlier tokens.",
    "sourceRefs": [
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
    "conceptKey": "forward-compatible-enumeration",
    "type": "multiple",
    "selectCount": 2,
    "body": "A parser supports all required documented SSE events but encounters a newly added informational event. Which TWO statements align with Anthropic’s compatibility guidance? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Continue processing known event types after gracefully handling the unknown informational type"
      },
      {
        "id": "B",
        "body": "Assume pinning anthropic-version prevents all new event types"
      },
      {
        "id": "C",
        "body": "Document that additive event types may appear within a supported API version"
      },
      {
        "id": "D",
        "body": "Interpret any unknown event as answer text"
      },
      {
        "id": "E",
        "body": "Abort every response whose event list differs from a stored fixture"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Anthropic may add event types within a version and recommends handling unknown types gracefully. An informational extension should not be mistaken for text or a tool call.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/streaming"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-032",
    "domain": "applications-integration",
    "objective": "D2.3",
    "conceptKey": "stream-ping-not-answer",
    "type": "single",
    "selectCount": 1,
    "body": "During a long response, the SSE consumer receives ping events between content deltas. The product should show only Claude’s answer text. Which treatment is correct?",
    "options": [
      {
        "id": "A",
        "body": "Append every ping payload to the answer buffer"
      },
      {
        "id": "B",
        "body": "Treat ping as the terminal event and close the stream"
      },
      {
        "id": "C",
        "body": "Restart the content-block index whenever ping arrives"
      },
      {
        "id": "D",
        "body": "Handle ping as a keepalive and continue processing content events"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Ping events can appear throughout a stream and do not represent answer content. They should not erase or be appended to the generated text.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/streaming"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-033",
    "domain": "applications-integration",
    "objective": "D2.3",
    "conceptKey": "messages-synthetic-history",
    "type": "single",
    "selectCount": 1,
    "body": "A test harness constructs a multi-turn Messages request containing a user turn, a manually written assistant turn, and another user turn. The assistant turn is historical context, not a final prefill. Is that necessarily invalid?",
    "options": [
      {
        "id": "A",
        "body": "Yes; historical assistant turns must carry evidence that the same SDK client generated them"
      },
      {
        "id": "B",
        "body": "No; historical assistant messages may be supplied synthetically as context"
      },
      {
        "id": "C",
        "body": "Yes; any assistant role anywhere in input is a forbidden response prefill"
      },
      {
        "id": "D",
        "body": "No; synthetic historical turns cause permanent fine-tuning of the model"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Historical assistant messages can be synthetic. Including one supplies context; it does not create automatic server-side conversation memory.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/working-with-messages"
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
    "conceptKey": "typed-image-source",
    "type": "single",
    "selectCount": 1,
    "body": "An application has a publicly fetchable JPEG URL and wants to provide that image to Claude without downloading and base64-encoding it locally. Which supported representation meets the requirement?",
    "options": [
      {
        "id": "A",
        "body": "An image content block with source type url and the image URL"
      },
      {
        "id": "B",
        "body": "A text block containing only the JPEG URL, relying on automatic attachment conversion"
      },
      {
        "id": "C",
        "body": "An image block with source type base64 but raw URL text in data"
      },
      {
        "id": "D",
        "body": "A tool_result block containing the URL without a matching tool call"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The Messages vision interface accepts a URL source for an image block. This supplies the image directly without a local base64 conversion step.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/working-with-messages"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-036",
    "domain": "applications-integration",
    "objective": "D2.3",
    "conceptKey": "stop-sequence-identification",
    "type": "single",
    "selectCount": 1,
    "body": "An integration configures two custom stop sequences. A response has stop_reason `stop_sequence`, and the application must identify which configured sequence matched using the dedicated response metadata. Which field contains that value?",
    "options": [
      {
        "id": "A",
        "body": "stop_reason"
      },
      {
        "id": "B",
        "body": "content"
      },
      {
        "id": "C",
        "body": "usage"
      },
      {
        "id": "D",
        "body": "stop_sequence"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "For stop_reason stop_sequence, the response’s stop_sequence field identifies the matched sequence. Other metadata fields do not encode that match.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/handling-stop-reasons"
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
    "conceptKey": "forward-compatible-enumeration",
    "type": "single",
    "selectCount": 1,
    "body": "A service pins the supported anthropic-version header and validates that every response has exactly the set of fields seen in one fixture. A newly added optional output field breaks it. Which assumption was invalid?",
    "options": [
      {
        "id": "A",
        "body": "Pinning anthropic-version pins the exact number of response properties"
      },
      {
        "id": "B",
        "body": "A new optional response field always requires a new model ID"
      },
      {
        "id": "C",
        "body": "The versioning policy allows additive output information within the same version"
      },
      {
        "id": "D",
        "body": "Only streaming responses may receive additive information"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The API versioning policy preserves existing parameters but permits additional output values and optional inputs. A consumer should not mistake an additive response field for a protocol-breaking change.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/api/versioning"
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
    "conceptKey": "sdk-retry-layer-multiplication",
    "type": "single",
    "selectCount": 1,
    "body": "An outer retry loop invokes a Python SDK call up to three times. The SDK is explicitly configured with max_retries=2. Every HTTP attempt receives a retryable 500 and no cancellation occurs. What is the maximum number of HTTP attempts?",
    "options": [
      {
        "id": "A",
        "body": "3"
      },
      {
        "id": "B",
        "body": "5"
      },
      {
        "id": "C",
        "body": "6"
      },
      {
        "id": "D",
        "body": "9"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Each SDK invocation can make one initial attempt plus two retries. Three outer invocations can therefore produce nine HTTP attempts, so retry layers must be accounted for together.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/python"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-041",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "sdk-single-owner-retries",
    "type": "single",
    "selectCount": 1,
    "body": "An application already has a central retry controller with a measured backoff policy. It requires each invocation of the Python SDK to make exactly one HTTP attempt so the controller owns retries. Which SDK setting meets this requirement?",
    "options": [
      {
        "id": "A",
        "body": "max_retries=1"
      },
      {
        "id": "B",
        "body": "max_retries=0"
      },
      {
        "id": "C",
        "body": "A longer request timeout while retaining retries"
      },
      {
        "id": "D",
        "body": "An outer loop limited to one SDK invocation while retaining SDK retries"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Setting max_retries=0 disables the SDK’s automatic retries. A value of one permits an additional attempt, while timeout and output length do not establish retry ownership.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/python"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-042",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "sdk-per-request-retry-isolation",
    "type": "single",
    "selectCount": 1,
    "body": "A shared Python SDK client serves interactive calls and a one-off background request. Only the background request needs max_retries=5. Which approach applies that change without replacing the shared client’s default retry policy?",
    "options": [
      {
        "id": "A",
        "body": "Use client.with_options(max_retries=5) for the background call"
      },
      {
        "id": "B",
        "body": "Mutate a private retry attribute on the shared client before calling it"
      },
      {
        "id": "C",
        "body": "Add max_retries to the user prompt"
      },
      {
        "id": "D",
        "body": "Change the global client default while interactive requests are running"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The Python SDK supports per-request overrides through with_options. That gives the background request its policy without changing the shared default used by other calls.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/python"
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
    "conceptKey": "json-duplicate-member-interoperability",
    "type": "single",
    "selectCount": 1,
    "body": "A configuration generator emits `{ \"max_tokens\": 100, \"max_tokens\": 900 }`. Different consumers disagree about the value. What change is required for interoperable interpretation?",
    "options": [
      {
        "id": "A",
        "body": "Keep only one max_tokens member with the intended value"
      },
      {
        "id": "B",
        "body": "Always assume the first occurrence wins in every JSON parser"
      },
      {
        "id": "C",
        "body": "Always assume the last occurrence wins in every JSON parser"
      },
      {
        "id": "D",
        "body": "Sort the duplicate members alphabetically"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "JSON object names should be unique for interoperable interpretation. Duplicate-name handling differs among parsers, so neither first-wins nor last-wins is a universal rule.",
    "sourceRefs": [
      "https://www.rfc-editor.org/rfc/rfc8259"
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
    "conceptKey": "json-literal-versus-string",
    "type": "single",
    "selectCount": 1,
    "body": "A downstream contract expects a JSON boolean field approved. Which payload has the correct JSON type?",
    "options": [
      {
        "id": "A",
        "body": "{\"approved\": \"true\"}"
      },
      {
        "id": "B",
        "body": "{\"approved\": true}"
      },
      {
        "id": "C",
        "body": "{\"approved\": 1}"
      },
      {
        "id": "D",
        "body": "{\"approved\": \"yes\"}"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The JSON literal true is a boolean; quoted values are strings and 1 is a number. Type-sensitive consumers must receive the type the contract requires.",
    "sourceRefs": [
      "https://www.rfc-editor.org/rfc/rfc8259"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-048",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "json-nan-wire-format",
    "type": "single",
    "selectCount": 1,
    "body": "A preprocessing calculation produces NaN. The service must send standards-compliant JSON to an external integration. What must it do before serialization?",
    "options": [
      {
        "id": "A",
        "body": "Serialize bare NaN and assume every standard JSON consumer accepts it"
      },
      {
        "id": "B",
        "body": "Replace NaN with bare Infinity"
      },
      {
        "id": "C",
        "body": "Map or reject the value under an explicit application policy because NaN is not a JSON number"
      },
      {
        "id": "D",
        "body": "Silently replace NaN with numeric zero even when the application contract distinguishes missing calculations from zero"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "NaN and Infinity are not permitted by the standard JSON number grammar. The application needs an explicit valid representation or rejection policy for non-finite calculation results.",
    "sourceRefs": [
      "https://www.rfc-editor.org/rfc/rfc8259"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-049",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "json-numeric-identifier-loss",
    "type": "single",
    "selectCount": 1,
    "body": "An integration sends identifiers larger than the exact integer range of its JavaScript Number consumer. The contract can be updated, and identifiers require no arithmetic. Which representation best preserves every digit across that boundary?",
    "options": [
      {
        "id": "A",
        "body": "Round identifiers to the closest representable Number"
      },
      {
        "id": "B",
        "body": "Convert identifiers to exponent notation but still parse as Number"
      },
      {
        "id": "C",
        "body": "Split the identifier into multiple JSON numeric fields without updating the receiving contract"
      },
      {
        "id": "D",
        "body": "Represent identifiers as decimal strings and update the contract accordingly"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "JSON numeric precision is limited by consumer implementations. A decimal string preserves an identifier’s digits when the receiving numeric type cannot represent them exactly.",
    "sourceRefs": [
      "https://www.rfc-editor.org/rfc/rfc8259"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-050",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "execution-data-dependency",
    "type": "single",
    "selectCount": 1,
    "body": "An async application first extracts a document ID with Claude and then calls a lookup coroutine requiring that ID. A proposed refactor schedules both at once before the ID exists. Which dependency must remain?",
    "options": [
      {
        "id": "A",
        "body": "Await extraction before constructing the lookup call that uses its result"
      },
      {
        "id": "B",
        "body": "Schedule lookup with a placeholder ID and use the first completed response"
      },
      {
        "id": "C",
        "body": "Pass the extraction coroutine object to lookup as the document ID"
      },
      {
        "id": "D",
        "body": "Start both in gather and assume argument order delays the second until the first finishes"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Awaiting a coroutine provides its result for the dependent operation. Concurrency does not remove a data dependency or turn a coroutine object into its resolved value.",
    "sourceRefs": [
      "https://docs.python.org/3/library/asyncio-task.html"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-051",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "async-independent-result-order",
    "type": "single",
    "selectCount": 1,
    "body": "A Python service runs `results = await asyncio.gather(classify(a), classify(b))`. Both succeed, but b finishes first. In what order are the returned results?",
    "options": [
      {
        "id": "A",
        "body": "Completion order: b, then a"
      },
      {
        "id": "B",
        "body": "Random order determined by the model"
      },
      {
        "id": "C",
        "body": "Argument order: a, then b"
      },
      {
        "id": "D",
        "body": "Sorted by the contents of the generated answers"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "asyncio.gather returns successful results in the order of its input awaitables. Completion timing does not reorder that result list.",
    "sourceRefs": [
      "https://docs.python.org/3/library/asyncio-task.html"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-052",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "async-gather-per-item-errors",
    "type": "single",
    "selectCount": 1,
    "body": "A Python evaluation runner needs every independent call to finish and needs to inspect failures alongside successes. It uses asyncio.gather. Which configuration supports collecting exceptions in its result list?",
    "options": [
      {
        "id": "A",
        "body": "return_exceptions=False and ignore the first exception"
      },
      {
        "id": "B",
        "body": "return_exceptions=True, followed by explicit inspection of each result"
      },
      {
        "id": "C",
        "body": "Call gather without awaiting it and count scheduled tasks as successes"
      },
      {
        "id": "D",
        "body": "Treat every exception object as a successful model answer"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "With return_exceptions=True, gather aggregates exceptions alongside returned values. The application must inspect those entries and distinguish failures from successful answers.",
    "sourceRefs": [
      "https://docs.python.org/3/library/asyncio-task.html"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-053",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "async-taskgroup-fail-fast",
    "type": "single",
    "selectCount": 1,
    "body": "A Python 3.11+ workflow runs several related coroutines. If one raises a normal exception, the requirement is to cancel the remaining work and wait for cleanup before leaving the group. Which primitive supplies that behavior?",
    "options": [
      {
        "id": "A",
        "body": "asyncio.gather with return_exceptions=True"
      },
      {
        "id": "B",
        "body": "asyncio.gather with default exception behavior"
      },
      {
        "id": "C",
        "body": "Independent create_task calls without group cancellation logic"
      },
      {
        "id": "D",
        "body": "asyncio.TaskGroup"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "TaskGroup cancels remaining tasks when a member fails with a non-cancellation exception and waits for tasks on exit. That matches the stated structured failure behavior.",
    "sourceRefs": [
      "https://docs.python.org/3/library/asyncio-task.html"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-054",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "async-cancellation-cleanup-propagation",
    "type": "single",
    "selectCount": 1,
    "body": "An async Claude workflow catches CancelledError while cleaning up a temporary artifact. Its caller relies on cancellation to stop the workflow. What should it normally do after cleanup?",
    "options": [
      {
        "id": "A",
        "body": "Propagate CancelledError rather than report an ordinary successful result"
      },
      {
        "id": "B",
        "body": "Return a cached empty answer and mark the task successful"
      },
      {
        "id": "C",
        "body": "Treat cancellation like a transient API failure and immediately retry the operation"
      },
      {
        "id": "D",
        "body": "Suppress the exception so the parent cannot observe an incomplete result"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Python recommends cleanup in try/finally and generally propagating CancelledError after cleanup. Swallowing cancellation can interfere with structured concurrency and the caller’s stop request.",
    "sourceRefs": [
      "https://docs.python.org/3/library/asyncio-task.html"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-055",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "async-bounded-concurrency",
    "type": "multiple",
    "selectCount": 2,
    "body": "An asyncio service may have at most four outbound Claude calls in flight. Which TWO implementation choices enforce this bound and preserve capacity after failures? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Limit input processing to four requests per second without limiting call duration"
      },
      {
        "id": "B",
        "body": "Use a shared asyncio.Semaphore(4) around outbound call execution"
      },
      {
        "id": "C",
        "body": "Release the acquired semaphore permit in cleanup so failure does not permanently consume capacity"
      },
      {
        "id": "D",
        "body": "Create a new independent Semaphore(4) inside every task"
      },
      {
        "id": "E",
        "body": "Acquire the permit only after the HTTP call finishes"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "A shared semaphore limits concurrent entries to the outbound-call region. Releasing each acquired permit in cleanup, commonly with async with, ensures failures do not permanently reduce capacity.",
    "sourceRefs": [
      "https://docs.python.org/3/library/asyncio-sync.html"
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
    "conceptKey": "http-accepted-not-completed",
    "type": "single",
    "selectCount": 1,
    "body": "A tool’s internal REST service returns HTTP 202 for a queued export. The assistant must tell the user only what that status establishes. Which statement is justified?",
    "options": [
      {
        "id": "A",
        "body": "The export has finished successfully."
      },
      {
        "id": "B",
        "body": "The service rejected the job before processing."
      },
      {
        "id": "C",
        "body": "The response must contain the completed export file."
      },
      {
        "id": "D",
        "body": "The service accepted the job, but completion is not established."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "HTTP 202 means processing has been accepted but is not complete. The application needs the service’s completion mechanism before claiming the export succeeded.",
    "sourceRefs": [
      "https://httpwg.org/specs/rfc9110.html"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-058",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "http-no-content-response-parser",
    "type": "single",
    "selectCount": 1,
    "body": "A documented internal DELETE tool endpoint succeeds with HTTP 204 and no content. The adapter always parses successful response bodies as JSON and throws. What correction matches the endpoint contract?",
    "options": [
      {
        "id": "A",
        "body": "Treat the valid 204 as success without requiring a JSON body"
      },
      {
        "id": "B",
        "body": "Classify the empty response as truncated JSON and retry automatically"
      },
      {
        "id": "C",
        "body": "Wait for response content to arrive after the 204 headers"
      },
      {
        "id": "D",
        "body": "Require the endpoint to return a model-generated JSON acknowledgement before accepting its documented success"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "HTTP 204 indicates successful fulfillment with no response content. A body parser must respect that status instead of requiring JSON where the contract provides none.",
    "sourceRefs": [
      "https://httpwg.org/specs/rfc9110.html"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-059",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "git-revert-shared-history",
    "type": "single",
    "selectCount": 1,
    "body": "A faulty non-merge commit changed a Claude application’s request adapter. It is already shared, later unrelated commits must remain, and the team forbids rewriting branch history. Assuming a clean working tree, which operation records an inverse change?",
    "options": [
      {
        "id": "A",
        "body": "Force-reset the branch to before the faulty commit"
      },
      {
        "id": "B",
        "body": "Delete the repository’s history and recommit the files"
      },
      {
        "id": "C",
        "body": "git revert of the faulty commit, resolving any conflicts and verifying the result"
      },
      {
        "id": "D",
        "body": "Amend the faulty commit and force-push"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "git revert records a new commit reversing an earlier patch. It preserves the existing history, unlike rewriting the branch to remove or amend the published commit.",
    "sourceRefs": [
      "https://git-scm.com/docs/git-revert"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-060",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "git-staged-diff-review",
    "type": "single",
    "selectCount": 1,
    "body": "A developer staged the intended request-parser fix, then made additional unstaged experiments. Before committing only the staged fix, which command shows exactly the staged changes relative to HEAD?",
    "options": [
      {
        "id": "A",
        "body": "git diff"
      },
      {
        "id": "B",
        "body": "git diff --cached"
      },
      {
        "id": "C",
        "body": "git diff HEAD"
      },
      {
        "id": "D",
        "body": "git status --short"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "git diff --cached compares the index with HEAD by default. Plain git diff shows unstaged changes, while git diff HEAD includes working-tree changes beyond the staged patch.",
    "sourceRefs": [
      "https://git-scm.com/docs/git-diff"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-061",
    "domain": "applications-integration",
    "objective": "D2.4",
    "conceptKey": "git-review-branch-delta",
    "type": "single",
    "selectCount": 1,
    "body": "A feature branch for a Claude integration diverged from main, and main has since advanced independently. Reviewers want changes on the feature branch since the common ancestor. Which diff form directly expresses that comparison?",
    "options": [
      {
        "id": "A",
        "body": "git diff main feature"
      },
      {
        "id": "B",
        "body": "git diff --cached"
      },
      {
        "id": "C",
        "body": "git diff feature main"
      },
      {
        "id": "D",
        "body": "git diff main...feature"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The three-dot diff compares the merge base of the branches with the feature tip. That isolates the feature’s changes since divergence instead of comparing two independently advanced tips.",
    "sourceRefs": [
      "https://git-scm.com/docs/git-diff"
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
    "conceptKey": "files-original-download-contract",
    "type": "single",
    "selectCount": 1,
    "body": "A product promises that customers can download their original uploaded documents later. A developer plans to use the Files API as the only copy. Which design correction is required by the documented download behavior?",
    "options": [
      {
        "id": "A",
        "body": "Use retrieve_metadata to obtain and return the original file bytes"
      },
      {
        "id": "B",
        "body": "Call the content-download endpoint for any uploaded file_id after checking that upload succeeded"
      },
      {
        "id": "C",
        "body": "Remove file expiration so original uploads become downloadable"
      },
      {
        "id": "D",
        "body": "Retain originals in application-controlled storage; Files API downloads are for generated downloadable files"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Files uploaded by the application are not downloadable through the Files API. Preserve originals separately if the product must return them later.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/files"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-069",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "file-id-application-user-binding",
    "type": "single",
    "selectCount": 1,
    "body": "Two customers share an application workspace. The UI sends arbitrary file_id values supplied by the browser to the Claude API. What is the direct design flaw?",
    "options": [
      {
        "id": "A",
        "body": "Workspace file access does not enforce the application’s customer ownership; resolve file IDs through an authorized server-side mapping"
      },
      {
        "id": "B",
        "body": "The API automatically restricts each file to the browser session that first referenced it"
      },
      {
        "id": "C",
        "body": "A valid file_id is sufficient evidence that the current customer owns that file"
      },
      {
        "id": "D",
        "body": "Changing the conversation ID creates an API-enforced ownership boundary for files"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Files are accessible across the API workspace rather than scoped to an application user or conversation. Treat IDs as server-side references and enforce the user-to-file mapping.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/files"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-070",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "citation-scanned-text-limitation",
    "type": "single",
    "selectCount": 1,
    "body": "A scan-only PDF has no extractable text. Claude can visually discuss it, but the product requires native citations to its passages. Which change addresses the documented limitation?",
    "options": [
      {
        "id": "A",
        "body": "Request page-number references in prose and treat them as native text citations"
      },
      {
        "id": "B",
        "body": "Provide a verified text-bearing representation of the scan for text citations"
      },
      {
        "id": "C",
        "body": "Enable native citations on the unchanged scan and assume visual OCR makes it citable"
      },
      {
        "id": "D",
        "body": "Convert the scan to an image block and request native image-region citations"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Native citations currently reference text, and scan-only PDFs without extractable text are not citable. A verified text representation supplies citable content.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/citations"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-071",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "citations-json-output-incompatibility",
    "type": "single",
    "selectCount": 1,
    "body": "A single API request enables citations on supplied documents and also sets output_config.format to a JSON schema. Both features work separately. What explains the request failure?",
    "options": [
      {
        "id": "A",
        "body": "Each feature requires a separate API key, even when the model supports both"
      },
      {
        "id": "B",
        "body": "Citations are unsupported whenever input contains multiple documents"
      },
      {
        "id": "C",
        "body": "Native citations and structured JSON outputs cannot be enabled together in that request"
      },
      {
        "id": "D",
        "body": "The combination is rejected only on streaming requests and will work unchanged synchronously"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Citations interleave citation information with text output and are incompatible with structured output formatting in the same request. The documented result is a 400 error.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/citations"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-072",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "rag-native-source-attribution",
    "type": "single",
    "selectCount": 1,
    "body": "An internal retrieval service already returns approved passages and stable article identifiers. The UI needs native citations carrying those identifiers. Which content design directly supports that requirement?",
    "options": [
      {
        "id": "A",
        "body": "Append an unlabeled bibliography after concatenating all retrieved passages"
      },
      {
        "id": "B",
        "body": "Keep passage identifiers only in the database and send Claude the passage text without attribution"
      },
      {
        "id": "C",
        "body": "Ask Claude to infer each passage’s internal article identifier from its wording"
      },
      {
        "id": "D",
        "body": "Supply search_result blocks with source, title, text content, and citations enabled"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Search-result blocks let an application provide its own retrieved content with source and title metadata for native citations.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/search-results"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-073",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "citation-block-granularity",
    "type": "single",
    "selectCount": 1,
    "body": "A search result contains a whole manual as one text block. Every native citation returns an unhelpfully large passage. How can the application obtain finer citation boundaries without changing the manual’s words?",
    "options": [
      {
        "id": "A",
        "body": "Split the content into smaller, focused text blocks"
      },
      {
        "id": "B",
        "body": "Ask for shorter citation text while leaving the manual as a single block"
      },
      {
        "id": "C",
        "body": "Shorten the result title and source identifier"
      },
      {
        "id": "D",
        "body": "Keep one content block but add paragraph labels inside its text"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Search-result citations reference whole content blocks. Splitting the same text into focused blocks gives the model finer citation boundaries.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/search-results"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-074",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "search-result-container-homogeneity",
    "type": "single",
    "selectCount": 1,
    "body": "A custom retrieval tool returns a tool_result whose content array contains two search_result blocks and one plain text summary. The request is rejected. What is the valid way to retain the summary alongside these results?",
    "options": [
      {
        "id": "A",
        "body": "Keep the mixed array but disable citations on its search results"
      },
      {
        "id": "B",
        "body": "Put the summary text inside a search_result content array"
      },
      {
        "id": "C",
        "body": "Move the plain summary before the search_result blocks in the same content array"
      },
      {
        "id": "D",
        "body": "Change the summary’s type to search_result without adding the required source/title/content fields"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "If a tool_result contains search_result blocks, all its top-level content blocks must be search_result. Supporting text can be placed inside one result’s text content array.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/search-results"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-075",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "schema-external-reference-resolution",
    "type": "single",
    "selectCount": 1,
    "body": "A team reuses a JSON output schema that references a definition at an external HTTPS URL. It wants constrained JSON output from the API. What must change?",
    "options": [
      {
        "id": "A",
        "body": "Include the external URL in a schema description while retaining the unsupported external reference"
      },
      {
        "id": "B",
        "body": "Make the schema URL public and allow unauthenticated HTTPS access"
      },
      {
        "id": "C",
        "body": "Resolve the external definition into a supported self-contained schema before submission"
      },
      {
        "id": "D",
        "body": "Configure a longer HTTP timeout for remote definition fetching"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Structured outputs do not support external schema references. Resolve external definitions into a supported schema before sending it.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/structured-outputs"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-076",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "schema-unsupported-numeric-constraints",
    "type": "single",
    "selectCount": 1,
    "body": "A Python parsing helper transforms a Pydantic field with minimum: 100 into a simpler schema for the API. The application still requires that minimum. Which account of enforcement is correct?",
    "options": [
      {
        "id": "A",
        "body": "Only constrained decoding enforces the minimum, so downstream validation can be removed"
      },
      {
        "id": "B",
        "body": "The description makes minimum a hard decoder constraint equivalent to the original keyword"
      },
      {
        "id": "C",
        "body": "Validation against the simplified transmitted schema alone preserves the original minimum"
      },
      {
        "id": "D",
        "body": "The helper validates the response against the original schema, so application-side validation still enforces the constraint"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The SDK can remove unsupported constraints from the transmitted schema while retaining their descriptions, then validate responses against the original schema. That validation preserves the application’s numeric requirement.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/structured-outputs"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-077",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "sdk-preset-additive-instructions",
    "type": "single",
    "selectCount": 1,
    "body": "A TypeScript Agent SDK application uses the Claude Code preset. One request needs an additional review focus while retaining the preset instructions. Which systemPrompt configuration is designed for this?",
    "options": [
      {
        "id": "A",
        "body": "The claude_code preset object with an append string"
      },
      {
        "id": "B",
        "body": "Set systemPrompt to a custom string containing only the additional review focus"
      },
      {
        "id": "C",
        "body": "Set systemPrompt to the claude_code preset without an append field"
      },
      {
        "id": "D",
        "body": "Set systemPrompt to a custom string containing only the project’s CLAUDE.md contents"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The preset object’s append field adds instructions while preserving the Claude Code preset. A standalone custom string replaces the preset prompt.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/modifying-system-prompts"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-078",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "sdk-filesystem-config-opt-out-boundary",
    "type": "single",
    "selectCount": 1,
    "body": "A hosted SDK service sets settingSources: [] and assumes it has disabled every host-provided input. Which statement correctly limits that assumption?",
    "options": [
      {
        "id": "A",
        "body": "It disables project files but always keeps user and local settings enabled"
      },
      {
        "id": "B",
        "body": "It excludes user/project/local settings, but managed policy and global configuration are still read"
      },
      {
        "id": "C",
        "body": "It disables managed policy whenever user settings are disabled"
      },
      {
        "id": "D",
        "body": "It prevents host auto memory and global configuration from being read"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "An empty settingSources list excludes user, project, and local settings. It does not disable managed policy or global configuration and is not filesystem isolation.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/claude-code-features"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-079",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "sdk-plugin-local-materialization",
    "type": "single",
    "selectCount": 1,
    "body": "A deployment receives a plugin’s Git repository URL and passes it directly as a plugins entry with type: git. The current Agent SDK accepts only local plugin entries. What is the supported deployment arrangement?",
    "options": [
      {
        "id": "A",
        "body": "Pass the repository URL as a local path and rely on the SDK to clone it"
      },
      {
        "id": "B",
        "body": "Pass a marketplace identifier as the plugin type and omit the local directory"
      },
      {
        "id": "C",
        "body": "Materialize the plugin on disk and pass its root path with type: local"
      },
      {
        "id": "D",
        "body": "Put the repository URL in settingSources so filesystem discovery downloads the plugin"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The Agent SDK’s plugin option accepts local directories. Download or check out remotely distributed plugins first, then provide the plugin root path.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/plugins"
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
    "conceptKey": "plugin-namespaced-skill-disambiguation",
    "type": "single",
    "selectCount": 1,
    "body": "Two loaded plugins both define a review skill. The application must explicitly invoke the one from billing-audit. What should it send?",
    "options": [
      {
        "id": "A",
        "body": "/billing-audit:review"
      },
      {
        "id": "B",
        "body": "/review, relying on the most recently installed plugin"
      },
      {
        "id": "C",
        "body": "/billing-audit/review"
      },
      {
        "id": "D",
        "body": "/review:billing-audit"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Plugin skills use the plugin-name:skill-name namespace. Explicitly invoking /billing-audit:review disambiguates the intended skill.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/plugins"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-082",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "plugin-cache-root-path-portability",
    "type": "single",
    "selectCount": 1,
    "body": "A copied marketplace plugin works in its author’s checkout but its hook script cannot be found after installation elsewhere. The script is bundled in the plugin. Which path design is appropriate?",
    "options": [
      {
        "id": "A",
        "body": "Resolve the script relative to the author’s development checkout recorded at build time"
      },
      {
        "id": "B",
        "body": "Resolve the script from CLAUDE_PLUGIN_ROOT"
      },
      {
        "id": "C",
        "body": "Resolve the script relative to the consuming application’s working directory"
      },
      {
        "id": "D",
        "body": "Resolve bundled script paths from CLAUDE_PLUGIN_DATA alone"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Installed plugins run from their installed location. CLAUDE_PLUGIN_ROOT provides the plugin root so bundled resources can be referenced portably.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/plugins-reference"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-083",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "pdf-encryption-supported-input-boundary",
    "type": "single",
    "selectCount": 1,
    "body": "A document-processing service receives a password-protected PDF. The customer has authorized processing, and the service can unlock it using the supplied password. The application must submit a supported PDF document input to the direct Claude API. Which preparation step is required?",
    "options": [
      {
        "id": "A",
        "body": "Send the encrypted PDF unchanged and put its password in the user message"
      },
      {
        "id": "B",
        "body": "Upload the encrypted bytes through the Files API and assume file_id removes the encryption limitation"
      },
      {
        "id": "C",
        "body": "Unlock the document in authorized application processing and submit a standard unencrypted PDF"
      },
      {
        "id": "D",
        "body": "Base64-encode the encrypted file and treat encoding as decryption"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "PDF input must be a standard PDF without password protection or encryption. Unlock it through authorized preprocessing; a file reference, password in prose, or base64 encoding does not remove encryption.",
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
    "conceptKey": "citation-render-source-passage-validation",
    "type": "single",
    "selectCount": 1,
    "body": "A document-answering UI discards all citation metadata and renders only response text. Reviewers need to inspect the source passages supporting individual claims. Which change directly enables this?",
    "options": [
      {
        "id": "A",
        "body": "Show a bibliography of all input documents but discard claim-to-passage locations"
      },
      {
        "id": "B",
        "body": "Preserve and render citation locations and cited text alongside the associated answer spans"
      },
      {
        "id": "C",
        "body": "Show only one citation for the entire answer, regardless of the API’s per-span attribution"
      },
      {
        "id": "D",
        "body": "Replace cited passages with a confidence badge for each sentence"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Citation metadata provides source locations and cited passages for checking an answer. The renderer must retain that association to support source inspection.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/citations"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-087",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "sdk-context-sharing-cli-instructions",
    "type": "single",
    "selectCount": 1,
    "body": "A team maintains project conventions in CLAUDE.md for interactive Claude Code. Its SDK service must use that same maintained file rather than a copied string. Which explicit configuration supports this?",
    "options": [
      {
        "id": "A",
        "body": "Set settingSources to user only and assume repository instructions are included"
      },
      {
        "id": "B",
        "body": "Set settingSources to an empty list while relying on automatic project discovery"
      },
      {
        "id": "C",
        "body": "Include project in settingSources and run with the intended project cwd"
      },
      {
        "id": "D",
        "body": "Include project settings but point cwd at an unrelated directory without the maintained file in its hierarchy"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Including project settings loads project CLAUDE.md context. The SDK’s cwd determines project-level discovery, allowing the CLI and SDK to share the maintained file.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/claude-code-features"
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
    "conceptKey": "files-expiration-versus-erasure",
    "type": "single",
    "selectCount": 1,
    "body": "A product needs a precise promise that file bytes are permanently erased at an exact timestamp. An engineer proposes using Files API expires_at as proof. What is the correct assessment?",
    "options": [
      {
        "id": "A",
        "body": "Expiration stops API content availability but is not a guaranteed permanent-erasure deadline"
      },
      {
        "id": "B",
        "body": "Expiration guarantees simultaneous erasure of both metadata and underlying bytes"
      },
      {
        "id": "C",
        "body": "Expiration provides a guaranteed permanent-erasure deadline once the file disappears from list results"
      },
      {
        "id": "D",
        "body": "An expired file can still be supplied to new inference requests until metadata disappears"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "File expiration is a lifecycle control, not a guaranteed-deletion control. Content becomes unavailable through the API, while limited retention and metadata visibility can continue.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/files"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-090",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "search-input-citation-consistency",
    "type": "single",
    "selectCount": 1,
    "body": "A RAG request includes several search_result blocks. Some enable citations and others disable them. All passages are intended to be used as evidence. Which repair follows the API’s citation-control rule?",
    "options": [
      {
        "id": "A",
        "body": "Enable citations on retrieved results but disable them on prefetched results in the same request"
      },
      {
        "id": "B",
        "body": "Use the same citation-enabled setting on every search result in the request"
      },
      {
        "id": "C",
        "body": "Leave the settings mixed but place disabled results later in the message"
      },
      {
        "id": "D",
        "body": "Leave the settings mixed and disable streaming"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Search-result citation settings must be consistent across a request. Enable citations on all results when the application wants them all available as cited evidence.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/search-results"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-091",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "plugin-root-component-placement",
    "type": "single",
    "selectCount": 1,
    "body": "An SDK deployment points its plugin path to .claude-plugin/, but the skills and hooks directories are siblings of that directory. Which path should the application provide?",
    "options": [
      {
        "id": "A",
        "body": "The plugin.json manifest file path"
      },
      {
        "id": "B",
        "body": "The skills directory alone"
      },
      {
        "id": "C",
        "body": "The plugin root directory containing .claude-plugin, skills, and hooks"
      },
      {
        "id": "D",
        "body": "The directory above the actual plugin root"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The SDK plugin path points to the plugin root, the parent of the component directories and optional manifest directory.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/plugins"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-092",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "schema-unsupported-numeric-constraints",
    "type": "single",
    "selectCount": 1,
    "body": "A service sends raw JSON-schema output configuration directly to the API, including minimum and maximum constraints. It does not use an SDK schema-transforming helper. The API returns an unsupported-schema error. Which change preserves the business checks?",
    "options": [
      {
        "id": "A",
        "body": "Resubmit the same unsupported schema using a longer request timeout"
      },
      {
        "id": "B",
        "body": "Keep the numerical keywords but set strict output formatting again at a second configuration location"
      },
      {
        "id": "C",
        "body": "Remove the numeric constraints everywhere and accept any schema-valid number"
      },
      {
        "id": "D",
        "body": "Send a supported schema and enforce the numeric bounds in application validation"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Numerical constraints such as minimum and maximum are unsupported in the transmitted structured-output schema. A supported schema plus application validation preserves the business bounds.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/structured-outputs"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-093",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "document-binary-office-conversion",
    "type": "single",
    "selectCount": 1,
    "body": "A service submits a binary .docx file as a document block because it contains text. It must preserve the document’s layout for analysis. Which preprocessing choice matches the supported document interface?",
    "options": [
      {
        "id": "A",
        "body": "Convert the document to a supported PDF representation"
      },
      {
        "id": "B",
        "body": "Change only its filename extension to .pdf"
      },
      {
        "id": "C",
        "body": "Set media_type to text/plain while keeping the binary DOCX bytes"
      },
      {
        "id": "D",
        "body": "Send the binary bytes as an ordinary text string"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Binary .docx files are not supported directly in document blocks. Convert to a supported representation such as PDF; relabeling the same binary content is not conversion.",
    "sourceRefs": [
      "https://platform.claude.com/docs/en/build-with-claude/pdf-support"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-094",
    "domain": "applications-integration",
    "objective": "D2.5",
    "conceptKey": "sdk-plugin-load-verification",
    "type": "multiple",
    "selectCount": 2,
    "body": "A hosted SDK app must fail its own readiness check if a required plugin is absent. A nonexistent local plugin path may be skipped while the session continues. Which TWO checks directly establish readiness? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Treat successful session initialization alone as proof every requested plugin loaded"
      },
      {
        "id": "B",
        "body": "Verify the deployed plugin directory exists and is readable"
      },
      {
        "id": "C",
        "body": "Inspect the initialization message’s loaded plugins list for the required plugin"
      },
      {
        "id": "D",
        "body": "Verify only that the plugin was installed on the developer’s machine"
      },
      {
        "id": "E",
        "body": "Check that the configured path string is nonempty without checking the directory or inventory"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "The SDK may skip a missing plugin path without ending the session. Verify the local path and the initialization message’s plugins inventory before declaring the required capability ready.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/agent-sdk/plugins"
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
    "conceptKey": "config-list-merge-not-scalar-override",
    "type": "single",
    "selectCount": 1,
    "body": "User settings allow one Bash command and project settings allow a different one. No deny rules apply. A maintainer assumes the project allow list replaces the user list. What does the documented merge rule say?",
    "options": [
      {
        "id": "A",
        "body": "The higher-precedence project list replaces the complete user list"
      },
      {
        "id": "B",
        "body": "Only commands appearing in both lists remain allowed by the combined allow configuration"
      },
      {
        "id": "C",
        "body": "The user list replaces the project list because personal grants always override shared grants"
      },
      {
        "id": "D",
        "body": "Permission allow lists combine across settings sources"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "List settings such as permissions.allow are combined across sources rather than resolved like a single scalar value.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/settings"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-097",
    "domain": "applications-integration",
    "objective": "D2.6",
    "conceptKey": "config-session-override-no-file-write",
    "type": "single",
    "selectCount": 1,
    "body": "A developer needs to test a supported non-managed setting in exactly one Claude Code session. Existing files must remain unchanged. Which option fits?",
    "options": [
      {
        "id": "A",
        "body": "Start Claude Code with an appropriate --settings JSON override"
      },
      {
        "id": "B",
        "body": "Edit the global user settings file before launching and leave the override there"
      },
      {
        "id": "C",
        "body": "Commit the override into the project’s shared settings file"
      },
      {
        "id": "D",
        "body": "Use the project-local settings file and assume it is discarded when the session ends"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The --settings option applies supported overrides for that session without changing saved settings files.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/settings"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-098",
    "domain": "applications-integration",
    "objective": "D2.6",
    "conceptKey": "claudemd-import-relative-origin",
    "type": "single",
    "selectCount": 1,
    "body": "A CLAUDE.md file imports @guides/testing.md. Claude Code is launched from a different directory. Where does the relative import resolve?",
    "options": [
      {
        "id": "A",
        "body": "Against the process’s current working directory regardless of the importer location"
      },
      {
        "id": "B",
        "body": "Against the directory containing the importing file"
      },
      {
        "id": "C",
        "body": "Against the Git repository root regardless of which file imports it"
      },
      {
        "id": "D",
        "body": "Against the user-level ~/.claude directory for every import"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Relative CLAUDE.md imports resolve relative to the file containing the import, not the process working directory.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/memory"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-099",
    "domain": "applications-integration",
    "objective": "D2.6",
    "conceptKey": "config-strict-json-syntax",
    "type": "multiple",
    "selectCount": 2,
    "body": "A committed Claude Code settings file contains // comments and a trailing comma. The intended setting is supported. Which TWO changes/checks address the configuration failure? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Treat the file as JSONC because its extension is .json"
      },
      {
        "id": "B",
        "body": "Restart repeatedly while leaving the invalid syntax unchanged"
      },
      {
        "id": "C",
        "body": "Remove the comments and trailing comma to produce strict JSON"
      },
      {
        "id": "D",
        "body": "Verify which settings sources loaded after fixing the file"
      },
      {
        "id": "E",
        "body": "Change only the setting value while retaining the comment and trailing comma"
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Claude Code settings files use strict JSON. Fix the syntax, then inspect settings-source status to confirm the repaired file loaded.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/settings"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-100",
    "domain": "applications-integration",
    "objective": "D2.6",
    "conceptKey": "claudemd-import-literal-path",
    "type": "single",
    "selectCount": 1,
    "body": "A maintainer wants CLAUDE.md to mention @legacy-notes.md literally, without importing that file into every session. Which edit matches the import parser?",
    "options": [
      {
        "id": "A",
        "body": "Move the reference under a Markdown heading without code formatting"
      },
      {
        "id": "B",
        "body": "Add the same reference to a bullet list without code formatting"
      },
      {
        "id": "C",
        "body": "Add a blank line before the unquoted reference"
      },
      {
        "id": "D",
        "body": "Wrap the reference in a Markdown code span"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "CLAUDE.md import parsing skips code spans and fenced code blocks. A code span preserves a literal @path mention without importing its content.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/memory"
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
    "conceptKey": "plugin-node-dependency-install-contract",
    "type": "single",
    "selectCount": 1,
    "body": "A copied marketplace plugin has package.json and a matching package-lock.json. Its dependency needs a postinstall build. Under the documented automatic dependency-install process, which outcome must the maintainer account for?",
    "options": [
      {
        "id": "A",
        "body": "The matching lockfile causes lifecycle build scripts to run automatically during this install"
      },
      {
        "id": "B",
        "body": "Dependencies install with lifecycle scripts disabled, so the build needs a separately supported setup path"
      },
      {
        "id": "C",
        "body": "The installer resolves newer dependency versions instead of using the matching lockfile"
      },
      {
        "id": "D",
        "body": "A successful dependency download proves native postinstall build artifacts were created"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Automatic installation uses npm ci --ignore-scripts for this lockfile. Dependencies requiring lifecycle-script builds need a separate supported setup path.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/plugins-reference"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-103",
    "domain": "applications-integration",
    "objective": "D2.6",
    "conceptKey": "plugin-source-versus-runtime-state",
    "type": "multiple",
    "selectCount": 2,
    "body": "A plugin writes durable user state into its installed version directory. Updates install another version directory. Which TWO design choices address this lifecycle? Select TWO.",
    "options": [
      {
        "id": "A",
        "body": "Store required user state only alongside code in the version-specific installed directory"
      },
      {
        "id": "B",
        "body": "Assume a plugin update copies every runtime-created state file from the old version directory"
      },
      {
        "id": "C",
        "body": "Keep bundled code/resources relative to CLAUDE_PLUGIN_ROOT"
      },
      {
        "id": "D",
        "body": "Store durable plugin state in CLAUDE_PLUGIN_DATA"
      },
      {
        "id": "E",
        "body": "Treat CLAUDE_PLUGIN_ROOT as the same physical directory across all releases"
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "The installed plugin root is version-specific, whereas CLAUDE_PLUGIN_DATA is intended for persistent data that outlives a plugin version. Keep code and durable state in their appropriate locations.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/plugins-reference"
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
    "conceptKey": "plugin-cross-plugin-dependency-declaration",
    "type": "single",
    "selectCount": 1,
    "body": "A Claude Code plugin requires another plugin at a compatible version. The maintainer wants this relationship represented in plugin configuration. Which declaration is intended for that relationship?",
    "options": [
      {
        "id": "A",
        "body": "The plugin manifest’s dependencies entries, with supported version constraints"
      },
      {
        "id": "B",
        "body": "List the plugin only as an npm dependency in package.json"
      },
      {
        "id": "C",
        "body": "Document the dependency only in README installation prose"
      },
      {
        "id": "D",
        "body": "Put the required plugin’s name only in the consuming plugin’s keywords"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The plugin manifest supports dependencies on other plugins, including supported version constraints. This differs from a plugin’s own language-package dependencies.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/plugins-reference"
    ],
    "qualityStatus": "APPROVED"
  },
  {
    "id": "AI-106",
    "domain": "applications-integration",
    "objective": "D2.6",
    "conceptKey": "plugin-sensitive-option-storage",
    "type": "single",
    "selectCount": 1,
    "body": "A plugin asks users for an API token through userConfig. The author wants it treated as a sensitive configuration value rather than ordinary non-sensitive settings. Which field controls that treatment?",
    "options": [
      {
        "id": "A",
        "body": "Set required: true on the token field"
      },
      {
        "id": "B",
        "body": "Set sensitive: true on the userConfig field"
      },
      {
        "id": "C",
        "body": "Set type: string and omit the sensitive flag"
      },
      {
        "id": "D",
        "body": "Store the token as the userConfig default value"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "A userConfig field marked sensitive masks entry and stores the value through the documented secure credential storage path rather than ordinary settings.json values.",
    "sourceRefs": [
      "https://code.claude.com/docs/en/plugins-reference"
    ],
    "qualityStatus": "APPROVED"
  }
];
