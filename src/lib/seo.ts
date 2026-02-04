import { SEO_DEFAULTS } from '@/constants';

export const generateMetaTags = (overrides: Partial<typeof SEO_DEFAULTS> = {}) => {
  const meta = { ...SEO_DEFAULTS, ...overrides };

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords.join(', '),
    'og:title': meta.title,
    'og:description': meta.description,
    'og:image': meta.ogImage,
    'og:type': 'website',
    'og:url': 'https://jaosalles.dev',
    'og:site_name': 'João Pedro Salles Portfolio',
    'og:locale': 'pt_BR',
    'twitter:card': 'summary_large_image',
    'twitter:title': meta.title,
    'twitter:description': meta.description,
    'twitter:image': meta.ogImage,
    'twitter:creator': meta.twitterHandle,
  };
};

export const generateStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'João Pedro Salles',
    jobTitle: 'Senior Frontend Engineer',
    description:
      'Desenvolvedor frontend sênior especializado em React, TypeScript e arquiteturas modernas de frontend. Com 8+ anos de experiência em desenvolvimento web escalável e performático.',
    url: 'https://jaosalles.dev',
    email: 'joaopedrosalles@hotmail.com',
    image: 'https://jaosalles.dev/og-image.png',
    sameAs: [
      'https://github.com/jaosalles',
      'https://www.linkedin.com/in/joao-pedro-salles-dos-santos-a5358a11a/',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
      addressRegion: 'Brasil',
    },
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Vue.js',
      'Node.js',
      'Web Development',
      'Fullstack Development',
      'Testing',
      'Performance Optimization',
      'Accessibility (WCAG)',
      'API Integration',
      'Web Architecture',
      'DevOps Basics',
    ],
    knowsLanguage: [
      {
        '@type': 'Language',
        name: 'Portuguese',
        alternateName: 'Português Brasileiro',
      },
      {
        '@type': 'Language',
        name: 'English',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Professional Inquiry',
      email: 'joaopedrosalles@hotmail.com',
    },
  };
};

export const generateBreadcrumbSchema = () => {
  const pathMap: Record<string, { name: string; position: number }> = {
    '/': { name: 'Home', position: 1 },
    '/#hero': { name: 'Hero', position: 2 },
    '/#experience': { name: 'Experiência', position: 2 },
    '/#projects': { name: 'Projetos', position: 3 },
    '/#tech-stack': { name: 'Tecnologias', position: 4 },
    '/#contact': { name: 'Contato', position: 5 },
  };

  const items = Object.entries(pathMap).map(([path, data]) => ({
    '@type': 'ListItem',
    position: data.position,
    name: data.name,
    item: `https://jaosalles.dev${path}`,
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
};

export const generateWebPageSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'João Pedro Salles - Senior Frontend Engineer',
    description: 'Portfolio profissional com projetos, experiência e stack de tecnologias.',
    url: 'https://jaosalles.dev',
    creator: {
      '@type': 'Person',
      name: 'João Pedro Salles',
    },
    isPartOf: {
      '@type': 'WebSite',
      name: 'João Pedro Salles Portfolio',
      url: 'https://jaosalles.dev',
    },
  };
};
