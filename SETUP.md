# 🚀 Setup do Projeto - João Pedro Salles Portfolio

## Problema Atual

O comando `yarn run lint` está falhando devido a problemas de permissões e dependências não instaladas.

## ✅ Solução Rápida

### 1. Limpar e reinstalar dependências

```bash
# No terminal do seu sistema (não no VS Code)
sudo rm -rf node_modules package-lock.json yarn.lock .yarn

# Instalar dependências
npm install

# Ou se preferir yarn:
yarn install
```

### 2. Verificar instalação

```bash
# Verificar se as ferramentas estão instaladas
npm list eslint typescript

# Testar os comandos
npm run type-check
npm run lint
```

### 3. Script automático de correção (Recomendado)

```bash
# Executar script automático de correção
chmod +x scripts/fix-permissions.sh
./scripts/fix-permissions.sh
```

Este script irá:
- Corrigir permissões de npm, nvm e yarn
- Limpar node_modules
- Reinstalar dependências
- Testar se tudo funciona

### 4. Configurar Husky (hooks de pre-commit)

Após instalar dependências, execute:

```bash
npm run prepare
# ou
npx husky install
```

Isso configura os hooks do Git para rodar o lint-staged automaticamente antes do commit.


### 4. Correção manual de permissões (se o script não funcionar)

```bash
# Corrigir permissões (no macOS/Linux)
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) ~/.nvm
sudo chown -R $(whoami) /usr/local/lib/node_modules

# Ou reinstalar Node.js com nvm
nvm uninstall 20
nvm install 20
nvm use 20
```

## 🔧 Scripts Disponíveis

Após instalar as dependências corretamente:

```bash
# Desenvolvimento
npm run dev              # Servidor de desenvolvimento
npm run build           # Build de produção
npm run preview         # Preview do build

# Qualidade de código
npm run lint            # ESLint (requer dependências instaladas)
npm run lint:fix        # Correção automática ESLint
npm run type-check      # Verificação TypeScript

# Testes (após instalar dependências)
npm run test            # Suite de testes
npm run test:ui         # Interface de testes
npm run test:coverage   # Relatório de cobertura

# Análise
npm run analyze         # Bundle analyzer
```

## 🐛 Troubleshooting

### Erro: "command not found"
- Instale as dependências: `npm install`

### Erro: "EPERM: operation not permitted"
- Execute os comandos em um terminal do sistema (não VS Code)
- Use `sudo` se necessário
- Verifique permissões dos diretórios

### Erro: "Cannot find module"
- Reinstale dependências: `rm -rf node_modules && npm install`

## 📞 Suporte

Se os problemas persistirem:

1. Execute `npm --version` e `node --version` para verificar versões
2. Verifique se o arquivo `package.json` está correto
3. Tente usar `yarn` em vez de `npm`
4. Abra uma issue no repositório com os logs de erro

---

**Nota**: Este projeto foi configurado com padrões de senior-level, incluindo ESLint rigoroso, TypeScript strict mode, e CI/CD completo. As configurações são avançadas e requerem setup adequado das dependências.
