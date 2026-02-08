"use client";

import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import GlassCard from "./GlassCard";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

const philosophyItems = [
  {
    icon: Lightbulb,
    title: "Pensar antes de codificar",
    description:
      "Cada línea de código comienza con una comprensión profunda del problema. Invierto tiempo en planificación y arquitectura para evitar deuda técnica.",
  },
  {
    icon: Rocket,
    title: "Rendimiento como prioridad",
    description:
      "Optimizo cada proyecto para velocidad y escalabilidad. Desde lazy loading hasta caché inteligente, el rendimiento no es una mejora, es un requisito.",
  },
  {
    icon: Users,
    title: "El usuario es el centro",
    description:
      "Diseño interfaces intuitivas que resuelven problemas reales. La mejor tecnología es invisible para el usuario final.",
  },
  {
    icon: Code2,
    title: "Código limpio y mantenible",
    description:
      "Escribo código que otros pueden entender y mantener. Patrones sólidos, pruebas automatizadas y documentación clara.",
  },
];

export default function About() {
  return (
    <SectionWrapper id="sobre-mi" className="py-32">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        {/* ── Left: Photo + Info ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-4 inline-block rounded-full border border-neon-cyan/20 bg-neon-cyan/5 px-4 py-1.5 text-sm font-medium text-neon-cyan">
            Sobre mí
          </span>

          <h2 className="section-title mt-4">
            No solo escribo código,{" "}
            <span className="gradient-text">resuelvo problemas</span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Soy un Desarrollador Full Stack con más de 5 años de experiencia
            creando productos digitales que impactan. Me especializo en
            transformar ideas complejas en soluciones elegantes y escalables.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            Mi enfoque combina excelencia técnica con visión de producto. No me
            limito a implementar features — analizo el contexto, propongo
            mejoras y entrego soluciones que superan expectativas.
          </p>

          {/* ── Photo Area ── */}
          <div className="relative mt-10">
            <div className="glass-intense relative aspect-[4/3] overflow-hidden rounded-2xl">
              {/* Abstract art background as placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-electric-purple/10 to-neon-cyan/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-neon-cyan/20 to-electric-purple/20 text-4xl font-black text-white/80 ring-2 ring-white/10">
                    FS
                  </div>
                  <p className="text-sm text-slate-500">
                    Tu foto profesional aquí
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-neon-cyan/10 blur-3xl" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-electric-purple/10 blur-3xl" />
            </div>
          </div>
        </motion.div>

        {/* ── Right: Philosophy Cards ── */}
        <div className="flex flex-col gap-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-2 text-sm font-semibold uppercase tracking-widest text-slate-500"
          >
            Mi filosofía de desarrollo
          </motion.p>

          {philosophyItems.map((item, index) => (
            <GlassCard
              key={item.title}
              className="flex gap-5 p-6"
              delay={index * 0.1}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan/10 to-electric-purple/10 text-neon-cyan">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold text-slate-100">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
