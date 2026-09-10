import type { Option } from "../data/types";
import { ExamMarkdown } from "./ExamMarkdown";
import styles from "./AnswerChoice.module.css";

interface AnswerChoiceProps {
  option: Option;
  questionId: number;
  inputType: "radio" | "checkbox";
  selected: boolean;
  disabled?: boolean;
  onToggle: () => void;
}

export function AnswerChoice({ option, questionId, inputType, selected, disabled = false, onToggle }: AnswerChoiceProps) {
  const inputId = `q${questionId}-opt${option.id}`;
  return (
    <label
      htmlFor={inputId}
      className={`${styles.row} ${selected ? styles.selected : ""} ${disabled ? styles.disabled : ""}`}
    >
      <input
        id={inputId}
        className={styles.input}
        type={inputType}
        name={inputType === "radio" ? `q${questionId}` : undefined}
        checked={selected}
        disabled={disabled}
        onChange={onToggle}
      />
      <span className={styles.optionId} aria-hidden="true">
        {option.id}
      </span>
      <span className={styles.body}>
        <ExamMarkdown>{option.body}</ExamMarkdown>
      </span>
    </label>
  );
}
