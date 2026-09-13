import React from 'react';
import { OTHER_PROJECTS } from '../data/portfolioData';
import { Terminal, ExternalLink, Code2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header-block">
          <div className="section-pill">
            <Terminal size={14} />
            <span>Research & Enterprise Systems</span>
          </div>
          <h2 className="section-main-title">
            Mission-Critical Architectures & Research
          </h2>
          <p className="section-subtitle">
            National hackathon finalist solutions, centralized enterprise machine-to-machine authentication pipelines, and distributed mobile systems.
          </p>
        </div>

        <div className="other-projects-grid">
          {OTHER_PROJECTS.map((project) => (
            <article key={project.id} className="glass-card project-box">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="project-tag-pill">{project.tag}</span>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hero-social-link"
                      style={{ width: '32px', height: '32px', borderRadius: '8px' }}
                      aria-label={`${project.title} GitHub Repository`}
                    >
                      <FaGithub size={15} />
                    </a>
                  )}
                </div>

                <h3 className="project-box-title">{project.title}</h3>
                <div className="project-box-category">{project.category}</div>
                <p className="project-box-desc">{project.description}</p>

                <ul className="project-box-bullets">
                  {project.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="project-box-tags">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="mono-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
