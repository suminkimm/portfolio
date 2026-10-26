import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import CustomCursor from "../components/CustomCursor";
import PageTransition from "../components/PageTransition";
import PersistentBackground from "../components/PersistentBackground";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
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
      className={`${instrumentSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PersistentBackground />
        <CustomCursor />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
