import React, { useState } from 'react';
import {
  ExternalLink, CheckCircle, Code2, Sparkles, MessageSquare,
  Copy, Check, FileText, Globe, RefreshCw, Send, Mail, Zap
} from 'lucide-react';
import { Linkedin, Twitter } from './BrandIcons';

const SaaSProducts = ({ setActiveSection }) => {
  const product = {
    name: 'PulsePoll',
    tagline: 'Real-Time Quiz & Poll Analytics',
    url: 'https://pulsepoll-a-five.vercel.app/',
    description: 'Interactive, low-latency quiz tracker and polling app for instant workshop feedback and live event engagement.',
    techStack: ['React', 'Next.js', 'TailwindCSS', 'Vercel Edge'],
    features: [
      'Real-time response tracking & charts',
      'Instant, zero-config quiz building',
      'Mobile-friendly participant views',
      'Serverless edge rendering',
    ]
  };

  const [inputMode, setInputMode] = useState('text');
  const [sourceText, setSourceText] = useState('');
  const [sourceUrl, setSourceUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [copiedType, setCopiedType] = useState(null);
  const [apiError, setApiError] = useState('');
  const [activeOutput, setActiveOutput] = useState('linkedin'); // tab for outputs

  // Production API hosted on Render.com
  const API_BASE_URL = 'https://content-repurposing-api.onrender.com';

  const [outputs, setOutputs] = useState({ linkedin: '', twitter: [], newsletter: '' });

  const handleRepurpose = async (e) => {
    e.preventDefault();
    const inputVal = inputMode === 'text' ? sourceText : sourceUrl;
    if (!inputVal) return;
    setIsGenerating(true);
    setApiError('');
    try {
      const body = inputMode === 'text' ? { text: sourceText } : { url: sourceUrl };
      const res = await fetch(`${API_BASE_URL}/repurpose`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        let errMsg = `Server error (${res.status})`;
        try { const e = await res.json(); errMsg = e.detail || errMsg; } catch (_) {}
        throw new Error(errMsg);
      }
      const data = await res.json();
      const twitterTweets = (data.twitter || '').split(/\n\n+/).map(t => t.trim()).filter(Boolean);
      setOutputs({ linkedin: data.linkedin || '', twitter: twitterTweets, newsletter: data.newsletter || '' });
      setHasGenerated(true);
      setActiveOutput('linkedin');
    } catch (err) {
      setApiError(err.message?.toLowerCase().includes('fetch')
        ? '⚠️ Cannot reach the AI pipeline. The server may be waking up — please try again in 30 seconds.'
        : `⚠️ Generation failed: ${err.message}`);
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
    setSourceText(''); setSourceUrl('');
    setHasGenerated(false); setApiError('');
    setOutputs({ linkedin: '', twitter: [], newsletter: '' });
  };

  const getOutputText = () => {
    if (activeOutput === 'twitter') return outputs.twitter.join('\n\n');
    if (activeOutput === 'linkedin') return outputs.linkedin;
    return outputs.newsletter;
  };

  return (
    <section className="sp-root">

      {/* ── Compact Page Header ── */}
      <div className="sp-header">
        <div className="sp-badge"><Sparkles size={11} /><span>Micro-SaaS Specialist</span></div>
        <h1 className="sp-title title-font">SaaS <span className="text-gradient">Products</span></h1>
        <p className="sp-subtitle">Lightweight, hyper-focused tools built to solve specific bottlenecks at serverless edge speeds.</p>
      </div>

      {/* ── Two-Panel Frame ── */}
      <div className="sp-frame">

        {/* ════ LEFT PANEL — PulsePoll ════ */}
        <div className="sp-panel sp-left">
          <div className="sp-panel-label"><Zap size={10} />FEATURED PRODUCT</div>

          <div className="sp-product-head">
            <h2 className="sp-product-name title-font">{product.name}</h2>
            <span className="sp-product-tag">{product.tagline}</span>
          </div>

          <p className="sp-product-desc">{product.description}</p>

          <div className="sp-features">
            {product.features.map((f, i) => (
              <div key={i} className="sp-feature-row">
                <CheckCircle size={13} className="sp-check" />
                <span>{f}</span>
              </div>
            ))}
          </div>

          <div className="sp-stack">
            {product.techStack.map((t, i) => (
              <span key={i} className="sp-stack-pill"><Code2 size={10} />{t}</span>
            ))}
          </div>

          <a href={product.url} target="_blank" rel="noopener noreferrer" className="btn-primary sp-launch-btn">
            Launch PulsePoll <ExternalLink size={13} />
          </a>

          {/* Compact inquiry strip */}
          <div className="sp-inquiry-strip">
            <span className="sp-inquiry-text">Need a custom Micro-SaaS?</span>
            <button className="sp-inquiry-btn" onClick={() => setActiveSection('contact')}>
              <MessageSquare size={12} /> Contact Me
            </button>
          </div>
        </div>

        {/* ── Vertical Divider ── */}
        <div className="sp-divider">
          <div className="sp-divider-line" />
          <div className="sp-divider-dot" />
          <div className="sp-divider-line" />
        </div>

        {/* ════ RIGHT PANEL — Content Re-purpose Tool ════ */}
        <div className="sp-panel sp-right">
          <div className="sp-panel-label"><Sparkles size={10} className="sparkle-gold" />AI UTILITY</div>

          <div className="sp-tool-head">
            <h2 className="sp-tool-name title-font">Content Re-purpose Tool</h2>
            <p className="sp-tool-desc">Transform any text or URL into LinkedIn, Twitter & Newsletter content instantly.</p>
          </div>

          {/* Input Mode Toggle */}
          <div className="sp-toggles">
            <button type="button" className={`sp-toggle ${inputMode === 'text' ? 'active' : ''}`}
              onClick={() => { setInputMode('text'); handleReset(); }}>
              <FileText size={12} /> Paste Text
            </button>
            <button type="button" className={`sp-toggle ${inputMode === 'url' ? 'active' : ''}`}
              onClick={() => { setInputMode('url'); handleReset(); }}>
              <Globe size={12} /> Website URL
            </button>
          </div>

          {/* Input field */}
          <form onSubmit={handleRepurpose} className="sp-form">
            {inputMode === 'text' ? (
              <textarea className="sp-textarea" rows={3}
                placeholder="Paste your article, document, or key ideas here..."
                value={sourceText} onChange={e => setSourceText(e.target.value)}
                required disabled={isGenerating} />
            ) : (
              <input type="url" className="sp-url-input"
                placeholder="https://example.com/article"
                value={sourceUrl} onChange={e => setSourceUrl(e.target.value)}
                required disabled={isGenerating} />
            )}

            <div className="sp-form-actions">
              {hasGenerated && (
                <button type="button" className="btn-secondary sp-reset-btn" onClick={handleReset}>
                  <RefreshCw size={11} /> Clear
                </button>
              )}
              <button type="submit" className="btn-primary sp-generate-btn"
                disabled={isGenerating || (inputMode === 'text' ? !sourceText : !sourceUrl)}>
                {isGenerating
                  ? <><RefreshCw size={12} className="spin-icon" /> Running AI pipeline...</>
                  : <><Send size={12} /> Repurpose Content</>}
              </button>
            </div>
          </form>

          {/* Error Banner */}
          {apiError && (
            <div className="sp-error-banner">
              <span>{apiError}</span>
              <button onClick={() => setApiError('')} className="sp-error-dismiss">✕</button>
            </div>
          )}

          {/* ── Output Area (tabbed) ── */}
          {hasGenerated && (
            <div className="sp-output-area fade-in">
              {/* Tab bar */}
              <div className="sp-output-tabs">
                {[
                  { key: 'linkedin', label: 'LinkedIn', icon: <Linkedin size={12} fill="currentColor" /> },
                  { key: 'twitter',  label: 'Twitter',  icon: <Twitter size={12} fill="currentColor" /> },
                  { key: 'newsletter', label: 'Newsletter', icon: <Mail size={12} /> },
                ].map(tab => (
                  <button key={tab.key}
                    className={`sp-tab ${activeOutput === tab.key ? 'active' : ''}`}
                    onClick={() => setActiveOutput(tab.key)}>
                    {tab.icon}{tab.label}
                  </button>
                ))}
                <button className="sp-copy-tab" onClick={() => handleCopy(getOutputText(), activeOutput)}>
                  {copiedType === activeOutput ? <><Check size={11} className="copied" /> Copied!</> : <><Copy size={11} /> Copy</>}
                </button>
              </div>

              {/* Tab content */}
              <div className="sp-output-content">
                {activeOutput === 'twitter' ? (
                  <div className="sp-twitter-thread">
                    {outputs.twitter.map((tweet, idx) => (
                      <div key={idx} className="sp-tweet">
                        <div className="sp-tweet-dot" />
                        <pre>{tweet}</pre>
                      </div>
                    ))}
                  </div>
                ) : (
                  <pre>{activeOutput === 'linkedin' ? outputs.linkedin : outputs.newsletter}</pre>
                )}
              </div>
            </div>
          )}

          {/* Placeholder when not generated */}
          {!hasGenerated && !isGenerating && (
            <div className="sp-output-placeholder">
              <Sparkles size={20} className="placeholder-icon" />
              <span>Your AI-generated content will appear here</span>
            </div>
          )}

          {isGenerating && !hasGenerated && (
            <div className="sp-output-placeholder">
              <RefreshCw size={20} className="spin-icon placeholder-icon" />
              <span>Gemini is repurposing your content…</span>
            </div>
          )}
        </div>

      </div>{/* end sp-frame */}

      <style>{`
        /* ── Root ── */
        .sp-root {
          display: flex;
          flex-direction: column;
          height: calc(100vh - 80px);
          padding: 16px 0 10px;
          gap: 14px;
          overflow: hidden;
        }

        /* ── Header ── */
        .sp-header {
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex-shrink: 0;
        }

        .sp-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          background: rgba(5, 255, 161, 0.07);
          border: 1px solid rgba(5, 255, 161, 0.25);
          border-radius: 20px;
          font-family: var(--font-mono);
          font-size: 10px;
          color: #05ffa1;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          width: fit-content;
        }

        .sp-title {
          font-size: 30px;
          line-height: 1.1;
          margin: 0;
        }

        .sp-subtitle {
          font-size: 13px;
          color: var(--text-secondary);
          max-width: 700px;
          line-height: 1.5;
          margin: 0;
        }

        /* ── Two-panel frame ── */
        .sp-frame {
          display: flex;
          flex-direction: row;
          gap: 0;
          flex: 1;
          min-height: 0;
          background: rgba(12, 8, 32, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03);
        }

        /* ── Panels ── */
        .sp-panel {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 22px 24px;
          overflow-y: auto;
          min-height: 0;
        }

        .sp-panel::-webkit-scrollbar { width: 4px; }
        .sp-panel::-webkit-scrollbar-track { background: transparent; }
        .sp-panel::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 4px; }

        .sp-left {
          flex: 1;
          border-right: none;
          background: rgba(6, 4, 18, 0.3);
        }

        .sp-right {
          flex: 1;
          min-width: 0;
        }

        /* ── Vertical divider ── */
        .sp-divider {
          width: 1px;
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          padding: 20px 0;
          background: rgba(255,255,255,0.04);
        }

        .sp-divider-line {
          flex: 1;
          width: 1px;
          background: linear-gradient(180deg, transparent, rgba(189, 0, 255, 0.3), transparent);
        }

        .sp-divider-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(189, 0, 255, 0.5);
          box-shadow: 0 0 8px rgba(189, 0, 255, 0.6);
          flex-shrink: 0;
          margin: 6px 0;
        }

        /* ── Panel label ── */
        .sp-panel-label {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        /* ── PulsePoll (left) ── */
        .sp-product-head {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .sp-product-name {
          font-size: 22px;
          color: #fff;
          margin: 0;
        }

        .sp-product-tag {
          font-size: 12px;
          color: var(--text-muted);
        }

        .sp-product-desc {
          font-size: 12.5px;
          color: var(--text-secondary);
          line-height: 1.55;
          margin: 0;
        }

        .sp-features {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .sp-feature-row {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .sp-check {
          color: #05ffa1;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .sp-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 10px;
        }

        .sp-stack-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: var(--font-mono);
          font-size: 10px;
          padding: 3px 8px;
          border-radius: 4px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          color: var(--text-secondary);
        }

        .sp-launch-btn {
          width: 100%;
          justify-content: center;
          font-size: 13px;
          padding: 10px 16px;
        }

        .sp-inquiry-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 10px;
          gap: 10px;
          margin-top: auto;
        }

        .sp-inquiry-text {
          font-size: 11.5px;
          color: var(--text-muted);
        }

        .sp-inquiry-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-family: var(--font-mono);
          padding: 5px 12px;
          border-radius: 6px;
          border: 1px solid rgba(189, 0, 255, 0.3);
          background: rgba(189, 0, 255, 0.08);
          color: #d8b4fe;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .sp-inquiry-btn:hover {
          background: rgba(189, 0, 255, 0.18);
          border-color: rgba(189, 0, 255, 0.5);
          color: #fff;
        }

        /* ── Right panel — tool ── */
        .sp-tool-head {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .sp-tool-name {
          font-size: 20px;
          color: #fff;
          margin: 0;
        }

        .sp-tool-desc {
          font-size: 12px;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.45;
        }

        .sp-toggles {
          display: flex;
          gap: 6px;
        }

        .sp-toggle {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          font-size: 12px;
          border-radius: 7px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.02);
          cursor: pointer;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .sp-toggle:hover { color: #fff; background: rgba(255,255,255,0.05); }

        .sp-toggle.active {
          color: #fff;
          background: rgba(189, 0, 255, 0.14);
          border-color: rgba(189, 0, 255, 0.38);
          box-shadow: 0 0 10px rgba(189, 0, 255, 0.12);
        }

        .sp-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .sp-textarea,
        .sp-url-input {
          width: 100%;
          padding: 12px 14px;
          background: rgba(6, 4, 18, 0.85);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 8px;
          font-size: 13px;
          color: #fff;
          font-family: var(--font-sans);
          resize: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }

        .sp-textarea::placeholder,
        .sp-url-input::placeholder { color: rgba(255,255,255,0.3); }

        .sp-textarea:focus,
        .sp-url-input:focus {
          outline: none;
          border-color: rgba(189, 0, 255, 0.5);
          box-shadow: 0 0 12px rgba(189, 0, 255, 0.15);
        }

        .sp-form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 8px;
        }

        .sp-reset-btn { cursor: pointer; font-size: 12px; padding: 8px 14px; }
        .sp-generate-btn { cursor: pointer; font-size: 12px; padding: 8px 18px; }

        .spin-icon { animation: spin 1s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        /* Error Banner */
        .sp-error-banner {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
          padding: 11px 14px;
          background: rgba(245, 158, 11, 0.09);
          border: 1px solid rgba(245, 158, 11, 0.3);
          border-radius: 8px;
          color: #fcd34d;
          font-size: 12.5px;
          line-height: 1.5;
          animation: fade-in-down 0.3s ease;
        }

        .sp-error-dismiss {
          flex-shrink: 0; background: none; border: none;
          color: #fcd34d; font-size: 13px; cursor: pointer; opacity: 0.7;
        }
        .sp-error-dismiss:hover { opacity: 1; }

        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── Output area ── */
        .sp-output-area {
          display: flex;
          flex-direction: column;
          gap: 0;
          flex: 1;
          min-height: 0;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          overflow: hidden;
          background: rgba(6, 4, 18, 0.7);
        }

        .sp-output-tabs {
          display: flex;
          align-items: center;
          gap: 2px;
          padding: 6px 8px;
          background: rgba(255,255,255,0.025);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          flex-shrink: 0;
        }

        .sp-tab {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 12px;
          font-size: 11.5px;
          border-radius: 6px;
          border: 1px solid transparent;
          background: none;
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.18s ease;
        }

        .sp-tab:hover { color: #fff; background: rgba(255,255,255,0.04); }

        .sp-tab.active {
          color: #fff;
          background: rgba(189, 0, 255, 0.15);
          border-color: rgba(189, 0, 255, 0.3);
        }

        .sp-copy-tab {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 12px;
          font-size: 11px;
          font-family: var(--font-mono);
          border-radius: 6px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.02);
          color: var(--text-secondary);
          cursor: pointer;
          margin-left: auto;
          transition: all 0.18s ease;
        }

        .sp-copy-tab:hover { color: #fff; border-color: rgba(255,255,255,0.15); }
        .sp-copy-tab .copied { color: #10b981; }

        .sp-output-content {
          flex: 1;
          overflow-y: auto;
          padding: 14px 16px;
        }

        .sp-output-content::-webkit-scrollbar { width: 4px; }
        .sp-output-content::-webkit-scrollbar-track { background: transparent; }
        .sp-output-content::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 4px; }

        .sp-output-content pre {
          font-family: var(--font-sans);
          font-size: 12.5px;
          color: var(--text-secondary);
          white-space: pre-wrap;
          word-break: break-word;
          line-height: 1.6;
          margin: 0;
        }

        /* Twitter thread */
        .sp-twitter-thread { display: flex; flex-direction: column; gap: 14px; }

        .sp-tweet {
          display: flex;
          gap: 10px;
          position: relative;
        }

        .sp-tweet-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #1da1f2;
          flex-shrink: 0;
          margin-top: 5px;
        }

        .sp-tweet:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 3px; top: 13px; bottom: -18px;
          width: 1px;
          background: rgba(29, 161, 242, 0.2);
        }

        .sp-tweet pre {
          font-family: var(--font-sans);
          font-size: 12.5px;
          color: var(--text-secondary);
          white-space: pre-wrap;
          word-break: break-word;
          line-height: 1.55;
          margin: 0;
        }

        /* Placeholder */
        .sp-output-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex: 1;
          min-height: 100px;
          color: var(--text-muted);
          font-size: 12.5px;
          border: 1px dashed rgba(255,255,255,0.07);
          border-radius: 12px;
          padding: 24px;
          text-align: center;
        }

        .placeholder-icon { color: rgba(189, 0, 255, 0.35); }

        /* Responsive */
        @media (max-width: 900px) {
          .sp-root { height: auto; overflow: visible; }
          .sp-frame { flex-direction: column; height: auto; }
          .sp-left { width: 100%; }
          .sp-divider { width: 100%; height: 1px; flex-direction: row; padding: 0 20px; }
          .sp-divider-line { flex: 1; height: 1px; width: auto; background: linear-gradient(90deg, transparent, rgba(189,0,255,0.3), transparent); }
          .sp-divider-dot { margin: 0 6px; }
        }
      `}</style>
    </section>
  );
};

export default SaaSProducts;
