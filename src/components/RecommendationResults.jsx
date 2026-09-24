import React, { useState } from 'react';
import { Sparkles, SlidersHorizontal, ArrowUpDown, Filter, Bookmark, RefreshCw, Info, Check } from 'lucide-react';
import ProductCard from './ProductCard';

export default function RecommendationResults({
  recommendations = [],
  activePreferences = null,
  onModifyPreferences,
  onViewDetails,
  onSaveToggle,
  savedProductIds = [],
  onExploreSimilar
}) {
  const [sortBy, setSortBy] = useState('match'); // 'match', 'price-low', 'price-high'
  const [filterCategory, setFilterCategory] = useState('All');

  if (!recommendations || recommendations.length === 0) {
    return null;
  }

  // Extract available categories in results for sub-filtering
  const categoriesInResults = ['All', ...new Set(recommendations.map(r => r.category))];

  // Filter & Sort
  let displayedItems = [...recommendations];
  if (filterCategory !== 'All') {
    displayedItems = displayedItems.filter(item => item.category === filterCategory);
  }

  if (sortBy === 'match') {
    displayedItems.sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0));
  } else if (sortBy === 'price-low') {
    displayedItems.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    displayedItems.sort((a, b) => b.price - a.price);
  }

  return (
    <section id="recommendations-results" className="section-wrapper results-section">
      <div className="container">
        {/* Results Header */}
        <div className="results-header-block">
          <div className="results-badge">
            <Sparkles size={14} />
            <span>Curated For You</span>
          </div>
          
          <h2 className="results-title">
            Your Personalized <span className="gold-gradient-text">Velora Matches</span>
          </h2>

          {activePreferences && (
            <div className="active-prefs-summary">
              <span className="summary-label">Matched criteria:</span>
              <div className="pref-tags-list">
                {activePreferences.gender && <span className="p-tag">{activePreferences.gender}</span>}
                {activePreferences.category && activePreferences.category !== 'All' && <span className="p-tag">{activePreferences.category}</span>}
                {activePreferences.bodyType && activePreferences.bodyType !== 'Prefer not to say' && <span className="p-tag">{activePreferences.bodyType} Fit</span>}
                {activePreferences.styles && activePreferences.styles.map((s, i) => (
                  <span key={i} className="p-tag style-tag">{s}</span>
                ))}
                {activePreferences.occasion && <span className="p-tag">{activePreferences.occasion}</span>}
                {activePreferences.budgetTier && <span className="p-tag budget-tag">{activePreferences.budgetTier}</span>}
              </div>

              <button 
                className="btn btn-secondary btn-sm modify-btn"
                onClick={onModifyPreferences}
              >
                <RefreshCw size={14} />
                <span>Adjust Preferences</span>
              </button>
            </div>
          )}

          {/* Prototype Clarity Notice */}
          <div className="prototype-results-notice">
            <Info size={15} />
            <span>
              <strong>Prototype Evaluation Display:</strong> The {recommendations.length} clothing recommendations below are computed using Velora's prototype rule-matching algorithm based on your indicated preferences.
            </span>
          </div>
        </div>

        {/* Filter and Sorting Control Bar */}
        <div className="results-toolbar">
          {/* Category Filter Chips */}
          <div className="category-scroll-chips">
            {categoriesInResults.map((cat) => (
              <button
                key={cat}
                className={`cat-chip ${filterCategory === cat ? 'active' : ''}`}
                onClick={() => setFilterCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="sort-control">
            <ArrowUpDown size={14} className="sort-icon" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
              aria-label="Sort recommendations"
            >
              <option value="match">Highest Velora Match %</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="results-grid">
          {displayedItems.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewDetails}
              onSaveToggle={onSaveToggle}
              isSaved={savedProductIds.includes(product.id)}
              onExploreSimilar={onExploreSimilar}
              showMatchScore={true}
            />
          ))}
        </div>

        {displayedItems.length === 0 && (
          <div className="empty-results-box">
            <p>No products match the selected category filter.</p>
            <button className="btn btn-secondary btn-sm" onClick={() => setFilterCategory('All')}>
              Show All Matches
            </button>
          </div>
        )}
      </div>

      <style>{`
        .results-section {
          background: #0B0E17;
          border-top: 1px solid rgba(226, 199, 153, 0.15);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .results-header-block {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .results-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.85rem;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.35);
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 700;
          color: #34D399;
          margin-bottom: 0.75rem;
        }
        .results-title {
          font-size: 2.25rem;
          margin-bottom: 1.25rem;
        }
        .active-prefs-summary {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.6rem;
          background: rgba(18, 24, 38, 0.7);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 0.75rem 1.25rem;
          max-width: 860px;
          margin: 0 auto 1.5rem auto;
        }
        .summary-label {
          font-size: 0.775rem;
          color: var(--text-muted);
          font-weight: 600;
        }
        .pref-tags-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .p-tag {
          font-size: 0.725rem;
          background: rgba(255, 255, 255, 0.08);
          color: var(--text-primary);
          padding: 0.2rem 0.55rem;
          border-radius: 4px;
          font-weight: 600;
        }
        .p-tag.style-tag {
          background: rgba(139, 92, 246, 0.2);
          color: #D8B4FE;
        }
        .p-tag.budget-tag {
          background: rgba(226, 199, 153, 0.2);
          color: var(--accent-gold);
        }
        .modify-btn {
          margin-left: 0.5rem;
        }
        .prototype-results-notice {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-full);
          padding: 0.4rem 1rem;
          font-size: 0.775rem;
          color: var(--text-muted);
          max-width: 780px;
        }
        .prototype-results-notice strong {
          color: var(--text-secondary);
        }
        .results-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .category-scroll-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }
        .cat-chip {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-secondary);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .cat-chip:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #FFFFFF;
        }
        .cat-chip.active {
          background: var(--accent-gold);
          color: #0A0D14;
          font-weight: 700;
          border-color: var(--accent-gold);
        }
        .sort-control {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(18, 24, 38, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-md);
          padding: 0.35rem 0.75rem;
        }
        .sort-icon {
          color: var(--accent-gold);
        }
        .sort-select {
          background: transparent;
          color: var(--text-primary);
          font-size: 0.825rem;
          font-weight: 600;
          cursor: pointer;
        }
        .sort-select option {
          background: #0E1322;
          color: #FFFFFF;
        }
        .results-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }
        @media (max-width: 1024px) {
          .results-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .results-grid {
            grid-template-columns: 1fr;
          }
        }
        .empty-results-box {
          text-align: center;
          padding: 3rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: var(--radius-lg);
          color: var(--text-muted);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
      `}</style>
    </section>
  );
}
