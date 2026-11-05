import type { ReactNode } from "react";

/** Headline result, set between chapters so it lands right after the problem is framed. */
export default function ProjectImpact({ children }: { children: ReactNode }) {
  return (
    <section id="impact" className="detail-chapter" aria-label="Impact">
      <div className="chapter-label">Impact</div>
      <p className="m-0 text-heading">{children}</p>
    </section>
  );
}
