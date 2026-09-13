import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, ExternalLink, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-card-surface">
          <div className="section-pill" style={{ margin: '0 auto 16px auto' }}>
            <Sparkles size={14} />
            <span>Initiate Collaboration</span>
          </div>

          <h2 className="contact-title">
            Let's Engineer Something High-Impact
          </h2>
          <p className="contact-subtitle">
            Available for Senior Backend & AI Engineering roles, distributed systems consulting, and technical advisory for early-stage and scale-up ventures.
          </p>

          <div className="contact-details-grid">
            <div className="contact-item-box">
              <Mail size={20} className="contact-item-icon" />
              <span className="contact-item-label">Direct Email</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="contact-item-val">
                {PERSONAL_INFO.email}
              </a>
              <span style={{ fontSize: '0.74rem', color: '#64748b' }}>
                Work: {PERSONAL_INFO.workEmail}
              </span>
            </div>

            <div className="contact-item-box">
              <Phone size={20} className="contact-item-icon" />
              <span className="contact-item-label">Direct Phone / WhatsApp</span>
              <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="contact-item-val">
                {PERSONAL_INFO.phone}
              </a>
              <span style={{ fontSize: '0.74rem', color: '#10b981' }}>
                Active on WhatsApp
              </span>
            </div>

            <div className="contact-item-box">
              <MapPin size={20} className="contact-item-icon" />
              <span className="contact-item-label">Current Location</span>
              <span className="contact-item-val">
                {PERSONAL_INFO.location}
              </span>
              <span style={{ fontSize: '0.74rem', color: '#64748b' }}>
                Open to Remote & Relocation
              </span>
            </div>
          </div>

          <div className="contact-actions-row">
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Collaboration%20Opportunity&body=Hi%20Umair,%0D%0A%0D%0AI%20reviewed%20your%20portfolio%20and%20would%20love%20to%20connect%20regarding...`}
              className="btn btn-primary"
            >
              <Send size={16} />
              <span>Send Direct Email</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <FaLinkedin size={16} />
              <span>Connect on LinkedIn</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <FaGithub size={16} />
              <span>Explore GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
