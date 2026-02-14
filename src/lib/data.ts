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
  { label: "Contacto", href: "#contacto" },
];

/* ── Tech Stack ── */
export interface TechItem {
  name: string;
  icon: string; // SVG path or emoji placeholder
  color: string;
  category: "frontend" | "backend" | "cloud" | "tools";
}

export const techStack: TechItem[] = [
  { name: "React", icon: "⚛️", color: "#61DAFB", category: "frontend" },
  { name: "Next.js", icon: "▲", color: "#ffffff", category: "frontend" },
  { name: "JavaScript/TypeScript", icon: "JS", color: "#F7DF1E", category: "frontend" },
  { name: "Tailwind CSS", icon: "🎨", color: "#06B6D4", category: "frontend" },
  { name: "Python", icon: "🐍", color: "#3776AB", category: "backend" },
  { name: "C++", icon: "C++", color: "#00599C", category: "backend" },
  { name: "C#", icon: "C#", color: "#512BD4", category: "backend" },
  { name: ".NET", icon: ".NET", color: "#512BD4", category: "backend" },
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
    githubUrl: "#",
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
    demoUrl: "#",
    githubUrl: "https://github.com/alexantonioo/Powerlifting-referee-lights",
    featured: true,
  },
  {
    id: "project-3",
    title: "Face to Face",
    description:
      "Juego 2D desarrollado en C++ con SFML para el proyecto final de Programación 3 (Universidad de los Andes). Implementado usando árboles como estructura de datos. Modo singleplayer con IA. Desarrollado con mis amigos Gustavo y Leonardo.",
    image:
      "/projects/facetoface.png",
    technologies: ["C++", "SFML"],
    demoUrl: "#",
    githubUrl: "https://github.com/alexantonioo/face-to-face",
    featured: true,
  },
  {
    id: "project-4",
    title: "Mobile Banking App",
    description:
      "Aplicación fintech con autenticación biométrica, transferencias P2P en tiempo real y gestión inteligente de presupuestos.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&h=500&fit=crop",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Docker"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: "project-5",
    title: "DevOps Pipeline Tool",
    description:
      "Plataforma de CI/CD visual con monitoreo de infraestructura, alertas inteligentes y despliegues automatizados multi-cloud.",
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=500&fit=crop",
    technologies: ["Go", "Kubernetes", "Terraform", "React", "GraphQL"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: "project-6",
    title: "Social Learning Platform",
    description:
      "Plataforma educativa con salas de video en tiempo real, sistema de gamificación, y seguimiento de progreso personalizado con ML.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop",
    technologies: ["Next.js", "WebRTC", "Python", "TensorFlow", "AWS"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
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
