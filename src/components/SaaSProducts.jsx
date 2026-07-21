import React, { useState } from 'react';
import { 
  ExternalLink, CheckCircle, Code2, Sparkles, MessageSquare, 
  Copy, Check, FileText, Globe, RefreshCw, Send, Mail
} from 'lucide-react';
import { Linkedin, Twitter } from './BrandIcons';

const SaaSProducts = ({ setActiveSection }) => {
  // PulsePoll state
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

  // Re-purposing Tool state
  const [inputMode, setInputMode] = useState('text'); // 'text' | 'url'
  const [sourceText, setSourceText] = useState('');
  const [sourceUrl, setSourceUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [copiedType, setCopiedType] = useState(null); // 'linkedin' | 'twitter' | 'newsletter'
  const [apiError, setApiError] = useState(''); // API error message

  // The base URL of the FastAPI server.
  // Production API hosted on Render.com
  const API_BASE_URL = 'https://content-repurposing-api.onrender.com';

  // Output content state
  const [outputs, setOutputs] = useState({
    linkedin: '',
    twitter: [],
    newsletter: ''
  });

  const handleRepurpose = async (e) => {
    e.preventDefault();
    const inputVal = inputMode === 'text' ? sourceText : sourceUrl;
    if (!inputVal) return;

    setIsGenerating(true);
    setApiError('');

    try {
      // Build request body — send text or url depending on mode
      const body = inputMode === 'text'
        ? { text: sourceText }
        : { url: sourceUrl };

      const res = await fetch(`${API_BASE_URL}/repurpose`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        // Parse error detail from FastAPI response
        let errMsg = `Server error (${res.status})`;
        try {
          const errData = await res.json();
          errMsg = errData.detail || errMsg;
        } catch (_) { /* ignore parse failures */ }
        throw new Error(errMsg);
      }

      const data = await res.json();

      // The pipeline returns twitter as a single string with paragraphs;
      // split it into an array for the thread display.
      const twitterTweets = (data.twitter || '')
        .split(/\n\n+/)
        .map(t => t.trim())
        .filter(Boolean);

      setOutputs({
        linkedin: data.linkedin || '',
        twitter: twitterTweets,
        newsletter: data.newsletter || '',
      });
      setHasGenerated(true);

    } catch (err) {
      // Show a user-friendly error — most likely the API server is not running
      if (err.message && err.message.toLowerCase().includes('fetch')) {
        setApiError(
          '⚠️ Cannot reach the AI pipeline server. Please start the API server locally '
          + '(run start_api.bat in the Content Repurposing Tool folder) and try again.'
        );
      } else {
        setApiError(`⚠️ Generation failed: ${err.message}`);
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleReset = () => {
    setSourceText('');
    setSourceUrl('');
    setHasGenerated(false);
    setApiError('');
    setOutputs({ linkedin: '', twitter: [], newsletter: '' });
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

      {/* ── Section Separator ── */}
      <div className="tool-separator">
        <div className="sep-line left"></div>
        <span className="sep-text title-font">AI UTILITY HUB</span>
        <div className="sep-line right"></div>
      </div>

      {/* ── Content Re-purpose Tool Card ── */}
      <div className="repurpose-card-wrapper glass-panel">
        
        <div className="repurpose-header">
          <div className="tool-badge">
            <Sparkles size={12} className="sparkle-gold" />
            <span>Smart Automation Engine</span>
          </div>
          <h2 className="repurpose-card-title title-font">Content Re-purpose Tool</h2>
          <p className="repurpose-card-desc">
            Repurpose any long text or website URL into tailored social media snippets and editorial newsletters instantly.
          </p>
        </div>

        <form className="repurpose-form" onSubmit={handleRepurpose}>
          {/* Input Type Toggles */}
          <div className="input-toggles">
            <button 
              type="button" 
              className={`toggle-btn ${inputMode === 'text' ? 'active' : ''}`}
              onClick={() => { setInputMode('text'); handleReset(); }}
            >
              <FileText size={14} /> Paste Text
            </button>
            <button 
              type="button" 
              className={`toggle-btn ${inputMode === 'url' ? 'active' : ''}`}
              onClick={() => { setInputMode('url'); handleReset(); }}
            >
              <Globe size={14} /> Enter Website URL
            </button>
          </div>

          {/* Form input field */}
          <div className="form-input-container">
            {inputMode === 'text' ? (
              <textarea 
                className="repurpose-textarea"
                rows="5"
                placeholder="Enter or paste your article, document, or ideas here..."
                value={sourceText}
                onChange={(e) => setSourceText(e.target.value)}
                required
                disabled={isGenerating}
              />
            ) : (
              <input 
                type="url"
                className="repurpose-url-input"
                placeholder="https://example.com/article-to-repurpose"
                value={sourceUrl}
                onChange={(e) => setSourceUrl(e.target.value)}
                required
                disabled={isGenerating}
              />
            )}
          </div>

          <div className="form-actions-row">
            {hasGenerated && (
              <button type="button" className="btn-secondary reset-btn" onClick={handleReset}>
                <RefreshCw size={12} /> Clear Tool
              </button>
            )}
            <button 
              type="submit" 
              className="btn-primary generate-btn" 
              disabled={isGenerating || (inputMode === 'text' ? !sourceText : !sourceUrl)}
            >
              {isGenerating ? (
                <>
                  <RefreshCw size={13} className="spin-icon" /> Running AI pipeline...
                </>
              ) : (
                <>
                  Repurpose Content <Send size={13} />
                </>
              )}
            </button>
          </div>
        </form>

        {/* ── API Error Banner ── */}
        {apiError && (
          <div className="api-error-banner">
            <span>{apiError}</span>
            <button className="error-dismiss-btn" onClick={() => setApiError('')}>✕</button>
          </div>
        )}

        {/* ── Generated Output Displays ── */}
        {hasGenerated && (
          <div className="repurpose-outputs-grid fade-in">
            
            {/* LinkedIn Card */}
            <div className="output-card linkedin-card glass-panel">
              <div className="output-card-header">
                <div className="output-platform">
                  <span className="platform-icon-wrapper li"><Linkedin size={14} fill="currentColor" /></span>
                  <span className="platform-name title-font">LinkedIn Post</span>
                </div>
                <button 
                  className="copy-btn"
                  onClick={() => handleCopy(outputs.linkedin, 'linkedin')}
                  title="Copy to clipboard"
                >
                  {copiedType === 'linkedin' ? <Check size={14} className="copied" /> : <Copy size={14} />}
                  <span>{copiedType === 'linkedin' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <div className="output-preview-box">
                <pre>{outputs.linkedin}</pre>
              </div>
            </div>

            {/* Twitter Thread Card */}
            <div className="output-card twitter-card glass-panel">
              <div className="output-card-header">
                <div className="output-platform">
                  <span className="platform-icon-wrapper tw"><Twitter size={14} fill="currentColor" /></span>
                  <span className="platform-name title-font">Twitter Thread</span>
                </div>
                <button 
                  className="copy-btn"
                  onClick={() => handleCopy(outputs.twitter.join('\n\n'), 'twitter')}
                  title="Copy to clipboard"
                >
                  {copiedType === 'twitter' ? <Check size={14} className="copied" /> : <Copy size={14} />}
                  <span>{copiedType === 'twitter' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <div className="output-preview-box">
                <div className="twitter-thread-preview">
                  {outputs.twitter.map((tweet, idx) => (
                    <div key={idx} className="tweet-item">
                      <div className="tweet-avatar-dot"></div>
                      <div className="tweet-text-content">
                        <pre>{tweet}</pre>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter Card */}
            <div className="output-card newsletter-card glass-panel">
              <div className="output-card-header">
                <div className="output-platform">
                  <span className="platform-icon-wrapper nl"><Mail size={14} /></span>
                  <span className="platform-name title-font">Newsletter Issue</span>
                </div>
                <button 
                  className="copy-btn"
                  onClick={() => handleCopy(outputs.newsletter, 'newsletter')}
                  title="Copy to clipboard"
                >
                  {copiedType === 'newsletter' ? <Check size={14} className="copied" /> : <Copy size={14} />}
                  <span>{copiedType === 'newsletter' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <div className="output-preview-box">
                <pre>{outputs.newsletter}</pre>
              </div>
            </div>

          </div>
        )}

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

        /* Divider */
        .tool-separator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          width: 100%;
          margin: 16px 0 8px;
        }

        .tool-separator .sep-line {
          height: 1px;
          flex-grow: 1;
          background: linear-gradient(90deg, transparent, rgba(189, 0, 255, 0.25));
        }

        .tool-separator .sep-line.right {
          background: linear-gradient(90deg, rgba(189, 0, 255, 0.25), transparent);
        }

        .tool-separator .sep-text {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: #d8b4fe;
          text-shadow: 0 0 8px rgba(189, 0, 255, 0.4);
        }

        /* Repurpose Tool Card */
        .repurpose-card-wrapper {
          padding: 32px;
          background: rgba(30, 22, 74, 0.25);
          border: 1px solid rgba(189, 0, 255, 0.2);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          text-align: left;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4), 0 0 25px rgba(189, 0, 255, 0.04);
        }

        .repurpose-header {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .tool-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: rgba(255, 215, 0, 0.08);
          border: 1px solid rgba(255, 215, 0, 0.25);
          color: #fcd34d;
          font-size: 11px;
          font-family: var(--font-mono);
          text-transform: uppercase;
          border-radius: 4px;
          width: fit-content;
        }

        .sparkle-gold {
          color: #ffd700;
        }

        .repurpose-card-title {
          font-size: 24px;
          color: #fff;
        }

        .repurpose-card-desc {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Form */
        .repurpose-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .input-toggles {
          display: flex;
          gap: 8px;
        }

        .toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          font-size: 13px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(255, 255, 255, 0.02);
          cursor: pointer;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .toggle-btn:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.05);
        }

        .toggle-btn.active {
          color: #fff;
          background: rgba(189, 0, 255, 0.15);
          border-color: rgba(189, 0, 255, 0.4);
          box-shadow: 0 0 12px rgba(189, 0, 255, 0.15);
        }

        .form-input-container {
          width: 100%;
        }

        .repurpose-textarea,
        .repurpose-url-input {
          width: 100%;
          padding: 16px;
          background: rgba(6, 4, 18, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          font-size: 14.5px;
          color: #fff;
          transition: all 0.2s ease;
        }

        .repurpose-textarea:focus,
        .repurpose-url-input:focus {
          outline: none;
          border-color: var(--neon-purple);
          box-shadow: 0 0 10px rgba(189, 0, 255, 0.2);
        }

        .repurpose-textarea::placeholder,
        .repurpose-url-input::placeholder {
          color: rgba(255, 255, 255, 0.35);
        }

        .form-actions-row {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
        }

        .generate-btn {
          cursor: pointer;
        }

        .reset-btn {
          cursor: pointer;
        }

        .spin-icon {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Output Cards Grid */
        .repurpose-outputs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 16px;
        }

        @media (max-width: 1024px) {
          .repurpose-outputs-grid {
            grid-template-columns: 1fr;
          }
        }

        .output-card {
          padding: 20px;
          background: rgba(18, 12, 45, 0.35);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .output-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 12px;
        }

        .output-platform {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .platform-icon-wrapper {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }

        .platform-icon-wrapper.li { background: #0077b5; }
        .platform-icon-wrapper.tw { background: #1da1f2; }
        .platform-icon-wrapper.nl { background: #ea4335; }

        .platform-name {
          font-size: 14px;
          color: #fff;
          font-weight: 600;
        }

        .copy-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-family: var(--font-mono);
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 4px 10px;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .copy-btn:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.15);
        }

        .copy-btn .copied {
          color: #10b981;
        }

        .output-preview-box {
          flex: 1;
          background: rgba(6, 4, 18, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 8px;
          padding: 14px;
          max-height: 280px;
          overflow-y: auto;
        }

        .output-preview-box pre {
          font-family: var(--font-sans);
          font-size: 12.5px;
          color: var(--text-secondary);
          white-space: pre-wrap;
          word-break: break-word;
          line-height: 1.5;
        }

        /* Twitter Thread Specific Styling */
        .twitter-thread-preview {
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: relative;
        }

        .tweet-item {
          display: flex;
          gap: 12px;
          position: relative;
          text-align: left;
        }

        .tweet-avatar-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #1da1f2;
          margin-top: 6px;
          flex-shrink: 0;
          position: relative;
          z-index: 2;
        }

        .tweet-item:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 3.5px;
          top: 14px;
          bottom: -22px;
          width: 1px;
          background: rgba(29, 161, 242, 0.2);
          z-index: 1;
        }

        .tweet-text-content {
          min-width: 0;
        }

        .tweet-text-content pre {
          font-size: 12.5px;
          color: var(--text-secondary);
        }

        /* API Error Banner */
        .api-error-banner {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          padding: 14px 18px;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.35);
          border-radius: 10px;
          color: #fcd34d;
          font-size: 13.5px;
          line-height: 1.55;
          animation: fade-in-down 0.3s ease;
        }

        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .error-dismiss-btn {
          flex-shrink: 0;
          background: none;
          border: none;
          color: #fcd34d;
          font-size: 14px;
          cursor: pointer;
          opacity: 0.7;
          padding: 0 4px;
          transition: opacity 0.2s;
        }

        .error-dismiss-btn:hover {
          opacity: 1;
        }
      `}</style>

    </section>
  );
};

export default SaaSProducts;
