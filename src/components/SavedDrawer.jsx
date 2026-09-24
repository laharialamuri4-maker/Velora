import React from 'react';
import { X, Bookmark, Trash2, ArrowUpRight, Sparkles, Tag, ShoppingBag } from 'lucide-react';

export default function SavedDrawer({ 
  isOpen, 
  onClose, 
  savedProducts = [], 
  onRemoveSaved, 
  onClearAll, 
  onViewDetails 
}) {
  if (!isOpen) return null;

  const totalPrice = savedProducts.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="drawer-header">
          <div className="drawer-title-box">
            <Bookmark size={20} className="drawer-bm-icon" />
            <h3 className="drawer-title">Saved Outfits</h3>
            <span className="drawer-count-badge">{savedProducts.length}</span>
          </div>

          <button className="drawer-close-btn" onClick={onClose} aria-label="Close saved drawer">
            <X size={20} />
          </button>
        </div>

        {/* Saved List */}
        <div className="drawer-body">
          {savedProducts.length === 0 ? (
            <div className="empty-drawer-state">
              <div className="empty-icon-box">
                <Bookmark size={36} />
              </div>
              <h4>No saved recommendations yet</h4>
              <p>Click the bookmark icon on any product card or recommendation to save styles for your presentation or wardrobe planning.</p>
            </div>
          ) : (
            <div className="saved-items-list">
              {savedProducts.map((item) => (
                <div key={item.id} className="saved-item-card">
                  <img src={item.image} alt={item.name} className="saved-item-thumb" />
                  
                  <div className="saved-item-info">
                    <span className="saved-item-cat">{item.category}</span>
                    <h5 className="saved-item-name" title={item.name}>{item.name}</h5>
                    <div className="saved-item-price-row">
                      <span className="saved-item-price">₹{item.price.toLocaleString('en-IN')}</span>
                      {item.matchScore && (
                        <span className="saved-item-match">{item.matchScore}% Match</span>
                      )}
                    </div>
                  </div>

                  <div className="saved-item-actions">
                    <button
                      className="saved-action-btn detail-btn"
                      onClick={() => {
                        onClose();
                        onViewDetails(item);
                      }}
                      title="View Details"
                    >
                      <ArrowUpRight size={15} />
                    </button>
                    <button
                      className="saved-action-btn delete-btn"
                      onClick={() => onRemoveSaved(item.id)}
                      title="Remove from saved"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {savedProducts.length > 0 && (
          <div className="drawer-footer">
            <div className="summary-row">
              <span className="summary-label">Estimated Outfit Total</span>
              <span className="summary-total">₹{totalPrice.toLocaleString('en-IN')}</span>
            </div>
            
            <div className="drawer-footer-actions">
              <button className="btn btn-secondary btn-sm" onClick={onClearAll}>
                Clear All
              </button>
              <button className="btn btn-primary btn-sm" onClick={onClose}>
                Continue Browsing
              </button>
            </div>

            <span className="prototype-drawer-note">
              Stored in local browser storage (Prototype Mode)
            </span>
          </div>
        )}
      </div>

      <style>{`
        .drawer-overlay {
          position: fixed;
          inset: 0;
          z-index: 1050;
          background: rgba(4, 6, 12, 0.8);
          backdrop-filter: blur(8px);
          display: flex;
          justify-content: flex-end;
          animation: fadeIn 0.2s ease-out;
        }
        .drawer-content {
          width: 100%;
          max-width: 420px;
          height: 100%;
          background: #0E1322;
          border-left: 1px solid var(--border-gold);
          box-shadow: -15px 0 40px rgba(0, 0, 0, 0.7);
          display: flex;
          flex-direction: column;
          animation: slideInRight 0.3s ease-out;
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .drawer-title-box {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .drawer-bm-icon {
          color: var(--accent-gold);
        }
        .drawer-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #FFFFFF;
        }
        .drawer-count-badge {
          background: var(--accent-gold);
          color: #0A0D14;
          font-size: 0.75rem;
          font-weight: 800;
          padding: 0.15rem 0.5rem;
          border-radius: var(--radius-full);
        }
        .drawer-close-btn {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-muted);
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .drawer-close-btn:hover {
          color: #FFFFFF;
          background: rgba(255, 255, 255, 0.15);
        }
        .drawer-body {
          flex: 1;
          overflow-y: auto;
          padding: 1.25rem;
        }
        .empty-drawer-state {
          text-align: center;
          padding: 4rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          color: var(--text-muted);
        }
        .empty-icon-box {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-dim);
        }
        .empty-drawer-state h4 {
          color: #FFFFFF;
          font-size: 1.1rem;
        }
        .empty-drawer-state p {
          font-size: 0.85rem;
          line-height: 1.5;
        }
        .saved-items-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .saved-item-card {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-md);
          padding: 0.75rem;
          transition: all var(--transition-fast);
        }
        .saved-item-card:hover {
          border-color: rgba(226, 199, 153, 0.3);
          background: rgba(255, 255, 255, 0.06);
        }
        .saved-item-thumb {
          width: 58px;
          height: 68px;
          border-radius: 6px;
          object-fit: cover;
          flex-shrink: 0;
        }
        .saved-item-info {
          flex: 1;
          min-width: 0;
        }
        .saved-item-cat {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--accent-gold);
          text-transform: uppercase;
        }
        .saved-item-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: #FFFFFF;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 0.25rem;
        }
        .saved-item-price-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .saved-item-price {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .saved-item-match {
          font-size: 0.7rem;
          color: #34D399;
          font-weight: 700;
        }
        .saved-item-actions {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .saved-action-btn {
          width: 28px;
          height: 28px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .saved-action-btn:hover.detail-btn {
          color: var(--accent-gold);
          background: rgba(226, 199, 153, 0.15);
        }
        .saved-action-btn:hover.delete-btn {
          color: #F87171;
          background: rgba(239, 68, 68, 0.15);
        }
        .drawer-footer {
          padding: 1.25rem 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(11, 15, 26, 0.95);
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .summary-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .summary-label {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .summary-total {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--accent-gold);
        }
        .drawer-footer-actions {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 0.75rem;
        }
        .prototype-drawer-note {
          font-size: 0.7rem;
          color: var(--text-dim);
          text-align: center;
        }
      `}</style>
    </div>
  );
}
