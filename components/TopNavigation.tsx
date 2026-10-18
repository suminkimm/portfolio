"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNavigation() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isWorkActive = pathname === "/" || pathname.startsWith("/work");

  return (
    <header
      className={`relative z-20 grid min-h-14 w-full grid-cols-[1fr_auto] items-center bg-transparent px-4 pt-3 pb-4 text-[var(--ink)] sm:px-[2vw] lg:px-8 max-[640px]:grid-cols-1 max-[640px]:gap-2.5 ${
        isHomePage ? "text-white" : ""
      }`}
      aria-label="Main navigation"
    >
      <div
        className="text-[clamp(1.1rem,1.5vw,2rem)] font-bold uppercase tracking-[-0.08em]"
        aria-label="Su Min Kim"
      >
        <Link
          href="/"
          className="no-underline transition-all duration-[180ms] hover:font-bold hover:opacity-100 focus-visible:font-bold focus-visible:opacity-100"
        >
          SU MIN KIM
        </Link>
      </div>

      <nav
        className="flex items-center justify-end gap-[clamp(1rem,2vw,2rem)] text-[var(--type-caption)] uppercase tracking-[var(--tracking-wide)] max-[640px]:justify-start max-[640px]:tracking-[0.1em]"
        aria-label="Primary navigation"
      >
        <Link
          href="/#work"
          className={`relative no-underline opacity-[0.72] transition-all duration-[180ms] hover:font-bold hover:opacity-100 focus-visible:font-bold focus-visible:opacity-100 ${
            isWorkActive ? "font-bold opacity-100" : ""
          }`}
        >
          Work
        </Link>
        <Link
          href="/#about"
          className={`relative no-underline opacity-[0.72] transition-all duration-[180ms] hover:font-bold hover:opacity-100 focus-visible:font-bold focus-visible:opacity-100 ${
            pathname === "/#about" ? "font-bold opacity-100" : ""
          }`}
        >
          About
        </Link>
      </nav>
    </header>
  );
}
