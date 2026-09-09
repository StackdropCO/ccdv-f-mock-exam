import { BLUEPRINT, FORM_SIZE } from "./blueprint";
import type { BankQuestion } from "./bankTypes";

const normalize = (s: string) => s.replace(/\s+/g, " ").trim().toLowerCase();
export function validateBank(bank: readonly BankQuestion[], requiredForms = 1): string[] {
  const issues: string[] = [];
  const ids = new Set<string>(), stems = new Set<string>(), optionSets = new Set<string>();
  for (const q of bank) {
    const fail = (message: string) => issues.push(`${q.id}: ${message}`);
    if (!q.id || ids.has(q.id)) fail("missing or duplicate ID");
    ids.add(q.id);
    const d = BLUEPRINT.find(d => d.id === q.domain);
    if (!d || !d.objectives.some(o => o.id === q.objective)) fail("unknown domain/objective mapping");
    if (!q.conceptKey?.trim()) fail("missing conceptKey");
    if (!["APPROVED", "LEGACY_RETAINED"].includes(q.qualityStatus)) fail("unapproved item");
    if (q.qualityStatus === "APPROVED" && !q.sourceRefs?.length) fail("missing authoritative source references");
    if (!q.body?.trim()) fail("missing body");
    const stem = normalize(q.body ?? "");
    if (stems.has(stem)) fail("duplicate stem");
    stems.add(stem);
    if (!q.explanation?.trim()) fail("missing explanation");
    const options = q.options ?? [];
    if (options.length < 2 || options.some(o => !o.id || !o.body?.trim())) fail("missing options");
    const optionIds = new Set(options.map(o => o.id));
    if (optionIds.size !== options.length) fail("duplicate option IDs");
    const optionSet = options.map(o => normalize(o.body)).sort().join("\u0000");
    if (optionSets.has(optionSet)) fail("duplicate option set");
    optionSets.add(optionSet);
    const key = q.correctAnswers ?? [];
    if (new Set(key).size !== key.length || key.some(id => !optionIds.has(id))) fail("invalid answer key");
    if (key.length !== q.selectCount) fail("selectCount does not match answer key");
    if (q.type === "single") {
      if (q.selectCount !== 1) fail("single choice must select one");
    } else if (q.type === "multiple") {
      if (![2, 3].includes(q.selectCount)) fail("multiple response must select two or three");
      // Legacy Markdown uses bold Select wording; strip presentation markup.
      if (q.qualityStatus === "APPROVED" && !normalize(q.body.replace(/\*/g, "")).includes(q.selectCount === 2 ? "select two" : "select three")) fail("missing explicit selection instruction");
    } else fail("invalid question type");
  }
  for (const d of BLUEPRINT) {
    if (bank.filter(q => q.domain === d.id).length < d.quota * requiredForms) issues.push(`${d.id}: insufficient items for ${requiredForms} forms`);
  }
  return issues;
}
export function assertBank(bank: readonly BankQuestion[], requiredForms = 1): void {
  const issues = validateBank(bank, requiredForms);
  if (issues.length) throw new Error(`Invalid question bank:\n${issues.join("\n")}`);
}
export function assertForm(bank: readonly BankQuestion[], ids: readonly string[]): void {
  if (ids.length !== FORM_SIZE || new Set(ids).size !== FORM_SIZE) throw new Error("Form must contain 53 distinct IDs");
  const byId = new Map(bank.map(q => [q.id, q]));
  if (ids.some(id => !byId.has(id))) throw new Error("Form contains unknown IDs");
  for (const d of BLUEPRINT) {
    if (ids.filter(id => byId.get(id)?.domain === d.id).length !== d.quota) throw new Error(`Invalid form quota: ${d.id}`);
  }
}
