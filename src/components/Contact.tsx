"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowUpRight,
  Heart,
} from "lucide-react";
import GlassCard from "./GlassCard";
import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission — replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 4000);
  };

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/tuusuario",
      icon: Github,
      description: "Revisa mi código",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/tuusuario",
      icon: Linkedin,
      description: "Conectemos",
    },
    {
      label: "Email",
      href: "mailto:tu@email.com",
      icon: Mail,
      description: "Escríbeme directo",
    },
  ];

  return (
    <>
      <SectionWrapper id="contacto" className="py-32">
        <div className="grid gap-16 lg:grid-cols-5 lg:gap-20">
          {/* ── Left: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <span className="mb-4 inline-block rounded-full border border-neon-cyan/20 bg-neon-cyan/5 px-4 py-1.5 text-sm font-medium text-neon-cyan">
              Contacto
            </span>

            <h2 className="section-title mt-4">
              ¿Tienes un proyecto en{" "}
              <span className="gradient-text">mente?</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              Estoy siempre abierto a nuevas oportunidades y colaboraciones
              interesantes. Hablemos sobre cómo puedo ayudarte a llevar tu idea
              al siguiente nivel.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
              <MapPin className="h-4 w-4 text-neon-cyan/60" />
              <span>Disponible para trabajo remoto global</span>
            </div>

            {/* ── Social Links ── */}
            <div className="mt-10 flex flex-col gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass glass-hover group flex items-center gap-4 rounded-xl px-5 py-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-neon-cyan/10 to-electric-purple/10 text-neon-cyan transition-colors group-hover:from-neon-cyan/20 group-hover:to-electric-purple/20">
                    <link.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-200">
                      {link.label}
                    </p>
                    <p className="text-sm text-slate-500">
                      {link.description}
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-slate-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neon-cyan" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <div className="lg:col-span-3">
            <GlassCard intense className="p-8 sm:p-10" hover={false}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-neon-cyan/10 text-neon-cyan">
                    <Send className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="mt-2 text-slate-400">
                    Te responderé lo antes posible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-slate-100 placeholder-slate-600 outline-none transition-all focus:border-neon-cyan/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-neon-cyan/20"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-slate-100 placeholder-slate-600 outline-none transition-all focus:border-neon-cyan/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-neon-cyan/20"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-slate-100 placeholder-slate-600 outline-none transition-all focus:border-neon-cyan/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-neon-cyan/20"
                      placeholder="Cuéntame sobre tu proyecto..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-glow flex w-full items-center justify-center gap-2 py-4 text-base disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Enviar mensaje
                      </>
                    )}
                  </button>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════ */}
      <footer className="relative z-10 border-t border-white/[0.05] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} DevFolio. Todos los derechos
            reservados.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-slate-600">
            Hecho con
            <Heart className="h-3.5 w-3.5 fill-red-500/60 text-red-500/60" />
            y mucho café
          </p>
        </div>
      </footer>
    </>
  );
}
