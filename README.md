# 🚀 João Pedro Salles - Portfolio

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Um portfólio profissional moderno e responsivo construído com as melhores práticas de desenvolvimento frontend. Apresenta minha experiência como Senior Frontend Engineer, projetos destacados e informações de contato.

## Índice
- Características
- Stack Tecnológico
- Arquitetura
- Começando
- Scripts Disponíveis
- Estrutura do Projeto
- Testes (Unit e E2E)
- CI/CD
- Performance e Observabilidade
- Acessibilidade
- Segurança & Dependências
- Fluxo de Trabalho
- Ambiente & Troubleshooting
- Deploy
- Contribuição
- Licença
- Contato

## ✨ Características

- 🎨 **Design Moderno**: Interface elegante com animações suaves usando Framer Motion
- 📱 **Totalmente Responsivo**: Experiência otimizada para desktop, tablet e mobile
- ⚡ **Performance Otimizada**: Build otimizado com Vite, code splitting e lazy loading
- 📊 **Monitoramento de Performance**: Web Vitals nativos sem dependências externas
- 🔧 **TypeScript Estrito**: Código type-safe com configurações rigorosas
- 🧪 **Testado**: Suite completa de testes com Vitest e Testing Library
- 🎯 **Acessibilidade**: Componentes acessíveis seguindo as melhores práticas
- 🌙 **Tema Dark/Light**: Suporte completo a temas com next-themes
- 🛡️ **Qualidade de Código**: ESLint, Prettier e hooks de commit (Husky + lint-staged) para manter a qualidade
- 🧭 **TypeScript Estrito**: `tsconfig.app.json` habilita `strict` para a maior parte da base (run `npm run type-check`)

## 🛠️ Stack Tecnológico

### Core

- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - JavaScript com tipagem estática
- **Vite** - Build tool ultra-rápido

### UI/UX

- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes acessíveis e customizáveis
- **Radix UI** - Primitivos acessíveis para componentes complexos
- **Framer Motion** - Animações e gestos
- **Lucide React** - Ícones consistentes

### Desenvolvimento

- **ESLint** - Linting rigoroso para qualidade de código
- **Vitest** - Framework de testes rápido
- **Testing Library** - Testes focados no usuário
- **React Hook Form** - Gerenciamento de formulários
- **React Query** - Gerenciamento de estado server
- **React Router** - Roteamento client-side

## 🧱 Arquitetura

- Padrão: Feature-Sliced Architecture (FSD) leve.
- Camadas/Convenções:
  - `src/components/ui`: primitivos reutilizáveis, sem regra de domínio.
  - `src/features/<feature>`: componentes, hooks e lógica por domínio.
  - Cada feature expõe Public API via `index.ts` (barrel).
- Regras de dependência:
  - Features não importam internals de outras features; apenas via Public API.
  - `components/ui` pode ser consumido por qualquer feature.
- Ver detalhes e boas práticas em `src/features/README.md`.

## 🚀 Começando

### Pré-requisitos

- Node.js 20.10.0 ou superior ([instalar com nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm ou yarn

### ⚠️ Importante: Setup Inicial

Este projeto usa configurações avançadas de senior-level. Se encontrar problemas com `yarn run lint`, consulte o [arquivo SETUP.md](./SETUP.md) para instruções detalhadas.

### Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/jaosalles/joao-salles-portfolio.git
   cd joao-salles-portfolio
   ```

2. **Instale as dependências** (importante!)

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Abra [http://localhost:8080](http://localhost:8080) no seu navegador**

### 🔧 Verificação do Setup

Após instalar as dependências, teste os comandos:

```bash
npm run type-check  # Deve passar ✅
npm run lint       # Deve funcionar após setup completo
npm run build      # Deve gerar build de produção
```

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia servidor de desenvolvimento
npm run build           # Build de produção
npm run preview         # Preview do build de produção

# Qualidade de código
npm run lint            # Executa ESLint
npm run lint:fix        # Executa ESLint com correção automática
npm run type-check      # Verifica tipos TypeScript

# Testes
npm run test            # Executa testes
npm run test:ui         # Executa testes com interface gráfica
npm run test:coverage   # Executa testes com relatório de cobertura
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes base (shadcn/ui)
│   ├── Hero.tsx        # Seção hero
│   ├── Experience.tsx  # Experiência profissional
│   ├── Projects.tsx    # Projetos
│   └── ...
├── features/           # Features por domínio (FSD)
├── hooks/              # Custom hooks
├── lib/                # Utilitários
├── pages/              # Páginas da aplicação
├── test/               # Configurações de teste
├── App.tsx             # Componente raiz
└── main.tsx            # Ponto de entrada
```

## 🧪 Testes

O projeto inclui uma suíte completa de testes:

```bash
# Executar todos os testes
npm run test

# Executar testes com interface gráfica
npm run test:ui

# Gerar relatório de cobertura
npm run test:coverage
```

### E2E (Playwright)

Testes end-to-end com Playwright focam em navegação e usabilidade.

```bash
# Instalar browsers (necessário uma vez)
npx playwright install --with-deps

# Rodar todos os testes E2E (headless)
npm run e2e

# Rodar apenas Chromium (uso em CI)
npm run e2e:ci
```

## 🧬 CI/CD

- Pipeline (GitHub Actions):
  - `test`: lint, type-check, unit + coverage (thresholds verificados por script).
  - `build`: depende de `test`, artefata `dist/`.
  - `e2e`: apenas em push, reutiliza build artefatado, cache de browsers.
  - `lhci`: apenas em push, roda contra `dist` artefatado.
- Concurrency: execuções na mesma ref são canceladas (evita filas).
- Cache: npm e navegadores Playwright para reduzir tempo.

## 📈 Performance e Observabilidade

- Ver `PERFORMANCE.md` para detalhes.
- `PerformanceMonitor`: coleta Web Vitals via APIs nativas (LCP, CLS, FID, FCP, TTFB) e logs em desenvolvimento.
- `src/utils/performance.ts`: helpers para métricas, memória e navigation timing.

## ♿ Acessibilidade

- Uso de Radix UI e shadcn/ui para acessibilidade base.
- Boas práticas: foco visível, labels, navegação por teclado.

## 🔐 Segurança & Dependências

- Atualizações automatizadas via Dependabot (agrupadas e com limites de PR, ver `.github/dependabot.yml`).
- Auditoria local:
  ```bash
  npm audit --audit-level=moderate || true
  ```

## 🔁 Fluxo de Trabalho

- Branching: `main` (produção), `develop` (integração).
- PRs: precisam passar por `lint`, `type-check`, `tests` e `coverage`.
- Commits: recomendável Conventional Commits (feat, fix, chore, docs...).

## 🧩 Ambiente & Troubleshooting

- Node via `.nvmrc`: use `nvm use` para alinhar versão.
- Problemas comuns:
  - Playwright: reinstale browsers `npx playwright install --with-deps`.
  - Cache inconsistente: `rm -rf node_modules && npm ci`.
  - Lint: rode `npm run lint:fix` e verifique `eslint.config.js`.

## 🚢 Deploy

### Github IO + Github Actions

[https://jaosalles.github.io/joao-salles-portfolio/]

### Build Manual

```bash
# Build para produção
npm run build

# Preview do build local
npm run preview
```

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, leia as [diretrizes de contribuição](CONTRIBUTING.md) antes de começar.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

**João Pedro Salles**

- Email: joaopedrosalles@hotmail.com
- LinkedIn: [linkedin.com/in/joao-pedro-salles-dos-santos-a5358a11a](https://www.linkedin.com/in/joao-pedro-salles-dos-santos-a5358a11a/)
- GitHub: [github.com/jaosalles](https://github.com/jaosalles)

---

⭐ **Dê uma estrela se gostou do projeto!**
