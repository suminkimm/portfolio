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
            Creating a clear Azure Portal experience for Managed Kubernetes Namespaces.
          </p>
          <div className="project-facts" aria-label="Project facts">
            <div>
              <span>Role</span>
              <strong>Frontend engineer</strong>
            </div>
            <div>
              <span>Product</span>
              <strong>Azure Kubernetes Service</strong>
            </div>
            <div>
              <span>Contribution</span>
              <strong>Responsible for developing the Manage experience</strong>
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
            <h2>Make namespace management understandable and actionable</h2>
            <p>
              Managed Kubernetes Namespaces extend AKS with a resource experience for teams that need to organize workloads and apply consistent controls within a cluster. I was the frontend engineer responsible for creating the Manage experience in the Azure Portal, bringing namespace configuration and lifecycle actions into one clear workflow.
            </p>
          </section>

          <section id="problem" className="detail-chapter">
            <div className="chapter-label">Problem</div>
            <h2>Namespace operations needed a clear home in the Portal</h2>
            <p>
              Kubernetes namespace management can span several concepts at once: workload organization, network policies, compute quotas, labels, annotations, and lifecycle decisions. The Manage experience needed to make those controls discoverable without forcing customers to rely on YAML or separate Kubernetes tooling for routine operations.
            </p>
          </section>

          <section id="solution" className="detail-chapter">
            <div className="chapter-label">Solution</div>
            <h2>Bring browsing and management actions into one resource experience</h2>
            <p>
              I built the Portal experience around the namespace resource: customers can browse workloads, inspect the namespace overview, edit properties and metadata, and choose how to handle deletion.
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
            <h2>Turning Kubernetes operations into approachable Portal interactions</h2>
            <p>
              The Manage experience had to represent Kubernetes concepts accurately while fitting Azure Portal patterns for navigation, editing, validation, and destructive actions. The implementation connected the resource overview to workload browsing, property editing, metadata updates, and lifecycle decisions across static views and interactive flows.
            </p>
            <div className="chapter-block-list">
              <p>
                <strong>Resource context:</strong> kept namespace identity, cluster context, and Kubernetes configuration visible across the management experience.
              </p>
              <p>
                <strong>Configuration:</strong> translated networking policies and compute quotas into focused Portal controls.
              </p>
              <p>
                <strong>Metadata:</strong> supported editing labels and annotations while preserving the relationship between Portal fields and Kubernetes values.
              </p>
              <p>
                <strong>Lifecycle safety:</strong> separated conversion back to a Kubernetes Namespace from permanent deletion and required an explicit confirmation.
              </p>
            </div>
          </section>

          <section id="outcome" className="detail-chapter reflection-section">
            <div className="chapter-label">Outcome</div>
            <h2>A complete management path for managed namespaces</h2>
            <p>
              The Manage experience gives AKS customers a central place to browse workloads, configure namespace properties, update metadata, and make informed lifecycle decisions. It brings common namespace operations into the Azure Portal while preserving the Kubernetes context needed to manage workloads confidently.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
