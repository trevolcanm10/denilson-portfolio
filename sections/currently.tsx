"use client";

import { Hammer, BookOpen, MapPin, Target } from "lucide-react";

const currentItems = [
  {
    icon: Hammer,
    label: "Construyendo",
    value: "Sistema predictivo de ansiedad v2",
  },
  {
    icon: BookOpen,
    label: "Aprendiendo",
    value: "React Server Components y Next.js 16",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Lima, Perú",
  },
  {
    icon: Target,
    label: "Buscando",
    value: "Oportunidades freelance y prácticas preprofesionales",
  },
];

export function Currently() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Ahora mismo</h2>
        </div>

        <div className="p-6 rounded-2xl border glass-card hover-lift hover:border-primary/40 hover:shadow-card-hover">
          <div className="grid gap-5">
            {currentItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label}>
                  <div className="flex items-start gap-4">
                    <Icon className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-foreground font-medium">{item.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
