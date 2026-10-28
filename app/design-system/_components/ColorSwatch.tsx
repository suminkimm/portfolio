"use client";

import { useEffect, useRef, useState } from "react";
import type { ColorToken } from "../tokens";

const formatHex = (r: number, g: number, b: number, alpha: number) => {
  const hex = `#${[r, g, b].map((channel) => Math.round(channel).toString(16).padStart(2, "0")).join("")}`;
  return alpha < 1 ? `${hex.toUpperCase()} · ${Math.round(alpha * 100)}%` : hex.toUpperCase();
};

/** Resolves a computed CSS color to "#RRGGBB", plus an opacity suffix when translucent. */
function toHex(cssColor: string) {
  // Computed rgb()/rgba() values are exact; parse them directly
  const rgb = cssColor.match(/^rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)$/);
  if (rgb) return formatHex(Number(rgb[1]), Number(rgb[2]), Number(rgb[3]), Number(rgb[4] ?? 1));

  // Other color spaces (e.g. oklab): let the canvas convert them
  const context = document.createElement("canvas").getContext("2d");
  if (!context) return cssColor;
  context.fillStyle = cssColor;
  context.fillRect(0, 0, 1, 1);
  const [r, g, b, a] = context.getImageData(0, 0, 1, 1).data;
  return formatHex(r, g, b, a / 255);
}

export default function ColorSwatch({ name, className, usage }: ColorToken) {
  const chipRef = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState("");

  // Read the color back from the rendered chip so the label can never drift from the token
  useEffect(() => {
    if (chipRef.current) setValue(toHex(getComputedStyle(chipRef.current).backgroundColor));
  }, []);

  return (
    <div className="grid content-start gap-2">
      <div ref={chipRef} className={`h-16 border border-line ${className}`} />
      <div className="grid gap-1">
        <span className="text-small font-medium">{name}</span>
        <span className="text-small text-ink-muted">{usage}</span>
        <span className="font-mono text-small text-ink-faint">{value || " "}</span>
      </div>
    </div>
  );
}
