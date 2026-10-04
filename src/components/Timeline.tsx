import { timeline } from "@/data/timeline";

export function Timeline() {
  return (
    <ol className="relative space-y-6 border-l border-border pl-6">
      {timeline.map((entry) => (
        <li key={entry.year} className="relative">
          <span
            className="absolute -left-[31px] top-1 size-3.5 rounded-full border-2 border-bg bg-accent"
            aria-hidden
          />
          <p className="font-mono text-sm font-semibold text-accent">{entry.year}</p>
          <p className="mt-1 leading-relaxed text-muted">{entry.text}</p>
        </li>
      ))}
    </ol>
  );
}
