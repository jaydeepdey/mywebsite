import React, { useState } from 'react';
import { Eye, ChevronLeft, ChevronRight, X, Heart, Calendar, Tag } from 'lucide-react';

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    {
      src: '/pics/1.jpg',
      title: 'Cherished Smiles',
      category: 'family',
      desc: 'A warm family moment filled with love, laughter, and shared happiness.',
      date: 'Dec 2025'
    },
    {
      src: '/pics/2.jpg',
      title: 'Mother & Daughter Bond',
      category: 'daughter',
      desc: 'A tender, candid moment showing the beautiful connection between wife and daughter.',
      date: 'Oct 2025'
    },
    {
      src: '/pics/3.jpg',
      title: 'Sunny Weekend Outing',
      category: 'outings',
      desc: 'Enjoying a bright, beautiful day outdoors together as a family.',
      date: 'Aug 2025'
    },
    {
      src: '/pics/4.jpg',
      title: 'Laughter and Joy',
      category: 'daughter',
      desc: 'Capturing the pure, innocent joy and sweet smiles of our daughter.',
      date: 'Jul 2025'
    },
    {
      src: '/pics/5.jpg',
      title: 'Warm Family Hugs',
      category: 'family',
      desc: 'The safest place in the world — wrapped in the warmth of family love.',
      date: 'May 2025'
    },
    {
      src: '/pics/6.jpg',
      title: 'Holiday Travels',
      category: 'outings',
      desc: 'Creating unforgettable memories and exploring beautiful new horizons together.',
      date: 'Apr 2025'
    },
    {
      src: '/pics/7.jpg',
      title: 'Heart to Heart',
      category: 'family',
      desc: 'Quiet moments of connection, understanding, and unconditional support.',
      date: 'Jan 2025'
    },
    {
      src: '/pics/8.jpg',
      title: 'Festive Celebrations',
      category: 'celebrations',
      desc: 'Dressing up, sharing blessings, and celebrating traditional festivals together.',
      date: 'Oct 2024'
    },
    {
      src: '/pics/9.jpg',
      title: 'Peaceful Afternoons',
      category: 'family',
      desc: 'The simple, sweet comfort of spending cozy weekend afternoons at home.',
      date: 'Sep 2024'
    },
    {
      src: '/pics/10.jpg',
      title: 'Nature Walks & Serenity',
      category: 'outings',
      desc: 'Reconnecting with nature and breathing in the fresh air on a morning family walk.',
      date: 'Aug 2024'
    },
    {
      src: '/pics/11.jpg',
      title: 'Playful Memories',
      category: 'daughter',
      desc: 'Watching our little girl discover the world with curious eyes and absolute wonder.',
      date: 'Jun 2024'
    },
    {
      src: '/pics/12.jpg',
      title: 'Elegance & Grace',
      category: 'wife',
      desc: 'A gorgeous portrait of my loving wife, capturing her grace and beautiful smile.',
      date: 'May 2024'
    },
    {
      src: '/pics/14.jpg',
      title: 'Shared Journeys',
      category: 'outings',
      desc: 'Every destination is beautiful when we are traveling side by side.',
      date: 'Feb 2024'
    },
    {
      src: '/pics/15.jpg',
      title: 'Golden Hour Reflections',
      category: 'family',
      desc: 'Blessed with beautiful sunsets and the absolute comfort of family companionship.',
      date: 'Jan 2024'
    },
    {
      src: '/pics/16.jpg',
      title: 'Festival Sparkles',
      category: 'celebrations',
      desc: 'Bringing in the joy, lights, and happiness of the festive season.',
      date: 'Nov 2023'
    },
    {
      src: '/pics/17.jpg',
      title: 'Spontaneous Giggles',
      category: 'daughter',
      desc: 'The sound of her laughter that brightens up even the darkest of days.',
      date: 'Sep 2023'
    },
    {
      src: '/pics/18.jpg',
      title: 'Cozy Winter Moments',
      category: 'family',
      desc: 'Bundled up in warm coats and shared love during a chilly winter getaway.',
      date: 'Dec 2023'
    },
    {
      src: '/pics/19.jpg',
      title: 'Proud Parents Spark',
      category: 'family',
      desc: 'Looking at our daughter grow up with so much hope, dreams, and love in our hearts.',
      date: 'Oct 2023'
    },
    {
      src: '/pics/20.jpg',
      title: 'Sunset Strolls',
      category: 'outings',
      desc: 'Walking hand in hand, letting go of the day, and enjoying each other’s presence.',
      date: 'Aug 2023'
    },
    {
      src: '/pics/21.jpg',
      title: 'Family Album Treasures',
      category: 'family',
      desc: 'A collection of moments that turn into a lifetime of beautiful, cherished stories.',
      date: 'Jun 2023'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Memories' },
    { id: 'family', label: 'Family Moments' },
    { id: 'wife', label: 'Wife' },
    { id: 'daughter', label: 'Daughter' },
    { id: 'outings', label: 'Outings & Trips' },
    { id: 'celebrations', label: 'Celebrations' }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const openLightbox = (index) => {
    // Find the original item index in the complete galleryItems array
    const originalItem = filteredItems[index];
    const originalIndex = galleryItems.findIndex(item => item.src === originalItem.src);
    setLightboxIndex(originalIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  return (
    <section className="personal-gallery-page fade-in">
      
      {/* ── Page Header ── */}
      <div className="gallery-header">
        <div className="gallery-header-badge">
          <Heart size={14} className="heart-badge-icon" />
          <span>My World · Personal Gallery</span>
        </div>
        <h1 className="gallery-title title-font">
          Personal <span className="text-gradient">Gallery</span>
        </h1>
        <p className="gallery-subtitle">
          A collection of beautiful family memories, featuring my loving wife and daughter. Capturing the warm smiles, holidays, and sweet celebrations that define my true world.
        </p>
      </div>

      {/* ── Filter Buttons ── */}
      <div className="gallery-filters">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-tab-btn ${filter === cat.id ? 'active' : ''}`}
            onClick={() => setFilter(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* ── Gallery Grid ── */}
      <div className="gallery-photo-grid">
        {filteredItems.map((item, index) => (
          <div 
            key={index} 
            className="gallery-photo-card glass-panel glass-panel-hover"
            onClick={() => openLightbox(index)}
          >
            <div className="photo-image-wrap">
              <img src={item.src} alt={item.title} className="photo-preview-img" />
              <div className="photo-hover-panel">
                <span className="zoom-btn">
                  <Eye size={16} /> View Photo
                </span>
              </div>
              <span className="photo-date-label"><Calendar size={11} /> {item.date}</span>
            </div>
            
            <div className="photo-info">
              <span className="photo-category-tag">{item.category.toUpperCase()}</span>
              <h3 className="photo-title title-font">{item.title}</h3>
              <p className="photo-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close-btn" onClick={closeLightbox} aria-label="Close Lightbox">
            <X size={24} />
          </button>
          
          <div className="lightbox-content-box" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-nav-btn prev-btn" onClick={prevImage} aria-label="Previous image">
              <ChevronLeft size={36} />
            </button>
            
            <div className="lightbox-main-panel">
              <div className="lightbox-image-container">
                <img src={galleryItems[lightboxIndex].src} alt={galleryItems[lightboxIndex].title} className="lightbox-img" />
              </div>
              <div className="lightbox-metadata-panel">
                <span className="lightbox-date">
                  <Calendar size={12} /> {galleryItems[lightboxIndex].date}
                </span>
                <h3 className="lightbox-title title-font">{galleryItems[lightboxIndex].title}</h3>
                <p className="lightbox-desc">{galleryItems[lightboxIndex].desc}</p>
                <div className="lightbox-tags">
                  <span className="lightbox-tag-badge">
                    <Tag size={12} /> {galleryItems[lightboxIndex].category.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
            
            <button className="lightbox-nav-btn next-btn" onClick={nextImage} aria-label="Next image">
              <ChevronRight size={36} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        .personal-gallery-page {
          padding: 24px 0 60px;
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .gallery-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .gallery-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 14px;
          background: rgba(239, 68, 68, 0.08);
          border: 1px solid rgba(239, 68, 68, 0.25);
          border-radius: 20px;
          font-family: var(--font-mono);
          font-size: 12px;
          color: #f87171;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          width: fit-content;
        }

        .heart-badge-icon {
          color: #ef4444;
          filter: drop-shadow(0 0 4px #ef4444);
        }

        .gallery-title {
          font-size: 40px;
          line-height: 1.1;
        }

        .gallery-subtitle {
          font-size: 16px;
          color: var(--text-secondary);
          max-width: 750px;
          line-height: 1.6;
        }

        /* Category Filters */
        .gallery-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 16px;
        }

        .filter-tab-btn {
          font-family: var(--font-heading);
          font-size: 13.5px;
          font-weight: 600;
          padding: 6px 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: var(--text-secondary);
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-tab-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
          border-color: rgba(255, 255, 255, 0.15);
        }

        .filter-tab-btn.active {
          background: linear-gradient(135deg, #ef4444 0%, #bd00ff 100%);
          border-color: rgba(239, 68, 68, 0.4);
          color: #fff;
          box-shadow: 0 4px 15px rgba(239, 68, 68, 0.2);
        }

        /* Photo Grid */
        .gallery-photo-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        @media (max-width: 1024px) {
          .gallery-photo-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .gallery-photo-grid {
            grid-template-columns: 1fr;
          }
        }

        .gallery-photo-card {
          border-radius: 12px;
          overflow: hidden;
          background: rgba(18, 12, 45, 0.22);
          border: 1px solid rgba(255, 255, 255, 0.05);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .gallery-photo-card:hover {
          transform: translateY(-4px);
          border-color: rgba(239, 68, 68, 0.35);
          box-shadow: 0 10px 30px rgba(239, 68, 68, 0.07);
        }

        .photo-image-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 11;
          overflow: hidden;
          background: #090614;
        }

        .photo-preview-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.85;
          transition: transform 0.4s ease, opacity 0.4s ease;
        }

        .gallery-photo-card:hover .photo-preview-img {
          transform: scale(1.04);
          opacity: 0.95;
        }

        .photo-hover-panel {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.4);
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .gallery-photo-card:hover .photo-hover-panel {
          opacity: 1;
        }

        .zoom-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          font-family: var(--font-heading);
          font-size: 11.5px;
          font-weight: 700;
          color: #fff;
          transition: all 0.2s ease;
        }

        .zoom-btn:hover {
          background: #fff;
          color: #000;
          transform: scale(1.05);
        }

        .photo-date-label {
          position: absolute;
          top: 12px;
          right: 12px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 700;
          padding: 2px 8px;
          background: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 4px;
          color: #fff;
        }

        .photo-info {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex-grow: 1;
        }

        .photo-category-tag {
          font-family: var(--font-mono);
          font-size: 10px;
          color: #f87171;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .photo-title {
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          line-height: 1.3;
        }

        .photo-desc {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.45;
          margin-bottom: auto;
        }

        /* ── Lightbox Overlay ── */
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(4, 1, 13, 0.96);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(8px);
        }

        .lightbox-close-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          color: var(--text-secondary);
          cursor: pointer;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .lightbox-close-btn:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.15);
          transform: scale(1.05);
        }

        .lightbox-content-box {
          display: flex;
          align-items: center;
          width: 100%;
          max-width: 1100px;
          padding: 0 30px;
          gap: 20px;
        }

        .lightbox-nav-btn {
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.2s ease;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          width: 54px;
          height: 54px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .lightbox-nav-btn:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }

        .lightbox-main-panel {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          background: #080512;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
        }

        .lightbox-image-container {
          width: 100%;
          aspect-ratio: 16 / 10;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .lightbox-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .lightbox-metadata-panel {
          padding: 20px 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(18, 12, 45, 0.4);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .lightbox-date {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted);
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .lightbox-title {
          font-size: 20px;
          font-weight: 700;
          color: #fff;
        }

        .lightbox-desc {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .lightbox-tags {
          margin-top: 2px;
        }

        .lightbox-tag-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 11px;
          color: #f87171;
          padding: 2px 8px;
          border-radius: 4px;
          background: rgba(239, 68, 68, 0.08);
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        @media (max-width: 768px) {
          .lightbox-content-box {
            padding: 0 10px;
            gap: 10px;
          }
          .lightbox-nav-btn {
            width: 40px;
            height: 40px;
          }
          .lightbox-metadata-panel {
            padding: 14px 16px;
          }
          .lightbox-title {
            font-size: 16px;
          }
          .lightbox-desc {
            font-size: 12.5px;
          }
        }
      `}</style>

    </section>
  );
};

export default Gallery;
