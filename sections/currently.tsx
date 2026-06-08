"use client";

import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8">Ahora mismo</h2>

          <div className="p-6 rounded-2xl border-2 border-border bg-card">
            <div className="grid gap-5">
              {currentItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <Icon className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-foreground font-medium">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
