import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project/project-card";
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/shared/fade-in";

export function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <FadeIn className="mb-8">
        <h2 className="text-3xl font-bold">
          Proyectos Destacados
        </h2>
      </FadeIn>

      <StaggerContainer
        className="grid gap-6 md:grid-cols-2"
        stagger={0.1}
      >
        {projects.map((project) => (
          <StaggerItem key={project.slug}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
