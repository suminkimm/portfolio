import type { ReactNode } from "react";
import Footer from "./Footer";

/** Shared shell for top-level pages: horizontal gutter, bottom spacing, and the site footer. */
export default function PageContainer({ children }: { children: ReactNode }) {
  return (
    <main className="px-page min-h-screen pb-7">
      {children}
      <Footer />
    </main>
  );
}
