"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);
  const [phase, setPhase] = useState<"idle" | "exiting" | "entering">("idle");

  useEffect(() => {
    const isFirstRender = previousPath.current === null;
    const previousPage = previousPath.current;

    previousPath.current = pathname;

    if (isFirstRender) {
      setPhase("idle");
      return;
    }

    const wasHome = previousPage === "/";

    if (wasHome) {
      setPhase("exiting");

      const settleTimer = window.setTimeout(() => {
        setPhase("idle");
      }, 260);

      return () => window.clearTimeout(settleTimer);
    }

    setPhase("entering");

    const settleTimer = window.setTimeout(() => {
      setPhase("idle");
    }, 220);

    return () => window.clearTimeout(settleTimer);
  }, [pathname]);

  return <div className={`page-transition-shell ${phase}`}>{children}</div>;
}
