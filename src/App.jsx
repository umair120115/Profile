import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import OverviewPage from './pages/OverviewPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import EducationContactPage from './pages/EducationContactPage';
import Footer from './components/Footer';
import './styles/ModernPortfolio.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="portfolio-app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/education" element={<EducationContactPage />} />
            <Route path="/about" element={<EducationContactPage />} />
            <Route path="/contact" element={<EducationContactPage />} />
            <Route path="*" element={<OverviewPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
