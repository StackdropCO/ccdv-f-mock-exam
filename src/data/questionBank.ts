import { QUESTIONS } from "./questions";
import { LEGACY_METADATA } from "./legacyMetadata";
import { DOMAIN_QUESTIONS } from "./questions/domains";
import type { BankQuestion } from "./bankTypes";

export const QUESTION_BANK: BankQuestion[] = [
  ...QUESTIONS.map(q => ({ ...q, ...LEGACY_METADATA[q.id], id: `LEGACY-${String(q.id).padStart(3, "0")}`, sourceRefs: [], qualityStatus: "LEGACY_RETAINED" as const })),
  ...DOMAIN_QUESTIONS,
];
