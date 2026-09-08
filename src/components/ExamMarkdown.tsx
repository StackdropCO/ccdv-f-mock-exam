import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./ExamMarkdown.module.css";

const components: Components = {
  pre: ({ children }) => <div className={styles.codeBlockWrap}><pre>{children}</pre></div>,
  table: ({ children }) => <div className={styles.tableWrap}><table>{children}</table></div>,
};

export function ExamMarkdown({ children }: { children: string }) {
  return (
    <div className={styles.root}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {children}
      </ReactMarkdown>
    </div>
  );
}
