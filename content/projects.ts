import type { StaticImageData } from "next/image";
import applicationInsightsCover from "@/app/images/appInsights/application-insights-for-aks.png";
import managedNamespacesCover from "@/app/images/managedNamespaces/Managed Kubernetes Namespaces.png";
import parkSmartCover from "@/app/images/parkSmart/final_parkingsign_green.png";

export type Project = {
  slug: string;
  name: string;
  /** Shown in the card's tag, e.g. the company or "Concept" */
  organization: string;
  year: string;
  /** One-line caption shown under the card on hover */
  summary: string;
  cover: StaticImageData;
};

export const PROJECTS = [
  {
    slug: "managed-kubernetes-namespaces",
    name: "Managed Kubernetes Namespaces",
    organization: "Microsoft",
    year: "2026",
    summary: "Simplifying namespace management and access.",
    cover: managedNamespacesCover,
  },
  {
    slug: "application-insights-aks",
    name: "Application Insights for AKS",
    organization: "Microsoft",
    year: "2026",
    summary: "Bringing application telemetry into Kubernetes experiences.",
    cover: applicationInsightsCover,
  },
  {
    slug: "park-smart",
    name: "Park Smart",
    organization: "Concept",
    year: "2025",
    summary: "Facilitating street parking for Seattle drivers.",
    cover: parkSmartCover,
  },
] as const satisfies readonly Project[];

export type ProjectSlug = (typeof PROJECTS)[number]["slug"];

export const getProject = (slug: string): Project | undefined =>
  PROJECTS.find((project) => project.slug === slug);

export const DOCUMENTATION_URLS = {
  applicationInsights:
    "https://learn.microsoft.com/en-us/azure/azure-monitor/containers/kubernetes-codeless?tabs=portal",
  managedKubernetesNamespaces:
    "https://learn.microsoft.com/en-us/azure/aks/concepts-managed-namespaces",
} as const;
