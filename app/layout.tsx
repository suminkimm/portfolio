import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import CustomCursor from "@/components/layout/CustomCursor";
import SiteFrame from "@/components/layout/SiteFrame";
import { SITE } from "@/content/site";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${figtree.variable} antialiased`}>
      <body>
        <CustomCursor />
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
