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
- **Storybook** - Desenvolvimento e documentação de componentes isolados
- **React Hook Form** - Gerenciamento de formulários
- **React Query** - Gerenciamento de estado server
- **React Router** - Roteamento client-side

## 🧱 Arquitetura

Este projeto segue os princípios do **Feature-Sliced Design (FSD)** com organização modular por domínio.

**📖 Documentação Completa:** Para detalhes aprofundados sobre a arquitetura, convenções de código, padrões de import, boas práticas e estrutura de pastas, consulte o arquivo dedicado: **[ARCHITECTURE.md](./ARCHITECTURE.md)**

**Resumo Rápido:**

- Components UI agrupados semanticamente por categoria (forms, overlays, navigation, etc.)
- Features com baixo acoplamento e Public API via barrel exports
- Hooks padronizados em dash-case (`use-nome-do-hook`)
- Utilitários consolidados em `/lib`

Para mais informações: [ver ARCHITECTURE.md](./ARCHITECTURE.md)

## 🚀 Começando

### Pré-requisitos

- **Node.js 20.19.0 ou superior** ([instalar com nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
  - ⚠️ Storybook v10+ requer Node.js 20.19+ ou 22.12+
  - Use `nvm use 20.19.0` para definir a versão correta
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

# Storybook
npm run storybook       # Inicia Storybook em modo desenvolvimento
npm run build-storybook # Build de produção do Storybook

# Commits
npm run commit          # Assistente (Commitizen + cz-git) para mensagens padronizadas
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/                    # Componentes UI primitivos (shadcn/ui)
│   │   ├── forms/            # Input, Form, Select, Checkbox, etc
│   │   ├── overlays/         # Dialog, Popover, Tooltip, Dropdown
│   │   ├── navigation/       # Breadcrumb, Tabs, Pagination, Menubar
│   │   ├── feedback/         # Alert, Toast, Progress, Skeleton
│   │   ├── data-display/     # Table, Card, Avatar, Badge, Calendar
│   │   ├── layout/           # Accordion, Sidebar, Separator, Carousel
│   │   ├── button.tsx        # Botões (raiz por serem muito usados)
│   │   ├── toggle.tsx
│   │   └── index.ts          # Barrel export centralizador
│   ├── PerformanceMonitor.tsx
│   └── NavLink.tsx
├── features/                  # Feature-Sliced Architecture
│   ├── common/               # Features compartilhadas
│   │   ├── components/       # Header, Footer
│   │   ├── context/          # LanguageContext
│   │   └── index.ts
│   └── portfolio/            # Feature do portfólio
│       ├── components/       # Hero, Projects, Contact, Experience
│       └── index.ts
├── hooks/                     # Custom hooks (dash-case)
│   ├── use-hash-navigation.ts
│   ├── use-lazy-load.ts
│   ├── use-mobile.tsx
│   ├── use-toast.ts
│   ├── use-meta-tags.ts
│   ├── use-t.ts
│   └── index.ts              # Barrel export
├── lib/                       # Utilitários e helpers
│   ├── utils.ts              # Funções gerais (cn, GitHub Pages)
│   ├── translations.ts       # Sistema de i18n
│   ├── constants.ts          # Constantes da aplicação
│   ├── error-handling.ts     # Tratamento de erros
│   ├── performance.ts        # Métricas de performance
│   └── seo.ts               # Utilitários de SEO
├── pages/                     # Páginas da aplicação
│   ├── Index.tsx
│   └── NotFound.tsx
├── types/                     # Definições de tipos TypeScript
├── App.tsx                    # Componente raiz
└── main.tsx                   # Ponto de entrada
```

### Organização por Categoria

**Components UI**: Organizados semanticamente para facilitar navegação e manutenção:

- **forms**: Componentes de formulário e input
- **overlays**: Modais, dialogs, tooltips e popovers
- **navigation**: Componentes de navegação
- **feedback**: Alertas, toasts e indicadores de progresso
- **data-display**: Tabelas, cards e exibição de dados
- **layout**: Componentes estruturais e de layout

**Features**: Seguindo princípios do Feature-Sliced Design:

- Código organizado por domínio de negócio
- Cada feature exporta uma Public API via `index.ts`
- Baixo acoplamento entre features

**Hooks**: Hooks customizados padronizados em dash-case:

- Nomenclatura consistente (`use-nome-do-hook`)
- Agrupados logicamente (navigation, ui, i18n, seo)
- Barrel export para facilitar imports

**Lib**: Utilitários consolidados em um único local:

- Funções auxiliares e helpers
- Configurações e constantes
- Tratamento de erros e performance

````

## 🧪 Testes

O projeto inclui uma suíte completa de testes:

```bash
# Executar todos os testes
npm run test

# Executar testes com interface gráfica
npm run test:ui

# Gerar relatório de cobertura
npm run test:coverage
````

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

## 📚 Storybook

O projeto utiliza **Storybook** para desenvolvimento e documentação de componentes em isolamento.

### Começando com Storybook

```bash
# Iniciar Storybook em modo desenvolvimento
npm run storybook

# Build de produção do Storybook
npm run build-storybook
```

O Storybook estará disponível em [http://localhost:6006](http://localhost:6006)

### Componentes Documentados

Todos os componentes UI possuem stories documentadas:

- **UI Components**: Button, Toggle
- **Data Display**: Badge, Card
- **Feedback**: Alert
- E mais componentes sendo adicionados...

### Recursos do Storybook

- ✨ **Visualização Isolada**: Veja cada componente individualmente
- 🎛️ **Controles Interativos**: Teste diferentes props em tempo real
- 📖 **Documentação Automática**: Gerada automaticamente via `autodocs`
- 🎨 **Variantes**: Explore todas as variantes e estados dos componentes
- 🌓 **Temas**: Alterne entre tema light e dark

### Criando Novas Stories

Para criar stories para novos componentes, consulte o [Guia de Contribuição para Stories](./docs/STORYBOOK_GUIDE.md).

Exemplo básico:

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from './MyComponent';

const meta = {
  title: 'UI/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // suas props aqui
  },
};
```

## 🧬 CI/CD

- Pipeline (GitHub Actions):
  - `test`: lint, type-check, unit + coverage (thresholds verificados por script).
  - `build`: depende de `test`, artefata `dist/`.
  - `e2e`: apenas em push, reutiliza build artefatado, cache de browsers.
  - `lhci`: apenas em push, roda contra `dist` artefatado.
- Concurrency: execuções na mesma ref são canceladas (evita filas).
- Cache: npm e navegadores Playwright para reduzir tempo.

### ✅ Checks de CI (Branch Protection)

Para proteger a branch `main`, recomendamos marcar como obrigatórios estes checks:

- CI / test: valida lint, type-check e testes com cobertura (usa [scripts/check-coverage.js](scripts/check-coverage.js)).
- Semantic Pull Request Title: valida o título do PR no padrão Conventional Commits.
- codecov/project: valida cobertura total do projeto (alvo 90%, ver [codecov.yml](codecov.yml)).
- codecov/patch: valida cobertura do patch (alvo 90%).

Observações:

- PRs de bots (Dependabot/GitHub Actions) são ignorados em commitlint e título semântico.
- Para dispensar a verificação de título em casos específicos, aplique o rótulo `skip-semantic` no PR.

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
- Commits: use `npm run commit` (Commitizen + cz-git) para seguir o padrão convencional.
- PRs: siga o template em [.github/PULL_REQUEST_TEMPLATE.md](.github/PULL_REQUEST_TEMPLATE.md) para descrição, checklist e evidências.
- Checagens automáticas: PRs de bots (Dependabot/GitHub Actions) são ignorados em commitlint e título semântico; para dispensar manualmente a verificação de título, aplique o rótulo `skip-semantic` no PR.

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

- Mensagens de commit: use `npm run commit` (Commitizen + cz-git) para seguir o padrão convencional já configurado no projeto.
- Pull Requests: use o template em [.github/PULL_REQUEST_TEMPLATE.md](.github/PULL_REQUEST_TEMPLATE.md) e preencha descrição, checklist e evidências visuais quando aplicável.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

**João Pedro Salles**

- Email: joaopedrosalles@hotmail.com
- LinkedIn: [linkedin.com/in/joao-pedro-salles-dos-santos-a5358a11a](https://www.linkedin.com/in/joao-pedro-salles-dos-santos-a5358a11a/)
- GitHub: [github.com/jaosalles](https://github.com/jaosalles)

---

⭐ **Dê uma estrela se gostou do projeto!**
