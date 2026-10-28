"use client";

import { useEffect, useState, type ReactNode } from "react";

// Module state survives client-side navigation, so each intro plays once per visit, not on every return
const playedIntros = new Set<string>();

type HeroRevealProps = {
  /** Identifies this intro so each page's plays once per visit */
  id: string;
  children: ReactNode;
  className?: string;
};

/** Animates descendants marked `data-hero-line` (staggered by their `--line` index) on the first visit. */
export default function HeroReveal({ id, children, className }: HeroRevealProps) {
  const [shouldAnimate] = useState(() => !playedIntros.has(id));

  useEffect(() => {
    playedIntros.add(id);
  }, [id]);

  const classes = [shouldAnimate && "hero-reveal", className].filter(Boolean).join(" ");
  return <div className={classes || undefined}>{children}</div>;
}
