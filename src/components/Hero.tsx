"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { stats } from "@/lib/data";

export default function Hero() {
  return (
    <section id="inicio" className="pb-20 pt-4">
      {/* ── H1 ── */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
      >
        Transformando tus{" "}
        <br className="hidden sm:block" />
        ideas en{" "}
        <span className="bg-gradient-to-r from-electric-purple to-electric-purple/80 bg-clip-text text-transparent">
          Realidad
        </span>
      </motion.h1>

      {/* ── Subtitle ── */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-6 max-w-lg text-base leading-relaxed text-slate-400"
      >
        Apasionado por crear experiencias de usuario intuitivas e
        innovadoras. Especializado en transformar ideas en productos
        digitales de alta calidad.
      </motion.p>

      {/* ── Stats Row ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-10 flex gap-10 sm:gap-14"
      >
        {stats.slice(0, 3).map((stat) => (
          <div key={stat.label}>
            <div className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              +{stat.value.replace("+", "")}
            </div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* ── CTA Buttons ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="mt-10 flex items-center gap-4"
      >
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 rounded-xl bg-electric-purple px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-electric-purple/90 hover:shadow-[0_0_24px_rgba(168,85,247,0.35)]"
        >
          <MessageCircle className="h-4 w-4" />
          Hablemos
        </a>
        <a
          href="#proyectos"
          className="group inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
        >
          Mi Trabajo
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>

      {/* ── Trust Bar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="mt-14"
      >
        <p className="mb-5 text-sm text-slate-600">
          Empresas que confían en mi trabajo
        </p>
        <div className="flex items-center gap-8 opacity-40 grayscale">
          {["Logoipsum", "TechCo", "StartupX", "DigitalY"].map((company) => (
            <div
              key={company}
              className="flex items-center gap-2 text-base font-bold text-slate-400"
            >
              <div className="h-6 w-6 rounded-full bg-slate-600" />
              {company}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
