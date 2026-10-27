import TopNavigation from "../components/TopNavigation";
import WorkCard from "../components/WorkCard";
import ScrollReveal from "../components/ScrollReveal";
import { PROJECTS } from "../Constants";

export default function Home() {
  return (
    <main className="relative z-[1] isolate min-h-screen cursor-none pb-7">
      <TopNavigation />
      <div className="relative w-full px-4 sm:px-[2vw] lg:px-8">
<section
  className="relative flex min-h-screen flex-col justify-center gap-6 py-24 pb-36 sm:py-24 lg:pb-24"
  aria-labelledby="hero-title"
>
  <div className="z-[1] grid w-full max-w-[58rem] gap-5 text-left md:w-[50vw]">
    <h1
      id="hero-title"
      className="m-0 w-full text-[clamp(2.75rem,6vw,7.5rem)] font-bold leading-[0.95] tracking-[-0.07em] text-white"
    >
      Su Min Kim builds thoughtful digital experiences.
    </h1>
    <p className="m-0 w-full text-[clamp(1.05rem,1.5vw,1.6rem)] leading-[1.3] tracking-[-0.035em] text-white/90">
      I&apos;m a software engineer at Microsoft exploring the intersection of engineering,
      interaction design, and human-centered technology. I&apos;m also currently pursuing an MS in
      Human Centered Design Engineering at the University of Washington.
    </p>
  </div>
</section>

        <ScrollReveal>
          <section
            id="work"
            className="pt-[clamp(180px,12vw,220px)] max-[640px]:pt-[clamp(64px,12vw,96px)]"
            aria-labelledby="work-heading"
          >
            <div
              className="mb-[18px] text-[var(--type-caption)] font-bold uppercase tracking-[var(--tracking-wide)] text-white/80"
              id="work-heading"
            >
              Selected work
            </div>

            <div className="columns-1 gap-5 sm:columns-2">
              {PROJECTS.map((project) => (
                <WorkCard
                  key={project.name}
                  name={project.name}
                  type={project.type}
                  year={project.year}
                  summary={project.summary}
                  slug={project.slug}
                  imageSrc={project.imgSrc}
                  isFeatured
                />
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section
            id="about"
            className="pt-[clamp(128px,12vw,180px)] max-[640px]:pt-[clamp(88px,18vw,128px)]"
            aria-labelledby="about-heading"
          >
            <div
              className="mb-[18px] text-[var(--type-caption)] font-bold uppercase tracking-[var(--tracking-wide)] text-white/80"
              id="about-heading"
            >
              About
            </div>

            <div className="grid grid-cols-[minmax(0,1.5fr)_minmax(260px,0.7fr)] items-start gap-8 max-[980px]:grid-cols-1">
              <div className="grid gap-[22px]">
                <p className="m-0 text-[clamp(1.35rem,2vw,2.6rem)] leading-[1.3] tracking-[-0.05em] text-white/88">
                  I’m currently a software engineer at Microsoft working on the Azure Portal for Azure Kubernetes Services (AKS).
                  I shape user experiences and guide product decisions to ensure they’re both user-centered and technically sound.
                </p>
                <p className="m-0 text-[clamp(1.35rem,2vw,2.6rem)] leading-[1.3] tracking-[-0.05em] text-white/88">
                  I love building things at the intersection of code and design.
                  I’m also pursuing a Master’s degree in Human Centered Design and Engineering at the University of Washington.
                </p>
                <p className="m-0 text-[clamp(1.35rem,2vw,2.6rem)] leading-[1.3] tracking-[-0.05em] text-white/88">
                  Outside of work and school, you’ll usually find me creating something with my hands,
                  whether that’s an acrylic painting, a knitted sweater, or clay trinkets.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <footer
            className="mt-[clamp(72px,8vw,120px)] grid grid-cols-[1fr_auto] items-center gap-[18px] border-t border-white/40 pt-[34px] pb-2 max-[640px]:mt-16 max-[640px]:grid-cols-1"
            id="contact"
          >
            <div className="flex items-center gap-[18px] text-[var(--type-caption)] uppercase tracking-[var(--tracking-wide)] text-white">
              <a href="mailto:kims622@gmail.com" className="no-underline">
                kims622@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/su-min-kim/"
                target="_blank"
                rel="noreferrer"
                className="no-underline"
              >
                LinkedIn
              </a>
            </div>
            <div className="text-right text-[var(--type-caption)] uppercase tracking-[var(--tracking-wide)] text-white max-[640px]:text-left">
              Coded in React
            </div>
          </footer>
        </ScrollReveal>
      </div>
    </main>
  );
}
