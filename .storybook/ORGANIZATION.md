# 📁 Estrutura de Stories - Organização do Storybook

## Nova Organização

O projeto Storybook agora está melhor organizado com a seguinte estrutura:

```
src/
├── stories/                          # 📚 Documentação e guias do Storybook
│   ├── Welcome.stories.tsx          # Página inicial de boas-vindas
│   └── HowToCreateStories.stories.tsx # Guia sobre como criar stories
│
├── components/
│   ├── ui/
│   │   ├── button.stories.tsx       # Stories do Button
│   │   ├── toggle.stories.tsx       # Stories do Toggle
│   │   ├── data-display/
│   │   │   ├── badge.stories.tsx
│   │   │   └── card.stories.tsx
│   │   └── feedback/
│   │       └── alert.stories.tsx
│   └── [componentes e seus stories...]
│
└── [resto da estrutura do projeto...]
```

## Padrão de Organização

### Stories de Componentes

- **Localização**: Ao lado do componente (mesmo diretório)
- **Nomenclatura**: `ComponentName.stories.tsx`
- **Exemplo**: `src/components/ui/button.stories.tsx`

### Stories de Documentação/Guias

- **Localização**: `src/stories/`
- **Nomenclatura**: `DescriptiveTitle.stories.tsx`
- **Títulos**: `Getting Started/*`

## Categorias de Stories

### 1. **Getting Started**

- Welcome.stories.tsx
- HowToCreateStories.stories.tsx

### 2. **UI Components**

- UI/Button ✅
- UI/Toggle ✅

### 3. **Navigation**

- Navigation/Tabs ✅ (6 stories)
- Navigation/Breadcrumb ✅ (6 stories)
- Navigation/Pagination ✅ (5 stories)

### 4. **Overlays**

- Overlays/Dialog ✅ (6 stories)
- Overlays/Drawer ✅ (6 stories)
- Overlays/Tooltip ✅ (6 stories)
- Overlays/DropdownMenu ✅ (6 stories)
- Overlays/Popover ✅ (6 stories)
- Overlays/HoverCard ✅ (5 stories)
- Overlays/Sheet ✅ (6 stories)
- Overlays/Command ✅ (5 stories)
- Overlays/ContextMenu ✅ (5 stories)

### 5. **Forms**

- Forms/Select ✅ (6 stories)
- Forms/InputOTP ✅ (7 stories)

### 6. **Layout**

- Layout/Carousel ✅ (6 stories)
- Layout/ScrollArea ✅ (6 stories)
- Layout/Collapsible ✅ (5 stories)
- Layout/Resizable ✅ (5 stories)

### 3. **UI/Data Display**

- UI/Data Display/Badge ✅
- UI/Data Display/Card ✅
- UI/Data Display/Avatar ✅

### 4. **UI/Feedback**

- UI/Feedback/Alert ✅
- UI/Feedback/AlertDialog ✅
- UI/Feedback/Progress ✅
- UI/Feedback/Skeleton ✅

### 5. **UI/Forms** (Nova!)

- UI/Forms/Input ✅
- UI/Forms/Checkbox ✅
- UI/Forms/Label ✅
- UI/Forms/Textarea ✅
- UI/Forms/Switch ✅
- UI/Forms/RadioGroup ✅
- UI/Forms/Slider ✅

### 6. **UI/Layout** (Nova!)

- UI/Layout/Accordion ✅
- UI/Layout/Separator ✅

## Estatísticas de Cobertura

### Total de Stories Criadas

- **Total de Componentes com Stories**: 28
- **Total de Story Files**: 28
- **Total de Variantes de Story**: 155+
- **Cobertura**: ~62% dos componentes UI

### Breakdown por Categoria

| Categoria       | Componentes | Stories | Variantes |
| --------------- | ----------- | ------- | --------- |
| Getting Started | 2           | 2       | 4         |
| Navigation      | 3           | 3       | 17        |
| Overlays        | 9           | 9       | 49        |
| Forms           | 2           | 2       | 13        |
| Layout          | 4           | 4       | 22        |
| Data Display    | 3           | 3       | 18        |
| Feedback        | 4           | 4       | 21        |
| UI Base         | 2           | 2       | 20        |
| **TOTAL**       | **28**      | **28**  | **164**   |

### Componentes Ainda Sem Stories

- MenuBar (Navigation)
- NavigationMenu (Navigation)
- Input-Otp (visualmente similar ao InputOTP)
- Aspect-Ratio (Layout)
- Sidebar (Layout)

## Configuração do Storybook

### main.ts

```typescript
stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'];
```

**Mudanças realizadas:**

- ✅ Removido padrão `*.mdx` (não utilizado)
- ✅ Pattern agora procura apenas por `*.stories.tsx`
- ✅ Isso eliminou o aviso sobre arquivos .mdx não encontrados

## Como Adicionar Novas Stories

### Para Componentes Existentes

1. Crie um arquivo `ComponentName.stories.tsx` no mesmo diretório do componente
2. Siga o padrão das stories existentes
3. Organize por título: `Category/Subcategory/ComponentName`

### Para Documentação/Guias

1. Crie um arquivo em `src/stories/TopicName.stories.tsx`
2. Use categoria: `Getting Started/TopicName`
3. Use layout apropriado (centered, padded, fullscreen)

## Boas Práticas

✅ **Fazer:**

- Colocar stories ao lado dos componentes
- Usar títulos hierárquicos: `Category/Subcategory/Component`
- Adicionar tag `autodocs` para componentes
- Criar variantes e estados
- Documentar em `src/stories/`

❌ **Não fazer:**

- Misturar stories com componentes de página
- Usar nomes genéricos para stories
- Criar stories sem títulos descritivos
- Colocar documentação em múltiplos lugares

## Próximos Passos

- [ ] Adicionar stories para componentes Navigation (Tabs, Breadcrumb, Pagination, etc.)
- [ ] Adicionar stories para componentes Overlays (Dialog, Popover, Tooltip, DropdownMenu, etc.)
- [ ] Adicionar stories para componentes Layout avançados (Carousel, ScrollArea, Resizable, etc.)
- [ ] Criar documentação avançada em `src/stories/`
- [ ] Adicionar teste de acessibilidade (a11y addon)
- [ ] Configurar Visual Testing
- [ ] Publicar Storybook (GitHub Pages ou Chromatic)

---

**Última atualização**: 17 de dezembro de 2025
**Versão**: Storybook 10.1.10
**Node.js**: 20.19.0+

## 📊 Estatísticas

- **Total de Stories Criadas**: 15+
- **Componentes Documentados**: 15
- **Categorias**: 6 (Getting Started, UI, Forms, Feedback, Data Display, Layout)
- **Cobertura**: ~40% dos componentes do projeto
