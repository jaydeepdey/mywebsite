import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin } from './BrandIcons';
import { 
  Mail, Send, Phone, 
  Sparkles, Terminal, CheckCircle2, MessageSquare, AlertCircle
} from 'lucide-react';

// ==========================================
// 🔑 ENTER YOUR WEB3FORMS ACCESS KEY HERE:
// Get a free key instantly at: https://web3forms.com/
// ==========================================
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE"; 

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    message: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitComplete, setSubmitComplete] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) return;

    setIsSubmitting(true);
    setSubmitError(null);

    // If key hasn't been set yet, show an alert/guidance
    if (WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitError("Please add your Web3Forms Access Key at the top of src/components/Contact.jsx to enable background email delivery.");
      }, 1000);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: `Portfolio Inquiry from ${formData.name}`,
          from_name: "Portfolio Portal"
        })
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitting(false);
        setSubmitComplete(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error(result.message || "Something went wrong during transmission.");
      }
    } catch (error) {
      setIsSubmitting(false);
      setSubmitError(error.message || "Failed to transmit signal. Connection timed out.");
    }
  };

  const resetFormState = () => {
    setSubmitComplete(false);
    setSubmitError(null);
  };

  return (
    <section className="contact-section fade-in" id="contact-panel">
      
      {/* ── Page Header ── */}
      <div className="contact-header">
        <div className="contact-header-badge">
          <Terminal size={14} />
          <span>Communications Hub</span>
        </div>
        <h1 className="contact-title title-font">
          Secure <span className="text-gradient">Connection</span>
        </h1>
        <p className="contact-subtitle">
          Establish a direct communication link for transformational programs, advisory inquiries, or general collaborations.
        </p>
      </div>

      <div className="contact-main-grid">
        
        {/* Left Column: Premium Contact Form */}
        <div className="form-column">
          {submitComplete ? (
            <div className="success-panel glass-panel">
              <CheckCircle2 size={48} className="success-icon" />
              <h3 className="success-title title-font">Signal Transmitted</h3>
              <p className="success-text">
                Thank you! Your message has been sent successfully in the background and delivered directly to <strong>jaydeepdey@gmail.com</strong>.
              </p>
              <button className="btn-primary reset-btn" onClick={resetFormState}>
                Send Another Signal
              </button>
            </div>
          ) : (
            <form className="contact-form-card glass-panel" onSubmit={handleFormSubmit}>
              <h3 className="form-card-title title-font">Signal Composer</h3>
              
              <div className="form-input-grid">
                <div className="input-group">
                  <label htmlFor="name" className="input-label">Identity Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Architect Stark" 
                    required
                    disabled={isSubmitting}
                    className="form-field-input"
                  />
                </div>
                
                <div className="input-group">
                  <label htmlFor="email" className="input-label">Direct Mail Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. tony@stark.com" 
                    required
                    disabled={isSubmitting}
                    className="form-field-input"
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="phone" className="input-label">Communication Link (Phone No)</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g. +91 97482 61762" 
                  required
                  disabled={isSubmitting}
                  className="form-field-input"
                />
              </div>

              <div className="input-group">
                <label htmlFor="message" className="input-label">Signal Payload (Message)</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4" 
                  placeholder="Describe your program, project, or general inquiry details..." 
                  required
                  disabled={isSubmitting}
                  className="form-field-input textarea"
                />
              </div>

              {submitError && (
                <div className="error-banner">
                  <AlertCircle size={16} />
                  <span>{submitError}</span>
                </div>
              )}

              <button 
                type="submit" 
                className="btn-primary form-submit-btn"
                disabled={isSubmitting || !formData.name || !formData.email || !formData.phone || !formData.message}
              >
                {isSubmitting ? "Transmitting..." : "Transmit Signal"} 
                <Send size={14} className="send-arrow-icon" />
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Global Connection Nodes */}
        <div className="terminal-column">
          
          {/* Social connection cards */}
          <div className="channels-container-card glass-panel">
            <h4 className="channels-section-title title-font">Global Connect Nodes</h4>
            
            <div className="channels-links-list">
              
              <a href="https://www.linkedin.com/in/jaydeep-dey-52503810/" target="_blank" rel="noopener noreferrer" className="channel-item-link linkedin-hover">
                <div className="channel-icon-ring linkedin-ring">
                  <Linkedin size={18} />
                </div>
                <div className="channel-label-group">
                  <span className="channel-label-lbl">Professional Core</span>
                  <span className="channel-label-val">LinkedIn Profile</span>
                </div>
              </a>

              <a href="https://wa.me/919748261762" target="_blank" rel="noopener noreferrer" className="channel-item-link whatsapp-hover">
                <div className="channel-icon-ring whatsapp-ring">
                  <MessageSquare size={18} />
                </div>
                <div className="channel-label-group">
                  <span className="channel-label-lbl">Instant Telephony</span>
                  <span className="channel-label-val">+91-9748261762</span>
                </div>
              </a>

              <a href="https://www.facebook.com/jaydeep.dey3" target="_blank" rel="noopener noreferrer" className="channel-item-link facebook-hover">
                <div className="channel-icon-ring facebook-ring">
                  <Facebook size={18} />
                </div>
                <div className="channel-label-group">
                  <span className="channel-label-lbl">Social Network</span>
                  <span className="channel-label-val">Facebook Node</span>
                </div>
              </a>

              <a href="https://www.instagram.com/deyjaydeep/" target="_blank" rel="noopener noreferrer" className="channel-item-link instagram-hover">
                <div className="channel-icon-ring instagram-ring">
                  <Instagram size={18} />
                </div>
                <div className="channel-label-group">
                  <span className="channel-label-lbl">Lifestyle Media</span>
                  <span className="channel-label-val">Instagram Feed</span>
                </div>
              </a>

            </div>
          </div>

        </div>

      </div>

      <style>{`
        .contact-section {
          padding: 24px 0 60px;
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .contact-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .contact-header-badge {
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

        .contact-title {
          font-size: 40px;
          line-height: 1.1;
        }

        .contact-subtitle {
          font-size: 16px;
          color: var(--text-secondary);
          max-width: 750px;
          line-height: 1.6;
        }

        /* Grid */
        .contact-main-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 32px;
          align-items: start;
        }

        @media (max-width: 1024px) {
          .contact-main-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Form Card */
        .contact-form-card, .success-panel {
          padding: 28px;
          border-radius: 16px;
          border: 1px solid rgba(0, 240, 255, 0.28);
          background: rgba(30, 22, 74, 0.85); /* Highly visible, warm deep purple-blue */
          display: flex;
          flex-direction: column;
          gap: 20px;
          text-align: left;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 240, 255, 0.06);
        }

        .form-card-title {
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          border-bottom: 1px solid rgba(0, 240, 255, 0.15);
          padding-bottom: 10px;
        }

        .form-input-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        @media (max-width: 640px) {
          .form-input-grid {
            grid-template-columns: 1fr;
          }
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .input-label {
          font-family: var(--font-mono);
          font-size: 11.5px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #cbd5e1; /* High contrast off-white label */
          font-weight: 600;
        }

        .form-field-input {
          padding: 14px 18px;
          border-radius: 8px;
          background: rgba(6, 4, 18, 0.95); /* High contrast deep black field */
          border: 1px solid rgba(255, 255, 255, 0.15);
          font-size: 15px;
          color: #fff;
          transition: all var(--transition-fast);
          width: 100%;
        }

        .form-field-input:focus {
          border-color: var(--neon-cyan);
          box-shadow: 0 0 12px rgba(0, 240, 255, 0.2);
          background: rgba(4, 1, 13, 0.85);
          outline: none;
        }

        .form-field-input.textarea {
          resize: vertical;
        }

        .form-field-input::placeholder {
          color: rgba(255, 255, 255, 0.45);
        }

        .form-submit-btn {
          width: 100%;
          justify-content: center;
          margin-top: 10px;
          cursor: pointer;
        }

        .send-arrow-icon {
          transition: transform 0.2s ease;
        }

        .form-submit-btn:hover .send-arrow-icon {
          transform: translate(3px, -3px);
        }

        /* Error Banner */
        .error-banner {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          border-radius: 8px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.25);
          color: #f87171;
          font-size: 13px;
        }

        /* Success Panel */
        .success-panel {
          align-items: center;
          text-align: center;
          padding: 40px;
        }

        .success-icon {
          color: var(--neon-green, #05ffa1);
          filter: drop-shadow(0 0 10px rgba(5, 255, 161, 0.4));
        }

        .success-title {
          font-size: 20px;
          font-weight: 700;
          color: #fff;
        }

        .success-text {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 380px;
        }

        .reset-btn {
          margin-top: 12px;
          cursor: pointer;
        }

        /* Terminal column */
        .terminal-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* Channels Card */
        .channels-container-card {
          padding: 28px;
          background: rgba(30, 22, 74, 0.85); /* Matching visible, professional background */
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          text-align: left;
        }

        .channels-section-title {
          font-size: 15px;
          color: #fff;
          margin-bottom: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 8px;
        }

        .channels-links-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        @media (max-width: 640px) {
          .channels-links-list {
            grid-template-columns: 1fr;
          }
        }

        .channel-item-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.04);
          background: rgba(255, 255, 255, 0.01);
          color: var(--text-secondary);
          transition: all 0.25s ease;
        }

        .channel-item-link:hover {
          color: #fff;
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.03);
        }

        .channel-icon-ring {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.25s ease;
        }

        /* Link Hovers & Accents */
        .linkedin-ring { background: rgba(0, 102, 255, 0.1); color: #0066ff; }
        .whatsapp-ring { background: rgba(52, 211, 153, 0.1); color: #34d399; }
        .facebook-ring { background: rgba(59, 130, 246, 0.1); color: #3b82f6; }
        .instagram-ring { background: rgba(236, 72, 153, 0.1); color: #ec4899; }

        .linkedin-hover:hover { border-color: #0066ff; box-shadow: 0 0 10px rgba(0, 102, 255, 0.2); }
        .whatsapp-hover:hover { border-color: #34d399; box-shadow: 0 0 10px rgba(52, 211, 153, 0.2); }
        .facebook-hover:hover { border-color: #3b82f6; box-shadow: 0 0 10px rgba(59, 130, 246, 0.2); }
        .instagram-hover:hover { border-color: #ec4899; box-shadow: 0 0 10px rgba(236, 72, 153, 0.2); }

        .channel-label-group {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }

        .channel-label-lbl {
          font-size: 9px;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .channel-label-val {
          font-family: var(--font-heading);
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>

    </section>
  );
};

export default Contact;
