# Architecture

This document describes how the app is built today. For how the question bank itself is written, reviewed, and maintained, see [question-bank-methodology.md](question-bank-methodology.md).

## Overview

The app is a static single-page application: React 19 + TypeScript, built with Vite, deployed as a static bundle (currently to Vercel). There is no backend, no database, no server API, no authentication, and no analytics. Everything — question selection, grading, and state — runs in the browser.

## Screens and state

A single reducer (`src/state/examState.ts`) drives four screens, selected in `src/hooks/useExamState.ts`:

- **Start** — choose Timed or Untimed mode
- **Exam** — answer questions, navigate, flag for review
- **Review & Submit** — see how many questions are answered/unanswered/flagged before submitting
- **Results** — score, per-domain breakdown, and filtered answer review

Only two things persist across a page reload, both in `localStorage`:

- `ccdv-f-theme-preference` — the light/dark theme choice
- `ccdv-f-question-history-v2` — the question-rotation history (below)

Everything else — the current form, answers, flags, position, timer, and results — is memory-only. Leaving or refreshing mid-attempt discards it, after a confirmation prompt.

## Question data model

Every question (`src/data/bankTypes.ts`) has a stable `id`, a `domain` and `objective` (mapping to the blueprint below), a `conceptKey` identifying the specific discriminator it tests, `type` (`single` or `multiple`) with a `selectCount`, `options`, `correctAnswers`, an `explanation`, and `sourceRefs` (authoritative source URLs, for everything except the 53 legacy questions — see the methodology doc).

The bank (`src/data/questionBank.ts`) combines two sources:

- `src/data/questions.ts` — the 53 original questions, prefixed `LEGACY-001`…`LEGACY-053`
- `src/data/questions/domains/*.ts` — 318 questions, one file per domain, each with a stable ID like `AW-013` or `TM-034`

`src/data/validateBank.ts` enforces structural invariants at test time: no duplicate IDs or stems, no duplicate option sets, every answer key points at a real option, `selectCount` matches the number of correct answers, and every multi-select question states "Select TWO/THREE" in its own stem.

## Domain/objective blueprint

`src/data/blueprint.ts` is the single source of truth for the exam's eight domains and their objectives (`D1.1`, `D2.3`, etc.), each with a per-mock quota and a total target across a full rotation cycle. Both the form selector and the bank's own tests read from this file — there's no second copy of these numbers anywhere.

## Form construction and rotation

`src/lib/examForm.ts` is a pure selector: given the bank and a rotation history, it builds a 53-question form that always fills each domain's exact quota. Within a domain it prefers items whose ID wasn't in the previous form and whose `conceptKey` hasn't already appeared in this form, then balances objective coverage and, as a low-priority tiebreaker, response type and correct-answer-letter position — so the pool is deterministic-in-priority but the resulting form is shuffled.

Rotation history (`RotationHistory`) tracks a `bankVersion`, the current `cycle`, every `usedQuestionIds` so far this cycle, and the `lastCompletedFormIds` (to avoid repeating the immediately preceding form). **Only submission consumes questions** — `completeExamForm` is the sole function that adds a form's IDs to history; starting or abandoning an attempt never does. When a domain's remaining pool can't fill its quota, the cycle resets and increments rather than repeating within the same cycle. A stored history is only accepted if its `bankVersion` matches and every stored ID still exists in the current bank (`normalizeHistory`) — history from a bank version that changed IDs is discarded safely rather than causing invalid state.

## Grading

Grading is exact-set: an answer is correct only if the selected option set is exactly equal to `correctAnswers`, regardless of order (`src/lib/scoring.ts`). There's no partial credit for multi-select questions. Results include a percentage, a per-domain breakdown, and a filterable answer review (incorrect first, then unanswered, else all — `src/lib/reviewFilter.ts`) showing the question, your answer, the correct answer, and the explanation.

## UI details

- Answer controls: native radio/checkbox inputs, not custom widgets, for accessibility. A multi-select question disables its remaining options once `selectCount` is reached (see `src/state/examState.ts`'s `TOGGLE_MULTI` and `src/components/ExamScreen.tsx`).
- Desktop question navigator + a mobile drawer variant (`NavigatorPanel`, `NavigatorGrid`, `NavigatorMobile`).
- Focus trap for modal-like flows (`useFocusTrap`), keyboard-operable throughout.
- Question/option Markdown (bold, code spans, fenced code, tables) renders via `react-markdown` + `remark-gfm`, not manual string handling.
- Light/dark theme follows the system preference by default and can be toggled and remembered.

## Testing

`npm test` runs Vitest across unit tests (reducer, scoring, form selection, rotation/history, validators) and component tests (`@testing-library/react` + `jsdom`) for each screen. Notably:

- A large rotation simulation (in `tests/questionBank.test.ts`) runs hundreds of full seven-form cycles end to end, asserting every form has unique, quota-correct questions and nothing repeats within a cycle.
- `tests/legacy-hashes.json` pins the 53 original questions byte-for-byte, so any accidental edit to them fails the suite immediately.

`npm run typecheck` (`tsc -b --noEmit`) and `npm run lint` (`oxlint`) run alongside `npm test` in CI on every pull request.

## Deployment

The production build (`npm run build`: `tsc -b && vite build`) is a static bundle with no server-side code, deployed to Vercel. There are no required environment variables or secrets — the build is fully reproducible from the repository alone.
