import type { ExamState } from "../state/examState";
import type { Question } from "../data/types";
import { AnswerChoice } from "./AnswerChoice";
import { ExamMarkdown } from "./ExamMarkdown";
import { NavigatorMobile } from "./NavigatorMobile";
import { NavigatorPanel } from "./NavigatorPanel";
import btn from "../styles/buttons.module.css";
import styles from "./ExamScreen.module.css";

const SELECT_WORD: Record<number, string> = { 2: "TWO", 3: "THREE", 4: "FOUR" };

interface ExamScreenProps {
  state: ExamState;
  questions: Question[];
  actions: {
    selectSingle: (questionId: number, optionId: string) => void;
    toggleMultiOption: (questionId: number, optionId: string) => void;
    goToQuestion: (id: number) => void;
    next: () => void;
    prev: () => void;
    toggleFlag: (id: number) => void;
    goToReview: () => void;
  };
}

export function ExamScreen({ state, questions, actions }: ExamScreenProps) {
  const question = questions.find((q) => q.id === state.currentQuestion) ?? questions[0];
  const selected = state.answers[question.id] ?? [];
  const isFlagged = !!state.flags[question.id];
  const answeredCount = questions.filter((q) => (state.answers[q.id]?.length ?? 0) > 0).length;
  const unansweredCount = questions.length - answeredCount;
  const isLast = question.id === questions.length;

  return (
    <div className={styles.page}>
      <div className={styles.examLayout}>
        <div className={styles.content}>
          <div className={styles.topBar}>
            <div>
              <p className={styles.progressText}>
                Question <strong>{question.id}</strong> of {questions.length}
              </p>
              <p className={styles.progressText}>
                {answeredCount} answered &middot; {unansweredCount} unanswered
              </p>
            </div>
            <div className={styles.timerRow}>
              <NavigatorMobile
                questions={questions}
                currentId={question.id}
                answers={state.answers}
                flags={state.flags}
                onJump={actions.goToQuestion}
                answeredCount={answeredCount}
                totalCount={questions.length}
              />
            </div>
          </div>

          {question.type === "multiple" && (
            <p className={styles.badge}>Select {SELECT_WORD[question.selectCount] ?? question.selectCount}</p>
          )}

          <h1 className={styles.questionTitle}>Question {question.id}</h1>

          <div className={styles.questionBody}>
            <ExamMarkdown>{question.body}</ExamMarkdown>
          </div>

          <div className={styles.options} role="group" aria-label={`Answer options for question ${question.id}`}>
            {question.options.map((opt) => (
              <AnswerChoice
                key={opt.id}
                option={opt}
                questionId={question.id}
                inputType={question.type === "single" ? "radio" : "checkbox"}
                selected={selected.includes(opt.id)}
                onToggle={() =>
                  question.type === "single"
                    ? actions.selectSingle(question.id, opt.id)
                    : actions.toggleMultiOption(question.id, opt.id)
                }
              />
            ))}
          </div>

          <div className={styles.flagRow}>
            <button
              type="button"
              className={`${styles.flagButton} ${isFlagged ? styles.flagged : ""}`}
              onClick={() => actions.toggleFlag(question.id)}
              aria-pressed={isFlagged}
            >
              <span aria-hidden="true">⚑</span>
              {isFlagged ? "Flagged for review" : "Flag for review"}
            </button>
          </div>

          <div className={styles.footerNav}>
            <button type="button" className={btn.secondary} onClick={actions.prev} disabled={question.id === 1}>
              Previous
            </button>
            {isLast ? (
              <button type="button" className={btn.primary} onClick={actions.goToReview}>
                Review &amp; Submit
              </button>
            ) : (
              <button type="button" className={btn.primary} onClick={actions.next}>
                Next
              </button>
            )}
          </div>
        </div>

        <NavigatorPanel
          questions={questions}
          currentId={question.id}
          answers={state.answers}
          flags={state.flags}
          onJump={actions.goToQuestion}
          answeredCount={answeredCount}
          totalCount={questions.length}
        />
      </div>
    </div>
  );
}
