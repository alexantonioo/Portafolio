"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import GlassCard from "./GlassCard";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <SectionWrapper id="proyectos" className="py-32">
      <SectionHeader
        badge="Portafolio"
        title="Proyectos"
        titleAccent="Destacados"
        description="Una selección de mis trabajos más recientes donde combino diseño, rendimiento y arquitectura escalable."
      />

      {/* ── Bento Grid ── */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <GlassCard
            key={project.id}
            intense
            className={`group overflow-hidden ${
              index < 2 ? "lg:col-span-1 lg:row-span-1" : ""
            } ${index === 0 ? "md:col-span-2 lg:col-span-2" : ""}`}
            delay={index * 0.1}
          >
            {/* ── Project Image ── */}
            <div className="relative aspect-video overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
                role="img"
                aria-label={`Captura del proyecto ${project.title}`}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07070e] via-[#07070e]/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

              {/* ── Action Buttons (overlay) ── */}
              <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-neon-cyan/90 text-black transition-transform hover:scale-110"
                  aria-label={`Ver demo de ${project.title}`}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm transition-transform hover:scale-110"
                  aria-label={`Ver código de ${project.title}`}
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>

              {/* Featured badge */}
              {project.featured && (
                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-neon-cyan/10 px-3 py-1 text-xs font-medium text-neon-cyan backdrop-blur-sm">
                    Destacado
                  </span>
                </div>
              )}
            </div>

            {/* ── Content ── */}
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold tracking-tight text-slate-100 transition-colors group-hover:text-neon-cyan">
                {project.title}
              </h3>
              <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              {/* ── Tech Tags ── */}
              <div className="mb-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag-pill">
                    {tech}
                  </span>
                ))}
              </div>

              {/* ── Bottom Buttons ── */}
              <div className="flex gap-3">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow flex items-center gap-2 px-4 py-2 text-sm"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Demo en vivo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex items-center gap-2 px-4 py-2 text-sm"
                >
                  <Github className="h-3.5 w-3.5" />
                  Código
                </a>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
