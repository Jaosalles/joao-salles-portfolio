# 🤝 Contribuição

Obrigado por considerar contribuir para o meu portfólio! Este documento contém diretrizes para ajudar você a contribuir de forma efetiva.

## 🚀 Como Contribuir

### 1. Preparação do Ambiente

```bash
# Clone o repositório
git clone https://github.com/jaosalles/joao-salles-portfolio.git
cd joao-salles-portfolio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### 2. Processo de Desenvolvimento

1. **Crie uma branch** para sua feature/bug fix:

   ```bash
   git checkout -b feature/nome-da-feature
   # ou
   git checkout -b fix/nome-do-bug
   ```

2. **Siga os padrões de código**:
   - Use TypeScript com tipagem rigorosa
   - Siga as convenções de nomenclatura
   - Mantenha a consistência com o código existente
   - Escreva testes para novas funcionalidades

3. **Execute os testes e linting**:

   ```bash
   npm run lint
   npm run type-check
   npm run test
   ```

4. **Faça commits claros e descritivos**:
   ```bash
   npm run commit
   ```
   Use o assistente (Commitizen + cz-git) para seguir o padrão convencional já configurado.

### 3. Padrões de Commit

- Execute `npm run commit` para abrir o wizard (Commitizen + cz-git) e gerar mensagens convencionais.
- O commitlint valida os tipos/escopos; prefira `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `build`, `ci`, `perf`, `deps`, `revert`.
- Mantenha o escopo alinhado ao wizard (ex.: components, hooks, pages, lib, utils, styles, config, e2e, tests, docs, deps, ci).

### 4. Pull Request

1. **Atualize sua branch** com a main:

   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. **Crie um Pull Request**:
   - Descreva claramente o que foi implementado
   - Referencie issues relacionadas
   - Inclua screenshots se aplicável
   - Checagens automáticas: título semântico (Conventional Commits) e commitlint rodarão na CI; PRs de bots (Dependabot/GitHub Actions) são ignorados. Para dispensar a verificação de título em casos específicos, use o rótulo `skip-semantic`.

3. **Aguarde revisão** e implemente feedback se necessário

Use o template de PR em [.github/PULL_REQUEST_TEMPLATE.md](.github/PULL_REQUEST_TEMPLATE.md) e preencha descrição, checklist e evidências visuais quando houver mudanças de UI.

## 🧪 Testes

### Executando Testes

```bash
# Todos os testes
npm run test

# Testes com interface gráfica
npm run test:ui

# Cobertura de testes
npm run test:coverage
```

### Escrevendo Testes

- Use Testing Library para testes focados no usuário
- Teste comportamentos, não implementações
- Mantenha testes legíveis e descritivos

Exemplo:

```typescript
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('should render the main headline', () => {
    render(<Hero />)
    expect(screen.getByText('Senior Frontend Engineer')).toBeInTheDocument()
  })
})
```

## 🎨 Diretrizes de Design

### Componentes

- Use componentes do shadcn/ui quando possível
- Mantenha consistência visual
- Garanta acessibilidade (WCAG 2.1 AA)
- Use animações sutis com Framer Motion

### Estilos

- Use Tailwind CSS classes
- Siga a convenção de nomenclatura
- Mantenha responsividade em mente
- Use variáveis CSS para temas

## 📋 Code Review

### O que verificar:

- ✅ **Funcionalidade**: O código funciona como esperado?
- ✅ **Testes**: Há testes adequados?
- ✅ **TypeScript**: Tipagem correta e rigorosa?
- ✅ **Performance**: Não há regressões de performance?
- ✅ **Acessibilidade**: Componentes são acessíveis?
- ✅ **Documentação**: Código está bem documentado?

### Feedback

- Seja específico sobre problemas encontrados
- Sugira soluções quando possível
- Foque em melhorar o código, não em criticar

## 🐛 Reportando Bugs

Para reportar bugs, use o template de issue no GitHub e inclua:

- Descrição clara do bug
- Passos para reproduzir
- Comportamento esperado vs atual
- Ambiente (OS, browser, Node.js version)
- Screenshots se aplicável

## 💡 Sugestões de Features

Para novas funcionalidades:

- Verifique se já não existe uma issue similar
- Descreva claramente o problema que resolve
- Considere impacto e complexidade
- Discuta a implementação proposta

## 📞 Suporte

Para dúvidas ou discussões:

- Abra uma issue no GitHub
- Use discussões para tópicos gerais
- Email: joaopedrosalles@hotmail.com

---

Obrigado novamente por contribuir! 🎉
