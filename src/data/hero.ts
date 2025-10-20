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
  certifications: [
    {
      name: "Airflow 3 Fundamentals",
      icon: "🌬️",
      issuer: "Astronomer",
      year: 2024,
      badgeUrl: "/badges/airflow-fundamentals.png",
    },
    {
      name: "DP-900",
      icon: "📊",
      issuer: "Microsoft Azure Data Fundamentals",
      year: 2024,
      badgeUrl: "/badges/dp-900.png",
    },
    {
      name: "AZ-900",
      icon: "☁️",
      issuer: "Microsoft Azure Fundamentals",
      year: 2024,
      badgeUrl: "/badges/az-900.png",
    },
    {
      name: "dbt Fundamentals",
      icon: "🔧",
      issuer: "dbt Labs",
      year: 2024,
      badgeUrl: "/badges/dbt-fundamentals.png",
    }
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
