import badSigns from "@/app/images/parkSmart/badSigns.png";
import designRequirements from "@/app/images/parkSmart/designRequirements.png";
import finalMobile1 from "@/app/images/parkSmart/final_mobile1.png";
import finalMobile2 from "@/app/images/parkSmart/final_mobile2.png";
import finalMobile3 from "@/app/images/parkSmart/final_mobile3.png";
import finalParkingSigns from "@/app/images/parkSmart/final_parkingsigns.png";
import initialMobile from "@/app/images/parkSmart/initial_mobile.png";
import initialParkingGreen from "@/app/images/parkSmart/initial_parkingsign_green.jpeg";
import initialParkingInfo from "@/app/images/parkSmart/initial_parkingsign_info.jpg";
import initialParkingPay from "@/app/images/parkSmart/initial_parkingsign_pay.jpg";
import initialParkingRed from "@/app/images/parkSmart/initial_parkingsign_red.jpg";
import revisionsMobile from "@/app/images/parkSmart/revisions_mobile.png";
import revisionsParkingSigns from "@/app/images/parkSmart/revisions_parkingsigns.png";
import storyboardSketches from "@/app/images/parkSmart/storyboardsketches.png";
import userPersona1 from "@/app/images/parkSmart/userpersona1.png";
import userPersona2 from "@/app/images/parkSmart/userpersona2.png";
import ProjectChapter, { ChapterSubhead } from "@/components/project/ProjectChapter";
import ProjectImage from "@/components/project/ProjectImage";
import ProjectLayout from "@/components/project/ProjectLayout";

const CHAPTERS = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "user-research", label: "User Research" },
  { id: "design-process", label: "Design Process" },
  { id: "solution", label: "Solution" },
  { id: "learnings", label: "Learnings" },
];

const FACTS = [
  { label: "Role", value: "UX researcher and product designer" },
  { label: "Team", value: "4 designers and researchers" },
  { label: "Contribution", value: "Research, parking-sign design, and mobile-app ideation" },
  { label: "Status", value: "User-tested concept" },
];

const INITIAL_SIGNS = [
  { src: initialParkingInfo, alt: "Initial parking sign prototype with information icon" },
  { src: initialParkingPay, alt: "Initial parking sign prototype with parking icon" },
  { src: initialParkingRed, alt: "Initial parking sign prototype with red restriction icon" },
  { src: initialParkingGreen, alt: "Initial parking sign prototype with green parking icon" },
];

const HALF_WIDTH_SIZES = "(max-width: 760px) 50vw, 360px";

export default function ParkSmart() {
  return (
    <ProjectLayout
      title="Park Smart"
      kicker="University of Washington • SEP 2025"
      summary="Simplifying complex street parking signage for downtown Seattle drivers."
      facts={FACTS}
      chapters={CHAPTERS}
    >
      <div className="project-video-wrap">
        <iframe
          className="project-video"
          src="https://www.youtube.com/embed/MmSieQJzxGI?rel=0"
          title="Park Smart overview video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <ProjectChapter
        id="overview"
        label="Overview"
        title="What if we could make street parking an intuitive experience?"
      >
        <p>
          As part of an 8-week User Centered Design course at the University of Washington, our team created a
          user-tested concept to make Seattle street parking decisions clearer and less stressful. We did not
          collect quantitative outcome metrics, so the testing learnings below show how feedback shaped the
          final direction.
        </p>
      </ProjectChapter>

      <ProjectChapter
        id="problem"
        label="Problem"
        title="Parking rules are overloaded, layered, and difficult to parse"
      >
        <div className="chapter-media-row">
          <div className="chapter-copy">
            <p>
              Drivers are expected to read stacked signage, interpret exceptions, and decide quickly whether the
              car is allowed to stay parked without knowingly violating the rule.
            </p>
            <p>
              The challenge was to make Seattle’s confusing street parking signs easier to interpret, reducing
              stress and preventing parking mistakes in dense downtown areas.
            </p>
            <strong>
              How might we simplify Seattle drivers’ experience of understanding street parking signs in busy
              Seattle downtown areas to reduce confusion and improve compliance?
            </strong>
          </div>
          <ProjectImage src={badSigns} alt="Examples of confusing parking signs" />
        </div>
      </ProjectChapter>

      <ProjectChapter
        id="user-research"
        label="User Research"
        title="People want clarity more than extra information"
      >
        <ChapterSubhead>User personas</ChapterSubhead>
        <div className="chapter-block-list chapter-block-list-personas">
          <p>
            Together, these personas represent commuters, workers, and visitors who need to make fast parking
            decisions with limited context and incomplete curb information.
          </p>
          <ProjectImage src={userPersona1} alt="User persona 1" />
          <ProjectImage src={userPersona2} alt="User persona 2" />
        </div>
        <p>
          We used <strong>semi-structured interviews, direct observation, and indirect observation</strong> to
          understand how people interpret parking rules under time pressure.
        </p>
        <ul className="chapter-bullets">
          <li>
            <strong>Stacked signage creates high cognitive load</strong>, delaying parking decisions.
          </li>
          <li>
            <strong>Dense exception text is easy to miss</strong>, especially for time-based restrictions.
          </li>
          <li>
            <strong>Unclear signs and curb boundaries create real consequences</strong>, including tickets,
            towing, and hesitant behaviour.
          </li>
        </ul>

        <ChapterSubhead>Initial prototypes</ChapterSubhead>
        <div className="initial-prototypes-gallery">
          <div className="initial-sign-gallery">
            {INITIAL_SIGNS.map(({ src, alt }) => (
              <ProjectImage key={alt} src={src} alt={alt} sizes={HALF_WIDTH_SIZES} />
            ))}
          </div>
          <ProjectImage src={initialMobile} alt="Initial mobile parking assistant prototypes" />
        </div>

        <ChapterSubhead>Proposed changes after user testing</ChapterSubhead>
        <div className="chapter-block-list testing-learnings-gallery">
          <figure className="chapter-figure">
            <ProjectImage
              src={revisionsParkingSigns}
              alt="Parking sign revisions showing clearer messages and updated QR code language"
            />
            <figcaption>
              We replaced ambiguous sign icons and generic QR-code copy with clearer parking states and
              regulation language.
            </figcaption>
          </figure>
          <figure className="chapter-figure">
            <ProjectImage
              src={revisionsMobile}
              alt="Mobile parking assistant revisions showing filters, map overlays, and live status details"
            />
            <figcaption>
              We added parking-assistant controls, map overlays, and live status details to support faster
              decisions.
            </figcaption>
          </figure>
        </div>
      </ProjectChapter>

      <ProjectChapter id="design-process" label="Design Process" title="From pain points to a calmer rule system">
        <div className="chapter-block-list">
          <p>
            These insights shaped the design direction: drivers need a parking system that reduces ambiguity,
            helps them understand curb rules instantly, and supports both simple daily trips and complex
            work-related parking situations.
          </p>
          <p>
            The design requirements centered on reducing cognitive load, preserving consistency across physical
            and digital touchpoints, and making the valid parking state obvious at a glance without sacrificing
            compliance details.
          </p>
          <ProjectImage src={designRequirements} alt="Design requirements" />
          <p>
            These requirements informed the storyboard sketches, which translated the parking pain points into a
            clearer flow: identify the valid status, understand the rule at a glance, and act with confidence
            before leaving the car.
          </p>
          <ProjectImage src={storyboardSketches} alt="Storyboard sketches" />
        </div>
      </ProjectChapter>

      <ProjectChapter id="solution" label="Solution" title="Clearer signage accompanied by a mobile app">
        <p>
          Our final prototype explored a clearer interaction model: show the active rule status at a glance,
          surface changes over time, and guide the driver to the correct curb decisions with minimal reading.
        </p>

        <ChapterSubhead>Physical Signage</ChapterSubhead>
        <p>
          The digital parking sign dynamically displays the icon that represents the current parking regulation
          in effect using a digital screen. A QR code on the sign allows drivers to access a mobile app that
          provides additional information about the parking rules and restrictions.
        </p>
        <ProjectImage src={finalParkingSigns} alt="Final parking signs" />

        <ChapterSubhead>Mobile Map App</ChapterSubhead>
        <p>
          After searching for a destination, users can choose to enable Parking Assist. Users can easily toggle
          the parking assistant and filter for free, paid, or restricted parking.
        </p>
        <ProjectImage src={finalMobile1} alt="Mobile map app parking assist feature" />
        <p>
          As users near their destination, Parking Assistant activates automatically if enabled. The map shows
          color-coded streets: green (free), blue (paid), yellow (restricted), red (no parking). On-map overlays
          display details like pricing, time limits, and active hours.
        </p>
        <ProjectImage src={finalMobile2} alt="Mobile map app parking assist feature" />
        <p>
          The app displays whether parking is allowed, whether it’s free or paid, and details like pricing, time
          limits, and active hours, all updated in real time. Users can also start a parking timer from this
          page to track their parking duration.
        </p>
        <ProjectImage src={finalMobile3} alt="Mobile map app parking assist feature" />
      </ProjectChapter>

      <ProjectChapter id="learnings" label="Learnings">
        <div className="reflection-grid">
          <div className="reflection-item">
            <h3>Trust is Critical</h3>
            <p>
              Drivers need to trust that the information they are receiving is accurate and up-to-date. If the
              system is not reliable or &quot;official&quot;, drivers may ignore it or become frustrated, which
              can lead to non-compliance.
            </p>
          </div>
          <div className="reflection-item">
            <h3>Systems are Intertwined</h3>
            <p>
              A successful solution must fit into the broader parking experience, including availability and
              payment, while also accounting for city policies and incentives. These constraints highlighted the
              importance of designing not only for user needs, but also for the feasibility of real-world
              adoption.
            </p>
          </div>
        </div>
      </ProjectChapter>
    </ProjectLayout>
  );
}
