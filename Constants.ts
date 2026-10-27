import { StaticImageData } from "next/dist/api/image";
import final_parkingsign_green from "./app/images/parkSmart/final_parkingsign_green.png";
import appinsights_main from "./app/images/appInsights/application-insights-for-aks.png";
import managedNamespaces_main from "./app/images/managedNamespaces/Managed Kubernetes Namespaces.png";

type Project = {
  slug: string;
  name: string;
  type: string;
  year: string;
  summary: string;
  imgSrc: StaticImageData;
};

export const APPLICATION_INSIGHTS_DOCUMENTATION_URL =
  "https://learn.microsoft.com/en-us/azure/azure-monitor/containers/kubernetes-codeless?tabs=portal";
export const MANAGED_KUBERNETES_NAMESPACES_DOCUMENTATION_URL =
  "https://learn.microsoft.com/en-us/azure/aks/concepts-managed-namespaces";

export const PROJECTS: Project[] = [
  {
    slug: "managed-kubernetes-namespaces",
    name: "Managed Kubernetes Namespaces",
    type: "Microsoft",
    year: "2026",
    summary: "A focused Azure Portal management experience for configuring, browsing, and safely deleting managed Kubernetes namespaces.",
    imgSrc: managedNamespaces_main,
  },
  {
    slug: "application-insights-aks",
    name: "Application Insights for AKS",
    type: "Microsoft",
    year: "2026",
    summary: "Bringing application telemetry into AKS so customers can troubleshoot workloads without leaving the Kubernetes context.",
    imgSrc: appinsights_main,
  },
  {
    slug: "park-smart",
    name: "Park Smart",
    type: "Concept",
    year: "2025",
    summary: "A user-tested street parking service combining clearer signs with a mobile parking assistant.",
    imgSrc: final_parkingsign_green,
  },
];
