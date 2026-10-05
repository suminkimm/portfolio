"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const setCursorSize = (size: number, borderWidth: number) => {
      cursor.style.width = `${size}px`;
      cursor.style.height = `${size}px`;
      cursor.style.borderWidth = `${borderWidth}px`;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.18;
      currentY += (mouseY - currentY) * 0.18;
      cursor.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursor.style.opacity = "1";
    };

    const handlePointerDown = (event: PointerEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursor.style.opacity = "1";
    };

    const handlePointerLeave = () => {
      cursor.style.opacity = "0";
    };

    const onHoverStart = () => {
      setCursorSize(56, 3);
    };

    const onHoverEnd = () => {
      setCursorSize(40, 2);
    };

    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("pointerleave", handlePointerLeave);

    const interactiveTargets = document.querySelectorAll(
      "a, button, summary, article, details, .project-card, .demo-item, .main-nav a, .chapter-nav a, .back-link"
    );

    interactiveTargets.forEach((element) => {
      element.addEventListener("mouseenter", onHoverStart);
      element.addEventListener("mouseleave", onHoverEnd);
    });

    setCursorSize(40, 2);
    cursor.style.opacity = "0";
    rafRef.current = requestAnimationFrame(animate);

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
