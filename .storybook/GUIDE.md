# 🎨 Guia de Contribuição para Stories

Este guia irá ajudá-lo a criar novas stories para os componentes do portfolio.

## 📋 Estrutura Básica de uma Story

Cada arquivo de story deve seguir esta estrutura:

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { SeuComponente } from './SeuComponente';

const meta = {
  title: 'Categoria/SeuComponente',
  component: SeuComponente,
  parameters: {
    layout: 'centered', // ou 'padded', 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    propName: {
      control: 'text', // ou 'boolean', 'select', 'number', etc.
      description: 'Descrição da prop',
      defaultValue: 'valor padrão',
    },
  },
} satisfies Meta<typeof SeuComponente>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    propName: 'valor',
  },
};
```

## 🎯 Boas Práticas

### 1. Nomenclatura

- **Arquivo**: Use `ComponentName.stories.tsx`
- **Título**: Use categorias lógicas como `UI/Button`, `UI/Data Display/Card`
- **Stories**: Use nomes descritivos: `Default`, `WithIcon`, `Loading`, etc.

### 2. Variantes

Crie stories para todas as variantes importantes:

```typescript
export const Default: Story = {
  args: { variant: 'default' },
};

export const Primary: Story = {
  args: { variant: 'primary' },
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};
```

### 3. Estados

Mostre diferentes estados do componente:

```typescript
export const Loading: Story = {
  args: { isLoading: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const WithError: Story = {
  args: { error: 'Erro de exemplo' },
};
```

### 4. Composição

Para componentes compostos, use o método `render`:

```typescript
export const CompleteExample: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Título</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Conteúdo</p>
      </CardContent>
    </Card>
  ),
};
```

### 5. Múltiplos Exemplos

Crie uma story que mostre todas as variantes:

```typescript
export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  ),
};
```

## 🎨 Tipos de Controles

Use os controles apropriados para cada tipo de prop:

```typescript
argTypes: {
  // Texto simples
  label: {
    control: 'text',
  },

  // Número
  count: {
    control: 'number',
  },

  // Boolean
  disabled: {
    control: 'boolean',
  },

  // Select (opções fixas)
  variant: {
    control: 'select',
    options: ['default', 'primary', 'secondary'],
  },

  // Radio (opções fixas, melhor para poucas opções)
  size: {
    control: 'radio',
    options: ['sm', 'md', 'lg'],
  },

  // Color
  color: {
    control: 'color',
  },

  // Date
  date: {
    control: 'date',
  },
}
```

## 📚 Documentação Automática

Use a tag `autodocs` e adicione JSDoc aos seus componentes:

```typescript
export interface ButtonProps {
  /**
   * O conteúdo do botão
   */
  children: React.ReactNode;

  /**
   * Variante visual do botão
   * @default 'default'
   */
  variant?: 'default' | 'primary' | 'secondary';

  /**
   * Tamanho do botão
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
}
```

## 🎭 Play Function (Interações)

Para testar interações, use play functions:

```typescript
import { userEvent, within } from '@storybook/test';

export const Interactive: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    await userEvent.click(button);
  },
};
```

## 📂 Organização de Categorias

Mantenha a organização consistente:

```
UI/
  ├── Button
  ├── Toggle
  └── Data Display/
      ├── Badge
      ├── Card
      └── Avatar
  └── Feedback/
      ├── Alert
      ├── Toast
      └── Progress
```

## ✨ Exemplos Práticos

### Componente Simples

```typescript
export const Simple: Story = {
  args: {
    children: 'Click me',
  },
};
```

### Componente com Ícone

```typescript
export const WithIcon: Story = {
  args: {
    children: (
      <>
        <IconComponent />
        Click me
      </>
    ),
  },
};
```

### Componente Complexo

```typescript
export const Complex: Story = {
  render: () => {
    const [value, setValue] = React.useState('');

    return (
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Digite algo..."
      />
    );
  },
};
```

## 🔍 Dicas

1. **Sempre teste suas stories** - Execute `npm run storybook` e verifique
2. **Use dados reais** - Use exemplos realistas que representem casos de uso reais
3. **Documente edge cases** - Mostre comportamentos limites
4. **Mantenha consistência** - Siga os padrões existentes
5. **Adicione acessibilidade** - Teste com leitores de tela

## 📖 Recursos

- [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction)
- [Args](https://storybook.js.org/docs/react/writing-stories/args)
- [Controls](https://storybook.js.org/docs/react/essentials/controls)
- [Play Function](https://storybook.js.org/docs/react/writing-stories/play-function)
