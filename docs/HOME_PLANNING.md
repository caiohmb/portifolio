# Planejamento - Home/Hero Section

## 🎯 Objetivo da Home

Criar uma primeira impressão impactante que imediatamente comunique:
- Quem você é (Engenheiro de Dados)
- O que você faz (especialidades)
- Seu diferencial (visual, moderno, técnico)
- Chamada para ação (explorar projetos, entrar em contato)

## 🎨 Conceito Visual

### Layout Proposto

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]                    [Nav: About|Skills|Projects|Contact] [🌙] │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    [Particle Background]                    │
│                                                             │
│              [Animated Data Visualization Sphere]           │
│                                                             │
│                   Olá, eu sou [Nome]                       │
│             >>> Engenheiro de Dados <<<                     │
│                                                             │
│        [Typewriter Effect: "Transformando dados             │
│         brutos em insights estratégicos"]                   │
│                                                             │
│         [Badges Animados: Python | SQL | Spark | AWS]      │
│                                                             │
│              [CTA: Ver Projetos]  [CTA: Contato]           │
│                                                             │
│                        ↓                                    │
│                   [Scroll Indicator]                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## 🧩 Estrutura de Componentes

### Hierarquia de Componentes

```
App.tsx
└── Home (Page)
    ├── Header (Layout)
    │   ├── Logo
    │   ├── Navbar
    │   │   └── NavItem (x4)
    │   └── ThemeToggle
    │
    └── Hero (Section)
        ├── ParticleBackground (Animation)
        ├── DataVisualizationSphere (Visualization)
        ├── HeroContent
        │   ├── Greeting
        │   ├── Title
        │   │   └── GlitchEffect (Animation)
        │   ├── TypeWriter (Animation)
        │   ├── TechBadges
        │   │   └── Badge (x4-6)
        │   └── CTAButtons
        │       ├── Button (Primary)
        │       └── Button (Secondary)
        └── ScrollIndicator (Animation)
```

## 📦 Componentes Detalhados

### 1. Header Component

**Localização**: `src/components/layout/Header.tsx`

**Props**:
```typescript
interface HeaderProps {
  transparent?: boolean; // Muda opacidade no scroll
  fixed?: boolean;       // Fixed position
}
```

**Funcionalidades**:
- Logo clicável que volta ao topo
- Navegação responsiva (hamburger no mobile)
- Background blur quando scroll > 0
- Destaque do item ativo baseado em scroll position
- Toggle de tema (dark/light)

**Estados**:
- `isScrolled`: boolean (controla blur/shadow)
- `isMobileMenuOpen`: boolean
- `activeSection`: string

---

### 2. Hero Component

**Localização**: `src/components/sections/Hero.tsx`

**Responsabilidades**:
- Container principal da seção hero
- Orquestrar animações de entrada
- Responsividade do layout

**Estrutura**:
```typescript
export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <DataVisualizationSphere />

      <div className="relative z-10 container mx-auto px-4">
        <HeroContent />
      </div>

      <ScrollIndicator />
    </section>
  );
};
```

---

### 3. ParticleBackground Component

**Localização**: `src/components/animations/ParticleBackground.tsx`

**Conceito**:
- Partículas flutuantes representando "dados"
- Conexões entre partículas (estilo rede neural)
- Interação com mouse (parallax effect)
- Cores: gradiente azul/ciano/roxo

**Implementação**:
- Canvas HTML5 ou biblioteca (particles.js / tsparticles)
- Animação 60fps otimizada
- Responsive (menos partículas no mobile)

**Configuração**:
```typescript
const particleConfig = {
  number: { value: 80, density: { enable: true } },
  color: { value: ['#00d4ff', '#7c3aed', '#3b82f6'] },
  shape: { type: 'circle' },
  opacity: { value: 0.5, random: true },
  size: { value: 3, random: true },
  line_linked: {
    enable: true,
    distance: 150,
    color: '#00d4ff',
    opacity: 0.2,
    width: 1
  },
  move: {
    enable: true,
    speed: 2,
    direction: 'none',
    random: false,
    out_mode: 'bounce'
  }
};
```

---

### 4. DataVisualizationSphere Component

**Localização**: `src/components/visualizations/DataVisualizationSphere.tsx`

**Conceito**:
- Esfera 3D rotativa no background
- Representa "universo de dados"
- Ícones de tecnologias orbitando

**Opções de Implementação**:
1. **CSS 3D Transform** (mais leve)
2. **Three.js** (mais elaborado)
3. **SVG animado** (meio termo)

**Versão CSS (Recomendada para MVP)**:
```typescript
// Esfera com divs rotacionando em 3D
// Tecnologias em órbita com animação
// Glow effect e gradientes
```

---

### 5. HeroContent Component

**Localização**: `src/components/sections/HeroContent.tsx`

**Estrutura**:
```typescript
export const HeroContent: React.FC = () => {
  return (
    <div className="text-center space-y-8">
      {/* Saudação */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-lg md:text-xl text-accent-primary"
      >
        Olá, eu sou
      </motion.p>

      {/* Nome */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold"
      >
        <GlitchEffect text="Seu Nome" />
      </motion.h1>

      {/* Título/Profissão */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-3xl md:text-5xl font-semibold text-accent-secondary"
      >
        &gt;&gt;&gt; Engenheiro de Dados &lt;&lt;&lt;
      </motion.h2>

      {/* Typewriter */}
      <TypeWriter
        texts={[
          "Transformando dados brutos em insights estratégicos",
          "Construindo pipelines escaláveis e eficientes",
          "Otimizando arquiteturas de Big Data"
        ]}
        delay={0.6}
      />

      {/* Tech Badges */}
      <TechBadges delay={0.8} />

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="flex gap-4 justify-center"
      >
        <Button variant="primary" size="lg" onClick={scrollToProjects}>
          Ver Projetos
        </Button>
        <Button variant="outline" size="lg" onClick={scrollToContact}>
          Entre em Contato
        </Button>
      </motion.div>
    </div>
  );
};
```

---

### 6. TypeWriter Component

**Localização**: `src/components/animations/TypeWriter.tsx`

**Props**:
```typescript
interface TypeWriterProps {
  texts: string[];           // Array de textos para alternar
  typingSpeed?: number;      // Velocidade de digitação (ms)
  deletingSpeed?: number;    // Velocidade de apagar (ms)
  pauseDuration?: number;    // Pausa antes de apagar (ms)
  delay?: number;            // Delay inicial
  className?: string;
}
```

**Comportamento**:
1. Espera delay inicial
2. Digita o primeiro texto caractere por caractere
3. Pausa quando completo
4. Apaga o texto
5. Repete com próximo texto do array
6. Loop infinito

**Efeito Visual**:
- Cursor piscante (`|` ou `_`)
- Cor accent (ciano brilhante)
- Altura mínima para evitar layout shift

---

### 7. TechBadges Component

**Localização**: `src/components/sections/TechBadges.tsx`

**Conceito**:
- Badges das principais tecnologias
- Animação de entrada escalonada
- Hover effect com ícone e glow

**Tecnologias Destacadas**:
```typescript
const mainTechs = [
  { name: 'Python', icon: '🐍', color: '#3776ab' },
  { name: 'SQL', icon: '📊', color: '#00758f' },
  { name: 'Apache Spark', icon: '⚡', color: '#e25a1c' },
  { name: 'AWS', icon: '☁️', color: '#ff9900' },
  { name: 'Docker', icon: '🐳', color: '#2496ed' },
  { name: 'Airflow', icon: '🌬️', color: '#017cee' }
];
```

**Design**:
```tsx
<div className="flex flex-wrap gap-3 justify-center">
  {mainTechs.map((tech, index) => (
    <motion.div
      key={tech.name}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay + (index * 0.1) }}
      className="px-4 py-2 rounded-full bg-secondary/50 backdrop-blur
                 border border-accent-primary/30 hover:border-accent-primary
                 hover:shadow-lg hover:shadow-accent-primary/50
                 transition-all duration-300 cursor-default"
    >
      <span className="mr-2">{tech.icon}</span>
      <span className="font-semibold">{tech.name}</span>
    </motion.div>
  ))}
</div>
```

---

### 8. ScrollIndicator Component

**Localização**: `src/components/animations/ScrollIndicator.tsx`

**Design**:
```tsx
<motion.div
  className="absolute bottom-8 left-1/2 -translate-x-1/2"
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 1.5, repeat: Infinity }}
>
  <div className="w-6 h-10 rounded-full border-2 border-accent-primary/50
                  flex items-start justify-center p-2">
    <motion.div
      className="w-1.5 h-1.5 rounded-full bg-accent-primary"
      animate={{ y: [0, 20, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  </div>
  <p className="text-xs text-center mt-2 text-text-secondary">
    Scroll
  </p>
</motion.div>
```

---

### 9. GlitchEffect Component

**Localização**: `src/components/animations/GlitchEffect.tsx`

**Conceito**:
- Efeito glitch sutil no nome
- Ativado ao passar o mouse
- Estilo cyberpunk/tech

**Props**:
```typescript
interface GlitchEffectProps {
  text: string;
  className?: string;
  triggerOnHover?: boolean;
  autoPlay?: boolean;
}
```

**CSS**:
```css
@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}

.glitch {
  position: relative;
  display: inline-block;
}

.glitch:hover::before,
.glitch:hover::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch:hover::before {
  left: 2px;
  text-shadow: -2px 0 #00d4ff;
  animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
}

.glitch:hover::after {
  left: -2px;
  text-shadow: 2px 0 #7c3aed;
  animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
}
```

---

## 🎭 Animações e Transições

### Sequência de Entrada (Page Load)

```typescript
const animations = {
  greeting: { delay: 0, duration: 0.6 },
  name: { delay: 0.2, duration: 0.6 },
  title: { delay: 0.4, duration: 0.6 },
  typewriter: { delay: 0.6 },
  badges: { delay: 0.8, stagger: 0.1 },
  ctas: { delay: 1, duration: 0.6 },
  scrollIndicator: { delay: 1.2 }
};
```

### Efeitos de Scroll

1. **Header**: Fade in background ao scrollar
2. **Parallax**: Background move mais devagar que conteúdo
3. **Fade Out**: Hero content desaparece gradualmente ao scrollar

---

## 📱 Responsividade

### Breakpoints

```typescript
const breakpoints = {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px' // Extra large
};
```

### Ajustes por Device

#### Mobile (< 640px)
- Fonte do nome: `text-4xl` (menor)
- Badges: 2 colunas
- Botões: stack vertical
- Partículas reduzidas (30 ao invés de 80)
- Sphere: oculta ou versão simplificada

#### Tablet (640px - 1024px)
- Layout padrão com ajustes
- Badges: 3 colunas
- Sphere: visível mas menor

#### Desktop (> 1024px)
- Layout completo
- Todas as animações
- Efeitos de parallax

---

## 🎨 Paleta de Cores (Hero)

```css
/* Background Gradients */
background: radial-gradient(
  ellipse at top,
  rgba(124, 58, 237, 0.15) 0%,
  rgba(10, 14, 39, 1) 50%
);

/* Text Colors */
--hero-greeting: #00d4ff;        /* Ciano */
--hero-name: #e2e8f0;            /* Branco suave */
--hero-title: #7c3aed;           /* Roxo */
--hero-subtitle: #94a3b8;        /* Cinza claro */

/* Accent Colors */
--glow-primary: #00d4ff;
--glow-secondary: #7c3aed;
```

---

## 📊 Dados Necessários

### Arquivo: `src/data/hero.ts`

```typescript
export const heroData = {
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
```

---

## 🔧 Dependências Necessárias

```bash
npm install framer-motion
npm install react-icons
npm install tsparticles @tsparticles/react @tsparticles/slim
```

---

## ✅ Checklist de Implementação

### Fase 1: Setup Base
- [x] Instalar dependências (framer-motion, tsparticles, react-icons)
- [x] Criar estrutura de pastas
- [x] Configurar TypeScript types
- [x] Criar arquivo de dados (hero.ts)

### Fase 2: Componentes de Layout
- [x] Implementar Header component
- [x] Implementar ThemeToggle
- [x] Adicionar responsividade ao Header

### Fase 3: Componentes de Animação
- [ ] Implementar ParticleBackground
- [ ] Implementar TypeWriter component
- [ ] Implementar GlitchEffect component
- [ ] Implementar ScrollIndicator

### Fase 4: Hero Section
- [ ] Criar Hero container
- [ ] Implementar HeroContent
- [ ] Adicionar TechBadges
- [ ] Configurar animações de entrada
- [ ] Integrar todos os componentes

### Fase 5: Visualizações
- [ ] Implementar DataVisualizationSphere (versão CSS)
- [ ] Adicionar efeitos de parallax
- [ ] Otimizar animações

### Fase 6: Polish
- [ ] Testar responsividade em todos os breakpoints
- [ ] Otimizar performance (lazy loading, code splitting)
- [ ] Adicionar meta tags e SEO
- [ ] Teste cross-browser
- [ ] Ajustes finais de espaçamento e timing

---

## 🎯 Resultado Esperado

Uma Hero Section que:
1. ✨ Impressiona visualmente nos primeiros 3 segundos
2. 📱 Funciona perfeitamente em qualquer device
3. 🚀 Carrega rápido (< 2s)
4. 💼 Comunica profissionalismo
5. 🎨 Demonstra habilidades técnicas através do design
6. 🎭 Engaja o visitante a explorar mais

---

## 📸 Referências Visuais (Inspiração)

- **Partículas**: Estilo Matrix / rede neural
- **Tipografia**: Cyberpunk mas legível
- **Cores**: Azul escuro + Ciano + Roxo (tech/data vibe)
- **Animações**: Suaves, não distrativas
- **Overall**: Moderno, minimalista, profissional

---

**Próximo Passo**: Iniciar implementação da Fase 1
