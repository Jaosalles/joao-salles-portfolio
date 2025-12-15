# Features (Feature-Sliced Architecture)

Este diretório organiza o código por domínio usando um recorte de features.

Estrutura:
- `portfolio/` — componentes, hooks e testes relacionados ao portfólio.
- `common/` — código compartilhado entre features (nível de feature).

Princípios:
- Cada feature deve expor uma Public API via `index.ts` (barrel).
- Consumers externos importam apenas da Public API (evitar imports internos).
- Baixo acoplamento: evite dependências cruzadas entre features.
- Reutilização de UI: primitivos em `src/components/ui` (sem regras de domínio).

Regras de dependência:
- `components/ui` → consumível por qualquer feature.
- `features/*` → exporta via `index.ts`; outra feature importa apenas deste barrel.
- Não importar arquivos internos de outra feature diretamente (break encapsulation).

Padrões:
- Nomes claros e consistentes (`FeatureName`, `useFeatureX`, `FeatureService`).
- Testes próximos ao código da feature.
- Barrel file (`index.ts`) organizado: exports mínimos e estáveis.

Migração incremental sugerida:
1) Mover arquivo para a feature adequada.
2) Criar/atualizar `index.ts` da feature exportando a Public API.
3) Atualizar imports dos consumidores para usar o barrel.
4) Validar com `npm run type-check` e `npm run test`.
