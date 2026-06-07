"use client";
import { Project } from "@/types/project";
import Link from "next/link";
import { motion } from "framer-motion";
interface Props {
  project: Project;
}

export function ProjectCard({
  project,
}: Props) {
  return (
        <Link
            href={`/projects/${project.slug}`}
            className="block"
        >
            <motion.article
                whileHover={{
                    y: -5,
                }}
                transition={{
                    duration: 0.2,
                }}
            >
            <h3 className="text-xl font-bold">
                {project.title}
            </h3>

            <p className="mt-3 text-muted-foreground">
                {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                <span
                    key={tech}
                    className="rounded-md border px-2 py-1 text-sm"
                >
                    {tech}
                </span>
                ))}
            </div>
            </motion.article>
        </Link>
    );
}