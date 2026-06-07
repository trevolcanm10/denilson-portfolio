import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { ArchitectureDiagram } from "@/components/project/architecture-diagram";
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
      <h1 className="text-5xl font-bold">
        {project.title}
      </h1>

      <p className="mt-6 text-xl">
        {project.description}
      </p>

      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          Problema
        </h2>

        <p className="mt-4">
          {project.problem}
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          Solución
        </h2>

        <p className="mt-4">
          {project.solution}
        </p>
        <h2 className="text-2xl font-bold">
            Arquitectura
        </h2>

        <ArchitectureDiagram
            architecture={project.architecture}
        />
      </section>
    </main>
  );
}