import { useLanguage } from '@/features/common/context/LanguageContext';
import { motion } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';

const Experience = () => {
  const { t } = useLanguage();
  const experienceKeys = ['onesight', 'uber', 'lamDigital', 'newmMobile'] as const;

  const experiences = experienceKeys.map(key => ({
    company: t(`experience.items.${key}.company`),
    role: t(`experience.items.${key}.role`),
    period: t(`experience.items.${key}.period`),
    description: t(`experience.items.${key}.description`),
    highlights: [
      t(`experience.items.${key}.highlight1`),
      t(`experience.items.${key}.highlight2`),
      t(`experience.items.${key}.highlight3`),
      t(`experience.items.${key}.highlight4`),
    ].filter(Boolean),
  }));
  return (
    <section id="experience" className="py-24 relative">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at 80% 50%, hsl(174, 72%, 56%, 0.1) 0%, transparent 50%)',
        }}
      />

      <div className="container px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t('experience.titlePrefix')}{' '}
            <span className="gradient-text">{t('experience.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('experience.description')}</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-8 w-0.5 h-full bg-border" />
              )}
              <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-secondary border-2 border-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              <div className="glass rounded-xl p-6 md:p-8 hover:bg-secondary/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-primary mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
