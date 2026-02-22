"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Home,
  FolderOpen,
  Wrench,
  User,
  Mail,
  Award,
} from "lucide-react";

const navItems = [
  { icon: Home, href: "#inicio", label: "Inicio", short: "Inicio", id: "inicio" },
  { icon: FolderOpen, href: "#proyectos", label: "Proyectos", short: "Proyectos", id: "proyectos" },
  { icon: Wrench, href: "#stack", label: "Stack", short: "Stack", id: "stack" },
  { icon: User, href: "#sobre-mi", label: "Sobre mí", short: "Bio", id: "sobre-mi" },
  { icon: Award, href: "#certificaciones", label: "Certificaciones", short: "Certs", id: "certificaciones" },
  { icon: Mail, href: "#contacto", label: "Contacto", short: "Contacto", id: "contacto" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Desktop: top centered pill ── */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-1/2 top-5 z-50 -translate-x-1/2 hidden sm:block"
        role="navigation"
        aria-label="Navegación principal"
      >
        <div
          className="flex items-center gap-1 rounded-2xl border border-white/[0.08] bg-[#0d0d18]/80 px-2.5 py-2.5 backdrop-blur-xl"
          style={{ boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)" }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                aria-label={item.label}
                title={item.label}
                className={`relative flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-slate-500 hover:bg-white/[0.04] hover:text-slate-300"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navPillDesktop"
                    className="absolute inset-0 rounded-xl bg-electric-purple"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <item.icon className="relative z-10 h-[18px] w-[18px]" />
              </a>
            );
          })}
        </div>
      </motion.nav>

      {/* ── Mobile: bottom navigation bar ── */}
      <motion.nav
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-0 left-0 right-0 z-50 sm:hidden"
        role="navigation"
        aria-label="Navegación principal"
      >
        <div
          className="flex items-center justify-around border-t border-white/[0.08] bg-[#0d0d18]/95 px-2 py-2 backdrop-blur-xl"
          style={{ paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))" }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                aria-label={item.label}
                className={`relative flex flex-col items-center gap-1 rounded-xl px-3 py-2 transition-all duration-200 ${
                  isActive ? "text-electric-purple" : "text-slate-500"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navPillMobile"
                    className="absolute inset-0 rounded-xl bg-electric-purple/10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <item.icon className="relative z-10 h-5 w-5" />
                <span className="relative z-10 text-[10px] font-medium leading-none">
                  {item.short}
                </span>
              </a>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
}
