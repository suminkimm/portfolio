"use client";

import type { MouseEvent, ReactNode } from "react";

/** Renders real link components as specimens: hover and focus still work, but clicks don't navigate. */
export default function InertLinks({ children, className }: { children: ReactNode; className?: string }) {
  const preventNavigation = (event: MouseEvent) => {
    if ((event.target as Element).closest("a")) event.preventDefault();
  };

  return (
    <div className={className} onClickCapture={preventNavigation}>
      {children}
    </div>
  );
}
