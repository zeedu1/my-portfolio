import Image from "next/image";
import About from "./about/about";
import Contact from "./contact/contact";
import Projects from "./projects/projects";
import Hero from "@/components/hero/hero";
export default function Home() {
  return (
    <div>
      <main >
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
