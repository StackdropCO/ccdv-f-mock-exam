# CCDV-F blueprint — research baseline

*Historical research record from 2026-09-08, documenting the source evidence behind `src/data/blueprint.ts`'s domain/skill weights and quotas. For the current, maintained summary of how the bank is organized, see [../question-bank-methodology.md](../question-bank-methodology.md).*

Date accessed: 2026-09-08.

## Evidence and provenance

Level B: [mirrored official guide](https://github.com/Amey-Thakur/CLAUDE-CERTIFICATIONS/blob/main/developer-foundations/exam-guide.pdf), downloaded and extracted locally, visually inspected on blueprint and sample pages. PDF SHA-256: `8c52679323cb546790d7d663cbbb48ff42f76f813bbe97239dfde5c32c1c32bd`. Its own cover and document-control section identify Version 1.0, effective July 2026, CCDV-F. The maintainer's [provenance record](https://github.com/Amey-Thakur/CLAUDE-CERTIFICATIONS/blob/main/guide/official-sources.md) reports checking canonical documents on 2026-09-05; that check is a maintainer claim, not independently reproduced here. Both Skilljar and the linked original S3 PDF returned 403. Direct access is not required.

Level C corroboration: [Claude Certification Guide](https://claudecertificationguide.com/ccdv-f) explicitly cites July 2026 v1.0 and reproduces all 25 skill weights and the format. [Panaversity's developer certification comparison](https://agentfactory.panaversity.org/docs/certifications/pcdv-f) separately identifies CCDV-F's 53 items/120 minutes and all eight domain weights plus six Applications skills; its own PCDV-F additions are excluded. [Program source note](https://agentfactory.panaversity.org/docs/certifications) reports a 2026-09-01 update and links the official guide. These are separate publishers, though their underlying guide is shared, not independent primary measurements. No contradictory newer guide was found in targeted version/update searches.

## Verified from the mirrored official document

Claude Certified Developer – Foundations, CCDV-F, v1.0, July 2026. 53 items; 120 minutes; multiple-choice and multiple-response, with selection count stated. Proctored delivery through Pearson VUE (online/test center per policy). The guide reports scaled scoring; the app retains raw mock scoring and makes no official pass/fail claim. Domain weights are approximate proportions of scored items, not exact per-form quotas.

| Domain | Weight | Mock quota |
|---|---:|---:|
| Agents and Workflows | 14.7% | 8 |
| Applications and Integration | 33.1% | 17 |
| Claude Code | 3.1% | 2 |
| Eval, Testing, and Debugging | 2.6% | 1 |
| Model Selection and Optimization | 16.8% | 9 |
| Prompt and Context Engineering | 11% | 6 |
| Security and Safety | 8.1% | 4 |
| Tools and MCPs | 10.6% | 6 |

## Skills and bank allocation

D1.1-style IDs are LOCAL identifiers assigned in published order; the guide names skills but does not number them this way. Skill percentages are shares of the whole exam. Seven-form targets use largest remainder within each domain's allocated bank total. Legacy mappings reflect the dominant tested skill, with overlaps adjudicated centrally.

| Local ID | Published skill | Exam weight | Combined target | Legacy | New target |
|---|---|---:|---:|---:|---:|
| D1.1 | Agent Architecture | 4.5% | 17 | 4 | 13 |
| D1.2 | Agent Construction with Claude | 5.3% | 20 | 2 | 18 |
| D1.3 | Agent Patterns and Frameworks | 4.9% | 19 | 1 | 18 |
| D2.1 | Understanding Requirements | 3.4% | 12 | 1 | 11 |
| D2.2 | Systems Life Cycle | 2.8% | 10 | 1 | 9 |
| D2.3 | Claude API Mechanics | 6.8% | 24 | 5 | 19 |
| D2.4 | Software Engineering Foundations | 7.4% | 27 | 2 | 25 |
| D2.5 | Claude Application Design | 8.6% | 31 | 1 | 30 |
| D2.6 | Configuration Management | 4.1% | 15 | 3 | 12 |
| D3.1 | Claude Code Operation | 3.1% | 14 | 2 | 12 |
| D4.1 | Debugging and Error Handling | 2.6% | 7 | 2 | 5 |
| D5.1 | LLM Fundamentals | 5.2% | 19 | 3 | 16 |
| D5.2 | Technical Fundamentals | 6.1% | 23 | 3 | 20 |
| D5.3 | Model Selection and Tradeoffs | 2.7% | 10 | 2 | 8 |
| D5.4 | Cost and Token Management | 2.8% | 11 | 2 | 9 |
| D6.1 | Context Engineering | 3.8% | 14 | 3 | 11 |
| D6.2 | Prompt Engineering | 4.6% | 18 | 2 | 16 |
| D6.3 | Output Handling | 2.6% | 10 | 2 | 8 |
| D7.1 | AI Application Security | 3.2% | 11 | 1 | 10 |
| D7.2 | Guardrails and Safe Deployment | 2.3% | 8 | 1 | 7 |
| D7.3 | Claude Hooks | 1% | 3 | 1 | 2 |
| D7.4 | Identity, Secrets, and Key Management | 1.6% | 6 | 1 | 5 |
| D8.1 | Tool Implementation | 4.4% | 17 | 4 | 13 |
| D8.2 | MCP Server Development | 2.1% | 8 | 2 | 6 |
| D8.3 | Agentic Customization | 4.1% | 17 | 2 | 15 |

## Official sample style

Section 8 contains three illustrative, non-live-bank samples and rationales: cost-focused asynchronous processing, prompt-injection boundaries, and reusable inventory integration. All three samples are single-answer. Their discriminator is the required outcome: lower processing cost, enforceable separation of untrusted content, or independently maintained shared live capability. Distractors can describe real techniques that do not satisfy that requirement. New questions must apply this reasoning style without paraphrasing those scenarios.

The first sample itself uses overnight language and explicitly mentions a 24-hour batch window. Consequently the prior Q1 audit concern is a precision caveat, not evidence that its keyed answer conflicts with the published exam style. Current batch documentation still does not guarantee overnight completion.

## Not specified in this guide / authoring assumptions

No exact single/multiple-response ratio, difficulty distribution, per-form skill counts, option-letter balance, scaled-to-raw conversion, or number of unscored items is given. Do not infer these from three samples. The mock's largest-remainder quotas, objective-balancing strategy, response mix, exact-set grading and rotation are authoring/product decisions. This blueprint establishes scope; current Level A technical sources establish individual answers.
