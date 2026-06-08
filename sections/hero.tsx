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
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-border avatar-glow">
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
          className="text-sm text-muted-foreground font-medium uppercase tracking-wider"
        >
          Desarrollador Full Stack & Especialista en Machine Learning
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold leading-tight tracking-tight"
        >
          Construyendo aplicaciones y datos
          <span className="text-gradient block sm:inline"> con inteligencia</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Ingeniero de Software enfocado en el desarrollo web robusto, dashboards interactivos y modelos predictivos de Machine Learning. Transformo datos complejos en soluciones reales.
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
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition duration-300 text-center"
          >
            Ver proyectos
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-border hover:bg-muted hover:-translate-y-0.5 transition duration-300 font-medium text-center"
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
          <span className="text-muted-foreground">·</span>
          <a
            href="https://linkedin.com/in/denilson"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition"
          >
            LinkedIn
          </a>
          <span className="text-muted-foreground">·</span>
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