import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

type WorkCardProps = {
  name: string;
  type: string;
  year: string;
  slug: string;
  imageSrc?: string | StaticImageData;
  isFeatured?: boolean;
};

export default function WorkCard({
  name,
  type,
  year,
  slug,
  imageSrc,
  isFeatured,
}: WorkCardProps) {
  return (
    <Link
      href={`/work/${slug}`}
      className={`col-span-12 min-w-0 block w-full text-inherit no-underline max-[640px]:col-span-1 ${
        isFeatured ? "mx-auto max-w-[760px]" : ""
      }`}
      aria-label={`Open case study for ${name}`}
    >
      <article
        className={`relative flex h-full min-h-[280px] w-full flex-col overflow-hidden border border-[var(--line)] bg-white/[0.12] shadow-[0_8px_24px_transparent] transition-transform duration-[180ms] ease-in-out hover:-translate-y-1 hover:shadow-[0_18px_40px_var(--shadow)] focus-visible:-translate-y-1 focus-visible:shadow-[0_18px_40px_var(--shadow)] ${
          isFeatured ? "min-h-[420px]" : ""
        }`}
        tabIndex={0}
      >
        <div
          className={`relative flex min-h-[280px] flex-1 items-start justify-between bg-[linear-gradient(135deg,rgba(255,255,255,0.32),rgba(255,255,255,0.08))] p-4 ${
            isFeatured ? "min-h-[320px]" : ""
          }`}
          aria-label={name}
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={name}
              className="absolute inset-0 h-full w-full object-cover"
              loading={isFeatured ? "eager" : "lazy"}
              sizes="(max-width: 760px) 100vw, 50vw"
            />
          ) : null}
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
  );
}
