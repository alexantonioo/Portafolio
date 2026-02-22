import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
 //
export const metadata: Metadata = {
  title: "Alex | Desarrollador Full Stack",
  description:
    "Portafolio de un Desarrollador Full Stack especializado en construir experiencias digitales escalables con React, Node.js, Python y tecnologías cloud.",
  icons: {
    icon: "/favicon.svg",
  },
  keywords: [
    "Desarrollador Full Stack",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "AWS",
    "Portafolio",
  ],
  authors: [{ name: "Alex" }],
  openGraph: {
    title: "Alex | Desarrollador Full Stack",
    description:
      "Construyendo experiencias digitales escalables. Portafolio profesional.",
    type: "website",
    locale: "es_ES",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head />
      <body className={`${inter.variable} bg-background text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
