import React, { useState } from 'react';
import { LIVE_PLATFORMS, ALL_PROJECTS } from '../data/portfolioData';
import VideoEmbed from '../components/VideoEmbed';
import BookNavigation from '../components/BookNavigation';
import { Terminal, ExternalLink, Play, Layers, Globe, Code2 } from 'lucide-react';
import { FaGithub, FaYoutube, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');

  // Combine live platforms and other projects into unified list
  const combinedProjects = [
    // Live Platforms
    ...LIVE_PLATFORMS.map(p => ({
      ...p,
      isLive: true,
      category: 'Live Production SaaS',
      hasVideo: false,
      videoEmbed: null
    })),
    // All Other Projects (includes those with videos and github repos)
    ...ALL_PROJECTS.map(p => ({
      ...p,
      isLive: !!p.liveUrl,
      hasVideo: !!p.videoEmbed
    }))
  ];

  const filteredProjects = combinedProjects.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'live') return item.isLive;
    if (filter === 'video') return item.hasVideo;
    if (filter === 'ai') return item.category.toLowerCase().includes('ai') || item.category.toLowerCase().includes('agent');
    if (filter === 'fullstack') return !item.category.toLowerCase().includes('ai');
    return true;
  });

  return (
    <div className="page-wrapper fade-in-page">
      <section className="projects-page-section">
        <div className="container">
          <div className="section-header-block">
            <div className="section-pill">
              <Terminal size={14} />
              <span>Chapter 03 • Engineering Showcase & Demonstrations</span>
            </div>
            <h1 className="section-main-title">
              Projects, Deployments & Video Demonstrations
            </h1>
            <p className="section-subtitle">
              Interactive showcase featuring live multi-tenant production systems, embedded video demonstrations of autonomous AI workflows, and GitHub source code.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="projects-filter-bar">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Projects ({combinedProjects.length})
            </button>
            <button
              className={`filter-btn ${filter === 'live' ? 'active' : ''}`}
              onClick={() => setFilter('live')}
            >
              <Globe size={14} />
              <span>Live Deployed ({LIVE_PLATFORMS.length})</span>
            </button>
            <button
              className={`filter-btn ${filter === 'video' ? 'active' : ''}`}
              onClick={() => setFilter('video')}
            >
              <Play size={14} />
              <span>Video Demonstrations (3)</span>
            </button>
            <button
              className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
              onClick={() => setFilter('ai')}
            >
              AI & Agentic Systems
            </button>
          </div>

          {/* Projects Grid */}
          <div className="projects-display-grid">
            {filteredProjects.map((project) => (
              <article key={project.id} className="glass-card project-showcase-card">
                {/* Embedded Video Player if available */}
                {project.videoEmbed && (
                  <div className="project-video-container">
                    <VideoEmbed url={project.videoEmbed} title={project.title} />
                  </div>
                )}

                <div className="project-content-body">
                  <div className="project-card-meta-top">
                    <span className="project-category-badge">{project.category}</span>
                    {project.badge && (
                      <span
                        className="project-status-badge"
                        style={
                          project.badgeColor
                            ? { color: project.badgeColor, borderColor: `${project.badgeColor}40`, background: `${project.badgeColor}15` }
                            : {}
                        }
                      >
                        {project.badge}
                      </span>
                    )}
                  </div>

                  <h2 className="project-card-title">{project.title || project.name}</h2>
                  {project.tagline && <p className="project-card-tagline">{project.tagline}</p>}
                  <p className="project-card-desc">{project.description}</p>

                  {/* Telemetry metrics if available */}
                  {project.metrics && (
                    <div className="project-card-metrics">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="project-mini-metric">
                          <span className="mini-metric-val">{m.value}</span>
                          <span className="mini-metric-lbl">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Highlights Bullet List */}
                  <ul className="project-card-highlights">
                    {project.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  <div className="project-card-tags">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="mono-chip">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Links (Live, Video, GitHub) */}
                  <div className="project-card-actions">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        <ExternalLink size={14} />
                        <span>Visit {project.displayUrl || 'Live Site'}</span>
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                      >
                        <FaGithub size={14} />
                        <span>Source Code</span>
                      </a>
                    )}

                    {project.youtubeUrl && (
                      <a
                        href={project.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                        style={{ color: '#ff4d4f' }}
                      >
                        <FaYoutube size={15} />
                        <span>Watch on YouTube</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BookNavigation
        currentPage={3}
        totalPages={4}
        prevChapter={{ title: "Professional Experience", path: "/experience" }}
        nextChapter={{ title: "Education & Contact", path: "/education" }}
      />
    </div>
  );
}
