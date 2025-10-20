import type { AboutData } from '@/types';

export const aboutData: AboutData = {
  title: "Sobre Mim",
  description: [
    "Sou um Engenheiro de Dados apaixonado por transformar dados brutos em insights estratégicos que impulsionam decisões de negócio, com expertise em soluções fullstack e IA.",
    "Com experiência em arquitetura de dados moderna, construo pipelines escaláveis e eficientes utilizando as melhores práticas de engenharia de software, cloud computing e integração com modelos de Machine Learning.",
    "Minha expertise abrange desde a ingestão e processamento de grandes volumes de dados até a criação de sistemas RAG, APIs REST em Go/C#, modelos preditivos e aplicações fullstack orientadas a dados."
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
    "Sistemas RAG (Retrieval-Augmented Generation) para análise de documentos",
    "Integração de LLMs com data warehouses via MCP (Model Context Protocol)",
    "APIs REST de alta performance em Go e C#",
    "Modelos preditivos (regressão, classificação, séries temporais)",
    "Otimização de queries SQL e processos ETL/ELT",
    "Aplicações fullstack orientadas a dados com React/TypeScript",
    "Implementação de práticas de DataOps, MLOps e CI/CD",
    "Governança, qualidade de dados e feature engineering"
  ]
};
