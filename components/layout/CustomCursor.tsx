"use client";

import { useEffect, useRef } from "react";

const SIZE_PX = 9;
const INTERACTIVE_SIZE_PX = 12;

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const pointer = { x: 0, y: 0 };
    let frame: number | null = null;

    const render = () => {
      cursor.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0) translate(-50%, -50%)`;
      frame = null;
    };

    // Checked on every move rather than bound to elements once, so it keeps working
    // on content rendered after navigation
    const updateHoverState = (target: EventTarget | null) => {
      const element = target instanceof Element ? target : null;
      const isOverVideo = Boolean(element?.closest(".project-video-wrap"));
      const isOverInteractive = Boolean(element?.closest("a, button, summary"));
      const size = isOverInteractive ? INTERACTIVE_SIZE_PX : SIZE_PX;

      cursor.style.opacity = isOverVideo ? "0" : "1";
      cursor.style.width = `${size}px`;
      cursor.style.height = `${size}px`;
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      updateHoverState(event.target);
      frame ??= requestAnimationFrame(render);
    };

    const handlePointerLeave = () => {
      cursor.style.opacity = "0";
    };

    document.addEventListener("pointermove", handlePointerMove);
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="custom-cursor" ref={cursorRef} aria-hidden="true" />;
}
