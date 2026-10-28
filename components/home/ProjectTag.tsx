/** White pill naming a project's organization and year, overlaid on the card image. */
export default function ProjectTag({ organization, year }: { organization: string; year: string }) {
  return (
    <p className="m-0 w-fit rounded-full border border-line bg-white px-3 py-1 text-body font-medium text-ink">
      {organization}
      <span className="text-ink-muted"> • {year}</span>
    </p>
  );
}
