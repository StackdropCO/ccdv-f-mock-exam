# CCDV-F mock exam

A static React + TypeScript + Vite practice app. Choose Timed Exam (120 minutes) or Untimed Practice, answer 53 questions, submit, then review exact-set scoring and concise explanations. Light/dark themes, flags, navigator and confirmation flows are preserved.

Each mock uses the verified eight-domain allocation from the July 2026 CCDV-F Exam Guide v1.0. The bank contains 318 new source-reviewed questions and 53 preserved original questions, supporting seven disjoint completed mocks per rotation cycle. This is independent practice material, not an official exam or a scaled-score predictor. See the [legacy audit](research/LEGACY_QUESTION_AUDIT.md) for two retained content concerns and four precision caveats.

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

- [Exam blueprint](research/EXAM_BLUEPRINT.md) and [source matrix](research/SOURCE_MATRIX.md)
- [Form construction](research/FORM_CONSTRUCTION.md) and [bank audit](research/QUESTION_BANK_AUDIT.md)
- [Final implementation report](research/FINAL_REPORT.md)
- Per-item answer evidence and distractor rationales: `research/question-sources.json`
- Source index: `research/source-registry.json`

Original `src/data/questions.ts` and `CCDV-F_Final_Mock_Exam.md` remain unchanged. New authoring records are grouped in `research/drafts`; centrally approved production modules live in `src/data/questions/new`. After editorial approval, `npm run bank:generate` reproduces the modules and traceability file. It rejects unapproved or modified records using content hashes; editing an item requires renewed editorial review, not simply running the script.

## Rotation and persistence

The pure selector in `src/lib/examForm.ts` enforces 53 unique IDs and exact domain quotas. It favors varied concepts and skills and balances authored response types/answer positions when priorities tie. Only submission consumes questions. Exhaustion resets the entire cycle before the next selection, avoiding the preceding form where possible.

Only `ccdv-f-theme-preference` and `ccdv-f-question-history-v2` use localStorage. History stores bankVersion, cycle, usedQuestionIds and lastCompletedFormIds. Active answers, flags, form, position, timer, mode and results remain memory-only. Leaving/reloading discards the unfinished attempt after the standard warning. Use one exam tab for sequential rotation; concurrent history changes and unavailable storage produce a notice without blocking scoring.
