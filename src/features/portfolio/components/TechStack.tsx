import { motion } from "framer-motion";

const technologies = [
  { name: "React", level: 95, category: "core" },
  { name: "TypeScript", level: 92, category: "core" },
  { name: "Next.js", level: 88, category: "core" },
  { name: "Tailwind CSS", level: 94, category: "styling" },
  { name: "Styled Components", level: 85, category: "styling" },
  { name: "Redux", level: 88, category: "state" },
  { name: "React Query", level: 90, category: "state" },
  { name: "Zustand", level: 85, category: "state" },
  { name: "Jest", level: 82, category: "testing" },
  { name: "Cypress", level: 78, category: "testing" },
  { name: "Testing Library", level: 85, category: "testing" },
  { name: "Webpack", level: 80, category: "tools" },
  { name: "Vite", level: 88, category: "tools" },
  { name: "Git", level: 90, category: "tools" },
  { name: "GraphQL", level: 82, category: "api" },
  { name: "REST APIs", level: 92, category: "api" },
];

const categories = [
  { key: "core", label: "Core" },
  { key: "styling", label: "Styling" },
  { key: "state", label: "State Management" },
  { key: "testing", label: "Testing" },
  { key: "tools", label: "Ferramentas" },
  { key: "api", label: "APIs" },
];

const TechStack = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tecnologias que domino e utilizo diariamente para criar aplicações 
            robustas, performáticas e escaláveis.
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            className="mb-12"
          >
            <h3 className="text-sm uppercase tracking-widest text-primary mb-6 font-medium">
              {category.label}
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {technologies
                .filter((tech) => tech.category === category.key)
                .map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={item}
                    className="group relative"
                  >
                    <div className="glass px-5 py-3 rounded-xl hover:bg-secondary/50 transition-all duration-300 cursor-default">
                      <div className="flex items-center gap-3">
                        <span className="font-medium">{tech.name}</span>
                        <div className="w-16 h-1.5 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="h-full rounded-full"
                            style={{ background: "var(--gradient-primary)" }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
