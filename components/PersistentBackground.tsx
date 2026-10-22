"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

import moonForeground from "../app/images/moon - Edited.png";
import GradientBackground from "./GradientBackground";
import Starfield from "./Starfield";

export default function PersistentBackground() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div
      className={`persistent-background ${isHome ? "is-visible" : "is-hidden"}`}
      aria-hidden="true"
    >
      <Starfield />
      <GradientBackground />
      <div className="moon-clip">
        <Image
          src={moonForeground}
          alt=""
          className="moon-foreground"
          aria-hidden="true"
          loading="eager"
          sizes="min(94vw, 1120px)"
        />
      </div>
      <div className="gradient-intro">
        <div className="gradient-intro-title">hi, i&apos;m su min!</div>
        <div className="gradient-intro-subtitle">let&apos;s build something new.</div>
      </div>
    </div>
  );
}
