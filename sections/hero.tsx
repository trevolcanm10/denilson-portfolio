"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SplitText } from "@/components/shared/split-text";
import { FloatingParticles } from "@/components/shared/floating-particles";
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
      <FloatingParticles count={16} />

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
            <SplitText
              text="Construyendo aplicaciones y datos"
              as="span"
              initial
              delay={0.2}
              stagger={0.04}
              className="block"
            />
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


          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-start gap-4 pt-2"
          >
            <a
              href="https://github.com/trevolcanm10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground link-underline transition-colors"
            >
              GitHub
            </a>
            <span className="text-muted-foreground">·</span>
            <a
              href="https://linkedin.com/in/denilson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground link-underline transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-muted-foreground">·</span>
            <a
              href="mailto:denilson@example.com"
              className="text-muted-foreground hover:text-foreground link-underline transition-colors"
            >
              Email
            </a>
          </motion.div>
        </div>
        
        {/* Avatar */}
        <AvatarFrame />
      </div>
    </section>
  );
}
