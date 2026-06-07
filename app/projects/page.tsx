import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project/project-card";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24">
      <h1 className="mb-12 text-5xl font-bold">
        Todos los Proyectos
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </div>
    </main>
  );
}