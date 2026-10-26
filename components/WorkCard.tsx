import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

type WorkCardProps = {
  name: string;
  type: string;
  year: string;
  summary: string;
  slug: string;
  imageSrc?: StaticImageData;
  isFeatured?: boolean;
};

export default function WorkCard({
  name,
  type,
  year,
  summary,
  slug,
  imageSrc,
  isFeatured,
}: WorkCardProps) {
  return (
    <div className="mb-5 min-w-0 break-inside-avoid">
      <Link
        href={`/work/${slug}`}
        className="block text-inherit no-underline"
        aria-label={`Open case study for ${name}`}
      >
        <article
          className="group relative flex w-full flex-col overflow-hidden border border-[var(--line)] bg-white/[0.12] shadow-[0_8px_24px_transparent] transition-transform duration-[180ms] ease-in-out hover:-translate-y-1 hover:shadow-[0_18px_40px_var(--shadow)] focus-visible:-translate-y-1 focus-visible:shadow-[0_18px_40px_var(--shadow)]"
          tabIndex={0}
        >
        <div className="relative w-full bg-[linear-gradient(135deg,rgba(255,255,255,0.32),rgba(255,255,255,0.08))]" aria-label={name}>
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={name}
              className="block h-auto w-full"
              loading={isFeatured ? "eager" : "lazy"}
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          ) : (
            <div className="flex aspect-[4/3] items-end bg-[radial-gradient(circle_at_68%_30%,rgba(67,245,199,0.65),transparent_28%),linear-gradient(135deg,#102b3c,#10141e_58%,#07090e)] p-5">
              <span className="max-w-[14rem] text-[clamp(1.35rem,2.4vw,2.5rem)] font-bold leading-[0.95] tracking-[-0.06em] text-white">
                Application
                <br />
                Insights
                <br />
                for AKS
              </span>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 flex items-end bg-black/75 p-5 opacity-0 transition-opacity duration-[180ms] group-hover:opacity-100 group-focus-visible:opacity-100">
            <p className="m-0 max-w-[32rem] text-[clamp(1rem,1.4vw,1.35rem)] leading-[1.25] tracking-[-0.03em] text-white">
              {summary}
            </p>
          </div>
        </div>

        <div className="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-1 px-[18px] pt-[18px] pb-4">
          <h3 className="m-0 min-w-0 [overflow-wrap:anywhere] break-words text-[1.25rem] font-bold leading-[1.2] tracking-[-0.03em] text-white">
            {name}
          </h3>
          <div className="flex shrink-0 items-center gap-3 text-[1.25rem] font-normal leading-[1.2] tracking-[-0.03em] text-white/[0.76]">
            <span aria-hidden="true">/</span>
            <span>{type} {year}</span>
          </div>
        </div>
        </article>
      </Link>
    </div>
  );
}
