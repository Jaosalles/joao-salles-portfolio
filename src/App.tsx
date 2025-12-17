import { Toaster as Sonner } from '@/components/ui/feedback/sonner';
import { Toaster } from '@/components/ui/feedback/toaster';
import { TooltipProvider } from '@/components/ui/overlays/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PerformanceMonitor from './components/PerformanceMonitor';
import { LanguageProvider } from './features/common/context/LanguageContext';
import { getBasePath, handleGitHubPagesRouting } from './lib/utils';
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
          const status = (error as unknown as { status: number }).status;
          return status >= 500 && failureCount < 3;
        }
        return failureCount < 3;
      },
    },
  },
});

const App = () => {
  useEffect(() => {
    handleGitHubPagesRouting();
  }, []);

  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <PerformanceMonitor />
          <Toaster />
          <Sonner />
          <BrowserRouter
            basename={getBasePath()}
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true,
            }}
          >
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  );
};

export default App;
