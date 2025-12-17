import { Button } from '@/components/ui/button';
import { useHashNavigation } from '@/hooks/use-hash-navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Globe, Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { navigateToSection } = useHashNavigation();
  const location = useLocation();
  const { resolvedTheme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = useMemo(
    () => [
      { label: t('nav.about'), href: '#about' },
      { label: t('nav.projects'), href: '#projects' },
      { label: t('nav.experience'), href: '#experience' },
      { label: t('nav.contact'), href: '#contact' },
    ],
    [t]
  );

  const handleNavigate = (sectionId: string, closeMenu = false) => {
    navigateToSection(sectionId);
    // Try to scroll immediately (helps mobile where hash handling may be async)
    const el = document.getElementById(sectionId);
    if (el && typeof (el as HTMLElement).scrollIntoView === 'function') {
      (el as HTMLElement).scrollIntoView({ behavior: 'smooth' });
    }
    if (closeMenu) setIsMobileMenuOpen(false);
  };

  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);
  const firstMenuItemRef = useRef<HTMLButtonElement | null>(null);
  const lastMenuItemRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on escape and close when clicking outside the mobile menu
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    }

    function onPointerDown(e: PointerEvent) {
      if (!isMobileMenuOpen) return;
      const path =
        (e.composedPath ? e.composedPath() : (e as unknown as { path?: EventTarget[] }).path) || [];
      const clickedInside =
        mobileMenuRef.current &&
        (Array.isArray(path)
          ? path.includes(mobileMenuRef.current)
          : mobileMenuRef.current.contains(e.target as Node));
      const clickedToggle =
        toggleButtonRef.current &&
        (Array.isArray(path)
          ? path.includes(toggleButtonRef.current)
          : toggleButtonRef.current.contains(e.target as Node));
      if (!clickedInside && !clickedToggle) setIsMobileMenuOpen(false);
    }

    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [isMobileMenuOpen]);

  // Focus trap no mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift+Tab no primeiro item → foca último
        if (document.activeElement === firstMenuItemRef.current) {
          lastMenuItemRef.current?.focus();
          e.preventDefault();
        }
      } else {
        // Tab no último item → foca primeiro
        if (document.activeElement === lastMenuItemRef.current) {
          firstMenuItemRef.current?.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      if (firstMenuItemRef.current) {
        firstMenuItemRef.current.focus();
      }
    } else {
      if (toggleButtonRef.current) {
        toggleButtonRef.current.focus();
      }
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'glass py-4' : 'py-6'
      }`}
    >
      <div className="container px-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="font-display text-xl font-bold gradient-text">
            &lt;Dev /&gt;
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(link => {
              const isActive = location.hash === link.href;
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavigate(link.href.slice(1))}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group cursor-pointer focus:outline-none focus:text-foreground"
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </button>
                </li>
              );
            })}
            <li>
              <button
                type="button"
                aria-label={t('header.toggleTheme')}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground transition-colors relative"
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                title={resolvedTheme === 'dark' ? t('header.lightTheme') : t('header.darkTheme')}
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">{t('header.toggleTheme')}</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                aria-label={t('header.toggleLanguage')}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                title={t('header.toggleLanguage')}
              >
                <Globe className="h-4 w-4" />
                <span className="sr-only">{t('header.toggleLanguage')}</span>
              </button>
            </li>
          </ul>

          <div className="hidden md:block">
            <Button variant="hero" size="sm" onClick={() => navigateToSection('contact')}>
              {t('header.hire')}
            </Button>
          </div>

          <button
            className="md:hidden p-2.5 rounded-lg hover:bg-secondary transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            ref={toggleButtonRef}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="md:hidden overflow-hidden glass rounded-b-xl mt-2 shadow-strong"
              ref={mobileMenuRef}
            >
              <ul className="py-6 space-y-4">
                {navLinks.map((link, i) => {
                  const isActive = location.hash === link.href;
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.2 }}
                    >
                      <button
                        onClick={() => {
                          handleNavigate(link.href.slice(1), true);
                        }}
                        ref={i === 0 ? firstMenuItemRef : undefined}
                        aria-current={isActive ? 'page' : undefined}
                        className="block text-lg text-muted-foreground hover:text-foreground transition-colors text-left w-full px-4 py-2 rounded-lg hover:bg-secondary focus:ring-2 focus:ring-primary focus:outline-none"
                      >
                        {link.label}
                      </button>
                    </motion.li>
                  );
                })}
                <li>
                  <button
                    type="button"
                    aria-label={t('header.toggleTheme')}
                    className="mt-2 inline-flex h-10 w-full items-center justify-center rounded-md border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground transition-colors relative"
                    onClick={() => {
                      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
                      setIsMobileMenuOpen(false);
                    }}
                    title={
                      resolvedTheme === 'dark' ? t('header.lightTheme') : t('header.darkTheme')
                    }
                  >
                    <div className="relative inline-flex items-center gap-2">
                      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span>{t('header.toggleTheme')}</span>
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    aria-label={t('header.toggleLanguage')}
                    className="mt-2 inline-flex h-10 w-full items-center justify-center rounded-md border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    onClick={() => {
                      setLanguage(language === 'pt' ? 'en' : 'pt');
                      setIsMobileMenuOpen(false);
                    }}
                    title={t('header.toggleLanguage')}
                  >
                    <div className="relative inline-flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      <span>{t(`language.${language === 'pt' ? 'en' : 'pt'}`)}</span>
                    </div>
                  </button>
                </li>
                <li className="pt-4">
                  <Button
                    ref={lastMenuItemRef as React.Ref<HTMLButtonElement>}
                    variant="hero"
                    className="w-full"
                    onClick={() => {
                      navigateToSection('contact');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {t('header.hire')}
                  </Button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
