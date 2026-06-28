import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project/project-card";

export function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          Proyectos Destacados
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.slug}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
