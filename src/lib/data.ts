import {
  Code2,
  Database,
  Cloud,
  Smartphone,
  Globe,
  GitBranch,
  Terminal,
  Layers,
  Cpu,
  Palette,
  Server,
  Shield,
} from "lucide-react";

/* ── Navigation Links ── */
export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Stack", href: "#stack" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Certificaciones", href: "#certificaciones" },
  { label: "Contacto", href: "#contacto" },
];

/* ── Tech Stack ── */
export interface TechItem {
  name: string;
  icon: string; // SVG path or emoji placeholder
  color: string;
  category: "frontend" | "backend" | "cloud" | "tools" | "data";
}

export const techStack: TechItem[] = [
  { name: "C#", icon: "csharp", color: "#512BD4", category: "backend" },
  { name: "C++", icon: "cplusplus", color: "#00599C", category: "backend" },
  { name: "Python", icon: "python", color: "#3776AB", category: "backend" },
  { name: "JavaScript/TypeScript", icon: "typescript", color: "#3178C6", category: "frontend" },
  { name: "Astro", icon: "astro", color: "#FF5D01", category: "frontend" },
  { name: ".NET", icon: "dotnet", color: "#512BD4", category: "backend" },
  { name: "WPF", icon: "wpf", color: "#0078D4", category: "frontend" },
  { name: "FastAPI", icon: "fastapi", color: "#009688", category: "backend" },
  { name: "Next.js", icon: "nextjs", color: "#ffffff", category: "frontend" },
  { name: "React", icon: "react", color: "#61DAFB", category: "frontend" },
  { name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4", category: "frontend" },
  { name: "PostgreSQL", icon: "postgresql", color: "#336791", category: "backend" },
  { name: "SQL", icon: "sql", color: "#CC2927", category: "backend" },
  { name: "Supabase", icon: "supabase", color: "#3ECF8E", category: "cloud" },
  { name: "Pandas", icon: "panda", color: "#F8FAFC", category: "data" },
  { name: "Matplotlib", icon: "matplotlib", color: "#11557C", category: "data" },
  { name: "TensorFlow", icon: "tensorflow", color: "#FF6F00", category: "data" },
];

/* ── Projects ── */
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  infoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Victoria's Cake Academy",
    description:
      "Academia de repostería online con sistema de pagos integrado, gestión de cursos en video y plataforma de recetas. Almacenamiento distribuido con Bunny.net para streaming optimizado.",
    image:
      "/projects/victoriascake.png",
    technologies: ["React", "Next.js", "Tailwind CSS", "Supabase", "Bunny.net"],
    demoUrl: "https://victoriascake.com",
    githubUrl: "https://github.com/alexantonioo/victoriascake",
    featured: true,
  },
  {
    id: "project-2",
    title: "Powerlifting referee lights",
    description:
      "Sistema web que conecta los telefonos de tres jueces con un monitor Smart TV para mostrar en tiempo real el resultado de cada juez durante una competencia de powerlifting. Proyecto open source.",
    image:
      "/projects/PRL.png",
    technologies: ["HTML", "Python"],
    demoUrl: "",
    githubUrl: "https://github.com/alexantonioo/Powerlifting-referee-lights",
    featured: true,
  },
  {
    id: "project-3",
    title: "Face to Face",
    description:
      "Juego 2D desarrollado en C++ con SFML para el proyecto final de Programación 3 (Universidad de los Andes). Implementado usando árboles como estructura de datos. Modo singleplayer con IA. Desarrollado con mis amigos Gustavo Nieves y Leonardo Arellano.",
    image:
      "/projects/facetoface.png",
    technologies: ["C++", "SFML"],
    demoUrl: "",
    githubUrl: "https://github.com/alexantonioo/face-to-face",
    featured: true,
  },
  {
    id: "project-4",
    title: "Football Project",
    description:
      "Sistema de gestión de equipos de fútbol desarrollado en C# con WPF. Permite a la dirigencia administrativa del club tomar el control de las finanzas llevando registro de cualquier movimiento",
    image:
      "/projects/football.png",
    technologies: ["C#", "WPF", "SQL"],
    demoUrl: "#",
    githubUrl: "#",
    infoUrl: "",
    featured: true,
  },
  {
    id: "project-5",
    title: "Trueload",
    description:
      "Calculadora desarrollada para el entrenador personal David Medina. La herramienta estima con alta precisión la repetición máxima (1RM) de cualquier atleta en ejercicios fundamentales como sentadilla, press de banca y peso muerto, implementando diversas fórmulas respaldadas por evidencia científica.",
    image:
      "/projects/trueload.png",
    technologies: ["Astro", "TypeScript"],
    demoUrl: "https://trueload.vercel.app",
    githubUrl: "https://github.com/alexantonioo/david-gym",
    featured: true,
  },
];

/* ── Testimonials ── */
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "María García",
    role: "CTO",
    company: "TechStart",
    content:
      "Un profesional excepcional. Entregó el proyecto antes del plazo con una calidad de código impecable. Su capacidad para resolver problemas complejos es impresionante.",
    avatar: "MG",
  },
  {
    id: "test-2",
    name: "Carlos Rodríguez",
    role: "Product Manager",
    company: "InnovateLab",
    content:
      "Transformó completamente nuestra plataforma. El rendimiento mejoró un 300% y la experiencia de usuario se elevó a otro nivel. Totalmente recomendado.",
    avatar: "CR",
  },
  {
    id: "test-3",
    name: "Ana Martínez",
    role: "CEO",
    company: "DataFlow",
    content:
      "Su enfoque en la arquitectura escalable nos permitió crecer de 1K a 100K usuarios sin problemas. Un verdadero experto en su área.",
    avatar: "AM",
  },
];

/* ── Certifications ── */
export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  pdfUrl: string;
}

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "Certificacion en Inteligencia Artificial",
    issuer: "Samsung",
    date: "2024-2025",
    description: "Certificación obtenida en el programa de Inteligencia Artificial de Samsung Innovation Campus.",
    pdfUrl: "/certificates/samsung.pdf",
  },
  {
    id: "cert-2",
    title: "Full Stack Developer",
    issuer: "KROSFY LLC",
    date: "2023",
    description: "Certificación obtenida en el curso de Desarrollo Full Stack de KROSFY LLC.",
    pdfUrl: "/certificates/fullstackalex.pdf",
  },
];

/* ── Stats ── */
export const stats = [
  { label: "Proyectos completados", value: "6" },
];

/* ── Social Links ── */
export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/alexantonioo",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/alex-antonio-contreras-pereira-b02aa6352",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:alexantonio1225@gmail.com",
    icon: "mail",
  },
];
