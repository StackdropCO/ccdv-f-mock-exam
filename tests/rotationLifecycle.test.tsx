import { act, cleanup, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useExamState } from "../src/hooks/useExamState";
import { useTheme } from "../src/hooks/useTheme";
import { HISTORY_STORAGE_KEY } from "../src/lib/questionHistory";
import { BLUEPRINT } from "../src/data/blueprint";

beforeEach(()=>localStorage.clear());
afterEach(()=>{cleanup();vi.restoreAllMocks();});
const saved=()=>JSON.parse(localStorage.getItem(HISTORY_STORAGE_KEY)??"null");

describe("active form and completed rotation lifecycle",()=>{
  it("holds one form through navigation, review, theme toggles and duplicate start calls",()=>{
    const {result}=renderHook(()=>({exam:useExamState(),theme:useTheme()}));
    act(()=>result.current.exam.actions.startExam("timed"));
    const form=result.current.exam.questions;
    act(()=>{result.current.exam.actions.next();result.current.exam.actions.toggleFlag(2);result.current.theme.toggleTheme();result.current.exam.actions.goToReview();});
    act(()=>result.current.exam.actions.returnToExam());
    act(()=>result.current.exam.actions.startExam("untimed"));
    expect(result.current.exam.questions).toBe(form);
    expect(result.current.exam.state.mode).toBe("timed");
    expect(saved()).toBeNull();
  });
  it("scores the selected form and commits once even with two submissions in one event",()=>{
    const {result}=renderHook(()=>useExamState());
    act(()=>result.current.actions.startExam("timed"));
    const form=result.current.questions;
    act(()=>{for(const q of form){if(q.type==='single')result.current.actions.selectSingle(q.id,q.correctAnswers[0]);else for(const a of q.correctAnswers)result.current.actions.toggleMultiOption(q.id,a);}});
    act(()=>{result.current.actions.submitExam();result.current.actions.submitExam();});
    expect(result.current.state.result?.correct).toBe(53);
    expect(saved().usedQuestionIds).toEqual(form.map(q=>q.bankId));
    expect(saved().usedQuestionIds).toHaveLength(53);
  });
  it("uses disjoint forms in both modes and keeps completed history across remount while losing active progress",()=>{
    const first=renderHook(()=>useExamState());
    act(()=>first.result.current.actions.startExam('timed'));
    act(()=>first.result.current.actions.submitExam());
    const complete=saved();first.unmount();
    const second=renderHook(()=>useExamState());
    expect(second.result.current.screen).toBe('start');
    act(()=>second.result.current.actions.startExam('untimed'));
    const form=second.result.current.questions;
    expect(form.some(q=>complete.usedQuestionIds.includes(q.bankId))).toBe(false);
    for(const d of BLUEPRINT)expect(form.filter(q=>q.domain===d.id)).toHaveLength(d.quota);
    act(()=>{second.result.current.actions.selectSingle(1,'A');second.result.current.actions.toggleFlag(1);});
    second.unmount();
    const third=renderHook(()=>useExamState());
    expect(third.result.current.state.answers).toEqual({});
    expect(third.result.current.state.flags).toEqual({});
    expect(third.result.current.questions).toEqual([]);
    expect(saved()).toEqual(complete);
  });
  it("does not consume an aborted attempt or a premature submission",()=>{
    const {result}=renderHook(()=>useExamState());
    act(()=>result.current.actions.submitExam());expect(saved()).toBeNull();
    act(()=>result.current.actions.startExam('untimed'));
    act(()=>result.current.actions.resetToStart());expect(saved()).toBeNull();
  });
  it("recovers from invalid JSON without persisting an active form",()=>{
    localStorage.setItem(HISTORY_STORAGE_KEY,'not json');
    const {result}=renderHook(()=>useExamState());
    act(()=>result.current.actions.startExam('timed'));
    expect(result.current.questions).toHaveLength(53);
    expect(localStorage.getItem(HISTORY_STORAGE_KEY)).toBe('not json');
    act(()=>result.current.actions.submitExam());expect(saved().usedQuestionIds).toHaveLength(53);
  });
  it("scores and rotates in memory if storage is unavailable, with a visible notice",()=>{
    vi.spyOn(Storage.prototype,'setItem').mockImplementation(()=>{throw new Error('unavailable');});
    const {result}=renderHook(()=>useExamState());
    act(()=>result.current.actions.startExam('timed'));
    const ids=result.current.questions.map(q=>q.bankId);
    act(()=>result.current.actions.submitExam());
    expect(result.current.screen).toBe('results');
    expect(result.current.rotationNotice).toMatch(/could not save/);
    act(()=>result.current.actions.resetToStart());
    act(()=>result.current.actions.startExam('untimed'));
    expect(result.current.questions.some(q=>ids.includes(q.bankId))).toBe(false);
  });
  it("recovers durable history after a transient write failure without reusing the second form",()=>{
    const original=Storage.prototype.setItem;
    vi.spyOn(Storage.prototype,'setItem').mockImplementationOnce(()=>{throw new Error('temporary');}).mockImplementation(original);
    const {result}=renderHook(()=>useExamState());
    const used=new Set<string>();
    for(let i=0;i<3;i++){
      act(()=>result.current.actions.startExam('timed'));
      for(const q of result.current.questions){expect(used.has(q.bankId)).toBe(false);used.add(q.bankId);}
      act(()=>result.current.actions.submitExam());
      act(()=>result.current.actions.resetToStart());
    }
    expect(saved().usedQuestionIds).toHaveLength(159);
  });
  it("does not overwrite another tab's newer completion history",()=>{
    const a=renderHook(()=>useExamState()),b=renderHook(()=>useExamState());
    act(()=>{a.result.current.actions.startExam('timed');b.result.current.actions.startExam('untimed');});
    act(()=>a.result.current.actions.submitExam());const h=saved();
    act(()=>b.result.current.actions.submitExam());
    expect(saved()).toEqual(h);
    expect(b.result.current.screen).toBe('results');
    expect(b.result.current.rotationNotice).toMatch(/Another tab/);
  });
});
