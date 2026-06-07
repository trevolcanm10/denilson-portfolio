import { FadeIn } from "@/components/shared/fade-in";
export function Hero() {
  return (
    <FadeIn>
      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold tracking-tight">
            Full Stack Developer &
            AI Solutions Developer
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            Desarrollo aplicaciones web,
            móviles y soluciones inteligentes.
          </p>
        </div>
      </section>
    </FadeIn>
  );
}