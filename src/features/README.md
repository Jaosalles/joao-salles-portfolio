# Features (Feature-Sliced Architecture)

Este diretório organiza o código por domínio usando um recorte de features.

## 📁 Estrutura

```
features/
├── common/              # Código compartilhado entre features
│   ├── components/     # Header, Footer
│   ├── context/        # LanguageContext
│   └── index.ts        # Public API
└── portfolio/          # Feature do portfólio
    ├── components/     # Hero, Projects, Contact, Experience, TechStack
    └── index.ts        # Public API
```

## 🎯 Princípios

### 1. Public API via Barrel Exports

- Cada feature deve expor uma Public API via `index.ts` (barrel)
- Consumers externos importam apenas da Public API (evitar imports internos)
- Exemplo:

  ```typescript
  // ✅ Correto
  import { Hero, Projects } from '@/features/portfolio';

  // ❌ Incorreto
  import Hero from '@/features/portfolio/components/Hero';
  ```

### 2. Baixo Acoplamento

- Evite dependências cruzadas entre features
- Features devem ser independentes e auto-contidas
- Se precisar compartilhar código, mova para `common/`

### 3. Reutilização de UI

- Primitivos UI em `src/components/ui/` (sem regras de domínio)
- Componentes organizados por categoria:
  - `ui/forms/` - Inputs e formulários
  - `ui/overlays/` - Dialogs e popovers
  - `ui/navigation/` - Menus e navegação
  - `ui/feedback/` - Alerts e toasts
  - `ui/data-display/` - Tables e cards
  - `ui/layout/` - Sidebars e layouts

## 📋 Regras de Dependência

```
┌─────────────────────────────────────────┐
│          Aplicação (App.tsx)            │
├─────────────────────────────────────────┤
│           Pages (Index, 404)            │
├─────────────────────────────────────────┤
│  Features (portfolio, common)           │
│  ↓ usa Public API via barrel exports    │
├─────────────────────────────────────────┤
│  Components UI (forms, overlays, etc)   │
│  ↓ primitivos sem lógica de negócio     │
├─────────────────────────────────────────┤
│  Hooks, Lib, Types                      │
│  ↓ utilitários compartilhados           │
└─────────────────────────────────────────┘
```

### Regras:

- ✅ `features/*` pode importar de `components/ui`, `hooks`, `lib`, `types`
- ✅ `features/*` exporta via `index.ts`
- ✅ Outras features importam apenas do barrel
- ❌ Não importar arquivos internos de outra feature diretamente

Padrões:

- Nomes claros e consistentes (`FeatureName`, `useFeatureX`, `FeatureService`).
- Testes próximos ao código da feature.
- Barrel file (`index.ts`) organizado: exports mínimos e estáveis.

Migração incremental sugerida:

1. Mover arquivo para a feature adequada.
2. Criar/atualizar `index.ts` da feature exportando a Public API.
3. Atualizar imports dos consumidores para usar o barrel.
4. Validar com `npm run type-check` e `npm run test`.
