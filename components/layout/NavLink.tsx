import Link from "next/link";
import type { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  isActive: boolean;
  children: ReactNode;
};

/** Side navigation item: muted when inactive, accent with a leading dot when active. */
export default function NavLink({ href, isActive, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`relative no-underline ${isActive ? "text-accent" : "text-ink-muted"}`}
    >
      {isActive && (
        <span
          aria-hidden="true"
          className="absolute top-1/2 -left-3 size-1 -translate-y-1/2 rounded-full bg-current"
        />
      )}
      {children}
    </Link>
  );
}
