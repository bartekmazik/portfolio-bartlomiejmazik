import About from "./homepage/About";
import Contact from "./homepage/Contact";
import Hero from "./homepage/Hero";
import Projects from "./homepage/Projects";
import TechStack from "./homepage/TechStack";
import WorkingWithMe from "./homepage/WorkingWithMe";

export default function Home() {
  return (
    <div className="min-h-screen scroll-smooth  ">
      <Hero />

      <About />

      <TechStack />

      <Projects />

      <WorkingWithMe />

      <Contact />
    </div>
  );
}
