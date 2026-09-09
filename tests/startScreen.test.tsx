import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { StartScreen } from "../src/components/StartScreen";
import App from "../src/App";
import { QUESTION_BANK } from "../src/data/questionBank";
import { FORM_SIZE } from "../src/data/blueprint";
import { HISTORY_STORAGE_KEY } from "../src/lib/questionHistory";

beforeEach(() => localStorage.clear());
afterEach(() => cleanup());

describe("StartScreen - heading and actions", () => {
  it("has exactly one accessible heading reading 'Practice for the CCDV-F exam.'", () => {
    render(<StartScreen onStart={() => {}} />);
    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings).toHaveLength(1);
    expect(headings[0].textContent?.replace(/\s+/g, " ").trim()).toBe("Practice for the CCDV-F exam.");
  });

  it("exposes two Start actions with distinct accessible names", () => {
    render(<StartScreen onStart={() => {}} />);
    expect(screen.getByRole("button", { name: "Start timed exam" })).not.toBeNull();
    expect(screen.getByRole("button", { name: "Start untimed practice" })).not.toBeNull();
  });

  it("launches Timed mode exactly once when 'Start timed exam' is clicked", () => {
    const onStart = vi.fn();
    render(<StartScreen onStart={onStart} />);
    fireEvent.click(screen.getByRole("button", { name: "Start timed exam" }));
    expect(onStart).toHaveBeenCalledTimes(1);
    expect(onStart).toHaveBeenCalledWith("timed");
  });

  it("launches Untimed mode exactly once when 'Start untimed practice' is clicked", () => {
    const onStart = vi.fn();
    render(<StartScreen onStart={onStart} />);
    fireEvent.click(screen.getByRole("button", { name: "Start untimed practice" }));
    expect(onStart).toHaveBeenCalledTimes(1);
    expect(onStart).toHaveBeenCalledWith("untimed");
  });
});

describe("StartScreen - mode rows are not competing click targets", () => {
  it("does not start an exam when the mode title, duration, description, or icon is clicked", () => {
    const onStart = vi.fn();
    render(<StartScreen onStart={onStart} />);
    fireEvent.click(screen.getByText("Timed Exam"));
    fireEvent.click(screen.getByText("120 minutes"));
    fireEvent.click(screen.getByText("Practice at exam pace."));
    fireEvent.click(screen.getByText("Untimed Practice"));
    fireEvent.click(screen.getByText("No time limit"));
    fireEvent.click(screen.getByText("Work through every question."));
    expect(onStart).not.toHaveBeenCalled();
  });

  it("has no nested interactive elements — exactly two buttons on the page", () => {
    render(<StartScreen onStart={() => {}} />);
    expect(screen.getAllByRole("button")).toHaveLength(2);
    for (const button of screen.getAllByRole("button")) {
      expect(button.querySelector("button, a[href]")).toBeNull();
    }
  });
});

describe("StartScreen - exam-specification rail matches production data", () => {
  it("shows the current form size, bank size, and derived no-repeat mock count", () => {
    render(<StartScreen onStart={() => {}} />);
    expect(screen.getByText(String(FORM_SIZE))).not.toBeNull();
    expect(screen.getByText(String(QUESTION_BANK.length))).not.toBeNull();
    expect(screen.getByText(String(Math.floor(QUESTION_BANK.length / FORM_SIZE)))).not.toBeNull();
  });
});

describe("StartScreen - notes, warning, and disclaimer", () => {
  it("shows the review-after-submission note", () => {
    render(<StartScreen onStart={() => {}} />);
    expect(screen.getByText(/Answers and explanations after submission/)).not.toBeNull();
  });

  it("shows the refresh/leave warning without implying the attempt persists", () => {
    render(<StartScreen onStart={() => {}} />);
    expect(screen.getByText(/clears your current attempt/i)).not.toBeNull();
    expect(screen.queryByText(/saved|persist|resume/i)).toBeNull();
  });

  it("does not render the exact-set grading explanation on the start screen", () => {
    render(<StartScreen onStart={() => {}} />);
    expect(screen.queryByText(/exact-set/i)).toBeNull();
  });

  it("does not render its own affiliation disclaimer (the app footer owns the single copy)", () => {
    render(<StartScreen onStart={() => {}} />);
    expect(screen.queryByText(/affiliated with or endorsed by/i)).toBeNull();
  });
});

describe("StartScreen - theme toggling has no effect on exam/form state", () => {
  it("toggling the theme from the start screen does not start or select a form", () => {
    render(<App />);
    expect(screen.getByRole("button", { name: "Start timed exam" })).not.toBeNull();
    fireEvent.click(screen.getByRole("button", { name: /Switch to (dark|light) mode/ }));
    // Still on the start screen, no exam started, and no rotation history written.
    expect(screen.getByRole("button", { name: "Start timed exam" })).not.toBeNull();
    expect(screen.queryByRole("heading", { name: /Question \d+ of 53/ })).toBeNull();
    expect(localStorage.getItem(HISTORY_STORAGE_KEY)).toBeNull();
  });
});
