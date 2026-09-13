import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, FileText, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar-container">
        <a href="#hero" className="navbar-brand" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
          <span>Umair Ahmad</span>
          <span className="dot">.</span>
        </a>

        <ul className="navbar-links">
          <li>
            <a href="#platforms" onClick={(e) => { e.preventDefault(); scrollTo('platforms'); }}>
              Live Platforms
            </a>
          </li>
          <li>
            <a href="#ai-paradigm" onClick={(e) => { e.preventDefault(); scrollTo('ai-paradigm'); }}>
              AI Paradigm
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>
              Research & Systems
            </a>
          </li>
          <li>
            <a href="#arsenal" onClick={(e) => { e.preventDefault(); scrollTo('arsenal'); }}>
              Arsenal
            </a>
          </li>
          <li>
            <a href="#experience" onClick={(e) => { e.preventDefault(); scrollTo('experience'); }}>
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
              Contact
            </a>
          </li>
        </ul>

        <div className="navbar-actions">
          <a
            href={PERSONAL_INFO.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <FileText size={14} />
            <span>Resume</span>
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mobile-drawer">
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
            Home
          </a>
          <a href="#platforms" onClick={(e) => { e.preventDefault(); scrollTo('platforms'); }}>
            Live Production Platforms
          </a>
          <a href="#ai-paradigm" onClick={(e) => { e.preventDefault(); scrollTo('ai-paradigm'); }}>
            AI-First Paradigm
          </a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>
            Research & Systems
          </a>
          <a href="#arsenal" onClick={(e) => { e.preventDefault(); scrollTo('arsenal'); }}>
            Technical Arsenal
          </a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); scrollTo('experience'); }}>
            Experience & Education
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
            Contact & Hire
          </a>
          <a
            href={PERSONAL_INFO.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ marginTop: '8px' }}
          >
            <FileText size={16} />
            <span>View Full Resume</span>
          </a>
        </div>
      )}
    </header>
  );
}