import final_parkingsign_green from "./images/final_parkingsign_green.png";
import TopNavigation from "../components/TopNavigation";
import WorkCard from "../components/WorkCard";
import { PROJECTS, TOOLS } from "../Constants";

export default function Home() {
  return (
    <main className="relative z-[1] isolate min-h-screen cursor-none pb-7">
      <TopNavigation />
      <div className="relative w-full px-4 sm:px-[2vw] lg:px-8">
        <section
          className="flex min-h-[76vh] flex-col gap-[clamp(48px,12vw,72px)] pt-[42px] max-[640px]:min-h-0 max-[640px]:gap-[clamp(48px,12vw,72px)] max-[640px]:pt-8"
          aria-labelledby="hero-title"
        >
          <div className="grid w-full grid-cols-[minmax(220px,1.1fr)_minmax(260px,1.3fr)] items-start gap-[clamp(18px,2vw,34px)] max-[980px]:grid-cols-1 max-[980px]:gap-7">
            <div className="relative z-[1]">
              <h1
                id="hero-title"
                className="m-0 pt-[0.1em] text-left text-[clamp(3.2rem,3.8vw,6rem)] font-bold leading-[0.74] tracking-[-0.09em] text-white max-[640px]:text-[clamp(3rem,15vw,4.5rem)] max-[640px]:leading-[0.86]"
              >
                Designer &amp;
                <br />
                Engineer
              </h1>
            </div>

            <div className="relative z-[1] flex w-full justify-end max-[980px]:justify-start">
              <p className="m-0 w-full max-w-[420px] text-right text-[clamp(1.1rem,1.4vw,2.3rem)] leading-[1.24] tracking-[-0.05em] text-white/[0.92] max-[980px]:text-left max-[640px]:leading-[1.3]">
                I&apos;m Su Min, a frontend/UI engineer blending design thinking with polished craft.
                I love building things at the intersection of code and design.
              </p>
            </div>
          </div>

          <div
            className="relative mt-[clamp(64px,8vw,120px)] flex w-full flex-col items-start gap-[50px] overflow-visible pt-[clamp(28px,4vw,64px)] pb-[0.22em] max-[640px]:mt-8 max-[640px]:gap-6 max-[640px]:pt-6 max-[640px]:pb-0"
            aria-label="hello wordmark"
          >
            <div className="m-0 block scale-y-[1.04] whitespace-normal text-left text-[clamp(6rem,10vw,16rem)] font-black leading-[0.7] tracking-[-0.06em] text-white/96 max-[640px]:whitespace-nowrap max-[640px]:text-[clamp(2.5rem,11vw,6rem)] max-[640px]:leading-[0.9] max-[640px]:tracking-[-0.07em]">
              I BRING
            </div>
            <div className="m-0 block scale-y-[1.04] whitespace-normal text-left text-[clamp(6rem,10vw,16rem)] font-black leading-[0.7] tracking-[-0.06em] text-white/96 max-[640px]:whitespace-nowrap max-[640px]:text-[clamp(2.5rem,11vw,6rem)] max-[640px]:leading-[0.9] max-[640px]:tracking-[-0.07em]">
              TASTE TO TECH
            </div>
          </div>
        </section>

        <section
          id="work"
          className="pt-[clamp(128px,12vw,180px)] max-[640px]:pt-[clamp(88px,18vw,128px)]"
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
                I’m currently a frontend engineer at Microsoft pursuing a Master’s degree in Human-Centered Design & Engineering at the University of Washington. 
                I love building things at the intersection of code and design.
                I’m particularly interested in creative tools and the ways technology can support people in a quiet, seamless way.
              </p>
              <p className="m-0 text-[clamp(1.35rem,2vw,2.6rem)] leading-[1.3] tracking-[-0.05em] text-white/88">
                Outside of work and school, you’ll usually find me making something, 
                whether that’s a digital illustration, a knitted sweater, or clay trinkets.
              </p>
            </div>
          </div>
        </section>

        <section
          className="pt-[clamp(128px,12vw,180px)] max-[640px]:pt-[clamp(88px,18vw,128px)]"
          aria-labelledby="tools-heading"
        >
          <div
            className="mb-[18px] text-[var(--type-caption)] font-bold uppercase tracking-[var(--tracking-wide)] text-white/80"
            id="tools-heading"
          >
            Tools &amp; strengths
          </div>

          <ul className="m-0 flex list-none flex-wrap gap-3 p-0" aria-label="Tools list">
            {TOOLS.map((tool) => (
              <li
                className="rounded-full border border-white/[0.24] bg-white/[0.08] px-3.5 py-2.5 text-[0.72rem] uppercase tracking-[0.12em] text-white"
                key={tool}
              >
                {tool}
              </li>
            ))}
          </ul>
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
