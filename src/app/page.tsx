import Link from "next/link";
import { ExperienceList } from "@/components/ExperienceList";
import { ArrowRightIcon } from "@/components/icons";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";
import { featuredProjects } from "@/data/projects";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <>
      <section className="pb-20 pt-16 sm:pt-24">
        <p className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
          <span className="size-2 rounded-full bg-accent" aria-hidden />
          {profile.role} @ {profile.currentCompany}
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {profile.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{profile.intro}</p>
        <div className="mt-8">
          <SocialLinks />
        </div>
      </section>

      <section className="pb-20">
        <SectionHeading
          title="Work Experience"
          description="From enterprise support to developer support — working where customers' code meets the product."
        />
        <ExperienceList />
      </section>

      <section>
        <SectionHeading
          title="Featured Projects"
          description="Things I've built to make debugging and support faster."
          action={
            <Link
              href="/projects/"
              className="flex items-center gap-1.5 text-sm text-muted hover:text-accent"
            >
              All projects <ArrowRightIcon width={16} height={16} />
            </Link>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
