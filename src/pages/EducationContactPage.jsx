import React from 'react';
import { EDUCATION_TIMELINE, HONORS, CERTIFICATIONS, PERSONAL_INFO } from '../data/portfolioData';
import ContactSection from '../components/ContactSection';
import BookNavigation from '../components/BookNavigation';
import { GraduationCap, Award, CheckCircle, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { FaGraduationCap, FaAward, FaCertificate } from 'react-icons/fa';

export default function EducationContactPage() {
  return (
    <div className="page-wrapper fade-in-page">
      <section className="education-page-section">
        <div className="container">
          <div className="section-header-block">
            <div className="section-pill">
              <GraduationCap size={14} />
              <span>Chapter 04 • Academic Foundation & Credentials</span>
            </div>
            <h1 className="section-main-title">
              Education, Honors & Direct Contact
            </h1>
            <p className="section-subtitle">
              Verified academic credentials in Computer Science, national competitive hackathon milestones, and direct collaboration channels.
            </p>
          </div>

          <div className="education-honors-layout">
            {/* Left: Academic Journey */}
            <div className="education-column">
              <h2 className="sub-column-title">
                <FaGraduationCap color="#00d2ff" />
                <span>Academic Journey</span>
              </h2>

              <div className="education-cards-list">
                {EDUCATION_TIMELINE.map((item) => (
                  <div key={item.id} className="glass-card education-node-card">
                    <div className="node-header">
                      <div>
                        <span className="node-type-badge">{item.type}</span>
                        <h3 className="node-degree">{item.degree}</h3>
                        <div className="node-institution">{item.institution}</div>
                      </div>

                      <div className="node-meta-right">
                        <span className="node-period">{item.period}</span>
                        {item.grade && (
                          <span className="node-grade">
                            {item.grade === 'Pursuing' ? 'Currently Enrolled' : `Grade: ${item.grade}`}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="node-location">
                      <MapPin size={13} />
                      <span>{item.location}</span>
                    </div>

                    <p className="node-focus">{item.focus}</p>

                    {item.highlights && (
                      <ul className="node-highlights">
                        {item.highlights.map((h, idx) => (
                          <li key={idx}>{h}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Honors & Certifications */}
            <div className="honors-column">
              <h2 className="sub-column-title">
                <FaAward color="#00d2ff" />
                <span>National Honors & Hackathons</span>
              </h2>

              <div className="honors-list">
                {HONORS.map((h, idx) => (
                  <div key={idx} className="glass-card honor-node-card">
                    <div className="honor-badge-icon">
                      <Award size={18} color="#00d2ff" />
                    </div>
                    <div>
                      <h3 className="honor-node-title">{h.title}</h3>
                      <div className="honor-node-org">{h.org}</div>
                      <p className="honor-node-desc">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications Grid */}
              <h2 className="sub-column-title" style={{ marginTop: '36px' }}>
                <FaCertificate color="#00d2ff" />
                <span>Industry Certifications</span>
              </h2>

              <div className="certifications-grid">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div key={idx} className="glass-card cert-chip-card">
                    <CheckCircle size={15} color="#10b981" />
                    <div>
                      <div className="cert-title">{cert.title}</div>
                      <div className="cert-issuer">{cert.issuer} • {cert.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact Workstation */}
      <ContactSection />

      <BookNavigation
        currentPage={4}
        totalPages={4}
        prevChapter={{ title: "Projects & Video Demonstrations", path: "/projects" }}
        nextChapter={null}
      />
    </div>
  );
}
