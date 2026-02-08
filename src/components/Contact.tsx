"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Heart } from "lucide-react";
import GlassCard from "./GlassCard";

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

  return (
    <section id="contacto" className="py-20">
      {/* ── Section Title ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-[2.75rem]">
          ¿Tienes un proyecto en{" "}
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-electric-purple to-electric-purple/80 bg-clip-text text-transparent">
            mente?
          </span>
        </h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-400">
          Estoy siempre abierto a nuevas oportunidades y colaboraciones.
          Hablemos sobre cómo puedo ayudarte a llevar tu idea al siguiente
          nivel.
        </p>
      </motion.div>

      {/* ── Contact Form ── */}
      <GlassCard intense className="p-6 sm:p-8" hover={false}>
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-electric-purple/10 text-electric-purple">
              <Send className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-100">
              ¡Mensaje enviado!
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Te responderé lo antes posible.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-slate-300"
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
                className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none transition-all focus:border-electric-purple/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-electric-purple/20"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-slate-300"
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
                className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none transition-all focus:border-electric-purple/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-electric-purple/20"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-slate-300"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none transition-all focus:border-electric-purple/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-electric-purple/20"
                placeholder="Cuéntame sobre tu proyecto..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-electric-purple px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-electric-purple/90 hover:shadow-[0_0_24px_rgba(168,85,247,0.35)] disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Enviar mensaje
                </>
              )}
            </button>
          </form>
        )}
      </GlassCard>

      {/* ── Footer ── */}
      <div className="mt-16 border-t border-white/[0.05] pt-6">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} DevFolio. Todos los derechos
            reservados.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-slate-600">
            Hecho con
            <Heart className="h-3 w-3 fill-red-500/60 text-red-500/60" />
            y mucho café
          </p>
        </div>
      </div>
    </section>
  );
}
