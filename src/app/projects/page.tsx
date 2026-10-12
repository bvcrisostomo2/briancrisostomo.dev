import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Brian Paul Crisostomo, from a Philippines flood hazard map and a 3D pixel-art Noli Me Tangere game to React apps and client websites.",
};

export default function ProjectsPage() {
  return (
    <section className="pt-16 sm:pt-24">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Projects</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
        Things I&apos;ve built, newest first: from a Philippine flood hazard map and a 3D pixel-art
        game in progress, back to the React apps I learned on.
      </p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
