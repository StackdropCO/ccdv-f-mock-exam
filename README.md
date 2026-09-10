# CCDV-F Mock Exam

A free practice exam for the Claude Certified Developer – Foundations (CCDV-F) certification. Pick a mode, answer 53 questions, submit, and review every answer with an explanation.

**Live app:** https://claude-mock-exam-chi.vercel.app

> This is an independent, unofficial practice project. It is not affiliated with, endorsed by, or sponsored by Anthropic or Pearson VUE. The question bank contains original practice material and is not intended to reproduce questions from the certification exam.

## Features

- **371-question bank**, drawn into 53-question mocks that fill the exam's real eight-domain quota exactly — no domain over- or under-represented.
- **No repeats within a mock, or across seven completed mocks.** Once a full rotation cycle is exhausted, a new one begins.
- **Timed (120 minutes) and Untimed modes**, same question mix, different pace.
- **Exact-set grading** for multi-response questions — a Select TWO/THREE question is only correct if you picked exactly the right set, not a superset or subset.
- Flag questions for review, jump around with a question navigator, and get a full answer review (your answer, the correct answer, and an explanation) after submitting.
- Light and dark themes, keyboard-operable throughout, works on mobile.
- No backend, no accounts, no tracking. Everything runs client-side; only your theme choice and completed-mock rotation history are saved, in your own browser.

## Development

```sh
npm ci
npm run dev
```

```sh
npm test          # unit + component tests (Vitest)
npm run typecheck  # tsc --noEmit
npm run lint       # oxlint
npm run build      # production build
```

All four run in CI on every pull request.

## How it works

See [docs/architecture.md](docs/architecture.md) for the app's structure (state, rotation, grading, testing, deployment), and [docs/question-bank-methodology.md](docs/question-bank-methodology.md) for how the question bank itself is sourced, reviewed, and maintained.

## Contributing

Bug reports, feature ideas, and new practice questions are welcome — see [CONTRIBUTING.md](CONTRIBUTING.md). Question contributions must be original and sourced against public documentation; real, recalled, or reconstructed certification exam questions are never accepted.

## Security

See [SECURITY.md](SECURITY.md) for how to report a vulnerability.

## License

The application source code is licensed under the [MIT License](LICENSE).

The practice-question content — all 371 questions, including the original 53 in `src/data/questions.ts` and the 318 expanded-bank questions in `src/data/questions/domains/` — is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); see [CONTENT_LICENSE](CONTENT_LICENSE) for provenance and attribution details.
