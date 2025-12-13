import { SEO_DEFAULTS } from '@/constants'

export const generateMetaTags = (overrides: Partial<typeof SEO_DEFAULTS> = {}) => {
  const meta = { ...SEO_DEFAULTS, ...overrides }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords.join(', '),
    'og:title': meta.title,
    'og:description': meta.description,
    'og:image': meta.ogImage,
    'og:type': 'website',
    'twitter:card': 'summary_large_image',
    'twitter:title': meta.title,
    'twitter:description': meta.description,
    'twitter:image': meta.ogImage,
    'twitter:creator': meta.twitterHandle
  }
}

export const generateStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'João Pedro Salles',
    jobTitle: 'Senior Frontend Engineer',
    description: 'Desenvolvedor frontend sênior especializado em React, TypeScript e arquiteturas modernas.',
    url: 'https://jaosalles.dev',
    sameAs: [
      'https://github.com/jaosalles',
      'https://www.linkedin.com/in/joao-pedro-salles-dos-santos-a5358a11a/'
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR'
    },
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Web Development'
    ]
  }
}
