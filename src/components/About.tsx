"use client";

import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import GlassCard from "./GlassCard";

const philosophyItems = [
  {
    icon: Lightbulb,
    title: "Pensar antes de codificar",
    description:
      "Cada línea de código comienza con una comprensión profunda del problema. Invierto tiempo en planificación y arquitectura.",
  },
  {
    icon: Rocket,
    title: "Rendimiento como prioridad",
    description:
      "Optimizo cada proyecto para velocidad y escalabilidad. Desde lazy loading hasta caché inteligente.",
  },
  {
    icon: Users,
    title: "El usuario es el centro",
    description:
      "Diseño interfaces intuitivas que resuelven problemas reales. La mejor tecnología es invisible para el usuario.",
  },
  {
    icon: Code2,
    title: "Código limpio y mantenible",
    description:
      "Escribo código que otros pueden entender. Patrones sólidos, pruebas automatizadas y documentación clara.",
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-20">
      {/* ── Section Title ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-[2.75rem]">
          No solo escribo código,{" "}
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-electric-purple to-electric-purple/80 bg-clip-text text-transparent">
            resuelvo problemas
          </span>
        </h2>
      </motion.div>

      {/* ── Bio Text ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-10 max-w-2xl"
      >
        <p className="text-base leading-relaxed text-slate-400">
         Soy un Desarrollador Full Stack apasionado por crear productos digitales 
         que generen impacto. Me especializo en transformar ideas complejas en 
         soluciones elegantes, robustas y escalables, combinando excelencia técnica 
         con una fuerte visión de producto para resolver problemas reales.
        </p>
      </motion.div>

      {/* ── Philosophy Cards Grid ── */}
      <div className="grid gap-4 sm:grid-cols-2">
        {philosophyItems.map((item, index) => (
          <GlassCard
            key={item.title}
            className="flex gap-4 p-5"
            delay={index * 0.1}
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-electric-purple/15 to-neon-cyan/10 text-electric-purple">
              <item.icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h3 className="mb-1 text-sm font-bold text-slate-100">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-500">
                {item.description}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
