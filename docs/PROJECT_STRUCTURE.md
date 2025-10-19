# Documentação do Projeto - Portfólio Engenheiro de Dados

## 📋 Visão Geral

Portfólio moderno e interativo desenvolvido com React, TypeScript e Tailwind CSS, especialmente projetado para destacar habilidades e projetos de um Engenheiro de Dados.

## 🎯 Objetivos do Projeto

- Apresentar projetos e experiências em engenharia de dados de forma visual e interativa
- Demonstrar conhecimento técnico através de visualizações de dados
- Criar uma experiência única com animações e design moderno
- Facilitar contato com recrutadores e colaboradores

## 📁 Estrutura de Pastas Detalhada

```
src/
├── 📂 components/
│   ├── 📂 common/              # Componentes reutilizáveis
│   │   ├── Button.tsx          # Botão customizado com variantes
│   │   ├── Card.tsx            # Card container reutilizável
│   │   ├── Modal.tsx           # Modal para detalhes de projetos
│   │   ├── LoadingSpinner.tsx  # Indicador de carregamento
│   │   └── Tooltip.tsx         # Tooltips informativos
│   │
│   ├── 📂 layout/              # Componentes de layout
│   │   ├── Header.tsx          # Cabeçalho com navegação
│   │   ├── Footer.tsx          # Rodapé com links sociais
│   │   ├── Navbar.tsx          # Barra de navegação responsiva
│   │   └── Container.tsx       # Container wrapper para seções
│   │
│   ├── 📂 sections/            # Seções do portfólio
│   │   ├── Hero.tsx            # Seção inicial com apresentação animada
│   │   ├── About.tsx           # Sobre mim - biografia e foto
│   │   ├── Skills.tsx          # Skills técnicas organizadas
│   │   ├── Projects.tsx        # Grid de projetos realizados
│   │   ├── DataPipeline.tsx    # Visualização de arquiteturas de dados
│   │   ├── Experience.tsx      # Timeline de experiência profissional
│   │   ├── Certifications.tsx  # Certificações e cursos
│   │   └── Contact.tsx         # Formulário de contato
│   │
│   ├── 📂 visualizations/      # Componentes de visualização de dados
│   │   ├── DataFlowDiagram.tsx # Diagramas de fluxo de dados animados
│   │   ├── SkillsChart.tsx     # Gráficos de proficiência em skills
│   │   ├── MetricsCard.tsx     # Cards com métricas de projetos
│   │   └── TechStackGrid.tsx   # Grid visual de tecnologias
│   │
│   └── 📂 animations/          # Componentes com animações
│       ├── ParticleBackground.tsx  # Background animado com partículas
│       ├── ScrollReveal.tsx        # Reveal de elementos no scroll
│       └── TypeWriter.tsx          # Efeito de máquina de escrever
│
├── 📂 hooks/                   # Custom React hooks
│   ├── useScrollPosition.ts    # Hook para detectar posição do scroll
│   ├── useTheme.ts            # Hook para dark/light mode
│   ├── useIntersectionObserver.ts  # Hook para lazy loading
│   └── useMediaQuery.ts       # Hook para responsividade
│
├── 📂 context/                 # Context API para estado global
│   ├── ThemeContext.tsx       # Contexto para tema (dark/light)
│   └── LanguageContext.tsx    # Contexto para i18n (PT/EN)
│
├── 📂 data/                    # Dados estáticos do portfólio
│   ├── projects.ts            # Lista completa de projetos
│   ├── skills.ts              # Skills e tecnologias dominadas
│   ├── experience.ts          # Experiências profissionais
│   ├── certifications.ts      # Certificações e formações
│   └── social.ts              # Links para redes sociais
│
├── 📂 types/                   # TypeScript types/interfaces
│   ├── index.ts               # Barrel export de todos os types
│   ├── project.types.ts       # Interfaces de projetos
│   ├── skill.types.ts         # Interfaces de skills
│   └── experience.types.ts    # Interfaces de experiência
│
├── 📂 utils/                   # Funções utilitárias
│   ├── helpers.ts             # Funções auxiliares gerais
│   ├── constants.ts           # Constantes da aplicação
│   └── animations.ts          # Configurações de animações
│
├── 📂 styles/                  # Estilos globais
│   ├── globals.css            # Estilos globais e reset
│   ├── animations.css         # Keyframes e animações CSS
│   └── themes.css             # Variáveis de tema (cores, etc)
│
├── 📂 assets/                  # Recursos estáticos
│   ├── 📂 images/
│   │   ├── projects/          # Screenshots de projetos
│   │   ├── technologies/      # Logos de tecnologias
│   │   └── profile/           # Foto de perfil
│   ├── 📂 icons/              # Ícones customizados
│   └── 📂 documents/          # CV/Resume em PDF
│
└── 📂 pages/                   # (Opcional - para rotas futuras)
    ├── Home.tsx               # Página principal (landing)
    └── ProjectDetail.tsx      # Página de detalhes do projeto
```

## 🎨 Design System

### Cores Sugeridas (Tema Data Engineering)

```css
/* Dark Mode */
--bg-primary: #0a0e27      /* Azul escuro profundo */
--bg-secondary: #151b3d    /* Azul escuro médio */
--accent-primary: #00d4ff  /* Ciano brilhante */
--accent-secondary: #7c3aed /* Roxo vibrante */
--text-primary: #e2e8f0    /* Branco suave */
--text-secondary: #94a3b8  /* Cinza claro */

/* Light Mode */
--bg-primary: #ffffff
--bg-secondary: #f8fafc
--accent-primary: #0ea5e9
--accent-secondary: #8b5cf6
--text-primary: #0f172a
--text-secondary: #475569
```

### Tipografia

- **Headings**: Inter, Poppins ou Space Grotesk (moderno e limpo)
- **Body**: Inter ou System UI (legibilidade)
- **Code/Mono**: Fira Code ou JetBrains Mono (para tech stack)

## 🔧 Componentes Específicos para Engenharia de Dados

### 1. DataPipeline.tsx
Visualização interativa de arquiteturas de dados:
- Fluxo ETL/ELT animado
- Componentes: Source → Transform → Load → Analytics
- Ícones de tecnologias utilizadas em cada etapa
- Hover mostra detalhes técnicos

### 2. TechStackGrid.tsx
Grid visual com todas as tecnologias:
- **Linguagens**: Python, SQL, Scala, Java
- **Big Data**: Apache Spark, Hadoop, Kafka, Flink
- **Cloud**: AWS (S3, Redshift, EMR), GCP (BigQuery), Azure
- **Databases**: PostgreSQL, MongoDB, Cassandra, Snowflake
- **Orquestração**: Apache Airflow, Prefect, Dagster
- **BI Tools**: Power BI, Tableau, Looker, Metabase
- **Containers**: Docker, Kubernetes
- **Versionamento**: Git, DVC

### 3. MetricsCard.tsx
Cards estilo dashboard mostrando:
- Volume de dados processados
- Performance de pipelines
- Redução de custos alcançada
- Tempo economizado em processos

### 4. DataFlowDiagram.tsx
Diagramas de fluxo de dados específicos de projetos:
- Arquitetura Lambda/Kappa
- Data Lakes vs Data Warehouses
- Real-time vs Batch processing
- Animações de fluxo de dados

## 📊 Estrutura de Dados (src/data/)

### projects.ts - Exemplo de Estrutura

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  category: 'ETL' | 'Real-time' | 'Analytics' | 'Data Lake' | 'ML Pipeline';
  technologies: string[];
  metrics: {
    dataVolume?: string;      // ex: "500GB/day"
    performance?: string;      // ex: "70% faster"
    costSaving?: string;       // ex: "40% reduction"
  };
  architecture: {
    source: string[];
    processing: string[];
    storage: string[];
    visualization: string[];
  };
  image: string;
  link?: string;
  github?: string;
  highlights: string[];
}
```

### skills.ts - Categorias Sugeridas

```typescript
interface SkillCategory {
  category: string;
  icon: string;
  skills: {
    name: string;
    level: number;        // 1-5
    yearsOfExperience: number;
    projects?: number;    // quantos projetos usou
  }[];
}

const categories = [
  'Linguagens de Programação',
  'Big Data & Streaming',
  'Cloud Platforms',
  'Databases',
  'Orquestração & Workflow',
  'BI & Visualization',
  'DevOps & Containers'
];
```

## ✨ Features Modernas Planejadas

### Animações e Interações
- [ ] Scroll reveal para seções
- [ ] Particle background animado
- [ ] Hover effects em cards de projetos
- [ ] Animação de typing no hero
- [ ] Transições suaves entre seções
- [ ] Loading states elegantes

### Funcionalidades
- [ ] Dark/Light mode toggle
- [ ] Multilíngue (PT/EN)
- [ ] Filtro de projetos por categoria
- [ ] Busca de skills
- [ ] Download de CV/Resume
- [ ] Formulário de contato funcional
- [ ] Analytics integrado

### Responsividade
- [ ] Mobile-first approach
- [ ] Breakpoints: mobile (< 640px), tablet (640-1024px), desktop (> 1024px)
- [ ] Menu hamburger no mobile
- [ ] Grid adaptativo para projetos
- [ ] Imagens otimizadas por device

## 🚀 Roadmap de Implementação

### Fase 1: Setup e Estrutura Base
1. Criar estrutura de pastas
2. Configurar Context API (Theme + Language)
3. Implementar componentes de layout (Header, Footer, Container)
4. Configurar Tailwind com design system

### Fase 2: Componentes Core
1. Implementar componentes common (Button, Card, Modal)
2. Criar custom hooks
3. Definir TypeScript types
4. Popular arquivos de dados

### Fase 3: Seções Principais
1. Hero Section com animações
2. About Section
3. Skills Section com visualizações
4. Projects Section com filtros
5. Experience Timeline
6. Contact Section

### Fase 4: Features Avançadas
1. Componentes de visualização de dados
2. Animações complexas
3. Otimização de performance
4. SEO e metadata

### Fase 5: Polish e Deploy
1. Testes de responsividade
2. Otimização de assets
3. Build e deploy
4. Analytics setup

## 🛠️ Tecnologias Utilizadas

- **Framework**: React 19.1.1
- **Linguagem**: TypeScript 5.9.3
- **Estilização**: Tailwind CSS 4.1.14
- **Build Tool**: Vite 7.1.7
- **Linting**: ESLint 9.36.0

## 📦 Dependências Futuras Sugeridas

```json
{
  "framer-motion": "^11.x",           // Animações
  "react-icons": "^5.x",              // Ícones
  "react-intersection-observer": "^9.x", // Scroll animations
  "react-hook-form": "^7.x",          // Formulários
  "zod": "^3.x",                      // Validação
  "react-router-dom": "^6.x",         // Rotas (opcional)
  "i18next": "^23.x",                 // Internacionalização
  "react-i18next": "^14.x"            // i18n para React
}
```

## 📝 Convenções de Código

### Naming
- **Componentes**: PascalCase (ex: `DataFlowDiagram.tsx`)
- **Hooks**: camelCase com prefixo use (ex: `useScrollPosition.ts`)
- **Types**: PascalCase com sufixo Type/Interface (ex: `ProjectType`)
- **Constantes**: UPPER_SNAKE_CASE (ex: `MAX_PROJECTS`)
- **Funções utilitárias**: camelCase (ex: `formatDate`)

### Organização de Imports
```typescript
// 1. React e bibliotecas externas
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 2. Componentes internos
import { Button } from '@/components/common';
import { Hero } from '@/components/sections';

// 3. Hooks, utils e types
import { useTheme } from '@/hooks';
import { formatDate } from '@/utils/helpers';
import type { Project } from '@/types';

// 4. Estilos (se necessário)
import styles from './Component.module.css';
```

### Estrutura de Componente
```typescript
interface ComponentProps {
  // Props tipadas
}

export const Component: React.FC<ComponentProps> = ({ props }) => {
  // 1. Hooks
  // 2. State
  // 3. Effects
  // 4. Handlers
  // 5. Render helpers
  // 6. Return JSX
};
```

## 🎯 Diferenciais do Portfólio

1. **Visualizações Interativas**: Mostra pipelines e arquiteturas de forma visual
2. **Métricas Reais**: Destaca impacto quantificável dos projetos
3. **Design Moderno**: UI/UX diferenciada com animações suaves
4. **Foco em Dados**: Todo o design remete ao universo de dados e analytics
5. **Performance**: Otimizado e rápido, demonstrando boas práticas
6. **Profissionalismo**: Código limpo e bem documentado

## 📞 Próximos Passos

1. Revisar e aprovar estrutura proposta
2. Iniciar implementação da Fase 1
3. Coletar conteúdo real (projetos, experiências, fotos)
4. Iterar sobre design e funcionalidades
5. Deploy e testes finais

---

**Versão**: 1.0.0
**Última atualização**: 2025-01-19
**Autor**: [Seu Nome]
