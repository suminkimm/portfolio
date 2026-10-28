import Link from "next/link";
import type { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import ProjectToc, { type Chapter } from "./ProjectToc";

export type ProjectFact = {
  label: string;
  value: ReactNode;
};

type ProjectLayoutProps = {
  title: string;
  /** Label above the title in the sidebar */
  sidebarLabel?: string;
  /** Small uppercase line above the title, e.g. organization and product */
  kicker: string;
  summary: string;
  facts?: ProjectFact[];
  chapters: Chapter[];
  children: ReactNode;
};

/** Case-study page shell: sticky sidebar with table of contents, the title, summary, and facts, and the site footer. */
export default function ProjectLayout({
  title,
  sidebarLabel = "Project",
  kicker,
  summary,
  facts,
  chapters,
  children,
}: ProjectLayoutProps) {
  return (
    <main className="project-detail-page px-page">
      <div className="project-detail-layout">
        <aside className="project-detail-sidebar">
          <div className="sidebar-inner">
            <Link href="/" className="back-link hover:opacity-60 focus-visible:opacity-60">
              ← Back
            </Link>
            <div className="sidebar-label">{sidebarLabel}</div>
            <p className="sidebar-project-name">{title}</p>
            <ProjectToc chapters={chapters} />
          </div>
        </aside>

        <article className="project-detail-content" aria-labelledby="project-title">
          <div className="project-kicker">{kicker}</div>
          <h1 id="project-title" className="project-title">
            {title}
          </h1>
          <p className="project-summary">{summary}</p>
          {facts && (
            <dl className="project-facts" aria-label="Project facts">
              {facts.map(({ label, value }) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          )}
          {children}
        </article>
      </div>

      <div className="mx-auto max-w-page">
        <Footer />
      </div>
    </main>
  );
}
