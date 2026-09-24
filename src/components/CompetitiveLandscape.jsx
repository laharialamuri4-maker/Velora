import React from 'react';
import { Target, Layers, Sparkles, Check, Minus } from 'lucide-react';
import { COMPETITIVE_LANDSCAPE } from '../data/ventureContent';

export default function CompetitiveLandscape() {
  return (
    <section className="section-wrapper competitive-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Target size={14} />
            <span>Market Positioning</span>
          </div>
          <h2 className="section-title">
            Where <span className="gold-gradient-text">Velora Fits</span>
          </h2>
          <p className="section-subtitle">
            {COMPETITIVE_LANDSCAPE.description}
          </p>
        </div>

        {/* Matrix Comparison Table */}
        <div className="comparison-table-wrapper glass-card">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="th-dimension">Strategic Dimension</th>
                <th className="th-marketplaces">
                  <div className="th-title-box">
                    <span>Large Fashion Marketplaces</span>
                    <span className="th-sub">e.g. Myntra, AJIO, Amazon Fashion</span>
                  </div>
                </th>
                <th className="th-velora">
                  <div className="th-title-box">
                    <span className="velora-pill">VELORA FOCUS</span>
                    <span className="th-sub">Personalized Discovery Engine</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPETITIVE_LANDSCAPE.comparisons.map((row, idx) => (
                <tr key={idx}>
                  <td className="td-factor">
                    <strong>{row.factor}</strong>
                  </td>
                  <td className="td-market">
                    <span>{row.marketplaces}</span>
                  </td>
                  <td className="td-velora">
                    <div className="velora-point">
                      <Check size={16} className="table-check" />
                      <span>{row.velora}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .competitive-section {
          background: linear-gradient(180deg, rgba(15, 20, 34, 0.7) 0%, rgba(8, 10, 16, 0.95) 100%);
        }
        .comparison-table-wrapper {
          padding: 0;
          overflow-x: auto;
          background: rgba(18, 24, 38, 0.8);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xl);
        }
        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        .comparison-table th {
          padding: 1.5rem 1.75rem;
          font-size: 0.95rem;
          font-weight: 700;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(11, 15, 26, 0.8);
        }
        .th-dimension {
          width: 25%;
          color: var(--text-muted);
        }
        .th-marketplaces {
          width: 37.5%;
          color: var(--text-secondary);
        }
        .th-velora {
          width: 37.5%;
          background: rgba(226, 199, 153, 0.08) !important;
          border-left: 1px solid rgba(226, 199, 153, 0.2);
          border-right: 1px solid rgba(226, 199, 153, 0.2);
        }
        .th-title-box {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .th-sub {
          font-size: 0.75rem;
          font-weight: 400;
          color: var(--text-muted);
        }
        .velora-pill {
          color: var(--accent-gold);
          font-weight: 800;
          letter-spacing: 0.06em;
        }
        .comparison-table td {
          padding: 1.25rem 1.75rem;
          font-size: 0.9rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .td-factor strong {
          color: #FFFFFF;
        }
        .td-market {
          color: var(--text-secondary);
        }
        .td-velora {
          background: rgba(226, 199, 153, 0.04);
          border-left: 1px solid rgba(226, 199, 153, 0.15);
          border-right: 1px solid rgba(226, 199, 153, 0.15);
          color: #FFFFFF;
          font-weight: 500;
        }
        .velora-point {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .table-check {
          color: #34D399;
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .comparison-table th, .comparison-table td {
            padding: 1rem;
            font-size: 0.825rem;
          }
        }
      `}</style>
    </section>
  );
}
