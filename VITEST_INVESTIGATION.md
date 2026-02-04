# 🔍 Investigação: Melhor Configuração do Vitest

## 📊 Análise do Problema Atual

### Status Atual
- ✅ `vite.config.ts` - Funciona perfeitamente com alias `@/`
- ❌ `vitest.config.ts` - Alias `@/` não é resolvido corretamente nos testes unitários
- ✅ `tsconfig.json` - Paths configuradas corretamente: `"@/*": ["./src/*"]`
- ✅ `tsconfig.app.json` - Paths configuradas corretamente

### Raiz do Problema
O vitest está tentando resolver imports `@/` antes do Vite processar o alias. Isso ocorre porque:
1. Vitest carrega os testes com sua própria transformação
2. O alias está definido em `resolve.alias` do defineConfig
3. Mas o Vite precisa estar totalmente inicializado para resolver esses aliases
4. O problema ocorre em tempo de transformação do arquivo, antes do jsdom estar pronto

## 🎯 Soluções Investigadas

### Opção 1: ~~Remover projects e voltar para configuração única (NÃO RECOMENDADO)~~
Isso faria vitest tentar rodar testes Storybook como testes unitários.

### Opção 2: ~~Usar apenas `mergeConfig` (NÃO RECOMENDADO)~~
Testado e não funcionou porque `mergeConfig` não resolve o alias durante a fase de transformação de imports.

### Opção 3: **Usar `vite-tsconfig-paths` (RECOMENDADO)** ✅

**Melhor prática:** Fazer vitest ler o `tsconfig.json` diretamente para resolver os aliases.

`vite-tsconfig-paths` é:
- ✅ Oficialmente recomendado pela comunidade Vite
- ✅ Funciona com ou sem `mergeConfig`
- ✅ Resolve aliases em tempo de transformação (ANTES de jsdom)
- ✅ Sincroniza automaticamente com tsconfig.json
- ✅ Usado em projetos grandes e consolidados
- ✅ Mantém tudo centralizado em tsconfig.json

**Por que NÃO é "adicionar dependência desnecessária":**
- É a solução padrão recomendada para este cenário específico
- É usada amplamente na comunidade
- Resolve o problema real (fase de transformação Vite)
- Arquivos de config ficam mais limpos

## ✨ Implementação Recomendada

### Setup com `vite-tsconfig-paths`:

1. Instalar: `npm install -D vite-tsconfig-paths`
2. Atualizar `shared-vite-config.ts` para usar o plugin
3. Atualizar ambos `vite.config.ts` e `vitest.config.ts`
4. Remover alias manual do `resolve.alias`
5. Deixar tudo gerenciado pelo tsconfig.json

**Benefícios:**
- ✅ Verdadeira resolução em tempo de transformação
- ✅ DRY - Alias definido APENAS em tsconfig.json
- ✅ Funciona em projetos grandes
- ✅ Suporta projects (unit + storybook)
- ✅ Compatível com TypeScript

## 📋 Próximos Passos

1. Instalar `vite-tsconfig-paths`
2. Atualizar `shared-vite-config.ts` com plugin
3. Remover alias manual de resolve
4. Testar alias `@/` nos testes unitários
5. Testar testes Storybook continuam funcionando

## 🧪 Testes a Validar

- [ ] `npm run test` - Testes unitários (Contact.test.tsx)
- [ ] `npm run test:coverage` - Cobertura de testes
- [ ] `npm run build` - Build do projeto
- [ ] Storybook tests - `npm run test -- --project storybook`
