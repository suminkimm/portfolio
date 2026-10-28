import type { Metadata } from "next";
import Image from "next/image";
import PageContainer from "@/components/layout/PageContainer";
import HeroReveal from "@/components/motion/HeroReveal";
import RevealGroup from "@/components/motion/RevealGroup";
import { ABOUT_GALLERY, EXPERIENCE, type GalleryPhoto } from "@/content/about";

export const metadata: Metadata = {
  title: "About",
};

const ASPECT_CLASSES: Record<GalleryPhoto["aspect"], string> = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

function Bio() {
  return (
    <section className="max-w-column pt-12 text-body text-ink-muted lg:pt-(--rail-offset)" aria-label="Bio">
      <HeroReveal id="about" className="grid gap-4">
        <p data-hero-line className="m-0 [--line:0]">
          I&apos;m a software engineer at Microsoft working on the Azure Portal for Azure Kubernetes
          Service (AKS), shaping user experiences and guiding product decisions so they&apos;re both
          user-centered and technically sound.
        </p>
        <p data-hero-line className="m-0 [--line:1]">
          I love building things at the intersection of code and design. I&apos;m also pursuing a
          Master&apos;s degree in Human Centered Design and Engineering at the University of Washington.
        </p>
        <p data-hero-line className="m-0 [--line:2]">
          Outside of work and school, you&apos;ll usually find me creating something with my hands,
          whether that&apos;s an acrylic painting, a knitted sweater, or clay trinkets.
        </p>
      </HeroReveal>
    </section>
  );
}

function ExperienceList() {
  return (
    <section className="mt-16 max-w-column" aria-label="Experience">
      <RevealGroup as="ul" className="m-0 grid list-none gap-5 p-0 text-body">
        {EXPERIENCE.map(({ period, organization, role }) => (
          <li key={`${organization}-${role}`} className="grid grid-cols-[4rem_1fr] gap-4">
            <span className={period === "Now" ? "text-accent" : "text-ink-muted"}>
              {period}
            </span>
            <span>
              <span className="block text-ink">{organization}</span>
              <span className="block text-ink-muted">{role}</span>
            </span>
          </li>
        ))}
      </RevealGroup>
    </section>
  );
}

function PhotoGallery() {
  return (
    <section className="mt-20 max-w-content" aria-label="Photos">
      <RevealGroup className="grid grid-cols-2 items-start gap-x-3 gap-y-8 sm:grid-cols-4">
        {ABOUT_GALLERY.flatMap((group, groupIndex) =>
          group.photos.map((photo, photoIndex) => (
            <figure key={photo.src.src} className="m-0 grid gap-2">
              {/* Only the first photo in a group carries the label; the rest keep the row aligned */}
              <figcaption className="text-body text-ink-muted">
                {photoIndex === 0 ? (
                  <>
                    {String(groupIndex + 1).padStart(2, "0")}
                    <span className="mx-1.5 text-ink-faint">/</span>
                    <span className="text-ink">{group.label}</span>
                  </>
                ) : (
                  " "
                )}
              </figcaption>
              <div className={`relative overflow-hidden bg-fill ${ASPECT_CLASSES[photo.aspect]}`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 13rem"
                />
              </div>
            </figure>
          )),
        )}
      </RevealGroup>
    </section>
  );
}

export default function About() {
  return (
    <PageContainer>
      <Bio />
      <ExperienceList />
      <PhotoGallery />
    </PageContainer>
  );
}
