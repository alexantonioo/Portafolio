"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { stats } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl text-center">
        {/* ── Badge ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 px-5 py-2 text-sm text-neon-cyan"
        >
          <Sparkles className="h-4 w-4" />
          <span>Disponible para nuevos proyectos</span>
        </motion.div>

        {/* ── H1 ── */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-5xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Construyendo{" "}
          <span className="gradient-text">experiencias digitales</span>{" "}
          escalables
        </motion.h1>

        {/* ── Subtitle ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl"
        >
          Desarrollador Full Stack especializado en crear productos digitales
          robustos, performantes y con experiencias de usuario excepcionales.
        </motion.p>

        {/* ── CTA Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#proyectos"
            className="btn-glow group inline-flex items-center gap-2 text-base"
          >
            Ver Proyectos
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contacto"
            className="btn-outline inline-flex items-center gap-2 text-base"
          >
            <MessageCircle className="h-4 w-4" />
            Hablemos
          </a>
        </motion.div>

        {/* ── Trust Indicator ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 text-sm font-medium text-slate-500"
        >
          Más de 5 años creando soluciones para{" "}
          <span className="text-slate-300">Startups</span>,{" "}
          <span className="text-slate-300">SaaS</span> y{" "}
          <span className="text-slate-300">Empresas</span>
        </motion.p>

        {/* ── Stats Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass rounded-xl px-4 py-5 text-center"
            >
              <div className="text-2xl font-bold text-neon-cyan sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-slate-700 p-1"
          >
            <motion.div className="h-2 w-1 rounded-full bg-neon-cyan" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
