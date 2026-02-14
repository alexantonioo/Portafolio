"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="pb-12 pt-4">
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-6 max-w-lg rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 backdrop-blur-[10px]"
      >
        <p className="text-base leading-relaxed text-slate-300">
          Apasionado por construir tecnología que resuelve necesidades reales. Me especializo en transformar conceptos complejos en soluciones innovadoras, creando productos digitales que destacan por su funcionalidad y calidad.
        </p>
      </motion.div>

      {/* ── CTA Buttons ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-10 flex items-center gap-4"
      >
        <a
          href="https://wa.me/584126759194"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-600 hover:shadow-[0_0_24px_rgba(34,197,94,0.35)]"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <a
          href="#proyectos"
          className="group inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
        >
          Mi Trabajo
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </section>
  );
}
