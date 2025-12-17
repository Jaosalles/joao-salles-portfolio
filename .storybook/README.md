# 📚 Storybook - Portfolio Component Library

Este diretório contém a configuração do Storybook para o portfolio de João Pedro Salles.

## 🚀 Como Iniciar

### Modo de Desenvolvimento

```bash
npm run storybook
```

Isso iniciará o Storybook em modo de desenvolvimento na porta 6006: http://localhost:6006

### Build de Produção

```bash
npm run build-storybook
```

Isso criará uma build estática do Storybook no diretório `storybook-static/`.

## 📁 Estrutura

```
.storybook/
  ├── main.ts          # Configuração principal do Storybook
  └── preview.ts       # Configuração global de preview
src/
  ├── **/*.stories.tsx # Stories dos componentes
  └── Introduction.stories.tsx # Página de boas-vindas
```

## 📝 Criando Stories

Para criar uma nova story para um componente, crie um arquivo `ComponentName.stories.tsx` no mesmo diretório do componente:

```typescript
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MyComponent } from './MyComponent';

const meta = {
  title: 'Category/MyComponent',
  component: MyComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Defina os controles aqui
  },
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Props padrão
  },
};
```

## 🎨 Categorias Atuais

- **Introduction** - Página de boas-vindas
- **UI** - Componentes básicos (Button, Toggle, etc.)
- **UI/Data Display** - Componentes de exibição (Badge, Card, etc.)
- **UI/Feedback** - Componentes de feedback (Toast, Alert, etc.)

## 🔧 Configuração

### Aliases

O alias `@` está configurado para apontar para `src/`, assim como no projeto principal.

### Estilos

Os estilos do TailwindCSS são importados automaticamente através do `preview.ts`.

### Addons Instalados

- **@storybook/addon-links** - Navegação entre stories
- **@storybook/addon-essentials** - Ferramentas essenciais (controls, actions, docs, etc.)
- **@storybook/addon-interactions** - Testes de interação

## 📚 Recursos

- [Documentação do Storybook](https://storybook.js.org/)
- [Storybook para React](https://storybook.js.org/docs/react/get-started/introduction)
- [Storybook + Vite](https://storybook.js.org/docs/react/builders/vite)

## 🎯 Próximos Passos

1. Adicionar mais stories para componentes existentes
2. Criar stories para componentes de layout
3. Adicionar testes de interação com @storybook/test
4. Configurar Visual Regression Testing
5. Publicar o Storybook (GitHub Pages, Chromatic, etc.)
