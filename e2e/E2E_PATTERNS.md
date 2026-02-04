# Padrões de Testes E2E

## Setup Consolidado

### Fixtures Centralizados (`fixtures.ts`)

Todas as utilidades de teste foram consolidadas em um arquivo central que exporta:

```typescript
import { expect, test } from './fixtures';

test('example', async ({ page, testUtils }) => {
  // Use testUtils para utilidades comuns
});
```

### Utilidades Disponíveis

#### 1. `testUtils.initializeEnvironment()`
Inicializa o ambiente de teste com idioma português.

```typescript
await testUtils.initializeEnvironment();
// Define localStorage com 'language': 'pt'
// Navega para '/'
```

#### 2. `testUtils.runA11yScan(selector?, name?)`
Executa scan de acessibilidade com axe-core.

```typescript
// Scan de toda a página
const violations = await testUtils.runA11yScan();

// Scan de um elemento específico
const violations = await testUtils.runA11yScan('#projects');

// Com nome customizado para report
const violations = await testUtils.runA11yScan('#contact', 'axe-contact-violations');
```

**Comportamento:**
- Filtra automaticamente `color-contrast` (violações intencionais do design)
- Anexa ao relatório de testes em JSON
- Retorna array de violações detectadas

#### 3. `testUtils.navigateToSection(hashId, selector)`
Navega para uma seção por hash e valida visibilidade.

```typescript
await testUtils.navigateToSection('projects', '#projects');
// Navega para /#projects e valida que o elemento está visível
```

## Padrões de Testes Comuns

### 1. Teste de Navegação com Hash
```typescript
test('header navigation updates hash', async ({ page, testUtils }) => {
  await testUtils.initializeEnvironment();
  
  const projetosButton = page.locator('header').locator('button', { hasText: 'Projetos' });
  await expect(projetosButton).toBeVisible();
  
  await projetosButton.click();
  await expect(page).toHaveURL(/#projects/);
  await expect(page.locator('#projects')).toBeVisible();
  
  const violations = await testUtils.runA11yScan('#projects', 'axe-projects');
  expect(violations).toHaveLength(0);
});
```

### 2. Teste de Menu Mobile
```typescript
test('mobile menu behavior', async ({ page, testUtils }) => {
  await testUtils.initializeEnvironment();
  await page.setViewportSize({ width: 375, height: 800 });
  
  const toggle = page.locator('button[aria-label="Toggle menu"]');
  await toggle.click();
  
  const mobileMenu = page.locator('#mobile-menu');
  await expect(mobileMenu).toBeVisible();
  
  // Interação com item
  const item = mobileMenu.locator('button', { hasText: 'Sobre' });
  await item.click();
  
  // Validar foco retorna ao toggle
  await expect(toggle).toBeFocused();
});
```

### 3. Teste de Componente Interativo
```typescript
test('interactive element', async ({ page, context, testUtils }) => {
  // Setup com localStorage customizado
  await context.addInitScript(() => {
    localStorage.setItem('language', 'pt');
  });
  
  await testUtils.initializeEnvironment();
  
  // Encontrar e interagir
  const button = page.locator('button[aria-label*="Alternar"]').first();
  await expect(button).toBeVisible();
  await button.click();
  
  // Validar acessibilidade
  const violations = await testUtils.runA11yScan();
  expect(violations).toHaveLength(0);
});
```

### 4. Teste de Visibilidade de Página
```typescript
test('page renders correctly', async ({ page, testUtils }) => {
  await testUtils.initializeEnvironment();
  
  // Validar título
  await expect(page).toHaveTitle(/Dev Portfolio|Senior Frontend Engineer/);
  
  // Scan completo
  const violations = await testUtils.runA11yScan();
  expect(violations).toHaveLength(0);
});
```

## Boas Práticas

### Selectors
- Preferir atributos semânticos: `button[aria-label="..."]`
- Usar `hasText` para botões: `locator('button', { hasText: 'Texto' })`
- Usar IDs para seções: `locator('#section-id')`

### Assertions
- Sempre validar visibilidade antes de interagir
- Usar `toHaveURL()` para validar navegação
- Sempre rodar a11y scan em testes de UX

### Estrutura
```typescript
// 1. Setup
await testUtils.initializeEnvironment();

// 2. Ação
await element.click();

// 3. Validação
await expect(element).toBeVisible();
await expect(page).toHaveURL(/pattern/);

// 4. A11y Check
const violations = await testUtils.runA11yScan();
expect(violations).toHaveLength(0);
```

## Exceções Conhecidas

### Color Contrast
As violações de `color-contrast` são **intencionais** no design system e são automaticamente filtradas pelos scans.

Se precisar incluir no report:
```typescript
const results = await AxeBuilder({ page }).analyze();
// Usar results.violations diretamente, sem filtro
```

## Rodando Testes

```bash
# CI mode (chromium, headless)
npm run e2e:ci

# Modo desenvolvimento (browser, headed)
npm run e2e

# Debug mode
npm run e2e:debug

# UI mode (Playwright Inspector)
npm run e2e:ui
```

## Checklist para Novos Testes

- [ ] Import `{ expect, test } from './fixtures'`
- [ ] Chamar `initializeEnvironment()` no início
- [ ] Usar seletores semânticos
- [ ] Validar visibilidade antes de interagir
- [ ] Rodar a11y scan (a menos que intencional)
- [ ] Nomear attachments com padrão: `axe-{seção}-violations`
- [ ] Adicionar comentários explicando interações complexas

## Migração de Testes Legados

Se encontrar testes antigos que não usam os fixtures:

**Antes:**
```typescript
import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('example', async ({ page }) => {
  await page.context().addInitScript(() => {
    localStorage.setItem('language', 'pt');
  });
  await page.goto('/');
  // ...
});
```

**Depois:**
```typescript
import { expect, test } from './fixtures';

test('example', async ({ page, testUtils }) => {
  await testUtils.initializeEnvironment();
  // ...
});
```

