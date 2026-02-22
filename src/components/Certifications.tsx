"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import GlassCard from "./GlassCard";
import { certifications } from "@/lib/data";
import { asset } from "@/lib/asset";

export default function Certifications() {
  return (
    <section id="certificaciones" className="py-20">
      {/* ── Section Title ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-[2.75rem]">
          Certificaciones y{" "}
          <span className="bg-gradient-to-r from-electric-purple to-electric-purple/80 bg-clip-text text-transparent">
            Logros Académicos
          </span>
        </h2>
      </motion.div>

      {/* ── Certificates Grid ── */}
      <div className="grid gap-6 sm:grid-cols-2">
        {certifications.map((cert, index) => (
          <GlassCard
            key={cert.id}
            className="flex flex-col gap-4 overflow-hidden p-0"
            delay={index * 0.1}
          >
            {/* PDF Embed */}
            {cert.pdfUrl && cert.pdfUrl !== "#" ? (
              <div className="relative w-full overflow-hidden rounded-t-2xl bg-slate-900" style={{ height: "320px" }}>
                <iframe
                  src={asset(cert.pdfUrl)}
                  className="h-full w-full border-0"
                  title={cert.title}
                />
              </div>
            ) : (
              <div className="flex h-48 items-center justify-center rounded-t-2xl bg-gradient-to-br from-electric-purple/10 to-slate-800/50">
                <Award className="h-16 w-16 text-electric-purple/40" />
              </div>
            )}

            {/* Content */}
            <div className="flex flex-col gap-3 p-5">
              {/* Header */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-electric-purple/20 to-electric-purple/10">
                  <Award className="h-5 w-5 text-electric-purple" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold leading-snug text-white">
                    {cert.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-electric-purple/80">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs leading-relaxed text-slate-400">
                {cert.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">{cert.date}</span>
                {cert.pdfUrl && cert.pdfUrl !== "#" && (
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-electric-purple/20"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Abrir PDF
                  </a>
                )}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
