# 🚀 Setup do Projeto

## ⚡ Quick Start

```bash
npm install                    # Instalar dependências
npm run type-check            # Verificar setup
npm run dev                   # Iniciar desenvolvimento
```

## 🐛 Troubleshooting

### `npm run lint` falha

```bash
rm -rf node_modules package-lock.json
npm install
```

Se persistir, corrija permissões:

```bash
sudo chown -R $(whoami) ~/.npm && npm install
```

### Erros comuns

| Erro | Solução |
|------|---------|
| command not found | `npm install` |
| Cannot find module | `rm -rf node_modules && npm install` |
| EPERM: operation not permitted | Execute em terminal do sistema, use `sudo` |

## 📜 Todos os Scripts

```bash
npm run dev              # Desenvolvimento
npm run build           # Build de produção  
npm run preview         # Preview
npm run lint            # ESLint
npm run lint:fix        # ESLint com correção
npm run type-check      # TypeScript
npm run test            # Testes
npm run test:ui         # Interface de testes
npm run test:coverage   # Cobertura
```

**Nota**: O projeto usa configurações avançadas (ESLint rigoroso, TypeScript strict, CI/CD).
