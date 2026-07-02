import React, { useState } from 'react';
import AudioController from './AudioController';
import { Youtube as YoutubeIcon } from './BrandIcons';
import {
  Home,
  User,
  Package,
  Megaphone,
  Image,
  Mail,
  Infinity,
} from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { id: 'home',    label: 'Home',             icon: Home,          color: '#00f0ff' },
    { id: 'about',   label: 'About Me',          icon: User,          color: '#bd00ff' },
    { id: 'itexp',   label: 'IT Experience',     icon: Infinity,      color: '#0066ff' },
    { id: 'saas',    label: 'SaaS Products',     icon: Package,       color: '#05ffa1' },
    { id: 'ads',     label: 'Ads Portfolio',     icon: Megaphone,     color: '#ffd700' },
    { id: 'youtube', label: 'YouTube',           icon: YoutubeIcon,   color: '#ff004c' },
    { id: 'gallery', label: 'Gallery',           icon: Image,         color: '#bd00ff' },
    { id: 'contact', label: 'Contact',           icon: Mail,          color: '#05ffa1' },
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <>
      {/* ── Sidebar Nav ── */}
      <aside className="sidebar-nav" role="navigation" aria-label="Main navigation">

        {/* Brand Logo */}
        <button
          className="sidebar-brand"
          onClick={() => handleNavClick('home')}
          aria-label="Go to Home"
          title="JAYDEEP"
        >
          <svg width="46" height="46" viewBox="0 0 100 100" fill="none" className="logo-svg" aria-hidden="true">
            <path d="M20 20 H50 C65 20 75 30 75 45 C75 60 65 70 50 70 H20" stroke="url(#sg-cyan)" strokeWidth="8" strokeLinecap="round"/>
            <path d="M50 20 V80 C50 85 45 90 35 90 C25 90 20 85 20 80" stroke="url(#sg-purple)" strokeWidth="8" strokeLinecap="round"/>
            <circle cx="50" cy="45" r="4" fill="#00f0ff" className="logo-dot"/>
            <defs>
              <linearGradient id="sg-cyan" x1="20" y1="20" x2="75" y2="70" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00f0ff"/>
                <stop offset="1" stopColor="#0066ff"/>
              </linearGradient>
              <linearGradient id="sg-purple" x1="50" y1="20" x2="20" y2="90" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0066ff"/>
                <stop offset="1" stopColor="#bd00ff"/>
              </linearGradient>
            </defs>
          </svg>
          <span className="sidebar-logo-text">JD</span>
        </button>

        {/* Divider */}
        <div className="sidebar-divider" aria-hidden="true" />

        {/* Nav Items */}
        <ul className="sidebar-items" role="list">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            const isHovered = hoveredItem === item.id;

            return (
              <li key={item.id} role="listitem" className="sidebar-item-wrapper">
                <button
                  className={`sidebar-item ${isActive ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  aria-label={item.label}
                  aria-current={isActive ? 'page' : undefined}
                  style={{ '--item-color': item.color }}
                >
                  {/* Active indicator bar */}
                  {isActive && <span className="active-bar" aria-hidden="true" />}

                  {/* Icon */}
                  <span className="sidebar-icon-wrap" aria-hidden="true">
                    <Icon size={24} strokeWidth={isActive ? 2.2 : 1.7} />
                  </span>

                  {/* Hover tooltip label */}
                  <span className={`sidebar-tooltip ${isHovered ? 'visible' : ''}`} aria-hidden="true">
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Divider */}
        <div className="sidebar-divider" aria-hidden="true" />

        {/* Audio controller at the bottom */}
        <div className="sidebar-audio">
          <AudioController />
        </div>
      </aside>

      <style>{`
        /* ── SIDEBAR CONTAINER ── */
        .sidebar-nav {
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
          width: 96px;
          z-index: 200;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px 0;
          background: rgba(4, 1, 13, 0.70);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 2px 0 40px rgba(0, 0, 0, 0.5);
          gap: 0;
        }

        /* ── BRAND ── */
        .sidebar-brand {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          cursor: pointer;
          padding: 8px;
          border-radius: 14px;
          transition: all 0.25s ease;
          margin-bottom: 4px;
        }

        .sidebar-brand:hover .logo-svg {
          filter: drop-shadow(0 0 14px rgba(189, 0, 255, 0.8));
          transform: scale(1.08) rotate(4deg);
        }

        .logo-svg {
          filter: drop-shadow(0 0 7px rgba(0, 240, 255, 0.5));
          transition: all 0.3s ease;
        }

        .logo-dot {
          animation: ripple 2.5s infinite;
        }

        .sidebar-logo-text {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 13px;
          letter-spacing: 0.18em;
          background: linear-gradient(135deg, #fff, var(--neon-cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── DIVIDER ── */
        .sidebar-divider {
          width: 44px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent);
          margin: 14px 0;
          flex-shrink: 0;
        }

        /* ── NAV ITEM LIST ── */
        .sidebar-items {
          list-style: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          width: 100%;
          padding: 0 8px;
          flex: 1;
        }

        .sidebar-item-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          position: relative;
        }

        /* ── NAV ITEM BUTTON ── */
        .sidebar-item {
          position: relative;
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
          color: rgba(255,255,255,0.45);
          background: transparent;
        }

        .sidebar-item:hover {
          color: var(--item-color, var(--neon-cyan));
          background: rgba(255, 255, 255, 0.05);
          transform: scale(1.12);
          filter: drop-shadow(0 0 8px var(--item-color, var(--neon-cyan)));
        }

        .sidebar-item.active {
          color: var(--item-color, var(--neon-cyan));
          background: rgba(255, 255, 255, 0.07);
          filter: drop-shadow(0 0 10px var(--item-color, var(--neon-cyan)));
        }

        .sidebar-item:focus-visible {
          outline: 2px solid var(--item-color, var(--neon-cyan));
          outline-offset: 3px;
        }

        /* ── ACTIVE BAR ── */
        .active-bar {
          position: absolute;
          left: -10px;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 36px;
          border-radius: 0 4px 4px 0;
          background: var(--item-color, var(--neon-cyan));
          box-shadow: 0 0 12px var(--item-color, var(--neon-cyan));
          animation: bar-glow 2s ease-in-out infinite alternate;
        }

        @keyframes bar-glow {
          0%   { opacity: 0.7; box-shadow: 0 0 6px var(--item-color, var(--neon-cyan)); }
          100% { opacity: 1;   box-shadow: 0 0 16px var(--item-color, var(--neon-cyan)); }
        }

        /* ── ICON WRAPPER ── */
        .sidebar-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── TOOLTIP LABEL ── */
        .sidebar-tooltip {
          position: absolute;
          left: calc(100% + 16px);
          top: 50%;
          transform: translateY(-50%) translateX(-6px);
          background: rgba(10, 6, 26, 0.97);
          border: 1px solid rgba(255,255,255,0.13);
          color: #fff;
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 8px 18px;
          border-radius: 10px;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.18s ease, transform 0.18s ease;
          box-shadow: 0 6px 24px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,240,255,0.08);
          backdrop-filter: blur(12px);
          z-index: 300;
        }

        /* Arrow pointer on tooltip */
        .sidebar-tooltip::before {
          content: '';
          position: absolute;
          left: -6px;
          top: 50%;
          transform: translateY(-50%);
          border-width: 5px 6px 5px 0;
          border-style: solid;
          border-color: transparent rgba(255,255,255,0.12) transparent transparent;
        }
        .sidebar-tooltip::after {
          content: '';
          position: absolute;
          left: -4px;
          top: 50%;
          transform: translateY(-50%);
          border-width: 4px 5px 4px 0;
          border-style: solid;
          border-color: transparent rgba(10,6,26,0.96) transparent transparent;
        }

        .sidebar-tooltip.visible {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        /* ── AUDIO SECTION ── */
        .sidebar-audio {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 0 4px;
          margin-top: 4px;
        }

        /* Compact audio button for sidebar */
        .sidebar-audio .audio-controller-btn {
          flex-direction: column;
          padding: 8px 6px;
          gap: 5px;
          border-radius: 14px;
          width: 48px;
          font-size: 0;
          letter-spacing: 0;
        }

        .sidebar-audio .audio-label {
          display: none;
        }

        .sidebar-audio .audio-wave {
          justify-content: center;
        }

        /* ── MOBILE: collapse to icon-only bottom bar ── */
        @media (max-width: 900px) {
          .sidebar-nav {
            width: 100%;
            height: 58px;
            flex-direction: row;
            top: auto;
            bottom: 0;
            left: 0;
            right: 0;
            border-right: none;
            border-top: 1px solid rgba(255,255,255,0.07);
            padding: 0 8px;
            gap: 4px;
            box-shadow: 0 -2px 30px rgba(0,0,0,0.4);
            justify-content: space-around;
          }
          .sidebar-brand,
          .sidebar-divider,
          .sidebar-audio {
            display: none;
          }
          .sidebar-items {
            flex-direction: row;
            gap: 0;
            padding: 0;
            justify-content: space-around;
            width: 100%;
            flex: unset;
          }
          .sidebar-item-wrapper {
            flex: 1;
          }
          .sidebar-item {
            width: 100%;
            height: 48px;
            border-radius: 8px;
          }
          .active-bar {
            left: 50%;
            top: auto;
            bottom: 2px;
            transform: translateX(-50%);
            width: 20px;
            height: 3px;
            border-radius: 3px 3px 0 0;
          }
          .sidebar-tooltip {
            left: 50%;
            top: auto;
            bottom: calc(100% + 10px);
            transform: translateX(-50%) translateY(4px);
          }
          .sidebar-tooltip.visible {
            transform: translateX(-50%) translateY(0);
          }
          .sidebar-tooltip::before,
          .sidebar-tooltip::after {
            left: 50%;
            top: auto;
            bottom: -10px;
            transform: translateX(-50%);
            border-width: 5px 5px 0 5px;
            border-color: rgba(255,255,255,0.12) transparent transparent transparent;
          }
          .sidebar-tooltip::after {
            bottom: -8px;
            border-color: rgba(10,6,26,0.96) transparent transparent transparent;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
