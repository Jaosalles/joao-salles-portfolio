# 📊 Monitoramento de Performance

O projeto inclui monitoramento nativo de performance usando apenas APIs do navegador (zero dependências).

## 🚀 Como Funciona

O `PerformanceMonitor` coleta automaticamente:

| Métrica | Descrição |
|---------|-----------|
| **LCP** | Tempo do maior elemento de conteúdo |
| **CLS** | Mudanças cumulativas de layout |
| **FID** | Atraso da primeira interação |
| **FCP** | Primeiro conteúdo pintado |
| **TTFB** | Primeiro byte da resposta |
| **Memory** | Uso de memória (Chrome/Edge) |

## 📋 Setup

Já configurado automaticamente em `App.tsx`:

```tsx
import PerformanceMonitor from "./components/PerformanceMonitor";

<PerformanceMonitor />
```

## 🔍 Logs em Desenvolvimento

As métricas aparecem automaticamente no console do navegador:

```
📊 LCP: 1250.50ms
📊 CLS: 0.0125
📊 FID: 45.20ms
```

## 🛠️ APIs Utilizadas

- `PerformanceObserver` - Web Vitals em tempo real
- `PerformanceNavigationTiming` - Métricas de navegação
- `PerformancePaintTiming` - Métricas de pintura
- `performance.memory` - Uso de memória

## 📈 Otimizando Performance

| Métrica | Como Melhorar |
|---------|---------------|
| **LCP** | Comprimir imagens, usar CDN, lazy loading |
| **CLS** | Definir dimensões de elementos |
| **FID** | Reduzir JavaScript bloqueante |
| **Carregamento** | Code splitting, compressão, caching |

## 🔍 Debug no Console

```javascript
performance.getEntriesByType('paint')
performance.getEntriesByType('largest-contentful-paint')
performance.getEntriesByType('layout-shift')
```

## 📚 Referências

- [Web Vitals](https://web.dev/vitals/)
- [PerformanceObserver API](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver)
