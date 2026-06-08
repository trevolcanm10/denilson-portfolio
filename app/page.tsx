import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Currently } from "@/sections/currently";
import { Stats } from "@/sections/stats";
import { Skills } from "@/sections/skills";
import { Experience } from "@/sections/experience";
import { FeaturedProjects } from "@/sections/featured-projects";

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
        <FeaturedProjects />
      </main>
    </>
  );
}
