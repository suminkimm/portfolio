"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNavigation() {
  const pathname = usePathname();
  const isWorkActive = pathname === "/" || pathname.startsWith("/work");

  return (
    <header className="topbar" aria-label="Main navigation">
      <div className="brand" aria-label="Su Min Kim">
        <Link href="/">SU MIN KIM</Link>
      </div>

      <nav className="main-nav" aria-label="Primary navigation">
        <Link href="/#work" className={isWorkActive ? "active" : ""}>
          Work
        </Link>
        <Link href="/#about" className={pathname === "/#about" ? "active" : ""}>
          About
        </Link>
      </nav>
    </header>
  );
}
