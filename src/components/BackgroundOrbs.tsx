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

      {/* ── Orb 3: Mixed Center-Bottom (desktop only) ── */}
      <div
        className="hidden sm:block absolute bottom-1/4 left-1/3 h-[700px] w-[700px] rounded-full opacity-10 animate-orb-3"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 229, 255, 0.3) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 70%)",
        }}
      />

      {/* ── Orb 4: Small Cyan accent (desktop only) ── */}
      <div
        className="hidden sm:block absolute bottom-1/3 right-1/4 h-[300px] w-[300px] rounded-full opacity-20 animate-orb-4"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 229, 255, 0.35) 0%, transparent 70%)",
        }}
      />


    </div>
  );
}
