import Image from "next/image";
import Link from "next/link";

import browseBlades from "../../../images/managedNamespaces/browseBlades.gif";
import deleteMN from "../../../images/managedNamespaces/deleteMN.png";
import editMetadata from "../../../images/managedNamespaces/editMetadata.gif";
import editProperties from "../../../images/managedNamespaces/editProperties.gif";
import overview from "../../../images/managedNamespaces/overview.png";
import ProjectToc from "../../../../components/ProjectToc";
import TopNavigation from "../../../../components/TopNavigation";
import { MANAGED_KUBERNETES_NAMESPACES_DOCUMENTATION_URL } from "../../../../Constants";

export default function ManagedKubernetesNamespacesPage() {
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
            <p className="sidebar-project-name">Managed Kubernetes Namespaces</p>
            <ProjectToc
              chapters={[
                { id: "overview", label: "Overview" },
                { id: "problem", label: "Problem" },
                { id: "solution", label: "Solution" },
                { id: "engineering", label: "Engineering complexity" },
                { id: "outcome", label: "Outcome" },
              ]}
            />
          </div>
        </aside>

        <article className="project-detail-content" aria-labelledby="project-title">
          <div className="project-kicker">Microsoft • Azure Kubernetes Service</div>
          <h1 id="project-title">Managed Kubernetes Namespaces</h1>
          <p className="project-summary">
            Designing and engineering a governed namespace experience for multi-tenant Kubernetes.
          </p>
          <div className="project-facts" aria-label="Project facts">
            <div>
              <span>Role</span>
              <strong>Software engineer</strong>
            </div>
            <div>
              <span>Product</span>
              <strong>Azure Kubernetes Service</strong>
            </div>
            <div>
              <span>Responsibilities</span>
              <strong>UX engineering, technical design, Portal architecture, accessibility, testing, launch readiness</strong>
            </div>
            <div>
              <span>Documentation</span>
              <a
                href={MANAGED_KUBERNETES_NAMESPACES_DOCUMENTATION_URL}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-white/90 no-underline"
              >
                Microsoft Learn ↗
              </a>
            </div>
          </div>

          <Image
            src={overview}
            alt="Managed Kubernetes Namespace overview in the Azure Portal"
            className="chapter-image chapter-image-block"
            sizes="(max-width: 760px) 100vw, 60vw"
          />

          <section id="overview" className="detail-chapter">
            <div className="chapter-label">Overview</div>
            <h2>Turning Kubernetes namespaces into governed Azure resources</h2>
            <p>
              Managed Kubernetes Namespaces (MKN) lets platform teams manage Kubernetes namsepaces as Azure resources, with built-in access controls, resource quotas, network policies, and lifecycle management. 
              <strong> I helped translate that new platform capability into an integrated Azure Portal experience.</strong>
            </p>
          </section>

          <section id="problem" className="detail-chapter">
            <div className="chapter-label">Problem</div>
            <h2>Namespace government required too much manual work</h2>
            <p>
              Platform teams often build their own processes to provision namespaces, configure policies, and delegate access.
              MKN provides these capabilities natively, allowing teams to manage their own namespaces without requiring broader cluster access.
              <strong> The UX challenge here was making this new management model feel like a natural extension of the existing AKS experience rather than introducing another disconnected Azure workflow.</strong>
            </p>
          </section>

          <section id="solution" className="detail-chapter">
            <div className="chapter-label">Solution</div>
            <h2>Bring browsing and management actions into one resource experience</h2>
            <p>
              I wrote the engineering specification and owned significant parts of the Portal management experience. My work included:
            </p>
            <ul className="chapter-bullets">
              <li>Integrating MKN into existing AKS workflows</li>
              <li>Building management and lifecycle experiences</li>
              <li>Designing for delegated permissions</li>
            </ul>
            <p>
              I connected this experience to existing workflows for workloads, events, YAML, and deployment while adding Azure-managed configuration and lifecycle actions.
              Users could move between governance, configuration, and workloads without leaving the namespace context.
            </p>
            <Image
              src={browseBlades}
              alt="Browsing workloads and Kubernetes resource views inside a managed namespace"
              className="chapter-image chapter-image-block"
              sizes="(max-width: 760px) 100vw, 60vw"
            />
            <p>
              The properties flow gives customers direct controls for networking policies and compute quota values, with the relevant Kubernetes concepts grouped into a focused editing experience.
            </p>
            <Image
              src={editProperties}
              alt="Editing managed Kubernetes Namespace properties including networking policies and compute quotas"
              className="chapter-image chapter-image-block"
              sizes="(max-width: 760px) 100vw, 60vw"
            />
            <p>
              Metadata editing supports labels and annotations while keeping the resource context visible, so customers can update the namespace without losing track of where those values apply.
            </p>
            <Image
              src={editMetadata}
              alt="Editing labels and annotations for a managed Kubernetes Namespace"
              className="chapter-image chapter-image-block"
              sizes="(max-width: 760px) 100vw, 60vw"
            />
            <p>
              The delete flow distinguishes between removing management capabilities and permanently deleting the namespace, making the consequence of each choice explicit before confirmation.
            </p>
            <Image
              src={deleteMN}
              alt="Delete Managed Kubernetes Namespace confirmation flow with two deletion options"
              className="chapter-image chapter-image-block"
              sizes="(max-width: 760px) 100vw, 60vw"
            />
          </section>

          <section id="engineering" className="detail-chapter">
            <div className="chapter-label">Engineering complexity</div>
            <h2>Hiding the complexity of Kubernetes management behind a simple experience</h2>
            <p>
              The UI presents MKN as one resource, but the experience had to coordinate multiple systems underneath it.
            </p>
            <div className="chapter-block-list">
              <p>
                <strong>Reconciling ARM and Kubernetes data</strong> 
                <p>MKN configuration came from Azure Resource Manager, while its Kubernetes resources (deployments, pods, etc) came from the cluster. The Portal experience had to combine both into a coherent resource view.</p>
              </p>
              <p>
                <strong>Supporting delegated permissions</strong>
                <p>Users could have permission to a MKN without having direct access to the underlying Kubernetes cluster.
                  Existing experiences sometimes assumed cluster-wide access, requiring workflows and actions to work correctly under a narrower scope.
                </p>
              </p>
              <p>
                <strong>Handling resource lifecycle across systems</strong> 
                <p>A MKN and its Kubernetes namespace have related but distinct lifecycles. Creation, adoption, deletion, and stopped-cluster scenarios all required careful edge case handling to avoid misleading interactions.</p>
              </p>
            </div>
          </section>

          <section id="outcome" className="detail-chapter reflection-section">
            <div className="chapter-label">Outcome</div>
            <h2>A complete management path for managed namespaces</h2>
            <p style={{ color: "#43f5c7" }}>
              <strong>
                Monthly active users grew more than 5x in the first month after launch to general access.
              </strong>              
            </p>
            <p>The Manage experience gives AKS customers a central place to browse workloads, configure namespace properties, update metadata, and make informed lifecycle decisions. It brings common namespace operations into the Azure Portal while preserving the Kubernetes context needed to manage workloads confidently.</p>
          </section>
        </article>
      </div>
    </main>
  );
}
