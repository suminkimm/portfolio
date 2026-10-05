import final_parkingsign_green from "./images/final_parkingsign_green.png";
import GradientBackground from "../components/GradientBackground";
import TopNavigation from "../components/TopNavigation";
import WorkCard from "../components/WorkCard";
import { PROJECTS, TOOLS } from "../Constants";

export default function Home() {
  return (
    <main className="page-shell">
      <GradientBackground />
      <TopNavigation />
      <div className="page-grid">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="hero-stack">
              <h1 id="hero-title">I&apos;m Su Min,</h1>
              <p className="hero-subtitle">a design-driven developer</p>
              <p className="hero-note">
                I&apos;m a product-minded frontend engineer who blends design
                thinking with polished implementation to solve hard problems.
              </p>
            </div>
          </div>
        </section>

        <section id="work" className="work-section" aria-labelledby="work-heading">
          <div className="section-label" id="work-heading">
            Selected work
          </div>

          <div className="project-grid">
            {PROJECTS.filter((project) => project.slug === "park-smart").map((project) => (
              <WorkCard
                key={project.name}
                name={project.name}
                type={project.type}
                year={project.year}
                accent={project.accent}
                slug={project.slug}
                imageSrc={final_parkingsign_green.src}
                isFeatured
              />
            ))}
          </div>
        </section>

        <section id="about" className="about-section" aria-labelledby="about-heading">
          <div className="section-label" id="about-heading">
            About
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I design interfaces that make complexity feel effortless. My work
                sits at the intersection of strategy, product thinking, and
                precise front-end craft, helping teams ship experiences that are
                still elegant under pressure.
              </p>
              <p>
                I care about clarity, motion, accessibility, and the small
                decisions that make a product feel premium—without compromising
                speed or functionality.
              </p>
            </div>

            <div className="about-metrics" aria-label="Career metrics">
              <div>
                <strong>8+</strong>
                <span>Years building digital products</span>
              </div>
              <div>
                <strong>24</strong>
                <span>Product and design launches</span>
              </div>
              <div>
                <strong>3</strong>
                <span>Design systems scaled across teams</span>
              </div>
            </div>
          </div>
        </section>

        <section className="tools-section" aria-labelledby="tools-heading">
          <div className="section-label" id="tools-heading">
            Tools &amp; strengths
          </div>

          <ul className="tools-strip" aria-label="Tools list">
            {TOOLS.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </section>

        <footer className="site-footer" id="contact">
          <div className="footer-links">
            <a href="mailto:kims622@gmail.com">kims622@gmail.com</a>
            <a
              href="https://www.linkedin.com/in/su-min-kim/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
