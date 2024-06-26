import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Projects from "./components/projects";
import TechStack from "./components/tech-stack";
import About from "./components/about";
import Nav from "./components/nav";

export default async function Home() {
  return (
    <main className="overflow-hidden">
      <Nav/>
      <Hero />
      <TechStack />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

