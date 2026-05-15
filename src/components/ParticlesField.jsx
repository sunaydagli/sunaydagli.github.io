import { useEffect, useRef } from 'react';

/** Network-style particles: subtle links + gentle mouse repulsion. Slow free drift + slightly larger dots. */
const MAX_PARTICLES = 122;
const MIN_PARTICLES = 102;
const LINK_DIST = 118;
const MOUSE_RADIUS = 165;
const MOUSE_STRENGTH = 1.05;
const DAMP = 0.966;
/** Base speed for smooth wandering (radians/frame drift on heading). */
const WANDER_TURN = 0.028;
/** Forward cruise impulse so particles drift slowly across the canvas. */
const CRUISE = 0.095;
/** Small jitter layered on top of cruise. */
const JITTER = 0.022;

function makeParticles(w, h, n) {
  return Array.from({ length: n }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * CRUISE,
    vy: (Math.random() - 0.5) * CRUISE,
    /** Heading for smooth curved paths */
    heading: Math.random() * Math.PI * 2,
    /** Radius: a bit larger than before */
    r: Math.random() * 1.45 + 1.35,
    accent: Math.random() < 0.12,
  }));
}

export function ParticlesField() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9e9, y: -9e9 });
  const dimsRef = useRef({ w: 0, h: 0, dpr: 1 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    let particles = [];
    let rafId = 0;

    const countForSize = (w, h) =>
      Math.max(MIN_PARTICLES, Math.min(MAX_PARTICLES, Math.floor((w * h) / 48000)));

    const resize = () => {
      const dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      dimsRef.current = { w, h, dpr };
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = makeParticles(w, h, countForSize(w, h));
    };

    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onTouch = (e) => {
      const t = e.touches[0];
      if (t) mouseRef.current = { x: t.clientX, y: t.clientY };
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('touchmove', onTouch, { passive: true });

    const tick = () => {
      const { w, h } = dimsRef.current;
      if (w < 1 || h < 1) {
        rafId = requestAnimationFrame(tick);
        return;
      }

      const { x: mx, y: my } = mouseRef.current;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        if (dist < MOUSE_RADIUS) {
          const push = ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) * MOUSE_STRENGTH;
          p.vx += (dx / dist) * push * 0.45;
          p.vy += (dy / dist) * push * 0.45;
        }

        p.heading += (Math.random() - 0.5) * WANDER_TURN;
        p.vx += Math.cos(p.heading) * CRUISE * 0.14;
        p.vy += Math.sin(p.heading) * CRUISE * 0.14;
        p.vx += (Math.random() - 0.5) * JITTER;
        p.vy += (Math.random() - 0.5) * JITTER;

        p.vx *= DAMP;
        p.vy *= DAMP;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -20) p.x = w + 20;
        else if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        else if (p.y > h + 20) p.y = -20;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK_DIST && d > 0) {
            const t = 1 - d / LINK_DIST;
            const alpha = t * t * 0.14;
            ctx.strokeStyle = `rgba(217, 227, 218, ${alpha})`;
            ctx.lineWidth = 0.55;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.accent ? 'rgba(167, 190, 169, 0.38)' : 'rgba(217, 227, 218, 0.32)';
        ctx.fill();
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onTouch);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}
