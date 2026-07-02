import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Box, Edit3, Star, Send, Award, Users, Shield } from 'lucide-react';
import { Youtube } from './BrandIcons';

const MyWorld = ({ setActiveSection }) => {
  const [activeModal, setActiveModal] = useState(null);
  const [waveBars, setWaveBars] = useState([]);

  useEffect(() => {
    // Generate 60 frequency bars for the audio spectrum analyzer at the bottom
    const bars = [];
    for (let i = 0; i < 70; i++) {
      // Calculate height based on a bell curve to make it look like a natural audio frequency
      const distanceFromCenter = Math.abs(i - 35);
      const factor = Math.max(0.05, 1 - (distanceFromCenter / 35));
      const minHeight = 3;
      const maxHeight = minHeight + (factor * 35);
      bars.push({
        id: i,
        baseHeight: Math.random() * (maxHeight - minHeight) + minHeight,
        delay: Math.random() * 0.8
      });
    }
    setWaveBars(bars);
  }, []);

  const stats = [
    { 
      value: '27+', 
      labelLines: ['Years of IT', 'Experience'], 
      icon: <Award className="stat-icon purple-text" /> 
    },
    { 
      value: '5', 
      labelLines: ['Domains', 'Worked In'], 
      icon: <Users className="stat-icon blue-text" /> 
    },
    { 
      value: '15+', 
      labelLines: ['Projects', 'Delivered E2E'], 
      icon: <Shield className="stat-icon cyan-text" /> 
    },
    { 
      // Infinity / Curiosity stat
      isInfinity: true,
      labelLines: ['Curiosity to', 'Keep Learning'],
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stat-icon purple-text">
          <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4z"/>
        </svg>
      )
    }
  ];

  const worldCards = [
    {
      id: 'it',
      title: 'IT Professional',
      navTarget: 'itexp',
      desc: 'Delivering technology solutions that drive business forward.',
      bgImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=400&q=80',
      colorClass: 'purple-glow',
      exploreColor: '#bd00ff',
      icon: <Code className="world-icon" />,
      detail: {
        summary: 'A seasoned IT Delivery Leader with 27+ years of experience directing high-value global projects for Fortune 500 corporations. Specializing in retail finance, insurance underwriting, manufacturing, and securities trading systems.',
        stats: [
          { value: '27+ Yrs', label: 'Enterprise Experience' },
          { value: '100+', label: 'Projects Completed' },
          { value: '5', label: 'Major Industry Domains' }
        ],
        bullets: [
          'Led end-to-end cloud migrations and legacy modernization for multi-billion dollar operations.',
          'Established agile delivery frameworks reducing software release cycle times by 40%.',
          'Managed distributed cross-functional teams of 120+ engineers, architects, and product managers.',
          'Negotiated vendor SLA frameworks and managed a portfolio budget of $15M+.'
        ],
        tags: ['Delivery Management', 'Cloud Architecture', 'Agile Scale', 'Risk Management', 'Legacy Modernization']
      }
    },
    {
      id: 'youtube',
      title: 'YouTuber',
      navTarget: 'youtube',
      desc: 'Creating videos that educate, inspire and add real value.',
      bgImage: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=400&q=80',
      colorClass: 'red-glow',
      exploreColor: '#ff004c',
      icon: <Youtube className="world-icon" />,
      detail: {
        summary: 'Passionate digital educator producing highly-technical courses, software reviews, and industry career guides. Sharing structured knowledge on cloud infrastructure, SaaS engineering, and career development.',
        stats: [
          { value: '50K+', label: 'Subscribers' },
          { value: '2.5M+', label: 'Total Views' },
          { value: '150+', label: 'Videos Published' }
        ],
        bullets: [
          'Created highly rated tutorial series on full-stack SaaS architecture and system design.',
          'Conducted live coding bootcamps covering React, Node.js, and cloud orchestration.',
          'Collaborated with global developer tool companies for technical sponsorships.',
          'Fostered an active developer community of 10K+ members across Discord and newsletter.'
        ],
        tags: ['Tech Education', 'Video Production', 'Dev Advocacy', 'Community Building', 'Technical Writing']
      }
    },
    {
      id: 'saas',
      title: 'SaaS Creator',
      navTarget: 'saas',
      desc: 'Building tools and products that simplify and scale.',
      bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
      colorClass: 'cyan-glow',
      exploreColor: '#00f0ff',
      icon: <Box className="world-icon" />,
      detail: {
        summary: 'Architecting and bootstrapping lightweight, hyper-focused SaaS applications designed to solve operational bottlenecks for creators and developers. Focusing on performance, design, and user-centric flows.',
        stats: [
          { value: '3', label: 'Products Launched' },
          { value: '$8K+', label: 'Monthly Recurring Revenue' },
          { value: '2.2K', label: 'Active Users' }
        ],
        bullets: [
          'Designed and built a modular workflow automation engine processing 50K jobs daily.',
          'Optimized database queries and cloud resource usage, maintaining a $40 monthly infrastructure cost.',
          'Implemented frictionless Stripe subscription funnels and analytics dashboards.',
          'Conducted customer development cycles to iterate fast and achieve product-market fit.'
        ],
        tags: ['Next.js / React', 'Node.js / Serverless', 'PostgreSQL', 'Stripe API', 'Cloudflare Workers']
      }
    },
    {
      id: 'content',
      title: 'Content Creator',
      navTarget: 'ads',
      desc: 'Crafting content that engages, informs and drives impact.',
      bgImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=400&q=80',
      colorClass: 'gold-glow',
      exploreColor: '#ffd700',
      icon: <Edit3 className="world-icon" />,
      detail: {
        summary: 'Connecting technology brands with audiences through professional advertisement scripts, graphic assets, case studies, and engaging social posts. Crafting narratives that convert views into leads.',
        stats: [
          { value: '25+', label: 'Brand Partnerships' },
          { value: '15%', label: 'Avg Engagement Rate' },
          { value: '400K+', label: 'Monthly Organic Reach' }
        ],
        bullets: [
          'Wrote, directed, and edited short-form advertising videos generating over 500K impressions.',
          'Designed high-conversion lead generation resources (e-books, templates, checklists).',
          'Curated daily educational carousels on LinkedIn covering AI toolchains and system scaling.',
          'Advised early-stage tech startups on their content engine buildout.'
        ],
        tags: ['Copywriting', 'Video Editing', 'Brand Strategy', 'Growth Marketing', 'Graphic Design']
      }
    },
    {
      id: 'mentor',
      title: 'Mentor & Learner',
      navTarget: 'about',
      desc: 'Mentoring teams and continuously learning to stay ahead.',
      bgImage: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=400&q=80',
      colorClass: 'purple-glow',
      exploreColor: '#bd00ff',
      icon: <Star className="world-icon" />,
      detail: {
        summary: 'Investing time back into the global engineering ecosystem through structured mentorship schemes, executive advisory roles, and maintaining a rigorous personal curriculum to master emerging technology trends.',
        stats: [
          { value: '150+', label: 'Mentees Guided' },
          { value: '4.9/5', label: 'Mentorship Rating' },
          { value: '12+', label: 'Certifications Held' }
        ],
        bullets: [
          'Coached 40+ senior developers into technical lead and director-level roles.',
          'Conducted architectural reviews and system audits for early-stage SaaS ventures.',
          'Dedicated 10 hours weekly to researching AI orchestration pipelines and Web3 applications.',
          'Published open-source guides on system architecture design patterns.'
        ],
        tags: ['Leadership Coaching', 'System Audits', 'Active Learning', 'Tech Advisory', 'Open Source']
      }
    }
  ];

  return (
    <section className="myworld-section fade-in">
      {/* 1. Stats Counter Strip (Styled exactly like mockup with dividers) */}
      <div className="stats-strip glass-panel">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon-wrapper">{stat.icon}</div>
            <div className="stat-info">
              {stat.isInfinity ? (
                <div className="stat-infinity-group">
                  <div className="stat-infinity-symbol">
                    {stat.icon}
                  </div>
                  <div className="stat-label-lines">
                    {stat.labelLines.map((line, i) => (
                      <span key={i} className="stat-label-line">{line}</span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="stat-text-group">
                  <span className="stat-value title-font">{stat.value}</span>
                  <div className="stat-label-lines">
                    {stat.labelLines.map((line, i) => (
                      <span key={i} className="stat-label-line">{line}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 2. Cyber Separator Bar */}
      <div className="myworld-header-separator">
        <div className="sep-line left"></div>
        <span className="sep-text">MY WORLD</span>
        <div className="sep-line right"></div>
      </div>

      {/* 3. Immersive Cards Grid */}
      <div className="myworld-flex-grid">
        {worldCards.map((card) => (
          <div 
            key={card.id} 
            className="world-cyber-card glass-panel"
            onClick={() => setActiveSection(card.navTarget)}
            role="button"
            tabIndex={0}
            aria-label={`Explore ${card.title}`}
            onKeyDown={(e) => e.key === 'Enter' && setActiveSection(card.navTarget)}
          >
            {/* Card Background image with custom dark overlay */}
            <div className="card-bg-image-wrapper">
              <img src={card.bgImage} alt={card.title} className="card-bg-image" />
              <div className="card-bg-overlay"></div>
            </div>

            <div className="card-cyber-content">
              {/* Glowing Circle Icon in exact center */}
              <div className={`cyber-circle-badge ${card.colorClass}`}>
                {card.icon}
              </div>

              {/* Title & Description */}
              <div className="card-text-container">
                <h3 className="cyber-card-title title-font">{card.title}</h3>
                <p className="cyber-card-desc">{card.desc}</p>
              </div>

              {/* Bottom Explore trigger */}
              <span className="cyber-card-explore" style={{ color: card.exploreColor }}>
                Explore <ArrowRight size={12} className="exp-arrow" />
              </span>
            </div>
          </div>
        ))}

        {/* 6. Quote Card / Let's Connect (Far Right Card) */}
        <div className="quote-connect-card glass-panel">
          <div className="quote-header">
            <span className="quote-mark">“</span>
          </div>
          <p className="quote-content-text">
            I believe in creating value through technology, sharing knowledge, and building things that matter.
          </p>
          
          <button 
            className="btn-primary connect-pulse-btn"
            onClick={() => setActiveSection('contact')}
          >
            <Send size={12} className="connect-send-icon" /> Let's Connect
          </button>
        </div>
      </div>

      {/* 4. Bottom Horizontal Audio visualizer waveform */}
      <div className="visualizer-container-wrapper">
        <div className="visualizer-wave-row">
          {waveBars.map((bar) => (
            <span 
              key={bar.id} 
              className="visualizer-bar"
              style={{ 
                height: `${bar.baseHeight}px`,
                animationDelay: `${bar.delay}s`
              }}
            ></span>
          ))}
        </div>

        {/* 5. Scroll indicator matching mockup */}
        <div className="scroll-indicator-wrapper" onClick={() => setActiveSection('about')}>
          <span className="scroll-indicator-text">Scroll to Explore</span>
          <div className="scroll-indicator-mouse">
            <div className="scroll-indicator-wheel"></div>
          </div>
        </div>
      </div>

      {/* Immersive Detail Modal Overlay */}
      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-container glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActiveModal(null)}>
              &times;
            </button>
            
            <div className="modal-header">
              <div className={`modal-icon-badge`}>
                {activeModal.icon}
              </div>
              <div>
                <h3 className="modal-title title-font">{activeModal.title}</h3>
                <span className="modal-subtitle">Ecosystem Showcase</span>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-summary">
                <h4>EXECUTIVE SUMMARY</h4>
                <p>{activeModal.detail.summary}</p>
              </div>

              <div className="modal-stats">
                {activeModal.detail.stats.map((st, i) => (
                  <div key={i} className="modal-stat-box">
                    <span className="modal-stat-val">{st.value}</span>
                    <span className="modal-stat-lbl">{st.label}</span>
                  </div>
                ))}
              </div>

              <div className="modal-bullets">
                <h4>KEY FOCUS & ACHIEVEMENTS</h4>
                <ul>
                  {activeModal.detail.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-tags">
                <h4>AREAS OF EXPERTISE</h4>
                <div className="tags-flex">
                  {activeModal.detail.tags.map((tag, i) => (
                    <span key={i} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="modal-footer">
              <button 
                className="btn-primary" 
                onClick={() => {
                  if (activeModal.id === 'youtube') setActiveSection('youtube');
                  else if (activeModal.id === 'saas') setActiveSection('saas');
                  else if (activeModal.id === 'content') setActiveSection('ads');
                  else if (activeModal.id === 'it') setActiveSection('myworld');
                  else setActiveSection('about');
                  setActiveModal(null);
                }}
              >
                Go to Dedicated Section <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .myworld-section {
          padding: 0;
          display: flex;
          flex-direction: column;
          height: 60%;
          justify-content: space-between;
        }

        /* 1. Stats counter strip layout (Exact Mockup Match) */
        .stats-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding: 8px 16px;
          background: rgba(10, 6, 26, 0.4);
          border: 1px solid var(--border-glass);
          border-radius: 8px;
        }

        @media (max-width: 900px) {
          .stats-strip {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
        }

        @media (max-width: 480px) {
          .stats-strip {
            grid-template-columns: 1fr;
          }
        }

        .stat-card {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          position: relative;
        }

        /* Vertical dividers between stat cards */
        .stat-card:not(:last-child)::after {
          content: '';
          position: absolute;
          right: 0;
          top: 20%;
          height: 60%;
          width: 1px;
          background: rgba(255, 255, 255, 0.08);
        }

        @media (max-width: 900px) {
          .stat-card:nth-child(2)::after {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .stat-card::after {
            display: none !important;
          }
        }

        .stat-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          color: var(--text-secondary);
        }

        .stat-icon {
          width: 18px;
          height: 18px;
        }

        .stat-icon.purple-text { color: #a855f7; filter: drop-shadow(0 0 3px rgba(168, 85, 247, 0.3)); }
        .stat-icon.blue-text { color: #3b82f6; filter: drop-shadow(0 0 3px rgba(59, 130, 246, 0.3)); }
        .stat-icon.cyan-text { color: var(--neon-cyan); filter: drop-shadow(0 0 3px rgba(0, 240, 255, 0.3)); }

        .stat-info {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .stat-text-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .stat-value {
          font-family: var(--font-heading);
          font-size: 22px;
          font-weight: 700;
          color: #60a5fa;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .stat-infinity-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .stat-infinity-symbol {
          display: flex;
          align-items: center;
          color: #a855f7;
          filter: drop-shadow(0 0 4px rgba(168, 85, 247, 0.4));
        }

        .stat-label-lines {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }

        .stat-label-line {
          font-size: 12px;
          color: #cbd5e1;
          white-space: nowrap;
          font-weight: 500;
        }

        /* 2. Cyber Separator Header */
        .myworld-header-separator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          margin: 0;
        }

        .sep-line {
          height: 1px;
          flex-grow: 1;
          background: linear-gradient(90deg, transparent, var(--border-neon));
        }

        .sep-line.right {
          background: linear-gradient(90deg, var(--border-neon), transparent);
        }

        .sep-text {
          font-family: var(--font-mono);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: var(--neon-cyan);
          text-shadow: 0 0 6px rgba(0, 240, 255, 0.3);
        }

        /* 3. Cyber Cards Grid */
        .myworld-flex-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr) 1.2fr;
          gap: 12px;
        }

        @media (max-width: 1200px) {
          .myworld-flex-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .myworld-flex-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .myworld-flex-grid {
            grid-template-columns: 1fr;
          }
        }

        .world-cyber-card {
          position: relative;
          height: 255px;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.10);
          transition: all var(--transition-medium);
          background: #0d0a1f;
        }

        .card-bg-image-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          overflow: hidden;
        }

        .card-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
          opacity: 0.45;
        }

        .card-bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(5, 2, 15, 0.1) 0%, rgba(5, 2, 15, 0.7) 50%, rgba(5, 2, 15, 0.92) 100%);
          z-index: 2;
        }

        .world-cyber-card:hover .card-bg-image {
          transform: scale(1.06);
          opacity: 0.5;
        }

        .world-cyber-card:hover {
          border-color: rgba(0, 240, 255, 0.3);
          box-shadow: 0 0 15px rgba(0, 240, 255, 0.1);
          transform: translateY(-2px);
        }

        .card-cyber-content {
          position: relative;
          z-index: 3;
          height: 100%;
          padding: 14px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        /* Glowing Badge circle exactly centered in upper-middle */
        .cyber-circle-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(5, 2, 10, 0.85);
          border: 1px solid var(--text-muted);
          margin-top: 15px;
          margin-bottom: auto;
          transition: all var(--transition-medium);
        }

        .world-icon {
          width: 13px;
          height: 13px;
          color: #fff;
        }

        /* Glowing halos matched to images */
        .cyber-circle-badge.purple-glow {
          border-color: #a855f7;
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.5), inset 0 0 4px rgba(168, 85, 247, 0.3);
        }
        .cyber-circle-badge.red-glow {
          border-color: #ef4444;
          box-shadow: 0 0 10px rgba(239, 68, 68, 0.5), inset 0 0 4px rgba(239, 68, 68, 0.3);
        }
        .cyber-circle-badge.cyan-glow {
          border-color: #06b6d4;
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.5), inset 0 0 4px rgba(6, 182, 212, 0.3);
        }
        .cyber-circle-badge.gold-glow {
          border-color: #eab308;
          box-shadow: 0 0 10px rgba(234, 179, 8, 0.5), inset 0 0 4px rgba(234, 179, 8, 0.3);
        }

        .world-cyber-card:hover .cyber-circle-badge {
          transform: scale(1.05);
        }

        .card-text-container {
          margin-top: auto;
          margin-bottom: 8px;
        }

        .cyber-card-title {
          font-family: var(--font-heading);
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 4px;
          text-shadow: 0 1px 8px rgba(0,0,0,0.9);
          letter-spacing: -0.01em;
        }

        .cyber-card-desc {
          font-size: 13px;
          color: #cbd5e1;
          line-height: 1.45;
          padding: 0;
          text-shadow: 0 1px 6px rgba(0,0,0,0.8);
        }

        .cyber-card-explore {
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: all 0.2s ease;
          margin-bottom: 4px;
          text-shadow: 0 0 8px currentColor;
        }

        .exp-arrow {
          transition: transform 0.2s ease;
        }

        .world-cyber-card:hover .exp-arrow {
          transform: translateX(2px);
        }

        /* 6. Quote Card on right */
        .quote-connect-card {
          grid-column: span 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding: 20px 16px;
          text-align: left;
          background: rgba(10, 6, 26, 0.7);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 8px;
          min-height: 255px;
        }

        @media (max-width: 1200px) {
          .quote-connect-card {
            grid-column: span 3;
            min-height: auto;
          }
        }
        @media (max-width: 768px) {
          .quote-connect-card {
            grid-column: span 2;
          }
        }
        @media (max-width: 480px) {
          .quote-connect-card {
            grid-column: span 1;
          }
        }

        .quote-mark {
          font-family: var(--font-heading);
          font-size: 34px;
          line-height: 1;
          color: #2563eb;
          opacity: 0.5;
          display: block;
          height: 16px;
          margin-top: -10px;
        }

        .quote-content-text {
          font-size: 14px;
          line-height: 1.55;
          color: #cbd5e1;
          margin-bottom: auto;
          margin-top: 10px;
          font-weight: 400;
        }

        .connect-pulse-btn {
          width: 100%;
          justify-content: center;
          font-size: 10px;
          padding: 8px 12px;
          border-radius: 4px;
          background: linear-gradient(135deg, #1d4ed8 0%, #1e1b4b 100%);
          border: 1px solid rgba(59, 130, 246, 0.4);
          box-shadow: 0 4px 10px rgba(29, 78, 216, 0.2);
          margin-top: 10px;
        }

        .connect-pulse-btn:hover {
          box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4);
          transform: translateY(-1px);
        }

        .connect-send-icon {
          transform: rotate(-15deg);
          margin-right: 6px;
        }

        /* 4. Bottom Horizontal Wave Visualizer */
        .visualizer-container-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          width: 100%;
          margin-top: 4px;
        }

        .visualizer-wave-row {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          gap: 2px;
          height: 20px;
          width: 100%;
          overflow: hidden;
        }

        .visualizer-bar {
          width: 2px;
          background: linear-gradient(180deg, #3b82f6 0%, #a855f7 100%);
          border-radius: 1px;
          animation: bar-dance-cyber 0.8s ease-in-out infinite alternate;
          transform-origin: bottom;
          opacity: 0.8;
        }

        @keyframes bar-dance-cyber {
          0% {
            transform: scaleY(0.15);
          }
          100% {
            transform: scaleY(1.15);
          }
        }

        /* 5. Scroll to Explore indicator with mouse wheel animation */
        .scroll-indicator-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          opacity: 0.6;
          transition: opacity 0.2s ease;
          margin-top: 4px;
        }

        .scroll-indicator-wrapper:hover {
          opacity: 1;
        }

        .scroll-indicator-text {
          font-family: var(--font-mono);
          font-size: 8px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-muted);
        }

        .scroll-indicator-mouse {
          width: 16px;
          height: 24px;
          border: 1.5px solid var(--text-muted);
          border-radius: 8px;
          position: relative;
        }

        .scroll-indicator-wheel {
          width: 2px;
          height: 5px;
          background-color: var(--neon-cyan);
          border-radius: 1px;
          position: absolute;
          left: 50%;
          top: 4px;
          transform: translateX(-50%);
          animation: scroll-dot-move 1.6s infinite ease-in-out;
        }

        @keyframes scroll-dot-move {
          0% {
            top: 4px;
            opacity: 1;
          }
          50% {
            top: 12px;
            opacity: 0;
          }
          100% {
            top: 4px;
            opacity: 0;
          }
        }

        /* Modal styling */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(4, 1, 13, 0.9);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .modal-container {
          position: relative;
          width: 100%;
          max-width: 600px;
          background: rgba(18, 12, 45, 0.96);
          border: 1px solid rgba(0, 240, 255, 0.35);
          border-radius: 16px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          box-shadow: 0 0 50px rgba(0, 240, 255, 0.25);
          animation: modal-zoom-in 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close-btn {
          position: absolute;
          top: 15px;
          right: 20px;
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 24px;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .modal-close-btn:hover {
          color: var(--neon-pink);
        }

        .modal-header {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .modal-icon-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(4, 1, 13, 0.85);
          border: 1.5px solid var(--neon-cyan);
          box-shadow: 0 0 10px var(--neon-cyan);
          color: #fff;
        }

        .modal-title {
          font-size: 20px;
          color: #fff;
        }

        .modal-subtitle {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .modal-body {
          display: flex;
          flex-direction: column;
          gap: 20px;
          text-align: left;
        }

        .modal-body h4 {
          font-family: var(--font-heading);
          font-size: 9px;
          color: var(--text-muted);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .modal-summary p {
          font-size: 13.5px;
          color: var(--text-primary);
          line-height: 1.6;
        }

        .modal-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .modal-stat-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          border-radius: 6px;
          padding: 10px;
          text-align: center;
        }

        .modal-stat-val {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 700;
          color: var(--neon-cyan);
          display: block;
        }

        .modal-stat-lbl {
          font-size: 9px;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .modal-bullets ul {
          padding-left: 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .modal-bullets li {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .tags-flex {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .tech-tag {
          font-family: var(--font-mono);
          font-size: 9px;
          padding: 3px 8px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          color: var(--text-secondary);
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          border-top: 1px solid var(--border-glass);
          padding-top: 15px;
          margin-top: 5px;
        }
      `}</style>
    </section>
  );
};

export default MyWorld;
