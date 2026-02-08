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
  { name: "TypeScript", icon: "TS", color: "#3178C6", category: "frontend" },
  { name: "Tailwind CSS", icon: "🎨", color: "#06B6D4", category: "frontend" },
  { name: "Node.js", icon: "🟢", color: "#339933", category: "backend" },
  { name: "Python", icon: "🐍", color: "#3776AB", category: "backend" },
  { name: "PostgreSQL", icon: "🐘", color: "#4169E1", category: "backend" },
  { name: "MongoDB", icon: "🍃", color: "#47A248", category: "backend" },
  { name: "AWS", icon: "☁️", color: "#FF9900", category: "cloud" },
  { name: "Docker", icon: "🐳", color: "#2496ED", category: "cloud" },
  { name: "GraphQL", icon: "◈", color: "#E10098", category: "backend" },
  { name: "Redis", icon: "⚡", color: "#DC382D", category: "backend" },
  { name: "Git", icon: "🔀", color: "#F05032", category: "tools" },
  { name: "Figma", icon: "🎯", color: "#F24E1E", category: "tools" },
  { name: "Linux", icon: "🐧", color: "#FCC624", category: "tools" },
  { name: "Kubernetes", icon: "☸️", color: "#326CE5", category: "cloud" },
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
    title: "E-Commerce Platform",
    description:
      "Plataforma de comercio electrónico full stack con pasarela de pagos, panel de administración en tiempo real y sistema de recomendaciones basado en IA.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "project-2",
    title: "Dashboard Analytics",
    description:
      "Panel de analíticas en tiempo real con visualización de datos avanzada, WebSockets para actualizaciones instantáneas y exportación automatizada de reportes.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "Socket.io"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "project-3",
    title: "AI Content Generator",
    description:
      "Herramienta SaaS para generación de contenido con IA, integración con múltiples modelos LLM, historial de versiones y colaboración en equipo.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    technologies: ["Python", "FastAPI", "React", "OpenAI", "AWS"],
    demoUrl: "#",
    githubUrl: "#",
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
  { label: "Años de experiencia", value: "5+" },
  { label: "Proyectos completados", value: "40+" },
  { label: "Clientes satisfechos", value: "25+" },
  { label: "Tecnologías dominadas", value: "20+" },
];

/* ── Social Links ── */
export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/tuusuario",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/tuusuario",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:tu@email.com",
    icon: "mail",
  },
];
