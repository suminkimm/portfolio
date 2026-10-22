import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import CustomCursor from "../components/CustomCursor";
import PageTransition from "../components/PageTransition";
import PersistentBackground from "../components/PersistentBackground";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Su Min Kim | Frontend Engineer",
  description:
    "Portfolio for Su Min Kim, a frontend engineer blending design systems thinking with polished product craft.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PersistentBackground />
        <CustomCursor />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
