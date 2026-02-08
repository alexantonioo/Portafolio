"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import GlassCard from "./GlassCard";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20">
      {/* ── Section Title ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-[2.75rem]">
          Lo que dicen{" "}
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-electric-purple to-electric-purple/80 bg-clip-text text-transparent">
            mis clientes
          </span>
        </h2>
      </motion.div>

      {/* ── Testimonials Stack ── */}
      <div className="flex flex-col gap-4">
        {testimonials.map((testimonial, index) => (
          <GlassCard
            key={testimonial.id}
            className="relative p-6"
            delay={index * 0.12}
          >
            {/* ── Quote Icon ── */}
            <div className="absolute right-5 top-5 text-white/[0.03]">
              <Quote className="h-12 w-12" />
            </div>

            {/* ── Stars ── */}
            <div className="mb-3 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-electric-purple/80 text-electric-purple/80"
                />
              ))}
            </div>

            {/* ── Content ── */}
            <blockquote className="relative z-10 mb-5">
              <p className="text-sm leading-relaxed text-slate-300">
                &ldquo;{testimonial.content}&rdquo;
              </p>
            </blockquote>

            {/* ── Author ── */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-electric-purple/20 to-neon-cyan/10 text-xs font-bold text-electric-purple ring-1 ring-white/10">
                {testimonial.avatar}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-100">
                  {testimonial.name}
                </p>
                <p className="text-xs text-slate-500">
                  {testimonial.role} · {testimonial.company}
                </p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
