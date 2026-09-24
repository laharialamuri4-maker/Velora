import React from 'react';
import { Sparkles, ArrowRight, XCircle, CheckCircle2 } from 'lucide-react';

export default function ValueProposition({ onTryVelora }) {
  return (
    <section className="section-wrapper uvp-section">
      <div className="container">
        <div className="uvp-card">
          <div className="uvp-ambient-glow"></div>

          <div className="uvp-content">
            <div className="uvp-badge">
              <Sparkles size={14} />
              <span>Personalized Traditional & Classic Curation</span>
            </div>

            <h2 className="uvp-heading">
              Your Style. Your Fit. <br />
              <span className="gold-gradient-text">Your Identity.</span>
            </h2>

            <p className="uvp-body-text">
              Velora eliminates generic catalog clutter and size guesswork. We connect you with classic, traditional, modest, and decent apparel tailored precisely to your silhouette, comfort, occasion, and budget.
            </p>

            <div className="uvp-comparison-grid">
              {/* Generic Marketplaces */}
              <div className="comp-card traditional">
                <div className="comp-header">
                  <XCircle size={18} className="comp-bad-icon" />
                  <h4>Generic Online Marketplaces</h4>
                </div>
                <ul className="comp-list">
                  <li>Overwhelming catalogs with no personal styling</li>
                  <li>Uncertain fits leading to discomfort and frequent returns</li>
                  <li>High customization costs and tailor inaccessibility</li>
                  <li>Time-consuming search across dozens of fragmented tabs</li>
                </ul>
              </div>

              {/* Velora Discovery Lens */}
              <div className="comp-card velora-comp">
                <div className="comp-header">
                  <CheckCircle2 size={18} className="comp-good-icon" />
                  <h4>Velora Tailored Experience</h4>
                </div>
                <ul className="comp-list">
                  <li>Personalized traditional & modest outfit recommendations</li>
                  <li>Silhouette-harmonized drape and perfect fit guarantee</li>
                  <li>Quality heritage fabrics crafted within your budget</li>
                  <li>Instant match scoring & effortless fashion discovery</li>
                </ul>
              </div>
            </div>

            <div className="uvp-action">
              <button className="btn btn-primary btn-lg" onClick={onTryVelora}>
                <Sparkles size={18} />
                <span>Experience Velora</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .uvp-section {
          padding: 4rem 0;
          background: #FAF3EC;
        }
        .uvp-card {
          position: relative;
          background: #FFFFFF;
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-xl);
          padding: 4rem 3rem;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(164, 94, 160, 0.1);
        }
        @media (max-width: 768px) {
          .uvp-card {
            padding: 2.5rem 1.5rem;
          }
        }
        .uvp-ambient-glow {
          position: absolute;
          top: -20%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(164, 94, 160, 0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .uvp-content {
          position: relative;
          z-index: 5;
          text-align: center;
          max-width: 880px;
          margin: 0 auto;
        }
        .uvp-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.85rem;
          background: #F7EDF5;
          border: 1px solid var(--primary-plum);
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--primary-plum);
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .uvp-heading {
          font-family: var(--font-serif);
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.15;
          color: var(--text-dark);
          margin-bottom: 1.5rem;
        }
        @media (max-width: 768px) {
          .uvp-heading {
            font-size: 2.2rem;
          }
        }
        .uvp-body-text {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 2.75rem;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }
        .uvp-comparison-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          text-align: left;
          margin-bottom: 3rem;
        }
        @media (max-width: 768px) {
          .uvp-comparison-grid {
            grid-template-columns: 1fr;
          }
        }
        .comp-card {
          padding: 1.75rem;
          border-radius: var(--radius-lg);
          background: #FAF5F0;
          border: 1px solid rgba(18, 12, 23, 0.08);
        }
        .comp-card.velora-comp {
          background: #FBF4F9;
          border-color: var(--primary-plum);
          box-shadow: 0 10px 25px rgba(164, 94, 160, 0.12);
        }
        .comp-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1rem;
        }
        .comp-header h4 {
          font-size: 1.05rem;
          color: var(--text-dark);
          font-weight: 700;
        }
        .comp-bad-icon {
          color: #EF4444;
        }
        .comp-good-icon {
          color: #10B981;
        }
        .comp-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .comp-list li {
          font-size: 0.85rem;
          color: var(--text-dark);
          line-height: 1.45;
          position: relative;
          padding-left: 1.25rem;
        }
        .comp-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--primary-plum);
          font-weight: bold;
        }
        .uvp-action {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </section>
  );
}
