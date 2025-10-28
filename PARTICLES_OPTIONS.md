# 🎨 Opções de Particles Background

## Opção 1: **Snow/Stars Effect** ❄️⭐
Partículas caindo suavemente como neve ou estrelas

```typescript
particles: {
  color: { value: ['#00d4ff', '#ffffff', '#7c3aed'] },
  links: { enable: false }, // SEM linhas
  move: {
    direction: 'bottom', // Caindo
    enable: true,
    speed: 1.5,
    straight: false,
    outModes: { default: 'out' },
  },
  number: { value: 100 },
  opacity: { value: { min: 0.3, max: 0.8 } },
  shape: { type: 'circle' },
  size: { value: { min: 1, max: 4 } },
  twinkle: { // Piscando
    particles: {
      enable: true,
      frequency: 0.05,
      opacity: 1
    }
  }
}
```

---

## Opção 2: **Fireflies/Vaga-lumes** 🐛✨
Partículas que brilham e se movem organicamente

```typescript
particles: {
  color: { value: ['#00d4ff', '#22d3ee', '#06b6d4'] },
  links: { enable: false },
  move: {
    direction: 'none',
    enable: true,
    speed: 0.5,
    random: true,
    attract: { enable: true, rotateX: 600, rotateY: 1200 }
  },
  number: { value: 50 },
  opacity: {
    value: { min: 0, max: 1 },
    animation: {
      enable: true,
      speed: 1,
      sync: false
    }
  },
  shape: { type: 'circle' },
  size: {
    value: { min: 2, max: 8 },
    animation: {
      enable: true,
      speed: 2,
      sync: false
    }
  },
}
```

---

## Opção 3: **Matrix Rain** 💚🖥️
Efeito Matrix com código caindo

```typescript
particles: {
  color: { value: '#00ff41' },
  links: { enable: false },
  move: {
    direction: 'bottom',
    enable: true,
    speed: 8,
    straight: true,
  },
  number: { value: 60 },
  opacity: { value: { min: 0.2, max: 1 } },
  shape: { type: 'square' },
  size: { value: { min: 2, max: 4 } },
  life: {
    duration: { value: 3 },
    count: 1
  }
}
```

---

## Opção 4: **Constellation/Constelação** 🌌
Poucas partículas grandes conectadas como estrelas

```typescript
particles: {
  color: { value: ['#00d4ff', '#a78bfa'] },
  links: {
    color: '#00d4ff',
    distance: 250,
    enable: true,
    opacity: 0.3,
    width: 1,
  },
  move: {
    enable: true,
    speed: 0.3,
    direction: 'none',
  },
  number: { value: 30 }, // MENOS partículas
  opacity: { value: { min: 0.6, max: 1 } },
  shape: { type: 'circle' },
  size: { value: { min: 4, max: 10 } }, // MAIORES
}
```

---

## Opção 5: **Bubbles/Bolhas** 🫧
Bolhas subindo com efeito de vidro

```typescript
particles: {
  color: { value: ['#00d4ff', '#ffffff', '#7c3aed'] },
  links: { enable: false },
  move: {
    direction: 'top',
    enable: true,
    speed: 2,
    straight: false,
  },
  number: { value: 40 },
  opacity: { value: { min: 0.2, max: 0.6 } },
  shape: { type: 'circle' },
  size: { value: { min: 10, max: 30 } },
  stroke: {
    width: 1,
    color: '#00d4ff'
  }
}
```

---

## Opção 6: **Network/Rede** 🕸️ (ATUAL)
O que você tem agora - partículas conectadas

```typescript
// Sua configuração atual
```

---

## Como aplicar:

Substitua o objeto `particles` no arquivo:
`src/components/animations/ParticleBackground.tsx`

Qual opção você quer testar? Posso aplicar qualquer uma delas!
