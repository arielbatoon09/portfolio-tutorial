import { Contact } from "@/components/features/home/Contact";
import { Hero } from "@/components/features/home/Hero";
import { Projects } from "@/components/features/home/Projects";
import { Skills } from "@/components/features/home/Skills";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
