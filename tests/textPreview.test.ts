import { describe, expect, it } from "vitest";
import { stripMarkdownPreview } from "../src/lib/textPreview";

describe("stripMarkdownPreview", () => {
  it("drops fenced code blocks entirely rather than leaking raw syntax", () => {
    const md = "Claude responds with:\n\n```json\n{\"a\": 1}\n```\n\nWhat should happen next?";
    const preview = stripMarkdownPreview(md);
    expect(preview).not.toContain("```");
    expect(preview).not.toContain("{\"a\": 1}");
    expect(preview).toContain("Claude responds with");
    expect(preview).toContain("What should happen next?");
  });

  it("unwraps inline code without leaving backticks", () => {
    const preview = stripMarkdownPreview("Call `get_order_status` and return its result.");
    expect(preview).not.toContain("`");
    expect(preview).toContain("get_order_status");
  });

  it("strips table syntax rather than rendering raw pipes", () => {
    const md = "Compare tiers:\n\n| Model | Accuracy |\n|---|---|\n| Haiku | 96% |\n\nWhich is best?";
    const preview = stripMarkdownPreview(md);
    expect(preview).not.toContain("|");
    expect(preview).not.toContain("---");
  });

  it("strips bold/italic emphasis markers and blockquote markers", () => {
    const preview = stripMarkdownPreview("A **user-created client tool**.\n\n> hidden instruction text");
    expect(preview).not.toContain("**");
    expect(preview).not.toMatch(/^>/m);
    expect(preview).toContain("user-created client tool");
  });

  it("truncates long stems at a word boundary with an ellipsis, never mid-content silently", () => {
    const long = "word ".repeat(60).trim();
    const preview = stripMarkdownPreview(long, 50);
    expect(preview.length).toBeLessThanOrEqual(51);
    expect(preview.endsWith("…")).toBe(true);
  });

  it("leaves a short plain stem unchanged", () => {
    expect(stripMarkdownPreview("A short question stem.")).toBe("A short question stem.");
  });
});
