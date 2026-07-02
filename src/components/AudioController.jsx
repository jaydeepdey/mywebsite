import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioController = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  // Setup HTML5 Audio element using encoded URL for file with spaces
  useEffect(() => {
    // URL-encode the filename so the browser can resolve the path correctly
    const audio = new Audio('/Riverleaf%20Lullaby.mp4');
    audio.loop = true;
    audio.volume = 0.35;
    audio.preload = 'auto';
    audioRef.current = audio;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audio.src = '';
    };
  }, []);

  // Respond to first user gesture to unlock audio context
  useEffect(() => {
    const unlockOnInteraction = () => {
      if (hasInteracted) return;
      setHasInteracted(true);
      setIsMuted(false);
    };

    window.addEventListener('click', unlockOnInteraction, { once: true });
    window.addEventListener('keydown', unlockOnInteraction, { once: true });
    window.addEventListener('touchstart', unlockOnInteraction, { once: true });

    return () => {
      window.removeEventListener('click', unlockOnInteraction);
      window.removeEventListener('keydown', unlockOnInteraction);
      window.removeEventListener('touchstart', unlockOnInteraction);
    };
  }, [hasInteracted]);

  // Sync audio play/pause with muted state
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!isMuted) {
      audio.play().catch((err) => {
        console.warn('Audio play blocked:', err.message);
      });
    } else {
      audio.pause();
    }
  }, [isMuted]);

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
    if (!hasInteracted) setHasInteracted(true);
  };

  return (
    <button
      className={`audio-controller-btn ${!isMuted ? 'active' : ''}`}
      onClick={toggleMute}
      title={isMuted ? 'Play: Sunlit Carousel' : 'Mute audio'}
      aria-label={isMuted ? 'Unmute music' : 'Mute music'}
      aria-pressed={!isMuted}
    >
      <div className="audio-wave" aria-hidden="true">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <span className="audio-label">SUNLIT CAROUSEL</span>
      {isMuted ? (
        <VolumeX className="volume-icon" aria-hidden="true" />
      ) : (
        <Volume2 className="volume-icon" aria-hidden="true" />
      )}

      <style>{`
        .audio-controller-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 16px;
          border-radius: 30px;
          background: rgba(18, 12, 45, 0.5);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: var(--text-primary);
          cursor: pointer;
          transition: all var(--transition-medium);
          z-index: 100;
          font-family: var(--font-heading);
          font-size: 11px;
          letter-spacing: 0.1em;
          font-weight: 600;
        }

        .audio-controller-btn:hover,
        .audio-controller-btn:focus-visible {
          border-color: var(--neon-cyan);
          box-shadow: 0 0 16px rgba(0, 240, 255, 0.3);
          transform: translateY(-1px);
          outline: none;
        }

        .audio-controller-btn.active {
          border-color: rgba(189, 0, 255, 0.6);
          box-shadow: 0 0 16px rgba(189, 0, 255, 0.25);
        }

        .volume-icon {
          width: 14px;
          height: 14px;
          color: var(--text-secondary);
          flex-shrink: 0;
        }

        .audio-controller-btn.active .volume-icon {
          color: var(--neon-cyan);
        }

        .audio-label {
          color: var(--text-secondary);
          font-size: 10px;
          font-weight: 500;
          white-space: nowrap;
        }

        .audio-controller-btn.active .audio-label {
          color: var(--text-primary);
        }

        .audio-wave {
          display: flex;
          align-items: flex-end;
          gap: 2px;
          width: 20px;
          height: 14px;
          flex-shrink: 0;
        }

        .bar {
          width: 2px;
          height: 3px;
          background-color: var(--text-muted);
          border-radius: 1px;
          transition: all 0.3s ease;
        }

        .audio-controller-btn.active .bar {
          background-color: var(--neon-cyan);
          animation: wave-bounce 0.9s ease-in-out infinite alternate;
        }

        .audio-controller-btn.active .bar:nth-child(1) { animation-delay: 0.0s; height: 8px; }
        .audio-controller-btn.active .bar:nth-child(2) { animation-delay: 0.2s; height: 14px; }
        .audio-controller-btn.active .bar:nth-child(3) { animation-delay: 0.4s; height: 6px; }
        .audio-controller-btn.active .bar:nth-child(4) { animation-delay: 0.1s; height: 12px; }
        .audio-controller-btn.active .bar:nth-child(5) { animation-delay: 0.3s; height: 5px; }

        @keyframes wave-bounce {
          0%   { transform: scaleY(0.25); }
          100% { transform: scaleY(1); }
        }
      `}</style>
    </button>
  );
};

export default AudioController;
