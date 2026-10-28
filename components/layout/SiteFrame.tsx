"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { hasOwnSidebar } from "@/content/site";
import PageTransition from "./PageTransition";
import SideNavigation from "./SideNavigation";

export default function SiteFrame({ children }: { children: ReactNode }) {
  const showSideNavigation = !hasOwnSidebar(usePathname());

  return (
    <>
      {showSideNavigation && <SideNavigation />}
      <div className={showSideNavigation ? "lg:pl-[var(--rail-width)]" : undefined}>
        <PageTransition>{children}</PageTransition>
      </div>
    </>
  );
}
