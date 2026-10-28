import WorkCard from "@/components/home/WorkCard";
import PageContainer from "@/components/layout/PageContainer";
import HeroReveal from "@/components/motion/HeroReveal";
import RevealGroup from "@/components/motion/RevealGroup";
import { PROJECTS } from "@/content/projects";
import { SITE } from "@/content/site";

// Cards in the first row of the two-column grid are visible without scrolling
const ABOVE_FOLD_CARD_COUNT = 2;

export default function Home() {
  return (
    <PageContainer>
      <section className="pt-[clamp(72px,10vw,140px)] pb-10" aria-labelledby="hero-title">
        <HeroReveal id="home">
          <div className="grid max-w-content gap-2">
            <h1
              id="hero-title"
              className="m-0 text-display font-medium text-ink"
            >
              <span data-hero-line className="block [--line:0]">
                {SITE.name}
              </span>
            </h1>
            <p className="m-0 text-lede text-ink-muted">
              <span data-hero-line className="block [--line:1]">
                Building thoughtful digital experiences at the intersection of engineering and design.
              </span>
              <span data-hero-line className="block [--line:2]">
                Currently a software engineer at <span className="text-ink">Microsoft</span>, and
                pursuing an MS in HCDE at the{" "}
                <span className="text-ink">University of Washington</span>.
              </span>
            </p>
          </div>
        </HeroReveal>
      </section>

      <RevealGroup className="columns-1 gap-6 md:columns-2">
        {PROJECTS.map((project, index) => (
          <WorkCard key={project.slug} project={project} isAboveFold={index < ABOVE_FOLD_CARD_COUNT} />
        ))}
      </RevealGroup>
    </PageContainer>
  );
}
