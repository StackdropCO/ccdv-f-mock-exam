import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import App from "../src/App";
import { HISTORY_STORAGE_KEY } from "../src/lib/questionHistory";

beforeEach(()=>localStorage.clear());
afterEach(()=>cleanup());
const click=(name:string|RegExp)=>fireEvent.click(screen.getByRole('button',{name}));
function submit(){
  click(/^Question 53,/);
  click('Review & Submit');
  click('Submit Exam');
  fireEvent.click(within(screen.getByRole('alertdialog')).getByRole('button',{name:'Submit Exam'}));
}
function another(){
  click('Take another mock');
  fireEvent.click(within(screen.getByRole('alertdialog')).getByRole('button',{name:'Take another mock'}));
}

describe('application interaction smoke (DOM environment)',()=>{
  it('runs timed navigation, mobile drawer, flags, exit cancel, submit, answer filters and fresh untimed mock',()=>{
    render(<App/>);
    expect(screen.getByText(/Each mock selects 53/)).not.toBeNull();
    click(/^Timed Exam\./);
    expect(screen.getByText(/remaining/)).not.toBeNull();
    expect(screen.getByRole('heading',{name:'Question 1'})).not.toBeNull();
    expect(screen.queryByText('Correct answer')).toBeNull();
    const options=screen.getByRole('group',{name:'Answer options for question 1'});
    fireEvent.click(within(options).queryAllByRole('radio').at(0) ?? within(options).getAllByRole('checkbox')[0]);
    click(/Flag for review/);
    click('Next');click('Previous');
    expect(screen.getByRole('button',{name:/Flagged for review/}).getAttribute('aria-pressed')).toBe('true');
    click(/^Questions \(/);
    const drawer=screen.getByRole('dialog',{name:'Question navigator'});
    expect(within(drawer).getAllByRole('button')).toHaveLength(54);
    fireEvent.click(within(drawer).getByRole('button',{name:/^Question 12,/}));
    expect(screen.queryByRole('dialog')).toBeNull();
    expect(screen.getByRole('heading',{name:'Question 12'})).not.toBeNull();
    click('Exit Exam');click('Continue Exam');
    expect(screen.getByRole('heading',{name:'Question 12'})).not.toBeNull();
    submit();
    expect(screen.getByRole('heading',{name:'Mock exam score'})).not.toBeNull();
    const first=JSON.parse(localStorage.getItem(HISTORY_STORAGE_KEY)!);
    click('Review Answers');
    expect(screen.getAllByText('Correct answer')).toHaveLength(53);
    fireEvent.click(within(screen.getByRole('group',{name:'Filter reviewed questions'})).getByRole('button',{name:'Flagged'}));
    expect(screen.getAllByRole('article')).toHaveLength(1);
    another();click(/^Untimed Practice\./);
    expect(screen.queryByText(/remaining/)).toBeNull();
    submit();
    const second=JSON.parse(localStorage.getItem(HISTORY_STORAGE_KEY)!);
    expect(second.usedQuestionIds).toHaveLength(106);
    expect(second.lastCompletedFormIds.some((id:string)=>first.usedQuestionIds.includes(id))).toBe(false);
  });
  it('completes seven forms and then a new cycle through the actual UI',()=>{
    render(<App/>);
    const used=new Set<string>();
    let previous:string[]=[];
    for(let i=0;i<8;i++){
      click(i%2===0?/^Timed Exam\./:/^Untimed Practice\./);
      submit();
      const h=JSON.parse(localStorage.getItem(HISTORY_STORAGE_KEY)!);
      expect(h.cycle).toBe(i<7?1:2);
      for(const id of h.lastCompletedFormIds){
        if(i<7){expect(used.has(id)).toBe(false);used.add(id);}
        else expect(previous.includes(id)).toBe(false);
      }
      previous=h.lastCompletedFormIds;
      another();
    }
    expect(used.size).toBe(371);
  });
});
