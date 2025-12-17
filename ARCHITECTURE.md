# 🏗️ Arquitetura do Projeto

Este documento descreve a arquitetura e organização do projeto João Salles Portfolio.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Convenções de Código](#convenções-de-código)
- [Padrões de Import](#padrões-de-import)
- [Feature-Sliced Design](#feature-sliced-design)

## 🎯 Visão Geral

O projeto segue uma arquitetura modular baseada em:

- **Feature-Sliced Design (FSD)** para organização por domínio
- **Component-Driven Development** com Shadcn/ui
- **TypeScript** rigoroso para type safety
- **Barrel Exports** para APIs públicas limpas

### Pilares da Arquitetura

1. **Separação de Concerns**: UI primitivos separados da lógica de negócio
2. **Modularidade**: Código organizado por funcionalidade
3. **Reusabilidade**: Componentes e hooks compartilhados
4. **Escalabilidade**: Estrutura que cresce sem aumentar complexidade

## 📁 Estrutura de Pastas

```
src/
├── components/               # Componentes compartilhados
│   ├── ui/                  # Primitivos UI (Shadcn/ui)
│   │   ├── forms/          # ✅ Inputs, Forms, Selects
│   │   ├── overlays/       # ✅ Dialogs, Popovers, Tooltips
│   │   ├── navigation/     # ✅ Breadcrumbs, Tabs, Menus
│   │   ├── feedback/       # ✅ Alerts, Toasts, Progress
│   │   ├── data-display/   # ✅ Tables, Cards, Badges
│   │   ├── layout/         # ✅ Sidebars, Accordions
│   │   └── index.ts        # 📦 Barrel export
│   ├── PerformanceMonitor.tsx
│   └── NavLink.tsx
│
├── features/                # Feature-Sliced Architecture
│   ├── common/             # 🌍 Features compartilhadas
│   │   ├── components/     # Header, Footer
│   │   ├── context/        # LanguageContext
│   │   └── index.ts        # 📦 Public API
│   └── portfolio/          # 💼 Feature do portfólio
│       ├── components/     # Hero, Projects, Contact
│       └── index.ts        # 📦 Public API
│
├── hooks/                   # ⚡ Custom hooks
│   ├── use-hash-navigation.ts
│   ├── use-lazy-load.ts
│   ├── use-mobile.tsx
│   ├── use-toast.ts
│   └── index.ts            # 📦 Barrel export
│
├── lib/                     # 🛠️ Utilitários
│   ├── utils.ts            # Funções gerais (cn, GitHub Pages)
│   ├── translations.ts     # Sistema i18n
│   ├── constants.ts        # Constantes da app
│   ├── error-handling.ts   # Tratamento de erros
│   ├── performance.ts      # Métricas de performance
│   └── seo.ts             # Utilitários SEO
│
├── pages/                   # 📄 Páginas
│   ├── Index.tsx
│   └── NotFound.tsx
│
├── types/                   # 📘 Types TypeScript
├── App.tsx                  # 🎯 Root component
└── main.tsx                # 🚀 Entry point
```

## 🎨 Components UI - Categorização

Os componentes UI estão organizados semanticamente:

| Categoria         | Descrição                         | Exemplos                                |
| ----------------- | --------------------------------- | --------------------------------------- |
| **forms/**        | Componentes de input e formulário | Input, Select, Checkbox, Form           |
| **overlays/**     | Modais, popovers e menus dropdown | Dialog, Popover, Tooltip, Dropdown      |
| **navigation/**   | Componentes de navegação          | Breadcrumb, Tabs, Pagination, Menubar   |
| **feedback/**     | Alertas e indicadores de estado   | Alert, Toast, Progress, Skeleton        |
| **data-display/** | Exibição de dados estruturados    | Table, Card, Avatar, Badge, Calendar    |
| **layout/**       | Estrutura e organização de layout | Accordion, Sidebar, Separator, Carousel |

### Benefícios da Categorização

✅ **Navegação mais rápida**: Encontre componentes por categoria  
✅ **Imports organizados**: Agrupamento lógico de dependências  
✅ **Escalabilidade**: Fácil adicionar novos componentes  
✅ **Manutenção**: Código relacionado próximo

## 📐 Convenções de Código

### Nomenclatura de Arquivos

```
✅ Componentes:     PascalCase (Button.tsx, DialogHeader.tsx)
✅ Hooks:           dash-case (use-hash-navigation.ts)
✅ Utilitários:     dash-case (error-handling.ts)
✅ Types:           PascalCase (UserProfile.ts)
✅ Tests:           mesmo-nome.test.tsx
```

### Nomenclatura de Exports

```typescript
// ✅ Named exports (preferencial)
export const Button = () => { ... }
export function cn(...inputs) { ... }

// ✅ Default export (componentes principais)
export default Hero;

// ❌ Evite default + named misturados
```

### Hooks Customizados

```typescript
// ✅ Correto: dash-case nos arquivos
use-hash-navigation.ts
use-lazy-load.ts
use-meta-tags.ts

// ✅ Correto: camelCase na função
export const useHashNavigation = () => { ... }
export const useLazyLoad = () => { ... }
```

## 🔄 Padrões de Import

### Ordem de Imports

```typescript
// 1. Bibliotecas externas
import { useState } from 'react';
import { motion } from 'framer-motion';

// 2. Aliases internos (@/)
import { Button } from '@/components/ui';
import { useLanguage } from '@/features/common/context/LanguageContext';

// 3. Imports relativos
import { helper } from './utils';
import type { Props } from './types';
```

### Barrel Exports

Use barrel exports para APIs públicas:

```typescript
// ✅ Correto: Import do barrel
import { Button, Dialog, Input } from '@/components/ui';
import { Hero, Projects } from '@/features/portfolio';
import { useHashNavigation, useLazyLoad } from '@/hooks';

// ✅ Também aceito: Import direto da categoria
import { Dialog } from '@/components/ui/overlays/dialog';

// ❌ Evite: Import de implementação interna
import Hero from '@/features/portfolio/components/Hero';
```

### Path Aliases

Configurados em `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Uso:

```typescript
import { Button } from '@/components/ui'; // ✅
import { APP_CONFIG } from '@/lib/constants'; // ✅
import { useLanguage } from '@/features/common'; // ✅
```

## 🏛️ Feature-Sliced Design

### Conceitos

O projeto adota princípios do FSD para organizar código por domínio:

```
┌─────────────────────────────────────────┐
│          App Layer (App.tsx)            │
│  Orquestra rotas e providers globais    │
├─────────────────────────────────────────┤
│         Pages Layer (Index, 404)        │
│  Composição de features em páginas      │
├─────────────────────────────────────────┤
│      Features Layer (portfolio, common) │
│  Lógica de negócio organizada           │
├─────────────────────────────────────────┤
│   Shared Layer (components/ui, hooks)   │
│  Código reutilizável sem domínio        │
└─────────────────────────────────────────┘
```

### Regras de Dependência

```
App → Pages → Features → Shared
  ↓     ↓         ↓         ↓
  └─────┴─────────┴─────────┘
         ← Imports →
```

**Regras:**

- ✅ Features podem importar de Shared (ui, hooks, lib)
- ✅ Pages podem importar de Features
- ✅ App orquestra Pages
- ❌ Shared NÃO pode importar de Features
- ❌ Features NÃO devem ter dependências cruzadas
- ❌ NÃO importe internals de outras features diretamente

### Public API

Cada feature expõe uma Public API via `index.ts`:

```typescript
// features/portfolio/index.ts
export { default as Hero } from './components/Hero';
export { default as Projects } from './components/Projects';
export { default as Contact } from './components/Contact';

// Consumers usam apenas a Public API
import { Hero, Projects } from '@/features/portfolio';
```

### Quando Criar uma Nova Feature?

✅ **Crie uma feature quando:**

- Há um domínio de negócio claro (ex: `blog`, `auth`, `dashboard`)
- O código tem lógica específica isolada
- Múltiplos componentes trabalham juntos para uma funcionalidade

❌ **NÃO crie feature para:**

- Componentes UI genéricos (vão para `components/ui`)
- Utilitários sem domínio (vão para `lib/`)
- Hooks genéricos (vão para `hooks/`)

## 🔧 Utilitários e Lib

Todo código auxiliar centralizado em `/lib`:

```typescript
lib/
├── utils.ts           // Helpers gerais (cn, isGitHubPages)
├── translations.ts    // Sistema i18n
├── constants.ts       // Constantes da aplicação
├── error-handling.ts  // Error boundary e tratamento
├── performance.ts     // Web Vitals e métricas
└── seo.ts            // Meta tags e SEO
```

### Quando usar Lib vs Utils?

**Antes** (duplicado):

```
src/
├── lib/utils.ts      # Helpers gerais
└── utils/            # Mais helpers? 🤔
    ├── errorHandling.ts
    └── performance.ts
```

**Agora** (consolidado):

```
src/lib/              # Tudo em um lugar! ✨
├── utils.ts
├── error-handling.ts
└── performance.ts
```

## 🎯 Boas Práticas

### 1. Mantenha Componentes Pequenos

```typescript
// ✅ Bom: Componente focado
const Button = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);

// ❌ Ruim: Componente fazendo muita coisa
const Button = ({ children, onClick, validate, transform, log }) => {
  // 50 linhas de lógica...
};
```

### 2. Use Composition over Props

```typescript
// ✅ Bom: Composição
<Dialog>
  <DialogHeader>
    <DialogTitle>Título</DialogTitle>
  </DialogHeader>
  <DialogContent>Conteúdo</DialogContent>
</Dialog>

// ❌ Ruim: Muitas props
<Dialog title="Título" content="Conteúdo" showHeader={true} />
```

### 3. Type Safety

```typescript
// ✅ Bom: Tipos explícitos
interface ButtonProps {
  variant: 'primary' | 'secondary';
  onClick: () => void;
}

// ❌ Ruim: Any
const handleClick = (data: any) => { ... }
```

### 4. Barrel Exports

```typescript
// ✅ Bom: Centralize exports
// components/ui/index.ts
export * from './forms';
export * from './overlays';

// ❌ Ruim: Imports diretos
import Button from './components/ui/forms/button';
```

## 📚 Referências

- [Feature-Sliced Design](https://feature-sliced.design/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Tailwind CSS](https://tailwindcss.com/)

---

**Última atualização:** Dezembro 2025
