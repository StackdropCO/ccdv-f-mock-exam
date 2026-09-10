# Question bank methodology

This describes how the 371-question bank is organized, sourced, and maintained, and what a content contribution needs to include. For how the bank feeds into the running app, see [architecture.md](architecture.md).

## Two parts of the bank

- **53 original questions** (`src/data/questions.ts`, IDs `LEGACY-001`…`LEGACY-053`) were generated with ChatGPT at the maintainer's direction as the project's initial practice set, establishing its original format and style — not sourced from an actual certification exam, course, or third-party question bank. They were subsequently independently audited for technical accuracy against current first-party documentation (see `research/LEGACY_QUESTION_AUDIT.md`), and six received precision corrections as a result. They predate the sourced-authoring process below and don't carry `sourceRefs`. Their content is frozen: `tests/legacy-hashes.json` pins them byte-for-byte, so any change to them is caught immediately by `npm test`.
- **318 expanded-bank questions** (`src/data/questions/new/*.ts`, one file per domain, IDs like `AW-013`, `AI-094`, `TM-034`) were authored separately, against the sourced-review process below, each independently reviewed at least once, and have since had 179 items replaced and 7 narrowly corrected in a later independent audit pass (see `tests/bank-change-baseline.json`, which pins the reviewed content of every changed item).

Both parts are validated the same way at test time (`src/data/validateBank.ts`), and both feed the same rotation and grading logic.

## Domain and objective mapping

`src/data/blueprint.ts` defines the eight exam domains and their objectives (`D1.1`, `D2.3`, …), sourced from the official CCDV-F Exam Guide's published domain/skill weights (see `research/EXAM_BLUEPRINT.md` for the provenance trail). Every question declares a `domain` and `objective`; the bank's tests assert the counts in each match the blueprint exactly, so the eight-domain weighting can't silently drift as questions are added or changed.

## Sourcing and review

Every expanded-bank question carries `sourceRefs`: URLs to first-party documentation (Anthropic/Claude product docs, the Model Context Protocol specification, or primary language/protocol references where the question is about general software engineering rather than Claude specifically). `tests/questionBank.test.ts` enforces that every `sourceRefs` URL is `https://` and its host is on an explicit allowlist of authoritative first-party domains — a question can't cite an arbitrary blog or a course platform as its technical authority.

Each question also has a `conceptKey`: a short label for the specific reasoning distinction it tests. Two questions that share a `conceptKey` are testing the same discriminator (even if the surface scenario differs), which the form selector uses to avoid handing one mock two questions that test the same thing, and which reviewers use to catch near-duplicates.

## Replacements and corrections

When a question is found to be inaccurate, ambiguous, or duplicative, it's either **replaced** (new stem/options/answer/explanation, same `id`, `domain`, and `objective`) or **corrected** (a narrow wording fix that removes an unnecessary piece of exact-recall trivia — an SDK type name, a config flag spelling, a specific model version — while preserving the underlying scenario and answer key). In both cases the production `id` never changes, because the rotation history stored in a visitor's browser (`ccdv-f-question-history-v2`) references questions by `id`; renaming an `id` would make that history's IDs meaningless. See `tests/bank-change-baseline.json` for the specific set of items changed in the most recent pass and the content hash pinning each.

## Validation

Two layers of automated checks guard the bank:

- **`src/data/validateBank.ts`**, run as part of `npm test`, checks structural invariants: unique IDs, no duplicate stems or option sets, every `correctAnswers` entry points at a real option, `selectCount` matches the answer key length, and every multi-select question states its selection count in its own stem.
- **Rotation simulation** (`tests/questionBank.test.ts`) runs hundreds of full seven-form rotation cycles end to end and asserts every generated form has 53 unique questions and exact domain quotas, with no repeats within a cycle.

Any pull request that touches question content re-runs both.

## What we accept as a content contribution

Original, freshly written practice questions that:

- test a genuine, defensible technical distinction (one clearly correct answer, plausible distractors that fail for stated reasons, not by omission or trick wording)
- cite at least one first-party, currently-live authoritative source for the claim being tested
- declare a `domain`/`objective` that matches an existing blueprint entry, and a `conceptKey` that isn't already covered by an existing question in that objective
- match `selectCount` to the number of correct answers and state "Select TWO"/"Select THREE" in the stem when applicable

**We do not accept real, recalled, leaked, reconstructed, or otherwise non-public certification exam questions, in any form** — verbatim, paraphrased, or "reconstructed from memory." This bank is original practice material written against public documentation, not a copy or approximation of real exam content, and it needs to stay that way. See [CONTRIBUTING.md](../CONTRIBUTING.md) for the submission process.
