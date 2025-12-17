import { Footer, Header } from '@/features/common';
import { Contact, Experience, Hero, Projects, TechStack } from '@/features/portfolio';
import { useMetaTags } from '@/hooks/use-meta-tags';

const Index = () => {
  useMetaTags();

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
