"use client";

import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { techStack } from "@/lib/data";

/* ── Compact icon representations for each tech ── */
const techLogos: Record<string, { emoji: string; bg: string }> = {
  React: { emoji: "⚛️", bg: "from-cyan-500/20 to-cyan-600/10" },
  "Next.js": { emoji: "▲", bg: "from-white/10 to-white/5" },
  TypeScript: { emoji: "TS", bg: "from-blue-500/20 to-blue-600/10" },
  "Tailwind CSS": { emoji: "🎨", bg: "from-cyan-400/20 to-cyan-500/10" },
  "Node.js": { emoji: "⬢", bg: "from-green-500/20 to-green-600/10" },
  Python: { emoji: "🐍", bg: "from-yellow-500/20 to-blue-500/10" },
  PostgreSQL: { emoji: "🐘", bg: "from-blue-400/20 to-blue-500/10" },
  MongoDB: { emoji: "🍃", bg: "from-green-500/20 to-green-600/10" },
  AWS: { emoji: "☁️", bg: "from-orange-500/20 to-orange-600/10" },
  Docker: { emoji: "🐳", bg: "from-blue-500/20 to-blue-600/10" },
  GraphQL: { emoji: "◈", bg: "from-pink-500/20 to-pink-600/10" },
  Redis: { emoji: "⚡", bg: "from-red-500/20 to-red-600/10" },
  Git: { emoji: "🔀", bg: "from-orange-500/20 to-red-500/10" },
  Figma: { emoji: "🎯", bg: "from-purple-500/20 to-pink-500/10" },
  Linux: { emoji: "🐧", bg: "from-yellow-400/20 to-yellow-500/10" },
  Kubernetes: { emoji: "☸️", bg: "from-blue-500/20 to-blue-600/10" },
};

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  cloud: "Cloud & DevOps",
  tools: "Herramientas",
};

export default function TechStack() {
  return (
    <section id="stack" className="py-20">
      {/* ── Section Title ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-[2.75rem]">
          Herramientas de{" "}
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-electric-purple to-electric-purple/80 bg-clip-text text-transparent">
            Alto Nivel
          </span>{" "}
          para Resultados Excepcionales
        </h2>
      </motion.div>

      {/* ── Tech Cards Grid (2-column, like reference) ── */}
      <div className="grid gap-3 sm:grid-cols-2">
        {techStack.map((tech, index) => {
          const logo = techLogos[tech.name] || {
            emoji: tech.icon,
            bg: "from-slate-500/20 to-slate-600/10",
          };
          return (
            <GlassCard
              key={tech.name}
              className="flex items-center gap-4 px-5 py-4"
              delay={index * 0.04}
            >
              {/* Icon */}
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${logo.bg} text-lg`}
              >
                {logo.emoji}
              </div>
              {/* Info */}
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-white">{tech.name}</h3>
                <p className="text-xs text-slate-500">
                  {categoryLabels[tech.category]}
                </p>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
