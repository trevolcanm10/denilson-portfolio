"use client";

import { Project } from "@/types/project";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  return (
    <Link href={`/projects/${project.slug}`} className="block group">
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="glass-card overflow-hidden rounded-2xl border p-5 hover:border-primary/40 hover:shadow-card-hover transition-all duration-300 flex flex-col h-full"
      >
        {/* Aspect ratio video wrapper for image with hover scale */}
        <div className="relative aspect-video overflow-hidden rounded-xl mb-4 bg-muted border">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>

        {/* Title with hover color change */}
        <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description line-clamped */}
        <p className="mt-3 text-muted-foreground text-sm line-clamp-2 flex-grow leading-relaxed">
          {project.description}
        </p>

        {/* Badges footer */}
        <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-border/60">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md border bg-secondary/50 text-secondary-foreground px-2 py-0.5 text-xs font-medium hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs text-muted-foreground self-center ml-1">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </motion.article>
    </Link>
  );
}