import Link from "next/link";
import { Project } from "@/types/project";

export function ProjectHeader({ project }: { project: Project }) {
  return (
    <section className="space-y-8">

      {/* Top meta */}
      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
        <span>{project.year}</span>
        <span>•</span>
        <span>{project.status}</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        {project.title}
      </h1>

      {/* Description */}
      <p className="text-lg text-muted-foreground max-w-2xl">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="flex flex-wrap gap-3 pt-2">
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            className="px-5 py-2 rounded-lg border hover:bg-muted transition"
          >
            GitHub
          </Link>
        )}

        {project.demo && (
          <Link
            href={project.demo}
            target="_blank"
            className="px-5 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            Ver demo
          </Link>
        )}
      </div>

    </section>
  );
}