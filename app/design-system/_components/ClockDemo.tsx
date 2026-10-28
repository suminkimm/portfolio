"use client";

import { useState } from "react";
import RollingTime from "@/components/motion/RollingTime";

const formatter = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone: "UTC" });
// 9:58 AM, so two clicks show both a single-digit roll and a wrap-around (9 → 0)
const START = Date.UTC(2026, 0, 1, 9, 58);

export default function ClockDemo() {
  const [minutes, setMinutes] = useState(0);
  const time = formatter.format(new Date(START + minutes * 60_000));

  return (
    <div className="grid gap-3">
      <span className="flex text-heading leading-[1.25em] font-medium text-ink">
        <RollingTime time={time} />
      </span>
      <button
        type="button"
        onClick={() => setMinutes((value) => value + 1)}
        className="w-fit text-small text-ink-muted"
      >
        + 1 minute
      </button>
    </div>
  );
}
