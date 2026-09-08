import { describe, expect, it } from "vitest";
import { BLUEPRINT, BANK_VERSION } from "../src/data/blueprint";
import type { BankQuestion } from "../src/data/bankTypes";
import { validateBank, assertForm } from "../src/data/validateBank";
import { completeExamForm, emptyHistory, normalizeHistory, selectExamForm } from "../src/lib/examForm";

export function seeded(seed: number) {
  return () => { seed = (Math.imul(1664525, seed) + 1013904223) >>> 0; return seed / 4294967296; };
}
const bank: BankQuestion[] = BLUEPRINT.flatMap(d => Array.from({ length: d.quota * 7 }, (_, i) => ({
  id: `${d.id}-${i}`, domain: d.id, objective: d.objectives[i % d.objectives.length].id,
  conceptKey: `${d.id}-concept-${i}`, type: "single" as const, selectCount: 1,
  body: `${d.id} scenario ${i}`, options: [{id:"A", body:`${d.id} correct ${i}`},{id:"B",body:`${d.id} wrong ${i}`}],
  correctAnswers: ["A"], explanation: "Synthetic selection fixture, not exam content.", sourceRefs: ["https://example.test"], qualityStatus: "APPROVED" as const,
})));
const ids = (form: ReturnType<typeof selectExamForm>) => form.questions.map(q => q.bankId);

describe("blueprint form rotation", () => {
  it("selects 53 known unique IDs, numbered 1–53, with every domain quota", () => {
    const f = selectExamForm(bank, null, seeded(42));
    expect(f.questions).toHaveLength(53);
    expect(new Set(ids(f)).size).toBe(53);
    expect(() => assertForm(bank, ids(f))).not.toThrow();
    expect(f.questions.map(q => q.id)).toEqual(Array.from({length:53},(_,i)=>i+1));
    expect(new Set(f.questions.map(q => q.conceptKey)).size).toBe(53);
  });
  it("is deterministic with injected RNG and varies with different seeds", () => {
    expect(ids(selectExamForm(bank,null,seeded(9)))).toEqual(ids(selectExamForm(bank,null,seeded(9))));
    expect(ids(selectExamForm(bank,null,seeded(9)))).not.toEqual(ids(selectExamForm(bank,null,seeded(10))));
  });
  it("never changes history when selecting or abandoning, and consumes on completion only", () => {
    const h=emptyHistory(), before=structuredClone(h);
    const f=selectExamForm(bank,h,seeded(3));
    expect(h).toEqual(before);
    expect(f.history.usedQuestionIds).toEqual([]);
    const completed=completeExamForm(bank,f);
    expect(completed.usedQuestionIds).toEqual(ids(f));
    expect(h).toEqual(before);
    const next=selectExamForm(bank,completed,seeded(4));
    expect(ids(next).some(id=>completed.usedQuestionIds.includes(id))).toBe(false);
  });
  it("simulates 2,800 forms: seven disjoint forms per cycle, atomic exhaustion/reset, and last-form avoidance", () => {
    const rng=seeded(81283);
    let h=emptyHistory();
    for(let cycle=1;cycle<=400;cycle++) {
      const cycleIds=new Set<string>();
      for(let n=0;n<7;n++) {
        const f=selectExamForm(bank,h,rng);
        expect(f.history.cycle).toBe(cycle);
        assertForm(bank,ids(f));
        if(n===0 && cycle>1) expect(ids(f).some(id=>h.lastCompletedFormIds.includes(id))).toBe(false);
        for(const id of ids(f)) { expect(cycleIds.has(id)).toBe(false); cycleIds.add(id); }
        h=completeExamForm(bank,f);
        expect(h.usedQuestionIds).toHaveLength((n+1)*53);
      }
      expect(cycleIds.size).toBe(371);
    }
  }, 30000);
  it("resets the whole cycle if a single domain runs out, never fills with partial repeats", () => {
    const reduced=bank.filter(q=>q.domain!==BLUEPRINT[0].id || Number(q.id.split('-').at(-1))<BLUEPRINT[0].quota);
    const first=selectExamForm(reduced,null,seeded(1));
    const h=completeExamForm(reduced,first);
    const next=selectExamForm(reduced,h,seeded(2));
    expect(next.history.cycle).toBe(2);
    expect(next.history.usedQuestionIds).toEqual([]);
    assertForm(reduced,ids(next));
    const unavoidable=ids(next).filter(id=>ids(first).includes(id));
    expect(unavoidable).toHaveLength(BLUEPRINT[0].quota);
    expect(h.cycle).toBe(1); // even an aborted reset has no persistent effect
  });
  it("safely rejects stale, corrupt, impossible and unknown-ID histories", () => {
    const valid=completeExamForm(bank,selectExamForm(bank,null,seeded(1)));
    for(const bad of [null,{},[],{...valid,bankVersion:'old'}, {...valid,cycle:NaN}, {...valid,cycle:0}, {...valid,usedQuestionIds:['unknown']}, {...valid,usedQuestionIds:[...valid.usedQuestionIds,valid.usedQuestionIds[0]]}, {...valid,lastCompletedFormIds:[]}, {...valid,usedQuestionIds:bank.slice(0,53).map(q=>q.id)}, {...valid,lastCompletedFormIds:bank.slice(100,153).map(q=>q.id)}]) {
      expect(normalizeHistory(bad,bank)).toEqual(emptyHistory());
    }
    expect(normalizeHistory(valid,bank)).toEqual(valid);
    expect(valid.bankVersion).toBe(BANK_VERSION);
  });
  it("fails loudly for invalid bank data and RNG", () => {
    expect(()=>selectExamForm([...bank,bank[0]],null,seeded(1))).toThrow(/duplicate ID/);
    expect(()=>selectExamForm(bank.slice(0,10),null,seeded(1))).toThrow(/insufficient/);
    expect(()=>selectExamForm([{...bank[0],selectCount:2},...bank.slice(1)],null,seeded(1))).toThrow(/selectCount/);
    expect(()=>selectExamForm(bank,null,()=>1)).toThrow(/RNG/);
    expect(()=>selectExamForm(bank,null,()=>NaN)).toThrow(/RNG/);
    expect(validateBank([{...bank[0],objective:'unknown'},...bank.slice(1)])).toContainEqual(expect.stringContaining('unknown domain/objective'));
  });
  it("rejects corrupted or duplicate completion IDs", () => {
    const f=selectExamForm(bank,null,seeded(1));
    expect(()=>completeExamForm(bank,{...f,history:completeExamForm(bank,f)})).toThrow(/already-used/);
    expect(()=>completeExamForm(bank,{...f,questions:f.questions.slice(1)})).toThrow(/53 distinct/);
  });
});
