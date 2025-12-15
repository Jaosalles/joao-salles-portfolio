import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Onesight",
    role: "Senior Software Engineer",
    period: "April 2024 - Present",
    description: "Leading architecture and performance optimization of a React.js/TypeScript project, reducing loading times with code splitting, lazy loading and Tailwind CSS purging strategies.",
    highlights: [
      "Led React.js/TypeScript project architecture and performance optimization",
      "Reduced loading times using code splitting, lazy loading and Tailwind CSS purging",
      "Implemented CI/CD pipelines with automated tests (unit, integration, E2E) using Jest, Testing Library and Cypress, increasing test coverage by 40%",
      "Mentored developers in React.js and TypeScript best practices"
    ],
  },
  {
    company: "Uber",
    role: "Software Engineer",
    period: "April 2021 - May 2023",
    description: "Optimized scalability and accessibility of a React/TypeScript platform for over 10,000 global users, integrating Sentry and DataDog for error monitoring and performance analysis.",
    highlights: [
      "Optimized React/TypeScript platform scalability and accessibility for 10,000+ global users",
      "Integrated Sentry and DataDog for error monitoring and performance analysis",
      "Automated CI/CD pipelines with SonarQube for code quality, reducing production bugs by 25%",
      "Mentored junior developers and simplified workflows with Jira"
    ],
  },
  {
    company: "Lam Digital",
    role: "Full Stack Developer",
    period: "June 2018 - March 2021",
    description: "Developed a CMS for over 500 daily users using React, Node.js and React Query, increasing content management efficiency by 30%.",
    highlights: [
      "Developed CMS for 500+ daily users using React, Node.js and React Query",
      "Increased content management efficiency by 30%",
      "Integrated payment APIs, real-time notifications (One Signal) and modular components with Storybook",
      "Designed REST APIs with Swagger documentation and implemented end-to-end tests with React Testing Library"
    ],
  },
  {
    company: "NewM Mobile",
    role: "Trainee Support & Junior Mobile Developer",
    period: "June 2016 - August 2017",
    description: "Developed Android applications with Java/SQLite and conducted training for users. Optimized bug tracking and feature testing processes using Jira.",
    highlights: [
      "Developed Android applications with Java/SQLite",
      "Conducted training sessions for users",
      "Optimized bug tracking and feature testing processes using Jira"
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
