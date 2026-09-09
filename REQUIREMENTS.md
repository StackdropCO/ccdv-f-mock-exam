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
