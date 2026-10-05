"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const previousPath = useRef(pathname);
  const [phase, setPhase] = useState<"idle" | "exiting" | "entering">("idle");

  useEffect(() => {
    if (previousPath.current === pathname) {
      return;
    }

    previousPath.current = pathname;
    setPhase("exiting");

    const exitTimer = window.setTimeout(() => {
      setPhase("entering");
    }, 220);

    const settleTimer = window.setTimeout(() => {
      setPhase("idle");
    }, 980);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(settleTimer);
    };
  }, [pathname]);

  return (
    <div className={`page-transition-shell ${phase}`}>
      <div className="page-transition-orange" aria-hidden="true" />
      <div className="page-transition-content">{children}</div>
    </div>
  );
}
