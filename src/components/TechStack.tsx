"use client";

import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { techStack } from "@/lib/data";
import { 
  SiCplusplus,
  SiPython,
  SiTensorflow,
  SiJavascript,
  SiTypescript,
  SiAstro,
  SiDotnet,
  SiFastapi,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiPostgresql,
  SiSupabase,
} from "react-icons/si";
import { TbSql, TbBrandCSharp, TbChartBar } from "react-icons/tb";
import { GiPanda } from "react-icons/gi";
import { MdWindow } from "react-icons/md";

/* ── Icon mapping for technologies ── */
const iconMap: Record<string, React.ElementType> = {
  "csharp": TbBrandCSharp,
  "cplusplus": SiCplusplus,
  "python": SiPython,
  "panda": GiPanda,
  "matplotlib": TbChartBar,
  "tensorflow": SiTensorflow,
  "javascript": SiJavascript,
  "typescript": SiTypescript,
  "astro": SiAstro,
  "dotnet": SiDotnet,
  "wpf": MdWindow,
  "fastapi": SiFastapi,
  "nextjs": SiNextdotjs,
  "react": SiReact,
  "tailwind": SiTailwindcss,
  "postgresql": SiPostgresql,
  "sql": TbSql,
  "supabase": SiSupabase,
};

const techLogos: Record<string, { bg: string }> = {
  "C#": { bg: "from-purple-500/20 to-purple-600/10" },
  "C++": { bg: "from-blue-500/20 to-blue-600/10" },
  Python: { bg: "from-yellow-500/20 to-blue-500/10" },
  Pandas: { bg: "from-slate-400/20 to-slate-500/10" },
  Matplotlib: { bg: "from-sky-500/20 to-sky-600/10" },
  TensorFlow: { bg: "from-orange-500/20 to-orange-600/10" },
  "JavaScript/TypeScript": { bg: "from-yellow-400/20 to-blue-500/10" },
  Astro: { bg: "from-orange-500/20 to-pink-500/10" },
  ".NET": { bg: "from-purple-500/20 to-blue-600/10" },
  WPF: { bg: "from-blue-500/20 to-blue-600/10" },
  FastAPI: { bg: "from-teal-500/20 to-teal-600/10" },
  "Next.js": { bg: "from-white/10 to-white/5" },
  React: { bg: "from-cyan-500/20 to-cyan-600/10" },
  "Tailwind CSS": { bg: "from-cyan-400/20 to-cyan-500/10" },
  PostgreSQL: { bg: "from-blue-400/20 to-blue-500/10" },
  SQL: { bg: "from-orange-400/20 to-orange-500/10" },
  Supabase: { bg: "from-green-400/20 to-green-500/10" },
};

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  cloud: "Cloud & DevOps",
  tools: "Herramientas",
  data: "Analisis de datos",
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
            bg: "from-slate-500/20 to-slate-600/10",
          };
          const IconComponent = iconMap[tech.icon] || SiReact;
          return (
            <GlassCard
              key={tech.name}
              className="flex items-center gap-4 px-5 py-4"
              delay={index * 0.02}
            >
              {/* Icon */}
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${logo.bg}`}
                style={{ color: tech.color }}
              >
                <IconComponent className="h-6 w-6" />
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
