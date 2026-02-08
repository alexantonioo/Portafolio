"use client";

import { motion } from "framer-motion";

export default function BackgroundOrbs() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* ── Orb 1: Cyan Top-Left ── */}
      <motion.div
        className="absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 229, 255, 0.4) 0%, rgba(0, 229, 255, 0) 70%)",
        }}
        animate={{
          x: [0, 100, -50, 80, 0],
          y: [0, -50, 100, 50, 0],
          scale: [1, 1.1, 0.9, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ── Orb 2: Purple Top-Right ── */}
      <motion.div
        className="absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0) 70%)",
        }}
        animate={{
          x: [0, -80, 60, -40, 0],
          y: [0, 60, -80, -40, 0],
          scale: [1, 0.95, 1.1, 1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ── Orb 3: Mixed Center-Bottom ── */}
      <motion.div
        className="absolute bottom-1/4 left-1/3 h-[700px] w-[700px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 229, 255, 0.3) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 70%)",
        }}
        animate={{
          x: [0, 60, -70, 30, 0],
          y: [0, 80, -30, 60, 0],
          scale: [1, 1.05, 0.95, 1.02, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ── Orb 4: Small Cyan accent ── */}
      <motion.div
        className="absolute bottom-1/3 right-1/4 h-[300px] w-[300px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 229, 255, 0.35) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -40, 50, -20, 0],
          y: [0, -60, 40, -30, 0],
          scale: [1, 1.15, 0.9, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ── Subtle noise overlay for texture ── */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
