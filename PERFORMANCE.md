# 📊 Monitoramento de Performance

Este projeto inclui monitoramento avançado de performance usando apenas APIs nativas do navegador, sem dependências externas.

## 🚀 Como Funciona

O `PerformanceMonitor` componente monitora automaticamente as seguintes métricas:

### Core Web Vitals

- **LCP (Largest Contentful Paint)**: Tempo até o maior elemento de conteúdo ser pintado
- **CLS (Cumulative Layout Shift)**: Mudanças cumulativas no layout da página
- **FID (First Input Delay)**: Atraso na resposta à primeira interação do usuário

### Métricas Adicionais

- **FCP (First Contentful Paint)**: Tempo até o primeiro conteúdo ser pintado
- **TTFB (Time to First Byte)**: Tempo até o primeiro byte da resposta
- **Navigation Timing**: Métricas completas de carregamento da página
- **Memory Usage**: Uso de memória (Chrome/Edge)

## 📋 Configuração

O monitoramento está automaticamente habilitado no componente `App.tsx`:

```tsx
import PerformanceMonitor from "./components/PerformanceMonitor";

// No App.tsx
<PerformanceMonitor />
```

## 🔍 Visualizando Métricas

As métricas são automaticamente logadas no console do navegador em desenvolvimento:

```
📊 LCP (Largest Contentful Paint): 1250.50ms
📊 CLS (Cumulative Layout Shift): 0.0125
📊 FID (First Input Delay): 45.20ms
📊 Navigation Metrics: {
  "DNS Lookup": "12.50ms",
  "TCP Connect": "25.80ms",
  "Server Response": "156.20ms",
  "TTFB": "89.40ms",
  "DOM Processing": "234.60ms",
  "Total Load": "1456.70ms"
}
```

## 🛠️ APIs Utilizadas

O monitoramento usa exclusivamente APIs nativas do navegador:

- `PerformanceObserver` - Para Web Vitals e métricas em tempo real
- `PerformanceNavigationTiming` - Para métricas de navegação
- `PerformancePaintTiming` - Para métricas de pintura
- `performance.memory` - Para uso de memória (Chrome/Edge)

## 🔧 Personalização

### Desabilitar em Produção

O monitoramento é automaticamente desabilitado em testes e pode ser configurado para produção:

```tsx
// Em development: logs detalhados
// Em production: apenas coleta silenciosa
// Em test: desabilitado
```

### Relatório Customizado

Use os utilitários em `src/utils/performance.ts` para relatórios customizados:

```tsx
import { reportPerformanceMetrics, getMemoryUsage, getNavigationTiming } from '@/utils/performance'

// Relatório manual
const metrics = {
  memoryUsage: getMemoryUsage(),
  navigationTiming: getNavigationTiming()
}
reportPerformanceMetrics(metrics)
```

## 🎯 Benefícios

- **Zero Dependências**: Não requer instalação de bibliotecas externas
- **Compatibilidade Universal**: Funciona em todos os navegadores modernos
- **Performance Nativa**: Usa APIs otimizadas do navegador
- **Desenvolvimento Transparente**: Logs automáticos em desenvolvimento
- **Configurável**: Fácil de desabilitar ou personalizar

## 📈 Melhorando Performance

Com base nas métricas coletadas, você pode:

1. **Otimizar LCP**: Comprimir imagens, usar CDN, lazy loading
2. **Reduzir CLS**: Definir dimensões de elementos, evitar layout shifts
3. **Melhorar FID**: Reduzir JavaScript bloqueante, usar web workers
4. **Otimizar Carregamento**: Code splitting, compressão, caching

## 🔍 Debugging

Para debugar métricas específicas:

```javascript
// No console do navegador
performance.getEntriesByType('paint') // FCP
performance.getEntriesByType('navigation') // Navigation timing
performance.getEntriesByType('largest-contentful-paint') // LCP
performance.getEntriesByType('layout-shift') // CLS
```

## 📚 Referências

- [Web Vitals](https://web.dev/vitals/) - Métricas essenciais da web
- [PerformanceObserver API](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver)
- [Navigation Timing API](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming)
