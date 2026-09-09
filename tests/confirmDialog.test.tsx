import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ConfirmDialog } from "../src/components/ConfirmDialog";

afterEach(() => cleanup());

// Mirrors the real "Exit Exam" dialog in App.tsx.
const exitExam = {
  title: "Exit exam?",
  message: "Your current answers and progress will be lost.",
  confirmLabel: "Exit and Start Over",
  cancelLabel: "Continue Exam",
};

// Mirrors the real "Take another mock" dialog in ResultsScreen.tsx (default cancel label).
const retake = {
  title: "Take another mock?",
  message: "This will clear your answers, flags, and score.",
  confirmLabel: "Take another mock",
};

describe("ConfirmDialog - destructive dialogs open on the safe action", () => {
  it("focuses the cancel action when destructive, so a stray Enter cannot exit the exam", () => {
    render(<ConfirmDialog {...exitExam} destructive onConfirm={() => {}} onCancel={() => {}} />);
    expect(document.activeElement).toBe(screen.getByRole("button", { name: "Continue Exam" }));
  });

  it("focuses the cancel action for the retake dialog, which uses the default cancel label", () => {
    render(<ConfirmDialog {...retake} destructive onConfirm={() => {}} onCancel={() => {}} />);
    expect(document.activeElement).toBe(screen.getByRole("button", { name: "Cancel" }));
  });

  it("activating whatever is initially focused cancels rather than performing the destructive action", () => {
    const onConfirm = vi.fn();
    const onCancel = vi.fn();
    render(<ConfirmDialog {...exitExam} destructive onConfirm={onConfirm} onCancel={onCancel} />);
    // Enter on a focused button activates that button; assert which one that is.
    fireEvent.click(document.activeElement as HTMLElement);
    expect(onConfirm).not.toHaveBeenCalled();
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it("still opens on the confirm action when the dialog is not destructive", () => {
    render(
      <ConfirmDialog
        title="Submit exam?"
        message="You can review your answers afterwards."
        confirmLabel="Submit exam"
        onConfirm={() => {}}
        onCancel={() => {}}
      />
    );
    expect(document.activeElement).toBe(screen.getByRole("button", { name: "Submit exam" }));
  });
});

describe("ConfirmDialog - behaviour preserved alongside the focus change", () => {
  it("keeps alertdialog semantics and a labelled title", () => {
    render(<ConfirmDialog {...exitExam} destructive onConfirm={() => {}} onCancel={() => {}} />);
    const dialog = screen.getByRole("alertdialog");
    expect(dialog.getAttribute("aria-modal")).toBe("true");
    expect(dialog.getAttribute("aria-labelledby")).toBe("confirm-dialog-title");
    expect(screen.getByRole("heading", { name: "Exit exam?" })).not.toBeNull();
  });

  it("keeps cancel before confirm in the DOM order", () => {
    render(<ConfirmDialog {...exitExam} destructive onConfirm={() => {}} onCancel={() => {}} />);
    const labels = screen.getAllByRole("button").map((b) => b.textContent);
    expect(labels).toEqual(["Continue Exam", "Exit and Start Over"]);
  });

  it("cancels on Escape", () => {
    const onConfirm = vi.fn();
    const onCancel = vi.fn();
    render(<ConfirmDialog {...exitExam} destructive onConfirm={onConfirm} onCancel={onCancel} />);
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onCancel).toHaveBeenCalledTimes(1);
    expect(onConfirm).not.toHaveBeenCalled();
  });

  it("cancels on a click outside the dialog but not on a click inside it", () => {
    const onCancel = vi.fn();
    const { container } = render(
      <ConfirmDialog {...exitExam} destructive onConfirm={() => {}} onCancel={onCancel} />
    );
    fireEvent.click(screen.getByRole("alertdialog"));
    expect(onCancel).not.toHaveBeenCalled();
    fireEvent.click(container.firstChild as HTMLElement);
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it("confirms when the destructive action is chosen deliberately", () => {
    const onConfirm = vi.fn();
    render(<ConfirmDialog {...exitExam} destructive onConfirm={onConfirm} onCancel={() => {}} />);
    fireEvent.click(screen.getByRole("button", { name: "Exit and Start Over" }));
    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  it("keeps Tab trapped inside the dialog in both directions", () => {
    // The trap filters candidates by offsetParent, which jsdom always reports as null
    // because it performs no layout. Stub it for this test so the trap's real
    // first/last wrap logic is exercised rather than skipped.
    const original = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "offsetParent");
    Object.defineProperty(HTMLElement.prototype, "offsetParent", {
      configurable: true,
      get(this: HTMLElement) {
        return this.parentElement;
      },
    });
    try {
      render(<ConfirmDialog {...exitExam} destructive onConfirm={() => {}} onCancel={() => {}} />);
      const cancel = screen.getByRole("button", { name: "Continue Exam" });
      const confirm = screen.getByRole("button", { name: "Exit and Start Over" });

      confirm.focus();
      fireEvent.keyDown(document, { key: "Tab" });
      expect(document.activeElement).toBe(cancel);

      fireEvent.keyDown(document, { key: "Tab", shiftKey: true });
      expect(document.activeElement).toBe(confirm);
    } finally {
      if (original) Object.defineProperty(HTMLElement.prototype, "offsetParent", original);
      else delete (HTMLElement.prototype as unknown as Record<string, unknown>).offsetParent;
    }
  });
});
