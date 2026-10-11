import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Flame, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { romanticAudio } from '../utils/audio';

export default function InteractiveCake() {
  const [isBlownOut, setIsBlownOut] = useState(false);
  const [showWishMessage, setShowWishMessage] = useState(false);
  const [candlesLit, setCandlesLit] = useState([true, true, true, true, true]);

  const handleMakeWish = () => {
    if (isBlownOut) return;
    setIsBlownOut(true);
    setCandlesLit([false, false, false, false, false]);

    // Audio effects: soft wind blow + magical wish chime
    romanticAudio.playCandleBlow();
    setTimeout(() => {
      romanticAudio.playWishChimes();
    }, 400);

    // Confetti explosion
    confetti({
      particleCount: 110,
      spread: 80,
      origin: { y: 0.65 },
      colors: ['#f472b6', '#fda4af', '#c084fc', '#fef08a', '#fb7185', '#ffffff'],
    });

    // Secondary delayed sparkle burst
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0.2, y: 0.7 },
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 0.8, y: 0.7 },
      });
      setShowWishMessage(true);
    }, 500);
  };

  const handleRelight = () => {
    romanticAudio.playHeartbeat();
    setIsBlownOut(false);
    setShowWishMessage(false);
    setCandlesLit([true, true, true, true, true]);
  };

  return (
    <section
      id="cake"
      style={{
        padding: '100px 20px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="container-custom" style={{ maxWidth: '850px', textAlign: 'center' }}>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '45px' }}
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
            <Sparkles size={14} /> Make A Birthday Wish <Sparkles size={14} />
          </span>
          <h2
            className="font-serif text-gradient-rose"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              fontWeight: 700,
              marginTop: '8px',
              letterSpacing: '-0.01em',
            }}
          >
            A Cake Baked With Pure Love 🎂
          </h2>
          <p style={{ color: '#fbcfe8', maxWidth: '580px', margin: '12px auto 0', fontSize: '1.05rem' }}>
            Close your eyes, hold a secret wish in your heart, and blow out the candles, Bidisha!
          </p>
        </motion.div>

        {/* Cake Glass Card */}
        <div
          className="glass-panel"
          style={{
            padding: '50px 30px',
            maxWidth: '650px',
            margin: '0 auto',
            borderRadius: '32px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Cake Illustration Container */}
          <div
            style={{
              position: 'relative',
              width: '320px',
              height: '280px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
              margin: '0 auto 30px',
            }}
          >
            {/* Candles Row */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '18px',
                position: 'relative',
                zIndex: 20,
                marginBottom: '-4px',
              }}
            >
              {candlesLit.map((isLit, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                  }}
                >
                  {/* Candle Flame / Smoke */}
                  <div style={{ height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <AnimatePresence>
                      {isLit ? (
                        <motion.div
                          initial={{ scale: 0.2, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.1, opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="animate-flame"
                          style={{
                            width: '16px',
                            height: '24px',
                            borderRadius: '50% 50% 35% 35% / 60% 60% 40% 40%',
                            background: 'radial-gradient(circle at 50% 65%, #ffffff 0%, #fef08a 35%, #f97316 75%, #ef4444 100%)',
                            filter: 'drop-shadow(0 0 8px #f59e0b) drop-shadow(0 0 16px #fb7185)',
                            position: 'relative',
                          }}
                        />
                      ) : (
                        <motion.div
                          initial={{ opacity: 0.8, y: 0, scale: 0.5 }}
                          animate={{ opacity: 0, y: -25, scale: 1.4 }}
                          transition={{ duration: 1.2 }}
                          style={{
                            fontSize: '12px',
                            color: '#94a3b8',
                            pointerEvents: 'none',
                          }}
                        >
                          ☁️
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Candle Wick */}
                  <div
                    style={{
                      width: '2px',
                      height: '6px',
                      backgroundColor: '#334155',
                      marginBottom: '1px',
                    }}
                  />

                  {/* Candle Pillar */}
                  <div
                    style={{
                      width: '10px',
                      height: '38px',
                      borderRadius: '4px',
                      background:
                        idx % 2 === 0
                          ? 'repeating-linear-gradient(45deg, #f472b6, #f472b6 4px, #ffffff 4px, #ffffff 8px)'
                          : 'repeating-linear-gradient(45deg, #c084fc, #c084fc 4px, #ffffff 4px, #ffffff 8px)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Cake Tier 1 (Top) */}
            <div
              style={{
                width: '150px',
                height: '52px',
                borderRadius: '16px 16px 8px 8px',
                background: 'linear-gradient(180deg, #fce7f3 0%, #f472b6 100%)',
                boxShadow: 'inset 0 4px 8px rgba(255,255,255,0.7), 0 4px 15px rgba(0,0,0,0.3)',
                position: 'relative',
                zIndex: 10,
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'flex-start',
                padding: '4px 8px',
              }}
            >
              {/* Strawberry decorations */}
              <span>🍓</span>
              <span>💖</span>
              <span>🍓</span>
            </div>

            {/* Cake Tier 2 (Middle) */}
            <div
              style={{
                width: '210px',
                height: '62px',
                borderRadius: '18px 18px 10px 10px',
                background: 'linear-gradient(180deg, #fdf2f8 0%, #ec4899 50%, #db2777 100%)',
                boxShadow: 'inset 0 5px 10px rgba(255,255,255,0.6), 0 6px 18px rgba(0,0,0,0.35)',
                position: 'relative',
                zIndex: 8,
                marginTop: '-6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffe4e6',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                fontFamily: 'var(--font-script)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  fontSize: '1.2rem',
                }}
              >
                <span>✨</span>
                <span style={{ fontSize: '1.35rem', color: '#fff' }}>Bidisha</span>
                <span>✨</span>
              </div>
            </div>

            {/* Cake Tier 3 (Bottom) */}
            <div
              style={{
                width: '270px',
                height: '76px',
                borderRadius: '20px 20px 12px 12px',
                background: 'linear-gradient(180deg, #fae8ff 0%, #a855f7 60%, #7e22ce 100%)',
                boxShadow: 'inset 0 6px 12px rgba(255,255,255,0.5), 0 10px 25px rgba(0,0,0,0.45)',
                position: 'relative',
                zIndex: 6,
                marginTop: '-6px',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: '0 20px',
              }}
            >
              {/* Pearl bead icing row */}
              {[...Array(9)].map((_, i) => (
                <span
                  key={i}
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#fff',
                    boxShadow: '0 0 6px rgba(255,255,255,0.9)',
                  }}
                />
              ))}
            </div>

            {/* Cake Stand / Plate */}
            <div
              style={{
                width: '320px',
                height: '16px',
                borderRadius: '9999px',
                background: 'linear-gradient(90deg, #cbd5e1 0%, #ffffff 50%, #94a3b8 100%)',
                boxShadow: '0 12px 30px rgba(0,0,0,0.6), 0 0 20px rgba(244, 114, 182, 0.4)',
                position: 'relative',
                zIndex: 4,
                marginTop: '-4px',
              }}
            />
          </div>

          {/* Action Button & Revealed Wish */}
          <div style={{ minHeight: '140px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {!isBlownOut ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleMakeWish}
                className="btn-romantic"
                style={{
                  fontSize: '1.1rem',
                  padding: '16px 38px',
                  boxShadow: '0 10px 30px rgba(244, 63, 94, 0.45), 0 0 20px rgba(251, 191, 36, 0.4)',
                }}
              >
                <Flame size={20} color="#fef08a" />
                <span>Make a Wish ✨</span>
              </motion.button>
            ) : (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  style={{ textAlign: 'center' }}
                >
                  <motion.p
                    className="font-script glow-title"
                    style={{
                      fontSize: 'clamp(1.7rem, 4vw, 2.4rem)',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '10px',
                      lineHeight: 1.3,
                    }}
                  >
                    “May every little dream in your heart come true, Bidisha. 💗”
                  </motion.p>
                  <p
                    style={{
                      fontSize: '1.1rem',
                      color: '#fbcfe8',
                      marginBottom: '24px',
                      fontWeight: 500,
                    }}
                  >
                    Your happiness will always be something worth celebrating.
                  </p>

                  <button
                    onClick={handleRelight}
                    className="btn-secondary"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.95rem',
                      padding: '10px 24px',
                    }}
                  >
                    <RotateCcw size={16} />
                    <span>Relight Candles to Wish Again 🕯️</span>
                  </button>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
