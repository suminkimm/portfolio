import final_parkingsign_green from "./images/final_parkingsign_green.png";
import TopNavigation from "../components/TopNavigation";
import WorkCard from "../components/WorkCard";
import { PROJECTS, TOOLS } from "../Constants";

export default function Home() {
  return (
    <main className="page-shell home-page">
      <TopNavigation />
      <div className="page-grid">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-brand">
              <h1 id="hero-title">
                Designer &amp;
                <br />
                Engineer
              </h1>
            </div>

            <div className="hero-aside">
              <p>
                I'm Su Min, a frontend/UI engineer blending design thinking with polished craft. 
                I love building things at the intersection of code and design.
              </p>
            </div>
          </div>

          <div className="hero-wordmark-wrap" aria-label="hello wordmark">
            <div className="hero-wordmark">I BRING TASTE</div>
            <div className="hero-wordmark">TO TECHNOLOGY</div>
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
                I’m currently a frontend engineer at Microsoft pursuing a Master’s degree in Human-Centered Design & Engineering at the University of Washington. 
                I love building things at the intersection of code and design.
                I’m particularly interested in creative tools and the ways technology can support people in a quiet, seamless way.
              </p>
              <p>
                Outside of work and school, you’ll usually find me making something, 
                whether that’s a digital illustration, a knitted sweater, or clay trinkets.
              </p>
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
          <div className="footer-meta-tag">Coded in React</div>
        </footer>
      </div>
    </main>
  );
}
