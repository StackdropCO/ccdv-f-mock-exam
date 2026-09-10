# Contributing

Thanks for considering a contribution. This project takes two kinds of contributions: code and question-bank content. Both go through a pull request.

## Code contributions

1. Fork the repository, and create a branch off `main`.
2. Install dependencies with `npm ci` (not `npm install`, so you get the exact locked versions CI uses).
3. Make your change. Keep pull requests focused — a bug fix or a feature, not an unrelated drive-by refactor bundled in.
4. Before opening a PR, run the full local check:
   ```sh
   npm test
   npm run typecheck
   npm run lint
   npm run build
   ```
5. If your change affects behavior (not just docs or styling), add or update a test that would fail without your change. See [docs/architecture.md](docs/architecture.md) for how the app is structured and where tests live.
6. Open a pull request against `main` using the PR template. CI runs the same four checks above automatically.

## Question and content contributions

New practice questions and corrections to existing ones are welcome. See [docs/question-bank-methodology.md](docs/question-bank-methodology.md) for the full methodology. A content pull request should include:

- The affected question `id` (for a correction) or the proposed `domain`/`objective` (for a new question), matching an entry in `src/data/blueprint.ts`
- At least one authoritative first-party source URL supporting the answer (Anthropic/Claude documentation, the MCP specification, or primary language/protocol documentation)
- Exactly one defensible correct answer — distractors should be plausible but clearly wrong for a statable reason, not wrong by ambiguity or trick wording
- A short explanation of why the correct answer is correct
- A `conceptKey` that isn't already covered by another question in the same objective (check `src/data/questions/new/` for existing items in that domain first)

**Do not submit real, recalled, leaked, reconstructed, or otherwise non-public certification exam questions — in any form, including paraphrased or "from memory."** Original practice questions written against public documentation are what this project is for; anything resembling actual exam content will be rejected and the PR closed.

`npm test` validates structure automatically (unique IDs, no duplicate stems/options, valid answer keys, correct `selectCount`, and domain/objective counts against the blueprint), so run it before opening the PR.
