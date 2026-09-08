import { useState } from "react";
import { useExamState } from "./hooks/useExamState";
import { useTheme } from "./hooks/useTheme";
import { Layout } from "./components/Layout";
import { StartScreen } from "./components/StartScreen";
import { ExamScreen } from "./components/ExamScreen";
import { ReviewSubmitScreen } from "./components/ReviewSubmitScreen";
import { ResultsScreen } from "./components/ResultsScreen";
import { ConfirmDialog } from "./components/ConfirmDialog";

const MODE_LABEL: Record<string, string> = {
  timed: "Timed Exam",
  untimed: "Untimed Practice",
};

function App() {
  const { state, screen, isUnfinished, questions, actions } = useExamState();
  const { theme, toggleTheme } = useTheme();
  const [confirmingExit, setConfirmingExit] = useState(false);

  return (
    <Layout
      modeLabel={isUnfinished && state.mode ? MODE_LABEL[state.mode] : undefined}
      timerStartTimestamp={isUnfinished && state.mode === "timed" ? state.startTimestamp : undefined}
      onExitExam={isUnfinished ? () => setConfirmingExit(true) : undefined}
      theme={theme}
      onToggleTheme={toggleTheme}
    >
      {screen === "start" && <StartScreen onStart={actions.startExam} />}

      {screen === "exam" && (
        <ExamScreen
          state={state}
          questions={questions}
          actions={{
            selectSingle: actions.selectSingle,
            toggleMultiOption: actions.toggleMultiOption,
            goToQuestion: actions.goToQuestion,
            next: actions.next,
            prev: actions.prev,
            toggleFlag: actions.toggleFlag,
            goToReview: actions.goToReview,
          }}
        />
      )}

      {screen === "review" && (
        <ReviewSubmitScreen
          state={state}
          questions={questions}
          actions={{
            goToQuestion: actions.goToQuestion,
            returnToExam: actions.returnToExam,
            submitExam: actions.submitExam,
          }}
        />
      )}

      {screen === "results" && (
        <ResultsScreen state={state} questions={questions} onRetake={actions.resetToStart} />
      )}

      {confirmingExit && (
        <ConfirmDialog
          title="Exit exam?"
          message="Your current answers and progress will be lost. The next time you start the mock exam, you will begin again from Question 1."
          confirmLabel="Exit and Start Over"
          cancelLabel="Continue Exam"
          destructive
          onConfirm={() => {
            setConfirmingExit(false);
            actions.resetToStart();
          }}
          onCancel={() => setConfirmingExit(false)}
        />
      )}
    </Layout>
  );
}

export default App;
