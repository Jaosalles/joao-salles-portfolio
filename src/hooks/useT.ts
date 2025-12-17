import { useLanguage } from '@/features/common/context/LanguageContext';

/**
 * Simple hook to access the translation function.
 * Shorthand for useLanguage().t
 */
export const useT = () => {
  const { t } = useLanguage();
  return t;
};
