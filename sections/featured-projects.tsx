import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project/project-card";

export function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="mb-8 text-3xl font-bold">
        Proyectos Destacados
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}