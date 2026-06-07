interface ProjectHeaderProps {
  title: string;
  description: string;
  technologies: string[];

  github?: string;
  demo?: string;

  year?: string;
  status?: string;
}

export function ProjectHeader({
  title,
  description,
  technologies,
  github,
  demo,
  year,
  status,
}: ProjectHeaderProps) {
  return (
    <header className="mb-20">
      <div className="space-y-6">
        <div>
          <h1 className="text-5xl font-bold tracking-tight">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                px-3
                py-1
                text-sm
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-6">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline"
            >
              GitHub ↗
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline"
            >
              Demo ↗
            </a>
          )}
        </div>

        <div className="text-sm text-muted-foreground">
          {year} · {status}
        </div>
      </div>
    </header>
  );
}