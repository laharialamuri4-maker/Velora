import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { FAQS } from '../data/ventureContent';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section-wrapper faq-section">
      <div className="container container-narrow">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <HelpCircle size={14} />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="section-title">
            Got Questions? <span className="gold-gradient-text">We've Got Answers</span>
          </h2>
          <p className="section-subtitle">
            Essential details about Velora's concept, recommendation mechanism, and prototype scope for evaluators and visitors.
          </p>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-list">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item glass-card ${isOpen ? 'active' : ''}`}
                onClick={() => toggleFAQ(idx)}
              >
                <div className="faq-question-row">
                  <h3 className="faq-question">{item.q}</h3>
                  <button className="faq-toggle-icon" aria-label="Toggle answer">
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                </div>

                {isOpen && (
                  <div className="faq-answer-content">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .faq-section {
          background: linear-gradient(180deg, rgba(14, 19, 32, 0.7) 0%, rgba(8, 10, 16, 0.95) 100%);
        }
        .faq-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .faq-item {
          background: rgba(18, 24, 38, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-lg);
          padding: 1.5rem 1.75rem;
          cursor: pointer;
          transition: all var(--transition-normal);
        }
        .faq-item:hover, .faq-item.active {
          border-color: var(--border-gold);
          background: rgba(24, 32, 54, 0.9);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }
        .faq-question-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .faq-question {
          font-size: 1.1rem;
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.4;
        }
        .faq-toggle-icon {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--accent-gold);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
        }
        .faq-answer-content {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          animation: faqExpand 0.25s ease-out;
        }
        @keyframes faqExpand {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .faq-answer-content p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }
      `}</style>
    </section>
  );
}
