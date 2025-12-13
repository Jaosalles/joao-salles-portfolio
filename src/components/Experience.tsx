import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Tech Company",
    role: "Senior Frontend Engineer",
    period: "2022 - Presente",
    description: "Liderança técnica do time de frontend, definição de arquitetura e padrões de código. Desenvolvimento de features críticas com React e TypeScript.",
    highlights: [
      "Reduzi o tempo de carregamento em 40% com otimizações de performance",
      "Implementei design system utilizado por 5 squads",
      "Mentorei desenvolvedores júnior e pleno"
    ],
  },
  {
    company: "Startup Inovadora",
    role: "Frontend Engineer",
    period: "2020 - 2022",
    description: "Desenvolvimento de aplicações web complexas com foco em experiência do usuário e escalabilidade.",
    highlights: [
      "Migrei codebase legado de JavaScript para TypeScript",
      "Desenvolvi sistema de componentes reutilizáveis",
      "Integrei APIs GraphQL e REST"
    ],
  },
  {
    company: "Agência Digital",
    role: "Frontend Developer",
    period: "2018 - 2020",
    description: "Criação de websites e aplicações para diversos clientes, desde landing pages até e-commerces completos.",
    highlights: [
      "Entreguei mais de 20 projetos para clientes de diferentes segmentos",
      "Implementei automações de deploy com CI/CD",
      "Colaborei diretamente com designers e stakeholders"
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      {/* Background gradient */}
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
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-8 w-0.5 h-full bg-border" />
              )}
              
              {/* Timeline dot */}
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
