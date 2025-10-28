import type { SkillsData } from '@/types';


export const skillsData = {
  categories: [
    {
      key: "data_platforms",
      title: "Plataformas de Dados",
      icon: "🏢",
      skills: [
        { name: "Databricks", icon: "🧱" },
        { name: "Microsoft Fabric", icon: "🔷" },
        { name: "Azure Synapse", icon: "🔵" },
        { name: "dbt", icon: "🔧" },
        { name: "Snowflake", icon: "❄️" },
      ]
    },
    {
      key: "processing_orchestration",
      title: "Processamento, Streaming & Orquestração",
      icon: "⚡",
      skills: [
        { name: "Apache Spark", icon: "⚡" },
        { name: "PySpark", icon: "🔥" },
        { name: "Apache Kafka", icon: "📨" },
        { name: "Apache Airflow", icon: "🌬️" },
        { name: "Kestra", icon: "🔄" },
        { name: "Prefect", icon: "🌊" },
      ]
    },
    {
      key: "databases_storage",
      title: "Databases & Storage",
      icon: "🗄️",
      skills: [
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Redis", icon: "🔴" },
        { name: "S3", icon: "📦" },
        { name: "Athena", icon: "🔍" },
        { name: "Trino", icon: "🚀" },
        { name: "Data Lake", icon: "🌊" },
        { name: "Data Warehouse", icon: "🏢" },
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
      key: "program_languages",
      title: "Analytics & BI",
      icon: "",
      skills: [
        { name: "Python"},
        { name: "SQL"},
        { name: "Go" },
        { name: "C#"},
      ]
    },
    {
      key: "governance_quality",
      title: "Governança & Qualidade",
      icon: "🛡️",
      skills: [
        { name: "OpenMetadata", icon: "📚" },
        { name: "Data Quality", icon: "✅" },
        { name: "Data Governance", icon: "📋" },
        { name: "Data Catalog", icon: "📖" },
        { name: "Lineage", icon: "🔗" },
      ]
    },
    {
      key: "ai_ml",
      title: "IA & Machine Learning",
      icon: "🤖",
      skills: [
        { name: "RAG", icon: "🔍" },
        { name: "LangChain", icon: "⛓️" },
        { name: "Vector Databases", icon: "📊" },
        { name: "scikit-learn", icon: "📈" },
        { name: "Regressão", icon: "📉" },
        { name: "MLflow", icon: "🔬" },
        { name: "MCP", icon: "🔌" },
      ]
    },
    {
      key: "software_devops",
      title: "Engenharia de Software",
      icon: "💻",
      skills: [
        { name: "FastAPI", icon: "⚡" },
        { name: ".NET", icon: "🟣" },
        { name: "APIs REST", icon: "🔌" },
        { name: "Microserviços", icon: "🧩" },
        { name: "Git", icon: "📝" },
        { name: "GitHub Actions", icon: "⚙️" },
        { name: "CI/CD", icon: "🔄" },
      ]
    }
  ]
} as unknown as SkillsData;
