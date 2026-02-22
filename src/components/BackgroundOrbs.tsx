"use client";

export default function BackgroundOrbs() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* ── Orb 1: Cyan Top-Left ── */}
      <div
        className="absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full opacity-20 animate-orb-1"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 229, 255, 0.4) 0%, rgba(0, 229, 255, 0) 70%)",
        }}
      />

      {/* ── Orb 2: Purple Top-Right ── */}
      <div
        className="absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full opacity-15 animate-orb-2"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0) 70%)",
        }}
      />

      {/* ── Orb 3: Mixed Center-Bottom ── */}
      <div
        className="absolute bottom-1/4 left-1/3 h-[700px] w-[700px] rounded-full opacity-10 animate-orb-3"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 229, 255, 0.3) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 70%)",
        }}
      />

      {/* ── Orb 4: Small Cyan accent ── */}
      <div
        className="absolute bottom-1/3 right-1/4 h-[300px] w-[300px] rounded-full opacity-20 animate-orb-4"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 229, 255, 0.35) 0%, transparent 70%)",
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
