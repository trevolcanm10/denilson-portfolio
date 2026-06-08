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
          <h2 className="text-3xl font-bold mb-12">Experiencia</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors"
              >
                <div className="absolute -left-2.5 top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">•</span>
                        {item}
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