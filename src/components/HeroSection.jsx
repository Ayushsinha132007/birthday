import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Moon, Gift, Stars } from 'lucide-react';
import { romanticAudio } from '../utils/audio';

export default function HeroSection({ onExploreSurprise, onExploreStory }) {
  const scrollTo = (id) => {
    romanticAudio.playHeartbeat();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '120px 20px 80px',
        overflow: 'hidden',
      }}
    >
      {/* Decorative ambient glowing circles */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '15%',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(244, 114, 182, 0.22) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'float 8s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '12%',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'floatReverse 9s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />

      {/* Hero Content Container */}
      <div
        className="container-custom"
        style={{
          textAlign: 'center',
          maxWidth: '900px',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* Floating Heart / Sparkle Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            borderRadius: '9999px',
            background: 'rgba(244, 114, 182, 0.12)',
            border: '1px solid rgba(244, 114, 182, 0.35)',
            boxShadow: '0 4px 20px rgba(244, 114, 182, 0.2)',
            marginBottom: '28px',
          }}
        >
          <Sparkles size={16} color="#f472b6" />
          <span
            style={{
              fontSize: '0.9rem',
              fontWeight: 600,
              color: '#fbcfe8',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            A Fairytale Celebration for Someone Precious
          </span>
          <Heart size={14} color="#f43f5e" fill="#f43f5e" className="animate-pulse-heart" />
        </motion.div>

        {/* Lead Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif"
          style={{
            fontSize: 'clamp(1.15rem, 2.8vw, 1.6rem)',
            color: '#fbcfe8',
            fontStyle: 'italic',
            marginBottom: '16px',
            letterSpacing: '0.02em',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          “To the girl who makes my world more beautiful…”
        </motion.p>

        {/* Centerpiece Title: Happy Birthday, Bidisha ❤️ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4 }}
          style={{ position: 'relative', margin: '20px 0 28px' }}
        >
          <h1
            style={{
              fontSize: 'clamp(2.8rem, 8vw, 5.8rem)',
              lineHeight: 1.15,
              fontWeight: 800,
              letterSpacing: '-0.01em',
            }}
          >
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)',
                fontWeight: 600,
                color: '#ffe4e6',
                fontFamily: 'var(--font-serif)',
              }}
            >
              Happy Birthday,
            </span>
            <span
              className="font-script glow-title"
              style={{
                display: 'inline-block',
                fontSize: 'clamp(3.8rem, 11vw, 7.5rem)',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #ffffff 15%, #fbcfe8 40%, #f472b6 75%, #fda4af 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                position: 'relative',
                padding: '0 12px',
              }}
            >
              Bidisha
              <motion.span
                animate={{
                  scale: [1, 1.25, 1],
                  rotate: [0, 8, -8, 0],
                }}
                transition={{ repeat: Infinity, duration: 2.2 }}
                style={{
                  display: 'inline-block',
                  marginLeft: '12px',
                  filter: 'drop-shadow(0 0 16px rgba(244, 63, 94, 0.8))',
                }}
              >
                ❤️
              </motion.span>
            </span>
          </h1>

          {/* Floating Rose & Sparkle Accents */}
          <div
            className="animate-float"
            style={{
              position: 'absolute',
              top: '-15px',
              right: '8%',
              fontSize: '2rem',
              filter: 'drop-shadow(0 0 10px rgba(244, 114, 182, 0.7))',
              userSelect: 'none',
            }}
          >
            🌹
          </div>
          <div
            className="animate-float-reverse"
            style={{
              position: 'absolute',
              bottom: '5px',
              left: '6%',
              fontSize: '1.8rem',
              filter: 'drop-shadow(0 0 10px rgba(244, 114, 182, 0.7))',
              userSelect: 'none',
            }}
          >
            ✨
          </div>
        </motion.div>

        {/* Heartfelt Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.35rem)',
            color: '#fce7f3',
            maxWidth: '680px',
            margin: '0 auto 40px',
            lineHeight: 1.7,
            fontWeight: 400,
            textShadow: '0 2px 12px rgba(0,0,0,0.4)',
          }}
        >
          You deserve all the happiness, love, and magic this universe has to offer.
        </motion.p>

        {/* Two Animated Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px',
          }}
        >
          <button
            onClick={() => scrollTo('cake')}
            className="btn-romantic"
            style={{ padding: '16px 36px', fontSize: '1.05rem' }}
          >
            <Gift size={20} />
            <span>A Little Surprise for You 💝</span>
          </button>

          <button
            onClick={() => scrollTo('story')}
            className="btn-secondary"
            style={{ padding: '16px 34px', fontSize: '1.05rem' }}
          >
            <Moon size={18} color="#f472b6" />
            <span>Our Little Love Story 🌙</span>
          </button>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{
            marginTop: '60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
            color: '#fbcfe8',
            fontSize: '0.85rem',
            opacity: 0.75,
            cursor: 'pointer',
          }}
          onClick={() => scrollTo('cake')}
        >
          <span>Scroll to unwrap the magic</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
