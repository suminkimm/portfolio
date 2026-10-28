import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
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
      <div className="relative w-full overflow-hidden rounded-card bg-fill transition-transform duration-(--duration-base) ease-out-expo group-hover:scale-[0.99] group-focus-visible:scale-[0.99]">
        <Image
          src={cover}
          alt={name}
          loading={isAboveFold ? "eager" : "lazy"}
          className="block h-auto w-full"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-card border border-line"
        />

        <div className="absolute bottom-3 left-3">
          <ProjectTag organization={organization} year={year} />
        </div>
      </div>

      <p className="m-0 truncate px-3 text-body text-ink-muted transition-all duration-(--duration-base) ease-out-expo md:-translate-y-1 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
        {summary}
      </p>
    </Link>
  );
}
