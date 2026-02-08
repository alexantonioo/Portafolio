"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative z-10 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

/* ── Section Header ── */
interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleAccent?: string;
  description?: string;
}

export function SectionHeader({
  badge,
  title,
  titleAccent,
  description,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-16 text-center"
    >
      {badge && (
        <span className="mb-4 inline-block rounded-full border border-neon-cyan/20 bg-neon-cyan/5 px-4 py-1.5 text-sm font-medium text-neon-cyan">
          {badge}
        </span>
      )}
      <h2 className="section-title mt-4">
        {title}{" "}
        {titleAccent && <span className="gradient-text">{titleAccent}</span>}
      </h2>
      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}
