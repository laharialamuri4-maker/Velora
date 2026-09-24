import React from 'react';
import { Sparkles, Eye, Compass, Target, ShieldCheck, Heart, Store } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="section-wrapper about-section">
      <div className="container">
        {/* Industry Studio Feature Banner */}
        <div className="studio-banner-card glass-card">
          <div className="studio-text-side">
            <div className="section-badge">
              <Store size={14} />
              <span>Fashion Designing & Studio Atelier</span>
            </div>
            <h2 className="studio-banner-title">
              Crafting Personalized Fashion with <span className="gold-gradient-text">Elegance & Precision</span>
            </h2>
            <p className="studio-banner-desc">
              Velora operates as a personalized fashion designing platform that blends bespoke tailoring artistry with digital recommendation algorithms. We enable customers to access stylish, comfortable, and well-fitting garments tailored to individual measurements and tastes.
            </p>
            <div className="studio-highlights-row">
              <span className="studio-pill">Bespoke Fitting</span>
              <span className="studio-pill">Fabric Selection</span>
              <span className="studio-pill">Style Consulting</span>
            </div>
          </div>
          <div className="studio-image-side">
            <img 
              src="/assets/theme/velora_industry.jpg" 
              alt="Velora Fashion Industry Studio" 
              className="studio-img"
            />
          </div>
        </div>

        {/* Main About Story */}
        <div className="about-hero-grid">
          <div className="about-text-col">
            <div className="section-badge">
              <Sparkles size={14} />
              <span>Venture Genesis</span>
            </div>
            <h2 className="section-title">
              About <span className="gold-gradient-text">Velora</span>
            </h2>
            <p className="about-lead">
              Velora is an entrepreneurship venture focused on creating stylish, affordable, and high-quality clothing that reflects modern trends while ensuring comfort and individuality. The venture aims to make fashionable apparel accessible to people with diverse tastes and body types.
            </p>
            <p className="about-secondary">
              Born as a college entrepreneurship initiative, Velora bridges the gap between mass-produced fashion catalogs and the individual human desire for authentic self-expression and comfortable fitting.
            </p>

            {/* Core Values Chips */}
            <div className="values-chips-row">
              <div className="value-chip">
                <Heart size={16} className="val-icon" />
                <span>Customer-Centric</span>
              </div>
              <div className="value-chip">
                <Compass size={16} className="val-icon" />
                <span>Simplicity First</span>
              </div>
              <div className="value-chip">
                <ShieldCheck size={16} className="val-icon" />
                <span>Honest Recommendations</span>
              </div>
            </div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="vision-mission-col">
            <div className="vision-card glass-card">
              <div className="vm-icon-box">
                <Eye size={24} />
              </div>
              <div className="vm-content">
                <span className="vm-label">Our Vision</span>
                <h3 className="vm-title">Accessible Personal Discovery</h3>
                <p className="vm-desc">
                  To make personalized fashion discovery and custom designing accessible and convenient for everyday shoppers.
                </p>
              </div>
            </div>

            <div className="mission-card glass-card">
              <div className="vm-icon-box mission-icon">
                <Target size={24} />
              </div>
              <div className="vm-content">
                <span className="vm-label">Our Mission</span>
                <h3 className="vm-title">Matching Who You Are</h3>
                <p className="vm-desc">
                  To help people discover fashion that better matches who they are, how they feel, and how they shop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background: linear-gradient(180deg, rgba(8, 10, 16, 0.95) 0%, rgba(17, 23, 38, 0.8) 100%);
        }
        .studio-banner-card {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 2.5rem;
          padding: 2.25rem;
          background: rgba(18, 24, 40, 0.85);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-xl);
          margin-bottom: 4.5rem;
          align-items: center;
        }
        @media (max-width: 900px) {
          .studio-banner-card {
            grid-template-columns: 1fr;
          }
        }
        .studio-banner-title {
          font-size: 2rem;
          color: #FFFFFF;
          margin: 0.75rem 0;
          line-height: 1.25;
        }
        .studio-banner-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .studio-highlights-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }
        .studio-pill {
          background: rgba(226, 199, 153, 0.12);
          border: 1px solid var(--border-gold);
          color: var(--accent-gold);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 600;
        }
        .studio-image-side {
          border-radius: var(--radius-lg);
          overflow: hidden;
          height: 320px;
        }
        .studio-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .about-hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3.5rem;
          align-items: center;
        }
        @media (max-width: 960px) {
          .about-hero-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
        .about-lead {
          font-size: 1.15rem;
          color: var(--text-primary);
          line-height: 1.7;
          margin-bottom: 1.25rem;
        }
        .about-secondary {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 2rem;
        }
        .values-chips-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .value-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(226, 199, 153, 0.08);
          border: 1px solid rgba(226, 199, 153, 0.2);
          border-radius: var(--radius-full);
          padding: 0.45rem 0.95rem;
          font-size: 0.825rem;
          font-weight: 600;
          color: var(--accent-gold);
        }
        .val-icon {
          color: var(--accent-gold);
        }
        .vision-mission-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .vision-card, .mission-card {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          padding: 2rem;
          background: rgba(18, 24, 40, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-xl);
          transition: all var(--transition-normal);
        }
        .vision-card:hover, .mission-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-gold);
          background: rgba(24, 32, 54, 0.9);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(226, 199, 153, 0.08);
        }
        .vm-icon-box {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background: rgba(226, 199, 153, 0.12);
          border: 1px solid var(--border-gold);
          color: var(--accent-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .vm-icon-box.mission-icon {
          background: rgba(139, 92, 246, 0.15);
          border-color: rgba(139, 92, 246, 0.35);
          color: #C084FC;
        }
        .vm-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-gold);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 0.25rem;
        }
        .vm-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 0.5rem;
        }
        .vm-desc {
          font-size: 0.925rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }
      `}</style>
    </section>
  );
}
