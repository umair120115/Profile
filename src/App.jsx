import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LivePlatforms from './components/LivePlatforms';
import AiFirstSection from './components/AiFirstSection';
import ProjectsSection from './components/ProjectsSection';
import TechArsenal from './components/TechArsenal';
import TimelineSection from './components/TimelineSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './styles/ModernPortfolio.css';

function PortfolioHome() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash scrolling on deep link or route navigation
    if (location.pathname === '/projects') {
      const el = document.getElementById('platforms') || document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname === '/about') {
      const el = document.getElementById('experience');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname === '/contact') {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <HeroSection />
        <LivePlatforms />
        <AiFirstSection />
        <ProjectsSection />
        <TechArsenal />
        <TimelineSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route path="/projects" element={<PortfolioHome />} />
        <Route path="/about" element={<PortfolioHome />} />
        <Route path="/contact" element={<PortfolioHome />} />
        <Route path="*" element={<PortfolioHome />} />
      </Routes>
    </HashRouter>
  );
}
