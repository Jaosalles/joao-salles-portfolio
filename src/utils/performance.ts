// Performance utilities and helpers

export interface PerformanceMetrics {
  lcp?: number
  cls?: number
  fid?: number
  fcp?: number
  ttfb?: number
  memoryUsage?: {
    used: number
    total: number
    limit: number
  }
}

/**
 * Manually report performance metrics
 * Useful for custom monitoring or analytics
 */
export const reportPerformanceMetrics = (metrics: PerformanceMetrics) => {
  // Send to analytics service, log, or store metrics
  console.log('📈 Performance Report:', metrics)

  // Example: Send to Google Analytics 4
  if (typeof window !== 'undefined' && 'gtag' in window) {
    ;(window as any).gtag('event', 'performance_metric', {
      custom_map: metrics
    })
  }

  // Example: Send to custom analytics endpoint
  /*
  fetch('/api/analytics/performance', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(metrics)
  }).catch(console.warn)
  */
}

/**
 * Get current memory usage (Chrome/Edge only)
 */
export const getMemoryUsage = () => {
  if (typeof window !== 'undefined' && 'memory' in performance) {
    const memory = (performance as any).memory
    return {
      used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
      total: Math.round(memory.totalJSHeapSize / 1024 / 1024),
      limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024)
    }
  }
  return null
}

/**
 * Get navigation timing metrics
 */
export const getNavigationTiming = () => {
  if (typeof window !== 'undefined' && 'performance' in window && 'getEntriesByType' in performance) {
    const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[]

    if (navigationEntries.length > 0) {
      const entry = navigationEntries[0]
      if (!entry) return null
      return {
        dnsLookup: entry.domainLookupEnd - entry.domainLookupStart,
        tcpConnect: entry.connectEnd - entry.connectStart,
        serverResponse: entry.responseEnd - entry.requestStart,
        ttfb: entry.responseStart - entry.requestStart,
        domProcessing: entry.domContentLoadedEventEnd - entry.responseEnd,
        totalLoad: entry.loadEventEnd - entry.fetchStart
      }
    }
  }
  return null
}
