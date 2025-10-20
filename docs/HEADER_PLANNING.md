# Planejamento - Header Component

## 🎯 Objetivo

Criar um header moderno com efeito glassmorphism que:
- Começa **100% transparente** no topo da página
- Ao scrollar, **ganha background blur** e sombra suave
- Navegação smooth scroll para seções
- ThemeToggle integrado
- Animações elegantes

## 🎨 Conceito Visual

### Estado Inicial (Scroll = 0)
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [Logo]          [Home] [About] [Skills] [Projects]    [🌙]│
│                                                             │
│  ← TOTALMENTE TRANSPARENTE, SEM BACKGROUND                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Estado com Scroll (Scroll > 50px)
```
┌─────────────────────────────────────────────────────────────┐
│ ╔═══════════════════════════════════════════════════════╗ │
│ ║ [Logo]    [Home] [About] [Skills] [Projects]     [🌙] ║ │
│ ╚═══════════════════════════════════════════════════════╝ │
│                                                             │
│  ← BACKGROUND BLUR + SOMBRA + BORDA SUTIL                  │
│  ← ANIMAÇÃO SUAVE DE ENTRADA                               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## 🎭 Comportamento do Scroll

### Transições Planejadas

| Scroll Position | Opacity BG | Blur | Shadow | Border | Padding Y |
|----------------|-----------|------|---------|---------|-----------|
| 0px            | 0%        | 0    | none    | none    | py-6      |
| 1-50px         | 0-50%     | 0-8  | subtle  | subtle  | py-6→py-4 |
| 50px+          | 70%       | 12   | medium  | visible | py-4      |

### Animação de Entrada
```css
Estado Inicial → Ao scrollar:
- background: transparent → bg-secondary/70 (0.3s ease)
- backdrop-blur: 0 → blur(12px) (0.3s ease)
- shadow: none → shadow-lg (0.3s ease)
- border: none → border-b border-accent/10 (0.3s ease)
- transform: translateY(0) (sempre fixo)
```

## 📐 Estrutura do Componente

```tsx
Header.tsx
├── Container (fixed top-0)
│   ├── Inner Wrapper (conditional glass effect)
│   │   ├── Logo/Brand
│   │   ├── Navigation (Desktop)
│   │   │   └── NavLink (x4)
│   │   ├── Actions
│   │   │   └── ThemeToggle
│   │   └── MobileMenuButton (Mobile)
│   │
│   └── MobileMenu (Mobile overlay)
```

## 🔧 Implementação Técnica

### Hook: useScrollPosition

```typescript
// Detecta posição do scroll
const scrollPosition = useScrollPosition();
const isScrolled = scrollPosition > 50;

// Classes condicionais
const headerClasses = cn(
  'fixed top-0 w-full z-50 transition-all duration-300',
  isScrolled ? [
    'bg-secondary/70',
    'backdrop-blur-xl',
    'shadow-lg shadow-black/5',
    'border-b border-cyan-500/10'
  ] : [
    'bg-transparent',
  ]
);
```

### Navegação Smooth Scroll

```typescript
const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' }
];

const handleNavClick = (href: string) => {
  const element = document.querySelector(href);
  element?.scrollIntoView({ behavior: 'smooth' });
};
```

## 🎨 Estilos Planejados

### Desktop Header

```tsx
<header className={cn(
  // Base
  'fixed top-0 left-0 right-0 z-50',
  'transition-all duration-300 ease-in-out',

  // Conditional glassmorphism
  isScrolled && [
    'bg-secondary/70',
    'backdrop-blur-xl',
    'shadow-lg shadow-black/5',
    'border-b border-cyan-500/10',
    'py-4'
  ],

  !isScrolled && 'py-6'
)}>
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-gradient">
        Portfolio
      </div>

      {/* Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map(item => (
          <NavLink key={item.href} {...item} />
        ))}
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <MobileMenuButton className="md:hidden" />
      </div>
    </div>
  </div>
</header>
```

### NavLink Component

```tsx
<a
  href={href}
  onClick={handleClick}
  className={cn(
    'relative px-3 py-2 text-sm font-medium',
    'text-primary hover:text-gradient',
    'transition-all duration-300',

    // Underline effect
    'after:absolute after:bottom-0 after:left-0',
    'after:w-0 after:h-0.5',
    'after:bg-gradient-to-r after:from-cyan-500 after:to-violet-600',
    'after:transition-all after:duration-300',
    'hover:after:w-full',

    // Active state
    isActive && [
      'text-gradient',
      'after:w-full'
    ]
  )}
>
  {label}
</a>
```

### Mobile Menu

```tsx
<motion.div
  initial={{ opacity: 0, x: '100%' }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: '100%' }}
  className={cn(
    'fixed inset-0 z-40',
    'bg-primary/95 backdrop-blur-xl',
    'md:hidden'
  )}
>
  <nav className="flex flex-col items-center justify-center h-full gap-8">
    {navItems.map(item => (
      <MobileNavLink key={item.href} {...item} />
    ))}
  </nav>
</motion.div>
```

## ✨ Efeitos Especiais

### 1. Logo com Gradiente Animado

```tsx
<div className="text-2xl font-bold">
  <span className="text-gradient animate-gradient bg-[length:200%_200%]">
    Data Engineer
  </span>
</div>
```

### 2. NavLink Hover com Underline Animado

- Linha começa com `width: 0`
- Hover expande para `width: 100%`
- Gradiente cyan → violet
- Transição suave 300ms

### 3. Active Section Detection

```typescript
// Detecta qual seção está visível
const [activeSection, setActiveSection] = useState('home');

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach(id => {
    const element = document.getElementById(id);
    if (element) observer.observe(element);
  });

  return () => observer.disconnect();
}, []);
```

### 4. Blur Progressivo

```typescript
// Blur aumenta gradualmente com o scroll
const blurAmount = Math.min(scrollPosition / 5, 12);
const bgOpacity = Math.min(scrollPosition / 100, 0.7);

style={{
  backdropFilter: `blur(${blurAmount}px)`,
  backgroundColor: `rgba(var(--color-bg-secondary), ${bgOpacity})`
}}
```

## 📱 Responsividade

### Desktop (> 768px)
- Navegação horizontal completa
- Logo à esquerda
- Nav no centro
- ThemeToggle à direita

### Tablet (640px - 768px)
- Navegação horizontal compacta
- Espaçamento reduzido

### Mobile (< 640px)
- Hamburger menu
- Menu fullscreen overlay
- Navegação vertical
- Animação slide from right

## 🎨 Variações de Estilo

### Variante 1: Minimal Glass (Escolhida)
```css
bg-secondary/70
backdrop-blur-xl
border-b border-cyan-500/10
shadow-lg
```

### Variante 2: Bold Glass
```css
bg-secondary/90
backdrop-blur-2xl
border-b-2 border-gradient
shadow-2xl shadow-cyan-500/20
```

### Variante 3: Neumorphic
```css
bg-secondary
shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]
shadow-[0_10px_30px_rgba(0,0,0,0.3)]
```

## 🚀 Animações de Entrada

### Primeira Carga (Page Load)
```typescript
// Header faz fade in + slide down
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: 'easeOut' }}
```

### Links (Stagger Animation)
```typescript
// Links aparecem em sequência
{navItems.map((item, i) => (
  <motion.div
    key={item.href}
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 * i, duration: 0.3 }}
  >
    <NavLink {...item} />
  </motion.div>
))}
```

## 📝 Props do Componente

```typescript
interface HeaderProps {
  variant?: 'glass' | 'solid' | 'minimal';
  scrollThreshold?: number; // Default: 50
  alwaysVisible?: boolean;  // Default: true
  hideOnScroll?: boolean;   // Default: false (hide when scrolling down)
}
```

## ✅ Checklist de Implementação

### Fase 1: Estrutura Base
- [ ] Criar Header.tsx component
- [ ] Implementar layout básico
- [ ] Adicionar Logo
- [ ] Criar array de navegação
- [ ] Integrar ThemeToggle

### Fase 2: Scroll Detection
- [ ] Usar useScrollPosition hook
- [ ] Adicionar classes condicionais
- [ ] Implementar transições suaves
- [ ] Testar em diferentes resoluções

### Fase 3: Navegação
- [ ] Criar NavLink component
- [ ] Implementar smooth scroll
- [ ] Adicionar underline effect
- [ ] Detectar seção ativa

### Fase 4: Mobile Menu
- [ ] Criar MobileMenuButton (Hamburger)
- [ ] Implementar menu overlay
- [ ] Adicionar animações framer-motion
- [ ] Fechar menu ao clicar em link

### Fase 5: Polish
- [ ] Ajustar transições
- [ ] Otimizar performance
- [ ] Testar acessibilidade
- [ ] Adicionar aria-labels

## 🎯 Resultado Esperado

Um header que:
- ✅ É totalmente transparente no topo
- ✅ Ganha efeito glass ao scrollar
- ✅ Tem navegação suave entre seções
- ✅ Funciona perfeitamente no mobile
- ✅ Tema claro/escuro integrado
- ✅ Animações fluidas e modernas
- ✅ Performance otimizada

---

**Próximo Passo**: Implementar o Header component conforme planejado
