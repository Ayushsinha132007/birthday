import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stars, Heart, Sparkles, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { romanticAudio } from '../utils/audio';

export default function SkyOfWishes({ onReplay }) {
  const [isSkyActive, setIsSkyActive] = useState(false);
  const [step, setStep] = useState(0);

  const startSkySurprise = () => {
    setIsSkyActive(true);
    romanticAudio.playFirework();

    // Initial festive burst
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#f472b6', '#fda4af', '#c084fc', '#fef08a', '#ffffff'],
    });

    // Sequential message reveals
    // Step 1: "Today is your day. ✨"
    setTimeout(() => {
      setStep(1);
      romanticAudio.playFirework();
    }, 1500);

    // Step 2: "Keep smiling, keep dreaming, and keep shining. 💖"
    setTimeout(() => {
      setStep(2);
      romanticAudio.playWishChimes();
      confetti({
        particleCount: 70,
        angle: 60,
        spread: 60,
        origin: { x: 0.1, y: 0.6 },
        colors: ['#f472b6', '#fef08a', '#ffffff'],
      });
    }, 4000);

    // Step 3: "And may this new year of your life be more beautiful than you ever imagined. 🌷"
    setTimeout(() => {
      setStep(3);
      romanticAudio.playFirework();
      confetti({
        particleCount: 70,
        angle: 120,
        spread: 60,
        origin: { x: 0.9, y: 0.6 },
        colors: ['#c084fc', '#fda4af', '#f59e0b'],
      });
    }, 7000);

    // Step 4: Centerpiece "HAPPY BIRTHDAY, BIDISHA! 🎂❤️"
    setTimeout(() => {
      setStep(4);
      romanticAudio.playFirework();
      confetti({
        particleCount: 140,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#f43f5e', '#ec4899', '#fef08a', '#c084fc', '#ffffff'],
      });
    }, 10000);

    // Step 5: "Sending you the biggest virtual hug..."
    setTimeout(() => {
      setStep(5);
    }, 12500);
  };

  const handleReplayClick = () => {
    romanticAudio.playWishChimes();
    setIsSkyActive(false);
    setStep(0);
    if (onReplay) {
      onReplay();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="sky"
      style={{
        minHeight: '100vh',
        padding: '120px 20px 100px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: isSkyActive
          ? 'radial-gradient(circle at 50% 40%, #290d45 0%, #130524 50%, #05010b 100%)'
          : 'transparent',
        transition: 'background 2s ease',
      }}
    >
      {/* Cinematic Starry Sky Background Elements */}
      {isSkyActive && (
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
          {/* Shooting Star Streak */}
          <motion.div
            initial={{ x: '-10%', y: '10%', opacity: 0 }}
            animate={{ x: '120%', y: '80%', opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 4, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              width: '180px',
              height: '3px',
              background: 'linear-gradient(90deg, rgba(255,255,255,0), #f472b6, #ffffff)',
              boxShadow: '0 0 15px #f472b6, 0 0 30px #ffffff',
              transform: 'rotate(-25deg)',
            }}
          />

          {/* Floating glowing heart particles rising upward */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: '100vh', opacity: 0, x: `${(i * 5) % 95}vw` }}
              animate={{
                y: '-20vh',
                opacity: [0, 0.85, 0.85, 0],
                x: `${((i * 5) % 95) + Math.sin(i) * 5}vw`,
              }}
              transition={{
                repeat: Infinity,
                duration: 9 + (i % 5) * 2,
                delay: i * 0.4,
                ease: 'linear',
              }}
              style={{
                position: 'absolute',
                color: i % 2 === 0 ? '#f472b6' : '#fda4af',
                fontSize: `${14 + (i % 3) * 6}px`,
                filter: 'drop-shadow(0 0 8px rgba(244, 114, 182, 0.8))',
              }}
            >
              💖
            </motion.div>
          ))}
        </div>
      )}

      <div
        className="container-custom"
        style={{
          maxWidth: '920px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* Intro before activation */}
        {!isSkyActive ? (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span
              style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#f472b6',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Stars size={14} /> The Grand Finale <Stars size={14} />
            </span>

            <h2
              className="font-serif text-gradient-magic"
              style={{
                fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
                fontWeight: 700,
                margin: '12px 0 20px',
                letterSpacing: '-0.01em',
              }}
            >
              A Sky Full of Wishes 🌌
            </h2>

            <p
              style={{
                color: '#fbcfe8',
                fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)',
                maxWidth: '620px',
                margin: '0 auto 40px',
                lineHeight: 1.7,
              }}
            >
              Every star in this midnight sky has a gentle wish written for you. Are you ready for the final magic?
            </p>

            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              onClick={startSkySurprise}
              className="btn-romantic"
              style={{
                fontSize: '1.2rem',
                padding: '18px 45px',
                boxShadow: '0 12px 35px rgba(244, 63, 94, 0.55), 0 0 30px rgba(236, 72, 153, 0.5)',
              }}
            >
              <Heart size={22} fill="#ffffff" />
              <span>One Last Surprise, Bidisha 💝</span>
            </motion.button>
          </motion.div>
        ) : (
          /* Active Cinematic Show */
          <div
            style={{
              minHeight: '480px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Sequential Messages */}
            <div style={{ marginBottom: '24px' }}>
              <AnimatePresence>
                {step >= 1 && (
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="font-serif glow-pink-text"
                    style={{
                      fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)',
                      color: '#ffffff',
                      marginBottom: '16px',
                      fontStyle: 'italic',
                    }}
                  >
                    Today is your day. ✨
                  </motion.p>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {step >= 2 && (
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="font-serif"
                    style={{
                      fontSize: 'clamp(1.3rem, 3.2vw, 2rem)',
                      color: '#fbcfe8',
                      marginBottom: '16px',
                      fontStyle: 'italic',
                    }}
                  >
                    Keep smiling, keep dreaming, and keep shining. 💖
                  </motion.p>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {step >= 3 && (
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="font-serif"
                    style={{
                      fontSize: 'clamp(1.2rem, 3vw, 1.85rem)',
                      color: '#fce7f3',
                      marginBottom: '32px',
                      lineHeight: 1.5,
                      fontStyle: 'italic',
                    }}
                  >
                    And may this new year of your life be more beautiful than you ever imagined. 🌷
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Grand Centerpiece */}
            <AnimatePresence>
              {step >= 4 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  style={{
                    padding: '30px',
                    borderRadius: '30px',
                    background: 'rgba(25, 10, 45, 0.55)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(244, 114, 182, 0.4)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 50px rgba(244, 114, 182, 0.45)',
                    marginBottom: '28px',
                    maxWidth: '820px',
                    width: '100%',
                  }}
                >
                  <h1
                    className="font-script glow-title"
                    style={{
                      fontSize: 'clamp(2.8rem, 8.5vw, 5.5rem)',
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.15,
                      marginBottom: '12px',
                    }}
                  >
                    HAPPY BIRTHDAY, BIDISHA! 🎂❤️
                  </h1>

                  {step >= 5 && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      style={{
                        fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                        color: '#fbcfe8',
                        fontWeight: 500,
                        marginTop: '8px',
                      }}
                    >
                      Sending you the biggest virtual hug and a sky full of wishes. 💗
                    </motion.p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Replay Button */}
            {step >= 5 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <button
                  onClick={handleReplayClick}
                  className="btn-romantic"
                  style={{
                    padding: '14px 34px',
                    fontSize: '1rem',
                    background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                  }}
                >
                  <RotateCcw size={18} />
                  <span>Replay Our Little Magic ↻</span>
                </button>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
