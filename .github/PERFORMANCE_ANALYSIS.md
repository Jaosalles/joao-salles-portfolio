# Performance & Lighthouse Analysis

**Última atualização:** 2024-12-20

## 📊 Status Atual

### Bundle Size Summary

| Arquivo   | Tamanho     | Gzipped     | Tipo              |
| --------- | ----------- | ----------- | ----------------- |
| vendor    | 141.27 KB   | 45.43 KB    | React + React-DOM |
| index     | 336.12 KB   | 101.32 KB   | Código aplicação  |
| ui        | 40.56 KB    | 14.74 KB    | Radix/shadcn      |
| router    | 20.53 KB    | 7.69 KB     | Roteamento        |
| utils     | 20.90 KB    | 7.11 KB     | Utilitários       |
| CSS       | 71.76 KB    | 12.49 KB    | Estilos           |
| **Total** | **~631 KB** | **~189 KB** | Comprimido        |

**Observações:**

- CSS bem comprimido (82% redução gzip)
- JavaScript: 619 KB → 188 KB com gzip
- Arquivo principal (index) é o maior - contém lógica app

### Lighthouse Thresholds

Configurado em `.lighthouserc.json`:

| Categoria      | Threshold | Status         |
| -------------- | --------- | -------------- |
| Performance    | ≥ 0.90    | ✅ Verificando |
| Accessibility  | ≥ 0.90    | ✅ Verificando |
| Best Practices | ≥ 0.90    | ✅ Verificando |
| SEO            | ≥ 0.90    | ✅ Verificando |

**Configuração:**

- 3 auditorias por URL (para média mais confiável)
- URLs validadas: `/` e `/about`
- Executado em CI a cada push (job `lhci`)

### Web Vitals Monitoring

**Implementação:** `src/components/PerformanceMonitor.tsx` (180 linhas)

**Métricas Rastreadas:**

```typescript
// Core Web Vitals
LCP  (Largest Contentful Paint)        → Target: < 2500ms
FID  (First Input Delay)               → Target: < 100ms
CLS  (Cumulative Layout Shift)         → Target: < 0.1

// Baseline Metrics
FCP  (First Contentful Paint)          → Target: < 1800ms
TTFB (Time to First Byte)              → Target: < 600ms

// Custom Metrics
Memory (JS Heap)                       → Monitorado em dev
Navigation Timing (DNS, TCP, etc)      → Desagregação de timing
```

**Logging em Desenvolvimento:**

- PerformanceObserver para LCP, CLS, FID
- Memory: 30s intervals (desabilitado em produção)
- Paint timing: FCP e LCP
- Navigation: DNS, TCP, server response, DOM, total

**Em Produção:**

- Logs enviados via `reportPerformanceMetrics()` se configurado
- Integração com Google Analytics 4 (opcional)
- Endpoint customizado para coleta (opcional)

## 🎯 Performance Utilities

### `src/lib/performance.ts`

**Funções Disponíveis:**

```typescript
// 1. Obter uso de memória JavaScript
getMemoryUsage(): {
  used: number      // MB alocado
  total: number     // MB total alocado
  limit: number     // MB máximo disponível
}

// 2. Obter timing detalhado de navegação
getNavigationTiming(): {
  dnsLookup: number       // DNS resolution time
  tcpConnect: number      // TCP connection time
  serverResponse: number  // TTFB (Time to First Byte)
  ttfb: number           // Time to First Byte (igual serverResponse)
  domProcessing: number  // DOM processing time
  totalLoad: number      // Tempo total de carregamento
}

// 3. Reportar métricas para analytics
reportPerformanceMetrics(metrics: PerformanceMetrics): void
// Enviado para:
// - Console (dev)
// - Google Analytics 4 (se disponível)
// - Endpoint customizado (se configurado)

// Interface
interface PerformanceMetrics {
  lcp?: number      // ms
  cls?: number      // score
  fid?: number      // ms
  fcp?: number      // ms
  ttfb?: number     // ms
  memory?: number   // MB
}
```

**Uso em Componentes:**

```typescript
import { getMemoryUsage, getNavigationTiming, reportPerformanceMetrics } from '@/lib/performance';

// Ao carregar página
const navigationTiming = getNavigationTiming();
console.log(`Page loaded in ${navigationTiming.totalLoad}ms`);

// Periodicamente em desenvolvimento
const memory = getMemoryUsage();
console.log(`Memory: ${memory.used}/${memory.total}MB (${memory.limit}MB limit)`);

// Reportar todas as métricas
reportPerformanceMetrics({
  lcp: 2500,
  cls: 0.05,
  fid: 80,
  fcp: 1800,
  ttfb: 200,
  memory: 45.2,
});
```

## 🔧 Build Optimization Strategy

### Code Splitting

**Configuração em `vite.config.ts`:**

```javascript
rollupOptions: {
  output: {
    manualChunks: {
      vendor: ['react', 'react-dom'],
      ui: ['@radix-ui/...', 'radix-ui-...'],
      router: ['./src/router', './src/pages'],
      utils: ['./src/lib', './src/hooks']
    }
  }
}
```

**Benefícios:**

- Vendor: React é estável → bom para cache em longa duração
- UI: Components Radix são bulk → chunk separado
- Router: Code splitting de rotas automático
- Utils: Lógica compartilhada isolada

**Estratégia de Cache:**

- Vendor: Muda raramente → long cache
- App: Muda frequentemente → shorter cache
- CSS: Separado por natureza em Vite → easy invalidation

### Minification & Compression

**esbuild Configuration:**

```javascript
esbuild: {
  minify: 'esbuild',    // Minificação agressiva
  legalComments: 'none' // Remove comentários de licença
}
```

**Source Maps:**

- Dev: Gerados (melhor debugging)
- Prod: Não inclusos (melhor segurança)

**Result:**

- CSS: 71.76 KB → 12.49 KB gzipped (82% redução)
- JS: 619 KB → 188 KB gzipped (70% redução)

### Asset Strategy

**Arquivos Estáticos (`public/`):**

- robots.txt, 404.html
- Servidos com content hash
- Versionados automaticamente pelo Vite

## 📈 Otimizações Implementadas

### ✅ Implementado

1. **Performance Monitoring Nativa**
   - Web Vitals via PerformanceObserver
   - Sem dependências externas
   - Automatic cleanup

2. **Lazy Loading**
   - Route-based code splitting (React Router)
   - Componentes pesados podem usar React.lazy()
   - Suspense boundaries configuráveis

3. **Build Optimizations**
   - Manual code splitting (vendor/ui/router/utils)
   - CSS-in-JS minimizado
   - esbuild minification

4. **CI/CD Performance Check**
   - LHCI integrado no CI workflow
   - 3 auditorias por URL
   - Thresholds: 0.9 para todas categorias

### 🎯 Recomendações Adicionais

#### 1. **Lazy Load de Imagens**

```html
<!-- Usar loading="lazy" nativo -->
<img src="image.jpg" alt="desc" loading="lazy" />

<!-- Ou component wrapper -->
<LazyImage src="image.jpg" alt="desc" />
```

#### 2. **Otimização de Fontes**

```css
/* Use font-display: swap para prevenir FOIT/FOUT */
@font-face {
  font-family: 'Custom Font';
  src: url('font.woff2') format('woff2');
  font-display: swap;
}
```

#### 3. **Preload de Recursos Críticos**

```html
<!-- Links críticos no head -->
<link rel="preload" href="critical.js" as="script" />
<link rel="preload" href="critical.css" as="style" />
```

#### 4. **Service Worker (PWA)**

- Atualmente desabilidado em Lighthouse
- Seria útil para offline + caching inteligente
- Considera se usuários acessam offline

#### 5. **Monitoramento Contínuo**

```bash
# Executar LHCI localmente
npm run lhci:local  # (se script disponível)

# Ou verificar manualmente
npm run build && npm run preview
# DevTools > Lighthouse tab > Generate Report
```

#### 6. **Análise Detalhada de Bundle**

```bash
# Usar ferramentas de análise
npm run build -- --analyze  # se configurado
# Ou usar visualizador externo: https://vite-visualizer.vercel.app/
```

## 🐛 Troubleshooting

### LHCI Falhando em CI

**Sintoma:** Job `lhci` falha com erro de threshold

**Solução:**

1. Rodar localmente:

   ```bash
   npm run build
   npm run preview
   # Abrir DevTools > Lighthouse
   ```

2. Comparar scores:
   - Se local passam: problema pode ser CI environment
   - Se local falham: otimizar código

3. Debug do LHCI:
   ```bash
   cat .lighthouserc.json  # Verificar configuração
   npm run build           # Garantir dist/ válido
   ```

### Performance Degrading Over Time

**Sintoma:** Lighthouse scores caem após cada commit

**Solução:**

1. Comparar builds:

   ```bash
   npm run build
   # Comparar tamanhos vs build anterior
   ```

2. Identificar culprit:
   - Novo pacote adicionado?
   - Novo componente pesado?
   - Build artifacts crescendo?

3. Investigar:

   ```bash
   # Analisar imports
   npm ls <package-name>

   # Verificar bundle
   npm run build  # Observar output
   ```

### Memory Leak em Dev

**Sintoma:** `logMemoryUsage()` mostra memória sempre crescendo

**Solução:**

1. PerformanceMonitor está limpo:

   ```typescript
   // Cleanup automático
   return () => {
     observer.disconnect()
     removeEventListener(...)
   }
   ```

2. Verificar listeners:
   - Scroll listeners?
   - Resize listeners?
   - Timers não limpos?

3. Dev Tools:
   - DevTools > Memory > Allocation timeline
   - Procurar por detached DOMs

## 📊 Checklist de Otimização

- [ ] Validar todos Lighthouse scores ≥ 0.9
- [ ] Testar Core Web Vitals em dispositivos reais
- [ ] Implementar lazy loading para imagens
- [ ] Auditar dependências com `npm audit`
- [ ] Remover/refatorar componentes pesados
- [ ] Implementar Service Worker (opcional)
- [ ] Monitorar trends via LHCI histórico
- [ ] Testar performance em rede lenta (3G)
- [ ] Validar SEO meta tags
- [ ] Confirmar acessibilidade (WCAG AA)

## 🔗 Recursos Úteis

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Web Vitals Guide](https://web.dev/vitals/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [Vite Build Analysis](https://vitejs.dev/guide/build.html#load-time-code-splitting-analysis)
- [WebPageTest](https://webpagetest.org/)
- [Sentry Performance](https://sentry.io/for/performance-monitoring/)

---

**Próximos passos:**

1. Executar LHCI no CI para validar thresholds
2. Monitorar Web Vitals em produção
3. Estabelecer baseline de performance
4. Criar alertas para regressions
