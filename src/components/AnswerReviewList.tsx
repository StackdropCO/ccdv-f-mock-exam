import { useState } from "react";
import type { FormQuestion } from "../data/bankTypes";
import type { Option } from "../data/types";
import { DOMAIN_LABEL } from "../data/blueprint";
import type { AnswersMap, ExamResult, QuestionStatus } from "../lib/scoring";
import { REVIEW_FILTERS, reviewStatusText, type FilterKey } from "../lib/reviewFilter";
import { stripMarkdownPreview } from "../lib/textPreview";
import { CheckCircleIcon, ChevronDownIcon, CircleIcon, FlagIcon, XCircleIcon } from "./icons";
import { ExamMarkdown } from "./ExamMarkdown";
import styles from "./AnswerReviewList.module.css";

const STATUS_LABEL: Record<QuestionStatus, string> = {
  correct: "Correct",
  incorrect: "Incorrect",
  unanswered: "Unanswered",
};

function optionsFor(question: FormQuestion, ids: readonly string[]): Option[] {
  const idSet = new Set(ids);
  return question.options.filter((o) => idSet.has(o.id));
}

function StatusIcon({ status }: { status: QuestionStatus }) {
  if (status === "correct") return <CheckCircleIcon className={styles.iconCorrect} />;
  if (status === "incorrect") return <XCircleIcon className={styles.iconIncorrect} />;
  return <CircleIcon className={styles.iconUnanswered} />;
}

function OptionRows({
  options,
  annotate,
  correctIds,
}: {
  options: Option[];
  annotate?: boolean;
  correctIds?: Set<string>;
}) {
  return (
    <ul className={styles.optionRows}>
      {options.map((opt) => (
        <li key={opt.id} className={styles.optionRow}>
          <span className={styles.optionLetter}>{opt.id}.</span>
          <span className={styles.optionBody}>
            <ExamMarkdown>{opt.body}</ExamMarkdown>
          </span>
          {annotate && correctIds && (
            <span className={styles.optionAnnotation}>
              {correctIds.has(opt.id) ? (
                <CheckCircleIcon className={styles.optionCorrectIcon} />
              ) : (
                <XCircleIcon className={styles.optionIncorrectIcon} />
              )}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

interface AnswerReviewListProps {
  questions: FormQuestion[];
  answers: AnswersMap;
  flags: Record<number, boolean>;
  result: ExamResult;
  filter: FilterKey;
  onFilterChange: (filter: FilterKey) => void;
}

export function AnswerReviewList({ questions, answers, flags, result, filter, onFilterChange }: AnswerReviewListProps) {
  const [expanded, setExpanded] = useState<Set<number>>(() => {
    const first = questions.find((q) => {
      const status = result.perQuestion[q.id];
      return status === "incorrect" || status === "unanswered";
    });
    return first ? new Set([first.id]) : new Set();
  });

  const counts: Record<FilterKey, number> = {
    incorrect: result.incorrect,
    unanswered: result.unanswered,
    correct: result.correct,
    flagged: questions.filter((q) => !!flags[q.id]).length,
    all: questions.length,
  };

  const visible = questions.filter((q) => {
    const status = result.perQuestion[q.id];
    if (filter === "incorrect") return status === "incorrect";
    if (filter === "unanswered") return status === "unanswered";
    if (filter === "correct") return status === "correct";
    if (filter === "flagged") return !!flags[q.id];
    return true;
  });

  const toggleRow = (id: number, isOpen: boolean) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (isOpen) next.add(id);
      else next.delete(id);
      return next;
    });
  };

  return (
    <div>
      <div className={styles.filterBar} role="group" aria-label="Filter reviewed questions">
        {REVIEW_FILTERS.map((f) => {
          const count = counts[f.key];
          const disabled = f.key !== "all" && count === 0;
          return (
            <button
              key={f.key}
              type="button"
              className={`${styles.filterButton} ${filter === f.key ? styles.active : ""}`}
              onClick={() => onFilterChange(f.key)}
              aria-pressed={filter === f.key}
              disabled={disabled}
            >
              {f.label} ({count})
            </button>
          );
        })}
      </div>

      <p className={styles.statusText}>{reviewStatusText(filter, visible.length)}</p>

      <div className={styles.list}>
        {visible.length === 0 && <p className={styles.emptyNote}>No questions match this filter.</p>}
        {visible.map((q) => {
          const status = result.perQuestion[q.id];
          const userIds = answers[q.id] ?? [];
          const userOptions = optionsFor(q, userIds);
          const correctOptions = optionsFor(q, q.correctAnswers);
          const correctIdSet = new Set(q.correctAnswers);
          const isOpen = expanded.has(q.id);

          return (
            <details
              key={q.id}
              className={`${styles.row} ${styles[`row_${status}`]}`}
              open={isOpen}
              onToggle={(e) => toggleRow(q.id, (e.currentTarget as HTMLDetailsElement).open)}
            >
              <summary className={styles.summary}>
                <span className={styles.summaryTop}>
                  <span className={styles.statusGroup}>
                    <StatusIcon status={status} />
                    <span className={styles.rowNumber}>Question {q.id}</span>
                    <span className={styles.rowStatusText}>{STATUS_LABEL[status]}</span>
                  </span>
                  <span className={styles.summaryMeta}>
                    {flags[q.id] && (
                      <span className={styles.flagBadge}>
                        <FlagIcon className={styles.flagIcon} /> Flagged
                      </span>
                    )}
                    <span className={styles.domainBadge}>{DOMAIN_LABEL[q.domain]}</span>
                    <ChevronDownIcon className={styles.chevron} />
                  </span>
                </span>
                <span className={styles.preview}>{stripMarkdownPreview(q.body)}</span>
              </summary>

              <div className={styles.expandedContent}>
                <div className={styles.stemBlock}>
                  <ExamMarkdown>{q.body}</ExamMarkdown>
                </div>

                {status === "correct" ? (
                  <div className={`${styles.answerBlock} ${styles.answerToneCorrect}`}>
                    <p className={styles.answerLabel}>Your answer{correctOptions.length === 1 ? "" : "s"} · Correct</p>
                    <OptionRows options={correctOptions} />
                  </div>
                ) : (
                  <div className={styles.answerCompare}>
                    <div className={`${styles.answerBlock} ${styles.answerToneIncorrect}`}>
                      <p className={styles.answerLabel}>Your answer{userOptions.length === 1 ? "" : "s"}</p>
                      {userOptions.length === 0 ? (
                        <p className={styles.noAnswer}>No answer selected</p>
                      ) : (
                        <OptionRows options={userOptions} annotate={q.type === "multiple"} correctIds={correctIdSet} />
                      )}
                    </div>
                    <div className={`${styles.answerBlock} ${styles.answerToneCorrect}`}>
                      <p className={styles.answerLabel}>Correct answer{correctOptions.length === 1 ? "" : "s"}</p>
                      <OptionRows options={correctOptions} />
                    </div>
                  </div>
                )}

                <div className={styles.explanationBlock}>
                  <p className={styles.explanationLabel}>Why this is correct</p>
                  <ExamMarkdown>{q.explanation}</ExamMarkdown>
                </div>
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
