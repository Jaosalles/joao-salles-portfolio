import { useLanguage } from '@/features/common/context/LanguageContext';
import { useEffect } from 'react';

/**
 * Hook para atualizar metatags SEO conforme a linguagem muda.
 */
export const useMetaTags = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    const title = `${t('common.name')} | ${t('common.title')}`;
    const description = t('common.description');

    // Atualizar title
    document.title = title;

    // Atualizar meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Atualizar og:title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);

    // Atualizar og:description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', description);

    // Atualizar lang do HTML
    document.documentElement.lang = language;
  }, [language, t]);
};
