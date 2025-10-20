import type { HeroData } from '@/types';

export const heroData: HeroData = {
  greeting: "Olá, eu sou",
  name: "Caio Maia",
  title: "Engenheiro de Dados",
  tagline: [
    "Transformando dados brutos em insights estratégicos",
    "Construindo pipelines escaláveis e eficientes",
    "Desenvolvendo soluções fullstack orientadas a dados",
    "Integrando IA/ML em arquiteturas de dados modernas",
    "Otimizando arquiteturas de Big Data",
    "Criando sistemas RAG e APIs de alta performance"
  ],
  mainTechnologies: [
    { name: "Python", icon: "🐍", color: "#3776ab" },
    { name: "SQL", icon: "📊", color: "#00758f" },
    { name: "Go", icon: "🔵", color: "#00ADD8" },
    { name: "C#", icon: "🟣", color: "#512BD4" },
    { name: "Apache Spark", icon: "⚡", color: "#e25a1c" },
    { name: "AWS", icon: "☁️", color: "#ff9900" },
    { name: "RAG", icon: "🔍", color: "#00d4ff" },
    { name: "Airflow", icon: "🌬️", color: "#017cee" }
  ],
  certifications: [],

  cta: {
    primary: {
      label: "Ver Projetos",
      href: "#projects",
      variant: "primary"
    },
    secondary: {
      label: "Entre em Contato",
      href: "#contact",
      variant: "secondary"
    }
  }
};
