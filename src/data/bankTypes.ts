import type { Question } from "./types";
import type { Domain } from "./blueprint";

export type BankQuestion = Omit<Question, "id"> & {
  id: string;
  domain: Domain;
  objective: string;
  conceptKey: string;
  sourceRefs: string[];
  qualityStatus: "APPROVED" | "LEGACY_RETAINED";
};
// Numeric IDs remain positions for the existing navigation/scoring contract.
export type FormQuestion = Question & { bankId: string; domain: Domain; objective: string; conceptKey: string };
