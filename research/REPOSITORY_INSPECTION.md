# Repository inspection and baseline

Date: 2026-09-08.

Repository: StackdropCO/ccdv-f-mock-exam (private).
Inspected main commit: d9ec8401c923d25d538af2ffaf5b8a31c4a5eb68.
Base tree: 207d0564ce9402a25c236f77943d0281f8b75c4c.
Dedicated GitHub branch: question-bank-rotation.

Retrieved the full recursive tree and all 65 files through the connected GitHub API. Direct shell clone lacked credentials; local files are a retrieved snapshot, not a cloned Git checkout. No AGENTS.md appears in the repository tree. Inspected canonical Markdown, question data, requirements, README, package/config files, all source modules/styles, and all eight test files. SVG assets were retrieved; decorative SVG rendering was not reviewed.

## Verified implementation

- Static Vite + React + TypeScript SPA; React 19, React Markdown/GFM; CSS Modules and semantic light/dark tokens.
- Four screens selected by state; no router/backend/database/authentication or Redux.
- useExamState wraps examReducer and the fixed QUESTIONS array.
- Answers, flags, current question, mode, timestamps, review/submission and result are memory-only.
- beforeunload is armed for started/unsubmitted attempts in either mode.
- Timed countdown is 120 minutes from a start timestamp, clamps at zero, and never auto-submits.
- Untimed suppresses the countdown. Completion duration is calculated for results.
- Theme preference alone persists under ccdv-f-theme-preference.
- Exact-set grading, unanswered tally, confirmation before submission, post-submission explanation review and filters.
- Desktop navigator and mobile drawer; focus trap, native answer controls, keyboard/focus behavior.
- Exit resets to start; Retake confirms and returns to mode selection.
- 53 fixed items: 40 single, 12 select-two, one select-three.
- README is still a generic Vite template.

## Integration findings

Numeric bank IDs currently double as question positions throughout ExamScreen, navigator, review, answers/flags, scoring and reducer navigation. Rotation must separate stable identity from visible position consistently. The existing reducer remains adequate. Keep canonical QUESTIONS unchanged and enrich through a separate metadata layer if practical.

Existing validators require exactly 53 contiguous IDs; preserve legacy validation and add separate bank/form validation. Update only tests intentionally superseded by Change 2, notably zero storage after submission. Preserve tests proving unfinished progress is never stored.

CSS imports a Google Fonts stylesheet. Consequently the existing app has an external font request despite the broad original “no external runtime dependency” language; no font or UX change was made in this checkpoint.

## Baseline execution

Installed locked dependencies with npm ci --ignore-scripts.
- npm test: PASS, 51 tests across 8 files.
- npm run typecheck: PASS.
- npm run lint: PASS.
- npm run build: PASS; Vite production bundle generated.
- Functional browser smoke test: NOT RUN.
- New selector/content tests and simulations: NOT RUN; no implementation exists.

No source, test, package, UI, question content, or canonical Markdown changes are included in this checkpoint. REQUIREMENTS.md receives an append-only approved amendment; research documents record evidence and unresolved work. No merge or deployment.
