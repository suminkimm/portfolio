import appInsightsDashboard from "@/app/images/appInsights/appinsights_dashboard.png";
import appInsightsDeployments from "@/app/images/appInsights/appinsights_deployments.png";
import appInsightsNamespace from "@/app/images/appInsights/appinsights_namespace.png";
import appInsightsPods from "@/app/images/appInsights/appinsights_pods.png";
import DocumentationLink from "@/components/project/DocumentationLink";
import ProjectChapter from "@/components/project/ProjectChapter";
import ProjectImage from "@/components/project/ProjectImage";
import ProjectLayout from "@/components/project/ProjectLayout";
import { DOCUMENTATION_URLS } from "@/content/projects";

const CHAPTERS = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "engineering", label: "Engineering complexity" },
  { id: "outcome", label: "Outcome" },
];

const FACTS = [
  { label: "Role", value: "Software engineer" },
  { label: "Product", value: "Azure Kubernetes Service" },
  {
    label: "Responsibilities",
    value: "UX engineering, technical design, Portal architecture, accessibility, testing, launch readiness",
  },
  {
    label: "Documentation",
    value: <DocumentationLink href={DOCUMENTATION_URLS.applicationInsights} />,
  },
];

export default function ApplicationInsights() {
  return (
    <ProjectLayout
      title="Application Insights for AKS"
      kicker="Microsoft • Azure Kubernetes Service"
      summary="Bringing application-level telemetry into the Kubernetes troubleshooting workflow."
      facts={FACTS}
      chapters={CHAPTERS}
    >
      <ProjectImage src={appInsightsDeployments} alt="Application Insights deployments" />

      <ProjectChapter id="overview" label="Overview" title="Application telemetry belongs in the Kubernetes context">
        <p>
          I led the Azure Portal integration that surfaced Application Insights directly for AKS deployments,
          pods, and namespaces. The experience exposed latency, request volume, and failure signals while
          offering entry points to the full Application Insights experience.
        </p>
      </ProjectChapter>

      <ProjectChapter id="problem" label="Problem" title="Customers had to leave AKS to understand application health">
        <p>
          When troubleshooting workloads, AKS customers needed application-level telemetry that lived outside
          the Kubernetes resource experience. Moving between contexts created a fragmented workflow and made it
          harder to connect a failing workload with the application signals that could explain what was
          happening.
        </p>
        <ProjectImage src={appInsightsDashboard} alt="Application Insights dashboard" />
      </ProjectChapter>

      <ProjectChapter id="solution" label="Solution" title="Surface the right signals at the resource level">
        <p>
          The new views brought Application Insights signals into AKS resource blades, giving customers a
          direct way to inspect latency, request volume, and failures for the deployments, pods, and namespaces
          they were already investigating.
        </p>
        <ul className="chapter-bullets">
          <li>Show application performance metrics alongside Kubernetes resource context.</li>
          <li>Filter signals by workload and namespace to narrow troubleshooting quickly.</li>
          <li>Provide clear entry points to the full Application Insights experience for deeper analysis.</li>
        </ul>
        <p>
          The user can view the top-level metrics for the resource in a namespace. Any deployments that have
          not been onboarded to Application Insights will be called out here to be onboarded.
        </p>
        <ProjectImage src={appInsightsNamespace} alt="Application Insights namespace view" />
        <p>Then, the user can drill down into the full Application Insights experience for deeper analysis.</p>
        <ProjectImage src={appInsightsDeployments} alt="Application Insights deployments view" />
        <ProjectImage src={appInsightsPods} alt="Application Insights pod view" />
      </ProjectChapter>

      <ProjectChapter
        id="engineering"
        label="Engineering complexity"
        title="Connecting two monitoring models into one workflow"
      >
        <p>
          The work required mapping Kubernetes resources to Application Insights resources, then querying and
          filtering Azure Monitor metrics by Kubernetes workload and pod dimensions. I integrated MonitorChart
          components into the new views, built custom namespace visualisations and filters, and wired the
          onboarding flow to Container Insights.
        </p>
        <div className="chapter-block-list">
          <p>
            <strong>Resource mapping:</strong> connected AKS deployments, pods, and namespaces to their
            corresponding Application Insights resources. Ensured that navigation links directed users to the
            correct corresponding resource views within Application Insights.
          </p>
          <p>
            <strong>Metric queries:</strong> filtered Azure Monitor data by Kubernetes workload, pod
            dimensions, as well as timespan parameters.
          </p>
          <p>
            <strong>Reusable visualisation:</strong> integrated MonitorChart components and created custom
            namespace-level views where the existing patterns did not fit.
          </p>
          <p>
            <strong>Onboarding:</strong> connected the experience to Container Insights so customers could
            move from setup into actionable telemetry.
          </p>
        </div>
      </ProjectChapter>

      <ProjectChapter id="outcome" label="Outcome" title="More visibility without leaving the AKS workflow">
        <p>
          <strong>
            The new experience reached about 3.5x the unique users of launch week within the first month.
          </strong>
        </p>
        <p>
          Application performance metrics now appear directly inside AKS resource blades, increasing visibility
          and strengthening customers’ troubleshooting capabilities. Customers can start with the Kubernetes
          resource they understand, see the application signals that matter, and move into the full Application
          Insights experience when they need deeper investigation.
        </p>
      </ProjectChapter>
    </ProjectLayout>
  );
}
