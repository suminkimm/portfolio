"use client";

import { usePathname } from "next/navigation";

import GradientBackground from "./GradientBackground";

export default function PersistentBackground() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div
      className={`persistent-background ${isHome ? "is-visible" : "is-hidden"}`}
      aria-hidden="true"
    >
      <GradientBackground />
    </div>
  );
}
