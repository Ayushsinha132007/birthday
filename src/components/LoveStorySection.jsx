import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smile, Heart, Sparkles, Star } from 'lucide-react';
import { romanticAudio } from '../utils/audio';

export default function LoveStorySection() {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: 'A Thousand Smiles 😊',
      icon: Smile,
      color: '#f59e0b',
      accentBg: 'rgba(245, 158, 11, 0.15)',
      quote: 'I wish I could give you a thousand reasons to smile, even on your hardest days.',
      detail: 'Your smile has this effortless warmth that lights up everything around you. Never stop smiling, Bidisha.',
    },
    {
      id: 2,
      title: 'Endless Love ❤️',
      icon: Heart,
      color: '#f43f5e',
      accentBg: 'rgba(244, 63, 94, 0.15)',
      quote: 'I wish you could see yourself through my eyes, just to understand how special you are.',
      detail: 'To me, you are pure magic, grace, kindness, and someone truly irreplaceable in every way.',
    },
    {
      id: 3,
      title: 'Beautiful Dreams ✨',
      icon: Sparkles,
      color: '#c084fc',
      accentBg: 'rgba(192, 132, 252, 0.15)',
      quote: 'I wish every dream you quietly keep in your heart finds its way to reality.',
      detail: 'You have big, beautiful ambitions and the sweetest soul. The universe is rooting for you, and so am I.',
    },
  ];

  const handleCardClick = (id) => {
    romanticAudio.playHeartbeat();
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <section
      id="story"
      style={{
        padding: '110px 20px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container-custom">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
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
            <Sparkles size={14} /> From The Depths of My Heart <Sparkles size={14} />
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
            If I Could Give You One Thing… 🌹
          </h2>
          <p
            style={{
              color: '#fbcfe8',
              maxWidth: '620px',
              margin: '12px auto 0',
              fontSize: '1.05rem',
            }}
          >
            Three quiet wishes I carry for you every single day.
          </p>
        </motion.div>

        {/* 3 Interactive Glassmorphism Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const isSelected = activeCard === card.id;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.18 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => handleCardClick(card.id)}
                className="glass-panel"
                style={{
                  padding: '36px 28px',
                  borderRadius: '26px',
                  cursor: 'pointer',
                  border: isSelected
                    ? `2px solid ${card.color}`
                    : '1px solid rgba(244, 114, 182, 0.22)',
                  boxShadow: isSelected
                    ? `0 18px 45px rgba(0,0,0,0.6), 0 0 30px ${card.color}40`
                    : '0 12px 35px rgba(0,0,0,0.35)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '340px',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                }}
              >
                {/* Top Badge & Icon */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '24px',
                    }}
                  >
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '18px',
                        background: card.accentBg,
                        border: `1px solid ${card.color}50`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 4px 18px ${card.color}35`,
                      }}
                    >
                      <Icon size={28} color={card.color} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: '#fbcfe8',
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                      }}
                    >
                      Wish 0{card.id}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: '1.45rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '16px',
                    }}
                  >
                    {card.title}
                  </h3>

                  {/* Main Quote */}
                  <p
                    className="font-serif"
                    style={{
                      fontSize: '1.15rem',
                      color: '#ffe4e6',
                      lineHeight: 1.6,
                      fontStyle: 'italic',
                      marginBottom: '16px',
                    }}
                  >
                    “{card.quote}”
                  </p>
                </div>

                {/* Additional heartfelt detail revealed on tap/hover */}
                <div>
                  <div
                    style={{
                      marginTop: '16px',
                      paddingTop: '16px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#fbcfe8',
                      fontSize: '0.92rem',
                      lineHeight: 1.5,
                      opacity: isSelected ? 1 : 0.8,
                    }}
                  >
                    {card.detail}
                  </div>

                  <div
                    style={{
                      marginTop: '14px',
                      fontSize: '0.78rem',
                      color: card.color,
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <Star size={12} fill={card.color} />
                    <span>{isSelected ? 'Tapped with love' : 'Tap to feel closer'}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
