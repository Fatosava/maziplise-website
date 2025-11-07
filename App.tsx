
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WorksSection from './components/WorksSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark overflow-x-hidden text-brand-light">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WorksSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
