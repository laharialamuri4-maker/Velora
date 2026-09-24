import React from 'react';
import { MessageSquareQuote, Sparkles, Star } from 'lucide-react';
import { SAMPLE_FEEDBACK } from '../data/ventureContent';

export default function FeedbackSection() {
  return (
    <section className="section-wrapper feedback-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MessageSquareQuote size={14} />
            <span>Sample User Feedback — Prototype</span>
          </div>
          <h2 className="section-title">
            What Early Users <span className="gold-gradient-text">Could Tell Us</span>
          </h2>
          <p className="section-subtitle">
            Conceptual feedback themes observed during initial student focus groups and user-journey simulations.
          </p>
        </div>

        {/* Feedback Cards */}
        <div className="feedback-grid">
          {SAMPLE_FEEDBACK.map((item, idx) => (
            <div key={idx} className="feedback-card glass-card">
              <div className="feedback-card-top">
                <span className="quote-icon">“</span>
                <span className="prototype-feedback-badge">{item.badge}</span>
              </div>

              <p className="feedback-quote">{item.quote}</p>

              <div className="feedback-card-footer">
                <div className="feedback-author-info">
                  <h4 className="author-name">{item.author}</h4>
                  <span className="author-cohort">{item.cohort}</span>
                </div>
                <div className="stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .feedback-section {
          background: linear-gradient(180deg, rgba(8, 10, 16, 0.9) 0%, rgba(14, 19, 32, 0.7) 100%);
        }
        .feedback-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }
        @media (max-width: 900px) {
          .feedback-grid {
            grid-template-columns: 1fr;
          }
        }
        .feedback-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: rgba(18, 24, 38, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-xl);
          padding: 2.25rem 2rem;
          transition: all var(--transition-normal);
        }
        .feedback-card:hover {
          transform: translateY(-5px);
          border-color: var(--border-gold);
          background: rgba(24, 32, 54, 0.9);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(226, 199, 153, 0.08);
        }
        .feedback-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .quote-icon {
          font-family: var(--font-serif);
          font-size: 3rem;
          color: var(--accent-gold);
          line-height: 1;
        }
        .prototype-feedback-badge {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--accent-gold);
          background: rgba(226, 199, 153, 0.1);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
        }
        .feedback-quote {
          font-size: 1.05rem;
          color: #FFFFFF;
          line-height: 1.6;
          font-style: italic;
          margin-bottom: 2rem;
        }
        .feedback-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 1rem;
        }
        .author-name {
          font-size: 0.925rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .author-cohort {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .stars-row {
          display: flex;
          gap: 2px;
        }
      `}</style>
    </section>
  );
}
