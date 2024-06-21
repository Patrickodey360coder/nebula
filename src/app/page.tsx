import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Projects from "./components/projects";
import TechStack from "./components/tech-stack";

export default function Home() {
  return (
    <main>
      <Hero />
      <TechStack />
      {/* <Projects />
      <Contact />
   */}
       <Footer />
    </main>
  );
}
