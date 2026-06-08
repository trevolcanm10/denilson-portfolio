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
        <Hero />
        <About />
        <Currently />
        <Stats />
        <Skills />
        <Experience />
        
        {/* Playground section */}
        <section className="py-20 px-4 bg-muted/20 border-y">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold">Playground Interactivo</h2>
              <p className="text-muted-foreground">
                Prueba mi modelo predictivo directamente en tu navegador. Elige equipos y ejecuta la simulación.
              </p>
            </div>
            <PredictorWidget />
          </div>
        </section>

        <FeaturedProjects />
      </main>
    </>
  );
}
