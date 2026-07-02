import React from 'react';
import { ExternalLink, Play, Sparkles } from 'lucide-react';

const AdsPortfolio = () => {
  const playlistUrl = "https://www.youtube.com/playlist?list=PLfr4BLye7EV0";

  const campaigns = [
    {
      id: 'camp-dey-jewellers',
      title: 'Luxury Jewellery Brand Ad | Dey Jewellers',
      subtitle: '30-Second Cinematic Campaign',
      category: 'Luxury & Heritage',
      description: 'A premium, high-impact digital advertisement blending traditional heritage aesthetics with contemporary luxury to showcase handcrafted gold ornaments.',
      thumbnail: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/watch?v=YVWJNE7ls-8'
    },
    {
      id: 'camp-urbandrip',
      title: 'Beyond Fashion: Wear Who You Are | Urbandrip',
      subtitle: 'Streetwear Ad Campaign',
      category: 'Apparel & Streetwear',
      description: 'A vibrant, high-energy promotional video showcasing streetwear and youth fashion culture for the Urbandrip clothing brand.',
      thumbnail: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/watch?v=vgFMS9po2hk'
    },
    {
      id: 'camp-stryder',
      title: 'Ditch the Traffic: Upgrade Your Commute with Stryder',
      subtitle: 'Urban Mobility Ad Campaign',
      category: 'Eco-Friendly Commute',
      description: 'A sleek, modern commercial promoting green, efficient urban transportation and e-bike solutions to upgrade daily commutes.',
      thumbnail: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/watch?v=WWIYFEO6qiI'
    }
  ];

  return (
    <section className="ads-portfolio-page fade-in">
      
      {/* ── Playlist Header ── */}
      <div className="playlist-header-card glass-panel">
        <div className="playlist-title-section">
          <div className="playlist-icon-ring">
            <Play size={24} className="playlist-play-icon" />
          </div>
          <div className="playlist-meta-info">
            <div className="badge-playlist">
              <Sparkles size={12} />
              <span>Ad Spotlight Playlist</span>
            </div>
            <h1 className="playlist-title title-font">Ads Portfolio</h1>
            <p className="playlist-subtitle">Creative Video Solutions &amp; Commercials</p>
          </div>
        </div>
        
        <p className="playlist-description">
          A showcase of short-form, professional, and viral-ready video advertisements crafted for modern brands. Blending premium visuals with strategic copywriting to drive organic growth.
        </p>

        <a 
          href={playlistUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary view-playlist-btn"
        >
          View Playlist on YouTube <ExternalLink size={14} />
        </a>
      </div>

      {/* ── Campaign Grid ── */}
      <div className="campaigns-section">
        <h2 className="campaigns-section-title title-font">Featured <span className="text-gradient">Campaigns</span></h2>
        
        <div className="ads-campaigns-grid">
          {campaigns.map((camp) => (
            <a 
              href={camp.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={camp.id}
              className="ads-campaign-card glass-panel glass-panel-hover"
            >
              <div className="camp-thumbnail-wrap">
                <img src={camp.thumbnail} alt={camp.title} className="camp-image-preview" />
                <div className="camp-play-overlay">
                  <div className="play-circle">
                    <Play size={20} fill="#fff" className="play-icon-arrow" />
                  </div>
                </div>
                <span className="camp-cat-badge">{camp.category}</span>
              </div>
              
              <div className="camp-card-content">
                <div className="camp-header-meta">
                  <span className="camp-subtitle">{camp.subtitle}</span>
                </div>
                <h3 className="camp-card-title title-font">{camp.title}</h3>
                <p className="camp-card-desc">{camp.description}</p>
                <div className="camp-card-footer">
                  <span className="watch-ad-text">Watch Advertisement</span>
                  <ExternalLink size={12} className="watch-ad-icon" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .ads-portfolio-page {
          padding: 24px 0 60px;
          display: flex;
          flex-direction: column;
          gap: 48px;
          max-width: 900px;
          margin: 0 auto;
        }

        /* Playlist Header Card */
        .playlist-header-card {
          padding: 32px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(18, 12, 45, 0.3);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
        }

        .playlist-title-section {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .playlist-icon-ring {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          padding: 3px;
          background: linear-gradient(135deg, var(--neon-cyan), var(--neon-purple));
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.25);
        }

        .playlist-play-icon {
          color: var(--neon-cyan);
          filter: drop-shadow(0 0 8px rgba(0, 240, 255, 0.6));
          margin-left: 3px;
        }

        .playlist-meta-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .badge-playlist {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 3px 10px;
          background: rgba(0, 240, 255, 0.12);
          border: 1px solid rgba(0, 240, 255, 0.3);
          border-radius: 20px;
          font-family: var(--font-mono);
          font-size: 10px;
          color: #93c5fd;
          text-transform: uppercase;
          width: fit-content;
        }

        .playlist-title {
          font-size: 32px;
          line-height: 1.1;
          color: #fff;
        }

        .playlist-subtitle {
          font-size: 14px;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .playlist-description {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 720px;
        }

        .view-playlist-btn {
          margin-top: 4px;
        }

        /* Campaigns Section */
        .campaigns-section {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .campaigns-section-title {
          font-size: 24px;
        }

        .ads-campaigns-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        @media (max-width: 768px) {
          .ads-campaigns-grid {
            grid-template-columns: 1fr;
          }
        }

        .ads-campaign-card {
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(15, 10, 36, 0.25);
          display: flex;
          flex-direction: column;
          transition: all 0.25s ease;
        }

        .ads-campaign-card:hover {
          border-color: rgba(255, 255, 255, 0.12);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .camp-thumbnail-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #000;
        }

        .camp-image-preview {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.75;
          transition: transform 0.4s ease;
        }

        .ads-campaign-card:hover .camp-image-preview {
          transform: scale(1.05);
          opacity: 0.9;
        }

        .camp-play-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.2);
          opacity: 0.8;
          transition: opacity 0.25s ease;
        }

        .ads-campaign-card:hover .camp-play-overlay {
          opacity: 1;
        }

        .play-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(0, 240, 255, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 16px rgba(0, 240, 255, 0.4);
          transition: all 0.2s ease;
        }

        .ads-campaign-card:hover .play-circle {
          background: var(--neon-cyan);
          transform: scale(1.1);
          box-shadow: 0 0 24px rgba(0, 240, 255, 0.6);
        }

        .play-icon-arrow {
          margin-left: 3px;
        }

        .camp-cat-badge {
          position: absolute;
          bottom: 12px;
          left: 12px;
          font-family: var(--font-mono);
          font-size: 10px;
          padding: 2px 8px;
          background: rgba(0, 0, 0, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 4px;
          color: #fff;
        }

        .camp-card-content {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex-grow: 1;
        }

        .camp-header-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .camp-subtitle {
          font-size: 12px;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .camp-card-title {
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          line-height: 1.4;
        }

        .camp-card-desc {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: auto;
        }

        .camp-card-footer {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 12px;
          color: var(--neon-cyan);
          font-family: var(--font-heading);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .watch-ad-icon {
          transition: transform 0.2s ease;
        }

        .ads-campaign-card:hover .watch-ad-icon {
          transform: translate(2px, -2px);
        }
      `}</style>

    </section>
  );
};

export default AdsPortfolio;
