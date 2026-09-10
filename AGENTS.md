# Repository guidance

Before changing the question bank or form-selection logic, read:

- `docs/question-bank-methodology.md`
- `docs/audits/exam-blueprint-provenance.md`
- `src/data/blueprint.ts`

Core invariants:

- 371 questions
- 53 questions per mock
- exact domain quotas are defined in `src/data/blueprint.ts`
- production question IDs are stable because rotation history references them

Run:

- `npm test`
- `npm run typecheck`
- `npm run lint`
- `npm run build`

Never add real, recalled, leaked, or reconstructed certification exam questions.
