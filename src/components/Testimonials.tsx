"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import GlassCard from "./GlassCard";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonios" className="py-32">
      <SectionHeader
        badge="Testimonios"
        title="Lo que dicen"
        titleAccent="mis clientes"
        description="La satisfacción de quienes confían en mi trabajo es mi mejor carta de presentación."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <GlassCard
            key={testimonial.id}
            className="relative p-8"
            delay={index * 0.15}
          >
            {/* ── Quote Icon ── */}
            <div className="absolute right-6 top-6 text-white/[0.04]">
              <Quote className="h-16 w-16" />
            </div>

            {/* ── Stars ── */}
            <div className="mb-4 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-neon-cyan/80 text-neon-cyan/80"
                />
              ))}
            </div>

            {/* ── Content ── */}
            <blockquote className="relative z-10 mb-6">
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                &ldquo;{testimonial.content}&rdquo;
              </p>
            </blockquote>

            {/* ── Author ── */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-neon-cyan/20 to-electric-purple/20 text-sm font-bold text-neon-cyan ring-2 ring-white/10">
                {testimonial.avatar}
              </div>
              <div>
                <p className="font-semibold text-slate-100">
                  {testimonial.name}
                </p>
                <p className="text-sm text-slate-500">
                  {testimonial.role} en{" "}
                  <span className="text-neon-cyan/70">
                    {testimonial.company}
                  </span>
                </p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
