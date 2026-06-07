import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="mb-8 text-3xl font-bold">
        Tecnologías
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-lg border px-4 py-2"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}