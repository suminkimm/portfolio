import final_parkingsign_green from "./images/final_parkingsign_green.png";
import TopNavigation from "../components/TopNavigation";
import WorkCard from "../components/WorkCard";
import { PROJECTS } from "../Constants";

export default function Home() {
  return (
    <main className="relative z-[1] isolate min-h-screen cursor-none pb-7">
      <TopNavigation />
      <div className="relative w-full px-4 sm:px-[2vw] lg:px-8">
        <section
          className="relative flex min-h-[calc(min(94vw,1120px)+clamp(3rem,8vw,8rem)-4rem)] flex-col gap-[clamp(48px,12vw,72px)] pt-[42px] max-[640px]:min-h-[calc(94vw+4rem)] max-[640px]:gap-[clamp(48px,12vw,72px)] max-[640px]:pt-8"
          aria-labelledby="hero-title"
        >
          <div className="z-[1] grid max-w-[28rem] gap-2 text-left">
            <h2 className="m-0 text-left text-[clamp(1.35rem,2.2vw,2.5rem)] font-bold leading-[1] tracking-[-0.06em] text-white">
              human-centered engineer
            </h2>
            <p className="m-0 text-left text-[clamp(0.9rem,1.1vw,1.2rem)] leading-[1.3] tracking-[-0.03em] text-white">
              i love building human-centered products
              <br />
              that people genuinely want to use.
            </p>
            <p className="absolute top-[42px] right-0 m-0 max-w-[24rem] text-right text-[clamp(0.9rem,1.1vw,1.2rem)] leading-[1.3] tracking-[-0.03em] text-white/90 max-[640px]:top-8">
              Currently at Microsoft building robust user experiences for the Azure Portal.
              Also pursuing a MS in Human Centered Design Engineering at the University of Washington.
            </p>
          </div>
        </section>

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
                slug={project.slug}
                imageSrc={final_parkingsign_green}
                isFeatured
              />
            ))}
          </div>
        </section>

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
                I’m currently a frontend engineer at Microsoft working on the Azure Portal for Azure Kubernetes Services (AKS). 
                I’m also pursuing a Master’s degree in Human Centered Design and Engineering at the University of Washington. 
              </p>
              <p className="m-0 text-[clamp(1.35rem,2vw,2.6rem)] leading-[1.3] tracking-[-0.05em] text-white/88">
                I love building things at the intersection of code and design.
                I’m particularly interested in creative tools and the ways technology can support people in a seamless way.
              </p>
              <p className="m-0 text-[clamp(1.35rem,2vw,2.6rem)] leading-[1.3] tracking-[-0.05em] text-white/88">
                Outside of work and school, you’ll usually find me creating something with my hands, 
                whether that’s a digital illustration, a knitted sweater, or clay trinkets.
              </p>
            </div>
          </div>
        </section>

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
      </div>
    </main>
  );
}
