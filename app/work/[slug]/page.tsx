import Link from "next/link";

import badSigns from "../../../app/images/badSigns.png";
import designRequirements from "../../../app/images/designRequirements.png";
import final_mobile1 from "../../../app/images/final_mobile1.png";
import final_parkingsigns from "../../../app/images/final_parkingsigns.png";
import storyboardsketches from "../../../app/images/storyboardsketches.png";
import userpersona1 from "../../../app/images/userpersona1.png";
import userpersona2 from "../../../app/images/userpersona2.png";
import ProjectToc from "../../../components/ProjectToc";
import TopNavigation from "../../../components/TopNavigation";

export default function ParkSmartPage() {
  return (
    <main className="project-detail-page">
      <TopNavigation />
      <div className="project-detail-layout">
        <aside className="project-detail-sidebar">
          <div className="sidebar-inner">
            <Link href="/#work" className="back-link">
              ← Back
            </Link>

            <div className="sidebar-label">Project</div>
            <p className="sidebar-project-name">Park Smart</p>

            <ProjectToc
              chapters={[
                { id: "overview", label: "Overview" },
                { id: "problem", label: "Problem" },
                { id: "user-research", label: "User Research" },
                { id: "design-process", label: "Design Process" },
                { id: "solution", label: "Solution" },
                { id: "learnings", label: "Learnings" },
              ]}
            />
          </div>
        </aside>

        <article className="project-detail-content" aria-labelledby="project-title">
          <div className="project-kicker">UX case study • 2025</div>
          <h1 id="project-title">Park Smart</h1>
          <p className="project-summary">
            Simplifying complex street parking signage for downtown Seattle drivers.
          </p>

          <div className="project-video-wrap">
            <iframe
              className="project-video"
              src="https://www.youtube.com/embed/MmSieQJzxGI?rel=0"
              title="Park Smart overview video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <section id="overview" className="detail-chapter">
            <div className="chapter-label">Overview</div>
            <h2>Making the valid parking status feel obvious at a glance</h2>
            <p>
              Park Smart was built to reduce the cognitive load of Seattle’s street parking experience by clarifying what the rule actually is in the moment.
            </p>
            <p>
              The project focused on making parking decisions feel confident, faster, and less stressful for drivers navigating dense downtown conditions.
            </p>
          </section>

          <section id="problem" className="detail-chapter">
            <div className="chapter-label">Problem</div>
            <h2>Parking rules are overloaded, layered, and difficult to parse</h2>
            <div className="chapter-media-row chapter-media-row-problem">
              <div className="chapter-copy">
                <p>
                  Drivers are expected to read stacked signage, interpret exceptions, and decide quickly whether the car is allowed to stay parked without knowingly violating the rule.
                </p>
                <p>
                  The challenge was to make Seattle’s confusing street parking signs easier to interpret, reducing stress and preventing parking mistakes in dense downtown areas.
                </p>
              </div>
              <div className="chapter-image-wrap">
                <img
                  src={badSigns.src}
                  alt="Examples of confusing parking signs"
                  className="chapter-image chapter-image-block"
                />
              </div>
            </div>
          </section>

          <section id="user-research" className="detail-chapter">
            <div className="chapter-label">User Research</div>
            <h2>People want clarity more than extra information</h2>
            <p>
              Our team implemented a triangulated approach in order to increase the validity and reliability of the research findings. The research methods utilized were <strong>semi-structured interview, direct observation, and indirect observation</strong>.
            </p>
            <p>
              Key Insights include:
            </p>
            <ul className="chapter-bullets">
              <li>
                <strong>Seattle’s parking signage is overly complex</strong>, forcing drivers to interpret multiple stacked rules at once, leading to high cognitive load and decision-making delays.
              </li>
              <li>
                <strong>Exception text and dense wording are frequently overlooked</strong>, causing misunderstanding of time-based and special-case restrictions.
              </li>
              <li>
                <strong>Signage confusion leads to real consequences</strong>, such as ticketing, towing, and risky or hesitant parking behavior.
              </li>
              <li>
                <strong>Lack of clear curb markings and boundaries adds confusion</strong>, making drivers unsure where parking begins or ends.
              </li>
            </ul>
            <div className="chapter-block-list chapter-block-list-personas">
              <img
                src={userpersona1.src}
                alt="User persona 1"
                className="chapter-image chapter-image-block"
              />
              <div className="chapter-persona-summary">
                <img
                  src={userpersona2.src}
                  alt="User persona 2"
                  className="chapter-image chapter-image-block"
                />
                <p>
                  Together, these personas reveal the core experience gap: drivers across different routines—commuters, workers, and visitors—need to make fast parking decisions under time pressure, with limited context and often incomplete curb information. Their frustration centers on ambiguous signage, unclear exceptions, and the inability to confidently determine the correct parking status without reading dense, stacked rules.
                </p>
              </div>
            </div>
          </section>

          <section id="design-process" className="detail-chapter">
            <div className="chapter-label">Design Process</div>
            <h2>From pain points to a calmer rule system</h2>
            <div className="chapter-block-list">
              <p>
                These insights shaped the design direction: drivers need a parking system that reduces ambiguity, helps them understand curb rules instantly, and supports both simple daily trips and complex work-related parking situations.
              </p>
              <p>
                The design requirements centered on reducing cognitive load, preserving consistency across physical and digital touchpoints, and making the valid parking state obvious at a glance without sacrificing compliance details.
              </p>
              <img
                src={designRequirements.src}
                alt="Design requirements"
                className="chapter-image chapter-image-block"
              />
              <p>
                These requirements informed the storyboard sketches, which translated the parking pain points into a clearer flow: identify the valid status, understand the rule at a glance, and act with confidence before leaving the car.
              </p>
              <img
                src={storyboardsketches.src}
                alt="Storyboard sketches"
                className="chapter-image chapter-image-block"
              />
            </div>
          </section>

          <section id="solution" className="detail-chapter">
            <div className="chapter-label">Solution</div>
            <h2>Rapid iteration toward a calmer parking experience</h2>
            <p>
              Our final prototype explored a clearer interaction model: show the active rule status at a glance, surface changes over time, and guide the driver to the correct curb decisions with minimal reading.
            </p>
            <p>
              The final concept simplified the experience into visual, time-aware clarity rather than dense text-heavy signage.
            </p>

            <div className="chapter-subhead-wrap">
              <h3 className="chapter-subhead">Mobile Map App</h3>
            </div>

            <div className="chapter-image-wrap chapter-image-wrap-large">
              <img
                src={final_mobile1.src}
                alt="Mobile map app parking assist feature"
                className="chapter-image chapter-image-large"
              />
            </div>
            <ul className="chapter-bullets">
              <li>After searching for a destination, users can choose to enable Parking Assist.</li>
              <li>
                Users can easily toggle the parking assistant and filter for free, paid, or restricted parking.
              </li>
            </ul>

            <div className="chapter-image-wrap chapter-image-wrap-large">
              <img
                src={final_parkingsigns.src}
                alt="Final parking signs"
                className="chapter-image chapter-image-large"
              />
            </div>
            <p>
              The digital parking sign dynamically displays the icon that represents the current parking regulation in effect.
            </p>
          </section>

          <section id="learnings" className="detail-chapter">
            <div className="chapter-label">Learnings</div>
            <h2>Small design changes can reshape confidence at the curb</h2>
            <p>
              The strongest lesson was that drivers do not need more instruction; they need less ambiguity.
            </p>
            <p>
              By reducing the number of decisions a driver has to make at a glance, the system created a calmer, safer, and more compliant parking experience.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
