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
      vx: number;
    };

    const spawn = (initial = false, i = 0): P => {
      const isStar = i % 2 === 0;
      return {
        x: Math.random() * w,
        y: initial ? Math.random() * (h + 60) : h + 40,
        r: isStar ? 8 + Math.random() * 14 : 4 + Math.random() * 8,
        vy: 0.65 + Math.random() * 1.1,
        sway: 20 + Math.random() * 38,
        phase: Math.random() * Math.PI * 2,
        speed: 0.012 + Math.random() * 0.018,
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.045,
        color: colors[Math.floor(Math.random() * colors.length)],
        isStar,
        vx: 0,
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
      const count = w < 768 ? 26 : 46;
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

        // Fluid cursor interaction with gentle damping
        const swayX = p.x + Math.sin(p.phase) * p.sway;
        const dx = swayX - mouse.x;
        const dy = p.y - mouse.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 160 && d > 0.01) {
          const force = (1 - d / 160) * 2.5;
          p.vx += (dx / d) * force;
          p.y += (dy / d) * (force * 0.4);
        }
        p.vx *= 0.92;
        p.x += p.vx;

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
  const x = useSpring(mx, { stiffness: 260, damping: 20, mass: 0.35 });
  const y = useSpring(my, { stiffness: 260, damping: 20, mass: 0.35 });

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (disabled || e.pointerType !== 'mouse' || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) * 0.28);
    my.set((e.clientY - (r.top + r.height / 2)) * 0.35);
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
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        animate={
          disabled
            ? undefined
            : {
              boxShadow: [
                '0 0 18px rgba(250,199,22,0.4)',
                '0 0 45px rgba(250,199,22,0.85)',
                '0 0 18px rgba(250,199,22,0.4)',
              ],
            }
        }
        transition={{
          boxShadow: { duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: glowDelay },
          type: 'spring',
          stiffness: 380,
          damping: 20,
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
              transition={{ duration: 2.8, ease: 'linear', repeat: Infinity, delay: glowDelay }}
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
  const sx = useSpring(px, { stiffness: 75, damping: 24, mass: 0.5 });
  const sy = useSpring(py, { stiffness: 75, damping: 24, mass: 0.5 });

  const spotX = useMotionValue(-500);
  const spotY = useMotionValue(-500);
  const spX = useSpring(spotX, { stiffness: 95, damping: 22, mass: 0.4 });
  const spY = useSpring(spotY, { stiffness: 95, damping: 22, mass: 0.4 });

  const bgX = useTransform(sx, (v) => v * -14);
  const bgY = useTransform(sy, (v) => v * -10);
  const imgX = useTransform(sx, (v) => v * 24);
  const imgY = useTransform(sy, (v) => v * 16);
  const rotY = useTransform(sx, (v) => v * 7);
  const rotX = useTransform(sy, (v) => v * -5);
  const glowX = useTransform(sx, (v) => v * 40);
  const glowY = useTransform(sy, (v) => v * 28);
  const contentX = useTransform(sx, (v) => v * 10);
  const contentY = useTransform(sy, (v) => v * 7);

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

  const luxuryEase = [0.16, 1, 0.3, 1] as const;
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
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: luxuryEase }}
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
                    y: [0, -7, -2, -8, 0],
                    scale: [1, 1.018, 1.008, 1.02, 1],
                    rotate: [0, 0.35, -0.2, 0.25, 0],
                  }
            }
            transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
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
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center overflow-hidden"
          style={{
            WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 65%)',
            maskImage: 'radial-gradient(circle at center, black 0%, transparent 65%)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, ease: luxuryEase }}
        >
          <motion.div
            className="w-[1400px] h-[1400px] shrink-0"
            style={{
              background:
                'repeating-conic-gradient(from 0deg, rgba(250,199,22,0.24) 0deg 6deg, transparent 6deg 24deg)',
              willChange: 'transform',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 38, ease: 'linear', repeat: Infinity }}
          />
        </motion.div>
      )}

      {/* 4. Pulse rings from the center */}
      {!reduce && (
        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center overflow-hidden">
          {[0, 1.1, 2.2, 3.3].map((d) => (
            <motion.span
              key={d}
              className="absolute rounded-full border border-[#FAC716]/50 w-[420px] h-[420px]"
              style={{ willChange: 'transform, opacity' }}
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: [0.3, 2.3], opacity: [0.6, 0] }}
              transition={{ duration: 4.4, ease: [0.22, 1, 0.36, 1], repeat: Infinity, delay: d }}
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
          animate={reduce ? undefined : { scale: [0.95, 1.3, 0.95], opacity: [0.45, 0.8, 0.45] }}
          transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
          className="w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] rounded-full bg-gradient-to-r from-[#FAC716]/55 via-[#00F2FE]/35 to-transparent blur-3xl absolute -left-28"
        />
        <motion.div
          style={{ willChange: 'transform, opacity' }}
          animate={reduce ? undefined : { scale: [1.3, 0.95, 1.3], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 6.5, ease: 'easeInOut', repeat: Infinity }}
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
          initial={{ opacity: 0, y: -28, scale: 0.94 }}
          animate={{
            opacity: 1,
            y: reduce ? 0 : [0, -8, 0],
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            ease: luxuryEase,
            delay: 0.25,
            y: { duration: 4.2, ease: 'easeInOut', repeat: Infinity, delay: 1.15 },
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
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 bg-[#FAC716] rounded-none z-[-1] transition-transform duration-300 group-hover:scale-105"
          />

          {!reduce && (
            <motion.span
              aria-hidden="true"
              initial={{ x: '-130%' }}
              animate={{ x: ['-130%', '230%'] }}
              transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1], repeat: Infinity, repeatDelay: 3.2, delay: 1.6 }}
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
                      initial={{ y: 28, opacity: 0, filter: 'blur(6px)', rotateX: -40 }}
                      animate={{ y: 0, opacity: 1, filter: 'blur(0px)', rotateX: 0 }}
                      transition={{ duration: 0.65, ease: luxuryEase, delay: 0.35 + i * 0.03 }}
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
          initial={{ opacity: 0, y: 22, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.85, ease: luxuryEase, delay: 0.75 }}
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
        <motion.div
          style={{ willChange: 'transform, opacity' }}
          initial={{ opacity: 0, y: 26, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: luxuryEase, delay: 0.95 }}
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
                  transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1], repeat: Infinity, repeatDelay: 2.8, delay: 1.8 }}
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
                  transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1], repeat: Infinity, repeatDelay: 2.8, delay: 2.2 }}
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