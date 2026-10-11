import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music, Play, Pause, Sparkles } from 'lucide-react';
import { romanticAudio } from '../utils/audio';

export default function AudioPlayer({ isAutoplayUnlocked = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(35);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    if (isAutoplayUnlocked && !isPlaying) {
      romanticAudio.startMusic();
      setIsPlaying(true);
    }
  }, [isAutoplayUnlocked]);

  const handleTogglePlay = () => {
    const playing = romanticAudio.toggleMusic();
    setIsPlaying(playing);
  };

  const handleToggleMute = () => {
    const muted = romanticAudio.toggleMute();
    setIsMuted(muted);
  };

  const handleVolumeChange = (e) => {
    const val = Number(e.target.value);
    setVolume(val);
    romanticAudio.setVolume(val / 100);
    if (val > 0 && isMuted) {
      romanticAudio.toggleMute();
      setIsMuted(false);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 50,
      }}
    >
      <div
        className="glass-panel"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '8px 16px',
          borderRadius: '9999px',
          border: '1px solid rgba(244, 114, 182, 0.35)',
          background: 'rgba(20, 8, 38, 0.75)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 15px rgba(244, 114, 182, 0.25)',
        }}
      >
        {/* Play/Pause Button */}
        <button
          onClick={handleTogglePlay}
          aria-label={isPlaying ? 'Pause romantic music' : 'Play romantic music'}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: isPlaying
              ? 'linear-gradient(135deg, #f43f5e, #ec4899)'
              : 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: isPlaying ? '0 0 15px rgba(244, 63, 94, 0.5)' : 'none',
          }}
          title={isPlaying ? 'Pause Music' : 'Play Music'}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} style={{ marginLeft: '2px' }} />}
        </button>

        {/* Music visualizer bars / Track title */}
        <div
          onClick={() => setShowControls(!showControls)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            paddingRight: '4px',
          }}
          title="Click to toggle volume slider"
        >
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '16px' }}>
            <span
              style={{
                width: '3px',
                height: isPlaying ? '14px' : '4px',
                backgroundColor: '#f472b6',
                borderRadius: '2px',
                animation: isPlaying ? 'float 1s ease-in-out infinite' : 'none',
                transition: 'height 0.2s',
              }}
            />
            <span
              style={{
                width: '3px',
                height: isPlaying ? '18px' : '6px',
                backgroundColor: '#c084fc',
                borderRadius: '2px',
                animation: isPlaying ? 'floatReverse 0.8s ease-in-out infinite' : 'none',
                transition: 'height 0.2s',
              }}
            />
            <span
              style={{
                width: '3px',
                height: isPlaying ? '12px' : '4px',
                backgroundColor: '#fda4af',
                borderRadius: '2px',
                animation: isPlaying ? 'float 1.2s ease-in-out infinite' : 'none',
                transition: 'height 0.2s',
              }}
            />
          </div>

          <span
            style={{
              fontSize: '0.82rem',
              fontWeight: 500,
              color: '#fbcfe8',
              letterSpacing: '0.01em',
              whiteSpace: 'nowrap',
              fontFamily: 'var(--font-body)',
            }}
          >
            {isPlaying ? 'Romantic Melody ♪' : 'Play Music'}
          </span>
        </div>

        {/* Mute button */}
        <button
          onClick={handleToggleMute}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
          style={{
            background: 'transparent',
            border: 'none',
            color: isMuted ? '#f43f5e' : '#fbcfe8',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '4px',
            opacity: 0.85,
            transition: 'opacity 0.2s',
          }}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>

        {/* Volume slider popout */}
        {showControls && (
          <div
            style={{
              position: 'absolute',
              bottom: '50px',
              right: '0',
              padding: '12px 16px',
              borderRadius: '16px',
              background: 'rgba(20, 8, 38, 0.9)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(244, 114, 182, 0.3)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              minWidth: '150px',
            }}
          >
            <span style={{ fontSize: '0.75rem', color: '#fbcfe8', fontWeight: 600 }}>
              Volume: {isMuted ? 0 : volume}%
            </span>
            <input
              type="range"
              min="0"
              max="100"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              style={{
                accentColor: '#f43f5e',
                cursor: 'pointer',
                width: '100%',
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
