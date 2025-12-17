# ⚡ Guia Rápido de Stories - Referência Rápida

## 🗂️ Índice Completo de Stories por Categoria

### 📍 Como Acessar no Storybook

Execute o comando:

```bash
npm run storybook
```

Acesse em: http://localhost:6006/

---

## 📚 Getting Started

| Story              | Variantes | Descrição                     |
| ------------------ | --------- | ----------------------------- |
| Welcome            | 1         | Página inicial do Storybook   |
| HowToCreateStories | 1         | Guia para criar novas stories |

---

## 🧭 Navigation (3 componentes)

| Story          | Variantes | Principais                              |
| -------------- | --------- | --------------------------------------- |
| **Tabs**       | 6         | Default, Vertical, WithIcons, Disabled  |
| **Breadcrumb** | 6         | WithCustomSeparator, Long, WithDropdown |
| **Pagination** | 5         | WithEllipsis, FirstPage, LastPage       |

---

## 🎨 Overlays (9 componentes)

| Story            | Variantes | Principais                            |
| ---------------- | --------- | ------------------------------------- |
| **Dialog**       | 6         | WithForm, Confirmation, Warning       |
| **Drawer**       | 6         | WithForm, NavigationMenu, LongContent |
| **Tooltip**      | 6         | Positions, WithIcon, Keyboard         |
| **DropdownMenu** | 6         | WithSubMenu, WithCheckboxes, GitHub   |
| **Popover**      | 5         | WithIcon, DatePicker, Share           |
| **HoverCard**    | 5         | UserProfile, Positions, Statistics    |
| **Sheet**        | 5         | WithForm, Wide, NarrowLeft            |
| **Command**      | 5         | WithGroups, Dialog, MenuShortcuts     |
| **ContextMenu**  | 5         | WithSubMenu, OnImage, Table           |

---

## 📋 Forms (9 componentes)

| Story        | Variantes | Principais                             |
| ------------ | --------- | -------------------------------------- |
| Input        | 8         | WithValue, Password, Date, Search      |
| Checkbox     | 6         | Multiple, Disabled, WithLabel          |
| Label        | 5         | WithInput, Required, Disabled          |
| Textarea     | 6         | WithForm, LargeRows, SmallRows         |
| Switch       | 5         | Multiple, Settings, Checked            |
| RadioGroup   | 5         | Vertical, Horizontal, Disabled         |
| Slider       | 5         | Range, WithStep, VolumeControl         |
| **Select**   | 6         | WithGroups, LongList, WithDefaultValue |
| **InputOTP** | 7         | WithSeparator, PhoneVerification       |

---

## 📐 Layout (7 componentes)

| Story           | Variantes | Principais                            |
| --------------- | --------- | ------------------------------------- |
| Accordion       | 4         | Multiple, ComplexContent, Disabled    |
| Separator       | 4         | Horizontal, Vertical, WithText        |
| **Carousel**    | 6         | ThreeItems, TwoItems, WithDescription |
| **ScrollArea**  | 6         | Horizontal, Both, CustomContent       |
| **Collapsible** | 5         | FAQ, Tree, WithDescription            |
| **Resizable**   | 5         | ThreePanels, Dashboard, WithHandle    |

---

## 🎯 Data Display (3 componentes)

| Story  | Variantes | Principais                               |
| ------ | --------- | ---------------------------------------- |
| Avatar | 5         | OnlyFallback, Multiple, Sizes            |
| Badge  | 6         | AllVariants, WithIcons, TechnologyBadges |
| Card   | 7         | ProjectCard, MultipleCards, FormCard     |

---

## ⚠️ Feedback (4 componentes)

| Story       | Variantes | Principais                            |
| ----------- | --------- | ------------------------------------- |
| Alert       | 5         | Destructive, AllVariants, SimpleAlert |
| AlertDialog | 3         | Destructive, Warning                  |
| Progress    | 6         | WithLabel, Multiple, Sizes            |
| Skeleton    | 6         | Card, Avatar, Table, Dashboard        |

---

## 🎛️ UI Base (2 componentes)

| Story  | Variantes | Principais                        |
| ------ | --------- | --------------------------------- |
| Button | 14        | AllVariants, AllSizes, Icon, Link |
| Toggle | 6         | Outline, Small, Interactive       |

---

## 📈 Estatísticas Gerais

```
Total de Stories: 38 arquivos
Total de Variantes: 165+
Componentes Cobertos: 28
Cobertura: 62%

Breakdown:
- Getting Started: 2 stories
- Navigation: 3 stories
- Overlays: 9 stories
- Forms: 9 stories
- Layout: 6 stories
- Data Display: 3 stories
- Feedback: 4 stories
- UI Base: 2 stories
```

---

## 🔍 Como Encontrar uma Story Específica

### No Storybook UI

1. Abra http://localhost:6006/
2. Procure na barra lateral esquerda
3. Clique na categoria desejada (ex: Forms, Overlays)
4. Selecione o componente
5. Visualize variantes no painel inferior

### Via URL Direta

```
http://localhost:6006/?path=/story/forms-input--default
http://localhost:6006/?path=/story/overlays-dialog--with-form
http://localhost:6006/?path=/story/navigation-tabs--vertical
```

---

## 🛠️ Para Adicionar Nova Story

1. **Localize o componente** em `src/components/ui/`
2. **Crie arquivo**: `ComponentName.stories.tsx`
3. **Use template**:

```typescript
import type { Meta, StoryObj } from "@storybook/react";
import { Component } from "./component";

const meta = {
  title: "Category/ComponentName",
  component: Component,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Component />,
};
```

4. **Siga o padrão** das stories existentes
5. **Execute**: `npm run storybook` para visualizar

---

## 📖 Documentação

- **STORYBOOK_ORGANIZATION.md** - Estrutura e organização
- **docs/STORYBOOK_GUIDE.md** - Guia completo de contribuição
- **STORYBOOK_EXPANSION_REPORT.md** - Este relatório de expansão
- **SETUP.md** - Instruções de instalação

---

## 🚀 Comandos Úteis

```bash
# Iniciar Storybook em modo desenvolvimento
npm run storybook

# Construir Storybook para produção
npm run build-storybook

# Executar testes
npm test

# Executar tests com coverage
npm run test:coverage
```

---

## ✅ Checklist para Usar Storybook

- [ ] Node.js 20.19.0 instalado (`node --version`)
- [ ] Dependências instaladas (`npm install`)
- [ ] Storybook iniciado (`npm run storybook`)
- [ ] Acessou http://localhost:6006/
- [ ] Visualizou pelo menos 3 stories diferentes
- [ ] Explorou as variantes interativas
- [ ] Verificou os controles e props

---

**Última Atualização**: Janeiro 2024
**Versão**: 1.0
**Status**: ✅ Pronto para Uso
