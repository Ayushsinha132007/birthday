import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Gift, BookOpen, Flower2, Mail, Stars } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['hero', 'cake', 'story', 'garden', 'letter', 'sky'];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'cake', label: 'Wish & Cake', icon: Gift },
    { id: 'story', label: 'Our Story', icon: BookOpen },
    { id: 'garden', label: 'Secret Garden', icon: Flower2 },
    { id: 'letter', label: 'Her Letter', icon: Mail },
    { id: 'sky', label: 'Grand Finale', icon: Stars },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 40,
        width: '92%',
        maxWidth: '1020px',
        transition: 'all 0.3s ease',
      }}
    >
      <nav
        className="glass-panel"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 24px',
          borderRadius: '9999px',
          background: scrolled ? 'rgba(15, 6, 30, 0.82)' : 'rgba(25, 12, 45, 0.45)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(244, 114, 182, 0.25)',
          boxShadow: scrolled
            ? '0 10px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(244, 114, 182, 0.2)'
            : '0 6px 20px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Logo / Title */}
        <div
          onClick={() => scrollTo('hero')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            textDecoration: 'none',
          }}
        >
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #f43f5e, #ec4899)',
              boxShadow: '0 0 12px rgba(244, 63, 94, 0.6)',
            }}
          >
            <Heart size={16} color="#ffffff" fill="#ffffff" />
          </span>
          <span
            className="font-script"
            style={{
              fontSize: '1.45rem',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #ffffff 0%, #fbcfe8 50%, #f472b6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '0.02em',
            }}
          >
            Bidisha's Day ✨
          </span>
        </div>

        {/* Navigation Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
          className="hidden-mobile-scrollbar"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 14px',
                  borderRadius: '9999px',
                  border: 'none',
                  background: isActive ? 'rgba(244, 114, 182, 0.22)' : 'transparent',
                  color: isActive ? '#ffffff' : '#fbcfe8',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  whiteSpace: 'nowrap',
                  borderBottom: isActive ? '1px solid rgba(244, 114, 182, 0.6)' : '1px solid transparent',
                }}
              >
                <Icon size={14} color={isActive ? '#f472b6' : '#fda4af'} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
