import { Code2, Smartphone, Brain, Server } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    description:
      "Aplicaciones web modernas con React, Next.js y TypeScript. Dashboards, SaaS y plataformas escalables.",
  },
  {
    icon: Smartphone,
    title: "Desarrollo Móvil",
    description:
      "Apps nativas e híbridas con Flutter y React Native. Experiencias fluidas en iOS y Android.",
  },
  {
    icon: Brain,
    title: "Soluciones de IA",
    description:
      "Modelos de Machine Learning, procesamiento de datos y sistemas predictivos para automatizar decisiones.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description:
      "APIs REST y GraphQL con Node.js, Spring Boot y Python. Microservicios y arquitecturas desacopladas.",
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <div className="max-w-2xl mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">
          Servicios
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Soluciones技术 completas para transformar tus ideas en productos digitales reales.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="p-6 rounded-xl border bg-background/60 hover:shadow-md transition"
            >
              <Icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-16 p-8 rounded-xl border bg-background/60 text-center">
        <h2 className="text-2xl font-bold mb-4">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Cuéntame sobre tu idea y juntos encontraremos la mejor solución técnica.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
        >
          Contactarme
        </a>
      </div>
    </main>
  );
}