import { experience } from "@/data/experience";
import { assetPath } from "@/lib/assetPath";

export function ExperienceList() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {experience.map((job) => (
        <article
          key={job.company}
          className="rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-card-hover"
        >
          <header className="flex items-center gap-3">
            {job.logo.src ? (
              <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-white p-1.5">
                {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image optimizer */}
                <img src={assetPath(job.logo.src)} alt="" className="size-full object-contain" />
              </span>
            ) : (
              <span
                className="grid size-11 shrink-0 place-items-center rounded-xl text-lg font-bold text-white"
                style={{ background: job.logo.color }}
                aria-hidden
              >
                {job.logo.text}
              </span>
            )}
            <div className="min-w-0">
              <h3 className="font-semibold">
                {job.url ? (
                  <a href={job.url} target="_blank" rel="noreferrer" className="hover:text-accent">
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
              </h3>
              {job.via && <p className="text-xs text-muted">via {job.via}</p>}
            </div>
          </header>

          <ol className="mt-4 space-y-4 border-l border-border pl-4">
            {job.roles.map((role) => (
              <li key={role.title} className="relative">
                <span
                  className="absolute -left-[21px] top-1.5 size-2.5 rounded-full border-2 border-card bg-accent"
                  aria-hidden
                />
                <p className="font-medium">{role.title}</p>
                <p className="font-mono text-xs text-muted">
                  {role.start} - {role.end}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{role.summary}</p>
              </li>
            ))}
          </ol>
        </article>
      ))}
    </div>
  );
}
