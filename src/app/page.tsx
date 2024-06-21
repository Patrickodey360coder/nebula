import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Projects from "./components/projects";
import TechStack from "./components/tech-stack";
import About from "./components/about";

export default function Home() {
  return (
    <main>
      <Hero />
      <TechStack />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
