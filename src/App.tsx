import { Toaster as Sonner } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PerformanceMonitor from './components/PerformanceMonitor';
import Index from './pages/Index';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: (failureCount, error) => {
        // Don't retry on 4xx errors
        if (error && typeof (error as { status?: unknown }).status === 'number') {
          const status = (error as { status: number }).status;
          return status >= 500 && failureCount < 3;
        }
        return failureCount < 3;
      },
    },
  },
});

const App = () => {
  useEffect(() => {
    // Handle client-side routing for GitHub Pages
    if (window.location.hostname.includes('github.io') && window.location.search.startsWith('?/')) {
      const path = window.location.search.slice(2); // Remove '?/'
      // Replace the current URL without causing a page reload
      window.history.replaceState(null, '', path + (window.location.hash || ''));
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <PerformanceMonitor />
        <Toaster />
        <Sonner />
        <BrowserRouter
          basename={window.location.hostname.includes('github.io') ? '/joao-salles-portfolio' : ''}
        >
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
