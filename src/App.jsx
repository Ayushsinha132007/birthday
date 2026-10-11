import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BackgroundStars from './components/BackgroundStars';
import RomanticCursor from './components/RomanticCursor';
import AudioPlayer from './components/AudioPlayer';
import Navbar from './components/Navbar';
import OpeningEnvelope from './components/OpeningEnvelope';
import HeroSection from './components/HeroSection';
import InteractiveCake from './components/InteractiveCake';
import LoveStorySection from './components/LoveStorySection';
import DigitalGarden from './components/DigitalGarden';
import BirthdayLetter from './components/BirthdayLetter';
import SkyOfWishes from './components/SkyOfWishes';
import Footer from './components/Footer';

export default function App() {
  const [hasOpenedEnvelope, setHasOpenedEnvelope] = useState(false);
  const [isAudioUnlocked, setIsAudioUnlocked] = useState(false);

  const handleEnvelopeOpened = () => {
    setHasOpenedEnvelope(true);
    setIsAudioUnlocked(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReplayAll = () => {
    setHasOpenedEnvelope(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
      {/* Dynamic Starry Canvas Background */}
      <BackgroundStars />

      {/* Romantic Fairy Cursor Trail */}
      <RomanticCursor />

      {/* Persistent Audio Player */}
      <AudioPlayer isAutoplayUnlocked={isAudioUnlocked} />

      {/* Opening Envelope Screen */}
      <AnimatePresence>
        {!hasOpenedEnvelope && (
          <motion.div
            key="envelope-screen"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8 }}
          >
            <OpeningEnvelope onOpenComplete={handleEnvelopeOpened} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Experience */}
      {hasOpenedEnvelope && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          {/* Top Navbar */}
          <Navbar />

          {/* Section 1: Birthday Hero */}
          <HeroSection
            onExploreSurprise={() => {
              const el = document.getElementById('cake');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onExploreStory={() => {
              const el = document.getElementById('story');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* Section 2: Interactive Birthday Cake */}
          <InteractiveCake />

          {/* Section 3: Love Story ("If I Could Give You One Thing...") */}
          <LoveStorySection />

          {/* Section 4: Romantic Digital Garden */}
          <DigitalGarden />

          {/* Section 5: The Birthday Letter */}
          <BirthdayLetter />

          {/* Section 6: Final Surprise (A Sky Full of Wishes) */}
          <SkyOfWishes onReplay={handleReplayAll} />

          {/* Romantic Footer */}
          <Footer />
        </motion.main>
      )}
    </div>
  );
}
