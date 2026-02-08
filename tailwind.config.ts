import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#07070e",
        "surface-dark": "#0d0d18",
        "neon-cyan": "#00e5ff",
        "electric-purple": "#a855f7",
        "glass-border": "rgba(255, 255, 255, 0.08)",
        "glass-bg": "rgba(255, 255, 255, 0.03)",
      },
      fontFamily: {
        sans: ["Inter", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      backdropBlur: {
        glass: "16px",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.36)",
        "glass-inset":
          "inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 8px 32px rgba(0, 0, 0, 0.36)",
        glow: "0 0 20px rgba(0, 229, 255, 0.3), 0 0 60px rgba(0, 229, 255, 0.1)",
        "glow-purple":
          "0 0 20px rgba(168, 85, 247, 0.3), 0 0 60px rgba(168, 85, 247, 0.1)",
      },
      animation: {
        "orb-float": "orbFloat 20s ease-in-out infinite",
        "orb-float-reverse": "orbFloatReverse 25s ease-in-out infinite",
        "orb-float-slow": "orbFloatSlow 30s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marqueeReverse 40s linear infinite",
      },
      keyframes: {
        orbFloat: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(100px, -50px) scale(1.1)" },
          "50%": { transform: "translate(-50px, 100px) scale(0.9)" },
          "75%": { transform: "translate(80px, 50px) scale(1.05)" },
        },
        orbFloatReverse: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(-80px, 60px) scale(0.95)" },
          "50%": { transform: "translate(60px, -80px) scale(1.1)" },
          "75%": { transform: "translate(-40px, -40px) scale(1)" },
        },
        orbFloatSlow: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(60px, 80px) scale(1.05)" },
          "66%": { transform: "translate(-70px, -30px) scale(0.95)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
