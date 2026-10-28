"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import RollingTime from "@/components/motion/RollingTime";
import { SITE } from "@/content/site";

const CLOCK_REFRESH_MS = 30_000;

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
  timeZone: SITE.timeZone,
});

function useLocalTime() {
  // Empty on the server so the clock never causes a hydration mismatch
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => setTime(timeFormatter.format(new Date()));
    update();
    const interval = window.setInterval(update, CLOCK_REFRESH_MS);
    return () => window.clearInterval(interval);
  }, []);

  return time;
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export default function Footer() {
  const time = useLocalTime();

  return (
    <footer id="contact" className="mt-[clamp(72px,8vw,120px)] border-t border-line pt-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-[1fr_auto]">
        <div className="grid content-start gap-1">
          <Link
            href="/"
            className="text-heading font-medium text-ink no-underline"
          >
            {SITE.name}
          </Link>
          <p className="m-0 flex items-center gap-2 text-body leading-[1.25em] text-ink-muted">
            <span className="flex">{time ? <RollingTime time={time} /> : " "}</span>
            <span>{SITE.location}</span>
          </p>
        </div>

        <div className="grid content-start gap-1 text-body sm:justify-items-end sm:text-right">
          <span className="text-ink-muted">Let&apos;s chat!</span>
          <a href={`mailto:${SITE.email}`} className="text-ink no-underline">
            {SITE.email}
          </a>
          <div className="mt-3 flex items-center gap-4">
            <a
              href={SITE.linkedInUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-ink-faint"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>

      <p className="mt-16 mb-2 text-center text-small text-ink-faint">
        Coded in React ·{" "}
        <Link href="/design-system" className="link-inline">
          Design system
        </Link>
      </p>
    </footer>
  );
}
