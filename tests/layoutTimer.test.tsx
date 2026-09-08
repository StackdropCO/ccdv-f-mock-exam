import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Layout } from "../src/components/Layout";

afterEach(() => cleanup());

describe("Layout - timer visibility per mode", () => {
  it("shows a countdown timer when a Timed attempt is unfinished", () => {
    render(
      <Layout modeLabel="Timed Exam" timerStartTimestamp={Date.now()} theme="light" onToggleTheme={() => {}}>
        <div />
      </Layout>
    );
    expect(screen.getByText(/remaining/i)).not.toBeNull();
  });

  it("renders no timer at all for an Untimed attempt", () => {
    render(
      <Layout modeLabel="Untimed Practice" timerStartTimestamp={undefined} theme="light" onToggleTheme={() => {}}>
        <div />
      </Layout>
    );
    expect(screen.queryByText(/remaining/i)).toBeNull();
  });

  it("renders no timer before any attempt has started", () => {
    render(
      <Layout theme="light" onToggleTheme={() => {}}>
        <div />
      </Layout>
    );
    expect(screen.queryByText(/remaining/i)).toBeNull();
  });
});
