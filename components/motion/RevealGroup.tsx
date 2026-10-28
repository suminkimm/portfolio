"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Delay between items that enter the viewport together
const STAGGER_MS = 90;

type RevealGroupProps = {
  /** Element to render, so lists can keep their semantics */
  as?: "div" | "ul";
  children: ReactNode;
  className?: string;
};

/**
 * Fades its direct children in as they scroll into view. Children arriving together are staggered
 * in document order. Styles live under `[data-reveal-group]` in globals.css.
 */
export default function RevealGroup({ as: Tag = "div", children, className }: RevealGroupProps) {
  const groupRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;

    const items = Array.from(group.children) as HTMLElement[];
    const reveal = (item: HTMLElement) => item.classList.add("is-revealed");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target as HTMLElement)
          .sort((a, b) => items.indexOf(a) - items.indexOf(b))
          .forEach((item, index) => {
            item.style.setProperty("--reveal-delay", `${index * STAGGER_MS}ms`);
            reveal(item);
            observer.unobserve(item);
          });
      },
      { threshold: 0.1 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={(node: HTMLElement | null) => {
        groupRef.current = node;
      }}
      className={className}
      data-reveal-group
    >
      {children}
    </Tag>
  );
}
