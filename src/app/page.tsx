import BackgroundOrbs from "@/components/BackgroundOrbs";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* ── Animated Background Orbs ── */}
      <BackgroundOrbs />

      {/* ── Navigation ── */}
      <Navbar />

      {/* ── Main Content ── */}
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <About />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
