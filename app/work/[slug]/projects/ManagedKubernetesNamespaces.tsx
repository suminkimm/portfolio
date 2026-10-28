import browseBlades from "@/app/images/managedNamespaces/browseBlades.gif";
import deleteMN from "@/app/images/managedNamespaces/deleteMN.png";
import editMetadata from "@/app/images/managedNamespaces/editMetadata.gif";
import editProperties from "@/app/images/managedNamespaces/editProperties.gif";
import overview from "@/app/images/managedNamespaces/overview.png";
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
    value: <DocumentationLink href={DOCUMENTATION_URLS.managedKubernetesNamespaces} />,
  },
];

export default function ManagedKubernetesNamespaces() {
  return (
    <ProjectLayout
      title="Managed Kubernetes Namespaces"
      kicker="Microsoft • Azure Kubernetes Service"
      summary="Designing and engineering a governed namespace experience for multi-tenant Kubernetes."
      facts={FACTS}
      chapters={CHAPTERS}
    >
      <ProjectImage src={overview} alt="Managed Kubernetes Namespace overview in the Azure Portal" />

      <ProjectChapter
        id="overview"
        label="Overview"
        title="Turning Kubernetes namespaces into governed Azure resources"
      >
        <p>
          Managed Kubernetes Namespaces (MKN) lets platform teams manage Kubernetes namespaces as Azure
          resources, with built-in access controls, resource quotas, network policies, and lifecycle
          management.
          <strong> I helped translate that new platform capability into an integrated Azure Portal experience.</strong>
        </p>
      </ProjectChapter>

      <ProjectChapter id="problem" label="Problem" title="Namespace governance required too much manual work">
        <p>
          Platform teams often build their own processes to provision namespaces, configure policies, and
          delegate access. MKN provides these capabilities natively, allowing teams to manage their own
          namespaces without requiring broader cluster access.
          <strong>
            {" "}
            The UX challenge here was making this new management model feel like a natural extension of the
            existing AKS experience rather than introducing another disconnected Azure workflow.
          </strong>
        </p>
      </ProjectChapter>

      <ProjectChapter
        id="solution"
        label="Solution"
        title="Bring browsing and management actions into one resource experience"
      >
        <p>
          I wrote the engineering specification and owned significant parts of the Portal management
          experience. My work included:
        </p>
        <ul className="chapter-bullets">
          <li>Integrating MKN into existing AKS workflows</li>
          <li>Building management and lifecycle experiences</li>
          <li>Designing for delegated permissions</li>
        </ul>
        <p>
          I connected this experience to existing workflows for workloads, events, YAML, and deployment while
          adding Azure-managed configuration and lifecycle actions. Users could move between governance,
          configuration, and workloads without leaving the namespace context.
        </p>
        <ProjectImage
          src={browseBlades}
          alt="Browsing workloads and Kubernetes resource views inside a managed namespace"
        />
        <p>
          The properties flow gives customers direct controls for networking policies and compute quota
          values, with the relevant Kubernetes concepts grouped into a focused editing experience.
        </p>
        <ProjectImage
          src={editProperties}
          alt="Editing managed Kubernetes Namespace properties including networking policies and compute quotas"
        />
        <p>
          Metadata editing supports labels and annotations while keeping the resource context visible, so
          customers can update the namespace without losing track of where those values apply.
        </p>
        <ProjectImage src={editMetadata} alt="Editing labels and annotations for a managed Kubernetes Namespace" />
        <p>
          The delete flow distinguishes between removing management capabilities and permanently deleting the
          namespace, making the consequence of each choice explicit before confirmation.
        </p>
        <ProjectImage
          src={deleteMN}
          alt="Delete Managed Kubernetes Namespace confirmation flow with two deletion options"
        />
      </ProjectChapter>

      <ProjectChapter
        id="engineering"
        label="Engineering complexity"
        title="Hiding the complexity of Kubernetes management behind a simple experience"
      >
        <p>
          The UI presents MKN as one resource, but the experience had to coordinate multiple systems
          underneath it.
        </p>
        <div className="chapter-block-list">
          <div>
            <strong>Reconciling ARM and Kubernetes data</strong>
            <p>
              MKN configuration came from Azure Resource Manager, while its Kubernetes resources (deployments,
              pods, etc) came from the cluster. The Portal experience had to combine both into a coherent
              resource view.
            </p>
          </div>
          <div>
            <strong>Supporting delegated permissions</strong>
            <p>
              Users could have permission to a MKN without having direct access to the underlying Kubernetes
              cluster. Existing experiences sometimes assumed cluster-wide access, requiring workflows and
              actions to work correctly under a narrower scope.
            </p>
          </div>
          <div>
            <strong>Handling resource lifecycle across systems</strong>
            <p>
              A MKN and its Kubernetes namespace have related but distinct lifecycles. Creation, adoption,
              deletion, and stopped-cluster scenarios all required careful edge case handling to avoid
              misleading interactions.
            </p>
          </div>
        </div>
      </ProjectChapter>

      <ProjectChapter id="outcome" label="Outcome" title="A complete management path for managed namespaces">
        <p>
          <strong>Monthly active users grew more than 5x in the first month after launch to general access.</strong>
        </p>
        <p>
          The Manage experience gives AKS customers a central place to browse workloads, configure namespace
          properties, update metadata, and make informed lifecycle decisions. It brings common namespace
          operations into the Azure Portal while preserving the Kubernetes context needed to manage workloads
          confidently.
        </p>
      </ProjectChapter>
    </ProjectLayout>
  );
}
