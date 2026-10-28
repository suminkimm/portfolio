import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import { getProject, PROJECTS, type ProjectSlug } from "@/content/projects";
import ApplicationInsights from "./projects/ApplicationInsights";
import ManagedKubernetesNamespaces from "./projects/ManagedKubernetesNamespaces";
import ParkSmart from "./projects/ParkSmart";

const PROJECT_PAGES: Record<ProjectSlug, ComponentType> = {
  "managed-kubernetes-namespaces": ManagedKubernetesNamespaces,
  "application-insights-aks": ApplicationInsights,
  "park-smart": ParkSmart,
};

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? { title: project.name, description: project.summary } : {};
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const ProjectContent = PROJECT_PAGES[slug as ProjectSlug];
  if (!ProjectContent) notFound();

  return <ProjectContent />;
}
