# 📁 Data Folder Structure

Esta pasta contém os **dados estáticos** usados no portfólio que **NÃO** são traduzidos via i18n.

## 📄 Arquivos

### ✅ `skills.ts`
Dados das habilidades técnicas organizadas por categorias.
- **Usado em:** `src/components/sections/Skills.tsx`
- **Estrutura:** Categorias → Skills com ícones
- **Tipo:** `SkillsData`

### ✅ `certifications.ts`
Lista de certificações profissionais.
- **Usado em:** `src/components/sections/Certifications.tsx`
- **Estrutura:** Array de certificações com nameKey, icon, year, badgeUrl, verifyUrl
- **Tipo:** `CertificationItem[]`
- **Nota:** Nomes e issuers vêm de `locales/*/translation.json`

### ✅ `index.ts`
Barrel file para exports centralizados.

---

## 🌍 Dados Traduzidos (i18n)

Os seguintes dados **NÃO** estão nesta pasta pois são gerenciados via i18n:

- **Hero** → `src/locales/*/translation.json` (`hero.*`)
- **About** → `src/locales/*/translation.json` (`about.*`)
- **Projects** → Carregados dinamicamente da API do GitHub
- **Navigation** → `src/locales/*/translation.json` (`navigation.*`)

---

## 🎯 Quando adicionar dados aqui?

Adicione dados nesta pasta quando:
- ✅ Os dados são **estáticos** e não mudam frequentemente
- ✅ Os dados são **estruturados** (objetos complexos, arrays)
- ✅ Os dados **NÃO precisam** ser traduzidos (ou apenas labels precisam)

**Não** adicione aqui:
- ❌ Textos que precisam tradução completa (use `locales/`)
- ❌ Dados dinâmicos de API
- ❌ Configurações do app (use pasta `config/` se necessário)

---

## 📦 Imports

### ❌ Antes (imports diretos):
```typescript
import { skillsData } from '@/data/skills';
import { certificationsData } from '@/data/certifications';
```

### ✅ Depois (via barrel file - opcional):
```typescript
import { skillsData, certificationsData } from '@/data';
```

Ambos funcionam! Use o que preferir.
