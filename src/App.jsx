import React, { useState, useEffect } from 'react';
import WebGLBackground from './components/WebGLBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MyWorld from './components/MyWorld';
import ITExperience from './components/ITExperience';
import YouTubeShowcase from './components/YouTubeShowcase';
import SaaSProducts from './components/SaaSProducts';
import AdsPortfolio from './components/AdsPortfolio';
import Blog from './components/Blog';
import Gallery from './components/Gallery';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import { Mail, ArrowUp } from 'lucide-react';
import { Youtube, Linkedin } from './components/BrandIcons';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // List of all sections in display order
  const sectionsList = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'myworld', label: 'IT Experience' },
    { id: 'saas', label: 'SaaS Products' },
    { id: 'ads', label: 'Ads Portfolio' },
    { id: 'youtube', label: 'YouTube' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  // Watch window scroll to show scroll-to-top button
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  // Sync scroll height to top on section transitions, with custom scroll anchor for MyWorld
  useEffect(() => {
    if (activeSection === 'myworld') {
      const timer = setTimeout(() => {
        const anchor = document.getElementById('myworld-anchor');
        if (anchor) {
          anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeSection]);

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="landing-page-wrapper">
            <HeroSection setActiveSection={setActiveSection} />
            <div id="myworld-anchor">
              <MyWorld setActiveSection={setActiveSection} />
            </div>
          </div>
        );
      case 'myworld':
        return (
          <div className="landing-page-wrapper">
            <HeroSection setActiveSection={setActiveSection} />
            <div id="myworld-anchor">
              <MyWorld setActiveSection={setActiveSection} />
            </div>
          </div>
        );
      case 'itexp':
        return <ITExperience />;
      case 'about':
        return <AboutMe />;
      case 'saas':
        return <SaaSProducts setActiveSection={setActiveSection} />;
      case 'ads':
        return <AdsPortfolio />;
      case 'youtube':
        return <YouTubeShowcase />;
      case 'gallery':
        return <Gallery />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <div className="landing-page-wrapper">
            <HeroSection setActiveSection={setActiveSection} />
            <div id="myworld-anchor">
              <MyWorld setActiveSection={setActiveSection} />
            </div>
          </div>
        );
    }
  };

  return (
    <>
      {/* Skip to main content for keyboard / screen reader accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Interactive WebGL Constellation Canvas */}
      <WebGLBackground />

      {/* Cyber Grid background scanlines overlay */}
      <div className="cyber-grid" aria-hidden="true"></div>

      <div className="layout-container">
        {/* Sidebar Navigation */}
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

        {/* Main Content Display Area */}
        <main id="main-content" className="main-content-wrapper" role="main" tabIndex={-1}>
          {renderActiveSection()}
        </main>

        {/* Footer */}
        <footer className="main-footer" role="contentinfo">
          <span>&copy; {new Date().getFullYear()} Jaydeep. All rights reserved.</span>
          <div className="footer-links">
            <button className="footer-link" onClick={() => setActiveSection('about')}>Biography</button>
            <button className="footer-link" onClick={() => setActiveSection('myworld')}>IT Experience</button>
            <button className="footer-link" onClick={() => setActiveSection('contact')}>Contact</button>
          </div>
        </footer>

        {/* Floating Scroll Top Trigger */}
        {showScrollTop && (
          <button
            className="scroll-top-btn glass-panel glow-cyan"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        )}
      </div>

      <style>{`
        .main-content-wrapper {
          flex-grow: 1;
          margin-top: 10px;
          min-height: 100vh;
        }

        .landing-page-wrapper {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          padding-bottom: 5px;
          box-sizing: border-box;
        }

        @media (max-width: 900px) {
          .landing-page-wrapper {
            height: auto;
            overflow: visible;
            gap: 40px;
            padding-bottom: 80px;
          }
        }

        /* Left Social Ribbon */
        .social-side-ribbon {
          position: fixed;
          left: 40px;
          bottom: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          z-index: 10;
        }

        @media (max-width: 1200px) {
          .social-side-ribbon {
            display: none;
          }
        }

        .ribbon-text {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.2em;
          color: var(--text-muted);
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          margin-bottom: 10px;
        }

        .ribbon-line {
          width: 1px;
          height: 80px;
          background: linear-gradient(180deg, var(--border-glass), var(--neon-cyan));
        }

        .ribbon-icon-link {
          color: var(--text-secondary);
          transition: all var(--transition-fast);
          opacity: 0.6;
        }

        .ribbon-icon-link:hover {
          color: var(--neon-cyan);
          opacity: 1;
          transform: scale(1.15) translateY(-2px);
          filter: drop-shadow(0 0 5px var(--neon-cyan));
        }

        /* Right Section Dots Tracker */
        .section-side-dots {
          position: fixed;
          right: 40px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 16px;
          z-index: 10;
        }

        @media (max-width: 1200px) {
          .section-side-dots {
            display: none;
          }
        }

        .section-dot-btn {
          position: relative;
          width: 12px;
          height: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .dot-core {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--text-muted);
          transition: all var(--transition-medium);
        }

        .section-dot-btn.active .dot-core {
          background: var(--neon-cyan);
          box-shadow: 0 0 10px var(--neon-cyan);
          transform: scale(1.5);
        }

        .section-dot-btn:hover .dot-core {
          background: #fff;
          transform: scale(1.2);
        }

        /* Tooltip style */
        .dot-tooltip {
          position: absolute;
          right: 24px;
          background: rgba(18, 12, 45, 0.9);
          border: 1px solid var(--border-glass);
          color: #fff;
          font-family: var(--font-heading);
          font-size: 10px;
          font-weight: 500;
          padding: 4px 10px;
          border-radius: 4px;
          white-space: nowrap;
          opacity: 0;
          transform: translateX(10px);
          transition: all 0.3s ease;
          pointer-events: none;
        }

        .section-dot-btn:hover .dot-tooltip {
          opacity: 1;
          transform: translateX(0);
        }

        /* Scroll Top Trigger */
        .scroll-top-btn {
          position: fixed;
          bottom: 30px;
          right: 40px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 99;
          color: var(--neon-cyan);
          animation: float-effect 3s ease-in-out infinite;
        }

        @keyframes float-effect {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .scroll-top-btn:hover {
          color: #fff;
          background: var(--neon-cyan);
          border-color: var(--neon-cyan);
          box-shadow: 0 0 15px var(--neon-cyan);
        }
      `}</style>
    </>
  );
}

export default App;
