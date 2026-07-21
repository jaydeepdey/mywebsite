import React from 'react';
import { ExternalLink, Play, Sparkles } from 'lucide-react';

const AdsPortfolio = ({ setActiveSection }) => {
  const playlistUrl = "https://www.youtube.com/playlist?list=PLfr4BLye7EV0";

  const campaigns = [
    {
      id: '3gNnPae_txQ',
      title: 'Beyond Fashion: Wear Who You Are | Urbandrip',
      subtitle: 'Streetwear Ad Campaign',
      category: 'Apparel & Streetwear',
      description: 'A vibrant, high-energy promotional video showcasing streetwear and youth fashion culture for Urbandrip.',
    },
    {
      id: 'vgFMS9po2hk',
      title: 'Ditch the Traffic: Upgrade Your Commute with Stryder',
      subtitle: 'Urban Mobility Campaign',
      category: 'Eco Commute',
      description: 'A sleek, modern commercial promoting green, efficient urban transportation and e-bike solutions.',
    },
    {
      id: 'WWIYFEO6qiI',
      title: 'Luxury Jewellery Brand Ad | Dey Jewellers',
      subtitle: '30-Sec Cinematic Ad',
      category: 'Luxury & Heritage',
      description: 'A premium, high-impact digital advertisement blending traditional heritage aesthetics with luxury.',
    },
    {
      id: 'YVWJNE7ls-8',
      title: 'Want Ads That Convert? 30s Shampoo Spec Commercial | Clearhead',
      subtitle: 'Spec Commercial',
      category: 'Personal Care',
      description: 'High-converting 30-second commercial designed to showcase product benefits and drive confidence.',
    }
  ];

  return (
    <section className="ads-page fade-in">
      
      {/* ── Compact Playlist Header ── */}
      <div className="ads-header glass-panel">
        <div className="ads-header-ring">
          <div className="ads-header-icon-box">
            <Play size={20} className="ads-play-icon" />
          </div>
        </div>

        <div className="ads-meta">
          <div className="ads-badge">
            <Sparkles size={9} />
            <span>Ad Spotlight Playlist</span>
          </div>
          <h1 className="ads-title title-font">Ads Portfolio</h1>
          <p className="ads-subtitle">Creative Video Solutions &amp; Commercials</p>
        </div>
        
        <p className="ads-desc">
          Short-form, professional, and viral-ready video advertisements crafted for modern brands. Blending premium visuals with strategic storytelling.
        </p>

        <a 
          href={playlistUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary ads-playlist-btn"
        >
          View Playlist <ExternalLink size={12} />
        </a>
      </div>

      {/* ── Announcement Banner ── */}
      <button className="ads-announcement" onClick={() => setActiveSection('contact')}>
        <span className="ads-announcement-pulse" />
        <span className="ads-announcement-label">LIMITED TIME FREE OFFER</span>
        <span className="ads-announcement-text">
          Get your Ads free — Connect with me with your requirement.
        </span>
        <span className="ads-announcement-cta">Connect now →</span>
      </button>

      {/* ── Single Row Campaigns ── */}
      <div className="ads-campaigns-section">
        <h2 className="ads-section-title title-font">Featured <span className="text-gradient">Campaigns</span></h2>
        
        <div className="ads-grid">
          {campaigns.map((camp) => (
            <a 
              href={`https://www.youtube.com/watch?v=${camp.id}`}
              target="_blank"
              rel="noopener noreferrer"
              key={camp.id}
              className="ads-card glass-panel"
            >
              {/* YouTube Thumbnail */}
              <div className="ads-thumb-wrap">
                <img 
                  src={`https://i.ytimg.com/vi/${camp.id}/hqdefault.jpg`} 
                  alt={camp.title} 
                  className="ads-thumb-img" 
                  loading="lazy"
                />
                <div className="ads-play-overlay">
                  <div className="ads-play-btn">
                    <Play size={14} fill="#fff" className="ads-play-arrow" />
                  </div>
                </div>
                <span className="ads-cat-badge">{camp.category}</span>
              </div>
              
              {/* Content */}
              <div className="ads-card-body">
                <span className="ads-card-subtitle">{camp.subtitle}</span>
                <h3 className="ads-card-title title-font">{camp.title}</h3>
                <p className="ads-card-desc">{camp.description}</p>
                <div className="ads-card-footer">
                  <span>Watch Advertisement</span>
                  <ExternalLink size={10} className="ads-ext-icon" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        /* ── Page root: single viewport height in landscape ── */
        .ads-page {
          display: flex;
          flex-direction: column;
          height: calc(100vh - 80px);
          padding: 16px 0 10px;
          gap: 14px;
          overflow: hidden;
        }

        /* ── Compact header ── */
        .ads-header {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 18px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(18, 12, 45, 0.3);
          flex-shrink: 0;
          flex-wrap: wrap;
        }

        .ads-header-ring {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          padding: 2px;
          background: linear-gradient(135deg, #ff004c, #bd00ff);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 12px rgba(255, 0, 76, 0.3);
          flex-shrink: 0;
        }

        .ads-header-icon-box {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #0f0b21;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ads-play-icon {
          color: #ff004c;
          filter: drop-shadow(0 0 6px rgba(255, 0, 76, 0.6));
        }

        .ads-meta {
          display: flex;
          flex-direction: column;
          gap: 1px;
          flex-shrink: 0;
        }

        .ads-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 2px 7px;
          background: rgba(189, 0, 255, 0.1);
          border: 1px solid rgba(189, 0, 255, 0.28);
          border-radius: 20px;
          font-family: var(--font-mono);
          font-size: 8px;
          color: #d8b4fe;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          width: fit-content;
        }

        .ads-title {
          font-size: 17px;
          color: #fff;
          margin: 0;
          line-height: 1.1;
        }

        .ads-subtitle {
          font-size: 11px;
          color: var(--text-secondary);
          margin: 0;
        }

        .ads-desc {
          font-size: 11.5px;
          color: var(--text-secondary);
          line-height: 1.45;
          flex: 1;
          min-width: 160px;
          margin: 0;
        }

        .ads-playlist-btn {
          font-size: 11.5px;
          padding: 7px 14px;
          flex-shrink: 0;
          margin-left: auto;
          white-space: nowrap;
        }

        /* ── Announcement Banner ── */
        .ads-announcement {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 9px 15px;
          background: linear-gradient(90deg, rgba(255,180,0,0.08) 0%, rgba(255,140,0,0.06) 100%);
          border: 1px solid rgba(255,180,0,0.3);
          border-radius: 10px;
          cursor: pointer;
          text-align: left;
          flex-shrink: 0;
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.2s ease;
          animation: ads-banner-glow 3s ease-in-out infinite;
        }

        .ads-announcement:hover {
          background: linear-gradient(90deg, rgba(255,180,0,0.15) 0%, rgba(255,140,0,0.12) 100%);
          border-color: rgba(255,180,0,0.55);
          transform: translateY(-1px);
        }

        @keyframes ads-banner-glow {
          0%, 100% { box-shadow: 0 0 0px rgba(255,180,0,0); }
          50% { box-shadow: 0 0 16px rgba(255,180,0,0.18); }
        }

        .ads-announcement-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #f59e0b;
          flex-shrink: 0;
          animation: ads-pulse-dot 1.5s ease-in-out infinite;
          box-shadow: 0 0 6px rgba(245, 158, 11, 0.8);
        }

        @keyframes ads-pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.7; }
        }

        .ads-announcement-label {
          font-family: var(--font-mono);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #f59e0b;
          background: rgba(245,158,11,0.12);
          border: 1px solid rgba(245,158,11,0.3);
          padding: 2px 7px;
          border-radius: 4px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .ads-announcement-text {
          font-size: 12.5px;
          color: #fde68a;
          line-height: 1.4;
          flex: 1;
        }

        .ads-announcement-cta {
          font-size: 12px;
          font-family: var(--font-mono);
          color: #f59e0b;
          white-space: nowrap;
          flex-shrink: 0;
          font-weight: 600;
          transition: letter-spacing 0.2s ease;
        }

        .ads-announcement:hover .ads-announcement-cta {
          letter-spacing: 0.05em;
        }

        /* ── Campaigns Section ── */
        .ads-campaigns-section {
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
          min-height: 0;
        }

        .ads-section-title {
          font-size: 18px;
          margin: 0;
          flex-shrink: 0;
        }

        /* ── 4 Columns Single Row Grid ── */
        .ads-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          flex: 1;
          min-height: 0;
        }

        /* ── Card ── */
        .ads-card {
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(12, 8, 30, 0.4);
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          text-decoration: none;
          min-height: 0;
        }

        .ads-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 0, 76, 0.3);
          box-shadow: 0 14px 36px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,0,76,0.08);
        }

        /* ── 16:9 Thumbnail ── */
        .ads-thumb-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #111;
          flex-shrink: 0;
        }

        .ads-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.75;
          transition: transform 0.4s ease, opacity 0.3s ease;
        }

        .ads-card:hover .ads-thumb-img {
          transform: scale(1.07);
          opacity: 0.92;
        }

        .ads-play-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.12);
          opacity: 0.75;
          transition: opacity 0.25s ease;
        }

        .ads-card:hover .ads-play-overlay { opacity: 1; }

        .ads-play-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 0, 76, 0.88);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 14px rgba(255,0,76,0.5);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .ads-card:hover .ads-play-btn {
          transform: scale(1.14);
          box-shadow: 0 0 22px rgba(255,0,76,0.7);
        }

        .ads-play-arrow { margin-left: 2px; }

        .ads-cat-badge {
          position: absolute;
          bottom: 7px;
          left: 8px;
          font-family: var(--font-mono);
          font-size: 8.5px;
          padding: 2px 6px;
          background: rgba(0,0,0,0.82);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 3px;
          color: #fff;
          letter-spacing: 0.04em;
        }

        /* ── Card Body ── */
        .ads-card-body {
          padding: 10px 12px 12px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          flex: 1;
          min-height: 0;
        }

        .ads-card-subtitle {
          font-family: var(--font-mono);
          font-size: 9.5px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .ads-card-title {
          font-size: 12.5px;
          font-weight: 700;
          color: #fff;
          line-height: 1.35;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .ads-card-desc {
          font-size: 11px;
          color: var(--text-muted);
          line-height: 1.45;
          margin: 0;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .ads-card-footer {
          display: flex;
          align-items: center;
          gap: 4px;
          color: #ff004c;
          font-family: var(--font-heading);
          font-size: 9.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-top: auto;
          padding-top: 4px;
        }

        .ads-ext-icon { transition: transform 0.2s ease; }
        .ads-card:hover .ads-ext-icon { transform: translate(2px, -2px); }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .ads-page { height: auto; overflow: visible; }
          .ads-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .ads-grid { grid-template-columns: 1fr; }
        }
      `}</style>

    </section>
  );
};

export default AdsPortfolio;
