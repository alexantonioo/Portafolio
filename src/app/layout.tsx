import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex | Desarrollador Full Stack",
  description:
    "Portafolio de un Desarrollador Full Stack especializado en construir experiencias digitales escalables con React, Node.js, Python y tecnologías cloud.",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-background text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
