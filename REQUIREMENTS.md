# REQUIREMENTS.md — CCDV-F Final Mock Exam

**Status: FROZEN.** This document records the product requirements approved by the user before implementation began. It is immutable unless the user explicitly approves a change. It is a transcription of the requirements given directly in the user's prompt (sections 0–32); nothing here has been invented, reinterpreted, or expanded.

## 0. Source of truth

Two authoritative inputs govern this build:

1. The frozen requirements below.
2. `CCDV-F_Final_Mock_Exam.md` at the project root — the canonical source for all 53 question stems, answer choices, question order, code blocks, tables, and Select TWO/THREE labels. It is never rewritten, simplified, corrected, reordered, or otherwise modified. Any content concern noticed during implementation is recorded in the final report, not silently fixed.

The answer key in Section 7 below is canonical for scoring and explanations, taking precedence over the informal inline `[x]` marks inside the Markdown source (which are inconsistent and not used by the app).

## 1. Product goal

"CCDV-F Final Mock Exam" — a polished browser-based mock exam for the Claude Certified Developer – Foundations exam. Primary flow: Start Exam → answer questions → navigate / flag / review → Review & Submit → confirm submission → score → inspect correct answers and explanations → optionally retake.

It must feel like professional certification practice-exam software — not a marketing site, learning platform, dashboard, gamified quiz app, or AI product demo. It is an unofficial practice exam. This disclaimer is shown unobtrusively:

> Unofficial practice exam. Not affiliated with or endorsed by Anthropic or Pearson VUE.

## 2. Technical constraints

Vite + React + TypeScript, static client-side SPA. No backend, auth, database, server API, analytics, user accounts, external runtime dependency, or AI calls. Must deploy cleanly to Vercel's free tier. Small dependency surface. Markdown/GFM rendering (inline code, fenced code, lists, tables, bold) uses a sensible renderer rather than manual reconstruction. No large UI framework without strong reason.

## 3. Design skill

A relevant design/UX skill is used before building the UI to establish hierarchy, typography, spacing, answer-control treatment, navigator treatment, desktop/mobile layout, accessibility, and interaction states — subordinate to this document (it may improve presentation only, never content, scoring, features, or workflow). A second pass after implementation reviews for genuine readability/accessibility/spacing/responsive/interaction-state defects only — not a redesign.

## 4. Visual direction

Professional, restrained, highly readable, modern documentation/certification interface (Linear / Stripe docs / good certification software) — not a flashy AI landing page. Neutral background, high-contrast type, restrained accent color, generous whitespace, subtle borders, minimal shadows, strong hierarchy. Avoid gradients, glassmorphism, glow, giant hero areas, giant rounded cards everywhere, excessive icons, decorative animation, fake Anthropic/Pearson branding. The question always dominates visually.

## 5. Content integrity

- CONTENT-001: use all 53 questions from the canonical Markdown exactly as supplied.
- CONTENT-002: question order is fixed 1–53, no randomization.
- CONTENT-003: answer options are never reordered.
- CONTENT-004: single-answer questions use radio buttons.
- CONTENT-005: Select TWO/THREE questions use checkboxes.
- CONTENT-006: Select TWO/THREE is visually obvious.
- CONTENT-007: no correctness feedback, hints, explanations, "try again", or correctness icons before submission.
- CONTENT-008: correct answers and explanations appear only after final submission.
- CONTENT-009: the question source file remains unchanged.

## 6. Exam data architecture

Canonical Markdown is converted into structured typed exam data, shaped like:

```ts
{
  id: 4,
  type: "multiple", // or "single"
  selectCount: 2,
  body: "...markdown...",
  options: [{ id: "A", body: "..." }, ...],
  correctAnswers: ["A", "D"],
  explanation: "..."
}
```

Question content, answer key, explanations, UI components, and scoring logic are cleanly separated; question text is not duplicated across UI components. A content/schema version (`ccdv-f-mock-v1`) is used so persisted attempts can be invalidated safely if content changes later.

## 7. Canonical answer key

```
1=C  2=B  3=D  4=A,D  5=B  6=C  7=A,C  8=C  9=B,D  10=A
11=D 12=A 13=B 14=C  15=B 16=B,C 17=D 18=A,C 19=A 20=C
21=D 22=B 23=B 24=B  25=A 26=B,D 27=C 28=A,B,C 29=A,C 30=A
31=D 32=C 33=B 34=B,D 35=A 36=A,C 37=C 38=B 39=C 40=A
41=A,D 42=B 43=D 44=C 45=B 46=C 47=B,D 48=B 49=C 50=A
51=D 52=A,D 53=C
```

## 8. Canonical rationale intent

Concise (1–3 sentence) post-exam explanations preserve the rationale intent supplied by the user for each of the 53 questions (Message Batches for async bulk work, tool_result correlation by ID, testing semantic properties over exact text, treating retrieved content as untrusted, deterministic workflows vs. agents, explicit history in Messages API calls, Structured Outputs + completion checks, subagent isolation, model version pinning + evals, finite context budget, MCP for shared reusable capabilities, streaming for perceived responsiveness, CLAUDE.md vs. Skills, async I/O + bounded concurrency, pruning stale tool results, prompt-cache prefix stability, Claude Managed Agents, PreToolUse vs. PostToolUse hooks, surface-specific context, cheapest model meeting quality bar, clear/distinct tool descriptions, SDK as convenience layer, resuming sessions, one-shot prompting, requirements before architecture, 429 vs. 400 handling, SSE-to-WebSocket relay, MCP tools/resources/prompts, batch custom IDs + per-item inspection, manager/supervisor pattern, schema validity vs. business rules, pruning/summarizing long sessions, model-tier tradeoffs, secret rotation, prompt/config versioning, stdio vs. Streamable HTTP, durable external memory, image context/cost, per-call cost instrumentation, top-level `system` field, trusted instructions vs. untrusted retrieved content, plan mode, adaptive agents for unpredictable next actions, preferring built-in tools, staged production refactors, SDK lag vs. REST API, least privilege + human-approved sends, tool-error `tool_result`s, manual tool loops for custom control, subagents for large-context tasks, staged model rollout, few-shot prompting as context not weight changes, and plugins as versioned reproducible dependencies). Explanations are not exposed before submission.

## 9. Scoring rules

Single-answer: exact match. Multiple-answer: exact-set grading, no partial credit (e.g., correct = A+D: "A+D" correct, "A" alone incorrect, "D" alone incorrect, "A+D+E" incorrect). Unanswered counts as incorrect for raw score and is also tallied separately. Computed: correct, incorrect, unanswered, raw score /53, percentage, completion time. No invented scaled score, no "720", no pass/fail claim. Labeled "Mock exam score".

## 10. Start screen

Compact. Shows title, "53 Questions", "120 Minutes Recommended", mentions single-choice/multi-response question types, exact-set grading for Select TWO/THREE, explanations appear after submission, no login required, and the unofficial-practice disclaimer. Primary action: Start Exam. No marketing hero section.

> **Amended by Change 1 (see bottom of document).** The single "Start Exam" action is replaced by an explicit Timed/Untimed mode choice, each with its own primary action. "120 Minutes Recommended" no longer applies universally — it is now specific to Timed mode.

## 11. Exam screen

Hierarchy: question content → answer controls → navigation → question navigator. Sensible reading width; long questions never stretch across an enormous screen width.

## 12. Answer controls

Native accessible radio/checkbox inputs. The entire answer row is clickable/tappable, not just the small native control. Selected state is visually obvious without indicating correctness. Natural keyboard behavior, visible focus styles. Select TWO/THREE questions never disable further selections once the "required" count is reached — the grader enforces exact-set scoring, not the UI.

## 13. Question navigator

All 1–53 visible. Every number communicates current/answered/unanswered/flagged through more than color alone (symbols, borders, indicators, accessible labels). Clicking a number jumps to it. A Flag for review / Flagged control exists on every question. Desktop: convenient side panel. Mobile: a drawer/panel via a "Questions" control, not 53 tiny numbers squeezed next to the question.

## 14. Previous / Next

Forward, backward, skip, and jump-via-navigator are all supported; selections survive navigation. Previous is disabled on Q1. At Q53, Next becomes "Review & Submit".

## 15. Timer

Starts a 120-minute countdown only when Start Exam is pressed, shown unobtrusively ("01:37:42 remaining"), persisted across refresh via the original start timestamp. Never auto-submits at zero; instead shows 00:00 and a restrained "Recommended exam time has elapsed." message, and lets the user continue.

> **Amended by Change 1 (see bottom of document).** The timer now applies only to Timed mode (Untimed mode has no timer at all). Attempts are no longer persisted across refresh, so the timer no longer needs to survive one — the "never auto-submits at zero" behavior is otherwise unchanged.

## 16. Progress

Always shows "Question X of 53" plus useful counts (e.g., "34 answered · 19 unanswered"). Subtle, non-gamified progress indicator.

## 17. Persistence

localStorage only (no cookies, accounts, or backend). Persists content/exam version, started flag, start timestamp, current question, selected answers, flags, submission state, and final result if submitted. Refresh never destroys the attempt. On load, an unfinished compatible attempt offers Resume Exam / Start Over; Start Over requires confirmation if it would destroy existing answers.

> **SUPERSEDED by Change 1 (see bottom of document).** Exam attempts are no longer persisted anywhere. Progress (mode, answers, flags, current question, timer, review/submission state) is memory-only for the lifetime of the loaded page. There is no Resume Exam. A `beforeunload` guard warns before refresh/close/navigation while an attempt is unfinished. Only the user's light/dark theme preference may persist in localStorage.

## 18. Review & Submit screen

Selecting "Review & Submit" does not grade immediately. Shows Answered/Unanswered/Flagged counts, lists of unanswered and flagged question numbers (each jumps directly to that question), and Return to Exam / Submit Exam actions.

## 19. Submission confirmation

Submission is irreversible for that attempt; confirmation is required. If unanswered questions remain, the exact count is stated clearly before Cancel / Submit Exam. If all questions are answered, no unnecessary warning is shown.

## 20. Results screen

Prominently shows raw score (e.g., "47 / 53") and percentage, plus Correct / Incorrect / Unanswered counts and completion time, labeled "Mock exam score" with no implied official certification outcome. Provides Review Answers and Retake Exam.

> **Amended by Change 1 (see bottom of document).** Also shows which mode (Timed Exam / Untimed Practice) the attempt used. Retake Exam returns to the mode-selection start screen rather than immediately reusing the previous mode.

## 21. Answer review

After submission every question is reviewable, showing the original question, original options, the user's answer, the correct answer, correct/incorrect/unanswered state, and a concise explanation. Correct questions also show their rationale.

## 22. Result filters

All / Incorrect / Unanswered / Flagged filters actually filter the post-exam review list. No statistics dashboard.

## 23. Retake

Retake Exam asks for confirmation, then clears answers, flags, and submission state, resets the timer, and returns to the start state.

## 24. Responsive UX

Primary target is desktop/laptop; must also work on tablet and phone. At narrow widths the question stays dominant, answer controls stay comfortably tappable, the navigator becomes a mobile-friendly panel/drawer, code blocks stay readable, and tables may scroll horizontally locally. No page-level horizontal overflow ever.

## 25. Accessibility

Semantic headings, labels, native form controls, real buttons, keyboard navigation, visible focus states, sufficient contrast, accessible names for navigator states. Essential information never depends solely on hover, color, or unlabeled icons. Comfortable touch targets.

## 26. Code blocks and tables

Code: monospace, whitespace preserved, local horizontal scroll if needed. Tables: header/column relationships preserved, readable, local horizontal scroll on small screens rather than content collapse.

## 27. No answer leakage

Before submission, correct answers must not be exposed through styling, tooltips, visible or hidden data attributes, text, accessibility labels, class names in visible/debug UI, or hover states — through normal product interaction. (This is a static app; the requirement is about normal interaction, not defending against someone reverse-engineering the bundle.)

## 28. Non-goals

No accounts, auth, backend, database, leaderboard, team analytics, admin interface, question editor, AI tutor, hints, chatbot, achievements, gamification, question/answer randomization, external API calls, social sharing gimmicks, official Anthropic/Pearson branding, elaborate animation, or dark mode unless it comes essentially for free with zero added UX complexity.

> **Amended by Change 1 (see bottom of document).** Light and dark mode are now both explicitly required, first-class, and user-togglable (not merely "free if convenient"). Everything else in this section remains a non-goal.

## 29–31. Workflow, deployment, final report

Followed as specified in the user's prompt (inspect → freeze requirements → design pass → data conversion/validation → implementation → automated tests → build verification → functional smoke test → UX review pass → final regression → deployment → final report).

## 32. Behavioral rules

All decisions above are pre-approved; implementation proceeds autonomously unless a genuine blocker or conflict arises that cannot be safely resolved from these requirements. Where a choice exists, the simplest implementation that fully satisfies the contract is preferred.

## Implementation notes (added during build)

- **Design skill used:** `ui-ux-pro-max` for the pre-build design pass (typography/spacing/palette/navigator/answer-control treatment); `impeccable` for the post-build UX review pass (hierarchy/spacing/readability/accessibility/responsiveness defects only).
- **Stack decisions:** no router (four screens driven by app state), no state-management library (a single hook driven by `useReducer`, memory-only as of Change 1), plain CSS + CSS Modules with design tokens (no Tailwind/UI framework) to keep the dependency surface minimal, `react-markdown` + `remark-gfm` for faithful question/option/code/table rendering, `vitest` for logic-level tests.

---

## Approved Change 1 (2026-09-08): Exam Modes, Memory-Only Attempts, Light/Dark Theming

Approved by the user as a focused change. Everything in Sections 0–32 above stays in force except where explicitly amended/superseded by a note inline or by this section. Exam content, answer options, the answer key, explanations, scoring, navigator behavior, and the Review & Submit flow are explicitly **unchanged** by this update.

### C1.1 Exam mode selection

The app supports two modes, chosen explicitly before an attempt begins:

1. **Timed Exam** — 120-minute countdown, timer shown unobtrusively in the exam header.
2. **Untimed Practice** — no countdown, no timer placeholder, no time-pressure UI at all.

Both modes use the identical 53 questions/order/scoring/navigator/flagging/Review & Submit/results/explanations/leave-warning. Mode affects only timing behavior and related UI (timer display, mode indicator, results mode label).

### C1.2 Start screen / mode selection

The start screen keeps its existing informational content (53 Questions, single/multi-response question types, exact-set grading, explanations-after-submission, no login required, unofficial-practice disclaimer) and replaces the single "Start Exam" action with two mode options, each restrained (not a big marketing card) and each with one clear primary action:

- **Timed Exam** — "120 minutes" / "Take the mock under realistic time pressure."
- **Untimed Practice** — "No time limit" / "Work through the same exam at your own pace."

Both options state: "Progress is not saved if you leave or refresh the page." The attempt begins only once a mode is explicitly chosen.

### C1.3 Timer (Timed mode only)

- 120-minute countdown starts at the exact moment Timed Exam begins, using an in-memory start timestamp as the single source of truth (not a render interval).
- Continues correctly across in-SPA navigation, Review & Submit, and the navigator — it never pauses or resets from any in-app action.
- At zero: shows `00:00:00`, does not go negative, shows "Recommended exam time has elapsed.", never auto-submits, never locks answers, never changes scoring.
- Because attempts are not persisted, the timer does not need to survive a reload — a reload is covered by the leave-warning/attempt-loss behavior below, not by timer restoration.

### C1.4 Untimed mode

No countdown, no timer placeholder/empty space, no elapsed-time or time-pressure UI at all. Header layout adapts naturally (no empty gap) when no timer is rendered.

### C1.5 Mode indicator

A subtle, secondary "Timed Exam" / "Untimed Practice" label is shown during an attempt. It must not compete visually with "Question X of 53", the question content, Previous/Next, or the navigator.

### C1.6 Attempt lifecycle — memory-only, no persistence

Exam progress (mode, answers, flags, current question, start timestamp, review state, submission state) lives only in memory for as long as the page stays loaded. None of it is written to localStorage or any backend. There is no "Resume Exam." Leaving/reloading before submission loses the attempt entirely; revisiting always starts from the mode-selection start screen.

### C1.7 Leave/refresh warning

A standard, native `beforeunload` guard (not a custom dialog/message) is armed whenever an attempt is unfinished (started, not yet submitted) — covering refresh, tab/window close, and external navigation — for both Timed and Untimed modes equally. Canceling preserves the attempt (page never actually unloaded); proceeding loses all progress. The guard is disarmed immediately after submission.

### C1.8 Explicit Exit Exam

Available during an active, unsubmitted attempt. Opens a confirmation dialog:

- Title: "Exit exam?"
- Body: "Your current answers and progress will be lost. The next time you start the mock exam, you will begin again from Question 1."
- Actions: "Continue Exam" (cancel) / "Exit and Start Over" (confirm).

Confirming clears all in-memory exam state (mode, timer, answers, flags, submission state) and returns to the mode-selection start screen.

### C1.9 After submission

Submitting disarms the `beforeunload` guard immediately. Results/review behave exactly as before. Retake Exam clears the attempt and returns to the mode-selection start screen — it does not automatically reuse the previous mode.

### C1.10 Results — mode label

The results screen may show "Mode: Timed Exam" / "Mode: Untimed Practice" alongside the existing correct/incorrect/unanswered/score/percentage. No official pass/fail status is invented, per Section 9/20.

### C1.11 Light + dark theme

- Both light and dark mode are first-class (not a mechanical inversion of one another), toggled via a small, accessible, non-prominent control available globally.
- On first visit, the resolved theme prefers the OS/browser `prefers-color-scheme` setting.
- The user can explicitly switch; that explicit choice may be persisted in localStorage under its own key, separate from (and never containing) any exam progress. No exam progress of any kind is ever written to localStorage — only this visual preference.
- Switching theme never affects exam content, answers, flags, timer, or any other exam state.
- The toggle is a real, keyboard-operable button with an accessible name describing the action (e.g. "Switch to light mode" / "Switch to dark mode"), not an unlabeled icon, and it retains visible focus styling in both themes.
- Implemented via semantic design tokens (background/surface/text/border/accent/selected/focus-ring/success/danger/warning) rather than duplicated per-theme component styles.

---

## Approved Change 2 — Large Question Bank and Non-Repeating Mock Rotation

Approved by the user on 2026-09-08. This amendment preserves all previous history and supersedes only the fixed-bank, fixed-question-order, and theme-only persistence restrictions described below. Approval of the change is not a claim that research or implementation is complete.

### C2.1 Research gate and quality contract

Before bulk generation or application implementation, independently verify the current CCDV-F exam guide, objectives, domain weights, formats, timing, and public sample rationales against authoritative Anthropic sources. Prefer official certification, Platform, Claude Code, Agent SDK, MCP, and Pearson VUE materials. Never use leaked questions or dumps. Label unpublished details and inferences explicitly.

Create research/EXAM_BLUEPRINT.md, research/SOURCE_MATRIX.md, and research/FORM_CONSTRUCTION.md before generation. Freeze them only when internally consistent and sufficiently evidenced. A material source conflict or inability to verify the blueprint blocks generation; do not substitute the existing bank or third-party practice material for official evidence.

Each new accepted item must map to an official domain/objective, have authoritative source references, a stable globally unique ID, concept metadata, type, selectCount, valid options and exact answer set, and a concise explanation. Record internal rationales for every distractor. Review source support, unstated assumptions, version dependence, plausible alternative answers, and semantic duplication. Rewrite or reject ambiguous, weak, or repetitive items. Do not claim review occurred unless it actually did.

### C2.2 Size and legacy protection

Target approximately 318 new questions only if the verified blueprint and sustained quality permit it. Prefer whole disjoint 53-question forms. Quality takes priority over quantity. Determine generation counts after mapping the existing 53 to verified objectives; do not assume they already match domain quotas.

Preserve all existing question text, options, answer keys, explanations, and canonical Markdown. Add metadata without rewriting content. Record concerns and proposed corrections in research/LEGACY_QUESTION_AUDIT.md; corrections require separate explicit approval. Record draft/rejection/approval counts, domain/objective and response-type distributions, answer-position distribution, source coverage, and actual reviews in research/QUESTION_BANK_AUDIT.md.

### C2.3 Static architecture and form selection

Keep the static React/TypeScript SPA and current reducer. No backend, database, accounts, external runtime question service, Redux persistence, or bank administration UI. Organize the static bank in maintainable domain-sized modules if useful.

A pure, deterministic-testable selector constructs exactly 53 questions matching verified domain quotas, with sensible objective breadth and distinct concept keys where feasible. Mix domain order; never randomize option order. Stable bank IDs are separate from visible positions 1–53. Validate IDs, metadata, answer sets, sources, duplicates, and per-domain capacity; selection must fail clearly if bank defects prevent a valid form.

### C2.4 Rotation and persistence

Both Timed and Untimed use the same selector. Select once on explicit mode choice and retain the form only in memory throughout navigation, flagging, review, and theme changes.

Only successful final submission consumes the selected IDs. Completed forms are disjoint within a cycle. When any domain lacks enough unused items for the next full valid form, reset the entire cycle before selection; never partially repeat a form. Avoid the immediately preceding completed form after reset wherever feasible.

Persist only theme preference and a small completed-rotation record containing bankVersion, cycle, usedQuestionIds, and lastCompletedFormIds (suggested key: ccdv-f-question-history-v2). Active selected form, answers, flags, position, timer, mode, results, and submission session are never persisted. Aborted attempts do not advance history, including when selection provisionally required a cycle reset. Invalid or incompatible history resets safely.

### C2.5 UX preservation

Preserve mode selection, 120-minute timed countdown without automatic submission, untimed behavior, themes, navigation, flags, review/confirmation, exact-set scoring, results and filters, leave warning, Exit Exam, mobile layout, and accessibility. Retake returns to mode selection before selecting a fresh form. Minimal larger-bank messaging and a “Take another mock” CTA are allowed; no redesign or new bank-management features.

### C2.6 Verification and delivery

Test selector size, quotas, uniqueness, valid IDs, unused selection, complete disjoint cycles, exhaustion/reset, previous-form avoidance, aborted/submitted history, malformed/stale storage, deterministic RNG, and mode equivalence. Validate all content metadata and exact legacy preservation. Simulate hundreds/thousands of forms over repeated cycles. Functionally check timed/untimed navigation, flags, confirmation, submission, answer review, retake, reload, completed-history persistence, themes, and mobile navigation.

Run npm test, npm run typecheck, npm run lint, and npm run build without weakening meaningful tests. Report exact sources, confirmed and unknown blueprint facts, counts, algorithm, persisted fields, files changed, tests and smoke results, legacy concerns, and remaining uncertainty. Work from main on a dedicated branch; do not merge or deploy automatically.


### Approved Change 2 — Research methodology clarification (2026-09-08)

The user explicitly accepts a provenance-bearing mirror of the official Exam Guide plus credible independent corroboration for blueprint facts when Skilljar is inaccessible. Direct authenticated Skilljar access is not a generation prerequisite. Technical answer correctness still normally requires current first-party documentation, unique answer sets, and item-level ambiguity and duplicate review. The earlier blocked research checkpoint is superseded by this clarification; prior history remains preserved.

---

## Approved Change 3 — Independent review, correction, and repository cleanup (2026-09-09)

Approved by the user as a focused change: independently review, correct, and merge the 318-item
question-bank expansion introduced by Change 2, then clean up the repository so only what is
needed to run, test, and maintain the app remains.

### C3.1 Independent verification

The Change 2 blueprint and research methodology were independently re-verified against the real
exam guide, fetched directly from Anthropic's own hosting (not only the previously-cited mirror):
every domain weight, skill weight, format detail, and sample-question rationale matched exactly.
All 318 new items were independently re-reviewed, split by domain, each checked against freshly
fetched live documentation (not the original authoring citations alone) for a unique defensible
answer, sound distractors, currency, and semantic duplication against the legacy 53. The six
previously disclosed legacy concerns (precision caveats on Q1, Q7, Q9, Q40; content concerns on
Q31, Q42) were independently re-confirmed against current documentation and left unchanged, per
the original-content preservation rule.

### C3.2 Corrections applied

Two new items rested on an MCP protocol mechanism removed in a spec revision published before the
original research checkpoint but not caught by it; both were rewritten against current guidance.
Four new items were near-duplicates of an existing legacy question (the same discriminator in
different scenario dress) and were retargeted to a distinct, freshly-sourced fact within their
objective. No item required rejection. Full before/after detail is in the pull request that
carried this change and in Git history; see
[QUESTION_BANK_SUMMARY.md](research/QUESTION_BANK_SUMMARY.md) for the current summary.

### C3.3 Repository cleanup

The Change 2 drafting/review pipeline (`research/drafts/`, `research/reviews/`,
`research/question-sources.json`, `research/source-registry.json`,
`scripts/build-question-bank.mjs`, the `bank:generate` script) is retired. The 318 new questions
in `src/data/questions/new/` are now hand-maintained, directly-edited production files — there is
no separate draft/approval/generation step, and no script, test, or doc references a deleted
research file. `src/data/blueprint.ts` absorbed the skill-level `target`/`newTarget` allocation
data previously kept only in `research/blueprint.json`. `research/EXAM_BLUEPRINT.md` and
`research/LEGACY_QUESTION_AUDIT.md` are kept as live references; a new
`research/QUESTION_BANK_SUMMARY.md` replaces the retired audit/report files with a permanent,
non-stale summary. The detailed drafting, peer-review, and independent-review trail is preserved
in Git history and in this change's pull request, not duplicated in the working tree.

Everything else approved in Change 2 — the static architecture, the pure selector, the
memory-only active-attempt rule, the completed-history persistence contract, and the UX
preservation rules — is unchanged by this cleanup.

---

## Approved Change 4 — Six Legacy Question Corrections (2026-09-09)

Approved by the user as a focused, explicit exception to the Section 5 / Section 0 original-content
preservation rule, scoped to exactly six originally preserved questions and no others. The user's
approval message supplied verbatim replacement `body`/`option`/`explanation` text for each of the
six items and explicitly authorized applying it to both `src/data/questions.ts` and
`CCDV-F_Final_Mock_Exam.md`. This is not a general reopening of the preservation rule: every other
original question remains frozen exactly as before, under the same rule stated in Section 5.

### C4.1 Scope of the exception

The following six questions, identified by their original numeric ID (equivalently
`LEGACY-00N` in the bank), had their `body`, one or more `options[].body`, and `explanation`
fields replaced with user-approved wording. Their `id`, `type`, `selectCount`, `correctAnswers`,
domain/objective/concept mapping, and option lettering/order are unchanged:

- **Q1 / LEGACY-001** — removed the implied unconditional "overnight" completion guarantee from
  the Message Batches scenario; explanation now states batches do not guarantee overnight
  completion and the application must handle failed/expired requests.
- **Q7 / LEGACY-007** — option C and the explanation now describe checking for refusal/incomplete
  generation and validating against the application's own schema/value requirements, rather than
  an unqualified "completion/stop conditions" check.
- **Q9 / LEGACY-009** — options A and B now distinguish a documented *moving* alias from a
  canonical *fixed* snapshot ID (dated or dateless), rather than implying every non-pinned
  reference floats.
- **Q31 / LEGACY-031** — the stem no longer calls a JSON response instance a "schema"; it now
  separately describes the schema's requirements, the returned instance, and an explicitly
  external, separately-checked authorization requirement. Option D and the explanation now state
  the object passes the schema but the refund must still be blocked pending that separate
  authorization.
- **Q40 / LEGACY-040** — the stem now asks specifically about supplying the *initial* system
  instruction; option A and the explanation now state a system-role message cannot be the first
  entry in `messages` and that some supported models permit later system-role messages, rather
  than implying the Messages API never accepts a system role in `messages` at all.
- **Q42 / LEGACY-042** — the stem now asks which mode is intended for investigation/planning
  before implementation, rather than asserting plan mode is an absolute guarantee against
  mutation; the explanation now states plan mode's actual enforcement depends on the session's
  permissions/configuration.

All 47 other original questions, `CCDV-F_Final_Mock_Exam.md`'s content outside these six items,
and all 318 new questions from Change 2/3 are unchanged. Total bank size (371), the seven-form
disjoint rotation capacity, and every domain/skill count from Change 2/3 are unchanged, since
none of these six edits altered `id`, `domain`, `objective`, `type`, or `selectCount`.

### C4.2 Compatibility

`BANK_VERSION` is unchanged. Completed rotation history recorded under the existing
`ccdv-f-question-history-v2` localStorage key before this change remains valid and usable after
it: history validity depends only on stable bank IDs, domain/objective mapping, and per-domain
quotas, none of which changed. The existing generic stale/incompatible-history reset behavior
(for a genuinely incompatible or malformed record) is unchanged and untested by this specific
patch beyond confirming it still passes.

### C4.3 What this change does not do

This change does not reopen, re-run, or supersede the Change 3 independent review of the 318 new
questions, and does not restore any part of the retired drafting/review/generation pipeline. The
non-blocking domain-wide content-balance observations and the remaining soft near-duplicate calls
recorded during Change 3 are still open observations, not resolved by this patch. Fixing these six
items does not imply every other editorial concern in the bank has been resolved.

---

## Approved Change 5 — Visual Refinement (2026-09-09)

Approved by the user as a focused, presentation-only change: revised introductory/interface copy,
a Stackdrop-branded accent palette, and a responsive layout/navigator refinement, built on branch
`visual-refinement`. No question content, scoring, rotation, or persistence behavior is affected.

### C5.1 What this change authorizes

- Revised start-screen and header copy: header product name "CCDV-F Practice" with a small "by
  Stackdrop" attribution; a new main heading, supporting sentence, and mode-card descriptions using
  the exact wording the user supplied; a single footer disclaimer ("Independent practice material.
  Not affiliated with or endorsed by Anthropic or Pearson VUE.") in place of the previous duplicate
  disclaimer boxes.
- Removal of redundant start-screen instructional copy (the four-item feature list, the standalone
  "No login required" line, the "Choose your mode" heading, and the second disclaimer box) without
  replacing it with another long explanation; the existing 53-question count is not duplicated as a
  separate count card.
- A Stackdrop amber accent (`#FBB03A`) introduced as a design token, split into a button-fill color
  (`--color-accent`, paired with dark `--color-accent-fg` text — never white text on the amber
  fill) and a separate, higher-contrast `--color-accent-text` / `--color-focus` token for small
  text, icons, hover/active borders, and focus indicators on light backgrounds, verified against
  WCAG contrast math rather than eyeballed. The pre-existing flag/success/danger colors remain
  semantically distinct from the new accent; the flagged-question color was shifted to a
  rust/burnt-orange so flagged and selected/current states stay visually distinguishable even
  though both are now warm hues. Updated consistently across light, system-preference dark, and
  explicit dark mode, preserving the existing theme-resolution precedence and persistence.
- A warm off-white page background with white (`--color-surface`) content surfaces for cards,
  panels, dialogs, and answer rows, replacing the previous plain-white/slate palette.
- A responsive two-column exam-screen layout (single column below ~1100px, `minmax(0,1fr)` +
  340px sidebar above it) replacing the previous flex layout capped at a fixed 44rem question
  column; a consolidated single "Question N of 53" heading (removing the separate duplicate
  question-number heading and the separate answered/unanswered progress line, which is now shown
  once in the desktop navigator and once in the mobile navigator trigger); the flag control moved
  into the question header, aligned right on desktop and wrapping naturally on mobile.
- A navigator grid changed from an auto-fill layout to an explicit six-column grid at the sidebar
  width (53 questions across nine rows instead of fourteen), with calmer unanswered/answered/
  current/flagged visual states that remain distinguishable in combination, and a bounded-height
  scroll on the sticky desktop panel for unusually short viewports only.
- Presentation-only token, spacing, and button-hierarchy consistency updates carried into the
  Review & Submit screen, confirmation dialogs, results screen, answer-review filters, and the
  theme toggle, with no behavior change to any of those flows.
- A global `-webkit-tap-highlight-color: transparent` reset so the browser's default blue tap
  flash on touch devices doesn't clash with the new accent color.

### C5.2 What this change preserves

Every question record and canonical question Markdown; all correct answers and explanations; all
371 bank IDs and existing metadata; `BANK_VERSION` and the `ccdv-f-question-history-v2` localStorage
key; completed rotation history; the seven-form disjoint capacity and domain/skill quotas; the
memory-only active-attempt rule; both exam modes and the existing timed/untimed behavior; exact-set
scoring and submission confirmation; the leave/exit warnings; result filtering; and the existing
accessibility guarantees (44px touch targets, non-color state indication, keyboard navigation,
visible focus, ARIA labels). The retired Change-3 drafting/review/generation pipeline is not
restored.

### C5.3 Verification

`npm test`, `npm run typecheck`, `npm run lint`, and `npm run build` all pass. Two pre-existing
tests were updated to match intentional copy/heading changes (the start-screen supporting-sentence
text and the consolidated question heading's accessible name); no test assertion covering scoring,
rotation, persistence, or accessibility behavior was weakened. Verified in-browser at 1440×900,
mobile (375×844), and in both light and dark mode, including representative Select TWO, Select
THREE, code-block, and table questions via a temporary local-only screenshot fixture that was
removed before this change was committed.

### C5.4 Start-screen refinement follow-up (2026-09-09)

Approved by the user as a focused refinement of the still-unmerged Change 5, using a supplied
mockup as a direction rather than a pixel-perfect specification. Scoped to the start screen only,
with no change to question content, scoring, rotation, `BANK_VERSION`, persistence, or the exam
screen/navigator improvements from C5.1.

- The two mode cards changed from being the click targets themselves to noninteractive containers,
  each holding one native `<button>` ("Start timed exam" / "Start practice") as the single
  interactive element. This avoids the whole-card-as-button pattern in favor of an explicit,
  content-sized amber action per card (~44px tall, dark text on the amber fill, no nested buttons,
  no competing click targets). Clicking elsewhere in a card (its heading, icon, or description) is
  inert; only the button starts an attempt, and each button starts its mode exactly once.
- A small local outline-icon set (`src/components/icons.tsx`: clock, open book, stack-of-pages,
  arrow) was added — plain inline SVGs with a consistent stroke, no new dependency and no emoji.
  Icons sit inline next to each mode heading (no oversized icon tiles), and a small arrow rides
  inside each start button.
- The mode-card meta line ("120 minutes" / "No time limit") changed from an uppercase amber
  badge-style label to plain secondary text, matching the "avoid pill badges" direction.
- A compact bank/rotation summary was added below the existing practice notes, separated by a thin
  divider rather than a new card: "371 questions. 7 fresh mocks." with a supporting line describing
  completed-mock rotation within the same browser. The two displayed numbers are read directly from
  `QUESTION_BANK.length` and `FORM_SIZE` (no second source of truth, no selector change).
- Card, button, and icon styling is local to `StartScreen.module.css`; the shared `buttons.module.css`
  primary/secondary button classes and the design tokens from C5.1 are reused, not modified — this
  refinement does not change button or accent styling anywhere else in the app.

**Preserves:** everything listed in C5.2, plus the exam screen, navigator, and Review/Results
styling introduced earlier in this same Change 5 — none of it was touched by this follow-up.

**Verification:** `npm test`, `npm run typecheck`, `npm run lint`, and `npm run build` all pass. One
existing test file was updated for the new start-button accessible names (the old aria-label-based
card queries no longer apply; no behavioral coverage was removed). Checked in-browser at 1440×900
and 375×812, light and dark mode: both start buttons launch their correct mode exactly once,
clicking non-interactive card content does nothing, focusing a start button shows a visible
high-contrast outline, no page-level horizontal overflow at either width, and the button/icon
colors keep dark text on the amber fill in both themes.

### C5.5 Mockup-inspired icon and spacing pass (2026-09-09)

Approved by the user as a further, purely visual refinement of the C5.4 start screen, using a
supplied mockup image as direction. No layout, section order, copy, or interaction change: the
mode cards are still noninteractive containers with one native start button each; the bank/rotation
summary still reads its numbers from `QUESTION_BANK.length`/`FORM_SIZE`.

- Mode icons now sit in a small rounded, amber-tinted chip (40px) rather than bare inline glyphs,
  and the duration label ("120 minutes" / "No time limit") became a small pill badge next to the
  chip — both restrained in scale (not the mockup's larger icon tiles), reversing the C5.4 note that
  simplified this to plain text, per the user's explicit direction after seeing the mockup.
  A new `CheckCircleIcon` was added to the local icon set and placed beside the two practice notes.
- Start buttons are now full-width within their card, with the arrow pushed to the trailing edge,
  and pinned to the bottom of the card via `margin-top: auto` so both buttons align on the same
  baseline regardless of description length — matching "align the buttons... to the end of the
  cards." Button height remains 44px; only the width and internal alignment changed.
- A small amber accent bar above the heading was added, matching the mockup's decorative tick.
- Per the standing instruction that the bank-summary section must not introduce a new action, the
  mockup's circular refresh-style icon on that row was deliberately not carried over — the section
  keeps only the informational stack icon.

Still scoped to `StartScreen.tsx`/`StartScreen.module.css`/`icons.tsx`; no shared button, token, or
exam-screen file was touched. `npm test`, `npm run typecheck`, `npm run lint`, and `npm run build`
all pass with no test changes needed. Re-verified in-browser at 1440×900, mobile (375×812), and
dark mode: buttons remain 44px tall and bottom-aligned across both cards, still exactly one button
per card, no page-level horizontal overflow.

### C5.6 Button sizing and icon-row spacing tweak (2026-09-09)

Approved by the user as a small follow-up to C5.5. The C5.5 start buttons went full-width with the
arrow at the trailing edge; the user asked for them smaller and left-aligned instead. The button
reverted to a content-sized, left-aligned control (`align-self: flex-start`, no `width: 100%`,
slightly tighter horizontal padding) while keeping the same 44px height and the `margin-top: auto`
bottom-pinning from C5.5, so both cards' buttons still land on the same baseline. The gap between
each card's icon-chip/duration-pill row and its heading was widened (moved from a uniform flex
`gap` to an explicit `margin-bottom` on that row) so the icons read as a distinct group above the
text rather than crowding it.

CSS-only change to `StartScreen.module.css`; no other file touched. `npm test`, `npm run typecheck`,
`npm run lint`, and `npm run build` all pass with no test changes needed (button accessible names
and DOM structure are unchanged). Re-verified in-browser at 1440×900, mobile (375×812), and dark
mode: both buttons still 44px tall, aligned to the same bottom edge across the row, and no
page-level horizontal overflow.

### C5.7 Pre-submission review screen refinement (2026-09-09)

Approved by the user as a focused refinement of the pre-submission review screen
(`ReviewSubmitScreen.tsx`), replacing its title, three large statistic cards, and bare
question-number buttons with a clearer, more compact layout. No question content, answer key,
scoring, the 371-item bank, domain quotas, `BANK_VERSION`, localStorage keys, completed rotation
history, memory-only active-attempt behavior, or timed/untimed behavior is affected. The exam
screen, navigator, start screen, and themes from C5.1–C5.6 are untouched.

**Finding on the reported "53" button:** verified before editing, not a counting defect. The
screen's `unanswered`/`flagged` filters already used each `FormQuestion.id` — which
`selectExamForm` (`src/lib/examForm.ts`) deliberately sets to the question's 1–53 *display
position* (`bankId` holds the separate, never-displayed stable bank ID) — so a lone unanswered
question at the end of the form correctly rendered as a bare button labeled "53". That was Question
53's position, not a claim that 53 questions were unanswered; the summary above it already read "1
Unanswered" correctly. The defect was presentation (an unlabeled numeral easily misread as a count
sitting directly under a heading and a number that really did mean a count), not the underlying
arithmetic, which is unchanged by this pass.

**New layout:**
- Heading "Review before submitting" and a supporting sentence, replacing "Exam Review".
- One compact completion line ("N of 53 answered") with a subtle amber progress bar representing
  completion only — no score, correctness, or pass-likelihood implication.
- Two compact status sections (stacked on mobile, side by side from 640px) instead of three
  statistic cards and chip grids of bare numbers: "N unanswered question(s)" / "N flagged
  question(s)" with correct singular/plural wording, a one-line description, and a "Review
  unanswered" / "Review flagged" action button that jumps straight to the lowest displayed position
  in the current form matching that state. The two counts are computed independently (a question
  that is both unanswered and flagged is correctly counted in both, never summed together).
- Zero-state text ("All questions answered" / "No questions flagged") replaces the action instead of
  showing a disabled button, and reserves no extra space. When both are simultaneously true, the
  combined "All questions answered. Ready when you are." message is shown instead — never a claim
  about correctness or pass likelihood.
- A clearly separated submission section: the same explanation of what submitting does, a dynamic
  "N question(s) still unanswered" line when applicable, and Back to exam (secondary) / Submit exam
  (primary amber) actions. The existing confirmation dialog is preserved unchanged in behavior
  (opens on first click, states the exact unanswered count, Cancel leaves the attempt untouched,
  Confirm submits exactly once); its confirm button label changed from "Submit Exam" to "Submit
  exam" for consistency with the new screen copy.
- Both shortcuts and "Back to exam" use the existing `goToQuestion`/`returnToExam` actions verbatim
  — no reducer changes, no new screen, no filtered question session. `GOTO_QUESTION` already only
  updates `currentQuestion` and clears `reviewing`, so answers, flags, mode, the active form, and
  the timer are untouched by a shortcut jump, and completed rotation history is never touched by
  merely opening this screen or using a shortcut.
- Two small outline icons were added to the shared local icon set (`FlagIcon`, `CircleIcon`) for
  the status sections, reusing the existing `CheckCircleIcon`/`ArrowRightIcon` from the start-screen
  icon work; the flagged icon reuses the existing `--color-flag` token so its color matches the
  exam screen's own flag button.

**Tests:** a new `tests/reviewSubmitScreen.test.tsx` renders the component directly (mocked
actions, small fixed question arrays — never dependent on the real bank's random content) and
covers: the exact "52 of 53 answered" / "1 unanswered question" / Question-53-navigation scenario;
lowest-position selection with non-sequential gaps; lowest-position selection among out-of-order
flags; a question that is both unanswered and flagged; both zero states; the combined ready
message; "Back to exam" never triggering a shortcut; a partially-selected multiple-response
question counting as answered with no leaked key/explanation; and the confirmation dialog's
open/cancel/confirm-once behavior. `tests/examState.test.ts` gained a reducer-level test proving
`GOTO_QUESTION` preserves answers, flags, mode, and the start timestamp exactly. `npm test` (87/87),
`npm run typecheck`, `npm run lint`, and `npm run build` all pass; `tests/appRotationSmoke.test.tsx`
was updated for the renamed submit button ("Submit Exam" → "Submit exam").

**Verification:** re-checked in-browser at 1440×900 and 375×812, light and dark mode, across the
52-answered/1-unanswered/0-flagged scenario, a mixed scenario with both shortcuts available, and
the fully-answered/no-flags ready scenario, plus a full real (non-fixture) run through the actual
app: started an Untimed attempt, answered and flagged real questions, confirmed "Review unanswered"
and "Review flagged" landed on the correct real positions, confirmed Previous/answers/flags
survived the jump, and confirmed submission still recorded completed-rotation history correctly
afterward. No answer leakage, no horizontal overflow, all interactive targets 44px.
