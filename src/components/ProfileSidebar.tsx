"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Instagram,
  MessageCircle,
  Download,
} from "lucide-react";

export default function ProfileSidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-8 flex h-fit flex-col items-center rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-xl lg:p-8"
      style={{
        boxShadow:
          "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.04)",
      }}
    >
      {/* ── Profile Photo ── */}
      <div className="relative mb-6 w-full">
        <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl">
          {/* Purple gradient overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-electric-purple/30 via-transparent to-electric-purple/10" />
          <div className="absolute -left-6 -top-6 z-0 h-32 w-32 rounded-full bg-electric-purple/30 blur-3xl" />
          <div className="absolute -bottom-4 -right-4 z-0 h-24 w-24 rounded-full bg-neon-cyan/20 blur-3xl" />

          {/* Photo placeholder — replace src with your actual photo */}
          <div className="relative z-[1] flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-electric-purple/40 to-neon-cyan/20 text-4xl font-black text-white/70 ring-2 ring-white/10">
              FS
            </div>
          </div>

          {/* Inner border for glass effect */}
          <div className="pointer-events-none absolute inset-0 z-20 rounded-2xl border border-white/[0.08]" />
        </div>
      </div>

      {/* ── Name ── */}
      <h2 className="text-center text-2xl font-bold tracking-tight text-white lg:text-[1.65rem]">
        Tu Nombre
      </h2>

      {/* ── Role ── */}
      <p className="mt-1.5 text-center text-sm font-medium text-slate-400">
        Full Stack Developer
      </p>

      {/* ── Location ── */}
      <p className="mt-0.5 text-center text-sm text-slate-500">
        Tu Ciudad, País
      </p>

      {/* ── Social Icons ── */}
      <div className="mt-6 flex items-center gap-3">
        {[
          { icon: Github, href: "https://github.com/tuusuario", label: "GitHub" },
          { icon: Linkedin, href: "https://linkedin.com/in/tuusuario", label: "LinkedIn" },
          { icon: Twitter, href: "https://twitter.com/tuusuario", label: "Twitter" },
          { icon: Instagram, href: "https://instagram.com/tuusuario", label: "Instagram" },
          { icon: Mail, href: "mailto:tu@email.com", label: "Email" },
        ].map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.06] text-slate-400 transition-all duration-200 hover:border-electric-purple/40 hover:bg-electric-purple/10 hover:text-electric-purple"
          >
            <social.icon className="h-[18px] w-[18px]" />
          </a>
        ))}
      </div>

      {/* ── CTA Button ── */}
      <a
        href="#contacto"
        className="group mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-electric-purple px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-electric-purple/90 hover:shadow-[0_0_24px_rgba(168,85,247,0.35)]"
      >
        <MessageCircle className="h-4 w-4" />
        Hablemos
      </a>

      {/* ── Download CV (secondary) ── */}
      <a
        href="/cv.pdf"
        download
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.08] px-6 py-3 text-sm font-medium text-slate-400 transition-all duration-200 hover:border-white/[0.15] hover:bg-white/[0.03] hover:text-white"
      >
        <Download className="h-4 w-4" />
        Descargar CV
      </a>
    </motion.aside>
  );
}
