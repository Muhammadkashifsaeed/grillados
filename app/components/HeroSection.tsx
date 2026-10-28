"use client";

import Image from 'next/image';
import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { Link } from '@/i18n/routing';
import { Sparkles, Flame, ShoppingBag, Utensils } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────────────────
   ① Golden Hearth Embers
   Authentic ember sparks rising from the flame grill with organic drift.
───────────────────────────────────────────────────────────────────────────── */
const EMBERS = [
  { left: '10%', sz: 3.0, dur: 5.2, d: 0.1, op: 0.80, sx: 16 },
  { left: '18%', sz: 2.2, dur: 6.5, d: 1.0, op: 0.65, sx: -14 },
  { left: '26%', sz: 3.5, dur: 5.0, d: 1.8, op: 0.75, sx: 12 },
  { left: '35%', sz: 2.0, dur: 7.2, d: 0.4, op: 0.60, sx: -16 },
  { left: '44%', sz: 3.2, dur: 5.8, d: 1.5, op: 0.70, sx: 14 },
  { left: '52%', sz: 4.0, dur: 4.6, d: 2.4, op: 0.85, sx: -10 },
  { left: '60%', sz: 2.4, dur: 6.9, d: 0.7, op: 0.65, sx: 12 },
  { left: '69%', sz: 3.2, dur: 5.6, d: 2.0, op: 0.75, sx: -14 },
  { left: '78%', sz: 2.0, dur: 7.8, d: 2.9, op: 0.55, sx: 10 },
  { left: '86%', sz: 3.6, dur: 6.2, d: 1.3, op: 0.80, sx: -15 },
  { left: '92%', sz: 2.8, dur: 5.3, d: 2.6, op: 0.70, sx: 9 },
  { left: '14%', sz: 1.8, dur: 8.2, d: 3.3, op: 0.50, sx: -8 },
  { left: '48%', sz: 2.5, dur: 6.4, d: 0.5, op: 0.65, sx: 11 },
  { left: '82%', sz: 3.8, dur: 4.9, d: 2.3, op: 0.80, sx: -12 },
];

const GoldenEmbers = ({ disabled }: { disabled: boolean }) => {
  if (disabled) return null;
  return (
    <div
      className="absolute inset-0 z-[11] pointer-events-none overflow-hidden"
      style={{ transformStyle: 'preserve-3d' }}
      aria-hidden="true"
    >
      {EMBERS.map((e, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: e.left,
            bottom: 0,
            width: `${e.sz}px`,
            height: `${e.sz}px`,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #FFE082 0%, #FF9800 55%, #E53935 90%, transparent 100%)',
            filter: `blur(${e.sz * 0.2}px)`,
            boxShadow: `0 0 ${e.sz * 5}px rgba(255,170,0,${e.op * 0.85})`,
            willChange: 'transform, opacity',
            transformStyle: 'preserve-3d',
          }}
          initial={{ y: 0, x: 0, z: 0, opacity: 0, scale: 0.3 }}
          animate={{
            y: [-10, -360, -620],
            x: [0, e.sx, e.sx * -0.5],
            z: [0, 60 + (i % 4) * 20, 130 + (i % 3) * 30],
            opacity: [0, e.op, e.op * 0.6, 0],
            scale: [0.3, 1.4, 0.7, 0.1],
          }}
          transition={{
            duration: e.dur,
            delay: e.d,
            repeat: Infinity,
            repeatDelay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      ))}
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   ② Sizzling Culinary Steam Wisps
   Authentic subtle rising steam from hot skewers and steak skillet.
───────────────────────────────────────────────────────────────────────────── */
const STEAM_PUFFS = [
  { left: '20%', bottom: '38%', w: 75, h: 105, dur: 4.6, delay: 0.3, drift: 18 },
  { left: '24%', bottom: '42%', w: 65, h: 90,  dur: 5.4, delay: 1.9, drift: -14 },
  { left: '69%', bottom: '40%', w: 80, h: 110, dur: 4.8, delay: 0.7, drift: -20 },
  { left: '73%', bottom: '44%', w: 70, h: 95,  dur: 5.6, delay: 2.3, drift: 16 },
];

const CulinarySteam = ({ disabled }: { disabled: boolean }) => {
  if (disabled) return null;
  return (
    <div className="absolute inset-0 z-[10] pointer-events-none overflow-hidden" aria-hidden="true">
      {STEAM_PUFFS.map((s, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: s.left,
            bottom: s.bottom,
            width: `${s.w}px`,
            height: `${s.h}px`,
            borderRadius: '50% 50% 45% 45%',
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.36) 0%, rgba(255,240,210,0.14) 45%, transparent 75%)',
            filter: 'blur(15px)',
            willChange: 'transform, opacity',
          }}
          initial={{ y: 0, x: 0, opacity: 0, scale: 0.5 }}
          animate={{
            y: [0, -70, -150],
            x: [0, s.drift * 0.5, s.drift],
            opacity: [0, 0.42, 0.18, 0],
            scale: [0.5, 1.25, 1.65],
            rotate: [0, s.drift > 0 ? 10 : -10, 0],
          }}
          transition={{
            duration: s.dur,
            delay: s.delay,
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      ))}
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   ③ Cinematic Bokeh Light Atmosphere
───────────────────────────────────────────────────────────────────────────── */
const BOKEH_ORBS = [
  { left: '12%', top: '24%', sz: 120, dur: 7.0, d: 0,   op: 0.16, sx: 20,  sy: -15 },
  { left: '82%', top: '20%', sz: 135, dur: 8.2, d: 1.4, op: 0.20, sx: -25, sy: 12 },
  { left: '34%', top: '60%', sz: 90,  dur: 6.5, d: 2.1, op: 0.14, sx: 18,  sy: -12 },
  { left: '85%', top: '56%', sz: 110, dur: 7.5, d: 0.7, op: 0.17, sx: -22, sy: -18 },
];

const GoldenBokeh = ({ disabled }: { disabled: boolean }) => {
  if (disabled) return null;
  return (
    <div className="absolute inset-0 z-[8] pointer-events-none overflow-hidden" aria-hidden="true">
      {BOKEH_ORBS.map((b, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: b.left,
            top: b.top,
            width: `${b.sz}px`,
            height: `${b.sz}px`,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(250,199,22,0.40) 0%, rgba(255,140,0,0.18) 50%, transparent 75%)',
            filter: 'blur(26px)',
            willChange: 'transform, opacity',
          }}
          initial={{ opacity: 0 }}
          animate={{
            x: [0, b.sx, -b.sx * 0.5, 0],
            y: [0, b.sy, -b.sy * 0.7, 0],
            opacity: [b.op * 0.7, b.op * 1.25, b.op * 0.75, b.op * 0.7],
            scale: [1, 1.12, 0.96, 1],
          }}
          transition={{
            duration: b.dur,
            delay: b.d,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   ④ Floating 3D Culinary Accents (Peri-Peri Pepper & Golden Grill Flare)
───────────────────────────────────────────────────────────────────────────── */
const Floating3DAccents = ({ disabled }: { disabled: boolean }) => {
  if (disabled) return null;

  return (
    <div
      className="absolute inset-0 pointer-events-none z-[13] overflow-hidden"
      style={{ transformStyle: 'preserve-3d' }}
      aria-hidden="true"
    >
      {/* 1. Left Peri-Peri Chili Flame Accent */}
      <motion.div
        className="absolute hidden sm:block left-[5%] lg:left-[8%] top-[26%] w-10 h-10 lg:w-12 lg:h-12"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'translateZ(70px)',
          filter: 'drop-shadow(0 10px 18px rgba(235,82,80,0.55)) drop-shadow(0 0 25px rgba(250,199,22,0.4))',
        }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{
          opacity: 1,
          y: [0, -15, 4, 0],
          x: [0, 8, -6, 0],
          rotateX: [0, 26, -18, 0],
          rotateY: [0, 42, -32, 0],
          rotateZ: [-12, -2, -20, -12],
          scale: [1, 1.07, 0.96, 1],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.6 },
          y: { duration: 6.8, repeat: Infinity, ease: 'easeInOut' },
          x: { duration: 6.8, repeat: Infinity, ease: 'easeInOut' },
          rotateX: { duration: 6.8, repeat: Infinity, ease: 'easeInOut' },
          rotateY: { duration: 6.8, repeat: Infinity, ease: 'easeInOut' },
          rotateZ: { duration: 6.8, repeat: Infinity, ease: 'easeInOut' },
          scale: { duration: 6.8, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="chiliGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="45%" stopColor="#E53935" />
              <stop offset="100%" stopColor="#8E0000" />
            </linearGradient>
            <linearGradient id="stemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#81C784" />
              <stop offset="100%" stopColor="#2E7D32" />
            </linearGradient>
          </defs>
          <path d="M42 12 C44 8, 48 6, 52 7 C50 11, 46 14, 42 14 Z" fill="url(#stemGrad)" />
          <path
            d="M44 14 C40 18, 38 25, 34 32 C30 40, 24 48, 14 54 C13 54, 12 53, 14 51 C19 44, 25 36, 28 28 C30 22, 34 16, 41 13 C43 12, 45 13, 44 14 Z"
            fill="url(#chiliGrad)"
          />
          <path
            d="M40 16 C37 20, 34 26, 31 32 C28 37, 24 42, 18 47"
            stroke="rgba(255,255,255,0.65)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* 2. Right Golden Grill Flare / Diamond Ember */}
      <motion.div
        className="absolute hidden sm:block right-[6%] lg:right-[9%] top-[24%] w-9 h-9 lg:w-11 lg:h-11"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'translateZ(85px)',
          filter: 'drop-shadow(0 0 20px rgba(250,199,22,0.9)) drop-shadow(0 0 35px rgba(255,160,0,0.6))',
        }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{
          opacity: 1,
          y: [0, -16, 6, 0],
          x: [0, -9, 7, 0],
          rotateZ: [0, 90, 180, 270, 360],
          rotateX: [0, 32, -22, 0],
          scale: [1, 1.12, 0.94, 1],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.7 },
          y: { duration: 5.4, repeat: Infinity, ease: 'easeInOut' },
          x: { duration: 6.2, repeat: Infinity, ease: 'easeInOut' },
          rotateZ: { duration: 14, repeat: Infinity, ease: 'linear' },
          rotateX: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
          scale: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
          <path
            d="M24 0 L27.5 18 L48 24 L27.5 30 L24 48 L20.5 30 L0 24 L20.5 18 Z"
            fill="url(#goldStarGrad)"
          />
          <circle cx="24" cy="24" r="4.5" fill="#FFFFFF" />
          <defs>
            <linearGradient id="goldStarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF9C4" />
              <stop offset="40%" stopColor="#FAC716" />
              <stop offset="100%" stopColor="#FF8F00" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   Magnetic Button Wrapper with Spring Physics
───────────────────────────────────────────────────────────────────────────── */
const Magnetic = ({
  children,
  className,
  disabled,
}: {
  children: React.ReactNode;
  className?: string;
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
    my.set((e.clientY - (r.top + r.height / 2)) * 0.32);
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
        whileHover={disabled ? undefined : { scale: 1.04, y: -3, z: 20 }}
        whileTap={disabled ? undefined : { scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 380, damping: 20 }}
        className="w-full flex justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   Main Upgraded Hero Section
───────────────────────────────────────────────────────────────────────────── */
const HeroSection = () => {
  const t = useTranslations('Hero');
  const reduce = !!useReducedMotion();

  // Mouse Parallax Values
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 75, damping: 24, mass: 0.5 });
  const sy = useSpring(py, { stiffness: 75, damping: 24, mass: 0.5 });

  const spotX = useMotionValue(-500);
  const spotY = useMotionValue(-500);
  const spX = useSpring(spotX, { stiffness: 95, damping: 22, mass: 0.4 });
  const spY = useSpring(spotY, { stiffness: 95, damping: 22, mass: 0.4 });

  // Layered Parallax Transforms
  const bgX = useTransform(sx, (v) => v * -18);
  const bgY = useTransform(sy, (v) => v * -14);
  const imgX = useTransform(sx, (v) => v * 38);
  const imgY = useTransform(sy, (v) => v * 26);
  const rotY = useTransform(sx, (v) => v * 14);
  const rotX = useTransform(sy, (v) => v * -10);
  const contentX = useTransform(sx, (v) => v * 16);
  const contentY = useTransform(sy, (v) => v * 12);
  const badgeRotX = useTransform(sy, (v) => v * -2.5);
  const badgeRotY = useTransform(sx, (v) => v * 3);
  const fgX = useTransform(sx, (v) => v * -30);
  const fgY = useTransform(sy, (v) => v * -22);

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

  return (
    <section
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative w-full h-[58vh] sm:h-[62vh] md:h-[60vh] lg:h-[64vh] xl:h-[66vh] min-h-[440px] sm:min-h-[460px] md:min-h-[480px] lg:min-h-[500px] max-h-[620px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#140F0C] via-[#0E0A08] to-[#0A0706] pt-16 sm:pt-18 md:pt-20 pb-3 sm:pb-4 select-none"
      style={{
        perspective: 1200,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* ── 0. Cinematic Vignette & Ambient Radial Lighting ── */}
      <div 
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          background: 'radial-gradient(circle 850px at 50% 50%, transparent 40%, rgba(10,7,6,0.55) 75%, rgba(10,7,6,0.92) 100%)',
        }}
      />

      {/* ── Dynamic 3D Cursor Spotlight Aura ── */}
      <motion.div
        className="absolute pointer-events-none rounded-full blur-3xl opacity-30 z-[12]"
        style={{
          x: spX,
          y: spY,
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(250,199,22,0.45) 0%, rgba(235,82,80,0.22) 40%, transparent 70%)',
          transformStyle: 'preserve-3d',
          transform: 'translateZ(35px)',
        }}
      />

      {/* ── 1. Background Food Imagery: Sharp, Appetizing with Cinematic Reveal & Gentle Float ── */}
      <div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <motion.div
          className="absolute inset-0 z-10"
          style={{
            x: reduce ? 0 : imgX,
            y: reduce ? 0 : imgY,
            rotateX: reduce ? 0 : rotX,
            rotateY: reduce ? 0 : rotY,
            transformPerspective: 1200,
            transformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, ease: luxuryEase, delay: 0.1 }}
        >
          <motion.div
            className="w-full h-full relative"
            style={{ transformStyle: 'preserve-3d' }}
            animate={
              reduce
                ? undefined
                : {
                    y: [0, -12, -2, -14, 0],
                    rotateX: [0, 3.2, -2.6, 2.0, 0],
                    rotateY: [0, -3.8, 3.4, -2.5, 0],
                    scale: [1, 1.025, 1.012, 1.03, 1],
                  }
            }
            transition={{ duration: 7.5, ease: 'easeInOut', repeat: Infinity }}
          >
            {/* Dynamic Ground Contact Shadow */}
            <motion.div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 h-20 pointer-events-none rounded-[50%]"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 45%, transparent 75%)',
                filter: 'blur(16px)',
                transform: 'translateZ(-15px)',
              }}
              animate={
                reduce
                  ? undefined
                  : {
                      scale: [1, 0.95, 0.98, 0.94, 1],
                      opacity: [0.75, 0.90, 0.82, 0.92, 0.75],
                    }
              }
              transition={{ duration: 7.5, ease: 'easeInOut', repeat: Infinity }}
            />

            {/* Desktop Composition: High Quality, Crisp Edge Shadows */}
            <div className="hidden md:block w-full h-full relative" style={{ transformStyle: 'preserve-3d' }}>
              <Image
                src="/images/hero sections.png"
                alt="Grillado's Premium Grilled Chicken and Portuguese Food"
                fill
                priority
                quality={100}
                unoptimized={true}
                className="object-cover object-center drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] drop-shadow-[0_45px_95px_rgba(0,0,0,0.65)]"
                sizes="100vw"
              />
            </div>

            {/* Mobile Composition */}
            <div className="block md:hidden w-full h-full relative" style={{ transformStyle: 'preserve-3d' }}>
              <Image
                src="/images/website-main-banner-Mobile-1.webp"
                alt="Grillado's Premium Grilled Chicken and Portuguese Food"
                fill
                priority
                quality={100}
                unoptimized={true}
                className="object-cover object-center drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)]"
                sizes="100vw"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── 2. Cinematic Golden Bokeh Light Orbs ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[8]"
        style={{
          x: reduce ? 0 : bgX,
          y: reduce ? 0 : bgY,
          transformStyle: 'preserve-3d',
          transform: 'translateZ(-40px)',
        }}
      >
        <GoldenBokeh disabled={reduce} />
      </motion.div>

      {/* ── 3. Authentic Culinary Hearth Glow (Warm Charcoal & Flame Ambiance) ── */}
      <motion.div
        className="absolute inset-0 z-[9] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 55%, rgba(250,199,22,0.20) 0%, rgba(235,82,80,0.10) 42%, transparent 80%)',
          transformStyle: 'preserve-3d',
          transform: 'translateZ(-20px)',
        }}
        animate={
          reduce
            ? undefined
            : {
                opacity: [0.65, 0.88, 0.65],
              }
        }
        transition={{ duration: 4.8, ease: 'easeInOut', repeat: Infinity }}
      />

      {/* ── 3b. Subtle Bottom Hearth Flame Reflection ── */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-36 z-[9] pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(235,82,80,0.18) 0%, rgba(250,199,22,0.10) 45%, transparent 100%)',
          transformOrigin: 'bottom',
          transformStyle: 'preserve-3d',
          transform: 'translateZ(-10px)',
        }}
        animate={
          reduce
            ? undefined
            : {
                opacity: [0.40, 0.68, 0.40],
                scaleY: [1, 1.05, 1],
              }
        }
        transition={{ duration: 3.6, ease: 'easeInOut', repeat: Infinity }}
      />

      {/* ── 4. 3D Foreground Atmosphere: Sizzling Culinary Steam & Golden Charcoal Embers ── */}
      <motion.div
        style={{
          x: reduce ? 0 : fgX,
          y: reduce ? 0 : fgY,
          transformStyle: 'preserve-3d',
          transformPerspective: 1000,
          transform: 'translateZ(50px)',
        }}
        className="absolute inset-0 z-[11] pointer-events-none"
      >
        <CulinarySteam disabled={reduce} />
        <GoldenEmbers disabled={reduce} />
      </motion.div>

      {/* ── 4b. Floating 3D Culinary Accents (Peri-Peri Pepper & Golden Flares) ── */}
      <motion.div
        style={{
          x: reduce ? 0 : fgX,
          y: reduce ? 0 : fgY,
          transformStyle: 'preserve-3d',
        }}
        className="absolute inset-0 z-[13] pointer-events-none"
      >
        <Floating3DAccents disabled={reduce} />
      </motion.div>

      {/* ── 5. Center Content in High-Depth 3D Space (Coordinated Cinematic Reveal Sequence) ── */}
      <motion.div
        style={{
          x: reduce ? 0 : contentX,
          y: reduce ? 0 : contentY,
          transformStyle: 'preserve-3d',
          transformPerspective: 1200,
        }}
        className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto"
      >
        {/* ── Stage 1: Main Headline with Signature Beveled Plaque (Enhanced & Straightened) ── */}
        <motion.div
          style={{
            rotateX: reduce ? 0 : badgeRotX,
            rotateY: reduce ? 0 : badgeRotY,
            transformPerspective: 1000,
            transformStyle: 'preserve-3d',
            willChange: 'transform, opacity',
          }}
          initial={{ opacity: 0, y: 22, scale: 0.95 }}
          animate={{
            opacity: 1,
            y: reduce ? 0 : [0, -5, 0],
            rotate: -1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            ease: luxuryEase,
            delay: 0.4,
            y: { duration: 4.8, ease: 'easeInOut', repeat: Infinity, delay: 1.1 },
          }}
          whileHover={{
            scale: 1.03,
            rotate: 0,
            y: -2,
            transition: { duration: 0.25 },
          }}
          className="mb-3 sm:mb-4 relative inline-block mx-4 sm:mx-0 max-w-[92vw] sm:max-w-none group cursor-pointer overflow-hidden rounded-xl shadow-[0_16px_45px_rgba(0,0,0,0.85)]"
        >
          {/* Signature Yellow Plaque with Beveled Luxury Edges & Pulsing Brand Golden Halo */}
          <motion.div
            style={{ transformStyle: 'preserve-3d', transform: 'translateZ(14px)' }}
            animate={
              reduce
                ? undefined
                : {
                    boxShadow: [
                      '0 14px 40px rgba(0,0,0,0.85), 0 0 25px rgba(250,199,22,0.5)',
                      '0 20px 55px rgba(0,0,0,0.95), 0 0 50px rgba(250,199,22,0.85), 0 0 80px rgba(250,199,22,0.4)',
                      '0 14px 40px rgba(0,0,0,0.85), 0 0 25px rgba(250,199,22,0.5)',
                    ],
                  }
            }
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 bg-gradient-to-r from-[#FAC716] via-[#FFD233] to-[#FAC716] border-t-2 border-white/95 border-b border-black/40 shadow-[inset_0_2px_0_rgba(255,255,255,0.95)] z-[-1] transition-transform duration-300 group-hover:scale-[1.02]"
          />

          {/* Travelling Luxury Sheen Beam in 3D */}
          <motion.div
            style={{ transform: 'translateZ(20px)' }}
            animate={
              reduce
                ? undefined
                : {
                    x: ['-140%', '340%'],
                  }
            }
            transition={{
              duration: 2.2,
              repeat: Infinity,
              repeatDelay: 3.4,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/75 to-transparent -skew-x-12 pointer-events-none z-20"
          />

          <h1
            className="py-2.5 px-5 sm:px-8 relative z-10 text-center whitespace-normal sm:whitespace-nowrap tracking-wide break-words flex items-center justify-center gap-2 sm:gap-3"
            style={{
              fontFamily: "'Ribeat', sans-serif",
              fontStyle: 'normal',
              fontWeight: 600,
              color: 'rgb(255, 255, 255)',
              fontSize: 'clamp(28px, 4.8vw, 50px)',
              lineHeight: 'clamp(36px, 5.8vw, 58px)',
              textShadow: '0 2px 4px rgba(0,0,0,0.75), 0 4px 16px rgba(0,0,0,0.5), 0 0 20px rgba(255,255,255,0.25)',
              transformStyle: 'preserve-3d',
              transform: 'translateZ(26px)',
            }}
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white/95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] shrink-0 animate-pulse hidden sm:inline-block" />
            {words.map((word, wi) => (
              <span key={wi} className="inline-block whitespace-nowrap" style={{ transformStyle: 'preserve-3d' }}>
                {word.split('').map((ch, ci) => {
                  const i = words.slice(0, wi).join('').length + ci;
                  return (
                    <motion.span
                      key={i}
                      className="inline-block"
                      style={{
                        willChange: 'transform, opacity',
                        transformStyle: 'preserve-3d',
                      }}
                      initial={{ y: 20, opacity: 0, rotateX: -25, z: 0 }}
                      animate={{
                        y: reduce ? 0 : [0, -7, 1.5, 0],
                        z: reduce ? 0 : [0, 16, 4, 0],
                        scale: reduce ? 1 : [1, 1.06, 0.99, 1],
                        opacity: 1,
                        rotateX: 0,
                      }}
                      transition={{
                        opacity: { duration: 0.45, ease: luxuryEase, delay: 0.45 + i * 0.02 },
                        rotateX: { duration: 0.45, ease: luxuryEase, delay: 0.45 + i * 0.02 },
                        y: {
                          duration: 2.6,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: 1.1 + i * 0.07,
                        },
                        z: {
                          duration: 2.6,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: 1.1 + i * 0.07,
                        },
                        scale: {
                          duration: 2.6,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: 1.1 + i * 0.07,
                        },
                      }}
                      whileHover={{
                        y: -10,
                        z: 44,
                        scale: 1.24,
                        color: '#FFFDF0',
                        textShadow: '0 0 22px rgba(255,255,255,1), 0 0 42px #FAC716, 0 10px 22px rgba(0,0,0,0.85)',
                        transition: { duration: 0.16 },
                      }}
                    >
                      {ch}
                    </motion.span>
                  );
                })}
                {wi < words.length - 1 ? '\u00A0' : ''}
              </span>
            ))}
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white/95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] shrink-0 animate-pulse hidden sm:inline-block" />
          </h1>
        </motion.div>

        {/* ── Stage 2: 100% Portuguese Flame-Grilled Badge (Positioned below Heading) ── */}
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: luxuryEase, delay: 0.55 }}
          whileHover={{ scale: 1.06, z: 24, transition: { duration: 0.2 } }}
          style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}
          className="mt-0.5 mb-3 sm:mb-4 inline-flex items-center gap-1.5 sm:gap-2 px-4 py-1.5 rounded-full bg-black/75 border border-[#FAC716]/75 backdrop-blur-md shadow-[0_4px_22px_rgba(0,0,0,0.85),0_0_22px_rgba(250,199,22,0.35)] select-none cursor-default"
        >
          <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FAC716] animate-pulse" />
          <span className="text-[11px] sm:text-[12.5px] font-extrabold tracking-widest uppercase text-[#FAC716] drop-shadow-sm">
            100% Portuguese Flame-Grilled
          </span>
          <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FAC716] animate-pulse" />
        </motion.div>

        {/* ── Stage 3: Subtitle with Refined Contrast & Cinematic Slide-Up ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: luxuryEase, delay: 0.7 }}
          className="mb-5 sm:mb-6 max-w-3xl drop-shadow-md w-full px-4 text-sm sm:text-base md:text-[17px] leading-relaxed md:leading-[1.7] text-white/95 font-medium tracking-wide"
          style={{
            willChange: 'transform, opacity',
            fontFamily: '"Noto Sans", sans-serif',
            transformStyle: 'preserve-3d',
            transform: 'translateZ(14px)',
            textShadow: '0 2px 10px rgba(0,0,0,0.85), 0 4px 20px rgba(0,0,0,0.6)',
          }}
        >
          {t('subtitle')}
        </motion.p>

        {/* ── Stage 4: Premium Action CTA Buttons with Magnetic Spring Presence ── */}
        <motion.div
          style={{
            willChange: 'transform, opacity',
            transformStyle: 'preserve-3d',
            transform: 'translateZ(24px)',
          }}
          initial={{ opacity: 0, y: 22, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, ease: luxuryEase, delay: 0.85 }}
          className="flex flex-row gap-3 sm:gap-5 w-full px-4 sm:px-0 sm:w-auto justify-center"
        >
          {/* Primary CTA: Order Now */}
          <Magnetic className="flex-1 sm:flex-none" disabled={reduce}>
            <Link
              href="https://grillados.bycalibre.ca/location"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden text-black hover:text-white group h-12 sm:h-13 px-6 sm:px-9 bg-[#FAC716] hover:bg-[#EB5250] transition-colors duration-300 shadow-[0_6px_25px_rgba(250,199,22,0.45)] hover:shadow-[0_8px_35px_rgba(235,82,80,0.7)] btn-chamfer flex-1 sm:flex-none inline-flex items-center justify-center text-center whitespace-nowrap cursor-pointer tracking-wider border border-white/40 hover:border-white/70"
              style={{
                fontFamily: "'Ribeat', sans-serif",
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '15px',
                lineHeight: '16px',
              }}
            >
              {/* Shimmer Light Reflection beam */}
              <motion.div
                animate={
                  reduce
                    ? undefined
                    : {
                        x: ['-140%', '280%'],
                      }
                }
                transition={{
                  duration: 2.0,
                  repeat: Infinity,
                  repeatDelay: 2.8,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 pointer-events-none z-20"
              />
              <ShoppingBag className="w-4 h-4 mr-2 text-current shrink-0 relative z-10 transition-transform duration-300 group-hover:scale-115" />
              <span className="whitespace-nowrap relative z-10">{t('orderNow')}</span>
            </Link>
          </Magnetic>

          {/* Secondary CTA: View Menu */}
          <Magnetic className="flex-1 sm:flex-none" disabled={reduce}>
            <Link
              href="https://grillados.bycalibre.ca/location"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group h-12 sm:h-13 p-[1.2px] bg-white/85 hover:bg-white transition-all duration-300 shadow-[0_4px_22px_rgba(0,0,0,0.75)] hover:shadow-[0_8px_32px_rgba(235,82,80,0.65)] flex-1 sm:flex-none inline-flex items-center justify-center cursor-pointer hover:scale-[1.03] active:scale-[0.98]"
              style={{
                clipPath: 'polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)',
              }}
            >
              {/* Inner Black Content Container with matching Chamfer cut (Top-Left & Bottom-Right) */}
              <div
                className="relative overflow-hidden w-full h-full px-6 sm:px-9 bg-black group-hover:bg-[#EB5250] transition-colors duration-300 flex items-center justify-center text-center whitespace-nowrap text-white"
                style={{
                  clipPath: 'polygon(13px 0, 100% 0, 100% calc(100% - 13px), calc(100% - 13px) 100%, 0 100%, 0 13px)',
                  fontFamily: "'Ribeat', sans-serif",
                  fontStyle: 'normal',
                  fontWeight: 600,
                  fontSize: '15px',
                  lineHeight: '16px',
                  letterSpacing: '0.05em',
                }}
              >
                {/* Shimmer Light Reflection beam */}
                <motion.div
                  animate={
                    reduce
                      ? undefined
                      : {
                          x: ['-140%', '280%'],
                        }
                  }
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    repeatDelay: 3.5,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-12 pointer-events-none z-20"
                />
                <Utensils className="w-4 h-4 mr-2 text-current shrink-0 relative z-10 transition-transform duration-300 group-hover:scale-115 group-hover:rotate-6" />
                <span className="whitespace-nowrap relative z-10">{t('viewMenu')}</span>
              </div>
            </Link>
          </Magnetic>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;