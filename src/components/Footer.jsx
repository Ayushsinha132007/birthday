import React from 'react';
import { Heart, Sparkles, ArrowUp } from 'lucide-react';
import { romanticAudio } from '../utils/audio';

export default function Footer() {
  const scrollToTop = () => {
    romanticAudio.playHeartbeat();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        padding: '60px 20px 40px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid rgba(244, 114, 182, 0.15)',
        background: 'linear-gradient(to top, #06010d, transparent)',
      }}
    >
      <div className="container-custom" style={{ maxWidth: '600px' }}>
        {/* Heart Seal */}
        <div
          onClick={scrollToTop}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #f43f5e, #ec4899)',
            boxShadow: '0 4px 18px rgba(244, 63, 94, 0.5)',
            marginBottom: '16px',
            cursor: 'pointer',
          }}
          title="Back to Top"
        >
          <Heart size={20} color="#ffffff" fill="#ffffff" className="animate-pulse-heart" />
        </div>

        <p
          className="font-script"
          style={{
            fontSize: '1.7rem',
            color: '#fbcfe8',
            marginBottom: '6px',
          }}
        >
          Handcrafted with endless love for Bidisha 🎂💖
        </p>

        <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.6 }}>
          May every sunrise bring you joy, and every star whisper how cherished you are.
        </p>

        <div style={{ marginTop: '20px' }}>
          <button
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'transparent',
              border: 'none',
              color: '#f472b6',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              padding: '6px 12px',
              borderRadius: '9999px',
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
