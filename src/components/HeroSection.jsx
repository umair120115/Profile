import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, FileText, Briefcase, Zap, Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ProfilePic from '../assets/umair.jpeg';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-layout">
          {/* Left Column: Mission, Typography, Actions */}
          <div className="hero-left">
            <div className="hero-status-pill">
              <span className="pulse-indicator">
                <span className="ring"></span>
                <span className="dot"></span>
              </span>
              <span>AVAILABLE FOR HIGH-IMPACT ROLES & CONSULTING</span>
            </div>

            <h1 className="hero-title">
              <span className="name-gradient">{PERSONAL_INFO.name}</span>
            </h1>

            <h2 className="hero-role-title">
              {PERSONAL_INFO.title}
            </h2>

            <p className="hero-description">
              {PERSONAL_INFO.tagline}
            </p>

            <div className="hero-actions">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/projects');
                }}
                className="btn btn-primary"
              >
                <span>Explore Projects & Demos</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/experience');
                }}
                className="btn btn-secondary"
              >
                <Briefcase size={16} />
                <span>View Experience</span>
              </button>

              <a
                href={PERSONAL_INFO.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FileText size={16} />
                <span>Resume</span>
              </a>
            </div>

            <div className="hero-social-strip">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="GitHub Profile"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hero-social-link"
                aria-label="Email Umair Ahmad"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: High-Tech Telemetry Bento Card */}
          <div className="hero-right">
            <div className="hero-card-surface">
              <div className="hero-avatar-row">
                <img
                  src={ProfilePic}
                  alt={PERSONAL_INFO.name}
                  className="hero-avatar-img"
                />
                <div className="hero-avatar-meta">
                  <h3>{PERSONAL_INFO.name}</h3>
                  <p>Lead Backend @ CoreBase</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px' }}>
                    <span className="pulse-indicator">
                      <span className="ring"></span>
                      <span className="dot"></span>
                    </span>
                    <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                      Lucknow & Delhi NCR
                    </span>
                  </div>
                </div>
              </div>

              <div className="hero-stat-grid">
                <div className="hero-stat-box" onClick={() => navigate('/projects')} style={{ cursor: 'pointer' }}>
                  <div className="hero-stat-val">4</div>
                  <div className="hero-stat-lbl">Live Production Platforms ↗</div>
                </div>

                <div className="hero-stat-box" onClick={() => navigate('/projects')} style={{ cursor: 'pointer' }}>
                  <div className="hero-stat-val" style={{ color: '#00d2ff' }}>SIH '26</div>
                  <div className="hero-stat-lbl">National Finalist (DoLR) ↗</div>
                </div>

                <div className="hero-stat-box" onClick={() => navigate('/experience')} style={{ cursor: 'pointer' }}>
                  <div className="hero-stat-val" style={{ color: '#10b981' }}>&lt; 50ms</div>
                  <div className="hero-stat-lbl">P99 Query Latency ↗</div>
                </div>

                <div className="hero-stat-box" onClick={() => navigate('/education')} style={{ cursor: 'pointer' }}>
                  <div className="hero-stat-val">M.Tech</div>
                  <div className="hero-stat-lbl">CSE @ Integral Univ ('27) ↗</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
