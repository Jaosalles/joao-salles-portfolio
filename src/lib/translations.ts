export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    language: {
      pt: 'Português',
      en: 'English',
    },
    common: {
      name: 'João Pedro Salles',
      title: 'Senior Frontend Engineer',
      description:
        'Desenvolvedor frontend sênior especializado em React, TypeScript e arquiteturas modernas.',
    },
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      experience: 'Experiência',
      contact: 'Contato',
    },
    header: {
      toggleTheme: 'Alternar tema',
      toggleLanguage: 'Alternar idioma',
      darkTheme: 'Usar tema escuro',
      lightTheme: 'Usar tema claro',
      hire: 'Contratar',
    },
    hero: {
      title: 'Olá! Eu sou João Pedro',
      subtitle: 'Senior Frontend Engineer',
      availability: 'Disponível para novas oportunidades',
      description:
        'Desenvolvedor frontend sênior especializado em React, TypeScript e arquiteturas modernas.',
      cta: 'Ver meus projetos',
      ctaContact: 'Entrar em contato',
      scroll: 'Scroll',
    },
    about: {
      title: 'Sobre mim',
      description: 'Sou um desenvolvedor fullstack com foco em frontend...',
    },
    experience: {
      titlePrefix: 'Experiência',
      titleHighlight: 'Profissional',
      description:
        'Minha trajetória profissional construindo produtos digitais em empresas de diferentes portes e segmentos.',
      items: {
        onesight: {
          company: 'Onesight',
          role: 'Engenheiro de Software Sênior',
          period: 'Abril de 2024 - Presente',
          description:
            'Liderança de arquitetura e otimização de performance de um projeto em React.js/TypeScript, reduzindo o tempo de carregamento com code splitting, lazy loading e estratégias de purga do Tailwind CSS.',
          highlight1:
            'Liderança de arquitetura e otimização de performance em projeto React.js/TypeScript',
          highlight2:
            'Redução de tempo de carregamento usando code splitting, lazy loading e purga do Tailwind CSS',
          highlight3:
            'Implementação de pipelines de CI/CD com testes automatizados (unitários, integração, E2E) usando Jest, Testing Library e Cypress, aumentando a cobertura em 40%',
          highlight4: 'Mentoria de desenvolvedores em boas práticas de React.js e TypeScript',
        },
        uber: {
          company: 'Uber',
          role: 'Engenheiro de Software',
          period: 'Abril de 2021 - Maio de 2023',
          description:
            'Otimização de escalabilidade e acessibilidade de uma plataforma em React/TypeScript para mais de 10.000 usuários globais, integrando Sentry e DataDog para monitoramento de erros e análise de performance.',
          highlight1:
            'Otimização de escalabilidade e acessibilidade de plataforma React/TypeScript para 10.000+ usuários globais',
          highlight2:
            'Integração de Sentry e DataDog para monitoramento de erros e análise de performance',
          highlight3:
            'Automatização de pipelines de CI/CD com SonarQube para qualidade de código, reduzindo bugs em produção em 25%',
          highlight4: 'Mentoria de desenvolvedores juniores e simplificação de fluxos com Jira',
        },
        lamDigital: {
          company: 'Lam Digital',
          role: 'Desenvolvedor Full Stack',
          period: 'Junho de 2018 - Março de 2021',
          description:
            'Desenvolvimento de um CMS para mais de 500 usuários diários usando React, Node.js e React Query, aumentando a eficiência de gestão de conteúdo em 30%.',
          highlight1:
            'Desenvolvimento de CMS para 500+ usuários diários usando React, Node.js e React Query',
          highlight2: 'Aumento da eficiência de gestão de conteúdo em 30%',
          highlight3:
            'Integração de APIs de pagamento, notificações em tempo real (One Signal) e componentes modulares com Storybook',
          highlight4:
            'Desenho de APIs REST com documentação via Swagger e implementação de testes end-to-end com React Testing Library',
        },
        newmMobile: {
          company: 'NewM Mobile',
          role: 'Trainee de Suporte & Desenvolvedor Mobile Júnior',
          period: 'Junho de 2016 - Agosto de 2017',
          description:
            'Desenvolvimento de aplicações Android com Java/SQLite e condução de treinamentos para usuários. Otimização de processos de rastreamento de bugs e testes de funcionalidades usando Jira.',
          highlight1: 'Desenvolvimento de aplicações Android com Java/SQLite',
          highlight2: 'Condução de treinamentos para usuários',
          highlight3:
            'Otimização de processos de rastreamento de bugs e testes de funcionalidades usando Jira',
        },
      },
    },
    projects: {
      titlePrefix: 'Projetos em',
      titleHighlight: 'Destaque',
      description:
        'Uma seleção dos projetos mais relevantes que desenvolvi, demonstrando diferentes habilidades e tecnologias.',
      otherTitle: 'Outros Projetos',
      viewOnGitHub: 'Ver no GitHub',
      viewLiveDemo: 'Ver demo',
      viewMoreOnGitHub: 'Ver mais no GitHub',
      items: {
        ecommerce: {
          title: 'Plataforma de E-commerce',
          description:
            'Plataforma de e-commerce completa com carrinho, checkout e painel administrativo. Desenvolvida com foco em performance e SEO.',
        },
        designSystem: {
          title: 'Design System',
          description:
            'Sistema de design completo com mais de 50 componentes reutilizáveis, documentação interativa e tokens customizáveis.',
        },
        dashboardAnalytics: {
          title: 'Dashboard Analytics',
          description:
            'Dashboard interativo para visualização de dados em tempo real com gráficos dinâmicos e filtros avançados.',
        },
        taskManagement: {
          title: 'App de Tarefas',
          description:
            'Aplicativo de gerenciamento de tarefas com drag-and-drop, colaboração em tempo real e integrações com APIs externas.',
        },
      },
    },
    techStack: {
      titlePrefix: 'Pilha',
      titleHighlight: 'Tecnológica',
      description:
        'Tecnologias que domino e utilizo diariamente para criar aplicações robustas, performáticas e escaláveis.',
      categories: {
        core: 'Core',
        styling: 'Estilização',
        state: 'Gerenciamento de estado',
        testing: 'Testes',
        tools: 'Ferramentas',
        api: 'APIs',
        cicd: 'CI/CD',
      },
    },
    contact: {
      titlePrefix: 'Vamos',
      titleHighlight: 'Conversar?',
      description:
        'Estou aberto a novas oportunidades e sempre interessado em projetos desafiadores. Entre em contato!',
      infoTitle: 'Informações de Contato',
      email: 'E-mail',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Localização',
      locationValue: 'Brasil (Remoto)',
      form: {
        nameLabel: 'Nome',
        emailLabel: 'Email',
        messageLabel: 'Mensagem',
        namePlaceholder: 'Seu nome',
        emailPlaceholder: 'seu@email.com',
        messagePlaceholder: 'Sua mensagem...',
        submitSending: 'Enviando...',
        submitSend: 'Enviar Mensagem',
        validation: {
          nameMin: 'Nome deve ter pelo menos 2 caracteres',
          emailInvalid: 'Email inválido',
          messageMin: 'Mensagem deve ter pelo menos 10 caracteres',
        },
      },
      toast: {
        successTitle: 'Mensagem enviada com sucesso!',
        successDesc: 'Entrarei em contato em breve.',
        errorTitle: 'Erro ao enviar mensagem',
        errorDesc: 'Por favor, tente novamente ou entre em contato diretamente por email.',
      },
    },
    footer: {
      madeWith: 'Feito com',
      and: 'e',
    },
    notFound: {
      message: 'Oops! Página não encontrada',
      returnHome: 'Voltar para Home',
    },
  },
  en: {
    language: {
      pt: 'Portuguese',
      en: 'English',
    },
    common: {
      name: 'João Pedro Salles',
      title: 'Senior Frontend Engineer',
      description:
        'Senior frontend developer specialized in React, TypeScript and modern architectures.',
    },
    nav: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    header: {
      toggleTheme: 'Toggle theme',
      toggleLanguage: 'Toggle language',
      darkTheme: 'Use dark theme',
      lightTheme: 'Use light theme',
      hire: 'Hire me',
    },
    hero: {
      title: 'Hello! I am João Pedro',
      subtitle: 'Senior Frontend Engineer',
      availability: 'Available for new opportunities',
      description:
        'Senior frontend developer specialized in React, TypeScript and modern architectures.',
      cta: 'View my projects',
      ctaContact: 'Get in touch',
      scroll: 'Scroll',
    },
    about: {
      title: 'About me',
      description: 'I am a fullstack developer focused on frontend...',
    },
    experience: {
      titlePrefix: 'Professional',
      titleHighlight: 'Experience',
      description:
        'My professional journey building digital products across different company sizes and industries.',
      items: {
        onesight: {
          company: 'Onesight',
          role: 'Senior Software Engineer',
          period: 'April 2024 - Present',
          description:
            'Led architecture and performance optimization for a React.js/TypeScript project, reducing load times with code splitting, lazy loading and Tailwind CSS purge strategies.',
          highlight1:
            'Led architecture and performance optimization in a React.js/TypeScript project',
          highlight2:
            'Reduced load times using code splitting, lazy loading and Tailwind CSS purge',
          highlight3:
            'Implemented CI/CD pipelines with automated tests (unit, integration, E2E) using Jest, Testing Library and Cypress, increasing coverage by 40%',
          highlight4: 'Mentored developers on React.js and TypeScript best practices',
        },
        uber: {
          company: 'Uber',
          role: 'Software Engineer',
          period: 'April 2021 - May 2023',
          description:
            'Improved scalability and accessibility of a React/TypeScript platform for 10,000+ global users, integrating Sentry and DataDog for error monitoring and performance analytics.',
          highlight1:
            'Optimized scalability and accessibility of React/TypeScript platform for 10,000+ global users',
          highlight2: 'Integrated Sentry and DataDog for error monitoring and performance analysis',
          highlight3:
            'Automated CI/CD pipelines with SonarQube for code quality, reducing production bugs by 25%',
          highlight4: 'Mentored junior developers and streamlined flows with Jira',
        },
        lamDigital: {
          company: 'Lam Digital',
          role: 'Full Stack Developer',
          period: 'June 2018 - March 2021',
          description:
            'Developed a CMS for 500+ daily users using React, Node.js and React Query, increasing content management efficiency by 30%.',
          highlight1: 'Developed a CMS for 500+ daily users using React, Node.js and React Query',
          highlight2: 'Increased content management efficiency by 30%',
          highlight3:
            'Integrated payment APIs, real-time notifications (One Signal) and modular components with Storybook',
          highlight4:
            'Designed REST APIs with Swagger documentation and implemented end-to-end tests with React Testing Library',
        },
        newmMobile: {
          company: 'NewM Mobile',
          role: 'Support Trainee & Junior Mobile Developer',
          period: 'June 2016 - August 2017',
          description:
            'Developed Android applications with Java/SQLite and conducted user training. Optimized bug tracking and feature testing processes using Jira.',
          highlight1: 'Developed Android applications with Java/SQLite',
          highlight2: 'Conducted user trainings',
          highlight3: 'Optimized bug tracking and feature testing processes using Jira',
        },
      },
    },
    projects: {
      titlePrefix: 'Featured',
      titleHighlight: 'Projects',
      description:
        'A selection of the most relevant projects I developed, showcasing different skills and technologies.',
      otherTitle: 'Other Projects',
      viewOnGitHub: 'View on GitHub',
      viewLiveDemo: 'View live demo',
      viewMoreOnGitHub: 'See more on GitHub',
      items: {
        ecommerce: {
          title: 'E-commerce Platform',
          description:
            'Complete e-commerce platform with cart, checkout and admin dashboard. Built with focus on performance and SEO.',
        },
        designSystem: {
          title: 'Design System',
          description:
            'Comprehensive design system with 50+ reusable components, interactive docs and customizable tokens.',
        },
        dashboardAnalytics: {
          title: 'Dashboard Analytics',
          description:
            'Interactive dashboard for real-time data visualization with dynamic charts and advanced filters.',
        },
        taskManagement: {
          title: 'Task Management App',
          description:
            'Task management app with drag-and-drop, real-time collaboration and integrations with external APIs.',
        },
      },
    },
    techStack: {
      titlePrefix: 'Tech',
      titleHighlight: 'Stack',
      description:
        'Technologies I master and use daily to build robust, performant and scalable applications.',
      categories: {
        core: 'Core',
        styling: 'Styling',
        state: 'State Management',
        testing: 'Testing',
        tools: 'Tools',
        api: 'APIs',
        cicd: 'CI/CD',
      },
    },
    contact: {
      titlePrefix: "Let's",
      titleHighlight: 'Talk?',
      description:
        'I am open to new opportunities and always interested in challenging projects. Get in touch!',
      infoTitle: 'Contact Information',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Location',
      locationValue: 'Brazil (Remote)',
      form: {
        nameLabel: 'Name',
        emailLabel: 'Email',
        messageLabel: 'Message',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'your@email.com',
        messagePlaceholder: 'Your message...',
        submitSending: 'Sending...',
        submitSend: 'Send Message',
        validation: {
          nameMin: 'Name must be at least 2 characters',
          emailInvalid: 'Invalid email',
          messageMin: 'Message must be at least 10 characters',
        },
      },
      toast: {
        successTitle: 'Message sent successfully!',
        successDesc: 'I will get back to you soon.',
        errorTitle: 'Error sending message',
        errorDesc: 'Please try again or contact me directly by email.',
      },
    },
    footer: {
      madeWith: 'Made with',
      and: 'and',
    },
    notFound: {
      message: 'Oops! Page not found',
      returnHome: 'Return to Home',
    },
  },
} as const;
