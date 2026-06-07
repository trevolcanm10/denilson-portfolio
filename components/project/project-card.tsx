"use client";
import { Project } from "@/types/project";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
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

            <div className="relative aspect-video overflow-hidden rounded-xl mb-4">
                <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    />
            </div>
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