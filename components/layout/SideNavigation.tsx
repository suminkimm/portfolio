"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, SITE, type NavItemId } from "@/content/site";
import NavLink from "./NavLink";

export default function SideNavigation() {
  const activeId: NavItemId = usePathname().startsWith("/about") ? "about" : "work";

  return (
    <header
      className="px-page relative z-20 flex items-center justify-between pt-4 lg:fixed lg:inset-y-0 lg:left-0 lg:w-[var(--rail-width)] lg:flex-col lg:items-start lg:justify-start lg:pt-8"
      aria-label="Main navigation"
    >
      <Link href="/" className="text-body text-ink-muted no-underline">
        {SITE.name}
      </Link>

      <nav
        className="flex gap-5 text-body lg:mt-(--rail-offset) lg:flex-col lg:gap-1.5"
        aria-label="Primary navigation"
      >
        {NAV_ITEMS.map(({ id, label, href }) => (
          <NavLink key={id} href={href} isActive={id === activeId}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
