import React, { useEffect, useState } from 'react';

export default function RomanticCursor() {
  const [particles, setParticles] = useState([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    let lastTime = 0;
    const handleMouseMove = (e) => {
      const now = performance.now();
      if (now - lastTime < 35) return; // throttle
      lastTime = now;

      const newParticle = {
        id: Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 6 + 4,
        color: Math.random() > 0.5 ? '#f472b6' : Math.random() > 0.5 ? '#c084fc' : '#fef08a',
        symbol: Math.random() > 0.7 ? '✨' : Math.random() > 0.5 ? '🌸' : '•',
      };

      setParticles((prev) => [...prev.slice(-18), newParticle]);
    };

    const handleClick = (e) => {
      // Burst of tiny hearts on click
      const burst = Array.from({ length: 6 }).map((_, i) => ({
        id: Math.random(),
        x: e.clientX + (Math.random() - 0.5) * 40,
        y: e.clientY + (Math.random() - 0.5) * 40,
        size: 14,
        color: '#fb7185',
        symbol: '💖',
      }));
      setParticles((prev) => [...prev.slice(-15), ...burst]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    const interval = setInterval(() => {
      setParticles((prev) => (prev.length > 0 ? prev.slice(1) : prev));
    }, 120);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      clearInterval(interval);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
        overflow: 'hidden',
      }}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}px`,
            top: `${p.y}px`,
            fontSize: `${p.size}px`,
            color: p.color,
            transform: 'translate(-50%, -50%)',
            opacity: 0.8,
            transition: 'all 0.6s ease-out',
            filter: 'drop-shadow(0 0 6px rgba(244, 114, 182, 0.8))',
            pointerEvents: 'none',
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  );
}
