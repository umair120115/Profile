import React from 'react';
import { LIVE_PLATFORMS } from '../data/portfolioData';
import { ExternalLink, CheckCircle2, ShieldCheck, Zap, Activity } from 'lucide-react';

export default function LivePlatforms() {
  return (
    <section id="platforms" className="live-platforms-section">
      <div className="container">
        <div className="section-header-block">
          <div className="section-pill">
            <Activity size={14} />
            <span>Proven Production Deployments</span>
          </div>
          <h2 className="section-main-title">
            Live Platforms in Production
          </h2>
          <p className="section-subtitle">
            Enterprise multi-tenant SaaS operating systems, global engineering portals, and industrial calculation workstations engineered for high concurrency, zero-downtime, and sub-50ms latency.
          </p>
        </div>

        <div className="platforms-grid">
          {LIVE_PLATFORMS.map((platform) => (
            <article key={platform.id} className="glass-card platform-card">
              <div>
                {/* Header & Badges */}
                <div className="platform-card-header">
                  <div>
                    <div className="platform-title-row">
                      <h3 className="platform-name">{platform.name}</h3>
                    </div>
                    <span className="platform-role-tag">{platform.role}</span>
                  </div>

                  <span
                    className="platform-badge"
                    style={{
                      backgroundColor: `${platform.badgeColor}15`,
                      borderColor: `${platform.badgeColor}40`,
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      color: platform.badgeColor
                    }}
                  >
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: platform.badgeColor,
                        display: 'inline-block',
                        marginRight: '4px'
                      }}
                    />
                    {platform.badge}
                  </span>
                </div>

                <div className="platform-tagline">{platform.tagline}</div>
                <p className="platform-desc">{platform.description}</p>

                {/* Key Telemetry Metrics */}
                <div className="platform-metrics-row">
                  {platform.metrics.map((metric, idx) => (
                    <div key={idx} className="platform-metric-item">
                      <span className="platform-metric-val">{metric.value}</span>
                      <span className="platform-metric-lbl">{metric.label}</span>
                    </div>
                  ))}
                </div>

                {/* Engineering Highlights */}
                <ul className="platform-highlights">
                  {platform.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tech Stack Chips */}
                <div className="platform-tags">
                  {platform.tech.map((techItem, idx) => (
                    <span key={idx} className="mono-chip">
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* Footer Action */}
                <div className="platform-footer">
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="platform-link-btn"
                  >
                    <span>Visit {platform.displayUrl}</span>
                    <ExternalLink size={15} />
                  </a>

                  <span style={{ fontSize: '0.78rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                    Production SSL • 24/7 Live
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
