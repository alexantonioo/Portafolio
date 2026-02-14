"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import GlassCard from "./GlassCard";
import { projects } from "@/lib/data";
import { useState } from "react";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="proyectos" className="pb-20 pt-8">
      {/* ── Section Title ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-[2.75rem]">
          Proyectos y{" "}
          <span className="bg-gradient-to-r from-electric-purple to-electric-purple/80 bg-clip-text text-transparent">
            Logros
          </span>
        </h2>
      </motion.div>

      {/* ── 2-Column Grid ── */}
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, index) => (
          <GlassCard
            key={project.id}
            className="group overflow-hidden"
            delay={index * 0.1}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* ── Project Image ── */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
                role="img"
                aria-label={`Captura del proyecto ${project.title}`}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Description overlay on hover */}
              <AnimatePresence>
                {hoveredProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
                  >
                    <p className="text-center text-sm leading-relaxed text-white/90">
                      {project.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action icons (visible on hover) */}
              <div className="absolute right-3 top-3 flex gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-electric-purple/90 text-white backdrop-blur-sm transition-transform hover:scale-110"
                  aria-label={`Ver demo de ${project.title}`}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white backdrop-blur-sm transition-transform hover:scale-110"
                  aria-label={`Ver código de ${project.title}`}
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* ── Content ── */}
            <div className="p-5">
              <h3 className="text-lg font-bold tracking-tight text-white">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                {project.technologies.join(" · ")}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
