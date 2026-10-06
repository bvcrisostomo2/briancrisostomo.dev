import type { Project } from "@/data/projects";
import { ArrowUpRightIcon } from "./icons";

export function ProjectCard({ project }: { project: Project }) {
  const { name, glyph, tagline, description, tech, links, year } = project;

  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent/60 hover:bg-card-hover">
      <div className="flex items-start justify-between gap-3">
        <span className="grid h-11 min-w-11 place-items-center rounded-xl border border-border px-2 font-mono text-sm font-semibold text-accent">
          {glyph}
        </span>
        {year && (
          <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[11px] tracking-wider text-muted">
            {year}
          </span>
        )}
      </div>

      <h3 className="mt-4 text-lg font-semibold">{name}</h3>
      <p className="mt-1 text-sm font-medium text-fg/80">{tagline}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{description}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {tech.map((t) => (
          <li
            key={t}
            className="rounded-md bg-bg px-2 py-0.5 font-mono text-[11px] text-muted"
          >
            {t}
          </li>
        ))}
      </ul>

      {(links.demo || links.source) && (
        <div className="mt-5 flex gap-4 text-sm">
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-fg hover:text-accent"
            >
              Live demo <ArrowUpRightIcon width={14} height={14} />
            </a>
          )}
          {links.source && (
            <a
              href={links.source}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-fg hover:text-accent"
            >
              Source <ArrowUpRightIcon width={14} height={14} />
            </a>
          )}
        </div>
      )}
    </article>
  );
}
