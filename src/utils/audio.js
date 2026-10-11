// Web Audio API Romantic Synthesizer & Sound Effects Engine
// 100% self-contained, no external mp3 assets needed, no CORS issues, works offline!

class RomanticAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlayingMusic = false;
    this.musicTimer = null;
    this.isMuted = false;
    this.volume = 0.35;
    this.masterGain = null;
    this.musicGain = null;
    this.sfxGain = null;
    this.currentNoteIndex = 0;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);

        this.musicGain = this.ctx.createGain();
        this.musicGain.gain.setValueAtTime(0.3, this.ctx.currentTime);
        this.musicGain.connect(this.masterGain);

        this.sfxGain = this.ctx.createGain();
        this.sfxGain.gain.setValueAtTime(0.5, this.ctx.currentTime);
        this.sfxGain.connect(this.masterGain);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime, 0.05);
    }
    return this.isMuted;
  }

  // Play a soft bell/celesta note
  playCelestaNote(freq, duration = 1.2, timeOffset = 0, gainLevel = 0.25) {
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime + timeOffset;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Filter to give warm, dreamy, romantic sound
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, now);

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, now);

    // Subtle overtone for music-box shimmer
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 2.01, now);

    noteGain.gain.setValueAtTime(0, now);
    noteGain.gain.linearRampToValueAtTime(gainLevel, now + 0.03);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.musicGain || this.masterGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration);
    osc2.stop(now + duration);
  }

  // Romantic music chord progression: D - F#m - G - A (Romantic Lofi / Ghibli feel)
  startMusic() {
    this.init();
    if (this.isPlayingMusic) return;
    this.isPlayingMusic = true;

    // Frequencies for a romantic lullaby (A3 to A5 scale)
    const melodyPattern = [
      // Measure 1: D Major (D4, F#4, A4, D5)
      { f: 293.66, d: 1.4 }, { f: 369.99, d: 1.2 }, { f: 440.00, d: 1.4 }, { f: 587.33, d: 2.0 },
      { f: 440.00, d: 1.0 }, { f: 369.99, d: 1.2 },
      // Measure 2: B Minor (B3, D4, F#4, B4)
      { f: 246.94, d: 1.4 }, { f: 293.66, d: 1.2 }, { f: 369.99, d: 1.4 }, { f: 493.88, d: 2.0 },
      { f: 440.00, d: 1.0 }, { f: 369.99, d: 1.2 },
      // Measure 3: G Major 7 (G3, B3, D4, F#4, G4)
      { f: 196.00, d: 1.4 }, { f: 246.94, d: 1.2 }, { f: 293.66, d: 1.4 }, { f: 369.99, d: 1.5 },
      { f: 392.00, d: 2.2 }, { f: 293.66, d: 1.2 },
      // Measure 4: A 7 sus4 resolving to A (A3, E4, G4, C#5)
      { f: 220.00, d: 1.4 }, { f: 329.63, d: 1.2 }, { f: 392.00, d: 1.4 }, { f: 554.37, d: 2.4 },
      { f: 440.00, d: 1.2 }, { f: 369.99, d: 1.5 },
    ];

    let step = 0;
    const playNext = () => {
      if (!this.isPlayingMusic) return;
      const note = melodyPattern[step % melodyPattern.length];
      
      // Play bass pedal note every 6 beats
      if (step % 6 === 0) {
        const bassFreq = note.f / 2;
        this.playCelestaNote(bassFreq, 3.0, 0, 0.18);
      }

      this.playCelestaNote(note.f, note.d, 0, 0.22);
      step++;
      
      const delay = 480; // tempo around 75 bpm (romantic and slow)
      this.musicTimer = setTimeout(playNext, delay);
    };

    playNext();
  }

  stopMusic() {
    this.isPlayingMusic = false;
    if (this.musicTimer) {
      clearTimeout(this.musicTimer);
      this.musicTimer = null;
    }
  }

  toggleMusic() {
    if (this.isPlayingMusic) {
      this.stopMusic();
      return false;
    } else {
      this.startMusic();
      return true;
    }
  }

  // --- SOUND EFFECTS ---

  // Magical Harp / Chime Glissando (Envelope opening / Garden blooming)
  playMagicHarp() {
    this.init();
    if (!this.ctx || this.isMuted) return;

    const notes = [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50, 1174.66, 1318.51, 1567.98];
    notes.forEach((freq, idx) => {
      const timeOffset = idx * 0.06;
      this.playCelestaNote(freq, 1.0, timeOffset, 0.2);
    });
  }

  // Soft Heartbeat sound
  playHeartbeat() {
    this.init();
    if (!this.ctx || this.isMuted) return;

    const playThump = (timeOffset) => {
      const now = this.ctx.currentTime + timeOffset;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(80, now);
      osc.frequency.exponentialRampToValueAtTime(40, now + 0.15);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      osc.connect(gain);
      gain.connect(this.sfxGain || this.masterGain);

      osc.start(now);
      osc.stop(now + 0.15);
    };

    playThump(0);
    playThump(0.2);
  }

  // Candle blowing whoosh
  playCandleBlow() {
    this.init();
    if (!this.ctx || this.isMuted) return;

    const now = this.ctx.currentTime;
    // Generate pink noise for soft gentle breath
    const bufferSize = this.ctx.sampleRate * 0.8;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99 * b0 + white * 0.05;
      b1 = 0.96 * b1 + white * 0.1;
      b2 = 0.86 * b2 + white * 0.2;
      data[i] = (b0 + b1 + b2) * 0.4;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(600, now);
    filter.frequency.exponentialRampToValueAtTime(300, now + 0.7);
    filter.Q.value = 1.8;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.3, now + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain || this.masterGain);

    noise.start(now);
    noise.stop(now + 0.8);
  }

  // Wish chime / bells
  playWishChimes() {
    this.init();
    if (!this.ctx || this.isMuted) return;

    const notes = [659.25, 783.99, 987.77, 1318.51, 1567.98];
    notes.forEach((freq, idx) => {
      this.playCelestaNote(freq, 2.0, idx * 0.08, 0.25);
    });
  }

  // Firework boom & crackle
  playFirework() {
    this.init();
    if (!this.ctx || this.isMuted) return;

    const now = this.ctx.currentTime;
    // Low thump
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + 0.4);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    osc.connect(gain);
    gain.connect(this.sfxGain || this.masterGain);
    osc.start(now);
    osc.stop(now + 0.4);

    // Sparkles
    [1200, 1500, 1800, 2100].forEach((freq, idx) => {
      this.playCelestaNote(freq, 0.4, 0.15 + idx * 0.05, 0.08);
    });
  }
}

export const romanticAudio = new RomanticAudioEngine();
