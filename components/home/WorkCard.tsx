import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import CardGlowBorder from "./CardGlowBorder";
import ProjectTag from "./ProjectTag";

type WorkCardProps = {
  project: Project;
  /** Load the image eagerly; use for cards visible on first paint */
  isAboveFold?: boolean;
};

export default function WorkCard({ project, isAboveFold = false }: WorkCardProps) {
  const { slug, name, organization, year, summary, cover } = project;

  return (
    <Link
      href={`/work/${slug}`}
      className="group mb-4 flex min-w-0 break-inside-avoid flex-col gap-3 text-inherit no-underline"
      aria-label={`Open case study for ${name}`}
    >
      <div className="relative w-full transition-transform duration-(--duration-base) ease-out-expo group-hover:scale-[1.02] group-focus-visible:scale-[1.02]">
        <CardGlowBorder />

        {/* Inset 1px and opaque, so the border layer behind it only shows as a 1px edge */}
        <div className="relative m-px overflow-hidden rounded-[calc(var(--radius-card)-1px)] bg-white">
          <Image
            src={cover}
            alt={name}
            loading={isAboveFold ? "eager" : "lazy"}
            className="block h-auto w-full bg-fill"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          <div className="absolute bottom-3 left-3">
            <ProjectTag organization={organization} year={year} />
          </div>
        </div>
      </div>

      <p className="m-0 truncate px-3 text-body text-ink-muted transition-all duration-(--duration-base) ease-out-expo md:-translate-y-1 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
        {summary}
      </p>
    </Link>
  );
}
