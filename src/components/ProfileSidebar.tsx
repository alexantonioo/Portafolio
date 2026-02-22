"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Download,
} from "lucide-react";
import { asset } from "@/lib/asset";

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
          <Image
            src={asset("/profile.png")}
            alt="Alex Contreras"
            fill
            className="relative z-[1] object-cover"
            priority
          />

          {/* Inner border for glass effect */}
          <div className="pointer-events-none absolute inset-0 z-20 rounded-2xl border border-white/[0.08]" />
        </div>
      </div>

      {/* ── Name ── */}
      <h2 className="text-center text-2xl font-bold tracking-tight text-white lg:text-[1.65rem]">
        Alex Contreras
      </h2>

      {/* ── Role ── */}
      <p className="mt-1.5 text-center text-sm font-medium text-slate-400">
        Desarrollador de Software
      </p>

      {/* ── Location ── */}
      <p className="mt-0.5 text-center text-sm text-slate-500">
        Estudiante de Ingeniería de Sistemas
      </p>

      {/* ── Social Icons ── */}
      <div className="mt-6 flex items-center gap-3">
        {[
          { icon: Github, href: "https://github.com/alexantonioo", label: "GitHub" },
          { icon: Linkedin, href: "https://linkedin.com/in/alex-antonio-contreras-pereira-b02aa6352", label: "LinkedIn" },
          { icon: Mail, href: "mailto:alexantonio1225@gmail.com", label: "Email" },
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
        href="https://wa.me/584126759194"
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-600 hover:shadow-[0_0_24px_rgba(34,197,94,0.35)]"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
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
