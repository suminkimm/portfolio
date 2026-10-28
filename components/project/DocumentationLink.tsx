export default function DocumentationLink({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="font-medium text-ink no-underline">
      Microsoft Learn ↗
    </a>
  );
}
