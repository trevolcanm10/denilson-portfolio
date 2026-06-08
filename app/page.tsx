import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Currently } from "@/sections/currently";
import { Stats } from "@/sections/stats";
import { Skills } from "@/sections/skills";
import { Experience } from "@/sections/experience";
import { FeaturedProjects } from "@/sections/featured-projects";
import { PredictorWidget } from "@/components/shared/predictor-widget";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="hero-spotlight">
          <Hero />
        </section>

        <section className="bg-gradient-about">
          <About />
        </section>

        <section className="bg-gradient-currently">
          <Currently />
        </section>

        <section className="bg-gradient-stats">
          <Stats />
        </section>

        <section className="bg-gradient-skills">
          <Skills />
        </section>

        <section className="bg-gradient-experience">
          <Experience />
        </section>
        
        {/* Playground section */}
        <section className="bg-gradient-playground">
          <div className="py-20 px-4 border-y border-border/50">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold">Playground Interactivo</h2>
                <p className="text-muted-foreground">
                  Prueba mi modelo predictivo directamente en tu navegador. Elige equipos y ejecuta la simulación.
                </p>
              </div>
              <PredictorWidget />
            </div>
          </div>
        </section>

        <section className="bg-gradient-featured">
          <FeaturedProjects />
        </section>
      </main>
    </>
  );
}
