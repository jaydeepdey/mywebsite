import React from 'react';
import { Youtube } from './BrandIcons';
import { ExternalLink, Play, Sparkles } from 'lucide-react';

const YouTubeShowcase = () => {
  const channelUrl = "https://www.youtube.com/@BrandFrame-yt";

  const videos = [
    {
      id: 'vid-empty-chair',
      title: 'The empty chair. ☕️',
      description: 'A cinematic short story exploring reflection, memory, and the quiet power of resilience.',
      category: 'Cinematic',
      thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/@BrandFrame-yt'
    },
    {
      id: 'vid-lost-everything',
      title: 'She Lost Everything, Then She Did This.',
      description: 'An inspirational mindset feature on transformation, overcoming failure, and starting over.',
      category: 'Mindset',
      thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/@BrandFrame-yt'
    },
    {
      id: 'vid-dey-jewellers',
      title: 'Dey Jewellers Commercial',
      description: 'A premium 30-second digital ad blending heritage aesthetics with contemporary luxury.',
      category: 'Brand Ad',
      thumbnail: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/@BrandFrame-yt'
    },
    {
      id: 'vid-corporate-showcase',
      title: 'Corporate Showcase Reel',
      description: 'A showcase of spec ads, business promotional reels, and brand commercials for digital impact.',
      category: 'Business',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/@BrandFrame-yt'
    },
    {
      id: 'vid-festival-campaigns',
      title: 'Festival & Cultural Campaigns',
      description: 'High-energy promotional videos created for festivals, community celebrations, and brands.',
      category: 'Events',
      thumbnail: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/@BrandFrame-yt'
    }
  ];

  return (
    <section className="yt-page fade-in">

      {/* ── Compact Horizontal Channel Header ── */}
      <div className="yt-header glass-panel">
        <div className="yt-avatar-ring">
          <div className="yt-avatar">
            <Youtube size={26} className="yt-icon" />
          </div>
        </div>

        <div className="yt-meta">
          <div className="yt-badge"><Sparkles size={9} /><span>Preliminary Stage</span></div>
          <h1 className="yt-channel-name title-font">Brand Frame</h1>
          <p className="yt-handle">@BrandFrame-yt</p>
        </div>

        <p className="yt-desc">
          A creative digital channel dedicated to motivational stories, cinematic ads, and inspirational mindset features. Currently in development.
        </p>

        <a href={channelUrl} target="_blank" rel="noopener noreferrer" className="btn-primary yt-visit-btn">
          Visit Channel <ExternalLink size={12} />
        </a>
      </div>

      {/* ── Videos: 5 in one landscape row ── */}
      <div className="yt-videos-section">
        <h2 className="yt-section-title title-font">Channel <span className="text-gradient">Videos</span></h2>

        <div className="yt-grid">
          {videos.map((vid) => (
            <a
              href={vid.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={vid.id}
              className="yt-card glass-panel"
            >
              {/* Landscape 16:9 Thumbnail */}
              <div className="yt-thumb-wrap">
                <img src={vid.thumbnail} alt={vid.title} className="yt-thumb-img" />
                <div className="yt-play-overlay">
                  <div className="yt-play-btn">
                    <Play size={15} fill="#fff" className="yt-play-icon" />
                  </div>
                </div>
                <span className="yt-cat-badge">{vid.category}</span>
              </div>

              {/* Card Text */}
              <div className="yt-card-body">
                <h3 className="yt-card-title title-font">{vid.title}</h3>
                <p className="yt-card-desc">{vid.description}</p>
                <div className="yt-card-footer">
                  <span>Watch</span>
                  <ExternalLink size={10} className="yt-ext-icon" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        /* ── Page root: fixed single-viewport height ── */
        .yt-page {
          display: flex;
          flex-direction: column;
          height: calc(100vh - 80px);
          padding: 16px 0 10px;
          gap: 16px;
          overflow: hidden;
        }

        /* ── Compact horizontal header ── */
        .yt-header {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 14px 20px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(18, 12, 45, 0.3);
          flex-shrink: 0;
          flex-wrap: wrap;
        }

        .yt-avatar-ring {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          padding: 2px;
          background: linear-gradient(135deg, #ff004c, #bd00ff);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 14px rgba(255, 0, 76, 0.3);
          flex-shrink: 0;
        }

        .yt-avatar {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #0f0b21;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .yt-icon {
          color: #ff004c;
          filter: drop-shadow(0 0 6px rgba(255, 0, 76, 0.6));
        }

        .yt-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex-shrink: 0;
        }

        .yt-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 2px 8px;
          background: rgba(189, 0, 255, 0.1);
          border: 1px solid rgba(189, 0, 255, 0.28);
          border-radius: 20px;
          font-family: var(--font-mono);
          font-size: 8.5px;
          color: #d8b4fe;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          width: fit-content;
        }

        .yt-channel-name {
          font-size: 18px;
          color: #fff;
          margin: 0;
          line-height: 1.1;
        }

        .yt-handle {
          font-size: 11.5px;
          color: var(--text-secondary);
          margin: 0;
        }

        .yt-desc {
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.5;
          flex: 1;
          min-width: 180px;
          margin: 0;
        }

        .yt-visit-btn {
          font-size: 12px;
          padding: 7px 16px;
          flex-shrink: 0;
          margin-left: auto;
          white-space: nowrap;
        }

        /* ── Videos section ── */
        .yt-videos-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
          min-height: 0;
        }

        .yt-section-title {
          font-size: 20px;
          margin: 0;
          flex-shrink: 0;
        }

        /* ── 5-column uniform landscape grid ── */
        .yt-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
          flex: 1;
          min-height: 0;
        }

        /* ── Individual card ── */
        .yt-card {
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

        .yt-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 0, 76, 0.3);
          box-shadow: 0 14px 36px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,0,76,0.08);
        }

        /* ── Landscape 16:9 thumbnail ── */
        .yt-thumb-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #000;
          flex-shrink: 0;
        }

        .yt-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.7;
          transition: transform 0.4s ease, opacity 0.3s ease;
        }

        .yt-card:hover .yt-thumb-img {
          transform: scale(1.07);
          opacity: 0.88;
        }

        .yt-play-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.12);
          opacity: 0.75;
          transition: opacity 0.25s ease;
        }

        .yt-card:hover .yt-play-overlay { opacity: 1; }

        .yt-play-btn {
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

        .yt-card:hover .yt-play-btn {
          transform: scale(1.14);
          box-shadow: 0 0 22px rgba(255,0,76,0.7);
        }

        .yt-play-icon { margin-left: 2px; }

        .yt-cat-badge {
          position: absolute;
          bottom: 7px;
          left: 8px;
          font-family: var(--font-mono);
          font-size: 8.5px;
          padding: 2px 6px;
          background: rgba(0,0,0,0.8);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 3px;
          color: #fff;
          letter-spacing: 0.04em;
        }

        /* ── Card text body ── */
        .yt-card-body {
          padding: 10px 12px 12px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          flex: 1;
          min-height: 0;
        }

        .yt-card-title {
          font-size: 12px;
          font-weight: 700;
          color: #fff;
          line-height: 1.35;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .yt-card-desc {
          font-size: 10.5px;
          color: var(--text-muted);
          line-height: 1.45;
          margin: 0;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .yt-card-footer {
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

        .yt-ext-icon { transition: transform 0.2s ease; }
        .yt-card:hover .yt-ext-icon { transform: translate(2px, -2px); }

        /* ── Responsive ── */
        @media (max-width: 1200px) {
          .yt-page { height: auto; overflow: visible; }
          .yt-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 700px) {
          .yt-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

    </section>
  );
};

export default YouTubeShowcase;
