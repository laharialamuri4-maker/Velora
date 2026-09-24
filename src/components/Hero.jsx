import React from 'react';
import { Sparkles, Compass, CheckCircle, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

export default function Hero({ onGetStarted, onExplore }) {
  return (
    <section id="home" className="hero-section">
      {/* Background ambient lighting effects */}
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>

      <div className="container hero-container">
        {/* Left Column: Text & CTAs */}
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={15} className="hero-badge-icon" />
            <span>DESIGNED FOR YOU, JUST FOR YOU</span>
          </div>

          <h1 className="hero-heading">
            Your Style. Your Fit. <br />
            <span className="gold-gradient-text">Your Identity.</span>
          </h1>

          <p className="hero-subheading">
            Velora designs classic, traditional, and bespoke fashion personalized to your <strong>measurements</strong>, <strong>body type</strong>, <strong>comfort</strong>, and <strong>budget</strong>.
          </p>

          <div className="hero-actions">
            <button 
              className="btn btn-primary btn-lg hero-btn-primary"
              onClick={onGetStarted}
            >
              <Sparkles size={18} />
              <span>Get Personalized Recommendations</span>
            </button>

            <button 
              className="btn btn-secondary btn-lg hero-btn-secondary"
              onClick={onExplore}
            >
              <Compass size={18} />
              <span>Explore Boutique Studio</span>
            </button>
          </div>

          {/* Supporting Statement & 4 Core Pillars from user slide */}
          <div className="hero-supporting">
            <div className="supporting-pill">
              <span className="supporting-dot"></span>
              <p className="supporting-text">“Empowering every individual to look & feel their best”</p>
            </div>
            
            <div className="hero-core-pillars">
              <div className="pillar-item">
                <span className="pillar-icon">👗</span>
                <span className="pillar-label">Personalized Designs</span>
              </div>
              <div className="pillar-item">
                <span className="pillar-icon">📏</span>
                <span className="pillar-label">Perfect Fit</span>
              </div>
              <div className="pillar-item">
                <span className="pillar-icon">🧵</span>
                <span className="pillar-label">Quality Fabrics</span>
              </div>
              <div className="pillar-item">
                <span className="pillar-icon">💖</span>
                <span className="pillar-label">Made For You</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Brand Poster from user slides */}
        <div className="hero-visual">
          <div className="visual-card-main floating-elem">
            <div className="visual-image-wrapper">
              <img 
                src={`${import.meta.env.BASE_URL}assets/theme/velora_brand_poster.jpg`} 
                alt="Velora Designed For You, Just For You" 
                className="visual-img"
              />
              <div className="visual-overlay"></div>
            </div>

            {/* Floating Match Badge */}
            <div className="floating-match-badge">
              <div className="badge-ring">
                <span className="score-text">98%</span>
              </div>
              <div className="badge-text-group">
                <span className="badge-title">Velora Match</span>
                <span className="badge-desc">Traditional • Royal Silk • Custom Cut</span>
              </div>
            </div>

            {/* Floating Tagline Pill */}
            <div className="floating-price-badge">
              <span className="price-tag">Pure Elegance</span>
              <span className="price-label">Handcrafted Heritage</span>
            </div>

            {/* Bottom Card Summary */}
            <div className="visual-card-footer">
              <div className="curation-indicator">
                <span className="curation-sparkle">✦</span>
                <span>Bespoke Design Craftsmanship</span>
              </div>
              <div className="tag-group">
                <span className="mini-tag">Traditional Wear</span>
                <span className="mini-tag">Decent Fit</span>
              </div>
            </div>
          </div>

          {/* Secondary Floating Studio Thumbnail */}
          <div className="visual-card-secondary">
            <img 
              src={`${import.meta.env.BASE_URL}assets/theme/velora_founder_studio.jpg`} 
              alt="Velora Designer Studio"
              className="thumb-img" 
            />
            <div className="thumb-info">
              <span className="thumb-match">Studio Atelier</span>
              <span className="thumb-title">Fashion Designing</span>
              <span className="thumb-price">“Fashion is about being you”</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding: 5rem 0 6rem 0;
          overflow: hidden;
        }
        .hero-glow-1 {
          position: absolute;
          top: -10%;
          left: -5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(164, 94, 160, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .hero-glow-2 {
          position: absolute;
          top: 20%;
          right: -5%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(229, 195, 132, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 3.5rem;
          position: relative;
          z-index: 10;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1.1rem;
          background: rgba(229, 195, 132, 0.1);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent-gold);
          letter-spacing: 0.08em;
          margin-bottom: 1.5rem;
          box-shadow: 0 0 20px rgba(229, 195, 132, 0.15);
        }
        .hero-badge-icon {
          color: #D4AF37;
        }
        .hero-heading {
          font-size: 3.8rem;
          line-height: 1.1;
          font-weight: 800;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }
        .hero-subheading {
          font-size: 1.2rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 2.25rem;
          max-width: 580px;
        }
        .hero-subheading strong {
          color: #FFFFFF;
          font-weight: 600;
        }
        .hero-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }
        .hero-supporting {
          border-top: 1px solid rgba(229, 195, 132, 0.15);
          padding-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .supporting-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
        }
        .supporting-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-gold);
          box-shadow: 0 0 8px var(--accent-gold);
        }
        .supporting-text {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--accent-gold-light);
          font-style: italic;
        }
        .hero-core-pillars {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
        }
        .pillar-item {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(229, 195, 132, 0.18);
          border-radius: var(--radius-md);
          padding: 0.6rem 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .pillar-icon {
          font-size: 1rem;
        }
        .pillar-label {
          font-size: 0.725rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        
        /* Right visual */
        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
        }
        .visual-card-main {
          width: 100%;
          max-width: 440px;
          background: rgba(30, 21, 40, 0.88);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-xl);
          padding: 1rem;
          position: relative;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(229, 195, 132, 0.15);
        }
        .visual-image-wrapper {
          position: relative;
          width: 100%;
          height: 480px;
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        .visual-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .visual-card-main:hover .visual-img {
          transform: scale(1.03);
        }
        .visual-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 65%, rgba(18, 12, 23, 0.85) 100%);
        }
        .floating-match-badge {
          position: absolute;
          top: 1.75rem;
          left: 1.75rem;
          background: rgba(22, 15, 30, 0.95);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(16, 185, 129, 0.5);
          border-radius: var(--radius-md);
          padding: 0.6rem 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
        }
        .badge-ring {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, #10B981, #06B6D4);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 12px rgba(16, 185, 129, 0.4);
        }
        .score-text {
          font-size: 0.825rem;
          font-weight: 800;
          color: #0A0D14;
        }
        .badge-text-group {
          display: flex;
          flex-direction: column;
        }
        .badge-title {
          font-size: 0.75rem;
          font-weight: 700;
          color: #34D399;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .badge-desc {
          font-size: 0.7rem;
          color: var(--text-secondary);
        }
        .floating-price-badge {
          position: absolute;
          top: 1.75rem;
          right: 1.75rem;
          background: rgba(22, 15, 30, 0.95);
          backdrop-filter: blur(12px);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-md);
          padding: 0.5rem 0.8rem;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
        }
        .price-tag {
          font-family: var(--font-heading);
          font-weight: 800;
          color: var(--accent-gold);
          font-size: 0.95rem;
          line-height: 1;
        }
        .price-label {
          font-size: 0.65rem;
          color: var(--text-muted);
          margin-top: 2px;
        }
        .visual-card-footer {
          margin-top: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 0.5rem;
        }
        .curation-indicator {
          font-size: 0.775rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .curation-sparkle {
          color: var(--accent-gold);
        }
        .tag-group {
          display: flex;
          gap: 0.4rem;
        }
        .mini-tag {
          font-size: 0.7rem;
          padding: 0.2rem 0.5rem;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 4px;
          color: var(--text-secondary);
        }
        .visual-card-secondary {
          position: absolute;
          bottom: -1.5rem;
          left: -2.5rem;
          background: rgba(25, 17, 34, 0.95);
          backdrop-filter: blur(16px);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-lg);
          padding: 0.65rem;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
          animation: floatAnimation 6s ease-in-out infinite 1s;
        }
        .thumb-img {
          width: 58px;
          height: 58px;
          border-radius: 10px;
          object-fit: cover;
        }
        .thumb-info {
          display: flex;
          flex-direction: column;
          padding-right: 0.75rem;
        }
        .thumb-match {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--accent-gold);
        }
        .thumb-title {
          font-size: 0.8rem;
          font-weight: 600;
          color: #FFFFFF;
        }
        .thumb-price {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-style: italic;
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 4rem;
          }
          .hero-subheading {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-supporting {
            align-items: center;
          }
          .hero-core-pillars {
            grid-template-columns: repeat(2, 1fr);
          }
          .visual-card-secondary {
            left: 0;
          }
        }

        @media (max-width: 640px) {
          .hero-heading {
            font-size: 2.6rem;
          }
          .hero-subheading {
            font-size: 1.05rem;
          }
          .hero-btn-primary, .hero-btn-secondary {
            width: 100%;
          }
          .hero-core-pillars {
            grid-template-columns: 1fr;
            width: 100%;
          }
          .visual-card-secondary {
            display: none;
          }
          .visual-image-wrapper {
            height: 360px;
          }
        }
      `}</style>
    </section>
  );
}
