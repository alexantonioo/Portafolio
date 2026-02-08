import BackgroundOrbs from "@/components/BackgroundOrbs";
import Navbar from "@/components/Navbar";
import ProfileSidebar from "@/components/ProfileSidebar";
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

      {/* ── Centered Icon Navbar ── */}
      <Navbar />

      {/* ══════════════════════════════════════════════
          TWO-COLUMN LAYOUT
          Left: Sticky Profile Sidebar
          Right: Scrollable Content Sections
      ══════════════════════════════════════════════ */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-4 pt-24 sm:px-6 lg:flex-row lg:gap-10 lg:px-8">
        {/* ── Left: Profile Sidebar (sticky on desktop, static on mobile) ── */}
        <div className="w-full shrink-0 lg:w-[340px] xl:w-[380px]">
          <ProfileSidebar />
        </div>

        {/* ── Right: Main Content Area ── */}
        <main className="min-w-0 flex-1 pb-16">
          <Hero />
          <Projects />
          <TechStack />
          <About />
          <Testimonials />
          <Contact />
        </main>
      </div>
    </>
  );
}
