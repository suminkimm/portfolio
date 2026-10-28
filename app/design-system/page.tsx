import type { Metadata } from "next";
import ProjectTag from "@/components/home/ProjectTag";
import WorkCard from "@/components/home/WorkCard";
import NavLink from "@/components/layout/NavLink";
import RevealGroup from "@/components/motion/RevealGroup";
import DocumentationLink from "@/components/project/DocumentationLink";
import ProjectChapter, { ChapterSubhead } from "@/components/project/ProjectChapter";
import ProjectLayout from "@/components/project/ProjectLayout";
import { PROJECTS } from "@/content/projects";
import ClockDemo from "./_components/ClockDemo";
import ColorSwatch from "./_components/ColorSwatch";
import InertLinks from "./_components/InertLinks";
import Replay from "./_components/Replay";
import ScaleBar from "./_components/ScaleBar";
import TokenRow from "./_components/TokenRow";
import {
  COLOR_GROUPS,
  DURATIONS,
  FONT_WEIGHTS,
  RADII,
  SHADOWS,
  SPACING,
  TYPE_SCALE,
  WIDTHS,
} from "./tokens";

export const metadata: Metadata = {
  title: "Design System",
  description: "The colors, type, space, motion, and components behind this portfolio.",
};

const CHAPTERS = [
  { id: "color", label: "Color" },
  { id: "typography", label: "Typography" },
  { id: "space", label: "Space & shape" },
  { id: "motion", label: "Motion" },
  { id: "components", label: "Components" },
];

const SPECIMEN = "border border-line p-6";

export default function DesignSystem() {
  return (
    <ProjectLayout
      title="Design System"
      sidebarLabel="Su Min Kim"
      kicker="Portfolio · Tokens & components"
      summary="The colors, type, space, motion, and components behind this site. Tailwind's defaults are switched off, so these tokens are the only ones the code can use."
      chapters={CHAPTERS}
    >
      <ProjectChapter id="color" label="Color">
        {COLOR_GROUPS.map((group) => (
          <div key={group.title} className="grid gap-4">
            <ChapterSubhead>{group.title}</ChapterSubhead>
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4">
              {group.colors.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </div>
        ))}
      </ProjectChapter>

      <ProjectChapter id="typography" label="Typography">
        <ChapterSubhead>Figtree</ChapterSubhead>
        <div className="grid grid-cols-2 gap-4">
          {FONT_WEIGHTS.map(({ weight, className, usage }) => (
            <div key={weight} className={SPECIMEN}>
              <p className={`m-0 text-display ${className}`}>Aa</p>
              <p className="mt-3 mb-0 font-mono text-small">{weight}</p>
              <p className="m-0 text-small text-ink-muted">{usage}</p>
            </div>
          ))}
        </div>

        <ChapterSubhead>Scale</ChapterSubhead>
        <div>
          {TYPE_SCALE.map(({ name, className, sample, usage, spec }) => (
            <TokenRow key={name} name={name} value={spec} usage={usage}>
              <p className={`m-0 truncate ${className}`}>{sample}</p>
            </TokenRow>
          ))}
        </div>
      </ProjectChapter>

      <ProjectChapter id="space" label="Space & shape">
        <ChapterSubhead>Spacing</ChapterSubhead>
        <div>
          {SPACING.map(({ name, value, fraction, usage }) => (
            <TokenRow key={name} name={`--spacing(${name})`} value={value} usage={usage}>
              <ScaleBar fraction={fraction} />
            </TokenRow>
          ))}
        </div>

        <ChapterSubhead>Widths</ChapterSubhead>
        <div>
          {WIDTHS.map(({ name, value, fraction, usage }) => (
            <TokenRow key={name} name={name} value={value} usage={usage}>
              <ScaleBar fraction={fraction} />
            </TokenRow>
          ))}
        </div>

        <ChapterSubhead>Radius</ChapterSubhead>
        <div className="grid grid-cols-3 gap-4">
          {RADII.map(({ name, value, className, usage }) => (
            <div key={name} className="grid content-start gap-2">
              <div className={`h-24 border border-line bg-white ${className}`} />
              <span className="font-mono text-small">
                {name} · {value}
              </span>
              <span className="text-small text-ink-muted">{usage}</span>
            </div>
          ))}
        </div>

        <ChapterSubhead>Shadow</ChapterSubhead>
        <div className="grid grid-cols-2 gap-6">
          {SHADOWS.map(({ name, className, usage }) => (
            <div key={name} className="grid content-start gap-3">
              <div className="grid h-24 place-items-center bg-white shadow-media">
                {name === "shadow-glow" && <span className={`size-3 bg-accent ${className}`} />}
              </div>
              <span className="font-mono text-small">{name}</span>
              <span className="text-small text-ink-muted">{usage}</span>
            </div>
          ))}
        </div>
      </ProjectChapter>

      <ProjectChapter id="motion" label="Motion">
        <p className="m-0 text-ink-muted">
          Every transition uses ease-out-expo. Items entering together are staggered by 90ms. Everything
          becomes instant when the visitor prefers reduced motion.
        </p>
        <div>
          {DURATIONS.map(({ name, value, fraction, usage }) => (
            <TokenRow key={name} name={name} value={value} usage={usage}>
              <ScaleBar fraction={fraction} />
            </TokenRow>
          ))}
        </div>

        <ChapterSubhead>Animations</ChapterSubhead>
        <div className="grid gap-4 md:grid-cols-2">
          <div className={SPECIMEN}>
            <p className="mt-0 mb-4 font-mono text-small">hero-rise · slow</p>
            <Replay>
              <div className="hero-reveal grid gap-1">
                <span data-hero-line className="block text-display font-medium [--line:0]">
                  Su Min Kim
                </span>
                <span data-hero-line className="block text-lede text-ink-muted [--line:1]">
                  First line of the subtitle
                </span>
                <span data-hero-line className="block text-lede text-ink-muted [--line:2]">
                  Second line of the subtitle
                </span>
              </div>
            </Replay>
          </div>

          <div className={SPECIMEN}>
            <p className="mt-0 mb-4 font-mono text-small">scroll reveal · slow</p>
            <Replay>
              <RevealGroup className="grid grid-cols-3 gap-3">
                {[0, 1, 2].map((tile) => (
                  <div key={tile} className="aspect-square rounded-card bg-fill" />
                ))}
              </RevealGroup>
            </Replay>
          </div>

          <div className={SPECIMEN}>
            <p className="mt-0 mb-4 font-mono text-small">page-enter · base</p>
            <Replay>
              <div className="page-transition min-h-0!">
                <div className="h-20 bg-fill" />
              </div>
            </Replay>
          </div>

          <div className={SPECIMEN}>
            <p className="mt-0 mb-4 font-mono text-small">rolling digits · base</p>
            <ClockDemo />
          </div>
        </div>
      </ProjectChapter>

      <ProjectChapter id="components" label="Components">
        <ChapterSubhead>Project card</ChapterSubhead>
        <p className="m-0 text-ink-muted">Hover to see the scale-down and caption reveal.</p>
        <div className="max-w-column">
          <WorkCard project={PROJECTS[0]} />
        </div>

        <ChapterSubhead>Project tag</ChapterSubhead>
        <div className={`${SPECIMEN} bg-fill`}>
          <ProjectTag organization="Microsoft" year="2026" />
        </div>

        <ChapterSubhead>Side navigation</ChapterSubhead>
        <InertLinks className={SPECIMEN}>
          <span className="grid gap-1.5 pl-3">
            <NavLink href="/" isActive>
              Active
            </NavLink>
            <NavLink href="/about" isActive={false}>
              Inactive
            </NavLink>
          </span>
        </InertLinks>

        <ChapterSubhead>Table of contents</ChapterSubhead>
        <p className="m-0 text-ink-muted">
          The sidebar on this page is the live component. The current section turns green as you scroll.
        </p>

        <ChapterSubhead>Links</ChapterSubhead>
        <p className="m-0 text-ink-muted">
          Every link turns accent on hover. Keyboard focus draws a 2px accent outline, offset by 4px.
        </p>
        <InertLinks>
          <TokenRow name="text-ink" value="no underline" usage="Standalone links: email, names">
            <a href="#components" className="text-ink no-underline">
              kims622@gmail.com
            </a>
          </TokenRow>
          <TokenRow name="link-inline" value="ink-muted · line underline" usage="Links within muted text, e.g. the footer credit">
            <span className="text-small text-ink-faint">
              Coded in React ·{" "}
              <a href="#components" className="link-inline">
                Design system
              </a>
            </span>
          </TokenRow>
          <TokenRow name="DocumentationLink" value="medium · ↗" usage="External references in case studies">
            <DocumentationLink href="https://learn.microsoft.com" />
          </TokenRow>
          <TokenRow name="focus-visible" value="2px accent · 4px offset" usage="Keyboard focus on any link or button">
            <span className="outline-2 outline-offset-4 outline-accent">Focused link</span>
          </TokenRow>
        </InertLinks>

        <ChapterSubhead>Cursor</ChapterSubhead>
        <div className={`${SPECIMEN} flex items-center gap-10`}>
          <span className="flex items-center gap-3 text-small text-ink-muted">
            <span className="size-[9px] bg-accent shadow-glow" /> Default · 9px
          </span>
          <span className="flex items-center gap-3 text-small text-ink-muted">
            <span className="size-3 bg-accent shadow-glow" /> Over links · 12px
          </span>
        </div>

        <ChapterSubhead>Divider</ChapterSubhead>
        <div className="grid gap-3">
          <hr className="m-0 border-0 border-t border-line" />
          <span className="text-small text-ink-muted">1px line</span>
        </div>
      </ProjectChapter>
    </ProjectLayout>
  );
}
