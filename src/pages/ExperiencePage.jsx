import React from 'react';
import { EXPERIENCE_TIMELINE } from '../data/portfolioData';
import BookNavigation from '../components/BookNavigation';
import { Briefcase, ExternalLink, CheckCircle2, ShieldCheck, Zap, Database, Terminal, ArrowUpRight } from 'lucide-react';

export default function ExperiencePage() {
  return (
    <div className="page-wrapper fade-in-page">
      <section className="experience-page-section">
        <div className="container">
          <div className="section-header-block">
            <div className="section-pill">
              <Briefcase size={14} />
              <span>Chapter 02 • Production Architecture & Systems</span>
            </div>
            <h1 className="section-main-title">
              Professional Experience & Contributions
            </h1>
            <p className="section-subtitle">
              Detailed engineering contributions across enterprise multi-tenant operating systems, high-concurrency microservices, and automated machine-to-machine cloud architectures.
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

                {/* Detailed Contribution Cards */}
                <div className="experience-contributions-grid">
                  {role.contributions.map((contrib, idx) => (
                    <div key={idx} className="experience-contrib-card">
                      <div className="experience-contrib-header">
                        <span className="contrib-index">0{idx + 1}</span>
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
        prevChapter={{ title: "Overview & Identity", path: "/" }}
        nextChapter={{ title: "Projects & Video Demonstrations", path: "/projects" }}
      />
    </div>
  );
}
