"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-3xl text-center space-y-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-muted-foreground"
        >
          Full Stack Developer • AI Solutions Developer
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Construyo aplicaciones web modernas
          <span className="text-primary"> con impacto real</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-lg"
        >
          Desarrollo sistemas full stack, dashboards y soluciones de inteligencia
          artificial enfocadas en resolver problemas reales con tecnología.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
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

        {/* Optional small hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xs text-muted-foreground pt-4"
        >
          Disponible para proyectos freelance y colaboración
        </motion.div>
      </div>
    </section>
  );
}