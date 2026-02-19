import { Contact } from "@/components/content/home/Contact";
import { Hero } from "@/components/content/home/Hero";
import { Projects } from "@/components/content/home/Projects";
import { Skills } from "@/components/content/home/Skills";

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
