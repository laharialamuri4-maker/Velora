import React from 'react';
import { Bookmark, Sparkles, Eye, ArrowUpRight, Check, Tag } from 'lucide-react';

export default function ProductCard({ 
  product, 
  onViewDetails, 
  onSaveToggle, 
  isSaved = false,
  onExploreSimilar,
  showMatchScore = true 
}) {
  return (
    <div className="product-card">
      {/* Product Image Container */}
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-img"
          loading="lazy"
        />
        
        {/* Top Badges */}
        <div className="image-top-badges">
          {showMatchScore && product.matchScore && (
            <div className="match-score-badge">
              <Sparkles size={12} />
              <span>{product.matchScore}% Velora Match</span>
            </div>
          )}

          <button 
            className={`save-action-btn ${isSaved ? 'saved' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onSaveToggle(product);
            }}
            title={isSaved ? "Remove from saved" : "Save recommendation"}
            aria-label="Save item"
          >
            <Bookmark size={16} fill={isSaved ? "currentColor" : "none"} />
          </button>
        </div>

        {/* Floating Quick Action Overlay */}
        <div className="image-hover-overlay">
          <button 
            className="btn btn-primary btn-sm quick-view-btn"
            onClick={() => onViewDetails(product)}
          >
            <Eye size={14} />
            <span>View Details</span>
          </button>
        </div>

        {/* Prototype Example Disclaimer Tag */}
        <div className="prototype-corner-tag">
          <span>Sample Item</span>
        </div>
      </div>

      {/* Product Card Content */}
      <div className="product-card-body">
        {/* Category & Style Chips */}
        <div className="product-meta-row">
          <span className="product-category-tag">{product.category}</span>
          <span className="product-style-tag">
            {Array.isArray(product.style) ? product.style.join(' • ') : product.style}
          </span>
        </div>

        {/* Product Title */}
        <h4 className="product-name" title={product.name}>
          {product.name}
        </h4>

        {/* Occasion & Fit Detail */}
        <div className="product-fit-info">
          <span>{Array.isArray(product.occasion) ? product.occasion[0] : product.occasion}</span>
          <span className="bullet">•</span>
          <span>{product.fitType || 'Regular Fit'}</span>
        </div>

        {/* Dynamic Velora Match Rationale (if present) */}
        {product.explanation && (
          <div className="product-explanation-box">
            <span className="explanation-sparkle">✦</span>
            <p className="explanation-text">{product.explanation}</p>
          </div>
        )}

        {/* Price & Action Row */}
        <div className="product-card-bottom">
          <div className="price-block">
            <span className="price-currency">₹</span>
            <span className="price-amount">{product.price.toLocaleString('en-IN')}</span>
            <span className="budget-tag">{product.budgetTier}</span>
          </div>

          <div className="card-actions-group">
            <button 
              className="action-link-btn"
              onClick={() => onViewDetails(product)}
              title="View Complete Rationale & Specifications"
            >
              <span>Details</span>
              <ArrowUpRight size={14} />
            </button>
            {onExploreSimilar && (
              <button 
                className="action-similar-btn"
                onClick={() => onExploreSimilar(product)}
                title="Find similar styles in catalog"
              >
                Similar
              </button>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .product-card {
          background: rgba(18, 24, 38, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all var(--transition-normal);
          position: relative;
        }
        .product-card:hover {
          transform: translateY(-5px);
          border-color: var(--border-active);
          background: rgba(22, 30, 48, 0.95);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5), 0 0 20px rgba(226, 199, 153, 0.08);
        }
        .product-image-container {
          position: relative;
          width: 100%;
          height: 280px;
          background: #0B0E17;
          overflow: hidden;
        }
        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .product-card:hover .product-img {
          transform: scale(1.05);
        }
        .image-top-badges {
          position: absolute;
          top: 0.85rem;
          left: 0.85rem;
          right: 0.85rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 5;
        }
        .match-score-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.3rem 0.65rem;
          background: rgba(11, 15, 26, 0.9);
          border: 1px solid rgba(16, 185, 129, 0.5);
          backdrop-filter: blur(8px);
          border-radius: var(--radius-full);
          font-size: 0.725rem;
          font-weight: 700;
          color: #34D399;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }
        .save-action-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(11, 15, 26, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .save-action-btn:hover {
          background: #FFFFFF;
          color: #0A0D14;
        }
        .save-action-btn.saved {
          background: var(--accent-secondary);
          border-color: var(--accent-secondary);
          color: #FFFFFF;
        }
        .image-hover-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 13, 22, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-normal);
        }
        .product-card:hover .image-hover-overlay {
          opacity: 1;
        }
        .prototype-corner-tag {
          position: absolute;
          bottom: 0.5rem;
          right: 0.5rem;
          background: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          font-size: 0.65rem;
          padding: 0.15rem 0.45rem;
          color: var(--text-muted);
        }
        .product-card-body {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: space-between;
        }
        .product-meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.4rem;
        }
        .product-category-tag {
          font-size: 0.725rem;
          font-weight: 700;
          color: var(--accent-gold);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .product-style-tag {
          font-size: 0.725rem;
          color: var(--text-muted);
        }
        .product-name {
          font-size: 1.025rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: 0.35rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .product-fit-info {
          font-size: 0.775rem;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .bullet {
          color: rgba(255, 255, 255, 0.2);
        }
        .product-explanation-box {
          background: rgba(226, 199, 153, 0.08);
          border-left: 2px solid var(--accent-gold);
          padding: 0.45rem 0.65rem;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          margin-bottom: 1rem;
          display: flex;
          gap: 0.4rem;
        }
        .explanation-sparkle {
          color: var(--accent-gold);
          font-size: 0.7rem;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .explanation-text {
          font-size: 0.75rem;
          color: var(--accent-gold-light);
          line-height: 1.4;
          font-style: italic;
        }
        .product-card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 0.85rem;
          margin-top: auto;
        }
        .price-block {
          display: flex;
          flex-direction: column;
        }
        .price-currency {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent-gold);
        }
        .price-amount {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1;
        }
        .budget-tag {
          font-size: 0.65rem;
          color: var(--text-muted);
          margin-top: 2px;
        }
        .card-actions-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .action-link-btn {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-full);
          font-size: 0.775rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .action-link-btn:hover {
          background: var(--accent-gold);
          color: #0A0D14;
          border-color: var(--accent-gold);
        }
        .action-similar-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-size: 0.75rem;
          cursor: pointer;
          padding: 0.25rem;
        }
        .action-similar-btn:hover {
          color: var(--accent-gold);
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
