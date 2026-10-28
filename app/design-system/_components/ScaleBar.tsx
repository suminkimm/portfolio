/** Horizontal bar showing a token's relative size within its scale. */
export default function ScaleBar({ fraction }: { fraction: number }) {
  return <div className="h-3 bg-accent" style={{ width: `${fraction * 100}%` }} />;
}
