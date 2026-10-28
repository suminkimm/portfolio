"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  // Keying by pathname remounts the shell on navigation, replaying the enter animation
  return (
    <div key={usePathname()} className="page-transition">
      {children}
    </div>
  );
}
