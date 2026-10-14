"use client";

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { Link } from '@/i18n/routing';

/* ---------- Interactive stars + orbs (canvas, reacts to mouse) ---------- */
const ParticleCanvas = ({ disabled }: { disabled: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (disabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const colors = ['#FAC716', '#FF3B30', '#FF9500', '#00F2FE', '#FF007F', '#9D00FF'];
    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;
    const mouse = { x: -9999, y: -9999 };

    type P = {
      x: number; y: number; r: number; vy: number; sway: number; phase: number;
      speed: number; rot: number; vr: number; color: string; isStar: boolean;
    };

    const spawn = (initial = false, i = 0): P => {
      const isStar = i % 2 === 0;
      return {
        x: Math.random() * w,
        y: initial ? Math.random() * (h + 60) : h + 40,
        r: isStar ? 8 + Math.random() * 14 : 4 + Math.random() * 8,
        vy: 0.8 + Math.random() * 1.4,
        sway: 25 + Math.random() * 45,
        phase: Math.random() * Math.PI * 2,
        speed: 0.014 + Math.random() * 0.022,
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.06,
        color: colors[Math.floor(Math.random() * colors.length)],
        isStar,
      };
    };

    let ps: P[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = w < 768 ? 28 : 50;
      ps = Array.from({ length: count }, (_, i) => spawn(true, i));
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const drawStar = (r: number) => {
      const k = r * 0.22;
      ctx.beginPath();
      ctx.moveTo(0, -r);
      ctx.lineTo(k, -k);
      ctx.lineTo(r, 0);
      ctx.lineTo(k, k);
      ctx.lineTo(0, r);
      ctx.lineTo(-k, k);
      ctx.lineTo(-r, 0);
      ctx.lineTo(-k, -k);
      ctx.closePath();
      ctx.fill();
    };

    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < ps.length; i++) {
        const p = ps[i];
        p.y -= p.vy;
        p.phase += p.speed;
        p.rot += p.vr;

        // Mouse repel
        const dx = p.x + Math.sin(p.phase) * p.sway - mouse.x;
        const dy = p.y - mouse.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 150 && d > 0.01) {
          const f = (1 - d / 150) * 5;
          p.x += (dx / d) * f;
          p.y += (dy / d) * f;
        }

        if (p.y < -40) {
          ps[i] = spawn(false, i);
          continue;
        }

        const t = (h + 40 - p.y) / (h + 80);
        const alpha = t < 0.1 ? t / 0.1 : t > 0.85 ? Math.max(0, (1 - t) / 0.15) : 1;
        const drawX = p.x + Math.sin(p.phase) * p.sway;

        ctx.save();
        ctx.globalAlpha = alpha * 0.95;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.r * 3.2;
        ctx.translate(drawX, p.y);
        if (p.isStar) {
          ctx.rotate(p.rot);
          drawStar(p.r);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
      raf = requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        raf = requestAnimationFrame(draw);
      }
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerleave', onLeave);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [disabled]);

  if (disabled) return null;
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />;
};

/* ---------- Magnetic button wrapper with rotating glow border ---------- */
const Magnetic = ({
  children,
  className,
  glowDelay = 0,
  disabled,
}: {
  children: React.ReactNode;
  className?: string;
  glowDelay?: number;
  disabled: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 15, mass: 0.4 });
  const y = useSpring(my, { stiffness: 220, damping: 15, mass: 0.4 });

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (disabled || e.pointerType !== 'mouse' || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) * 0.3);
    my.set((e.clientY - (r.top + r.height / 2)) * 0.4);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ x, y }}
      className={className}
    >
      <motion.div
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        animate={
          disabled
            ? undefined
            : {
              boxShadow: [
                '0 0 20px rgba(250,199,22,0.45)',
                '0 0 50px rgba(250,199,22,0.95)',
                '0 0 20px rgba(250,199,22,0.45)',
              ],
            }
        }
        transition={{
          boxShadow: { duration: 2.0, repeat: Infinity, ease: 'easeInOut', delay: glowDelay },
          type: 'spring',
          stiffness: 350,
          damping: 16,
        }}
        className="relative rounded-lg w-full"
      >
        {!disabled && (
          <span className="absolute -inset-[3px] rounded-xl overflow-hidden pointer-events-none">
            <motion.span
              className="absolute inset-[-100%]"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 0 55%, #ffffff 78%, #FAC716 90%, transparent 100%)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2.2, ease: 'linear', repeat: Infinity, delay: glowDelay }}
            />
          </span>
        )}
        <div className="relative z-10 rounded-lg overflow-hidden">{children}</div>
      </motion.div>
    </motion.div>
  );
};

/* ---------- Hero ---------- */
const HeroSection = () => {
  const t = useTranslations('Hero');
  const reduce = !!useReducedMotion();

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 18 });
  const sy = useSpring(py, { stiffness: 60, damping: 18 });

  const spotX = useMotionValue(-500);
  const spotY = useMotionValue(-500);
  const spX = useSpring(spotX, { stiffness: 120, damping: 20 });
  const spY = useSpring(spotY, { stiffness: 120, damping: 20 });

  const bgX = useTransform(sx, (v) => v * -18);
  const bgY = useTransform(sy, (v) => v * -14);
  const imgX = useTransform(sx, (v) => v * 28);
  const imgY = useTransform(sy, (v) => v * 18);
  const rotY = useTransform(sx, (v) => v * 9);
  const rotX = useTransform(sy, (v) => v * -7);
  const glowX = useTransform(sx, (v) => v * 50);
  const glowY = useTransform(sy, (v) => v * 35);
  const contentX = useTransform(sx, (v) => v * 8);
  const contentY = useTransform(sy, (v) => v * 6);

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
    spotX.set(e.clientX - r.left - 250);
    spotY.set(e.clientY - r.top - 250);
  };
  const onMouseLeave = () => {
    px.set(0);
    py.set(0);
    spotX.set(-500);
    spotY.set(-500);
  };

  const easeOut = [0.22, 1, 0.36, 1] as const;
  const words = t('welcome').split(' ');
  let charIndex = 0;

  return (
    <section
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative w-full h-[70vh] sm:h-[72vh] md:h-[65vh] lg:h-[68vh] xl:h-[70vh] min-h-[440px] sm:min-h-[460px] md:min-h-[440px] lg:min-h-[480px] flex items-center justify-center overflow-hidden bg-zinc-950 py-3 sm:py-5 md:py-6 select-none"
    >
      {/* 1. Background: ambient warmth + full dishes banner with floating animation & 3D tilt */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ willChange: 'transform, opacity' }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: easeOut }}
      >
        {/* Soft ambient backdrop to fill container background seamlessly */}
        <div className="absolute inset-0 z-0">
          <div className="hidden md:block w-full h-full relative">
            <Image
              src="/images/website-main-banner2.webp"
              alt=""
              fill
              priority
              quality={30}
              unoptimized={true}
              className="object-cover object-center blur-2xl opacity-35 scale-105"
              aria-hidden="true"
            />
          </div>
          <div className="block md:hidden w-full h-full relative">
            <Image
              src="/images/website-main-banner-Mobile-1.webp"
              alt=""
              fill
              priority
              quality={30}
              unoptimized={true}
              className="object-cover object-center blur-2xl opacity-35 scale-105"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Sharp dishes layer with floating motion and 3D parallax - fully visible as before */}
        <motion.div
          className="absolute inset-0 z-10"
          style={{
            x: reduce ? 0 : imgX,
            y: reduce ? 0 : imgY,
            rotateX: reduce ? 0 : rotX,
            rotateY: reduce ? 0 : rotY,
            transformPerspective: 1200,
            willChange: 'transform',
          }}
        >
          <motion.div
            className="w-full h-full relative"
            animate={
              reduce
                ? undefined
                : {
                    scale: [1, 1.025, 1],
                    y: [0, -6, 0],
                  }
            }
            transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
          >
            <div className="hidden md:block w-full h-full relative">
              <Image
                src="/images/website-main-banner2.webp"
                alt="Grillado's Premium Grilled Chicken and Portuguese Food"
                fill
                priority
                quality={100}
                unoptimized={true}
                className="object-contain object-center drop-shadow-[0_12px_30px_rgba(0,0,0,0.6)]"
                sizes="100vw"
              />
            </div>
            <div className="block md:hidden w-full h-full relative">
              <Image
                src="/images/website-main-banner-Mobile-1.webp"
                alt="Grillado's Premium Grilled Chicken and Portuguese Food"
                fill
                priority
                quality={100}
                unoptimized={true}
                className="object-cover object-center drop-shadow-[0_12px_30px_rgba(0,0,0,0.6)]"
                sizes="100vw"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 2. Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 100%)',
        }}
      />

      {/* 3. Rotating sunburst rays */}
      {!reduce && (
        <div
          className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center overflow-hidden"
          style={{
            WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 65%)',
            maskImage: 'radial-gradient(circle at center, black 0%, transparent 65%)',
          }}
        >
          <motion.div
            className="w-[1400px] h-[1400px] shrink-0"
            style={{
              background:
                'repeating-conic-gradient(from 0deg, rgba(250,199,22,0.26) 0deg 6deg, transparent 6deg 24deg)',
              willChange: 'transform',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
          />
        </div>
      )}

      {/* 4. Pulse rings from the center */}
      {!reduce && (
        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center overflow-hidden">
          {[0, 1.0, 2.0, 3.0].map((d) => (
            <motion.span
              key={d}
              className="absolute rounded-full border-2 border-[#FAC716]/60 w-[420px] h-[420px]"
              style={{ willChange: 'transform, opacity' }}
              initial={{ scale: 0.25, opacity: 0 }}
              animate={{ scale: [0.25, 2.5], opacity: [0.75, 0] }}
              transition={{ duration: 4, ease: 'easeOut', repeat: Infinity, delay: d }}
            />
          ))}
        </div>
      )}

      {/* 5. Colored ambient glows (parallax) */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center overflow-hidden"
        style={{ x: reduce ? 0 : glowX, y: reduce ? 0 : glowY }}
      >
        <motion.div
          style={{ willChange: 'transform, opacity' }}
          animate={reduce ? undefined : { scale: [0.95, 1.45, 0.95], opacity: [0.55, 0.95, 0.55] }}
          transition={{ duration: 4.5, ease: 'easeInOut', repeat: Infinity }}
          className="w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] rounded-full bg-gradient-to-r from-[#FAC716]/55 via-[#00F2FE]/35 to-transparent blur-3xl absolute -left-28"
        />
        <motion.div
          style={{ willChange: 'transform, opacity' }}
          animate={reduce ? undefined : { scale: [1.45, 0.95, 1.45], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
          className="w-[550px] h-[550px] sm:w-[850px] sm:h-[850px] rounded-full bg-gradient-to-l from-[#FF007F]/50 via-[#FF5500]/40 to-transparent blur-3xl absolute -right-28"
        />
      </motion.div>

      {/* 6. Cursor spotlight (desktop) */}
      {!reduce && (
        <motion.div
          className="hidden md:block absolute top-0 left-0 w-[500px] h-[500px] z-[12] pointer-events-none rounded-full"
          style={{
            x: spX,
            y: spY,
            background:
              'radial-gradient(circle, rgba(250,199,22,0.28) 0%, rgba(255,149,0,0.12) 35%, transparent 70%)',
            mixBlendMode: 'screen',
            willChange: 'transform',
          }}
        />
      )}

      {/* 7. Interactive stars + orbs */}
      <div className="absolute inset-0 z-[15] overflow-hidden pointer-events-none">
        <ParticleCanvas disabled={reduce} />
      </div>

      {/* 8. Center content */}
      <motion.div
        style={{ x: reduce ? 0 : contentX, y: reduce ? 0 : contentY }}
        className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto"
      >
        {/* Title badge */}
        <motion.div
          style={{ willChange: 'transform, opacity' }}
          initial={{ opacity: 0, y: -60, scale: 0.8, rotateX: -40 }}
          animate={{
            opacity: 1,
            y: reduce ? 0 : [0, -14, 0],
            scale: 1,
            rotateX: 0,
          }}
          transition={{
            duration: 1,
            ease: easeOut,
            delay: 0.3,
            y: { duration: 3.6, ease: 'easeInOut', repeat: Infinity, delay: 1.4 },
          }}
          className="mb-5 sm:mb-6 relative inline-block mx-4 sm:mx-0 max-w-[90vw] sm:max-w-none group cursor-pointer overflow-hidden"
        >
          <motion.div
            animate={
              reduce
                ? undefined
                : {
                  boxShadow: [
                    '0 10px 30px rgba(0,0,0,0.85)',
                    '0 25px 75px rgba(250,199,22,0.95)',
                    '0 10px 30px rgba(0,0,0,0.85)',
                  ],
                }
            }
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 bg-[#FAC716] rounded-none z-[-1] transition-transform duration-300 group-hover:scale-105"
          />

          {!reduce && (
            <motion.span
              aria-hidden="true"
              initial={{ x: '-130%' }}
              animate={{ x: ['-130%', '230%'] }}
              transition={{ duration: 1.4, ease: 'easeInOut', repeat: Infinity, repeatDelay: 2.4, delay: 1.5 }}
              className="absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent z-20 pointer-events-none"
            />
          )}

          <h1
            className="py-1 px-2 sm:px-3 relative z-10 text-center whitespace-normal sm:whitespace-nowrap tracking-tight break-words"
            style={{
              fontFamily: "'Ribeat', sans-serif",
              fontStyle: 'normal',
              fontWeight: 600,
              color: 'rgb(255, 255, 255)',
              fontSize: 'clamp(30px, 5.2vw, 52px)',
              lineHeight: 'clamp(42px, 6.4vw, 64px)',
            }}
          >
            {words.map((word, wi) => (
              <span key={wi} className="inline-block whitespace-nowrap">
                {word.split('').map((ch) => {
                  const i = charIndex++;
                  return (
                    <motion.span
                      key={i}
                      className="inline-block"
                      style={{ willChange: 'transform, opacity' }}
                      initial={{ y: 40, opacity: 0, filter: 'blur(8px)', rotateX: -80 }}
                      animate={{ y: 0, opacity: 1, filter: 'blur(0px)', rotateX: 0 }}
                      transition={{ duration: 0.7, ease: easeOut, delay: 0.7 + i * 0.04 }}
                    >
                      {ch}
                    </motion.span>
                  );
                })}
                {wi < words.length - 1 ? '\u00A0' : ''}
              </span>
            ))}
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: 'easeOut', delay: 1.3 }}
          className="mb-6 sm:mb-7 max-w-4xl drop-shadow-md w-full px-4 text-sm sm:text-base md:text-4.5 leading-relaxed md:leading-7.5"
          style={{
            willChange: 'transform, opacity',
            fontFamily: '"Noto Sans", sans-serif',
            fontStyle: 'normal',
            fontWeight: 400,
            color: 'rgb(255,255,255)',
          }}
        >
          {t('subtitle')}
        </motion.p>

        {/* Buttons */}
        {/* Buttons */}
        <motion.div
          style={{ willChange: 'transform, opacity' }}
          initial={{ opacity: 0, y: 40, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: easeOut, delay: 1.6 }}
          className="flex flex-row gap-3 sm:gap-5 w-full px-4 sm:px-0 sm:w-auto justify-center"
        >
          <Magnetic className="flex-1 sm:flex-none" disabled={reduce}>
            <Link
              href="https://grillados.bycalibre.ca/location"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden text-black hover:text-white group flex items-center justify-center gap-1.5 sm:gap-2 bg-[#FAC716] hover:bg-[#EB5250] transition-colors duration-300 shadow-xl rounded-lg px-4 py-3 sm:px-8 sm:py-4 w-full text-3.75 sm:text-5"
              style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, lineHeight: '20px' }}
            >
              {!reduce && (
                <motion.span
                  aria-hidden="true"
                  initial={{ x: '-150%' }}
                  animate={{ x: ['-150%', '250%'] }}
                  transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 2.2, delay: 2.0 }}
                  className="absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none"
                />
              )}
              <span className="whitespace-nowrap relative z-10">{t('orderNow')}</span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1.5 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </Magnetic>

          <Magnetic className="flex-1 sm:flex-none" glowDelay={0.4} disabled={reduce}>
            <Link
              href="https://grillados.bycalibre.ca/location"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden text-black hover:text-white group flex items-center justify-center gap-1.5 sm:gap-2 bg-[#FAC716] hover:bg-[#EB5250] transition-colors duration-300 shadow-xl rounded-lg px-4 py-3 sm:px-8 sm:py-4 w-full text-3.75 sm:text-5"
              style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, lineHeight: '20px' }}
            >
              {!reduce && (
                <motion.span
                  aria-hidden="true"
                  initial={{ x: '-150%' }}
                  animate={{ x: ['-150%', '250%'] }}
                  transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 2.2, delay: 2.5 }}
                  className="absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none"
                />
              )}
              <span className="whitespace-nowrap relative z-10">{t('viewMenu')}</span>
            </Link>
          </Magnetic>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;