# CCDV-F mock exam

A static React + TypeScript + Vite practice app. Choose Timed Exam (120 minutes) or Untimed Practice, answer 53 questions, submit, then review exact-set scoring and concise explanations. Light/dark themes, flags, navigator and confirmation flows are preserved.

Each mock uses the verified eight-domain allocation from the July 2026 CCDV-F Exam Guide v1.0. The bank contains 318 new source-reviewed questions and 53 original questions, supporting seven disjoint completed mocks per rotation cycle. This is independent practice material, not an official exam or a scaled-score predictor. See the [legacy audit](research/LEGACY_QUESTION_AUDIT.md) for the review history of the 53 original questions, including six explicitly user-approved wording corrections.

## Development

```sh
npm ci
npm run dev
npm test
npm run typecheck
npm run lint
npm run build
```

## Content and evidence

- [Exam blueprint](research/EXAM_BLUEPRINT.md) — provenance for the domain/skill weights and format
- [Question bank summary](research/QUESTION_BANK_SUMMARY.md) — current counts, domain allocation, and independent-review notes
- [Legacy question audit](research/LEGACY_QUESTION_AUDIT.md) — disclosed precision caveats and content concerns on the 53 preserved originals

`src/data/questions.ts` and `CCDV-F_Final_Mock_Exam.md` hold the 53 original questions; six (Q1, Q7, Q9, Q31, Q40, Q42) carry explicitly user-approved wording corrections (see the legacy audit), the other 47 are unchanged from the original content. New questions live in `src/data/questions/new/`, grouped one file per domain, and are hand-maintained directly — there is no separate draft/approval/generation step. Each question carries its own `sourceRefs` (authoritative first-party URLs); `npm test` validates IDs, answer keys, `selectCount`, domain/skill counts against `src/data/blueprint.ts`, and original-content preservation. The detailed drafting and review trail behind the current bank is preserved in Git history rather than in the working tree.

## Rotation and persistence

The pure selector in `src/lib/examForm.ts` enforces 53 unique IDs and exact domain quotas. It favors varied concepts and skills and balances authored response types/answer positions when priorities tie. Only submission consumes questions. Exhaustion resets the entire cycle before the next selection, avoiding the preceding form where possible.

Only `ccdv-f-theme-preference` and `ccdv-f-question-history-v2` use localStorage. History stores bankVersion, cycle, usedQuestionIds and lastCompletedFormIds. Active answers, flags, form, position, timer, mode and results remain memory-only. Leaving/reloading discards the unfinished attempt after the standard warning. Use one exam tab for sequential rotation; concurrent history changes and unavailable storage produce a notice without blocking scoring.
