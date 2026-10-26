import ApplicationInsightsPage from "./projects/ApplicationInsights";
import ParkSmartPage from "./projects/ParkSmart";
import { PROJECTS } from "../../../Constants";

export function generateStaticParams() {
  return PROJECTS.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug === "application-insights-aks") {
    return <ApplicationInsightsPage />;
  }

  return <ParkSmartPage />;
}
