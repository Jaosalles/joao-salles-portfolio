import { useEffect } from 'react';
import { generateStructuredData, generateBreadcrumbSchema, generateWebPageSchema } from '@/lib/seo';

/**
 * Hook para injetar schema.org JSON-LD no document head.
 * Melhora SEO estruturado para recrutadores e search engines.
 */
export const useStructuredData = () => {
  useEffect(() => {
    // Remover scripts JSON-LD existentes
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Schema: Person (perfil profissional)
    const personSchema = document.createElement('script');
    personSchema.type = 'application/ld+json';
    personSchema.textContent = JSON.stringify(generateStructuredData());
    document.head.appendChild(personSchema);

    // Schema: BreadcrumbList (navegação)
    const breadcrumbSchema = document.createElement('script');
    breadcrumbSchema.type = 'application/ld+json';
    breadcrumbSchema.textContent = JSON.stringify(generateBreadcrumbSchema());
    document.head.appendChild(breadcrumbSchema);

    // Schema: WebPage (página)
    const webPageSchema = document.createElement('script');
    webPageSchema.type = 'application/ld+json';
    webPageSchema.textContent = JSON.stringify(generateWebPageSchema());
    document.head.appendChild(webPageSchema);

    return () => {
      // Cleanup não é necessário pois substitui ao atualizar
    };
  }, []);
};
