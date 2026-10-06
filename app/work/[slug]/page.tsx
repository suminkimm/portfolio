import Link from "next/link";

import badSigns from "../../../app/images/badSigns.png";
import designRequirements from "../../../app/images/designRequirements.png";
import final_mobile1 from "../../../app/images/final_mobile1.png";
import final_mobile2 from "../../../app/images/final_mobile2.png";
import final_mobile3 from "../../../app/images/final_mobile3.png";
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
          <div className="project-kicker">University of Washington • SEP 2025</div>
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
            <h2>What if we could make street parking an intuitive experience?</h2>
            <p>
              As part of the 8 week course in User Centered Design at the University of Washington, our team sought to create a solution that would simplify the street parking experience in Seattle. 
            </p>
            <p>
              Park Smart was built to reduce the cognitive load of Seattle’s street parking experience by clarifying what the rule actually is in the moment.
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
                <b>How might we simplify Seattle drivers’ experience of understanding street parking signs in busy Seattle downtown areas to reduce confusion and improve compliance?</b>
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
            <div className="chapter-subhead-wrap">
              <h3 className="chapter-subhead">USER PERSONAS</h3>
            </div>
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
            <h2>Clearer signage accompanied by a mobile app </h2>
            <p>
              Our final prototype explored a clearer interaction model: show the active rule status at a glance, surface changes over time, and guide the driver to the correct curb decisions with minimal reading.
            </p>
            <div className="chapter-subhead-wrap">
              <h3 className="chapter-subhead">Physical Signage</h3>
            </div>
            <p>
              The digital parking sign dynamically displays the icon that represents the current parking regulation in effect using a digital screen.
              A QR code on the sign allows drivers to access a mobile app that provides additional information about the parking rules and restrictions.
            </p>
            <div className="chapter-image-wrap chapter-image-wrap-large">
              <img
                src={final_parkingsigns.src}
                alt="Final parking signs"
                className="chapter-image chapter-image-large"
              />
            </div>
            <div className="chapter-subhead-wrap">
              <h3 className="chapter-subhead">Mobile Map App</h3>
            </div>
            <p>
              After searching for a destination, users can choose to enable Parking Assist.
              Users can easily toggle the parking assistant and filter for free, paid, or restricted parking.
            </p>
            <div className="chapter-image-wrap chapter-image-wrap-large">
              <img
                src={final_mobile1.src}
                alt="Mobile map app parking assist feature"
                className="chapter-image chapter-image-large"
              />
            </div>
            <p>
            As users near their destination, Parking Assistant activates automatically if enabled.
            The map shows color-coded streets: green (free), blue (paid), yellow (restricted), red (no parking).
            On-map overlays display details like pricing, time limits, and active hours.
            </p>
            <div className="chapter-image-wrap chapter-image-wrap-large">
              <img
                src={final_mobile2.src}
                alt="Mobile map app parking assist feature"
                className="chapter-image chapter-image-large"
              />
            </div>
            <p>
            The app displays whether parking is allowed, whether it’s free or paid, and details like pricing, time limits, and active hours, all updated in real time.
            Users can also start a parking timer from this page to track their parking duration.
            </p>
            <div className="chapter-image-wrap chapter-image-wrap-large">
              <img
                src={final_mobile3.src}
                alt="Mobile map app parking assist feature"
                className="chapter-image chapter-image-large"
              />
            </div>
          </section>

          <section id="learnings" className="detail-chapter reflection-section">
            <div className="chapter-label">Learnings</div>
            <div className="reflection-grid">
              <div className="reflection-item">
                <h3>Trust is Critical</h3>
                <p>
                  Drivers need to trust that the information they are receiving is accurate and up-to-date. If the system is not reliable or "official", drivers may ignore it or become frustrated, which can lead to non-compliance.
                </p>
              </div>

              <div className="reflection-item">
                <h3>Systems are Intertwined</h3>
                <p>
                  A successful solution must fit into the broader parking experience, including availability and payment, while also accounting for city policies and incentives. These constraints highlighted the importance of designing not only for user needs, but also for the feasibility of real-world adoption.
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
