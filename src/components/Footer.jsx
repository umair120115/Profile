import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand Section */}
        <div className="footer-logo">
          <h2>Umair Ahmad<span style={{ color: '#6366f1' }}>.</span></h2>
          <p>Full Stack AI Engineer</p>
          <p style={{ fontSize: '0.85rem', marginTop: '5px' }}>
            Building scalable systems & intelligent agents.
          </p>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <h3>Connect</h3>
          <div className="social-icons">
            <a 
              href="https://www.linkedin.com/in/umair120115/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/umair120115" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="mailto:ua16453@gmail.com" 
              className="social-icon"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>
            <FaEnvelope style={{ fontSize: '0.9rem' }} /> 
            <a href="mailto:ua16453@gmail.com">ua16453@gmail.com</a>
          </p>
          <p>
            <FaPhone style={{ fontSize: '0.9rem' }} /> 
            <span>+91 79055 67038</span>
          </p>
          <p style={{ fontSize: '0.85rem', marginTop: '10px' }}>
             Lucknow, India (Open to Remote)
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Umair Ahmad. Designed with React & Glassmorphism.</p>
      </div>
    </footer>
  );
}

export default Footer;