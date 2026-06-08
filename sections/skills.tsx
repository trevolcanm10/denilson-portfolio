"use client";

import { skills } from "@/data/skills";
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/shared/fade-in";

export function Skills() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Title */}
        <FadeIn className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Mis <span className="text-gradient">Tecnologías</span></h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Herramientas y tecnologías que uso para construir soluciones robustas e inteligentes
          </p>
        </FadeIn>

        {/* Grid */}
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          stagger={0.08}
        >
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <StaggerItem key={skill.category}>
                <div className="p-5 rounded-2xl border glass-card hover-lift hover:border-primary/40 cursor-default h-full group">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {skill.category}
                    </h3>
                  </div>

                  {/* Items */}
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
