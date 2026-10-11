import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, Sparkles, Check } from 'lucide-react';
import { romanticAudio } from '../utils/audio';

export default function BirthdayLetter() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  const handleToggleLetter = () => {
    romanticAudio.playMagicHarp();
    setIsLetterOpen(!isLetterOpen);
  };

  return (
    <section
      id="letter"
      style={{
        padding: '110px 20px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container-custom" style={{ maxWidth: '820px', textAlign: 'center' }}>
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
            <Mail size={14} /> Straight From The Soul <Mail size={14} />
          </span>
          <h2
            className="font-serif text-gradient-rose"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              fontWeight: 700,
              marginTop: '8px',
            }}
          >
            A Little Letter for My Bidisha 💖
          </h2>
          <p style={{ color: '#fbcfe8', maxWidth: '580px', margin: '12px auto 0', fontSize: '1.05rem' }}>
            Written with sincere warmth, quiet reverence, and all the love words can carry.
          </p>
        </motion.div>

        {/* The Envelope / Unopened State */}
        {!isLetterOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-panel"
            style={{
              padding: '50px 30px',
              borderRadius: '28px',
              maxWidth: '560px',
              margin: '0 auto',
              cursor: 'pointer',
              border: '2px dashed rgba(244, 114, 182, 0.4)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
            }}
            onClick={handleToggleLetter}
          >
            <div
              style={{
                width: '74px',
                height: '74px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #f43f5e, #ec4899)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 25px rgba(244, 63, 94, 0.5)',
              }}
            >
              <Mail size={36} color="#ffffff" />
            </div>

            <div style={{ textAlign: 'center' }}>
              <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '8px' }}>
                A Sealed Note Waiting For You
              </h3>
              <p style={{ color: '#fbcfe8', fontSize: '0.95rem' }}>
                Click below to unfold the letter written just for your eyes.
              </p>
            </div>

            <button className="btn-romantic" style={{ marginTop: '10px' }}>
              <Sparkles size={18} />
              <span>Read Your Birthday Letter 💌</span>
            </button>
          </motion.div>
        )}

        {/* The Unfolded Letter Paper */}
        <AnimatePresence>
          {isLetterOpen && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{
                background: 'linear-gradient(170deg, #fffafc 0%, #fff1f2 50%, #ffe4e6 100%)',
                borderRadius: '24px',
                padding: 'clamp(32px, 6vw, 65px)',
                boxShadow: '0 25px 65px rgba(0,0,0,0.6), 0 0 40px rgba(244, 114, 182, 0.35)',
                border: '1px solid rgba(251, 113, 133, 0.3)',
                color: '#4c0519',
                textAlign: 'left',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Delicate parchment watermark / corner seal */}
              <div
                style={{
                  position: 'absolute',
                  top: '25px',
                  right: '25px',
                  opacity: 0.15,
                  fontSize: '3rem',
                  pointerEvents: 'none',
                }}
              >
                🌹
              </div>

              {/* Salutation */}
              <div style={{ marginBottom: '28px', borderBottom: '1px solid rgba(244, 63, 94, 0.15)', paddingBottom: '18px' }}>
                <span
                  className="font-script"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 2.7rem)',
                    fontWeight: 700,
                    color: '#9f1239',
                    display: 'block',
                  }}
                >
                  Happy Birthday, Bidisha! ❤️
                </span>
                <span style={{ fontSize: '0.85rem', color: '#be123c', fontWeight: 600, letterSpacing: '0.04em' }}>
                  A personal note on your most special day
                </span>
              </div>

              {/* Letter Paragraphs */}
              <div
                className="font-serif"
                style={{
                  fontSize: 'clamp(1.05rem, 2.2vw, 1.18rem)',
                  lineHeight: 1.85,
                  color: '#4c0519',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                <p>
                  Today is all about you, your beautiful smile, your dreams, and all the wonderful things that make you who you are.
                </p>

                <p>
                  I hope this new chapter of your life brings you endless happiness, peaceful days, unexpected blessings, and countless reasons to smile.
                </p>

                <p>
                  Never forget how special you are. You deserve to be loved, appreciated, respected, and celebrated not just today, but every single day.
                </p>

                <p>
                  If I could make one birthday wish for you, it would be that life always gives you reasons to smile, that your dreams keep getting closer, and that even on difficult days, you never forget your own worth.
                </p>

                <p>
                  Keep being your beautiful self, Bidisha. The world is more beautiful with you in it.
                </p>

                <p>
                  Today, let the stars shine a little brighter, the flowers bloom a little more beautifully, and every little moment remind you how precious this day is.
                </p>

                <p style={{ fontWeight: 600, color: '#9f1239', fontSize: '1.25rem' }}>
                  Happy Birthday once again, my special girl. 🎂🌷❤️
                </p>
              </div>

              {/* Slow reveal closing & handwritten signature */}
              <div
                style={{
                  marginTop: '45px',
                  paddingTop: '25px',
                  borderTop: '1px solid rgba(244, 63, 94, 0.2)',
                  textAlign: 'right',
                }}
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  style={{
                    fontSize: '1.05rem',
                    color: '#9f1239',
                    fontStyle: 'italic',
                    marginBottom: '12px',
                    fontFamily: 'var(--font-serif)',
                  }}
                >
                  With all the warmth and love this little website could hold… 💗
                </motion.p>

                {/* Animated Handwritten Signature */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="font-script"
                  style={{
                    fontSize: '2.4rem',
                    fontWeight: 700,
                    color: '#be123c',
                    letterSpacing: '0.02em',
                  }}
                >
                  Forever wishing you happiness ✨
                </motion.div>
              </div>

              {/* Close / Refold Button */}
              <div style={{ marginTop: '30px', textAlign: 'center' }}>
                <button
                  onClick={handleToggleLetter}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(190, 18, 60, 0.3)',
                    color: '#9f1239',
                    padding: '8px 20px',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    transition: 'all 0.2s',
                  }}
                >
                  Fold Letter Back ✉️
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
