// Application constants
export const APP_CONFIG = {
  name: 'João Pedro Salles - Portfolio',
  description: 'Portfolio profissional de Senior Frontend Engineer',
  version: '1.0.0',
  author: {
    name: 'João Pedro Salles',
    email: 'joaopedrosalles@hotmail.com',
    linkedin: 'https://www.linkedin.com/in/joao-pedro-salles-dos-santos-a5358a11a/',
    github: 'https://github.com/jaosalles'
  },
  social: {
    github: 'https://github.com/jaosalles',
    linkedin: 'https://www.linkedin.com/in/joao-pedro-salles-dos-santos-a5358a11a/',
    email: 'joaopedrosalles@hotmail.com'
  }
} as const

export const NAVIGATION = {
  sections: [
    { id: 'hero', label: 'Início', href: '#hero' },
    { id: 'experience', label: 'Experiência', href: '#experience' },
    { id: 'projects', label: 'Projetos', href: '#projects' },
    { id: 'tech-stack', label: 'Tecnologias', href: '#tech-stack' },
    { id: 'contact', label: 'Contato', href: '#contact' }
  ]
} as const

export const CONTACT_INFO = {
  email: 'joaopedrosalles@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/joao-pedro-salles-dos-santos-a5358a11a/',
  github: 'https://github.com/jaosalles',
  location: 'Brasil (Remoto)'
} as const

export const SKILLS = {
  frontend: [
    'React', 'TypeScript', 'Next.js', 'Vue.js', 'Angular',
    'Tailwind CSS', 'Sass/SCSS', 'Styled Components', 'Framer Motion'
  ],
  backend: [
    'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis',
    'GraphQL', 'REST APIs', 'Express.js', 'Django'
  ],
  tools: [
    'Git', 'Docker', 'AWS', 'Vercel', 'Jest', 'Cypress',
    'Webpack', 'Vite', 'Figma', 'Storybook'
  ]
} as const

// Performance and SEO constants
export const SEO_DEFAULTS = {
  title: 'João Pedro Salles - Senior Frontend Engineer',
  description: 'Desenvolvedor frontend sênior especializado em React, TypeScript e arquiteturas modernas. Experiência em desenvolvimento de aplicações web escaláveis e performáticas.',
  keywords: [
    'frontend developer', 'react developer', 'typescript', 'javascript',
    'web development', 'senior engineer', 'brasil', 'remoto'
  ],
  ogImage: '/og-image.png',
  twitterHandle: '@jaosalles'
} as const

// Animation constants
export const ANIMATIONS = {
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5
  },
  easing: {
    easeOut: [0.25, 0.46, 0.45, 0.94],
    easeInOut: [0.4, 0, 0.2, 1]
  }
} as const
