import type { SkillsData } from '@/types';

export const skillsData: SkillsData = {
  categories: [
    {
      title: "Linguagens & Frameworks",
      icon: "💻",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "SQL", icon: "📊" },
        { name: "PySpark", icon: "⚡" },
        { name: "Pandas", icon: "🐼" },
        { name: "dbt", icon: "🔧" },
      ]
    },
    {
      title: "Cloud & Infraestrutura",
      icon: "☁️",
      skills: [
        { name: "AWS", icon: "☁️" },
        { name: "Azure", icon: "🌐" },
        { name: "Docker", icon: "🐳" },
        { name: "Kubernetes", icon: "⚓" },
        { name: "Terraform", icon: "🏗️" },
      ]
    },
    {
      title: "Orquestração & ETL",
      icon: "🔄",
      skills: [
        { name: "Apache Airflow", icon: "🌬️" },
        { name: "Apache Spark", icon: "⚡" },
        { name: "Databricks", icon: "🧱" },
        { name: "Apache Kafka", icon: "📨" },
      ]
    },
    {
      title: "Dados & Armazenamento",
      icon: "🗄️",
      skills: [
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Redis", icon: "🔴" },
        { name: "S3", icon: "📦" },
        { name: "Data Lake", icon: "🌊" },
        { name: "Data Warehouse", icon: "🏢" },
      ]
    },
    {
      title: "Engenharia & Arquitetura",
      icon: "🏗️",
      skills: [
        { name: "Arquitetura de Dados", icon: "📐" },
        { name: "Modelagem de Dados", icon: "📊" },
        { name: "Data Pipeline", icon: "🔄" },
        { name: "APIs REST", icon: "🔌" },
        { name: "Microserviços", icon: "🧩" },
      ]
    },
    {
      title: "DevOps & CI/CD",
      icon: "🚀",
      skills: [
        { name: "Git", icon: "📝" },
        { name: "GitHub Actions", icon: "⚙️" },
        { name: "Jenkins", icon: "🔨" },
        { name: "CI/CD", icon: "🔄" },
      ]
    },
    {
      title: "Análise & BI",
      icon: "📈",
      skills: [
        { name: "Power BI", icon: "📊" },
        { name: "Tableau", icon: "📉" },
        { name: "Looker", icon: "👁️" },
        { name: "Data Analysis", icon: "🔍" },
      ]
    },
    {
      title: "Governança & Qualidade",
      icon: "🛡️",
      skills: [
        { name: "Data Quality", icon: "✅" },
        { name: "Data Governance", icon: "📋" },
        { name: "Data Catalog", icon: "📚" },
        { name: "Lineage", icon: "🔗" },
      ]
    }
  ]
};
