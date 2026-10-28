"use client";

import { useEffect, useState } from "react";

export type Chapter = {
  id: string;
  label: string;
};

// A chapter becomes active once its top scrolls above this offset from the viewport top
const ACTIVE_OFFSET_PX = 180;

function findActiveChapterId(chapters: Chapter[]) {
  const isAtDocumentEnd =
    window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
  if (isAtDocumentEnd) return chapters.at(-1)?.id;

  let activeId = chapters[0]?.id;
  for (const chapter of chapters) {
    const top = document.getElementById(chapter.id)?.getBoundingClientRect().top;
    if (top !== undefined && top <= ACTIVE_OFFSET_PX) activeId = chapter.id;
  }
  return activeId;
}

export default function ProjectToc({ chapters }: { chapters: Chapter[] }) {
  const [activeChapterId, setActiveChapterId] = useState<string | undefined>(chapters[0]?.id);

  useEffect(() => {
    const update = () => setActiveChapterId(findActiveChapterId(chapters));

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("hashchange", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("hashchange", update);
    };
  }, [chapters]);

  return (
    <nav className="grid gap-2.5 border-t border-line pt-3" aria-label="Table of contents">
      {chapters.map(({ id, label }) => {
        const isActive = id === activeChapterId;
        return (
          <a
            key={id}
            href={`#${id}`}
            aria-current={isActive ? "location" : undefined}
            className={`text-small no-underline ${
              isActive ? "font-medium text-accent" : "text-ink-muted"
            }`}
            onClick={() => setActiveChapterId(id)}
          >
            {label}
          </a>
        );
      })}
    </nav>
  );
}
