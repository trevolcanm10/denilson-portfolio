"use client";

import { GraduationCap, Briefcase, BookOpen, Rocket } from "lucide-react";
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/shared/fade-in";

const infoCards = [
  {
    icon: GraduationCap,
    title: "Formación",
    description: "Ingeniería de Software (cursando 5to ciclo)",
  },
  {
    icon: Briefcase,
    title: "Freelance",
    description: "Agencia de viajes, repuestos, proyectos propios",
  },
  {
    icon: BookOpen,
    title: "Aprendizaje",
    description: "Documentación oficial, Udemy cuando es necesario",
  },
  {
    icon: Rocket,
    title: "Filosofía",
    description: "Construir {'>'} ver tutoriales",
  },
];

export function About() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="space-y-2 mb-6">
            <p className="text-sm text-primary font-medium">Sobre mí</p>
            <h2 className="text-3xl font-bold">Un poco de contexto</h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn delay={0.1} className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Soy <span className="text-foreground font-medium">Denilson Morales</span>, estudiante de Ingeniería de Software. Me apasiona resolver problemas lógicos complejos, diseñar flujos de usuario intuitivos y estructurar arquitecturas de datos limpias.
            </p>
            <p>
              Desde hace más de un año trabajo como <span className="text-foreground font-medium">desarrollador freelance</span>, ayudando a negocios y emprendimientos a digitalizar sus procesos, automatizar tareas manuales y crear herramientas a medida. He diseñado y desplegado soluciones reales que van desde sistemas de reserva de pasajes hasta catálogos interactivos.
            </p>
            <p>
              Mi filosofía de aprendizaje se basa en construir proyectos reales y resolver desafíos técnicos desde cero. Estudiar las mejores prácticas de la documentación oficial, escribir código limpio y optimizar el rendimiento de las aplicaciones son las prioridades en mi flujo de trabajo.
            </p>
          </FadeIn>

          <StaggerContainer className="space-y-4" stagger={0.1}>
            {infoCards.map((card) => {
              const Icon = card.icon;
              return (
                <StaggerItem key={card.title}>
                  <div className="p-5 rounded-xl border-2 border-border bg-card hover-lift cursor-default">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold text-foreground">{card.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground pl-8">
                      {card.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
