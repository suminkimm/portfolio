import type { ReactNode } from "react";

type TokenRowProps = {
  name: string;
  value?: string;
  usage: string;
  /** The rendered specimen */
  children: ReactNode;
};

/** One row of a token table: name and value, live specimen, then usage. */
export default function TokenRow({ name, value, usage, children }: TokenRowProps) {
  return (
    <div className="grid items-center gap-x-6 gap-y-2 border-t border-line py-4 sm:grid-cols-[10rem_minmax(0,1fr)_12rem]">
      <div className="grid gap-1">
        <span className="font-mono text-small">{name}</span>
        {value && <span className="font-mono text-small text-ink-faint">{value}</span>}
      </div>
      <div className="min-w-0">{children}</div>
      <span className="text-small text-ink-muted">{usage}</span>
    </div>
  );
}
