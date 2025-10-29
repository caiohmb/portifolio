# 🔧 Configuração do Portfolio

## 📧 Configurar Formulário de Contato

### 1. Obter Access Key do Web3Forms (Gratuito)

1. Acesse: https://web3forms.com/
2. Insira seu email e clique em "Get Free Access Key"
3. Verifique seu email e copie a Access Key

### 2. Configurar Variáveis de Ambiente

1. Copie o arquivo `.env.example` para `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edite o arquivo `.env` e preencha com suas informações:

```env
# Web3Forms Configuration
VITE_WEB3FORMS_ACCESS_KEY=sua_chave_do_web3forms_aqui

# Contact Information
VITE_CONTACT_EMAIL=seu.email@exemplo.com
VITE_LINKEDIN_URL=https://www.linkedin.com/in/seu-perfil
VITE_GITHUB_URL=https://github.com/seu-usuario
```

### 3. Reiniciar o Servidor de Desenvolvimento

Após configurar o `.env`, reinicie o servidor:

```bash
npm run dev
```

## 🔒 Segurança

- ✅ O arquivo `.env` está no `.gitignore` e **nunca será commitado**
- ✅ As variáveis de ambiente são acessadas via `import.meta.env` (padrão Vite)
- ✅ O `.env.example` serve como template (sem dados sensíveis)

## 📝 Notas Importantes

- **Não commite o arquivo `.env`** - ele contém suas chaves privadas
- Sempre use `.env.example` como referência
- Para produção (Vercel, Netlify, etc.), configure as variáveis de ambiente no painel da plataforma

## 🚀 Deploy em Produção

### Vercel
1. No dashboard do Vercel, vá em "Settings" > "Environment Variables"
2. Adicione cada variável:
   - `VITE_WEB3FORMS_ACCESS_KEY`
   - `VITE_CONTACT_EMAIL`
   - `VITE_LINKEDIN_URL`
   - `VITE_GITHUB_URL`

### Netlify
1. No dashboard do Netlify, vá em "Site settings" > "Environment variables"
2. Clique em "Add a variable"
3. Adicione cada variável conforme acima

## ❓ Problemas Comuns

**O formulário não envia:**
- Verifique se `VITE_WEB3FORMS_ACCESS_KEY` está configurada no `.env`
- Reinicie o servidor de desenvolvimento após alterar `.env`
- Verifique o console do navegador para erros

**Links sociais não funcionam:**
- Verifique se as URLs estão corretas no `.env`
- Certifique-se de incluir `https://` nas URLs
