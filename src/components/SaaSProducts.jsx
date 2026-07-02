import React from 'react';
import { ExternalLink, CheckCircle, Database, Server, Cpu, Code2, Sparkles, MessageSquare } from 'lucide-react';

const SaaSProducts = ({ setActiveSection }) => {
  const product = {
    name: 'PulsePoll',
    tagline: 'Real-Time Quiz & Poll Analytics Platform',
    url: 'https://pulsepoll-a-five.vercel.app/',
    description: 'An interactive, low-latency quiz tracker and polling application designed for instant check-ins, workshop feedback, and live event engagement. PulsePoll features real-time response monitoring, customizable question formats, and immediate analytics rendering.',
    techStack: ['React', 'Next.js', 'TailwindCSS', 'Serverless APIs', 'Vercel Edge'],
    features: [
      'Real-time live response tracking and charts.',
      'Instant, zero-config poll and quiz building.',
      'Responsive, mobile-friendly participant views.',
      'Fast, serverless edge rendering for global reliability.'
    ]
  };

  return (
    <section className="saas-section fade-in">
      
      {/* ── Page Header ── */}
      <div className="saas-header">
        <div className="saas-header-badge">
          <Sparkles size={14} />
          <span>Micro-SaaS Specialist</span>
        </div>
        <h1 className="saas-title title-font">
          SaaS <span className="text-gradient">Products</span>
        </h1>
        <p className="saas-subtitle">
          I specialize in building lightweight, hyper-focused **Micro-SaaS** products designed to solve specific operational bottlenecks with serverless edge speeds.
        </p>
      </div>

      {/* ── Main Layout Grid ── */}
      <div className="saas-main-grid">
        
        {/* Left Side: PulsePoll Showcase */}
        <div className="saas-showcase-column">
          <div className="saas-info-card glass-panel">
            <div className="card-top-row">
              <span className="featured-badge">Featured Creation</span>
            </div>
            
            <h2 className="product-name title-font">{product.name}</h2>
            <span className="product-tagline">{product.tagline}</span>
            
            <p className="product-desc">{product.description}</p>

            {/* Key Capabilities */}
            <div className="product-features-box">
              <h3 className="box-title title-font">Key Capabilities</h3>
              <ul className="features-list-box">
                {product.features.map((feat, i) => (
                  <li key={i} className="feature-item-box">
                    <CheckCircle size={15} className="check-icon" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="product-tech-box">
              <h3 className="box-title title-font">Stack Architecture</h3>
              <div className="tech-tags-list">
                {product.techStack.map((tech, i) => (
                  <span key={i} className="tech-tag-pill">
                    <Code2 size={11} /> {tech}
                  </span>
                ))}
              </div>
            </div>

            <a 
              href={product.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary launch-btn"
            >
              Launch PulsePoll <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Right Side: Custom Builds & Pricing Info */}
        <div className="saas-meta-column">
          
          <div className="inquiry-card glass-panel">
            <h3 className="inquiry-title title-font">Custom Micro-SaaS Builds</h3>
            <p className="inquiry-text">
              Do you need a custom-built dashboard, real-time utility, or automated SaaS platform tailored to your workflow requirements?
            </p>
            
            <div className="inquiry-pricing-note">
              <span className="pricing-label">Pricing Mode</span>
              <p className="pricing-value">
                For pricing, please share your specific business and functional requirements in the contact section.
              </p>
            </div>

            <button 
              className="btn-secondary contact-cta-btn"
              onClick={() => setActiveSection('contact')}
            >
              Inquire About Custom SaaS <MessageSquare size={14} />
            </button>
          </div>

        </div>

      </div>

      <style>{`
        .saas-section {
          padding: 24px 0 60px;
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .saas-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .saas-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 14px;
          background: rgba(5, 255, 161, 0.08);
          border: 1px solid rgba(5, 255, 161, 0.28);
          border-radius: 20px;
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--neon-green, #05ffa1);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          width: fit-content;
        }

        .saas-title {
          font-size: 40px;
          line-height: 1.1;
        }

        .saas-subtitle {
          font-size: 16px;
          color: var(--text-secondary);
          max-width: 750px;
          line-height: 1.6;
        }

        /* Layout Grid */
        .saas-main-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 32px;
          align-items: start;
        }

        @media (max-width: 1024px) {
          .saas-main-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Showcase Card */
        .saas-info-card {
          padding: 28px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(18, 12, 45, 0.2);
          display: flex;
          flex-direction: column;
          gap: 16px;
          text-align: left;
        }

        .card-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .featured-badge {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 700;
          padding: 3px 8px;
          background: rgba(5, 255, 161, 0.1);
          border: 1px solid rgba(5, 255, 161, 0.25);
          color: var(--neon-green, #05ffa1);
          border-radius: 4px;
          text-transform: uppercase;
        }

        .product-name {
          font-size: 26px;
          color: #fff;
        }

        .product-tagline {
          font-size: 14.5px;
          color: var(--text-muted);
          font-weight: 500;
          margin-top: -6px;
        }

        .product-desc {
          font-size: 14.5px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Features Box */
        .product-features-box {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 16px;
        }

        .box-title {
          font-size: 15px;
          color: #fff;
          margin-bottom: 12px;
        }

        .features-list-box {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .feature-item-box {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .check-icon {
          color: var(--neon-green, #05ffa1);
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Tech Box */
        .product-tech-box {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 16px;
          margin-bottom: 8px;
        }

        .tech-tags-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 11.5px;
          padding: 3px 10px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: var(--text-secondary);
        }

        .launch-btn {
          margin-top: 10px;
          width: fit-content;
        }

        /* Inquiry Card */
        .inquiry-card {
          padding: 28px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(18, 12, 45, 0.2);
          display: flex;
          flex-direction: column;
          gap: 16px;
          text-align: left;
        }

        .inquiry-title {
          font-size: 18px;
          color: #fff;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 8px;
        }

        .inquiry-text {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .inquiry-pricing-note {
          background: rgba(6, 4, 18, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .pricing-label {
          font-family: var(--font-mono);
          font-size: 9.5px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .pricing-value {
          font-size: 13px;
          color: #cbd5e1;
          line-height: 1.45;
        }

        .contact-cta-btn {
          margin-top: 4px;
          width: 100%;
          justify-content: center;
          cursor: pointer;
        }
      `}</style>

    </section>
  );
};

export default SaaSProducts;
