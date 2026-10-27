import Link from "next/link";
import Image from "next/image";

import appinsights_deployments from "../../../images/appInsights/appinsights_deployments.png";
import appinsights_dashboard from "../../../images/appInsights/appinsights_dashboard.png";
import appinsights_namespace from "../../../images/appInsights/appinsights_namespace.png";
import appinsights_pods from "../../../images/appInsights/appinsights_pods.png";
import ProjectToc from "../../../../components/ProjectToc";
import TopNavigation from "../../../../components/TopNavigation";
import { APPLICATION_INSIGHTS_DOCUMENTATION_URL } from "../../../../Constants";

export default function ApplicationInsightsPage() {
  return (
    <main className="project-detail-page">
      <TopNavigation />
      <div className="project-detail-layout">
        <aside className="project-detail-sidebar">
          <div className="sidebar-inner">
            <Link href="/#work" className="back-link transition-opacity duration-[180ms] hover:opacity-60 focus-visible:opacity-60">← Back</Link>
            <div className="sidebar-label">Project</div>
            <p className="sidebar-project-name">Application Insights for AKS</p>
            <ProjectToc chapters={[
              { id: "overview", label: "Overview" },
              { id: "problem", label: "Problem" },
              { id: "solution", label: "Solution" },
              { id: "engineering", label: "Engineering complexity" },
              { id: "outcome", label: "Outcome" },
            ]} />
          </div>
        </aside>

        <article className="project-detail-content" aria-labelledby="project-title">
          <div className="project-kicker">Microsoft • Azure Kubernetes Service</div>
          <h1 id="project-title">Application Insights for AKS</h1>
          <p className="project-summary">Bringing application-level telemetry into the Kubernetes troubleshooting workflow.</p>
          <div className="project-facts" aria-label="Project facts">
            <div><span>Role</span><strong>Software engineer</strong></div>
            <div><span>Product</span><strong>Azure Kubernetes Service</strong></div>
            <div>
              <span>Responsibilities</span>
              <strong>UX engineering, technical design, Portal architecture, accessibility, testing, launch readiness</strong>
            </div>
            <div>
              <span>Documentation</span>
              <a href={APPLICATION_INSIGHTS_DOCUMENTATION_URL} target="_blank" rel="noreferrer" className="font-bold text-white/90 no-underline">Microsoft Learn ↗</a>
            </div>
          </div>
          <Image src={appinsights_deployments} alt="Application Insights deployments" className="chapter-image chapter-image-block" sizes="(max-width: 760px) 100vw, 60vw" />

          <section id="overview" className="detail-chapter">
            <div className="chapter-label">Overview</div>
            <h2>Application telemetry belongs in the Kubernetes context</h2>
            <p>I led the Azure Portal integration that surfaced Application Insights directly for AKS deployments, pods, and namespaces. The experience exposed latency, request volume, and failure signals while offering entry points to the full Application Insights experience.</p>
          </section>
          <section id="problem" className="detail-chapter">
            <div className="chapter-label">Problem</div>
            <h2>Customers had to leave AKS to understand application health</h2>
            <p>When troubleshooting workloads, AKS customers needed application-level telemetry that lived outside the Kubernetes resource experience. Moving between contexts created a fragmented workflow and made it harder to connect a failing workload with the application signals that could explain what was happening.</p>
            <Image src={appinsights_dashboard} alt="Application Insights dashboard" className="chapter-image chapter-image-block" sizes="(max-width: 760px) 100vw, 60vw" />
          </section>
          <section id="solution" className="detail-chapter">
            <div className="chapter-label">Solution</div>
            <h2>Surface the right signals at the resource level</h2>
            <p>The new views brought Application Insights signals into AKS resource blades, giving customers a direct way to inspect latency, request volume, and failures for the deployments, pods, and namespaces they were already investigating.</p>
            <ul className="chapter-bullets">
              <li>Show application performance metrics alongside Kubernetes resource context.</li>
              <li>Filter signals by workload and namespace to narrow troubleshooting quickly.</li>
              <li>Provide clear entry points to the full Application Insights experience for deeper analysis.</li>
            </ul>
            <p>The user can view the top-level metrics for the resource in a namespace. Any deployments that have not been onboarded to Application Insights will be called out here to be onboarded.</p>
            <Image src={appinsights_namespace} alt="Application Insights namespace view" className="chapter-image chapter-image-block" sizes="(max-width: 760px) 100vw, 60vw" />
            <p>Then, the user can drill down into the full Application Insights experience for deeper analysis.</p>
            <Image src={appinsights_deployments} alt="Application Insights deployments view" className="chapter-image chapter-image-block" sizes="(max-width: 760px) 100vw, 60vw" />
            <Image src={appinsights_pods} alt="Application Insights pod view" className="chapter-image chapter-image-block" sizes="(max-width: 760px) 100vw, 60vw" />
          </section>
          <section id="engineering" className="detail-chapter">
            <div className="chapter-label">Engineering complexity</div>
            <h2>Connecting two monitoring models into one workflow</h2>
            <p>The work required mapping Kubernetes resources to Application Insights resources, then querying and filtering Azure Monitor metrics by Kubernetes workload and pod dimensions. I integrated MonitorChart components into the new views, built custom namespace visualisations and filters, and wired the onboarding flow to Container Insights.</p>
            <div className="chapter-block-list">
              <p><strong>Resource mapping:</strong> connected AKS deployments, pods, and namespaces to their corresponding Application Insights resources. Ensured that navigation links directed users to the correct corresponding resource views within Application Insights.</p>
              <p><strong>Metric queries:</strong> filtered Azure Monitor data by Kubernetes workload, pod dimensions, as well as timespan parameters.</p>
              <p><strong>Reusable visualisation:</strong> integrated MonitorChart components and created custom namespace-level views where the existing patterns did not fit.</p>
              <p><strong>Onboarding:</strong> connected the experience to Container Insights so customers could move from setup into actionable telemetry.</p>
            </div>
          </section>
          <section id="outcome" className="detail-chapter reflection-section">
            <div className="chapter-label">Outcome</div>
            <h2>More visibility without leaving the AKS workflow</h2>
            <p style={{ color: "#43f5c7" }}>
              <strong>
                The new experience reached about 3.5x the unique users of launch week within the first month.
              </strong>              
            </p>
            <p>Application performance metrics now appear directly inside AKS resource blades, increasing visibility and strengthening customers’ troubleshooting capabilities. Customers can start with the Kubernetes resource they understand, see the application signals that matter, and move into the full Application Insights experience when they need deeper investigation.</p>
          </section>
        </article>
      </div>
    </main>
  );
}
