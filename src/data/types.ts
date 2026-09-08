export interface Option {
  id: string;
  body: string;
}

export interface QuestionBase {
  id: number;
  body: string;
  options: Option[];
  correctAnswers: string[];
  explanation: string;
}

export interface SingleChoiceQuestion extends QuestionBase {
  type: "single";
  selectCount: number;
}

export interface MultipleChoiceQuestion extends QuestionBase {
  type: "multiple";
  selectCount: number;
}

export type Question = SingleChoiceQuestion | MultipleChoiceQuestion;
