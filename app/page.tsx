import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/sections/hero";
import { Skills } from "@/sections/skills";
import { FeaturedProjects } from "@/sections/featured-projects";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Skills />
        <FeaturedProjects />
      </main>
    </>
  );
}