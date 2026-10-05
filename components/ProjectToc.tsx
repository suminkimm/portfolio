"use client";

import { useEffect, useState } from "react";

type Chapter = {
  id: string;
  label: string;
};

export default function ProjectToc({ chapters }: { chapters: Chapter[] }) {
  const [activeChapterId, setActiveChapterId] = useState(chapters[0]?.id ?? "");

  useEffect(() => {
    const updateActiveSection = () => {
      const hashId = window.location.hash.replace("#", "");
      if (hashId) {
        setActiveChapterId(hashId);
        return;
      }

      let nearestId = chapters[0]?.id ?? "";

      for (const chapter of chapters) {
        const element = document.getElementById(chapter.id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 180) {
          nearestId = chapter.id;
        }
      }

      setActiveChapterId(nearestId);
    };

    updateActiveSection();
    window.addEventListener("hashchange", updateActiveSection);
    window.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener("hashchange", updateActiveSection);
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, [chapters]);

  return (
    <nav className="chapter-nav" aria-label="Table of contents">
      {chapters.map((chapter) => (
        <a
          key={chapter.id}
          href={`#${chapter.id}`}
          className={activeChapterId === chapter.id ? "is-active" : ""}
          onClick={() => setActiveChapterId(chapter.id)}
        >
          {chapter.label}
        </a>
      ))}
    </nav>
  );
}
