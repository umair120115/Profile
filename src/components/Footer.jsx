import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-content">
          <div className="footer-meta">
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontWeight: 800, color: '#f8fafc', fontSize: '1.05rem' }}>
                {PERSONAL_INFO.name}
              </span>
              <span style={{ color: '#00d2ff', fontWeight: 800 }}>.</span>
            </div>
            <p className="footer-copy">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
            </p>
            <p className="footer-attribution">
              Engineered with React 18, Vite & Google Stitch Design System • Deployed on GitHub Pages
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div className="footer-social-links">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="footer-social-btn"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="btn btn-secondary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}