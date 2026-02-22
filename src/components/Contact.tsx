"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle, QrCode } from "lucide-react";
import GlassCard from "./GlassCard";
import Image from "next/image";
import { asset } from "@/lib/asset";

export default function Contact() {
  // Reemplaza con tu número de WhatsApp en formato internacional (ejemplo: 51912345678)
  const whatsappNumber = "584126759194"; // Cambia esto por tu número
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

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
          Para una comunicación más directa y personal 1 a 1, puedes escribirme
          a mi WhatsApp. Respondo rápido y con gusto conversaré sobre tu
          proyecto.
        </p>
      </motion.div>

      {/* ── WhatsApp Section ── */}
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Contact Card */}
        <GlassCard intense className="flex flex-col items-center p-8 text-center" hover={false}>
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/10">
            <MessageCircle className="h-8 w-8 text-green-400" />
          </div>
          <h3 className="mb-2 text-lg font-bold text-slate-100">
            Chatea conmigo
          </h3>
          <p className="mb-auto text-sm text-slate-400">
            Conversemos sobre tu proyecto directamente por WhatsApp
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-600 hover:shadow-[0_0_24px_rgba(34,197,94,0.35)]"
          >
            <MessageCircle className="h-4 w-4" />
            Abrir WhatsApp
          </a>
        </GlassCard>

        {/* QR Code Card */}
        <GlassCard intense className="flex flex-col items-center p-8" hover={false}>
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-electric-purple/20 to-neon-cyan/10">
            <QrCode className="h-8 w-8 text-electric-purple" />
          </div>
          <h3 className="mb-2 text-lg font-bold text-slate-100">
            Escanea el QR
          </h3>
          <p className="mb-auto text-sm text-slate-400">
            Usa la cámara de tu móvil para conectar al instante
          </p>
          <div className="relative mt-6 h-48 w-48 overflow-hidden rounded-xl bg-white p-3">
            {/* Placeholder para el QR - Coloca tu QR en public/whatsapp-qr.png */}
            <Image
              src={asset("/whatsapp-qr.png")}
              alt="WhatsApp QR Code"
              fill
              className="object-contain"
            />
          </div>
        </GlassCard>
      </div>

      {/* ── Footer ── */}
      <div className="mt-16 border-t border-white/[0.05] pt-6">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Todos los derechos
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
