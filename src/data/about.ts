import type { AboutData } from '@/types';

export const aboutData: AboutData = {
  title: "Sobre Mim",
  description: [
    "Sou um Engenheiro de Dados apaixonado por transformar dados brutos em insights estratégicos que impulsionam decisões de negócio.",
    "Com experiência em arquitetura de dados moderna, construo pipelines escaláveis e eficientes utilizando as melhores práticas de engenharia de software e cloud computing.",
    "Minha expertise abrange desde a ingestão e processamento de grandes volumes de dados até a criação de modelos analíticos e dashboards interativos."
  ],
  stats: [
    {
      value: "4+",
      label: "Anos de Experiência",
      icon: "📅"
    },
    {
      value: "50+",
      label: "Projetos Entregues",
      icon: "🚀"
    },
    {
      value: "10+",
      label: "Tecnologias Dominadas",
      icon: "💻"
    },
    {
      value: "4",
      label: "Certificações",
      icon: "🎓"
    }
  ],
  highlights: [
    "Desenvolvimento de pipelines de dados em tempo real e batch",
    "Arquitetura de Data Lakes e Data Warehouses em Cloud",
    "Otimização de queries SQL e processos ETL/ELT",
    "Implementação de práticas de DataOps e CI/CD",
    "Governança e qualidade de dados",
    "Criação de dashboards e visualizações de dados"
  ]
};
