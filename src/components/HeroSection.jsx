import React from 'react';
import HologramPortrait from './HologramPortrait';
import { ArrowRight, Download, Terminal, Rocket, Layers, Edit3, Shield } from 'lucide-react';
import { Youtube } from './BrandIcons';

const HeroSection = ({ setActiveSection }) => {
  const badges = [
    { text: 'IT Leader', icon: <Terminal className="badge-icon badge-cyan" /> },
    { text: 'Entrepreneur', icon: <Rocket className="badge-icon badge-purple" /> },
    { text: 'YouTuber', icon: <Youtube className="badge-icon badge-red" /> },
    { text: 'SaaS Creator', icon: <Layers className="badge-icon badge-blue" /> },
    { text: 'Content Creator', icon: <Edit3 className="badge-icon badge-gold" /> }
  ];



  return (
    <section className="hero-section fade-in">
      <div className="hero-grid">
        {/* Left Content Column */}
        <div className="hero-content">
          <div className="salutation-pill">
            <span className="namaste-emoji">🙏</span> Namaste!
          </div>
          
          <h1 className="hero-headline title-font">
            I Deliver <span className="text-gradient">Solutions.</span><br />
            I Create <span className="text-gradient-purple">Impact.</span>
          </h1>
          
          <p className="hero-description">
            Delivery Partner &amp; Large Transformational Program Manager with 27+ years at TCS, driving digital transformations across Retail, E-commerce, Insurance, Banking &amp; Finance, Manufacturing, and Securities. Skilled in Portfolio Management, Agile (SAFe, Scrum), and Waterfall, with a track record of building global teams, securing strategic contracts, and delivering high-impact programs. Gen AI enthusiast with hands-on PoC and implementation experience across multiple accounts.
          </p>

          {/* Interactive Category Badges */}
          <div className="hero-badges">
            {badges.map((badge, idx) => (
              <div key={idx} className="hero-badge-card glass-panel">
                {badge.icon}
                <span>{badge.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <button 
              className="btn-primary" 
              onClick={() => setActiveSection('itexp')}
            >
              Explore My Journey <ArrowRight className="btn-arrow" />
            </button>
            <a 
              href="/Jaydeep_Dey_Profile.pdf" 
              download="Jaydeep_Dey_Profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>
        </div>

        {/* Right Portrait & Quote Column */}
        <div className="hero-visual">
          <HologramPortrait />
          
          {/* Executive Floating Quote Card */}
          <div className="quote-card glass-panel glow-cyan">
            <div className="quote-accent">“</div>
            <p className="quote-text">
              Building solutions, empowering businesses, and creating content that adds value.
            </p>
          </div>
        </div>
      </div>



      <style>{`
        .hero-section {
          padding: 24px 0 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 20px;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 24px;
          }
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }

        @media (max-width: 1024px) {
          .hero-content {
            align-items: center;
          }
        }

        .salutation-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 18px;
          background: rgba(0, 240, 255, 0.08);
          border: 1px solid rgba(0, 240, 255, 0.28);
          border-radius: 24px;
          font-family: var(--font-mono);
          font-size: 14px;
          color: var(--neon-cyan);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .namaste-emoji {
          animation: wave-hand 2.5s infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }

        @keyframes wave-hand {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }

        .hero-headline {
          font-size: 42px;
          line-height: 1.1;
          text-align: left;
        }

        @media (max-width: 768px) {
          .hero-headline {
            font-size: 32px;
          }
        }

        @media (max-width: 1024px) {
          .hero-headline {
            text-align: center;
          }
        }

        .hero-description {
          font-size: 13px;
          color: var(--text-secondary);
          max-width: 660px;
          text-align: left;
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .hero-description {
            text-align: center;
          }
        }

        .hero-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 4px 0;
        }

        @media (max-width: 1024px) {
          .hero-badges {
            justify-content: center;
          }
        }

        .hero-badge-card {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 5px 13px;
          font-family: var(--font-heading);
          font-size: 12.5px;
          font-weight: 600;
          border-radius: 5px;
          cursor: default;
          transition: all var(--transition-fast);
        }

        .hero-badge-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.05);
        }

        .badge-icon {
          width: 12px;
          height: 12px;
        }

        .badge-cyan { color: var(--neon-cyan); filter: drop-shadow(0 0 3px var(--neon-cyan)); }
        .badge-purple { color: var(--neon-purple); filter: drop-shadow(0 0 3px var(--neon-purple)); }
        .badge-red { color: #ff004c; filter: drop-shadow(0 0 3px #ff004c); }
        .badge-blue { color: var(--neon-blue); filter: drop-shadow(0 0 3px var(--neon-blue)); }
        .badge-gold { color: var(--neon-gold); filter: drop-shadow(0 0 3px var(--neon-gold)); }

        .hero-actions {
          display: flex;
          gap: 12px;
          margin-top: 4px;
        }

        @media (max-width: 768px) {
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-actions button, .hero-actions a {
            width: 100%;
            justify-content: center;
          }
        }

        .btn-arrow {
          width: 12px;
          height: 12px;
          transition: transform var(--transition-fast);
        }

        .btn-primary:hover .btn-arrow {
          transform: translateX(3px);
        }

        .hero-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }

        .quote-card {
          position: relative;
          padding: 10px 16px;
          border-radius: 8px;
          max-width: 220px;
          text-align: left;
          background: rgba(10, 6, 26, 0.85);
          border: 1px solid rgba(0, 240, 255, 0.15);
        }

        .quote-accent {
          position: absolute;
          top: -10px;
          left: 10px;
          font-family: var(--font-heading);
          font-size: 34px;
          color: var(--neon-cyan);
          opacity: 0.3;
          line-height: 1;
        }

        .quote-text {
          font-family: var(--font-heading);
          font-size: 11.5px;
          line-height: 1.45;
          color: var(--text-primary);
          position: relative;
          z-index: 1;
          font-style: italic;
          padding-left: 8px;
        }


      `}</style>
    </section>
  );
};

export default HeroSection;
