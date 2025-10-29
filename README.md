# 💼 Portfolio - Data Engineer

Portfolio profissional desenvolvido para destacar projetos, skills e experiência em Engenharia de Dados.

## 🎨 Preview

Um portfolio moderno e responsivo com tema claro/escuro, focado em demonstrar expertise técnica em arquiteturas Lakehouse, Modern Data Stack e DataOps.

## 🚀 Tech Stack

- **Frontend:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **i18n:** React i18next (PT/EN)
- **Icons:** Lucide React
- **Form:** Web3Forms (sem backend)

## ✨ Features

- ✅ Design responsivo (mobile-first)
- ✅ Tema claro/escuro
- ✅ Internacionalização PT/EN
- ✅ Formulário de contato funcional
- ✅ Integração com GitHub API (projetos)
- ✅ Animações suaves e performáticas
- ✅ SEO-friendly

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repo.git

# Entre na pasta
cd seu-repo

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com suas informações

# Rode o projeto
npm run dev
```

## 🔧 Configuração

1. **Web3Forms:** Obtenha uma chave gratuita em https://web3forms.com/
2. **Variáveis de Ambiente:** Edite o `.env` com seus dados:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=sua_chave_aqui
   VITE_CONTACT_EMAIL=seu@email.com
   VITE_LINKEDIN_URL=https://linkedin.com/in/seu-perfil
   VITE_GITHUB_URL=https://github.com/seu-usuario
   VITE_CV_URL=/cv/seu-cv.pdf
   ```

## 📦 Deploy

### Vercel (Recomendado)
1. Faça push para o GitHub
2. Importe em https://vercel.com/new
3. Configure as variáveis de ambiente
4. Deploy!

## 📄 Estrutura

```
src/
├── components/
│   ├── animations/     # Animações e efeitos
│   ├── common/         # Componentes reutilizáveis
│   ├── layout/         # Header, Footer, etc
│   └── sections/       # Seções do portfolio
├── locales/            # Traduções PT/EN
├── styles/             # Estilos globais
└── App.tsx             # Componente principal
```

## 🎯 Seções

- **Hero:** Apresentação com tech stack e CTAs
- **About:** Resumo profissional e competências
- **Skills:** Categorias de habilidades técnicas
- **Certifications:** Certificações com badges
- **Projects:** Integração com GitHub API
- **Contact:** Formulário funcional

## 📝 Customização

Este portfolio foi desenvolvido por mim, mas **sinta-se à vontade para usar como template**!

Para personalizar:
1. Edite os textos em `src/locales/pt/translation.json` e `en/translation.json`
2. Atualize as variáveis de ambiente no `.env`
3. Adicione suas certificações em `Certifications.tsx`
4. Ajuste as cores em `tailwind.config.js` se desejar

## 🤝 Contribuições

Este é meu portfolio pessoal, mas PRs com melhorias são bem-vindos!

## 📧 Contato

- **LinkedIn:** [linkedin.com/in/caiomaiab](https://linkedin.com/in/caiomaiab)
- **GitHub:** [github.com/caiohmb](https://github.com/caiohmb)
- **Email:** caioh.maiab@gmail.com

## 📄 Licença

MIT License - Sinta-se livre para usar este projeto como template para seu próprio portfolio!

---

**Desenvolvido por Caio Maia**
