import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, FileText, BookOpen } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: '01 Overview', path: '/' },
    { label: '02 Experience', path: '/experience' },
    { label: '03 Projects & Demos', path: '/projects' },
    { label: '04 Education & Contact', path: '/education' },
  ];

  return (
    <header className="navbar-wrapper">
      <nav className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span>Umair Ahmad</span>
          <span className="dot">.</span>
        </Link>

        {/* Chapter Tabs */}
        <ul className="navbar-links book-tabs">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={`chapter-tab ${isActive ? 'active' : ''}`}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  {item.label}
                </NavLink>
              </li>
            );
          })}
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

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-drawer">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => {
                setMobileOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{
                color: location.pathname === item.path ? '#00d2ff' : '#f8fafc',
                fontWeight: location.pathname === item.path ? '700' : '500'
              }}
            >
              {item.label}
            </Link>
          ))}
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