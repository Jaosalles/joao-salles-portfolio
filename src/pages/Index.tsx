import { Header, Footer } from "@/features/common";
import { Hero, Projects, Contact, Experience, TechStack } from "@/features/portfolio";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
