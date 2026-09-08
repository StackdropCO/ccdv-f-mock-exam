import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { QUESTION_BANK } from '../src/data/questionBank';
import { NEW_QUESTIONS } from '../src/data/questions/new';
import { QUESTIONS } from '../src/data/questions';
import { BLUEPRINT } from '../src/data/blueprint';
import { assertBank, assertForm } from '../src/data/validateBank';
import { completeExamForm, emptyHistory, selectExamForm } from '../src/lib/examForm';
const read=(p:string)=>JSON.parse(readFileSync(p,'utf8'));
const hash=(s:string)=>createHash('sha256').update(s).digest('hex');
const fields=['id','domain','objective','conceptKey','type','selectCount','body','options','correctAnswers','explanation','sourceRefs'];

describe('published question bank and editorial evidence',()=>{
  it('retains both original canonical files byte for byte and all 53 original question records',()=>{
    for(const [p,expected] of Object.entries(read('tests/legacy-hashes.json'))) expect(hash(readFileSync(p,'utf8'))).toBe(expected);
    expect(QUESTIONS).toHaveLength(53);
    for(const q of QUESTIONS){
      const legacy=QUESTION_BANK.find(b=>b.id===`LEGACY-${String(q.id).padStart(3,'0')}`)!;
      for(const key of ['body','options','correctAnswers','explanation','type','selectCount'] as const) expect(legacy[key]).toEqual(q[key]);
    }
  });
  it('contains exactly 318 approved new items and meets every frozen domain and skill count',()=>{
    expect(NEW_QUESTIONS).toHaveLength(318);expect(QUESTION_BANK).toHaveLength(371);
    expect(()=>assertBank(QUESTION_BANK,7)).not.toThrow();
    for(const d of read('research/blueprint.json').domains){
      expect(QUESTION_BANK.filter(q=>q.domain===d.id)).toHaveLength(d.quota*7);
      for(const o of d.objectives){
        expect(QUESTION_BANK.filter(q=>q.objective===o.id)).toHaveLength(o.target);
        expect(NEW_QUESTIONS.filter(q=>q.objective===o.id)).toHaveLength(o.newTarget);
      }
    }
  });
  it('links every accepted item to unchanged central approval, source assertions and every distractor rationale',()=>{
    const trace=read('research/question-sources.json');
    const approvals=read('research/reviews/central-approval.json');
    const registry=read('research/source-registry.json');
    for(const q of NEW_QUESTIONS){
      const record=trace[q.id];expect(record).toBeDefined();
      expect(q.qualityStatus).toBe('APPROVED');
      const published=Object.fromEntries(fields.map(k=>[k,q[k as keyof typeof q]]));
      expect(approvals.items[q.id].contentSha256).toBe(hash(JSON.stringify(published)));
      expect(record.sourceRefs).toEqual(q.sourceRefs);
      expect(record.bindingDiscriminator.trim().length).toBeGreaterThan(0);
      expect(record.ambiguityChallenge.trim().length).toBeGreaterThan(0);
      expect(record.duplicateCheck.trim().length).toBeGreaterThan(0);
      for(const url of q.sourceRefs){
        expect(new URL(url).protocol).toBe('https:');
        expect(['A','A-primary']).toContain(registry[url]?.level);
        expect(registry[url]?.questionIds).toContain(q.id);
        expect(registry[url]?.accessed).toBe('2026-09-08');
        expect(record.sourceAssertions.some((a:{url:string,assertion:string})=>a.url===url && a.assertion.trim())).toBe(true);
      }
      for(const o of q.options.filter(o=>!q.correctAnswers.includes(o.id))) expect(record.distractorRationales[o.id]?.trim().length).toBeGreaterThan(0);
    }
  });
  it('simulates 1,400 actual-bank forms with disjoint cycles and records answer-position and concept distribution',()=>{
    let seed=71093;const rng=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
    let history=emptyHistory();
    const answerRanges=Object.fromEntries(['A','B','C','D'].map(k=>[k,{min:53,max:0}]));
    let conceptRepeatForms=0,maxConceptRepeats=0,minMultiple=53,maxMultiple=0;
    for(let cycle=1;cycle<=200;cycle++){
      const used=new Set<string>();
      for(let n=0;n<7;n++){
        const form=selectExamForm(QUESTION_BANK,history,rng),ids=form.questions.map(q=>q.bankId);
        assertForm(QUESTION_BANK,ids);expect(form.history.cycle).toBe(cycle);
        if(n===0 && cycle>1) expect(ids.some(id=>history.lastCompletedFormIds.includes(id))).toBe(false);
        for(const id of ids){expect(used.has(id)).toBe(false);used.add(id);}
        const repeats=53-new Set(form.questions.map(q=>q.conceptKey)).size;
        if(repeats) conceptRepeatForms++;maxConceptRepeats=Math.max(maxConceptRepeats,repeats);
        const multi=form.questions.filter(q=>q.type==='multiple').length;minMultiple=Math.min(minMultiple,multi);maxMultiple=Math.max(maxMultiple,multi);
        for(const k of Object.keys(answerRanges)){
          const count=form.questions.filter(q=>q.type==='single' && q.correctAnswers[0]===k).length;
          answerRanges[k].min=Math.min(answerRanges[k].min,count);answerRanges[k].max=Math.max(answerRanges[k].max,count);
        }
        history=completeExamForm(QUESTION_BANK,form);
      }
      expect(used.size).toBe(371);
    }
    const positions=(bank:typeof QUESTION_BANK)=>Object.fromEntries(['A','B','C','D','E'].map(k=>[k,bank.filter(q=>q.type==='single' && q.correctAnswers[0]===k).length]));
    writeFileSync('research/reviews/rotation-simulation.json',JSON.stringify({seed:71093,forms:1400,cycles:200,formsPerCycle:7,quotaFailures:0,withinCycleOverlaps:0,resetPreviousFormOverlaps:0,conceptRepeatForms,maxConceptRepeats,multipleResponsePerForm:{min:minMultiple,max:maxMultiple},singleAnswerPositions:{new:positions(NEW_QUESTIONS),combined:positions(QUESTION_BANK),perFormRanges:answerRanges},domains:BLUEPRINT.map(d=>({id:d.id,quota:d.quota}))},null,2)+'\n');
  },30000);
});
