import type { SkillsData } from '@/types';


export const skillsData = {
  categories: [
    {
      key: "languages_frameworks",
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
      key: "cloud_infrastructure",
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
      key: "orchestration_etl",
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
      key: "data_storage",
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
      key: "engineering_architecture",
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
      key: "devops_cicd",
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
      key: "analysis_bi",
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
      key: "governance_quality",
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
} as unknown as SkillsData;
