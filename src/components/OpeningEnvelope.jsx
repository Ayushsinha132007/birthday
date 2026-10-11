import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import { romanticAudio } from '../utils/audio';

export default function OpeningEnvelope({ onOpenComplete }) {
  const [isOpen, setIsOpen] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [showEnterButton, setShowEnterButton] = useState(false);
  const fullText = 'Happy Birthday, My Beautiful Bidisha! 🎂💖';

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    romanticAudio.playMagicHarp();

    // Burst of romantic pastel confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f472b6', '#fda4af', '#c084fc', '#fef08a', '#ffffff'],
    });

    // Start typewriter effect after envelope unfolds
    setTimeout(() => {
      let currentIdx = 0;
      const timer = setInterval(() => {
        if (currentIdx <= fullText.length) {
          setTypewriterText(fullText.slice(0, currentIdx));
          currentIdx++;
        } else {
          clearInterval(timer);
          setShowEnterButton(true);
        }
      }, 70);
    }, 1100);
  };

  const handleEnterExperience = () => {
    romanticAudio.playWishChimes();
    if (onOpenComplete) {
      onOpenComplete();
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: isOpen
          ? 'radial-gradient(circle at 50% 45%, #3b1259 0%, #1e0938 45%, #0a0314 100%)'
          : 'radial-gradient(circle at 50% 50%, #190930 0%, #100520 60%, #06010d 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        transition: 'background 1.5s ease',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient glowing orbs */}
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(244, 114, 182, 0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animation: 'float 7s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '560px',
          width: '100%',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* Subtitle / Intro phrase */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: '1.25rem',
            color: '#fbcfe8',
            marginBottom: '32px',
            fontFamily: 'var(--font-script)',
            letterSpacing: '0.04em',
            textShadow: '0 0 15px rgba(244, 114, 182, 0.5)',
          }}
        >
          Someone very special has a birthday today… 💗
        </motion.p>

        {/* 3D Romantic Envelope */}
        <div
          style={{
            perspective: '1200px',
            margin: '0 auto 36px',
            width: '290px',
            height: '190px',
            position: 'relative',
          }}
        >
          {/* Envelope Body */}
          <motion.div
            animate={{
              rotateX: isOpen ? 12 : 0,
              y: isOpen ? 40 : 0,
              scale: isOpen ? 0.95 : 1,
            }}
            transition={{ duration: 0.8 }}
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              borderRadius: '16px',
              background: 'linear-gradient(145deg, #2a1145, #18092d)',
              border: '2px solid rgba(244, 114, 182, 0.4)',
              boxShadow: isOpen
                ? '0 25px 60px rgba(0,0,0,0.7), 0 0 40px rgba(244, 114, 182, 0.35)'
                : '0 15px 45px rgba(0,0,0,0.5), 0 0 25px rgba(244, 114, 182, 0.25)',
              transformStyle: 'preserve-3d',
              overflow: 'visible',
            }}
          >
            {/* Flap (top triangle) */}
            <motion.div
              animate={{
                rotateX: isOpen ? -180 : 0,
                zIndex: isOpen ? 1 : 15,
              }}
              transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 0,
                height: 0,
                borderLeft: '143px solid transparent',
                borderRight: '143px solid transparent',
                borderTop: '100px solid #361759',
                transformOrigin: 'top center',
                filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.3))',
              }}
            >
              {/* Heart Wax Seal */}
              <div
                style={{
                  position: 'absolute',
                  top: '-32px',
                  left: '-24px',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, #f43f5e 0%, #be123c 100%)',
                  boxShadow: '0 4px 14px rgba(244, 63, 94, 0.6), inset 0 2px 3px rgba(255, 255, 255, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <Heart size={22} color="#ffffff" fill="#ffffff" />
              </div>
            </motion.div>

            {/* Letter popping out of envelope */}
            <motion.div
              initial={false}
              animate={{
                y: isOpen ? -110 : 0,
                opacity: isOpen ? 1 : 0,
                scale: isOpen ? 1 : 0.8,
              }}
              transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                top: '15px',
                left: '18px',
                right: '18px',
                height: '150px',
                background: 'linear-gradient(135deg, #fff5f7, #ffe4e6)',
                borderRadius: '12px',
                padding: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                zIndex: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#831843',
                pointerEvents: 'none',
              }}
            >
              <Sparkles size={20} color="#f43f5e" style={{ marginBottom: '6px' }} />
              <span
                className="font-script"
                style={{ fontSize: '1.4rem', fontWeight: 700, color: '#9f1239' }}
              >
                For Bidisha
              </span>
              <span style={{ fontSize: '0.78rem', color: '#be185d', fontWeight: 600 }}>
                With all my love & heart ❤️
              </span>
            </motion.div>

            {/* Front envelope fold pocket */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '110px',
                background: 'linear-gradient(to top, #240e3b, #2f134d)',
                borderBottomLeftRadius: '14px',
                borderBottomRightRadius: '14px',
                zIndex: 10,
                clipPath: 'polygon(0% 100%, 100% 100%, 100% 40%, 50% 0%, 0% 40%)',
                boxShadow: '0 -4px 15px rgba(0,0,0,0.25)',
              }}
            />
          </motion.div>
        </div>

        {/* Flying Hearts on opening */}
        <AnimatePresence>
          {isOpen && (
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 30 }}>
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 1,
                    scale: 0.4,
                    x: 0,
                    y: 0,
                  }}
                  animate={{
                    opacity: 0,
                    scale: Math.random() * 0.8 + 0.8,
                    x: (Math.random() - 0.5) * 360,
                    y: -Math.random() * 260 - 60,
                  }}
                  transition={{ duration: 1.8, delay: i * 0.08, ease: 'easeOut' }}
                  style={{
                    position: 'absolute',
                    top: '55%',
                    left: '50%',
                    color: i % 2 === 0 ? '#f472b6' : '#fda4af',
                  }}
                >
                  <Heart size={20 + (i % 3) * 6} fill="currentColor" />
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Open Button or Cinematic Typewriter Result */}
        {!isOpen ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpen}
            className="btn-romantic"
            style={{ fontSize: '1.1rem', padding: '16px 36px' }}
          >
            <Sparkles size={18} />
            <span>Open Your Surprise ✨</span>
          </motion.button>
        ) : (
          <div style={{ minHeight: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-script glow-title"
              style={{
                fontSize: 'clamp(2rem, 5.5vw, 3.2rem)',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '18px',
                lineHeight: 1.3,
              }}
            >
              {typewriterText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                style={{ color: '#f472b6' }}
              >
                |
              </motion.span>
            </motion.h1>

            {showEnterButton && (
              <motion.button
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleEnterExperience}
                className="btn-romantic"
                style={{
                  fontSize: '1.05rem',
                  padding: '14px 34px',
                  background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                }}
              >
                <Heart size={18} fill="#ffffff" />
                <span>Step Into Your Wonderland ✨</span>
              </motion.button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
