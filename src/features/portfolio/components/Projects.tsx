import { Button } from '@/components/ui/button';
import { useLanguage } from '@/features/common/context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    key: 'ecommerce',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe', 'Prisma'],
    image: null,
    github: '#',
    live: '#',
    featured: true,
  },
  {
    key: 'designSystem',
    tech: ['React', 'Storybook', 'Styled Components', 'Rollup'],
    image: null,
    github: '#',
    live: '#',
    featured: true,
  },
  {
    key: 'dashboardAnalytics',
    tech: ['React', 'D3.js', 'WebSockets', 'Node.js'],
    image: null,
    github: '#',
    live: '#',
    featured: true,
  },
  {
    key: 'taskManagement',
    tech: ['React', 'Redux', 'Firebase', 'Material UI'],
    image: null,
    github: '#',
    live: '#',
    featured: false,
  },
];

const Projects = () => {
  const { t } = useLanguage();
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t('projects.titlePrefix')}{' '}
            <span className="gradient-text">{t('projects.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('projects.description')}</p>
        </motion.div>

        <div className="grid gap-8">
          {projects
            .filter(p => p.featured)
            .map((project, index) => (
              <motion.article
                key={project.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="glass rounded-2xl p-8 md:p-10 hover:bg-secondary/20 transition-all duration-500 shadow-medium">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Project image placeholder */}
                    <div className="w-full md:w-72 h-48 sm:h-40 rounded-xl bg-secondary/50 flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <div
                        className="w-full h-full opacity-50"
                        style={{
                          background: `linear-gradient(135deg, hsl(var(--primary) / 0.3), hsl(var(--secondary)))`,
                        }}
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors">
                          {t(`projects.items.${project.key}.title`)}
                        </h3>
                        <div className="flex items-center gap-2">
                          <a
                            href={project.github}
                            className="p-2 rounded-lg hover:bg-secondary transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            aria-label={`View ${t(`projects.items.${project.key}.title`)} on GitHub (opens in new window)`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                          <a
                            href={project.live}
                            className="p-2 rounded-lg hover:bg-secondary transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            aria-label={`View live demo of ${t(`projects.items.${project.key}.title`)} (opens in new window)`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {t(`projects.items.${project.key}.description`)}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(tech => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-secondary/50 rounded-full text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
        </div>

        {/* Other projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-sm uppercase tracking-widest text-primary mb-6 font-medium text-center">
            {t('projects.otherTitle')}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {projects
              .filter(p => !p.featured)
              .map(project => (
                <div
                  key={project.key}
                  className="glass rounded-xl p-6 hover:bg-secondary/20 transition-all duration-300 group shadow-card"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-display font-semibold group-hover:text-primary transition-colors">
                      {t(`projects.items.${project.key}.title`)}
                    </h4>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t(`projects.items.${project.key}.description`)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs bg-secondary/50 rounded-full text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/jaosalles" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              {t('projects.viewMoreOnGitHub')}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
