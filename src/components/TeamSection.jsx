import React from 'react';
import { Users, Mail, Edit3, Sparkles } from 'lucide-react';
import { LinkedInIcon } from './SocialIcons';
import { TEAM_MEMBERS } from '../data/ventureContent';

export default function TeamSection() {
  return (
    <section id="team" className="section-wrapper team-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Users size={14} />
            <span>Venture Founders</span>
          </div>
          <h2 className="section-title">
            Meet the <span className="gold-gradient-text">Velora Team</span>
          </h2>
          <p className="section-subtitle">
            An interdisciplinary student entrepreneurship team combining technology, product design, fashion taxonomy, and customer discovery.
          </p>
        </div>

        {/* Team Collaboration Banner Showcase */}
        <div className="team-banner-showcase glass-card">
          <div className="team-banner-img-box">
            <img 
              src={`${import.meta.env.BASE_URL}assets/theme/velora_founder_studio.jpg`} 
              alt="Velora Venture Team Collaboration" 
              className="team-banner-img"
            />
            <div className="team-img-tag">
              <span>Co-Founders & Core Working Group</span>
            </div>
          </div>
          
          <div className="team-banner-info-box">
            <span className="team-banner-eyebrow">Entrepreneurship Initiative</span>
            <h3 className="team-banner-heading">Built by Students, for Next-Gen Shoppers</h3>
            <p className="team-banner-desc">
              Our team brings together shared passion across tech engineering, fashion design, consumer psychology, and growth strategy to build a personalized discovery experience that simplifies how people find clothes that truly fit.
            </p>
            <div className="team-values-list">
              <div className="t-val">
                <span className="t-val-dot"></span>
                <span>Interdisciplinary Skillsets</span>
              </div>
              <div className="t-val">
                <span className="t-val-dot"></span>
                <span>Customer Focus Group Driven</span>
              </div>
              <div className="t-val">
                <span className="t-val-dot"></span>
                <span>Agile Prototype Iterations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="team-card glass-card">
              <div className="team-avatar-box" style={{ background: member.avatarBg }}>
                <span className="avatar-initials">TM{idx + 1}</span>
              </div>

              <div className="team-card-content">
                <div className="team-name-row">
                  <h3 className="team-name">{member.name}</h3>
                  <span className="placeholder-indicator" title="Editable placeholder for presentation">
                    <Edit3 size={12} />
                  </span>
                </div>
                <span className="team-role">{member.role}</span>
                <p className="team-desc">{member.description}</p>
              </div>

              <div className="team-social-links">
                <a href="#contact" className="team-social-icon" title="LinkedIn Profile (Placeholder)">
                  <LinkedInIcon size={14} />
                </a>
                <a href="#contact" className="team-social-icon" title="Contact Member">
                  <Mail size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .team-section {
          background: linear-gradient(180deg, rgba(17, 23, 38, 0.8) 0%, rgba(8, 10, 16, 0.95) 100%);
        }
        .team-banner-showcase {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 2.5rem;
          padding: 1.75rem;
          background: rgba(18, 24, 40, 0.85);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-xl);
          margin-bottom: 3.5rem;
          align-items: center;
        }
        @media (max-width: 900px) {
          .team-banner-showcase {
            grid-template-columns: 1fr;
          }
        }
        .team-banner-img-box {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          height: 320px;
        }
        .team-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .team-img-tag {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          background: rgba(11, 15, 26, 0.92);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-gold);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-gold);
        }
        .team-banner-info-box {
          display: flex;
          flex-direction: column;
          padding-right: 1rem;
        }
        .team-banner-eyebrow {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-gold);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 0.4rem;
        }
        .team-banner-heading {
          font-size: 1.6rem;
          color: #FFFFFF;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }
        .team-banner-desc {
          font-size: 0.925rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .team-values-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .t-val {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.825rem;
          color: var(--text-primary);
        }
        .t-val-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-gold);
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }
        @media (max-width: 1024px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .team-grid {
            grid-template-columns: 1fr;
          }
        }
        .team-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background: rgba(18, 24, 38, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-xl);
          padding: 2.25rem 1.75rem;
          transition: all var(--transition-normal);
        }
        .team-card:hover {
          transform: translateY(-5px);
          border-color: var(--border-gold);
          background: rgba(24, 32, 54, 0.9);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(226, 199, 153, 0.08);
        }
        .team-avatar-box {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          border: 2px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
        }
        .avatar-initials {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 800;
          color: #FFFFFF;
        }
        .team-card-content {
          margin-bottom: 1.25rem;
        }
        .team-name-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          margin-bottom: 0.25rem;
        }
        .team-name {
          font-size: 1.2rem;
          font-weight: 700;
          color: #FFFFFF;
        }
        .placeholder-indicator {
          color: var(--text-muted);
          opacity: 0.6;
        }
        .team-role {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent-gold);
          display: block;
          margin-bottom: 0.85rem;
        }
        .team-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .team-social-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: auto;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 1rem;
          width: 100%;
          justify-content: center;
        }
        .team-social-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }
        .team-social-icon:hover {
          background: var(--accent-gold);
          color: #0A0D14;
          border-color: var(--accent-gold);
        }
      `}</style>
    </section>
  );
}
