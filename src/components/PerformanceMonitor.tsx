import { useEffect } from 'react';

// Performance monitoring component using native browser APIs
// No external dependencies required - works in all modern browsers
export const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run on client side and in development/production
    if (typeof window === 'undefined') return;

    // Skip monitoring in test environment
    if (process.env.NODE_ENV === 'test') return;

    const isDevelopment = process.env.NODE_ENV === 'development';
    const shouldLogMetrics = isDevelopment; // Only log in development

    const logMetric = (name: string, value: string | number | object) => {
      if (shouldLogMetrics) {
        console.log(`📊 ${name}:`, value);
      }
    };

    // Core Web Vitals using PerformanceObserver (when available)
    const setupWebVitalsMonitoring = () => {
      if (!('PerformanceObserver' in window)) {
        logMetric('Browser Support', 'PerformanceObserver not available');
        return;
      }

      try {
        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            logMetric('LCP (Largest Contentful Paint)', `${lastEntry.startTime.toFixed(2)}ms`);
          }
        });

        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
          entries.forEach((entry: LayoutShift) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          logMetric('CLS (Cumulative Layout Shift)', clsValue.toFixed(4));
        });

        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEventTiming) => {
            if ('processingStart' in entry) {
              const fid = entry.processingStart - entry.startTime;
              logMetric('FID (First Input Delay)', `${fid.toFixed(2)}ms`);
            }
          });
        });

        fidObserver.observe({ entryTypes: ['first-input'] });

        // Store observers for cleanup
        return [lcpObserver, clsObserver, fidObserver];
      } catch (error) {
        logMetric('Web Vitals Setup', `Failed: ${error}`);
        return [];
      }
    };

    // Navigation and paint timing metrics
    const logNavigationMetrics = () => {
      try {
        if ('performance' in window && 'getEntriesByType' in performance) {
          // Paint timing (First Contentful Paint)
          const paintEntries = performance.getEntriesByType('paint');
          paintEntries.forEach(entry => {
            if (entry.name === 'first-contentful-paint') {
              logMetric('FCP (First Contentful Paint)', `${entry.startTime.toFixed(2)}ms`);
            }
          });

          // Navigation timing
          const navigationEntries = performance.getEntriesByType(
            'navigation'
          ) as PerformanceNavigationTiming[];
          navigationEntries.forEach(entry => {
            logMetric('Navigation Metrics', {
              'DNS Lookup': `${(entry.domainLookupEnd - entry.domainLookupStart).toFixed(2)}ms`,
              'TCP Connect': `${(entry.connectEnd - entry.connectStart).toFixed(2)}ms`,
              'Server Response': `${(entry.responseEnd - entry.requestStart).toFixed(2)}ms`,
              TTFB: `${(entry.responseStart - entry.requestStart).toFixed(2)}ms`,
              'DOM Processing': `${(entry.domContentLoadedEventEnd - entry.responseEnd).toFixed(2)}ms`,
              'Total Load': `${(entry.loadEventEnd - entry.fetchStart).toFixed(2)}ms`,
            });
          });
        }
      } catch (error) {
        logMetric('Navigation Metrics', `Error: ${error}`);
      }
    };

    // Memory usage monitoring (Chrome/Edge only)
    const logMemoryUsage = () => {
      try {
        if ('memory' in performance) {
          const memory = (
            performance as Performance & {
              memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number };
            }
          ).memory;
          logMetric('Memory Usage', {
            'Used Heap': `${Math.round(memory.usedJSHeapSize / 1024 / 1024)}MB`,
            'Total Heap': `${Math.round(memory.totalJSHeapSize / 1024 / 1024)}MB`,
            'Heap Limit': `${Math.round(memory.jsHeapSizeLimit / 1024 / 1024)}MB`,
          });
        }
      } catch {
        // Memory API not available or not supported
      }
    };

    // Setup observers
    const observers = setupWebVitalsMonitoring();

    // Log initial metrics
    const logInitialMetrics = () => {
      logNavigationMetrics();
      logMemoryUsage();
    };

    // Wait for page load to get complete metrics
    if (document.readyState === 'complete') {
      logInitialMetrics();
    } else {
      window.addEventListener('load', logInitialMetrics);
    }

    // Log memory usage periodically in development
    if (isDevelopment) {
      const memoryInterval = setInterval(logMemoryUsage, 30000); // Every 30 seconds

      return () => {
        clearInterval(memoryInterval);
        window.removeEventListener('load', logInitialMetrics);

        // Disconnect observers
        observers?.forEach(observer => {
          try {
            observer.disconnect();
          } catch (error) {
            console.warn('Error disconnecting performance observer:', error);
          }
        });
      };
    }

    // Cleanup function for production
    return () => {
      window.removeEventListener('load', logInitialMetrics);
      observers?.forEach(observer => {
        try {
          observer.disconnect();
        } catch {
          // Ignore cleanup errors
        }
      });
    };
  }, []);

  return null;
};

export default PerformanceMonitor;
