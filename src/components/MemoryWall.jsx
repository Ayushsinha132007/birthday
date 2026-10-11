import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Heart, Sparkles, X, Upload, RefreshCw, Image } from 'lucide-react';
import { romanticAudio } from '../utils/audio';

const defaultMemories = [
  {
    id: 1,
    title: 'Starlit Evenings 🌌',
    caption: 'Every time we look at the night sky, I remember how rare and radiant you are.',
    date: 'A Golden Memory',
    rotation: -2.5,
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 50%, #f472b6 100%)',
    icon: '✨',
    customImage: null,
  },
  {
    id: 2,
    title: 'Laughter & Coffee Cups ☕',
    caption: 'The way your eyes crinkle when you laugh so hard you forget everything else.',
    date: 'Sweet Moments',
    rotation: 2.8,
    gradient: 'linear-gradient(135deg, #4c0519 0%, #db2777 50%, #fbcfe8 100%)',
    icon: '🌸',
    customImage: null,
  },
  {
    id: 3,
    title: 'Sunset Walks & Whispers 🌅',
    caption: 'Watching the sky turn shades of rose and lavender, matching the peace you bring me.',
    date: 'Precious Walks',
    rotation: -1.8,
    gradient: 'linear-gradient(135deg, #3b0764 0%, #9333ea 50%, #fb7185 100%)',
    icon: '🌇',
    customImage: null,
  },
  {
    id: 4,
    title: 'Your Heartfelt Smile 💖',
    caption: 'That effortless smile of yours that has made bad days disappear like magic.',
    date: 'Everyday Bliss',
    rotation: 2.2,
    gradient: 'linear-gradient(135deg, #1e293b 0%, #6366f1 50%, #ec4899 100%)',
    icon: '💫',
    customImage: null,
  },
  {
    id: 5,
    title: 'Quiet Cozy Moments 🧸',
    caption: 'No words needed, just quiet warmth, listening to you talk about your dreams.',
    date: 'Cozy Chapters',
    rotation: -2.2,
    gradient: 'linear-gradient(135deg, #701a75 0%, #d946ef 50%, #fed7aa 100%)',
    icon: '🌷',
    customImage: null,
  },
  {
    id: 6,
    title: 'The Road Ahead ✨',
    caption: 'Excited for all the dreams you will chase, and cheering for you every step of the way.',
    date: 'Forever Ahead',
    rotation: 1.5,
    gradient: 'linear-gradient(135deg, #0f172a 0%, #38bdf8 50%, #f43f5e 100%)',
    icon: '🌟',
    customImage: null,
  },
];

export default function MemoryWall() {
  const [memories, setMemories] = useState(defaultMemories);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showEmptyFallback, setShowEmptyFallback] = useState(false);

  // Load custom photos from localStorage if uploaded
  useEffect(() => {
    try {
      const saved = localStorage.getItem('bidisha_birthday_photos');
      if (saved) {
        const parsed = JSON.parse(saved);
        setMemories(parsed);
      }
    } catch (e) {
      console.log('Local storage read fallback', e);
    }
  }, []);

  const handleOpenPhoto = (item) => {
    romanticAudio.playHeartbeat();
    setSelectedPhoto(item);
  };

  const handleFileUpload = (e, memoryId) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      const updated = memories.map((m) =>
        m.id === memoryId ? { ...m, customImage: dataUrl } : m
      );
      setMemories(updated);
      try {
        localStorage.setItem('bidisha_birthday_photos', JSON.stringify(updated));
      } catch (err) {
        // quota exceeded fallback
      }
      if (selectedPhoto && selectedPhoto.id === memoryId) {
        setSelectedPhoto({ ...selectedPhoto, customImage: dataUrl });
      }
      romanticAudio.playWishChimes();
    };
    reader.readAsDataURL(file);
  };

  const handleResetPhotos = () => {
    setMemories(defaultMemories);
    localStorage.removeItem('bidisha_birthday_photos');
  };

  return (
    <section
      id="memories"
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
          style={{ textAlign: 'center', marginBottom: '50px' }}
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
            <Camera size={14} /> Cherished Polaroids <Camera size={14} />
          </span>
          <h2
            className="font-serif text-gradient-rose"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              fontWeight: 700,
              marginTop: '8px',
            }}
          >
            Little Moments, Beautiful Memories ✨
          </h2>
          <p style={{ color: '#fbcfe8', maxWidth: '620px', margin: '12px auto 0', fontSize: '1.05rem' }}>
            A gallery of polaroids honoring our journey. Tap any photo to enlarge it or add your personal memory!
          </p>

          {/* Toggle between Memories & Empty Frame Fallback mode */}
          <div
            style={{
              marginTop: '20px',
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={() => setShowEmptyFallback(!showEmptyFallback)}
              style={{
                fontSize: '0.82rem',
                padding: '6px 16px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(244, 114, 182, 0.3)',
                color: '#fbcfe8',
                cursor: 'pointer',
              }}
            >
              {showEmptyFallback ? 'Show Polaroid Gallery 🖼️' : 'Simulate Empty Gallery Fallback 🎨'}
            </button>
            <button
              onClick={handleResetPhotos}
              style={{
                fontSize: '0.82rem',
                padding: '6px 16px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(244, 114, 182, 0.3)',
                color: '#fbcfe8',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              <RefreshCw size={12} />
              <span>Reset to Artistic Placeholders</span>
            </button>
          </div>
        </motion.div>

        {/* Fallback Screen if No Photos Mode */}
        {showEmptyFallback ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-panel"
            style={{
              maxWidth: '650px',
              margin: '0 auto',
              padding: '60px 30px',
              textAlign: 'center',
              borderRadius: '30px',
              border: '1px solid rgba(244, 114, 182, 0.4)',
            }}
          >
            <div
              style={{
                fontSize: '4.5rem',
                marginBottom: '16px',
                filter: 'drop-shadow(0 0 20px rgba(244, 114, 182, 0.8))',
              }}
              className="animate-pulse-heart"
            >
              🖼️✨
            </div>
            <h3
              className="font-script glow-title"
              style={{
                fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                color: '#ffffff',
                marginBottom: '12px',
              }}
            >
              Some memories are too beautiful to fit inside a frame. 💕
            </h3>
            <p style={{ color: '#fbcfe8', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto' }}>
              The most magical moments with you, Bidisha, live forever in our smiles, our late-night conversations, and the warmth in our hearts.
            </p>
          </motion.div>
        ) : (
          /* Polaroid Grid */
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '35px',
              maxWidth: '1100px',
              margin: '0 auto',
            }}
          >
            {memories.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotate: 0,
                  zIndex: 20,
                  boxShadow: '0 25px 50px rgba(0,0,0,0.7), 0 0 30px rgba(244, 114, 182, 0.4)',
                }}
                onClick={() => handleOpenPhoto(item)}
                style={{
                  background: '#ffffff',
                  padding: '16px 16px 24px',
                  borderRadius: '12px',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
                  cursor: 'pointer',
                  transform: `rotate(${item.rotation}deg)`,
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Washi Tape Accent */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '70px',
                    height: '22px',
                    background: 'rgba(244, 114, 182, 0.6)',
                    backdropFilter: 'blur(4px)',
                    border: '1px dashed rgba(255, 255, 255, 0.5)',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                    zIndex: 5,
                  }}
                />

                {/* Photo Display / Placeholder Artwork */}
                <div
                  style={{
                    width: '100%',
                    height: '240px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    position: 'relative',
                    background: item.customImage ? '#000' : item.gradient,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'inset 0 0 20px rgba(0,0,0,0.2)',
                  }}
                >
                  {item.customImage ? (
                    <img
                      src={item.customImage}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <div style={{ textAlign: 'center', padding: '20px', color: '#ffffff' }}>
                      <span style={{ fontSize: '3rem', display: 'block', marginBottom: '8px' }}>
                        {item.icon}
                      </span>
                      <span
                        style={{
                          fontSize: '0.78rem',
                          background: 'rgba(0, 0, 0, 0.45)',
                          padding: '4px 10px',
                          borderRadius: '9999px',
                          letterSpacing: '0.04em',
                          fontWeight: 600,
                        }}
                      >
                        Photo Placeholder
                      </span>
                    </div>
                  )}

                  {/* Corner Heart */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      background: 'rgba(255, 255, 255, 0.85)',
                      borderRadius: '50%',
                      padding: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Heart size={14} color="#f43f5e" fill="#f43f5e" />
                  </div>
                </div>

                {/* Polaroid Caption & Details */}
                <div style={{ marginTop: '14px', textAlign: 'left' }}>
                  <h4
                    className="font-script"
                    style={{
                      fontSize: '1.45rem',
                      color: '#1e1b4b',
                      fontWeight: 700,
                      lineHeight: 1.2,
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.82rem',
                      color: '#64748b',
                      marginTop: '4px',
                      lineHeight: 1.4,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {item.caption}
                  </p>
                  <div
                    style={{
                      marginTop: '8px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.75rem',
                      color: '#94a3b8',
                      fontWeight: 500,
                    }}
                  >
                    <span>{item.date}</span>
                    <span style={{ color: '#ec4899', fontWeight: 600 }}>Tap to view 🔍</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Modal for Clicked Photo */}
        <AnimatePresence>
          {selectedPhoto && (
            <div
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 100,
                background: 'rgba(9, 3, 20, 0.85)',
                backdropFilter: 'blur(16px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
              }}
              onClick={() => setSelectedPhoto(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-panel"
                style={{
                  maxWidth: '560px',
                  width: '100%',
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '24px',
                  boxShadow: '0 30px 70px rgba(0,0,0,0.7)',
                  color: '#1e1b4b',
                  position: 'relative',
                }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPhoto(null)}
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(0, 0, 0, 0.08)',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 20,
                  }}
                >
                  <X size={18} color="#334155" />
                </button>

                {/* Image View */}
                <div
                  style={{
                    width: '100%',
                    height: '300px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    background: selectedPhoto.customImage ? '#000' : selectedPhoto.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  {selectedPhoto.customImage ? (
                    <img
                      src={selectedPhoto.customImage}
                      alt={selectedPhoto.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <div style={{ textAlign: 'center', color: '#fff', padding: '20px' }}>
                      <span style={{ fontSize: '4.5rem', display: 'block', marginBottom: '8px' }}>
                        {selectedPhoto.icon}
                      </span>
                      <span
                        style={{
                          fontSize: '0.85rem',
                          background: 'rgba(0,0,0,0.5)',
                          padding: '6px 14px',
                          borderRadius: '9999px',
                          fontWeight: 600,
                        }}
                      >
                        Artistic Memory Placeholder
                      </span>
                    </div>
                  )}
                </div>

                {/* Memory Text */}
                <div style={{ marginTop: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 className="font-script" style={{ fontSize: '2rem', color: '#9f1239' }}>
                      {selectedPhoto.title}
                    </h3>
                    <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>
                      {selectedPhoto.date}
                    </span>
                  </div>

                  <p
                    className="font-serif"
                    style={{
                      fontSize: '1.1rem',
                      lineHeight: 1.6,
                      color: '#334155',
                      marginTop: '10px',
                      fontStyle: 'italic',
                    }}
                  >
                    “{selectedPhoto.caption}”
                  </p>

                  {/* Replace/Upload Photo helper */}
                  <div
                    style={{
                      marginTop: '24px',
                      paddingTop: '16px',
                      borderTop: '1px solid #f1f5f9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '12px',
                    }}
                  >
                    <label
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'linear-gradient(135deg, #f43f5e, #ec4899)',
                        color: '#fff',
                        padding: '10px 20px',
                        borderRadius: '9999px',
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(244, 63, 94, 0.4)',
                      }}
                    >
                      <Upload size={16} />
                      <span>{selectedPhoto.customImage ? 'Change Photo' : 'Upload Real Photo Here 📷'}</span>
                      <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={(e) => handleFileUpload(e, selectedPhoto.id)}
                      />
                    </label>

                    <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                      (Stored right on your device)
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
