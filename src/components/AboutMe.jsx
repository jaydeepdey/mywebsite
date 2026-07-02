import React from 'react';
import { 
  Briefcase, Code, Sparkles, Heart, Award, 
  Terminal, ShieldCheck, Video, CheckCircle, Mail 
} from 'lucide-react';
import { Youtube, Linkedin } from './BrandIcons';

const AboutMe = () => {
  const pillars = [
    {
      icon: <Briefcase className="pillar-icon cyan" />,
      title: 'IT Delivery Leadership',
      desc: '26+ years at Tata Consultancy Services directing multi-million EUR portfolios, cloud migrations (Azure/AWS), and massive ERP transformations (S4 Hana).',
      color: 'rgba(0, 240, 255, 0.15)',
      borderColor: 'rgba(0, 240, 255, 0.4)'
    },
    {
      icon: <Code className="pillar-icon purple" />,
      title: 'SaaS & AI Innovation',
      desc: 'Certified Microsoft AI Transformation Leader incubating automated micro-SaaS utilities, serverless workflows, and hands-on Gen AI PoCs.',
      color: 'rgba(189, 0, 255, 0.15)',
      borderColor: 'rgba(189, 0, 255, 0.4)'
    },
    {
      icon: <Video className="pillar-icon gold" />,
      title: 'Cinematic Media (Brand Frame)',
      desc: 'Creator of the "Brand Frame" YouTube channel directing cinematic advertisements, spec campaigns, and motivational storytelling.',
      color: 'rgba(255, 215, 0, 0.15)',
      borderColor: 'rgba(255, 215, 0, 0.4)'
    },
    {
      icon: <Heart className="pillar-icon red" />,
      title: 'Family & Life Foundation',
      desc: 'Guided by family values. The heart of my world is a dedicated personal archive capturing life journeys with my loving wife and daughter.',
      color: 'rgba(239, 68, 68, 0.15)',
      borderColor: 'rgba(239, 68, 68, 0.4)'
    }
  ];

  return (
    <section className="aboutme-section fade-in">
      
      {/* ── Page Header ── */}
      <div className="aboutme-header">
        <div className="aboutme-header-badge">
          <ShieldCheck size={14} />
          <span>Executive Summary &amp; Life Portfolio</span>
        </div>
        <h1 className="aboutme-title title-font">
          About <span className="text-gradient">Me</span>
        </h1>
        <p className="aboutme-subtitle">
          An overview of my 26+ year journey spanning enterprise program management, creative media production, SaaS incubation, and family life.
        </p>
      </div>

      <div className="aboutme-grid">
        
        {/* Left Column: Biography & Philosophy */}
        <div className="bio-side">
          <div className="bio-card glass-panel">
            <h3 className="bio-card-title title-font">The Professional Narrative</h3>
            <p className="bio-text">
              Over a career spanning more than two and a half decades at <strong>Tata Consultancy Services (TCS)</strong>, I have worked across the entire software delivery spectrum. Starting as a software engineer writing mainframe transactional code, I transitioned into large-scale program management and became an enterprise <strong>Delivery Partner</strong>.
            </p>
            <p className="bio-text">
              My expertise lies in bridging complex technological solutions with high-level corporate strategies. I have directed core banking transformations, retail e-commerce overhauls, and massive Azure cloud migrations for Fortune 500 companies in the US, UK, and Europe.
            </p>
            <p className="bio-text">
              In parallel to corporate leadership, I embrace an builder's mindset: designing serverless micro-SaaS applications, experimenting with Gen AI automation pipelines, and producing creative video campaigns.
            </p>

            <div className="philosophy-block">
              <h4 className="philosophy-title title-font">My Core Philosophy</h4>
              <ul className="philosophy-list">
                <li className="philosophy-item">
                  <CheckCircle size={16} className="check-icon" />
                  <span><strong>Engineering Excellence:</strong> Focus on robust release governance, automated testing, and high SRE uptime models.</span>
                </li>
                <li className="philosophy-item">
                  <CheckCircle size={16} className="check-icon" />
                  <span><strong>Creative Expression:</strong> Using cinematic storytelling and clean copywriting to connect brands with audiences.</span>
                </li>
                <li className="philosophy-item">
                  <CheckCircle size={16} className="check-icon" />
                  <span><strong>Gratitude &amp; Core Values:</strong> Grounded in family life, recognizing that professional achievements are powered by a loving, supportive home.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Key Pillars of My World */}
        <div className="pillars-side">
          <h3 className="pillars-side-title title-font">Four Pillars of My World</h3>
          
          <div className="pillars-list-grid">
            {pillars.map((p, idx) => (
              <div 
                key={idx} 
                className="pillar-card glass-panel"
                style={{ 
                  '--pillar-bg': p.color,
                  '--pillar-border': p.borderColor
                }}
              >
                <div className="pillar-card-header">
                  {p.icon}
                  <h4 className="pillar-card-title title-font">{p.title}</h4>
                </div>
                <p className="pillar-card-desc">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Social Links Quick Access */}
          <div className="quick-access-card glass-panel">
            <span className="quick-access-title">Secure Communication Channels:</span>
            <div className="quick-access-links">
              <a href="https://www.linkedin.com/in/jaydeep-dey-52503810/" target="_blank" rel="noopener noreferrer" className="qa-link" aria-label="LinkedIn Profile">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="https://www.youtube.com/@BrandFrame-yt" target="_blank" rel="noopener noreferrer" className="qa-link" aria-label="YouTube Channel">
                <Youtube size={16} /> YouTube
              </a>
              <a href="mailto:jaydeepdey@gmail.com" className="qa-link" aria-label="Email Jaydeep">
                <Mail size={16} /> Email
              </a>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .aboutme-section {
          padding: 24px 0 60px;
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .aboutme-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .aboutme-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 14px;
          background: rgba(189, 0, 255, 0.08);
          border: 1px solid rgba(189, 0, 255, 0.28);
          border-radius: 20px;
          font-family: var(--font-mono);
          font-size: 12px;
          color: #d8b4fe;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          width: fit-content;
        }

        .aboutme-title {
          font-size: 40px;
          line-height: 1.1;
        }

        .aboutme-subtitle {
          font-size: 16px;
          color: var(--text-secondary);
          max-width: 750px;
          line-height: 1.6;
        }

        /* Main Grid */
        .aboutme-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 32px;
          align-items: start;
        }

        @media (max-width: 1024px) {
          .aboutme-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Bio Side */
        .bio-card {
          padding: 28px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(18, 12, 45, 0.2);
          display: flex;
          flex-direction: column;
          gap: 16px;
          text-align: left;
        }

        .bio-card-title {
          font-size: 20px;
          color: #fff;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 8px;
        }

        .bio-text {
          font-size: 14.5px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Philosophy block */
        .philosophy-block {
          margin-top: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 16px;
        }

        .philosophy-title {
          font-size: 15px;
          color: #fff;
          margin-bottom: 12px;
        }

        .philosophy-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .philosophy-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .check-icon {
          color: var(--neon-cyan);
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Pillars Side */
        .pillars-side {
          display: flex;
          flex-direction: column;
          gap: 20px;
          text-align: left;
        }

        .pillars-side-title {
          font-size: 20px;
          color: #fff;
        }

        .pillars-list-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .pillar-card {
          padding: 20px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(18, 12, 45, 0.25);
          transition: all 0.25s ease;
        }

        .pillar-card:hover {
          border-color: var(--pillar-border);
          box-shadow: 0 0 16px var(--pillar-bg);
          transform: translateY(-2px);
        }

        .pillar-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }

        .pillar-icon {
          width: 20px;
          height: 20px;
        }

        .pillar-icon.cyan { color: var(--neon-cyan); }
        .pillar-icon.purple { color: var(--neon-purple); }
        .pillar-icon.gold { color: #ffd700; }
        .pillar-icon.red { color: #f87171; }

        .pillar-card-title {
          font-size: 15px;
          font-weight: 700;
          color: #fff;
        }

        .pillar-card-desc {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Quick Access Links */
        .quick-access-card {
          padding: 16px 20px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(18, 12, 45, 0.15);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .quick-access-title {
          font-size: 13px;
          color: var(--text-muted);
          font-family: var(--font-mono);
          text-transform: uppercase;
        }

        .quick-access-links {
          display: flex;
          gap: 16px;
        }

        .qa-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: var(--text-secondary);
          transition: color 0.2s ease;
        }

        .qa-link:hover {
          color: #fff;
        }
      `}</style>

    </section>
  );
};

export default AboutMe;
