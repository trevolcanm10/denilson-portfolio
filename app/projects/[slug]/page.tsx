import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { ArchitectureDiagram } from "@/components/project/architecture-diagram";
import { CaseStudySection } from "@/components/project/case-study-section";
import { ProjectHeader } from "@/components/project/project-header";
import { TechnologyStack } from "@/components/project/technology-stack";
import { ProjectTimeline } from "@/components/project/project-timeline";
import { ProjectGallery } from "@/components/project/project-gallery";
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: Props) {
  const { slug } = await params;

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <ProjectHeader
        title={project.title}
        description={project.description}
        technologies={project.technologies}
        github={project.github}
        demo={project.demo}
        year={project.year}
        status={project.status}
      />

      <CaseStudySection title="Problema">
        <p>{project.problem}</p>
      </CaseStudySection>

      <CaseStudySection title="Solución">
        <p>{project.solution}</p>
      </CaseStudySection>

      <CaseStudySection title="Proceso de Desarrollo">
        <ProjectTimeline
          timeline={project.timeline}
        />
      </CaseStudySection>

      <CaseStudySection title="Arquitectura">
        <ArchitectureDiagram
          architecture={project.architecture}
        />
      </CaseStudySection>
      
      <CaseStudySection title="Galería">
        <ProjectGallery
          images={project.gallery}
        />
      </CaseStudySection>

      <CaseStudySection title="Resultados">
        <ul className="space-y-3">
          {project.results.map((result) => (
            <li key={result}>
              ✓ {result}
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Stack Tecnológico">
        <TechnologyStack
          stack={project.stack}
        />
      </CaseStudySection>
    </main>
  );
}