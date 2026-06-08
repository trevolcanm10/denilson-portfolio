"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold">Sobre mí</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Soy <span className="text-foreground font-medium">Denilson Morales</span>, estudiante de la carrera de Ingeniería de Software. Me apasiona el desarrollo de software: páginas web, aplicaciones móviles, sistemas de Machine Learning y cualquier cosa que involucre resolver problemas con código.
              </p>
              <p>
                Actualmente trabajo como <span className="text-foreground font-medium">freelancer</span>, ayudando a negocios locales a digitalizar sus procesos. He realizado proyectos para una agencia de viajes, una empresa de repuestos automotrices, y varios proyectos académicos e individuales.
              </p>
              <p>
                Mi forma de aprender es <span className="text-foreground font-medium">construyendo cosas reales</span>. Prefiero crear un proyecto que resolver 10 tutoriales. Cada error es una lección, y cada proyecto es mejor que el anterior.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl border bg-background/60">
                <h3 className="font-semibold mb-2">🎓 Formación</h3>
                <p className="text-sm text-muted-foreground">
                  Ingeniería de Software (en curso)
                </p>
              </div>

              <div className="p-4 rounded-xl border bg-background/60">
                <h3 className="font-semibold mb-2">💼 Freelance</h3>
                <p className="text-sm text-muted-foreground">
                  Agencia de viajes, empresa de repuestos, proyectos académicos
                </p>
              </div>

              <div className="p-4 rounded-xl border bg-background/60">
                <h3 className="font-semibold mb-2">📚 Certificaciones</h3>
                <p className="text-sm text-muted-foreground">
                  Cursos en Udemy, aprendizaje autodidacta con proyectos
                </p>
              </div>

              <div className="p-4 rounded-xl border bg-background/60">
                <h3 className="font-semibold mb-2">🚀 Filosofía</h3>
                <p className="text-sm text-muted-foreground">
                  "Aprendo construyendo, no viendo tutoriales"
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}