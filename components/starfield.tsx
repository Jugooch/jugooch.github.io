"use client";

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  phase: number;
  speed: number;
}

/**
 * Canvas starfield sized to its parent (which must be `position: relative`).
 * Pauses offscreen and when the tab is hidden; draws a single static frame
 * when the visitor prefers reduced motion.
 */
export function Starfield({ density = 0.00018 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !container || !ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let stars: Star[] = [];
    let width = 0;
    let height = 0;
    let frameId: number | null = null;
    let visible = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(width * height * density);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.4 + 0.3,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 6 + 2,
      }));
      draw(performance.now(), 0);
    };

    const draw = (now: number, dt: number) => {
      ctx.clearRect(0, 0, width, height);
      for (const star of stars) {
        star.y = (star.y + star.speed * dt) % height;
        const twinkle = Math.sin(now * 0.001 + star.phase) * 0.35 + 0.65;
        ctx.globalAlpha = twinkle;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    let last = performance.now();
    const tick = (now: number) => {
      // Elapsed-time based so speed is the same at any refresh rate
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      draw(now, dt);
      frameId = requestAnimationFrame(tick);
    };

    const stop = () => {
      if (frameId !== null) cancelAnimationFrame(frameId);
      frameId = null;
    };

    const start = () => {
      if (frameId !== null || !visible || document.hidden || reducedMotion.matches) return;
      last = performance.now();
      frameId = requestAnimationFrame(tick);
    };

    const sync = () => (visible && !document.hidden && !reducedMotion.matches ? start() : stop());

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    intersectionObserver.observe(container);

    document.addEventListener('visibilitychange', sync);
    reducedMotion.addEventListener('change', sync);

    resize();
    sync();

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener('visibilitychange', sync);
      reducedMotion.removeEventListener('change', sync);
    };
  }, [density]);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" />;
}
