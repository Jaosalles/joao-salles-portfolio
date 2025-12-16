import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Onesight",
    role: "Engenheiro de Software Sênior",
    period: "Abril de 2024 - Presente",
    description: "Liderança de arquitetura e otimização de performance de um projeto em React.js/TypeScript, reduzindo o tempo de carregamento com code splitting, lazy loading e estratégias de purga do Tailwind CSS.",
    highlights: [
      "Liderança de arquitetura e otimização de performance em projeto React.js/TypeScript",
      "Redução de tempo de carregamento usando code splitting, lazy loading e purga do Tailwind CSS",
      "Implementação de pipelines de CI/CD com testes automatizados (unitários, integração, E2E) usando Jest, Testing Library e Cypress, aumentando a cobertura em 40%",
      "Mentoria de desenvolvedores em boas práticas de React.js e TypeScript"
    ],
  },
  {
    company: "Uber",
    role: "Engenheiro de Software",
    period: "Abril de 2021 - Maio de 2023",
    description: "Otimização de escalabilidade e acessibilidade de uma plataforma em React/TypeScript para mais de 10.000 usuários globais, integrando Sentry e DataDog para monitoramento de erros e análise de performance.",
    highlights: [
      "Otimização de escalabilidade e acessibilidade de plataforma React/TypeScript para 10.000+ usuários globais",
      "Integração de Sentry e DataDog para monitoramento de erros e análise de performance",
      "Automatização de pipelines de CI/CD com SonarQube para qualidade de código, reduzindo bugs em produção em 25%",
      "Mentoria de desenvolvedores juniores e simplificação de fluxos com Jira"
    ],
  },
  {
    company: "Lam Digital",
    role: "Desenvolvedor Full Stack",
    period: "Junho de 2018 - Março de 2021",
    description: "Desenvolvimento de um CMS para mais de 500 usuários diários usando React, Node.js e React Query, aumentando a eficiência de gestão de conteúdo em 30%.",
    highlights: [
      "Desenvolvimento de CMS para 500+ usuários diários usando React, Node.js e React Query",
      "Aumento da eficiência de gestão de conteúdo em 30%",
      "Integração de APIs de pagamento, notificações em tempo real (One Signal) e componentes modulares com Storybook",
      "Desenho de APIs REST com documentação via Swagger e implementação de testes end-to-end com React Testing Library"
    ],
  },
  {
    company: "NewM Mobile",
    role: "Trainee de Suporte & Desenvolvedor Mobile Júnior",
    period: "Junho de 2016 - Agosto de 2017",
    description: "Desenvolvimento de aplicações Android com Java/SQLite e condução de treinamentos para usuários. Otimização de processos de rastreamento de bugs e testes de funcionalidades usando Jira.",
    highlights: [
      "Desenvolvimento de aplicações Android com Java/SQLite",
      "Condução de treinamentos para usuários",
      "Otimização de processos de rastreamento de bugs e testes de funcionalidades usando Jira"
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 80% 50%, hsl(174, 72%, 56%, 0.1) 0%, transparent 50%)"
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
            Experiência <span className="gradient-text">Profissional</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Minha trajetória profissional construindo produtos digitais 
            em empresas de diferentes portes e segmentos.
          </p>
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
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {exp.role}
                    </h3>
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

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

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
