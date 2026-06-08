"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    type: "work",
    title: "Freelance Developer",
    period: "2024 - Presente",
    items: [
      "Agencia de viajes: Prototipo funcional para venta de pasajes de autobús con React y Node.js",
      "Empresa de repuestos automotrices: Web de catálogo y pedidos",
      "Proyectos académicos: Sistema predictivo de ansiedad con ML",
      "Proyectos individuales: Predictor de Premier League, Análisis de datos Kaggle",
    ],
  },
  {
    type: "education",
    title: "Ingeniería de Software",
    period: "En curso",
    items: [
      "Universidad local",
      "Enfoque en desarrollo de software y datos",
    ],
  },
  {
    type: "certification",
    title: "Certificaciones y Cursos",
    period: "2023 - Presente",
    items: [
      "Cursos de Python, Machine Learning y desarrollo web en Udemy",
      "Aprendizaje autodidacta: 90% de mis habilidades son de proyectos reales",
      "Documentación oficial: React, Next.js, Flutter",
    ],
  },
];

export function Experience() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12">
            Trayectoria <span className="text-gradient">& Experiencia</span>
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-primary/20 hover:border-primary/50 transition-colors group"
              >
                {/* Timeline dot with hover scaling */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-background group-hover:scale-125 group-hover:bg-primary transition-all duration-300" />
                
                <div className="space-y-3 p-5 rounded-2xl hover:bg-card/40 hover:shadow-sm border border-transparent hover:border-border transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground font-mono">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-muted-foreground flex items-start gap-2.5 leading-relaxed"
                      >
                        <span className="text-primary mt-1 text-xs font-bold shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}