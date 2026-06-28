"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AvatarFrame } from "@/components/shared/avatar-frame";
import { StatusBadge } from "@/components/shared/status-badge";
export function Hero() {
  return (
    <section
  id="home"
  className="
    relative
    min-h-[820px]
    flex
    items-center
    px-12
    py-24
    overflow-hidden
  "
>
      {/* C1: Partículas decorativas */}

      <div
 className="
   max-w-6xl
   mx-auto
   w-full
   flex
   flex-col
   md:flex-row
   items-center
   gap-16
 "
>
        <div className="flex-1 space-y-8 text-center md:text-left">
          {/* Badge */}
          <StatusBadge />

          {/* Title con B2: split text */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Construyendo aplicaciones y datos
            <span className="italic font-light">
              {" "}con inteligencia
            </span>
          </h1>


          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-lg max-w-2xl max-w-xl leading-relaxed"
          >
            Ingeniero de Software enfocado en el desarrollo web robusto, dashboards interactivos y modelos predictivos de Machine Learning. Transformo datos complejos en soluciones reales.
          </motion.p>


          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4"
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
        </div>
        
        {/* Avatar */}
        <AvatarFrame />
      </div>
    </section>
  );
}
