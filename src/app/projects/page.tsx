import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <section className="pt-16 sm:pt-24">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Projects</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
        Tools, experiments and side projects — mostly built to make troubleshooting integrations a
        little less painful.
      </p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
