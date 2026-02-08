"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Home,
  FolderOpen,
  Wrench,
  User,
  Mail,
} from "lucide-react";

const navItems = [
  { icon: Home, href: "#inicio", label: "Inicio", id: "inicio" },
  { icon: FolderOpen, href: "#proyectos", label: "Proyectos", id: "proyectos" },
  { icon: Wrench, href: "#stack", label: "Stack", id: "stack" },
  { icon: User, href: "#sobre-mi", label: "Sobre mí", id: "sobre-mi" },
  { icon: Mail, href: "#contacto", label: "Contacto", id: "contacto" },
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
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-1/2 top-5 z-50 -translate-x-1/2"
      role="navigation"
      aria-label="Navegación principal"
    >
      <div
        className="flex items-center gap-1 rounded-2xl border border-white/[0.08] bg-[#0d0d18]/80 px-2.5 py-2.5 backdrop-blur-xl"
        style={{
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
        }}
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
                  layoutId="navPill"
                  className="absolute inset-0 rounded-xl bg-electric-purple"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
              <item.icon className="relative z-10 h-[18px] w-[18px]" />
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
