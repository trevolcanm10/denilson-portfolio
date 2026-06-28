"use client";


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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="text-4xl md:text-5xl font-bold text-primary">{stat.value}{stat.suffix}</span>
              <p className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
