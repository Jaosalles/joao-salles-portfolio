import type { Language } from '@/lib/translations';
import { translations } from '@/lib/translations';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Verificar localStorage
    const saved = localStorage.getItem('language') as Language | null;
    if (saved) return saved;

    // Verificar idioma do navegador
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'pt') return 'pt';
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = useCallback(
    (key: string) => {
      const parts = key.split('.');
      let value: unknown = translations[language];
      for (const p of parts) {
        value = (value as Record<string, unknown> | undefined)?.[p];
        if (value === undefined) break;
      }
      return typeof value === 'string' ? value : key;
    },
    [language]
  );

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro de LanguageProvider');
  }
  return context;
};
