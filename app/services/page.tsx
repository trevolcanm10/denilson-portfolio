"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Brain, Server, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    description:
      "Aplicaciones web modernas con React, Next.js y TypeScript. Dashboards, SaaS y plataformas escalables.",
    color: "text-sky-500 bg-sky-500/10 border-sky-500/20",
  },
  {
    icon: Smartphone,
    title: "Desarrollo Móvil",
    description:
      "Apps nativas e híbridas con Flutter y React Native. Experiencias fluidas en iOS y Android.",
    color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: Brain,
    title: "Soluciones de IA",
    description:
      "Modelos de Machine Learning, procesamiento de datos y sistemas predictivos para automatizar decisiones.",
    color: "text-purple-500 bg-purple-500/10 border-purple-500/20",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description:
      "APIs REST y GraphQL con Node.js, Spring Boot y Python. Microservicios y arquitecturas desacopladas.",
    color: "text-rose-500 bg-rose-500/10 border-rose-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24 relative overflow-hidden">
      {/* Subtle ambient glows specific to services page */}
      <div className="absolute top-1/4 left-1/4 -z-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl" />

      {/* Header with entrance animation */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mb-16 space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Mis <span className="text-gradient">Servicios</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Soluciones completas para transformar tus ideas en productos digitales reales con un enfoque en código limpio, datos e inteligencia.
        </p>
      </motion.div>

      {/* Services Grid with staggered load */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2"
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl border glass-card hover:border-primary/40 hover:shadow-card-hover transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Icon Container with colorful bg glows */}
                <div className={`p-3 w-fit rounded-xl border ${service.color} mb-5 group-hover:scale-110 transition-all duration-300 shadow-sm`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* A subtle indicator link to contact page */}
              <Link 
                href="/contact" 
                className="flex items-center gap-1 text-xs font-mono font-bold text-primary opacity-70 group-hover:opacity-100 transition-opacity duration-300 mt-auto"
              >
                Cotizar servicio <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      {/* CTA section refined */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 p-8 md:p-12 rounded-2xl border glass-card text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-50" />
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Cuéntame sobre tu idea y juntos encontraremos la mejor solución técnica. Automatizaciones, modelos inteligentes o interfaces web avanzadas.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 hover:shadow-lg hover:shadow-primary/10 transition duration-300"
        >
          Contactarme
        </Link>
      </motion.div>
    </main>
  );
}