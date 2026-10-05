"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const mouseX = { current: 0 };
    const mouseY = { current: 0 };

    const setCursorSize = (size: number, borderWidth: number) => {
      cursor.style.width = `${size}px`;
      cursor.style.height = `${size}px`;
      cursor.style.borderWidth = `${borderWidth}px`;
    };

    const updateCursor = () => {
      cursor.style.transform = `translate3d(${mouseX.current}px, ${mouseY.current}px, 0) translate(-50%, -50%)`;
      rafRef.current = null;
    };

    const handlePointerMove = (event: PointerEvent) => {
      mouseX.current = event.clientX;
      mouseY.current = event.clientY;
      cursor.style.opacity = "1";

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(updateCursor);
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      mouseX.current = event.clientX;
      mouseY.current = event.clientY;
      cursor.style.opacity = "1";
    };

    const handlePointerLeave = () => {
      cursor.style.opacity = "0";
    };

    const onHoverStart = () => {
      setCursorSize(44, 2);
    };

    const onHoverEnd = () => {
      setCursorSize(40, 2);
    };

    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("pointerleave", handlePointerLeave);

    const interactiveTargets = document.querySelectorAll(
      "a, button, summary, .project-card, .demo-item, .main-nav a, .chapter-nav a, .back-link"
    );

    interactiveTargets.forEach((element) => {
      element.addEventListener("mouseenter", onHoverStart);
      element.addEventListener("mouseleave", onHoverEnd);
    });

    setCursorSize(40, 2);
    cursor.style.opacity = "0";

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("pointerleave", handlePointerLeave);
      interactiveTargets.forEach((element) => {
        element.removeEventListener("mouseenter", onHoverStart);
        element.removeEventListener("mouseleave", onHoverEnd);
      });

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return <div className="custom-cursor" ref={cursorRef} aria-hidden="true" />;
}
