"use client";

import { AnimatedCounter } from "@/components/shared/animated-counter";
import { StaggerContainer, StaggerItem } from "@/components/shared/fade-in";

const stats = [
  { label: "Proyectos", value: 5, suffix: "+" },
  { label: "Años aprendiendo", value: 3, suffix: "+" },
  { label: "Tecnologías", value: 15, suffix: "+" },
  { label: "Cafés tomados", value: 500, suffix: "+" },
];

export function Stats() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          stagger={0.1}
        >
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className="text-4xl md:text-5xl font-bold text-primary"
              />
              <p className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
