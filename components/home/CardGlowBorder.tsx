"use client";

import { useEffect, useRef } from "react";

/**
 * The card's 1px border, drawn as a layer behind the card that shows around its 1px inset. On hover a
 * soft green glow inside this layer drifts toward the cursor, so only the edge nearest the mouse
 * lights up. Styles live under `.card-glow-border` in globals.css. Place it before the card's
 * content, inside the element that grows on hover.
 */
export default function CardGlowBorder() {
  const borderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const border = borderRef.current;
    const card = border?.parentElement;
    if (!border || !card) return;

    // Offset of the cursor from the card's center; the glow is translated by this much
    const handlePointerMove = (event: PointerEvent) => {
      const rect = card.getBoundingClientRect();
      border.style.setProperty("--glow-x", `${event.clientX - (rect.left + rect.width / 2)}px`);
      border.style.setProperty("--glow-y", `${event.clientY - (rect.top + rect.height / 2)}px`);
    };

    card.addEventListener("pointermove", handlePointerMove);
    return () => card.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div ref={borderRef} aria-hidden="true" className="card-glow-border">
      <div className="card-glow-border__glow" />
    </div>
  );
}
