import Link from "next/link";
import Image from "next/image";

import badSigns from "../../../app/images/badSigns.png";
import designRequirements from "../../../app/images/designRequirements.png";
import final_mobile1 from "../../../app/images/final_mobile1.png";
import final_mobile2 from "../../../app/images/final_mobile2.png";
import final_mobile3 from "../../../app/images/final_mobile3.png";
import final_parkingsigns from "../../../app/images/final_parkingsigns.png";
import initialMobile from "../../../app/images/initial_mobile.png";
import initialParkingInfo from "../../../app/images/initial_parkingsign_info.jpg";
import initialParkingPay from "../../../app/images/initial_parkingsign_pay.jpg";
import initialParkingRed from "../../../app/images/initial_parkingsign_red.jpg";
import initialParkingGreen from "../../../app/images/initial_parkingsign_green.jpeg";
import revisionsMobile from "../../../app/images/revisions_mobile.png";
import revisionsParkingSigns from "../../../app/images/revisions_parkingsigns.png";
import storyboardsketches from "../../../app/images/storyboardsketches.png";
import userpersona1 from "../../../app/images/userpersona1.png";
import userpersona2 from "../../../app/images/userpersona2.png";
import ProjectToc from "../../../components/ProjectToc";
import TopNavigation from "../../../components/TopNavigation";
import { PROJECTS } from "../../../Constants";

export function generateStaticParams() {
  return PROJECTS.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export default function ParkSmartPage() {
  return (
    <main className="project-detail-page">
      <TopNavigation />
      <div className="project-detail-layout">
        <aside className="project-detail-sidebar">
          <div className="sidebar-inner">
            <Link
              href="/#work"
              className="back-link transition-opacity duration-[180ms] hover:opacity-60 focus-visible:opacity-60"
            >
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
          <div className="project-facts" aria-label="Project facts">
            <div>
              <span>Role</span>
              <strong>UX researcher and product designer</strong>
            </div>
            <div>
              <span>Team</span>
              <strong>4 designers and researchers</strong>
            </div>
            <div>
              <span>Contribution</span>
              <strong>Research, parking-sign design, and mobile-app ideation</strong>
            </div>
            <div>
              <span>Status</span>
              <strong>User-tested concept</strong>
            </div>
          </div>

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
              As part of an 8-week User Centered Design course at the University of Washington, our team created a user-tested concept to make Seattle street parking decisions clearer and less stressful. We did not collect quantitative outcome metrics, so the testing learnings below show how feedback shaped the final direction.
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
                <Image
                  src={badSigns}
                  alt="Examples of confusing parking signs"
                  className="chapter-image chapter-image-block"
                  sizes="(max-width: 760px) 100vw, 60vw"
                />
              </div>
            </div>
          </section>

          <section id="user-research" className="detail-chapter">
            <div className="chapter-label">User Research</div>
            <h2>People want clarity more than extra information</h2>
            <div className="chapter-subhead-wrap">
              <h3 className="chapter-subhead">USER PERSONAS</h3>
            </div>
            <div className="chapter-block-list chapter-block-list-personas">
              <p>
                  Together, these personas represent commuters, workers, and visitors who need to make fast parking decisions with limited context and incomplete curb information.
              </p>
              <Image
                src={userpersona1}
                alt="User persona 1"
                className="chapter-image chapter-image-block"
                sizes="(max-width: 760px) 100vw, 60vw"
              />
              <div className="chapter-persona-summary">
                <Image
                  src={userpersona2}
                  alt="User persona 2"
                  className="chapter-image chapter-image-block"
                  sizes="(max-width: 760px) 100vw, 60vw"
                />
              </div>
            </div>
            <p>
              We used <strong>semi-structured interviews, direct observation, and indirect observation</strong> to understand how people interpret parking rules under time pressure.
            </p>
            <ul className="chapter-bullets">
              <li>
                <strong>Stacked signage creates high cognitive load</strong>, delaying parking decisions.
              </li>
              <li>
                <strong>Dense exception text is easy to miss</strong>, especially for time-based restrictions.
              </li>
              <li>
                <strong>Unclear signs and curb boundaries create real consequences</strong>, including tickets, towing, and hesitant behaviour.
              </li>
            </ul>
            <div className="chapter-subhead-wrap">
              <h3 className="chapter-subhead">INITIAL PROTOTYPES</h3>
            </div>
            <div className="initial-prototypes-gallery">
              <div className="initial-sign-gallery">
                <Image
                  src={initialParkingInfo}
                  alt="Initial parking sign prototype with information icon"
                  className="chapter-image"
                  sizes="(max-width: 760px) 50vw, 360px"
                />
                <Image
                  src={initialParkingPay}
                  alt="Initial parking sign prototype with parking icon"
                  className="chapter-image"
                  sizes="(max-width: 760px) 50vw, 360px"
                />
                <Image
                  src={initialParkingRed}
                  alt="Initial parking sign prototype with red restriction icon"
                  className="chapter-image"
                  sizes="(max-width: 760px) 50vw, 360px"
                />
                <Image
                  src={initialParkingGreen}
                  alt="Initial parking sign prototype with green parking icon"
                  className="chapter-image"
                  sizes="(max-width: 760px) 50vw, 360px"
                />
              </div>
              <Image
                src={initialMobile}
                alt="Initial mobile parking assistant prototypes"
                className="chapter-image"
                sizes="(max-width: 760px) 100vw, 760px"
              />
            </div>
            <div className="chapter-subhead-wrap">
              <h3 className="chapter-subhead">PROPOSED CHANGES AFTER USER TESTING</h3>
            </div>
            <div className="chapter-block-list testing-learnings-gallery">
              <figure className="chapter-figure">
                <Image
                  src={revisionsParkingSigns}
                  alt="Parking sign revisions showing clearer messages and updated QR code language"
                  className="chapter-image"
                  sizes="(max-width: 760px) 100vw, 760px"
                />
                <figcaption>
                  We replaced ambiguous sign icons and generic QR-code copy with clearer parking states and regulation language.
                </figcaption>
              </figure>
              <figure className="chapter-figure">
                <Image
                  src={revisionsMobile}
                  alt="Mobile parking assistant revisions showing filters, map overlays, and live status details"
                  className="chapter-image"
                  sizes="(max-width: 760px) 100vw, 760px"
                />
                <figcaption>
                  We added parking-assistant controls, map overlays, and live status details to support faster decisions.
                </figcaption>
              </figure>
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
              <Image
                src={designRequirements}
                alt="Design requirements"
                className="chapter-image chapter-image-block"
                sizes="(max-width: 760px) 100vw, 60vw"
              />
              <p>
                These requirements informed the storyboard sketches, which translated the parking pain points into a clearer flow: identify the valid status, understand the rule at a glance, and act with confidence before leaving the car.
              </p>
              <Image
                src={storyboardsketches}
                alt="Storyboard sketches"
                className="chapter-image chapter-image-block"
                sizes="(max-width: 760px) 100vw, 60vw"
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
              <Image
                src={final_parkingsigns}
                alt="Final parking signs"
                className="chapter-image chapter-image-large"
                sizes="(max-width: 760px) 100vw, 760px"
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
              <Image
                src={final_mobile1}
                alt="Mobile map app parking assist feature"
                className="chapter-image chapter-image-large"
                sizes="(max-width: 760px) 100vw, 760px"
              />
            </div>
            <p>
            As users near their destination, Parking Assistant activates automatically if enabled.
            The map shows color-coded streets: green (free), blue (paid), yellow (restricted), red (no parking).
            On-map overlays display details like pricing, time limits, and active hours.
            </p>
            <div className="chapter-image-wrap chapter-image-wrap-large">
              <Image
                src={final_mobile2}
                alt="Mobile map app parking assist feature"
                className="chapter-image chapter-image-large"
                sizes="(max-width: 760px) 100vw, 760px"
              />
            </div>
            <p>
            The app displays whether parking is allowed, whether it’s free or paid, and details like pricing, time limits, and active hours, all updated in real time.
            Users can also start a parking timer from this page to track their parking duration.
            </p>
            <div className="chapter-image-wrap chapter-image-wrap-large">
              <Image
                src={final_mobile3}
                alt="Mobile map app parking assist feature"
                className="chapter-image chapter-image-large"
                sizes="(max-width: 760px) 100vw, 760px"
              />
            </div>
          </section>

          <section id="learnings" className="detail-chapter reflection-section">
            <div className="chapter-label">Learnings</div>
            <div className="reflection-grid">
              <div className="reflection-item">
                <h3>Trust is Critical</h3>
                <p>
                  Drivers need to trust that the information they are receiving is accurate and up-to-date. If the system is not reliable or &quot;official&quot;, drivers may ignore it or become frustrated, which can lead to non-compliance.
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
