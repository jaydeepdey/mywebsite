import React, { useState, useEffect } from 'react';

const HologramPortrait = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [scanStatus, setScanStatus] = useState("SCANNING...");

  // Random scan status messages to simulate a live holographic terminal
  useEffect(() => {
    const statuses = [
      "ESTABLISHING SYSTEM CONNECTION...",
      "PORTRAIT SCAN: 100% SECURE",
      "SUBJECT ID: JD-DPartner-27+",
      "SECTOR: DELIVERY_OPERATIONS",
      "SYS: MOZART_FREQ_ACTIVE",
      "SAAS_STATUS: CORE_RUNNING",
      "MENTORING: SESSION_READY"
    ];

    const interval = setInterval(() => {
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      setScanStatus(randomStatus);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // range: -10 to 10
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20; // range: -10 to 10
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0 });
  };

  return (
    <div 
      className="hologram-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateY(${coords.x}deg) rotateX(${-coords.y}deg)`
      }}
    >
      {/* Outer Rotating Glowing Ring */}
      <div className="hologram-outer-ring"></div>
      <div className="hologram-inner-ring"></div>
      
      {/* Interactive Scanlines */}
      <div className="hologram-scanline"></div>
      
      {/* Main Image Frame */}
      <div className="hologram-frame">
        <img 
          src="/New_Jaydeep.png" 
          alt="Jaydeep Portrait" 
          className="hologram-img"
          onError={(e) => {
            e.target.src = '/Jaydeep.jpeg';
          }}
        />
        <div className="hologram-glare"></div>
      </div>
      
      {/* Tech Overlays */}
      <div className="hologram-hud-top">SYS_INIT_v7.4</div>
      <div className="hologram-hud-bottom">{scanStatus}</div>
      <div className="hologram-hud-left">COORD: {coords.x.toFixed(1)}, {coords.y.toFixed(1)}</div>
      <div className="hologram-hud-right">LVL: DELIV_EXEC</div>

      <style>{`
        .hologram-container {
          position: relative;
          width: 230px;
          height: 230px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
          transform-style: preserve-3d;
          margin: 0 auto;
        }

        .hologram-frame {
          width: 86%;
          height: 86%;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          border: 2px solid rgba(0, 240, 255, 0.6);
          background: radial-gradient(circle, rgba(18, 12, 45, 0.8) 0%, rgba(4, 1, 13, 0.95) 100%);
          box-shadow: 
            0 0 30px rgba(0, 240, 255, 0.3),
            inset 0 0 30px rgba(0, 240, 255, 0.3);
          transform: translateZ(20px);
          z-index: 2;
        }

        .hologram-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          filter: saturate(1.1) contrast(1.1) brightness(0.95) drop-shadow(0 0 8px rgba(0, 240, 255, 0.3));
          transition: all var(--transition-medium);
        }

        .hologram-container:hover .hologram-img {
          filter: saturate(1.3) contrast(1.15) brightness(1.05) drop-shadow(0 0 15px rgba(189, 0, 255, 0.5));
          transform: scale(1.03);
        }

        .hologram-glare {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 50%, rgba(0,240,255,0.1) 100%);
          pointer-events: none;
          z-index: 3;
        }

        /* Scanline Animation */
        .hologram-scanline {
          position: absolute;
          top: 0;
          left: 7%;
          width: 86%;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--neon-cyan), transparent);
          box-shadow: 0 0 10px var(--neon-cyan);
          animation: scanline-move 5s linear infinite;
          z-index: 4;
          pointer-events: none;
          transform: translateZ(30px);
          opacity: 0.8;
        }

        /* Rotating Rings */
        .hologram-outer-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 1px dashed rgba(0, 240, 255, 0.4);
          animation: hologram-pulse 12s linear infinite;
          pointer-events: none;
          z-index: 1;
        }

        .hologram-inner-ring {
          position: absolute;
          width: 92%;
          height: 92%;
          border-radius: 50%;
          border: 1px solid rgba(189, 0, 255, 0.3);
          border-top-color: var(--neon-purple);
          border-bottom-color: var(--neon-cyan);
          animation: spin-reverse 8s linear infinite;
          pointer-events: none;
          z-index: 1;
        }

        /* Tech HUD Indicators */
        .hologram-hud-top, .hologram-hud-bottom, .hologram-hud-left, .hologram-hud-right {
          position: absolute;
          font-family: var(--font-mono);
          font-size: 8px;
          color: var(--neon-cyan);
          text-shadow: 0 0 4px rgba(0, 240, 255, 0.5);
          letter-spacing: 0.1em;
          pointer-events: none;
          opacity: 0.7;
          z-index: 10;
        }

        .hologram-hud-top {
          top: -15px;
          left: 50%;
          transform: translateX(-50%) translateZ(10px);
          border-bottom: 1px solid var(--border-neon);
          padding-bottom: 2px;
        }

        .hologram-hud-bottom {
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%) translateZ(10px);
          background: rgba(4, 1, 13, 0.8);
          border: 1px solid var(--border-glass);
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 7px;
          white-space: nowrap;
        }

        .hologram-hud-left {
          left: -40px;
          top: 50%;
          transform: translateY(-50%) rotate(-90deg) translateZ(10px);
        }

        .hologram-hud-right {
          right: -40px;
          top: 50%;
          transform: translateY(-50%) rotate(90deg) translateZ(10px);
        }

        @keyframes scanline-move {
          0% {
            top: 7%;
            opacity: 0;
          }
          5% {
            opacity: 0.8;
          }
          95% {
            opacity: 0.8;
          }
          100% {
            top: 93%;
            opacity: 0;
          }
        }

        @keyframes spin-reverse {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default HologramPortrait;
