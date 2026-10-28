"use client";

import { useState, type ReactNode } from "react";

/** Remounts its children on demand so an entrance animation can be watched again. */
export default function Replay({ children }: { children: ReactNode }) {
  const [runId, setRunId] = useState(0);

  return (
    <div className="grid gap-3">
      <div key={runId}>{children}</div>
      <button
        type="button"
        onClick={() => setRunId((id) => id + 1)}
        className="w-fit text-small text-ink-muted"
      >
        ↻ Replay
      </button>
    </div>
  );
}
