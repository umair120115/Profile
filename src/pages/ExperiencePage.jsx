import React from 'react';
import { EXPERIENCE_TIMELINE } from '../data/portfolioData';
import BookNavigation from '../components/BookNavigation';
import { Briefcase, Zap, ShieldCheck, Database, Layers, ArrowUpRight, Cpu } from 'lucide-react';

export default function ExperiencePage() {
  // Helper to assign a clean icon to each contribution
  const getContribIcon = (index) => {
    const icons = [
      <Database size={16} color="#00d2ff" />,
      <Zap size={16} color="#10b981" />,
      <ShieldCheck size={16} color="#38bdf8" />,
      <Layers size={16} color="#f59e0b" />
    ];
    return icons[index % icons.length];
  };

  return (
    <div className="page-wrapper fade-in-page">
      <section className="experience-page-section">
        <div className="container">
          <div className="section-header-block">
            <div className="section-pill">
              <Briefcase size={14} />
              <span>Production Architecture & Leadership</span>
            </div>
            <h1 className="section-main-title">
              Professional Experience & Contributions
            </h1>
            <p className="section-subtitle">
              Architectural contributions across multi-tenant enterprise SaaS systems, high-concurrency microservices, and automated machine-to-machine cloud infrastructures.
            </p>
          </div>

          <div className="experience-roles-container">
            {EXPERIENCE_TIMELINE.map((role) => (
              <article key={role.id} className="glass-card experience-role-card">
                {/* Role Header */}
                <div className="experience-role-header">
                  <div>
                    <div className="experience-role-title-row">
                      <h2 className="experience-role-title">{role.role}</h2>
                      <span className="experience-role-type">{role.type}</span>
                    </div>

                    <div className="experience-role-company-row">
                      <span className="experience-role-company">{role.company}</span>
                      {role.url && (
                        <a
                          href={role.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="experience-company-link"
                          aria-label={`Visit ${role.company}`}
                        >
                          <span>{role.company}.in</span>
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="experience-role-meta">
                    <span className="experience-period-badge">{role.period}</span>
                    <span className="experience-location-text">{role.location}</span>
                  </div>
                </div>

                {/* Role Summary */}
                <div className="experience-role-summary">
                  <p>{role.summary}</p>
                </div>

                {/* Detailed Contribution Cards without numbering */}
                <div className="experience-contributions-grid">
                  {role.contributions.map((contrib, idx) => (
                    <div key={idx} className="experience-contrib-card">
                      <div className="experience-contrib-header">
                        <div className="contrib-icon-box">
                          {getContribIcon(idx)}
                        </div>
                        <h3 className="experience-contrib-title">{contrib.title}</h3>
                      </div>
                      <p className="experience-contrib-desc">{contrib.desc}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BookNavigation
        currentPage={2}
        totalPages={4}
        prevChapter={{ title: "Overview", path: "/" }}
        nextChapter={{ title: "Projects & Demos", path: "/projects" }}
      />
    </div>
  );
}
