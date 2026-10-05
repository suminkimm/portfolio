import Link from "next/link";

type WorkCardProps = {
  name: string;
  type: string;
  year: string;
  accent: "pink" | "blue" | "gold" | "mint";
  slug: string;
  imageSrc?: string;
  isFeatured?: boolean;
};

export default function WorkCard({
  name,
  type,
  year,
  accent,
  slug,
  imageSrc,
  isFeatured,
}: WorkCardProps) {
  return (
    <Link
      href={`/work/${slug}`}
      className={`project-card-link ${isFeatured ? "project-card-link-featured" : ""}`}
      aria-label={`Open case study for ${name}`}
    >
      <article
        className={`project-card project-${accent} ${isFeatured ? "project-card-featured" : ""}`}
        tabIndex={0}
      >
        <div className="project-visual" aria-label={name}>
          {imageSrc ? <img src={imageSrc} alt={name} className="project-card-image" /> : null}
          <span className="visual-badge">{type}</span>
        </div>

        <div className="project-copy">
          <h3>{name}</h3>
          <div className="project-meta">
            <span>{type}</span>
            <span>{year}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
