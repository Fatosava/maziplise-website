
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorksPage from './pages/WorksPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-brand-dark overflow-x-hidden text-brand-light min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hakkimizda" element={<AboutPage />} />
            <Route path="/islerimiz" element={<WorksPage />} />
            <Route path="/projelerimiz" element={<ProjectsPage />} />
            <Route path="/iletisim" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
