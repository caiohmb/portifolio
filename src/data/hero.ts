import type { HeroData } from '@/types';

export const heroData: HeroData = {
  greeting: "Olá, eu sou",
  name: "Seu Nome Completo",
  title: "Engenheiro de Dados",
  tagline: [
    "Transformando dados brutos em insights estratégicos",
    "Construindo pipelines escaláveis e eficientes",
    "Otimizando arquiteturas de Big Data",
    "Democratizando o acesso a dados de qualidade"
  ],
  mainTechnologies: [
    { name: "Python", icon: "🐍", color: "#3776ab" },
    { name: "SQL", icon: "📊", color: "#00758f" },
    { name: "Apache Spark", icon: "⚡", color: "#e25a1c" },
    { name: "AWS", icon: "☁️", color: "#ff9900" },
    { name: "Docker", icon: "🐳", color: "#2496ed" },
    { name: "Airflow", icon: "🌬️", color: "#017cee" }
  ],
  cta: {
    primary: {
      text: "Ver Projetos",
      action: "scrollToProjects"
    },
    secondary: {
      text: "Entre em Contato",
      action: "scrollToContact"
    }
  }
};
