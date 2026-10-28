import type { ReactNode } from "react";

type ProjectChapterProps = {
  /** Anchor id; must match an entry in the page's table of contents */
  id: string;
  label: string;
  title?: string;
  children: ReactNode;
};

export default function ProjectChapter({ id, label, title, children }: ProjectChapterProps) {
  return (
    <section id={id} className="detail-chapter">
      <div className="chapter-label">{label}</div>
      {title && <h2 className="chapter-title">{title}</h2>}
      {children}
    </section>
  );
}

export function ChapterSubhead({ children }: { children: ReactNode }) {
  return <h3 className="chapter-subhead">{children}</h3>;
}
