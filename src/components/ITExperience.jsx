import React, { useState } from 'react';
import {
  Briefcase, Award, Users, Shield, Cpu, Zap,
  ChevronDown, ChevronUp, CheckCircle, GraduationCap, MapPin, Calendar
} from 'lucide-react';

const ITExperience = () => {
  const [activeRole, setActiveRole] = useState(0);
  const [certFilter, setCertFilter] = useState('all');

  const specializations = [
    { title: 'Program Management', desc: 'Big Transformational Program Management & Delivery of complex digital solutions.' },
    { title: 'Portfolio Management', desc: 'P&L ownership, stakeholder management, resource planning, and governance.' },
    { title: 'AI & Cloud Transformation', desc: 'Microsoft Certified AI Transformation Leader with cloud migration strategy experience.' },
    { title: 'Agile & DevOps Scale', desc: 'SAFe Agilist, Professional Scrum Master, and traditional waterfall methodologies.' },
    { title: 'Industry Expertise', desc: 'Retail, E-commerce, Insurance, Banking & Finance, Manufacturing, and Securities.' },
    { title: 'Governance & PMO', desc: 'Uplifting engineering maturity (DART), ISO audits, and SLA compliance.' }
  ];

  const careerHistory = [
    {
      role: 'Delivery Partner',
      duration: 'July 2025 – Present',
      location: 'Kolkata, India (TCS)',
      client: 'Carrefour Belgium, Action Netherlands, Jumbo Supermarkets, Lyreco France',
      summary: 'Delivery Partner responsible for services and big transformational programs across major European retail accounts.',
      points: [
        'Crafted and implemented the SAP AMS Engineering Maturity framework across Retail UK Benelux accounts.',
        'Spearheaded Gen AI workshops, Hackathons, and Ideathons, significantly upgrading the team technical capabilities.',
        'Led SAP F&R rollout & support (Carrefour) and TCS Optumera product implementation (Action, Jumbo).',
        'Responsible for customer relationship, commercial negotiations, resource management, and risk governance.'
      ],
      tags: ['SAP Stack', 'TCS Optumera', 'Gen AI Enablement', 'Governance', 'Retail Tech'],
      color: '#00f0ff'
    },
    {
      role: 'Development & Transformation Portfolio Manager',
      duration: 'Jan 2023 – July 2025',
      location: 'Kolkata, India (TCS)',
      client: 'Co-op UK Ltd',
      summary: 'Managed the Application Development & Transformation Portfolio (Team size 150+) for the UK’s largest co-operative group.',
      points: [
        'Successfully won a 5 Million EUR S4 Hana Migration deal and a 1 Million EUR Vendor Portal transformation contract.',
        'Stabilized a critical non-functioning legacy store application team, restoring service reliability and customer confidence.',
        'Achieved Standard DART maturity certification for the account as the Engineering Maturity SPOC.',
        'Directly managed run teams for Supply Chain, Integration, Fulfilment, Merchandising, and Warehouse Management.'
      ],
      tags: ['S4 Hana Migration', 'DART Maturity', 'Portfolio P&L', 'Supply Chain Tech', 'Vendor Negotiation'],
      color: '#bd00ff'
    },
    {
      role: 'Program Manager & Service Delivery Owner',
      duration: 'May 2020 – Dec 2022',
      location: 'Kolkata, India (TCS)',
      client: 'Tata Digital (TataNeu) & Tata Unistore Ltd (TataCliq)',
      summary: 'Managed program implementation for Tata Pay (TataNeu payment super-app) and Service Delivery Owner for e-commerce reliability.',
      points: [
        'Architected and set up the Digital Command Center & Site Reliability Engineering (SRE) Teams for TataCliq e-commerce site.',
        'Delivered UPI, Card, Net banking, and regulatory enhancements (RBI guidelines) for TataPay payment solution.',
        'Presented project status, operational risks, and mitigation strategies directly to the CEO and top management.',
        'Organized Hackathons/Ideathons and successfully led the external ISO audit with zero non-compliances.'
      ],
      tags: ['Payment Systems', 'ReactJS / Microservices', 'SRE / Command Center', 'CEO Reporting', 'ISO Audits'],
      color: '#0066ff'
    },
    {
      role: 'Program Manager & Integration Domain Manager',
      duration: 'July 2017 – Apr 2020',
      location: 'Kolkata, India & Zaandam, Netherlands',
      client: 'Ahold Delhaize',
      summary: 'Managed strategic Cloud Migration (Azure) and Integration Development Competency Center (IDCC) for global food retail chain.',
      points: [
        'Coordinated the first-phase cloud migration of 74 latency-sensitive and business-critical applications to Microsoft Azure.',
        'Successfully set up the Integration Development Competency Center (IDCC) covering Mulesoft, webMethods, and Kafka.',
        'Achieved an exceptional 96.1% Customer Satisfaction Score (CSS) with a highly motivated team built from scratch.',
        'Introduced and implemented distributed DevOps culture and practices across the integration landscape.'
      ],
      tags: ['Azure Cloud Migration', 'Mulesoft / Kafka', 'DevOps Transformation', 'Offshore/Onsite model', 'IDCC Setup'],
      color: '#05ffa1'
    },
    {
      role: 'Program & Delivery Manager',
      duration: 'May 2013 – June 2017',
      location: 'Kolkata, India & Southampton, UK',
      client: 'Kingfisher IT Services Ltd (KITS)',
      summary: 'Delivered Darwin Application Development, an omni-channel e-commerce transformation program (Peak team size 106).',
      points: [
        'Managed the e-commerce e-business platforms (Oracle ATG, WebSphere Message Broker, SAP Retail) through 3 releases.',
        'Pioneered Agile Scrum transformation for a traditional Waterfall team, overcoming local competency challenges.',
        'Set up a highly scalable alternative offshore delivery location in Chennai to meet resource demands.'
      ],
      tags: ['Oracle ATG', 'Agile Transformation', 'Omni-Channel Retail', 'Team Scale-up', 'Multi-Vertical Integration'],
      color: '#ffd700'
    },
    {
      role: 'Project & Delivery Manager',
      duration: 'March 2009 – April 2013',
      location: 'Kolkata & Mumbai, India',
      client: 'TCS BaNCS Insurance Portfolio (SBI Life, NIA, Liberty Seguros, Westpac NZ, DPLI)',
      summary: 'Led end-to-end program management and pre-sales for international insurance package implementations.',
      points: [
        'Delivered Liberty Seguros TCS BaNCS implementation across Life, Motor, and non-life products (Portugal and Kolkata).',
        'Led pre-sales and contract negotiations for Westpac New Zealand, visiting client onsite to successfully close the contract.',
        'Managed implementation of SBI Life insurance solution with custom integrations for 5 group life products.'
      ],
      tags: ['TCS BaNCS', 'Pre-Sales', 'Contract Negotiation', 'Insurance Tech', 'International Delivery'],
      color: '#ff004c'
    },
    {
      role: 'On-Site Coordinator & Project Leader',
      duration: 'Oct 1999 – Feb 2009',
      location: 'New York, USA / Singapore / Paris, France',
      client: 'JP Morgan Chase, AXA Equitable, GE Medical Systems, NSDL India',
      summary: 'Directed transition, systems support, and software development in critical banking, healthcare, and securities systems.',
      points: [
        'Transitioned 40+ mainframe applications to TCS offshore model for AXA Equitable in New York.',
        'Acted as On-Site Coordinator in Singapore and Paris for GE Medical Systems factoring and support systems.',
        'Designed CMM Level 5 certified modules and trading settlement systems for NSDL India.'
      ],
      tags: ['Mainframe CICS/COBOL', 'System Transition', 'CMM Level 5', 'Securities & Auto Finance'],
      color: '#a855f7'
    }
  ];

  const certifications = [
    { name: 'Microsoft Certified AI Transformation Leader', date: 'May 2026', cat: 'ai' },
    { name: 'Microsoft Certified AI Business Professional', date: 'May 2026', cat: 'ai' },
    { name: 'DP-900: Azure Data Fundamentals', date: 'Aug 2024', cat: 'cloud' },
    { name: 'AI-900: Azure AI Fundamentals', date: 'Jul 2024', cat: 'ai' },
    { name: 'AZ-900: Azure Fundamentals', date: 'Jul 2023', cat: 'cloud' },
    { name: 'G&T Phoenix (Growth & Transformation Leadership)', date: 'Jun 2022', cat: 'leadership' },
    { name: 'Site Reliability Engineering (SRE) Foundation', date: 'Mar 2022', cat: 'method' },
    { name: 'AWS Certified Cloud Practitioner', date: 'Oct 2021', cat: 'cloud' },
    { name: 'Project Management Professional (PMP)', date: 'Oct 2020', cat: 'leadership' },
    { name: 'SAFe® Agilist (SA)', date: 'Jan 2019', cat: 'agile' },
    { name: 'PSM I (Professional Scrum Master)', date: 'Jun 2017', cat: 'agile' },
    { name: 'ITIL Intermediate (Transition, Design, Strategy)', date: '2015', cat: 'method' },
    { name: 'LOMA Level 1 & 2 (Insurance Systems)', date: 'Sep 2007', cat: 'domain' },
    { name: 'Six Sigma Green Belt Certification', date: 'Jun 2004', cat: 'method' }
  ];

  const filteredCerts = certFilter === 'all' 
    ? certifications 
    : certifications.filter(c => c.cat === certFilter);

  return (
    <section className="it-exp-page fade-in">
      
      {/* ── Page Header ── */}
      <div className="it-exp-header">
        <div className="it-exp-header-badge">
          <Briefcase size={14} />
          <span>TCS · 26 Years &amp; 9 Months Tenure</span>
        </div>
        <h1 className="it-exp-title title-font">
          IT <span className="text-gradient">Experience</span>
        </h1>
        <p className="it-exp-subtitle">
          Highly specialized Program Manager and Delivery Partner driving digital transformation, cloud migration, and Gen AI adoption for global accounts.
        </p>
      </div>

      {/* ── Core Competency Grid ── */}
      <div className="it-pillars-grid">
        {specializations.map((spec, i) => (
          <div className="it-pillar-card glass-panel" key={i}>
            <div className="pillar-header">
              <CheckCircle className="pillar-check-icon" size={16} />
              <h3 className="pillar-label">{spec.title}</h3>
            </div>
            <p className="pillar-desc">{spec.desc}</p>
          </div>
        ))}
      </div>

      {/* ── Two Column Details (History & Certifications) ── */}
      <div className="it-two-column-layout">
        
        {/* Left: Detailed Career Timeline */}
        <div className="it-timeline-side">
          <h2 className="section-title title-font">Professional <span className="text-gradient">Journey</span></h2>
          <div className="timeline-container">
            {careerHistory.map((h, idx) => (
              <div 
                key={idx} 
                className={`timeline-block glass-panel ${activeRole === idx ? 'active' : ''}`}
                onClick={() => setActiveRole(idx)}
                style={{ '--item-color': h.color }}
              >
                <div className="timeline-marker" style={{ background: h.color }} />
                
                <div className="timeline-block-header">
                  <div className="timeline-role-info">
                    <h3 className="timeline-role title-font">{h.role}</h3>
                    <div className="timeline-meta">
                      <span className="timeline-client">{h.client}</span>
                    </div>
                    <div className="timeline-submeta">
                      <span className="meta-item"><Calendar size={12} /> {h.duration}</span>
                      <span className="meta-sep">|</span>
                      <span className="meta-item"><MapPin size={12} /> {h.location}</span>
                    </div>
                  </div>
                  <button className="timeline-toggle-btn" aria-label="Toggle details">
                    {activeRole === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>

                {activeRole === idx && (
                  <div className="timeline-block-body">
                    <p className="role-summary-text">{h.summary}</p>
                    <ul className="timeline-bullets-list">
                      {h.points.map((p, i) => (
                        <li key={i} className="timeline-bullet-item">{p}</li>
                      ))}
                    </ul>
                    <div className="timeline-pill-tags">
                      {h.tags.map((t, i) => (
                        <span key={i} className="timeline-pill-tag" style={{ color: h.color, borderColor: `${h.color}33` }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Certifications & Education */}
        <div className="it-credentials-side">
          
          {/* Education */}
          <div className="credentials-block glass-panel">
            <h3 className="credential-block-title title-font">
              <GraduationCap className="cred-title-icon" size={20} /> Education
            </h3>
            <div className="education-detail">
              <h4 className="edu-degree">Bachelor of Engineering (BE) in Electrical Engineering</h4>
              <p className="edu-college">IIEST Shibpur (erstwhile Bengal Engineering College)</p>
              <p className="edu-meta">West Bengal, India · Class of 1999</p>
            </div>
          </div>

          {/* Certifications filter & list */}
          <div className="credentials-block glass-panel">
            <h3 className="credential-block-title title-font">
              <Award className="cred-title-icon" size={20} /> Certifications
            </h3>
            
            <div className="cert-filters">
              {['all', 'ai', 'cloud', 'leadership', 'agile'].map((filter) => (
                <button
                  key={filter}
                  className={`cert-filter-btn ${certFilter === filter ? 'active' : ''}`}
                  onClick={() => setCertFilter(filter)}
                >
                  {filter.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="certs-list-container">
              {filteredCerts.map((c, i) => (
                <div className="cert-list-item" key={i}>
                  <span className="cert-bullet" />
                  <div className="cert-item-info">
                    <span className="cert-item-name">{c.name}</span>
                    <span className="cert-item-date">{c.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards details */}
          <div className="credentials-block glass-panel">
            <h3 className="credential-block-title title-font">
              <Shield className="cred-title-icon" size={20} /> Awards &amp; Recognition
            </h3>
            <div className="awards-details-list">
              <div className="award-detail-item">
                <span className="award-badge-cyan">TCS</span>
                <p className="award-desc"><strong>TCS People Management Champion</strong> (Sept 2016)</p>
              </div>
              <div className="award-detail-item">
                <span className="award-badge-purple">Spot</span>
                <p className="award-desc"><strong>On the Spot Award</strong> (Feb 2022, Apr 2022, Oct 2024, Jun 2024)</p>
              </div>
              <div className="award-detail-item">
                <span className="award-badge-blue">Audit</span>
                <p className="award-desc"><strong>Best Auditor of the Quarter</strong> (July 2018)</p>
              </div>
              <div className="award-detail-item">
                <span className="award-badge-gold">GE</span>
                <p className="award-desc"><strong>Award for Excellence &amp; Outstanding Contribution</strong> (GE Healthcare, 2004)</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .it-exp-page {
          padding: 24px 0 60px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .it-exp-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .it-exp-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 14px;
          background: rgba(0, 240, 255, 0.08);
          border: 1px solid rgba(0, 240, 255, 0.28);
          border-radius: 20px;
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--neon-cyan);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          width: fit-content;
        }

        .it-exp-title {
          font-size: 40px;
          line-height: 1.1;
        }

        .it-exp-subtitle {
          font-size: 16px;
          color: var(--text-secondary);
          max-width: 750px;
          line-height: 1.6;
        }

        /* Pillars Grid */
        .it-pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        @media (max-width: 1024px) {
          .it-pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .it-pillars-grid {
            grid-template-columns: 1fr;
          }
        }

        .it-pillar-card {
          padding: 18px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(18, 12, 45, 0.25);
        }

        .pillar-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .pillar-check-icon {
          color: var(--neon-cyan);
          flex-shrink: 0;
        }

        .pillar-label {
          font-size: 15px;
          font-weight: 700;
          color: #fff;
        }

        .pillar-desc {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Two Column Layout */
        .it-two-column-layout {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 32px;
          align-items: start;
        }

        @media (max-width: 1024px) {
          .it-two-column-layout {
            grid-template-columns: 1fr;
          }
        }

        .section-title {
          font-size: 24px;
          margin-bottom: 20px;
        }

        /* Timeline side */
        .timeline-container {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .timeline-block {
          padding: 16px 20px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          cursor: pointer;
          position: relative;
          transition: all 0.25s ease;
          background: rgba(15, 10, 36, 0.3);
        }

        .timeline-block:hover {
          background: rgba(15, 10, 36, 0.55);
          border-color: rgba(255, 255, 255, 0.12);
        }

        .timeline-block.active {
          border-color: var(--item-color);
          box-shadow: 0 0 15px color-mix(in srgb, var(--item-color) 12%, transparent);
          background: rgba(15, 10, 36, 0.65);
        }

        .timeline-marker {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          border-radius: 4px 0 0 4px;
        }

        .timeline-block-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .timeline-role-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .timeline-role {
          font-size: 16px;
          font-weight: 700;
          color: #fff;
        }

        .timeline-client {
          font-size: 13.5px;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .timeline-submeta {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          font-size: 12px;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .meta-sep {
          opacity: 0.3;
        }

        .timeline-toggle-btn {
          color: var(--text-muted);
          cursor: pointer;
          padding: 4px;
        }

        .timeline-block-body {
          margin-top: 14px;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          animation: fadeInEffect 0.3s ease forwards;
        }

        .role-summary-text {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 12px;
          font-style: italic;
        }

        .timeline-bullets-list {
          padding-left: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 16px;
        }

        .timeline-bullet-item {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.5;
          list-style-type: square;
        }

        .timeline-pill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .timeline-pill-tag {
          font-family: var(--font-mono);
          font-size: 11px;
          padding: 2px 8px;
          border: 1px solid;
          border-radius: 4px;
        }

        /* Credentials side */
        .it-credentials-side {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .credentials-block {
          padding: 20px;
          border-radius: 12px;
          background: rgba(18, 12, 45, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .credential-block-title {
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 8px;
        }

        .cred-title-icon {
          color: var(--neon-cyan);
        }

        /* Education */
        .education-detail {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .edu-degree {
          font-size: 14px;
          font-weight: 700;
          color: #fff;
        }

        .edu-college {
          font-size: 13px;
          color: var(--text-secondary);
        }

        .edu-meta {
          font-size: 12px;
          color: var(--text-muted);
        }

        /* Certs filtering */
        .cert-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-bottom: 14px;
        }

        .cert-filter-btn {
          font-family: var(--font-mono);
          font-size: 10px;
          padding: 3px 8px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-secondary);
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .cert-filter-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
        }

        .cert-filter-btn.active {
          background: var(--neon-cyan);
          border-color: var(--neon-cyan);
          color: #000;
          font-weight: 700;
        }

        .certs-list-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-height: 250px;
          overflow-y: auto;
          padding-right: 4px;
        }

        .certs-list-container::-webkit-scrollbar {
          width: 4px;
        }

        .cert-list-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .cert-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--neon-cyan);
          flex-shrink: 0;
          margin-top: 6px;
        }

        .cert-item-info {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .cert-item-name {
          font-size: 13px;
          color: #cbd5e1;
          line-height: 1.4;
          font-weight: 500;
        }

        .cert-item-date {
          font-size: 11.5px;
          color: var(--text-muted);
        }

        /* Awards details list */
        .awards-details-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .award-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .award-badge-cyan, .award-badge-purple, .award-badge-blue, .award-badge-gold {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 700;
          padding: 1px 6px;
          border-radius: 3px;
          text-transform: uppercase;
        }

        .award-badge-cyan { background: rgba(0, 240, 255, 0.15); color: var(--neon-cyan); }
        .award-badge-purple { background: rgba(189, 0, 255, 0.15); color: var(--neon-purple); }
        .award-badge-blue { background: rgba(0, 102, 255, 0.15); color: var(--neon-blue); }
        .award-badge-gold { background: rgba(255, 215, 0, 0.15); color: #ffd700; }

        .award-desc {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.45;
        }
      `}</style>

    </section>
  );
};

export default ITExperience;
