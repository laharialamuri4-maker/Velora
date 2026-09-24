import React, { useState, useMemo } from 'react';
import { Compass, Search, Filter, RotateCcw, Sparkles, Tag, ChevronDown } from 'lucide-react';
import ProductCard from './ProductCard';
import { SAMPLE_PRODUCTS } from '../data/products';

export default function Discover({ 
  onViewDetails, 
  onSaveToggle, 
  savedProductIds = [], 
  onExploreSimilar 
}) {
  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQuickTag, setSelectedQuickTag] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [styleFilter, setStyleFilter] = useState('All');
  const [occasionFilter, setOccasionFilter] = useState('All');
  const [budgetFilter, setBudgetFilter] = useState('All');
  const [genderFilter, setGenderFilter] = useState('All');

  const quickTags = [
    'All',
    'Trending Styles',
    'Casual',
    'Formal',
    'Streetwear',
    'Traditional',
    'College Wear',
    'Office Wear',
    'Party Wear'
  ];

  const categories = [
    'All',
    'T-Shirts',
    'Shirts',
    'Jeans',
    'Trousers',
    'Dresses',
    'Kurtas',
    'Jackets',
    'Ethnic Wear',
    'Activewear'
  ];

  const styles = [
    'All',
    'Casual',
    'Formal',
    'Streetwear',
    'Traditional',
    'Smart Casual',
    'Party',
    'Minimal',
    'Sporty'
  ];

  const occasions = [
    'All',
    'College',
    'Office',
    'Casual Outing',
    'Party',
    'Wedding',
    'Travel',
    'Daily Wear'
  ];

  const budgetTiers = [
    'All',
    'Under ₹500',
    '₹500–₹1,000',
    '₹1,000–₹2,000',
    '₹2,000–₹5,000',
    'Above ₹5,000'
  ];

  // Quick tag click handler
  const handleQuickTagClick = (tag) => {
    setSelectedQuickTag(tag);
    if (tag === 'All') {
      setStyleFilter('All');
      setOccasionFilter('All');
    } else if (tag === 'Trending Styles') {
      setStyleFilter('Streetwear');
    } else if (tag === 'Casual' || tag === 'Formal' || tag === 'Streetwear' || tag === 'Traditional') {
      setStyleFilter(tag);
      setOccasionFilter('All');
    } else if (tag === 'College Wear') {
      setOccasionFilter('College');
      setStyleFilter('All');
    } else if (tag === 'Office Wear') {
      setOccasionFilter('Office');
      setStyleFilter('All');
    } else if (tag === 'Party Wear') {
      setOccasionFilter('Party');
      setStyleFilter('All');
    }
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedQuickTag('All');
    setCategoryFilter('All');
    setStyleFilter('All');
    setOccasionFilter('All');
    setBudgetFilter('All');
    setGenderFilter('All');
  };

  // Filtered dataset
  const filteredProducts = useMemo(() => {
    return SAMPLE_PRODUCTS.filter((product) => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        const matchesCat = product.category.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesCat) return false;
      }

      // Gender
      if (genderFilter !== 'All') {
        if (product.gender !== genderFilter && product.gender !== 'Unisex') return false;
      }

      // Category
      if (categoryFilter !== 'All') {
        if (product.category.toLowerCase() !== categoryFilter.toLowerCase()) return false;
      }

      // Style
      if (styleFilter !== 'All') {
        const matchesStyle = Array.isArray(product.style)
          ? product.style.some(s => s.toLowerCase() === styleFilter.toLowerCase())
          : product.style.toLowerCase() === styleFilter.toLowerCase();
        if (!matchesStyle) return false;
      }

      // Occasion
      if (occasionFilter !== 'All') {
        const matchesOccasion = Array.isArray(product.occasion)
          ? product.occasion.some(o => o.toLowerCase() === occasionFilter.toLowerCase())
          : product.occasion.toLowerCase() === occasionFilter.toLowerCase();
        if (!matchesOccasion) return false;
      }

      // Budget
      if (budgetFilter !== 'All') {
        if (product.budgetTier !== budgetFilter) return false;
      }

      return true;
    });
  }, [searchQuery, genderFilter, categoryFilter, styleFilter, occasionFilter, budgetFilter]);

  return (
    <section id="discover" className="section-wrapper discover-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Compass size={14} />
            <span>Curated Fashion Catalog</span>
          </div>
          <h2 className="section-title">
            Discover <span className="gold-gradient-text">Trending Styles</span>
          </h2>
          <p className="section-subtitle">
            Explore our curated prototype catalog of styles, occasions, and budget tiers. Filter dynamically to find pieces matching your vibe.
          </p>
        </div>

        {/* Quick Tag Pills Scroll */}
        <div className="quick-tags-container">
          <div className="quick-tags-scroll">
            {quickTags.map((tag) => (
              <button
                key={tag}
                className={`quick-tag-chip ${selectedQuickTag === tag ? 'active' : ''}`}
                onClick={() => handleQuickTagClick(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Comprehensive Multi-Filter Bar */}
        <div className="filters-glass-bar">
          <div className="filters-top-row">
            {/* Search Input */}
            <div className="search-box">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder="Search styles, categories, or fabrics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
                  ×
                </button>
              )}
            </div>

            {/* Reset Filters button */}
            <button className="btn btn-secondary btn-sm reset-filter-btn" onClick={handleResetFilters}>
              <RotateCcw size={14} />
              <span>Reset Filters</span>
            </button>
          </div>

          {/* Filter Dropdowns Grid */}
          <div className="filter-dropdowns-grid">
            {/* Gender Filter */}
            <div className="dropdown-wrapper">
              <label className="filter-label">Gender</label>
              <select
                value={genderFilter}
                onChange={(e) => setGenderFilter(e.target.value)}
                className="filter-select"
              >
                <option value="All">All Genders</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
              </select>
            </div>

            {/* Category Filter */}
            <div className="dropdown-wrapper">
              <label className="filter-label">Category</label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="filter-select"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>{c === 'All' ? 'All Categories' : c}</option>
                ))}
              </select>
            </div>

            {/* Style Filter */}
            <div className="dropdown-wrapper">
              <label className="filter-label">Style</label>
              <select
                value={styleFilter}
                onChange={(e) => setStyleFilter(e.target.value)}
                className="filter-select"
              >
                {styles.map((s) => (
                  <option key={s} value={s}>{s === 'All' ? 'All Styles' : s}</option>
                ))}
              </select>
            </div>

            {/* Occasion Filter */}
            <div className="dropdown-wrapper">
              <label className="filter-label">Occasion</label>
              <select
                value={occasionFilter}
                onChange={(e) => setOccasionFilter(e.target.value)}
                className="filter-select"
              >
                {occasions.map((o) => (
                  <option key={o} value={o}>{o === 'All' ? 'All Occasions' : o}</option>
                ))}
              </select>
            </div>

            {/* Budget Filter */}
            <div className="dropdown-wrapper">
              <label className="filter-label">Budget Range</label>
              <select
                value={budgetFilter}
                onChange={(e) => setBudgetFilter(e.target.value)}
                className="filter-select"
              >
                {budgetTiers.map((b) => (
                  <option key={b} value={b}>{b === 'All' ? 'All Price Tiers' : b}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Results Count */}
          <div className="filter-status-bar">
            <span className="results-count-text">
              Showing <strong>{filteredProducts.length}</strong> prototype fashion items
            </span>
            <span className="catalog-disclaimer">
              Sample prototype catalog for demonstration
            </span>
          </div>
        </div>

        {/* Product Cards Catalog Grid */}
        <div className="discover-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewDetails}
              onSaveToggle={onSaveToggle}
              isSaved={savedProductIds.includes(product.id)}
              onExploreSimilar={onExploreSimilar}
              showMatchScore={false}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-discover-results glass-card">
            <p>No products found matching your current filter combination.</p>
            <button className="btn btn-primary btn-sm" onClick={handleResetFilters}>
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      <style>{`
        .discover-section {
          background: linear-gradient(180deg, rgba(14, 19, 32, 0.5) 0%, rgba(8, 10, 16, 0.95) 100%);
        }
        .quick-tags-container {
          margin-bottom: 2rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
        }
        .quick-tags-scroll {
          display: flex;
          gap: 0.5rem;
          min-width: max-content;
        }
        .quick-tag-chip {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-secondary);
          padding: 0.45rem 1rem;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .quick-tag-chip:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #FFFFFF;
        }
        .quick-tag-chip.active {
          background: var(--accent-gold);
          color: #0A0D14;
          font-weight: 700;
          border-color: var(--accent-gold);
          box-shadow: 0 0 15px rgba(226, 199, 153, 0.25);
        }
        .filters-glass-bar {
          background: rgba(18, 24, 38, 0.85);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xl);
          padding: 1.75rem;
          margin-bottom: 2.75rem;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
        }
        .filters-top-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }
        .search-box {
          flex: 1;
          min-width: 260px;
          position: relative;
          display: flex;
          align-items: center;
        }
        .search-icon {
          position: absolute;
          left: 1rem;
          color: var(--text-muted);
        }
        .search-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-full);
          padding: 0.65rem 2.5rem 0.65rem 2.75rem;
          color: #FFFFFF;
          font-size: 0.9rem;
          transition: all var(--transition-fast);
        }
        .search-input:focus {
          border-color: var(--border-gold);
          background: rgba(255, 255, 255, 0.08);
        }
        .clear-search-btn {
          position: absolute;
          right: 1rem;
          background: none;
          color: var(--text-muted);
          font-size: 1.25rem;
          cursor: pointer;
        }
        .filter-dropdowns-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
          margin-bottom: 1.25rem;
        }
        @media (max-width: 1024px) {
          .filter-dropdowns-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 640px) {
          .filter-dropdowns-grid {
            grid-template-columns: 1fr;
          }
        }
        .dropdown-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .filter-label {
          font-size: 0.725rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .filter-select {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
          padding: 0.55rem 0.75rem;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          cursor: pointer;
        }
        .filter-select option {
          background: #0E1322;
          color: #FFFFFF;
        }
        .filter-status-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 1rem;
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .filter-status-bar strong {
          color: var(--accent-gold);
        }
        .catalog-disclaimer {
          font-style: italic;
          font-size: 0.75rem;
        }
        .discover-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }
        @media (max-width: 1024px) {
          .discover-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .discover-grid {
            grid-template-columns: 1fr;
          }
        }
        .no-discover-results {
          text-align: center;
          padding: 4rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
        }
      `}</style>
    </section>
  );
}
