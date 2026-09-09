/**
 * Reduces a question's Markdown stem to a short, plain-text preview for compact review rows.
 * Strips fenced code, inline code backticks, table pipes, blockquote markers, and emphasis
 * markers rather than rendering raw Markdown syntax into the preview; never mutates the
 * stored question content.
 */
export function stripMarkdownPreview(markdown: string, maxLength = 140): string {
  const text = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/^>\s?/gm, "")
    .replace(/^\|?[\s-:|]+\|$/gm, " ")
    .replace(/\|/g, " ")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/#+\s*/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (text.length <= maxLength) return text;
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  const cut = lastSpace > 40 ? lastSpace : maxLength;
  return `${truncated.slice(0, cut).trimEnd()}…`;
}
