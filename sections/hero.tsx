"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 pt-24">
      <div className="max-w-3xl text-center space-y-10">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-border shadow-lg">
            <Image
              src="/avatar.png"
              alt="Denilson Morales"
              fill
              sizes="(max-width: 768px) 112px, 128px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm text-muted-foreground"
        >
          Full Stack Developer • AI Solutions Developer
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Construyo aplicaciones web modernas
          <span className="text-primary"> con impacto real</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground text-lg"
        >
          Desarrollo sistemas full stack, dashboards y soluciones de inteligencia
          artificial enfocadas en resolver problemas reales con tecnología.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/projects"
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
          >
            Ver proyectos
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg border border-border hover:bg-muted transition font-medium"
          >
            Contactarme
          </Link>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-4 pt-2"
        >
          <a
            href="https://github.com/trevolcanm10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition"
          >
            GitHub
          </a>
          <span className="text-muted-foreground">•</span>
          <a
            href="https://linkedin.com/in/denilson"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition"
          >
            LinkedIn
          </a>
          <span className="text-muted-foreground">•</span>
          <a
            href="mailto:denilson@example.com"
            className="text-muted-foreground hover:text-foreground transition"
          >
            Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}