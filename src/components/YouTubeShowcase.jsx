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
      category: 'Cinematic Storytelling',
      thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/@BrandFrame-yt'
    },
    {
      id: 'vid-lost-everything',
      title: 'She Lost Everything, Then She Did This.',
      description: 'An inspirational mindset feature focusing on transformation, overcoming failure, and the path to starting over.',
      category: 'Mindset & Inspiration',
      thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/@BrandFrame-yt'
    },
    {
      id: 'vid-dey-jewellers',
      title: 'Dey Jewellers Commercial',
      description: 'A premium 30-second digital advertisement blending heritage aesthetics with contemporary luxury to showcase handcrafted gold ornaments.',
      category: 'Brand Commercial',
      thumbnail: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/@BrandFrame-yt'
    },
    {
      id: 'vid-corporate-showcase',
      title: 'Corporate Showcase Reel',
      description: 'A showcase of creative spec ads, business promotional reels, and brand commercials designed for digital impact.',
      category: 'Business Showcase',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/@BrandFrame-yt'
    },
    {
      id: 'vid-festival-campaigns',
      title: 'Festival & Cultural Campaigns',
      description: 'High-energy, emotionally engaging promotional campaign videos created for festivals, community celebrations, and brands.',
      category: 'Event Promotions',
      thumbnail: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/@BrandFrame-yt'
    }
  ];

  return (
    <section className="youtube-showcase-page fade-in">
      
      {/* ── Channel Header ── */}
      <div className="channel-header-card glass-panel">
        <div className="channel-profile-section">
          <div className="channel-avatar-ring">
            <div className="channel-avatar">
              <Youtube size={36} className="youtube-brand-icon" />
            </div>
          </div>
          <div className="channel-meta-info">
            <div className="badge-preliminary">
              <Sparkles size={12} />
              <span>Preliminary Stage</span>
            </div>
            <h1 className="channel-title title-font">Brand Frame</h1>
            <p className="channel-handle">@BrandFrame-yt</p>
          </div>
        </div>
        
        <p className="channel-description">
          A creative digital channel dedicated to motivational stories, cinematic advertisements, and inspirational mindset features. Currently developing core content and visual concepts.
        </p>

        <a 
          href={channelUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary visit-channel-btn"
        >
          Visit YouTube Channel <ExternalLink size={14} />
        </a>
      </div>

      {/* ── Featured Videos Grid ── */}
      <div className="videos-section">
        <h2 className="videos-section-title title-font">Channel <span className="text-gradient">Videos</span></h2>
        
        <div className="preliminary-videos-grid">
          {videos.map((vid) => (
            <a 
              href={vid.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={vid.id}
              className="preliminary-video-card glass-panel glass-panel-hover"
            >
              <div className="video-thumbnail-wrap">
                <img src={vid.thumbnail} alt={vid.title} className="video-image-preview" />
                <div className="video-play-overlay">
                  <div className="play-button-circle">
                    <Play size={20} fill="#fff" className="play-icon-arrow" />
                  </div>
                </div>
                <span className="video-cat-badge">{vid.category}</span>
              </div>
              
              <div className="video-card-content">
                <h3 className="video-card-title title-font">{vid.title}</h3>
                <p className="video-card-desc">{vid.description}</p>
                <div className="video-card-footer">
                  <span className="watch-now-text">Watch on YouTube</span>
                  <ExternalLink size={12} className="watch-now-icon" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .youtube-showcase-page {
          padding: 24px 0 60px;
          display: flex;
          flex-direction: column;
          gap: 48px;
          max-width: 900px;
          margin: 0 auto;
        }

        /* Channel Header Card */
        .channel-header-card {
          padding: 32px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(18, 12, 45, 0.3);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
        }

        .channel-profile-section {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .channel-avatar-ring {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          padding: 3px;
          background: linear-gradient(135deg, #ff004c, #bd00ff);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(255, 0, 76, 0.25);
        }

        .channel-avatar {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #0f0b21;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .youtube-brand-icon {
          color: #ff004c;
          filter: drop-shadow(0 0 8px rgba(255, 0, 76, 0.6));
        }

        .channel-meta-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .badge-preliminary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 3px 10px;
          background: rgba(189, 0, 255, 0.12);
          border: 1px solid rgba(189, 0, 255, 0.3);
          border-radius: 20px;
          font-family: var(--font-mono);
          font-size: 10px;
          color: #d8b4fe;
          text-transform: uppercase;
          width: fit-content;
        }

        .channel-title {
          font-size: 32px;
          line-height: 1.1;
          color: #fff;
        }

        .channel-handle {
          font-size: 14px;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .channel-description {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 720px;
        }

        .visit-channel-btn {
          margin-top: 4px;
        }

        /* Videos Section */
        .videos-section {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .videos-section-title {
          font-size: 24px;
        }

        .preliminary-videos-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        @media (max-width: 640px) {
          .preliminary-videos-grid {
            grid-template-columns: 1fr;
          }
        }

        .preliminary-video-card {
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(15, 10, 36, 0.25);
          display: flex;
          flex-direction: column;
          transition: all 0.25s ease;
        }

        .preliminary-video-card:hover {
          border-color: rgba(255, 255, 255, 0.12);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .video-thumbnail-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #000;
        }

        .video-image-preview {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.75;
          transition: transform 0.4s ease;
        }

        .preliminary-video-card:hover .video-image-preview {
          transform: scale(1.05);
          opacity: 0.9;
        }

        .video-play-overlay {
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

        .preliminary-video-card:hover .video-play-overlay {
          opacity: 1;
        }

        .play-button-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 0, 76, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 16px rgba(255, 0, 76, 0.4);
          transition: all 0.2s ease;
        }

        .preliminary-video-card:hover .play-button-circle {
          background: #ff004c;
          transform: scale(1.1);
          box-shadow: 0 0 24px rgba(255, 0, 76, 0.6);
        }

        .play-icon-arrow {
          margin-left: 3px;
        }

        .video-cat-badge {
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

        .video-card-content {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex-grow: 1;
        }

        .video-card-title {
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          line-height: 1.4;
        }

        .video-card-desc {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: auto;
        }

        .video-card-footer {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 12px;
          color: #ff004c;
          font-family: var(--font-heading);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .watch-now-icon {
          transition: transform 0.2s ease;
        }

        .preliminary-video-card:hover .watch-now-icon {
          transform: translate(2px, -2px);
        }
      `}</style>

    </section>
  );
};

export default YouTubeShowcase;
