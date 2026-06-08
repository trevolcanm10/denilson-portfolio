"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, BookOpen, Rocket } from "lucide-react";

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
          <div className="space-y-2">
            <p className="text-sm text-primary font-medium">Sobre mí</p>
            <h2 className="text-3xl font-bold">Un poco de contexto</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Soy <span className="text-foreground font-medium">Denilson Morales</span>, estudiante de Ingeniería de Software. Me gusta pasar horas debuggeando algo y descubrir que el problema era un punto y coma. Así aprendo.
              </p>
              <p>
                Trabajo como <span className="text-foreground font-medium">freelancer</span> desde hace un año, ayudando a negocios locales a dejar atrás el Excel y el WhatsApp. Hasta ahora pasé por una agencia de viajes y una empresa de repuestos de carros. También hago proyectos por hobby.
              </p>
              <p>
                Mi forma de aprender es construir. Prefiero romper algo real antes que terminar 10 cursos con certificados. La documentación oficial y Stack Overflow son mis mejores amigos.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-xl border-2 border-border bg-card hover:border-primary/50 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Formación</h3>
                </div>
                <p className="text-sm text-muted-foreground pl-8">
                  Ingeniería de Software (cursando 5to ciclo)
                </p>
              </div>

              <div className="p-5 rounded-xl border-2 border-border bg-card hover:border-primary/50 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Freelance</h3>
                </div>
                <p className="text-sm text-muted-foreground pl-8">
                  Agencia de viajes, repuestos, proyectos propios
                </p>
              </div>

              <div className="p-5 rounded-xl border-2 border-border bg-card hover:border-primary/50 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Aprendizaje</h3>
                </div>
                <p className="text-sm text-muted-foreground pl-8">
                  Documentación oficial, Udemy cuando es necesario
                </p>
              </div>

              <div className="p-5 rounded-xl border-2 border-primary/30 bg-primary/5 hover:border-primary/50 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <Rocket className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Filosofía</h3>
                </div>
                <p className="text-sm text-muted-foreground pl-8">
                  Construir {'>'} ver tutoriales
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}