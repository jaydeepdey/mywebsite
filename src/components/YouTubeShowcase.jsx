import React from 'react';
import { Youtube } from './BrandIcons';
import { ExternalLink, Play, Sparkles } from 'lucide-react';

const YouTubeShowcase = () => {
  const channelUrl = "https://www.youtube.com/@BrandFrame-yt";

  const videos = [
    {
      id: 'CwawGAclyMI',
      title: 'The empty chair. ☕️',
      category: 'Cinematic',
    },
    {
      id: 'SMzTuuUfHig',
      title: 'She Lost Everything, Then She Did This.',
      category: 'Motivation',
    },
    {
      id: 'MDco60wLtmM',
      title: 'The Day a Whole Class Failed... and the Reason Will Make You Cry',
      category: 'Storytelling',
    },
    {
      id: 'Puo5jBZL_Eg',
      title: 'Why I stopped being so obsessed with "mine."',
      category: 'Mindset',
    },
    {
      id: 'XIcmva5NIB0',
      title: 'Unexpected Exposure',
      category: 'Short Film',
    },
    {
      id: '8cTQz5m5ZIA',
      title: 'Cute College Love Story',
      category: 'Story',
    },
    {
      id: 'wG_m-vkBjAA',
      title: 'Cute Love Story',
      category: 'Story',
    },
    {
      id: '8NY6UsaoM_o',
      title: 'Masterpiece of Master Chef',
      category: 'Creative',
    },
    {
      id: '3gNnPae_txQ',
      title: 'Beyond Fashion: Wear Who You Are | UrbandripFinal Cut',
      category: 'Brand Ad',
    },
    {
      id: 'vgFMS9po2hk',
      title: 'Ditch the Traffic: Upgrade Your Commute with Stryder',
      category: 'Brand Ad',
    },
    {
      id: 'WWIYFEO6qiI',
      title: 'Luxury Jewellery Brand Ad | Dey Jewellers | 30-Second Cinematic Campaign',
      category: 'Commercial',
    },
    {
      id: 'YVWJNE7ls-8',
      title: 'Want Ads That Convert? 30s Shampoo Spec Commercial | Clearhead',
      category: 'Spec Ad',
    },
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

      {/* ── Videos: 5 per row, 12 total (3 rows) ── */}
      <div className="yt-videos-section">
        <h2 className="yt-section-title title-font">Channel <span className="text-gradient">Videos</span>
          <span className="yt-count">{videos.length} videos</span>
        </h2>

        <div className="yt-grid">
          {videos.map((vid) => (
            <a
              href={`https://www.youtube.com/watch?v=${vid.id}`}
              target="_blank"
              rel="noopener noreferrer"
              key={vid.id}
              className="yt-card glass-panel"
            >
              {/* Landscape 16:9 Thumbnail — real YouTube image */}
              <div className="yt-thumb-wrap">
                <img
                  src={`https://i.ytimg.com/vi/${vid.id}/hqdefault.jpg`}
                  alt={vid.title}
                  className="yt-thumb-img"
                  loading="lazy"
                />
                <div className="yt-play-overlay">
                  <div className="yt-play-btn">
                    <Play size={14} fill="#fff" className="yt-play-icon" />
                  </div>
                </div>
                <span className="yt-cat-badge">{vid.category}</span>
              </div>

              {/* Card Text */}
              <div className="yt-card-body">
                <h3 className="yt-card-title title-font">{vid.title}</h3>
                <div className="yt-card-footer">
                  <span>Watch on YouTube</span>
                  <ExternalLink size={9} className="yt-ext-icon" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        /* ── Page root ── */
        .yt-page {
          display: flex;
          flex-direction: column;
          padding: 16px 0 10px;
          gap: 14px;
          overflow-y: auto;
          height: calc(100vh - 80px);
        }

        .yt-page::-webkit-scrollbar { width: 4px; }
        .yt-page::-webkit-scrollbar-track { background: transparent; }
        .yt-page::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 4px; }

        /* ── Compact horizontal header ── */
        .yt-header {
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

        .yt-avatar-ring {
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
          gap: 1px;
          flex-shrink: 0;
        }

        .yt-badge {
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

        .yt-channel-name {
          font-size: 17px;
          color: #fff;
          margin: 0;
          line-height: 1.1;
        }

        .yt-handle {
          font-size: 11px;
          color: var(--text-secondary);
          margin: 0;
        }

        .yt-desc {
          font-size: 11.5px;
          color: var(--text-secondary);
          line-height: 1.5;
          flex: 1;
          min-width: 160px;
          margin: 0;
        }

        .yt-visit-btn {
          font-size: 11.5px;
          padding: 7px 14px;
          flex-shrink: 0;
          margin-left: auto;
          white-space: nowrap;
        }

        /* ── Section title ── */
        .yt-videos-section {
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }

        .yt-section-title {
          font-size: 18px;
          margin: 0;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .yt-count {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-muted);
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          padding: 2px 8px;
          border-radius: 20px;
          font-weight: 400;
        }

        /* ── 5-column grid, auto-rows to fill evenly ── */
        .yt-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-auto-rows: 1fr;
          gap: 10px;
        }

        /* ── Individual card ── */
        .yt-card {
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(12, 8, 30, 0.4);
          display: flex;
          flex-direction: column;
          transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
          text-decoration: none;
        }

        .yt-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255, 0, 76, 0.28);
          box-shadow: 0 10px 28px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,0,76,0.07);
        }

        /* ── Landscape 16:9 thumbnail ── */
        .yt-thumb-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #111;
          flex-shrink: 0;
        }

        .yt-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.75;
          transition: transform 0.35s ease, opacity 0.25s ease;
        }

        .yt-card:hover .yt-thumb-img {
          transform: scale(1.06);
          opacity: 0.92;
        }

        .yt-play-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.1);
          opacity: 0.65;
          transition: opacity 0.22s ease;
        }

        .yt-card:hover .yt-play-overlay { opacity: 1; }

        .yt-play-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(255, 0, 76, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 12px rgba(255,0,76,0.55);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .yt-card:hover .yt-play-btn {
          transform: scale(1.15);
          box-shadow: 0 0 20px rgba(255,0,76,0.75);
        }

        .yt-play-icon { margin-left: 2px; }

        .yt-cat-badge {
          position: absolute;
          bottom: 6px;
          left: 7px;
          font-family: var(--font-mono);
          font-size: 8px;
          padding: 1px 5px;
          background: rgba(0,0,0,0.82);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 3px;
          color: #ccc;
          letter-spacing: 0.04em;
        }

        /* ── Card text body ── */
        .yt-card-body {
          padding: 8px 10px 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 5px;
          flex: 1;
        }

        .yt-card-title {
          font-size: 11px;
          font-weight: 700;
          color: #e8e0f5;
          line-height: 1.35;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .yt-card-footer {
          display: flex;
          align-items: center;
          gap: 4px;
          color: #ff004c;
          font-family: var(--font-heading);
          font-size: 9px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .yt-ext-icon { transition: transform 0.2s ease; }
        .yt-card:hover .yt-ext-icon { transform: translate(2px, -2px); }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .yt-grid { grid-template-columns: repeat(4, 1fr); }
        }

        @media (max-width: 800px) {
          .yt-page { height: auto; }
          .yt-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 560px) {
          .yt-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

    </section>
  );
};

export default YouTubeShowcase;
