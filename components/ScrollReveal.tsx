"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
};

export default function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
  const revealRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = revealRef.current;
    if (!element) return;

    element.classList.add("scroll-reveal-ready");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
        } else {
          element.classList.remove("is-visible");
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={revealRef} className={`scroll-reveal ${className}`.trim()}>
      {children}
    </div>
  );
}
