import React from 'react';
import { EXPERIENCE_TIMELINE, EDUCATION_TIMELINE, HONORS } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react';

export default function TimelineSection() {
  return (
    <section id="experience" className="timeline-section">
      <div className="container">
        <div className="section-header-block">
          <div className="section-pill">
            <Briefcase size={14} />
            <span>Career & Credentials</span>
          </div>
          <h2 className="section-main-title">
            Engineering Experience & Academia
          </h2>
          <p className="section-subtitle">
            Track record of designing scalable production distributed systems, conducting AI research, and academic excellence in Computer Science.
          </p>
        </div>

        <div className="timeline-layout">
          {/* Column 1: Professional Experience */}
          <div className="timeline-column">
            <h3 className="timeline-column-title">
              <Briefcase size={20} color="#00d2ff" />
              <span>Professional Experience</span>
            </h3>

            <div className="timeline-items">
              {EXPERIENCE_TIMELINE.map((exp, idx) => (
                <div key={idx} className="glass-card timeline-card">
                  <div className="timeline-card-header">
                    <div>
                      <h4 className="timeline-role">{exp.role}</h4>
                      <div className="timeline-company">
                        {exp.url ? (
                          <a
                            href={exp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                          >
                            <span>{exp.company}</span>
                            <ExternalLink size={12} />
                          </a>
                        ) : (
                          exp.company
                        )}
                      </div>
                    </div>
                    <span className="timeline-period">{exp.period}</span>
                  </div>

                  <div className="timeline-location">{exp.location} • {exp.type}</div>

                  <ul className="timeline-bullets">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Education & Honors */}
          <div className="timeline-column">
            {/* Education */}
            <h3 className="timeline-column-title">
              <GraduationCap size={20} color="#00d2ff" />
              <span>Education</span>
            </h3>

            <div className="timeline-items" style={{ marginBottom: '40px' }}>
              {EDUCATION_TIMELINE.map((edu, idx) => (
                <div key={idx} className="glass-card timeline-card">
                  <div className="timeline-card-header">
                    <div>
                      <h4 className="timeline-role" style={{ fontSize: '1.05rem' }}>{edu.degree}</h4>
                      <div className="timeline-company">{edu.institution}</div>
                    </div>
                    <span className="timeline-period">{edu.period}</span>
                  </div>
                  <div className="timeline-location">{edu.location}</div>
                  <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.5 }}>
                    {edu.focus}
                  </p>
                </div>
              ))}
            </div>

            {/* Honors & Awards */}
            <h3 className="timeline-column-title">
              <Award size={20} color="#00d2ff" />
              <span>Honors & Certifications</span>
            </h3>

            <div className="timeline-items">
              {HONORS.map((honor, idx) => (
                <div key={idx} className="glass-card honor-card">
                  <h4 className="honor-title">{honor.title}</h4>
                  <div className="honor-org">{honor.org}</div>
                  <p className="honor-desc">{honor.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
