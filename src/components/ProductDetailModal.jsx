import React from 'react';
import { X, Sparkles, Bookmark, Check, ShieldCheck, Tag, Info, ArrowRight, ExternalLink } from 'lucide-react';

export default function ProductDetailModal({ 
  product, 
  onClose, 
  onSaveToggle, 
  isSaved = false,
  onExploreSimilar 
}) {
  if (!product) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close details">
          <X size={20} />
        </button>

        <div className="modal-grid">
          {/* Left: Product Image */}
          <div className="modal-image-col">
            <div className="modal-img-wrapper">
              <img src={product.image} alt={product.name} className="modal-img" />
              {product.matchScore && (
                <div className="modal-floating-match">
                  <Sparkles size={14} />
                  <span>{product.matchScore}% Velora Match</span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Detailed Match Specifications */}
          <div className="modal-details-col">
            <div className="modal-header-meta">
              <span className="modal-category">{product.category}</span>
              <span className="modal-gender">{product.gender} Fashion</span>
            </div>

            <h3 className="modal-title">{product.name}</h3>

            <div className="modal-price-row">
              <span className="modal-price">₹{product.price.toLocaleString('en-IN')}</span>
              <span className="modal-budget-tier">{product.budgetTier} Bracket</span>
            </div>

            {/* Why Velora Recommended this */}
            <div className="modal-match-box">
              <div className="match-box-title">
                <Sparkles size={16} />
                <span>Velora Match Rationale</span>
              </div>
              <p className="match-box-desc">
                {product.explanation || "Curated recommendation evaluated against style, budget, and body-type silhouette comfort."}
              </p>
              {product.matchReasons && product.matchReasons.length > 0 && (
                <ul className="match-reasons-list">
                  {product.matchReasons.map((reason, i) => (
                    <li key={i}>
                      <Check size={14} className="reason-check" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Product Specifications */}
            <div className="modal-specs-grid">
              <div className="spec-item">
                <span className="spec-label">Style Aesthetic</span>
                <span className="spec-val">{Array.isArray(product.style) ? product.style.join(', ') : product.style}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Target Occasion</span>
                <span className="spec-val">{Array.isArray(product.occasion) ? product.occasion.join(', ') : product.occasion}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Fabric / Material</span>
                <span className="spec-val">{product.fabric || '100% Combed Breathable Cotton'}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Silhouette / Fit</span>
                <span className="spec-val">{product.fitType || 'Regular Fit'}</span>
              </div>
              <div className="spec-item spec-full">
                <span className="spec-label">Suitable Silhouettes</span>
                <div className="body-tags-wrap">
                  {product.suitableBodyTypes.map((bt, i) => (
                    <span key={i} className="body-tag">{bt}</span>
                  ))}
                </div>
              </div>
            </div>

            <p className="modal-product-desc">{product.description}</p>

            {/* Prototype Disclaimer Notice */}
            <div className="modal-prototype-notice">
              <Info size={14} />
              <span>
                <strong>Academic Prototype Note:</strong> Products shown are curated sample representations for demonstrating Velora's matching engine and not direct inventory for sale.
              </span>
            </div>

            {/* Action Buttons */}
            <div className="modal-actions-row">
              <button 
                className={`btn ${isSaved ? 'btn-accent' : 'btn-secondary'} modal-save-btn`}
                onClick={() => onSaveToggle(product)}
              >
                <Bookmark size={16} fill={isSaved ? "currentColor" : "none"} />
                <span>{isSaved ? 'Saved to Wishlist' : 'Save Recommendation'}</span>
              </button>

              {onExploreSimilar && (
                <button 
                  className="btn btn-outline-gold modal-similar-btn"
                  onClick={() => {
                    onClose();
                    onExploreSimilar(product);
                  }}
                >
                  <span>Explore Similar</span>
                  <ArrowRight size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(4, 6, 12, 0.85);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: modalFadeIn 0.2s ease-out;
        }
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .modal-content {
          width: 100%;
          max-width: 880px;
          max-height: 90vh;
          overflow-y: auto;
          background: #0E1322;
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-xl);
          padding: 2.25rem;
          position: relative;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(226, 199, 153, 0.15);
        }
        .modal-close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
          z-index: 10;
        }
        .modal-close-btn:hover {
          background: #FFFFFF;
          color: #0A0D14;
        }
        .modal-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 2.25rem;
        }
        .modal-img-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 380px;
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        .modal-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .modal-floating-match {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(11, 15, 26, 0.95);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(16, 185, 129, 0.5);
          color: #34D399;
          padding: 0.4rem 0.8rem;
          border-radius: var(--radius-full);
          font-size: 0.775rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .modal-details-col {
          display: flex;
          flex-direction: column;
        }
        .modal-header-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }
        .modal-category {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-gold);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .modal-gender {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .modal-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.3;
          margin-bottom: 0.75rem;
        }
        .modal-price-row {
          display: flex;
          align-items: baseline;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .modal-price {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--accent-gold);
        }
        .modal-budget-tier {
          font-size: 0.8rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
        }
        .modal-match-box {
          background: rgba(226, 199, 153, 0.08);
          border: 1px solid rgba(226, 199, 153, 0.25);
          border-radius: var(--radius-md);
          padding: 1rem 1.25rem;
          margin-bottom: 1.25rem;
        }
        .match-box-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--accent-gold);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 0.4rem;
        }
        .match-box-desc {
          font-size: 0.825rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 0.5rem;
        }
        .match-reasons-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .match-reasons-list li {
          font-size: 0.775rem;
          color: #CBD5E1;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .reason-check {
          color: #34D399;
        }
        .modal-specs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-md);
          padding: 1rem;
          margin-bottom: 1rem;
        }
        .spec-item {
          display: flex;
          flex-direction: column;
        }
        .spec-full {
          grid-column: span 2;
        }
        .spec-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-bottom: 2px;
        }
        .spec-val {
          font-size: 0.825rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .body-tags-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-top: 4px;
        }
        .body-tag {
          font-size: 0.7rem;
          background: rgba(255, 255, 255, 0.06);
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          color: var(--text-secondary);
        }
        .modal-product-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 1rem;
        }
        .modal-prototype-notice {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          background: rgba(139, 92, 246, 0.08);
          border: 1px solid rgba(139, 92, 246, 0.25);
          border-radius: var(--radius-sm);
          padding: 0.65rem 0.85rem;
          font-size: 0.75rem;
          color: #D8B4FE;
          line-height: 1.4;
          margin-bottom: 1.25rem;
        }
        .modal-actions-row {
          display: flex;
          gap: 0.75rem;
          margin-top: auto;
        }
        @media (max-width: 768px) {
          .modal-grid {
            grid-template-columns: 1fr;
          }
          .modal-img-wrapper {
            min-height: 240px;
            max-height: 280px;
          }
          .modal-actions-row {
            flex-direction: column;
          }
          .modal-content {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
