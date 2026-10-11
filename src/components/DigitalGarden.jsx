import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Moon, Flower2, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { romanticAudio } from '../utils/audio';

export default function DigitalGarden() {
  const [isBloomed, setIsBloomed] = useState(false);
  const [flowerSparkleCount, setFlowerSparkleCount] = useState(0);

  const handleBloom = () => {
    if (isBloomed) return;
    setIsBloomed(true);
    romanticAudio.playMagicHarp();

    confetti({
      particleCount: 75,
      spread: 90,
      origin: { y: 0.75 },
      colors: ['#f472b6', '#fda4af', '#fbcfe8', '#e9d5ff', '#ffffff'],
    });
  };

  const handleFlowerClick = () => {
    romanticAudio.playWishChimes();
    setFlowerSparkleCount((c) => c + 1);
  };

  return (
    <section
      id="garden"
      style={{
        padding: '110px 20px',
        position: 'relative',
        minHeight: '850px',
        overflow: 'hidden',
        background: isBloomed
          ? 'radial-gradient(circle at 50% 70%, #2f104d 0%, #17072c 55%, #080214 100%)'
          : 'radial-gradient(circle at 50% 70%, #150626 0%, #0d0319 60%, #06010d 100%)',
        transition: 'background 2s ease',
      }}
    >
      {/* Glowing Moon */}
      <div
        style={{
          position: 'absolute',
          top: '60px',
          right: '12%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #fffbeb 20%, #fef08a 60%, #f59e0b 100%)',
          boxShadow: isBloomed
            ? '0 0 50px rgba(254, 240, 138, 0.7), 0 0 100px rgba(244, 114, 182, 0.4)'
            : '0 0 35px rgba(254, 240, 138, 0.4)',
          transition: 'all 2s ease',
          pointerEvents: 'none',
        }}
      >
        {/* Soft Moon craters */}
        <div
          style={{
            position: 'absolute',
            top: '25px',
            left: '30px',
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            background: 'rgba(217, 119, 6, 0.15)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '55px',
            left: '45px',
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            background: 'rgba(217, 119, 6, 0.12)',
          }}
        />
      </div>

      <div className="container-custom" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '40px' }}
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
            <Flower2 size={14} /> Bidisha's Enchanted Oasis <Flower2 size={14} />
          </span>
          <h2
            className="font-serif text-gradient-rose"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              fontWeight: 700,
              marginTop: '8px',
            }}
          >
            A Romantic Digital Garden 🌷
          </h2>
          <p style={{ color: '#fbcfe8', maxWidth: '600px', margin: '12px auto 0', fontSize: '1.05rem' }}>
            In this quiet corner of the night, a garden waits to bloom just for you.
          </p>
        </motion.div>

        {/* Action Button */}
        {!isBloomed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ marginBottom: '50px' }}
          >
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBloom}
              className="btn-romantic"
              style={{
                fontSize: '1.1rem',
                padding: '16px 38px',
                boxShadow: '0 10px 30px rgba(244, 63, 94, 0.5), 0 0 25px rgba(236, 72, 153, 0.4)',
              }}
            >
              <Flower2 size={20} />
              <span>Make My Garden Bloom 🌸</span>
            </motion.button>
          </motion.div>
        )}

        {/* Revealed Bloom Message */}
        <AnimatePresence>
          {isBloomed && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="glass-panel"
              style={{
                maxWidth: '720px',
                margin: '0 auto 40px',
                padding: '24px 32px',
                borderRadius: '24px',
                border: '1px solid rgba(244, 114, 182, 0.4)',
                background: 'rgba(28, 11, 48, 0.75)',
                boxShadow: '0 15px 40px rgba(0,0,0,0.5), 0 0 30px rgba(244, 114, 182, 0.25)',
              }}
            >
              <p
                className="font-serif"
                style={{
                  fontSize: 'clamp(1.15rem, 2.5vw, 1.4rem)',
                  color: '#ffffff',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                }}
              >
                “Just like these flowers, I hope your life keeps blooming with happiness, confidence, love, and beautiful opportunities.”
              </p>
              <span
                style={{
                  display: 'inline-block',
                  marginTop: '10px',
                  fontSize: '0.88rem',
                  color: '#fbcfe8',
                  fontWeight: 600,
                }}
              >
                (Click on the blooming flowers to make them sparkle! ✨)
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Garden Stage */}
        <div
          style={{
            position: 'relative',
            height: '380px',
            maxWidth: '950px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          {/* Animated Butterflies flying across screen */}
          {isBloomed && (
            <>
              {/* Butterfly 1 */}
              <motion.div
                initial={{ x: -100, y: 200, opacity: 0 }}
                animate={{
                  x: [0, 250, 500, 750, 950],
                  y: [180, 80, 140, 60, 20],
                  opacity: [0, 1, 1, 1, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 14,
                  ease: 'easeInOut',
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  fontSize: '2rem',
                  zIndex: 25,
                  filter: 'drop-shadow(0 0 8px #f472b6)',
                  pointerEvents: 'none',
                }}
              >
                🦋
              </motion.div>

              {/* Butterfly 2 */}
              <motion.div
                initial={{ x: 900, y: 150, opacity: 0 }}
                animate={{
                  x: [800, 550, 300, 50, -50],
                  y: [120, 200, 70, 150, 40],
                  opacity: [0, 1, 1, 1, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 16,
                  delay: 2,
                  ease: 'easeInOut',
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  fontSize: '1.7rem',
                  zIndex: 25,
                  filter: 'drop-shadow(0 0 8px #c084fc)',
                  pointerEvents: 'none',
                }}
              >
                🦋
              </motion.div>
            </>
          )}

          {/* Dancing Fireflies */}
          {isBloomed && (
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 18 }}>
              {[...Array(16)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    x: [
                      (Math.random() - 0.5) * 60,
                      (Math.random() - 0.5) * 120,
                      (Math.random() - 0.5) * 60,
                    ],
                    y: [
                      (Math.random() - 0.5) * 40,
                      (Math.random() - 0.5) * 90,
                      (Math.random() - 0.5) * 40,
                    ],
                    opacity: [0.2, 0.95, 0.2],
                    scale: [0.8, 1.3, 0.8],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3 + (i % 4),
                    delay: i * 0.25,
                    ease: 'easeInOut',
                  }}
                  style={{
                    position: 'absolute',
                    top: `${20 + (i * 5) % 65}%`,
                    left: `${8 + (i * 6.5) % 85}%`,
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: i % 2 === 0 ? '#fef08a' : '#fbcfe8',
                    boxShadow: '0 0 10px #fef08a, 0 0 20px #f59e0b',
                  }}
                />
              ))}
            </div>
          )}

          {/* Blooming Flowers in Garden Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-around',
              width: '100%',
              padding: '0 20px',
              position: 'relative',
              zIndex: 15,
            }}
          >
            {[
              { type: 'rose', color: '#f43f5e', name: 'Velvet Rose', delay: 0.1, height: 210 },
              { type: 'tulip', color: '#c084fc', name: 'Lavender Tulip', delay: 0.3, height: 180 },
              { type: 'rose', color: '#fb7185', name: 'Blush Rose', delay: 0.5, height: 240 },
              { type: 'lotus', color: '#f472b6', name: 'Lotus Blossom', delay: 0.2, height: 195 },
              { type: 'tulip', color: '#f59e0b', name: 'Golden Lily', delay: 0.4, height: 220 },
              { type: 'rose', color: '#e879f9', name: 'Orchid Rose', delay: 0.6, height: 185 },
            ].map((flower, idx) => (
              <motion.div
                key={idx}
                onClick={handleFlowerClick}
                whileHover={{ scale: 1.12, y: -8 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  position: 'relative',
                  userSelect: 'none',
                }}
              >
                {/* Petal Bloom Head */}
                <motion.div
                  initial={{ scale: 0.2, opacity: 0.3 }}
                  animate={
                    isBloomed
                      ? {
                          scale: [0.2, 1.15, 1],
                          opacity: 1,
                        }
                      : { scale: 0.3, opacity: 0.3 }
                  }
                  transition={{ duration: 1.4, delay: flower.delay }}
                  style={{
                    position: 'relative',
                    filter: isBloomed
                      ? `drop-shadow(0 0 14px ${flower.color}90) drop-shadow(0 0 25px ${flower.color}50)`
                      : 'grayscale(70%) opacity(40%)',
                    transition: 'filter 1.5s',
                  }}
                >
                  <svg width="68" height="68" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="14" fill="#fef08a" opacity={isBloomed ? '0.9' : '0.2'} />
                    {/* Flower Petals */}
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, pIdx) => (
                      <ellipse
                        key={pIdx}
                        cx="50"
                        cy="24"
                        rx="12"
                        ry="20"
                        fill={flower.color}
                        transform={`rotate(${angle} 50 50)`}
                        opacity={isBloomed ? '0.92' : '0.4'}
                      />
                    ))}
                    {/* Inner Heart */}
                    <circle cx="50" cy="50" r="10" fill="#ffffff" opacity={isBloomed ? '0.95' : '0.3'} />
                  </svg>

                  {/* Sparkle badge when bloomed */}
                  {isBloomed && (
                    <motion.div
                      animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                      transition={{ repeat: Infinity, duration: 2, delay: idx * 0.3 }}
                      style={{
                        position: 'absolute',
                        top: '-10px',
                        right: '-5px',
                        fontSize: '12px',
                      }}
                    >
                      ✨
                    </motion.div>
                  )}
                </motion.div>

                {/* Stem & Leaves */}
                <div
                  style={{
                    width: '5px',
                    height: `${flower.height - 70}px`,
                    background: isBloomed
                      ? 'linear-gradient(to bottom, #4ade80, #15803d)'
                      : '#1e293b',
                    borderRadius: '3px',
                    position: 'relative',
                    transition: 'background 1.5s',
                  }}
                >
                  {/* Left Leaf */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-16px',
                      top: '40%',
                      width: '18px',
                      height: '10px',
                      background: isBloomed ? '#22c55e' : '#1e293b',
                      borderRadius: '14px 0 14px 0',
                      transform: 'rotate(-25deg)',
                      transition: 'background 1.5s',
                    }}
                  />
                  {/* Right Leaf */}
                  <div
                    style={{
                      position: 'absolute',
                      right: '-16px',
                      top: '60%',
                      width: '18px',
                      height: '10px',
                      background: isBloomed ? '#22c55e' : '#1e293b',
                      borderRadius: '0 14px 0 14px',
                      transform: 'rotate(25deg)',
                      transition: 'background 1.5s',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bioluminescent Ground */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '35px',
              borderRadius: '25px 25px 0 0',
              background: isBloomed
                ? 'linear-gradient(90deg, #581c87, #ec4899, #7e22ce, #db2777)'
                : 'linear-gradient(90deg, #180829, #230c3b, #150624)',
              boxShadow: isBloomed
                ? '0 -8px 40px rgba(244, 114, 182, 0.7), inset 0 2px 10px rgba(255,255,255,0.4)'
                : 'none',
              transition: 'all 2s ease',
              zIndex: 10,
            }}
          />
        </div>
      </div>
    </section>
  );
}
