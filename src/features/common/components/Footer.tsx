import { Github, Heart, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>{t('footer.madeWith')}</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>
              {t('footer.and')} React © {currentYear}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/jaosalles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={t('contact.github')}
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/joao-pedro-salles-dos-santos-a5358a11a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={t('contact.linkedin')}
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:joaopedrosalles@hotmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={t('contact.email')}
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
