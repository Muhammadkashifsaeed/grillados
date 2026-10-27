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
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const HERO_SLIDES = [
  {
    id: 1,
    desktop: '/images/hero sections.png',
    mobile: '/images/website-main-banner-Mobile-1.webp',
    alt: "Grillado's Premium Grilled Chicken and Portuguese Food",
  },
  {
    id: 2,
    desktop: '/images/website-main-banner2.webp',
    mobile: '/images/website-main-banner-Mobile-1.webp',
    alt: "Grillado's Gourmet Sizzling Steaks & Peri-Peri Skewers",
  },
  {
    id: 3,
    desktop: '/images/Main1.webp',
    mobile: '/images/website-main-banner-Mobile-1.webp',
    alt: "Grillado's Signature Flame-Grilled Portuguese Feast",
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   NEW ① — Golden Embers
   Warm amber sparks that float upward like embers rising from a grill.
   Pure framer-motion, no canvas, no random colors — restaurant-themed.
───────────────────────────────────────────────────────────────────────────── */
const EMBERS = [
  { left: '8%',  sz: 3.5, dur: 5.4, d: 0,    op: 0.85, sx: 14 },
  { left: '16%', sz: 2.5, dur: 6.8, d: 1.1,  op: 0.70, sx: -16 },
  { left: '24%', sz: 4.0, dur: 5.2, d: 2.0,  op: 0.80, sx: 12 },
  { left: '33%', sz: 2.0, dur: 7.5, d: 0.4,  op: 0.65, sx: -18 },
  { left: '42%', sz: 3.5, dur: 6.1, d: 1.6,  op: 0.75, sx: 16 },
  { left: '50%', sz: 4.5, dur: 4.8, d: 2.6,  op: 0.90, sx: -10 },
  { left: '58%', sz: 2.5, dur: 7.2, d: 0.8,  op: 0.70, sx: 14 },
  { left: '67%', sz: 3.5, dur: 5.8, d: 2.2,  op: 0.80, sx: -15 },
  { left: '76%', sz: 2.0, dur: 8.0, d: 3.1,  op: 0.60, sx: 11 },
  { left: '85%', sz: 4.0, dur: 6.5, d: 1.4,  op: 0.85, sx: -17 },
  { left: '92%', sz: 3.0, dur: 5.5, d: 2.8,  op: 0.75, sx: 10 },
  { left: '12%', sz: 2.0, dur: 8.5, d: 3.5,  op: 0.55, sx: -8 },
  { left: '28%', sz: 3.0, dur: 6.2, d: 0.6,  op: 0.75, sx: 15 },
  { left: '48%', sz: 2.0, dur: 7.8, d: 3.9,  op: 0.60, sx: -12 },
  { left: '63%', sz: 3.5, dur: 5.9, d: 1.8,  op: 0.80, sx: 13 },
  { left: '79%', sz: 4.5, dur: 5.0, d: 2.5,  op: 0.85, sx: -14 },
  { left: '89%', sz: 2.5, dur: 7.6, d: 0.2,  op: 0.65, sx: 9 },
  { left: '95%', sz: 3.0, dur: 6.4, d: 3.3,  op: 0.70, sx: -11 },
];

const GoldenEmbers = ({ disabled }: { disabled: boolean }) => {
  if (disabled) return null;
  return (
    <div
      className="absolute inset-0 z-[13] pointer-events-none overflow-hidden"
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
            background: 'radial-gradient(circle, #FFE082 0%, #FF9800 60%, #E53935 90%, transparent 100%)',
            filter: `blur(${e.sz * 0.25}px)`,
            boxShadow: `0 0 ${e.sz * 6}px rgba(255,170,0,${e.op * 0.9})`,
            willChange: 'transform, opacity',
            transformStyle: 'preserve-3d',
          }}
          initial={{ y: 0, x: 0, z: 0, opacity: 0, scale: 0.4 }}
          animate={{
            y: [-8, -380, -640],
            x: [0, e.sx, e.sx * -0.5],
            z: [0, 70 + (i % 4) * 25, 150 + (i % 3) * 35],
            opacity: [0, e.op, e.op * 0.7, 0],
            scale: [0.4, 1.5, 0.8, 0.1],
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
   NEW ② — Sizzling Culinary Steam Wisps
   Authentic heat & steam rising from hot grilled chicken skewers and steak skillet
───────────────────────────────────────────────────────────────────────────── */
const STEAM_PUFFS = [
  // Left side - hot skewers & grilled ribs
  { left: '21%', bottom: '36%', w: 80, h: 110, dur: 4.8, delay: 0.2, drift: 20 },
  { left: '25%', bottom: '40%', w: 70, h: 95,  dur: 5.6, delay: 1.8, drift: -16 },
  { left: '19%', bottom: '33%', w: 90, h: 120, dur: 6.2, delay: 3.2, drift: 14 },
  // Right side - sizzling cast iron steak skillet
  { left: '68%', bottom: '38%', w: 85, h: 115, dur: 5.0, delay: 0.6, drift: -22 },
  { left: '72%', bottom: '42%', w: 75, h: 100, dur: 5.8, delay: 2.2, drift: 18 },
  { left: '66%', bottom: '34%', w: 95, h: 125, dur: 6.4, delay: 3.8, drift: -12 },
];

const CulinarySteam = ({ disabled }: { disabled: boolean }) => {
  if (disabled) return null;
  return (
    <div className="absolute inset-0 z-[12] pointer-events-none overflow-hidden" aria-hidden="true">
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
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.42) 0%, rgba(255,240,210,0.18) 45%, transparent 75%)',
            filter: 'blur(16px)',
            willChange: 'transform, opacity',
          }}
          initial={{ y: 0, x: 0, opacity: 0, scale: 0.6 }}
          animate={{
            y: [0, -75, -165],
            x: [0, s.drift * 0.5, s.drift],
            opacity: [0, 0.48, 0.22, 0],
            scale: [0.6, 1.3, 1.75],
            rotate: [0, s.drift > 0 ? 12 : -12, 0],
          }}
          transition={{
            duration: s.dur,
            delay: s.delay,
            repeat: Infinity,
            repeatDelay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      ))}
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   NEW ③ — Dreamy Golden Bokeh Light Orbs (Cinematic Restaurant Ambiance)
───────────────────────────────────────────────────────────────────────────── */
const BOKEH_ORBS = [
  { left: '10%', top: '22%', sz: 130, dur: 7.2, d: 0,   op: 0.18, sx: 25,  sy: -20 },
  { left: '80%', top: '18%', sz: 145, dur: 8.5, d: 1.5, op: 0.22, sx: -30, sy: 15 },
  { left: '32%', top: '62%', sz: 95,  dur: 6.8, d: 2.2, op: 0.16, sx: 20,  sy: -15 },
  { left: '86%', top: '58%', sz: 115, dur: 7.8, d: 0.8, op: 0.19, sx: -25, sy: -22 },
  { left: '46%', top: '14%', sz: 85,  dur: 9.0, d: 3.0, op: 0.14, sx: 15,  sy: 18 },
];

const GoldenBokeh = ({ disabled }: { disabled: boolean }) => {
  if (disabled) return null;
  return (
    <div className="absolute inset-0 z-[9] pointer-events-none overflow-hidden" aria-hidden="true">
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
            background: 'radial-gradient(circle, rgba(250,199,22,0.45) 0%, rgba(255,140,0,0.20) 50%, transparent 75%)',
            filter: 'blur(28px)',
            willChange: 'transform, opacity',
          }}
          initial={{ opacity: 0 }}
          animate={{
            x: [0, b.sx, -b.sx * 0.5, 0],
            y: [0, b.sy, -b.sy * 0.7, 0],
            opacity: [b.op * 0.7, b.op * 1.3, b.op * 0.8, b.op * 0.7],
            scale: [1, 1.15, 0.95, 1],
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
   NEW ④ — Floating 3D Culinary Accents (Peri-Peri Pepper, Glowing Ember Crystals, Golden Flares)
   Floating in multi-layer stereoscopic Z-space with continuous 3D gyroscopic tumble
───────────────────────────────────────────────────────────────────────────── */
const Floating3DAccents = ({ disabled }: { disabled: boolean }) => {
  if (disabled) return null;

  return (
    <div
      className="absolute inset-0 pointer-events-none z-[14] overflow-hidden"
      style={{ transformStyle: 'preserve-3d' }}
      aria-hidden="true"
    >
      {/* 1. Left Peri-Peri Chili Flame Accent (High Z-plane, foreground float) */}
      <motion.div
        className="absolute hidden sm:block left-[4%] lg:left-[7%] top-[24%] w-10 h-10 lg:w-12 lg:h-12"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'translateZ(75px)',
          filter: 'drop-shadow(0 10px 18px rgba(235,82,80,0.55)) drop-shadow(0 0 25px rgba(250,199,22,0.4))',
        }}
        animate={{
          y: [0, -16, 4, 0],
          x: [0, 8, -6, 0],
          rotateX: [0, 28, -20, 0],
          rotateY: [0, 45, -35, 0],
          rotateZ: [-12, -2, -20, -12],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut' }}
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

      {/* 2. Right Golden Grill Flare / Diamond Ember (Deep 3D foreground float) */}
      <motion.div
        className="absolute hidden sm:block right-[5%] lg:right-[8%] top-[22%] w-9 h-9 lg:w-11 lg:h-11"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'translateZ(90px)',
          filter: 'drop-shadow(0 0 20px rgba(250,199,22,0.9)) drop-shadow(0 0 35px rgba(255,160,0,0.6))',
        }}
        animate={{
          y: [0, -18, 6, 0],
          x: [0, -10, 8, 0],
          rotateZ: [0, 90, 180, 270, 360],
          rotateX: [0, 35, -25, 0],
          scale: [1, 1.15, 0.92, 1],
        }}
        transition={{
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

      {/* 3. Left Midground Grilled Spice Leaf (Soft floating herbs) */}
      <motion.div
        className="absolute hidden md:block left-[11%] bottom-[24%] w-8 h-8 lg:w-9 lg:h-9"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'translateZ(45px)',
          filter: 'drop-shadow(0 8px 14px rgba(0,0,0,0.6)) drop-shadow(0 0 15px rgba(76,175,80,0.3))',
        }}
        animate={{
          y: [0, 14, -12, 0],
          x: [0, -8, 6, 0],
          rotateZ: [20, 45, 10, 20],
          rotateY: [0, 180, 360],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{ duration: 7.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
          <path
            d="M10 32 C12 24, 18 16, 30 10 C28 22, 22 28, 10 32 Z"
            fill="url(#leafGrad)"
          />
          <path d="M12 30 Q20 22 28 12" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
          <defs>
            <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#81C784" />
              <stop offset="50%" stopColor="#388E3C" />
              <stop offset="100%" stopColor="#1B5E20" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* 4. Right Foreground Glowing Charcoal Briquette / Ember Shard */}
      <motion.div
        className="absolute hidden md:block right-[12%] bottom-[22%] w-7 h-7"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'translateZ(65px)',
          filter: 'drop-shadow(0 0 16px rgba(255,87,34,0.8)) drop-shadow(0 0 28px rgba(250,199,22,0.5))',
        }}
        animate={{
          y: [0, -12, 8, 0],
          x: [0, 7, -5, 0],
          rotateX: [0, 45, -30, 0],
          rotateY: [0, -60, 40, 0],
          scale: [1, 1.12, 0.95, 1],
        }}
        transition={{ duration: 6.0, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-full h-full rounded-md bg-gradient-to-br from-[#FFE082] via-[#FF5722] to-[#B71C1C] border border-[#FFD54F]/60 animate-pulse shadow-[inset_0_0_8px_rgba(255,255,255,0.8)]" />
      </motion.div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   Magnetic button wrapper (Clean luxury feel, no border lines)
───────────────────────────────────────────────────────────────────────────── */
const Magnetic = ({
  children,
  className,
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
  const x = useSpring(mx, { stiffness: 280, damping: 22, mass: 0.3 });
  const y = useSpring(my, { stiffness: 280, damping: 22, mass: 0.3 });

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (disabled || e.pointerType !== 'mouse' || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) * 0.3);
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
        whileHover={{ scale: 1.04, y: -3, z: 22 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 22 }}
        className="w-full flex justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   Hero Section
───────────────────────────────────────────────────────────────────────────── */
const HeroSection = () => {
  const t = useTranslations('Hero');
  const reduce = !!useReducedMotion();

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 85, damping: 22, mass: 0.45 });
  const sy = useSpring(py, { stiffness: 85, damping: 22, mass: 0.45 });

  const spotX = useMotionValue(-500);
  const spotY = useMotionValue(-500);
  const spX = useSpring(spotX, { stiffness: 105, damping: 20, mass: 0.35 });
  const spY = useSpring(spotY, { stiffness: 105, damping: 20, mass: 0.35 });

  const bgX = useTransform(sx, (v) => v * -24);
  const bgY = useTransform(sy, (v) => v * -18);
  const imgX = useTransform(sx, (v) => v * 48);
  const imgY = useTransform(sy, (v) => v * 32);
  const rotY = useTransform(sx, (v) => v * 18);
  const rotX = useTransform(sy, (v) => v * -14);
  const contentX = useTransform(sx, (v) => v * 22);
  const contentY = useTransform(sy, (v) => v * 15);
  const badgeRotX = useTransform(sy, (v) => v * -22);
  const badgeRotY = useTransform(sx, (v) => v * 26);
  const fgX = useTransform(sx, (v) => v * -40);
  const fgY = useTransform(sy, (v) => v * -28);

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
      className="relative w-full h-[70vh] sm:h-[72vh] md:h-[65vh] lg:h-[68vh] xl:h-[70vh] min-h-[440px] sm:min-h-[460px] md:min-h-[440px] lg:min-h-[480px] flex items-center justify-center overflow-hidden bg-zinc-950 py-3 sm:py-5 md:py-6 select-none"
      style={{
        perspective: 1200,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* ── Dynamic 3D Cursor Spotlight Aura (Illuminates 3D space around mouse) ── */}
      <motion.div
        className="absolute pointer-events-none rounded-full blur-3xl opacity-35 z-15"
        style={{
          x: spX,
          y: spY,
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(250,199,22,0.5) 0%, rgba(235,82,80,0.25) 40%, transparent 70%)',
          transformStyle: 'preserve-3d',
          transform: 'translateZ(35px)',
        }}
      />

      {/* ── 1. Background: sharp dishes with 3D gyroscopic floating & mouse tilt ── */}
      <div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Sharp dishes layer — 3D parallax + Z-depth */}
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
        >
          <motion.div
            className="w-full h-full relative"
            style={{ transformStyle: 'preserve-3d' }}
            animate={
              reduce
                ? undefined
                : {
                    y: [0, -14, -3, -16, 0],
                    rotateX: [0, 4.2, -3.5, 2.8, 0],
                    rotateY: [0, -5.0, 4.6, -3.4, 0],
                    scale: [1, 1.035, 1.015, 1.04, 1],
                    rotate: [0, 0.6, -0.4, 0.5, 0],
                  }
            }
            transition={{ duration: 7.2, ease: 'easeInOut', repeat: Infinity }}
          >
            {/* Dynamic 3D Ground Contact Shadow */}
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
                      scale: [1, 0.94, 0.98, 0.93, 1],
                      opacity: [0.75, 0.92, 0.82, 0.95, 0.75],
                    }
              }
              transition={{ duration: 7.2, ease: 'easeInOut', repeat: Infinity }}
            />

            {/* Swiper 3D Animated Showcase */}
            <div className="w-full h-full relative pointer-events-auto">
              <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={1200}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                  clickable: true,
                  el: '.hero-swiper-pagination',
                  bulletClass: 'hero-swiper-bullet',
                  bulletActiveClass: 'hero-swiper-bullet-active',
                }}
                className="w-full h-full hero-swiper"
              >
                {HERO_SLIDES.map((slide) => (
                  <SwiperSlide key={slide.id} className="w-full h-full relative">
                    <div className="hidden md:block w-full h-full relative" style={{ transformStyle: 'preserve-3d' }}>
                      <Image
                        src={slide.desktop}
                        alt={slide.alt}
                        fill
                        priority={slide.id === 1}
                        quality={95}
                        unoptimized={true}
                        className="object-contain object-center drop-shadow-[0_24px_55px_rgba(0,0,0,0.8)]"
                        sizes="100vw"
                      />
                    </div>
                    <div className="block md:hidden w-full h-full relative" style={{ transformStyle: 'preserve-3d' }}>
                      <Image
                        src={slide.mobile}
                        alt={slide.alt}
                        fill
                        priority={slide.id === 1}
                        quality={95}
                        unoptimized={true}
                        className="object-cover object-center drop-shadow-[0_24px_55px_rgba(0,0,0,0.8)]"
                        sizes="100vw"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── 2. Dreamy Golden Bokeh Light Orbs (Cinematic Camera Atmosphere, deep Z plane) ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[9]"
        style={{
          x: reduce ? 0 : bgX,
          y: reduce ? 0 : bgY,
          transformStyle: 'preserve-3d',
          transform: 'translateZ(-40px)',
        }}
      >
        <GoldenBokeh disabled={reduce} />
      </motion.div>

      {/* ── 3. Authentic Culinary Hearth Glow (Warm Charcoal & Ember Ambiance) ── */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 55%, rgba(250,199,22,0.22) 0%, rgba(235,82,80,0.12) 42%, rgba(0,0,0,0.55) 100%)',
          transformStyle: 'preserve-3d',
          transform: 'translateZ(-20px)',
        }}
        animate={
          reduce
            ? undefined
            : {
                opacity: [0.65, 0.90, 0.65],
              }
        }
        transition={{ duration: 4.8, ease: 'easeInOut', repeat: Infinity }}
      />

      {/* ── 3b. Subtle Bottom Hearth Flame Reflection ── */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(235,82,80,0.20) 0%, rgba(250,199,22,0.12) 45%, transparent 100%)',
          transformOrigin: 'bottom',
          transformStyle: 'preserve-3d',
          transform: 'translateZ(-10px)',
        }}
        animate={
          reduce
            ? undefined
            : {
                opacity: [0.40, 0.70, 0.40],
                scaleY: [1, 1.06, 1],
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
          transform: 'translateZ(55px)',
        }}
        className="absolute inset-0 z-[12] pointer-events-none"
      >
        <CulinarySteam disabled={reduce} />
        <GoldenEmbers disabled={reduce} />
      </motion.div>

      {/* ── 4b. Floating 3D Culinary Accents (Peri-Peri Pepper, Glowing Ember Crystals, Golden Flares) ── */}
      <motion.div
        style={{
          x: reduce ? 0 : fgX,
          y: reduce ? 0 : fgY,
          transformStyle: 'preserve-3d',
        }}
        className="absolute inset-0 z-[14] pointer-events-none"
      >
        <Floating3DAccents disabled={reduce} />
      </motion.div>

      {/* ── 5. Center content in High-Depth 3D Space ── */}
      <motion.div
        style={{
          x: reduce ? 0 : contentX,
          y: reduce ? 0 : contentY,
          transformStyle: 'preserve-3d',
          transformPerspective: 1200,
        }}
        className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto"
      >
        {/* Title badge with glowing 3D Card Tilt, Holographic Sheen & Physical Extrusion */}
        <motion.div
          style={{
            rotateX: reduce ? 0 : badgeRotX,
            rotateY: reduce ? 0 : badgeRotY,
            transformPerspective: 1000,
            transformStyle: 'preserve-3d',
            willChange: 'transform, opacity',
          }}
          initial={{ opacity: 0, y: -20, scale: 0.96 }}
          animate={{
            opacity: 1,
            y: reduce ? 0 : [0, -10, 0],
            rotateX: reduce ? 0 : [0, 2.5, -2, 0],
            rotateY: reduce ? 0 : [0, -3, 3, 0],
            scale: 1,
          }}
          transition={{
            duration: 0.5,
            ease: luxuryEase,
            delay: 0.05,
            y: { duration: 4.2, ease: 'easeInOut', repeat: Infinity, delay: 0.3 },
            rotateX: { duration: 5.6, ease: 'easeInOut', repeat: Infinity },
            rotateY: { duration: 6.4, ease: 'easeInOut', repeat: Infinity },
          }}
          whileHover={{
            scale: 1.06,
            z: 45,
            transition: { duration: 0.25 },
          }}
          className="mb-5 sm:mb-6 relative inline-block mx-4 sm:mx-0 max-w-[90vw] sm:max-w-none group cursor-pointer overflow-hidden shadow-2xl"
        >
          {/* 3D Depth Layer 0: Dark Bronze Bevel Back-Plate (Physical thickness illusion) */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#A06000] via-[#C98B00] to-[#A06000] rounded-sm transform translate-y-1 z-[-2] opacity-80"
            style={{ transform: 'translateZ(-6px)' }}
          />

          {/* Signature Yellow Plaque with Beveled Luxury Edges & Pulsing Amber Halo */}
          <motion.div
            style={{ transformStyle: 'preserve-3d', transform: 'translateZ(18px)' }}
            animate={
              reduce
                ? undefined
                : {
                    boxShadow: [
                      '0 14px 35px rgba(0,0,0,0.85), 0 0 25px rgba(250,199,22,0.6)',
                      '0 22px 60px rgba(0,0,0,0.95), 0 0 65px rgba(250,199,22,0.95), 0 0 100px rgba(255,160,0,0.5)',
                      '0 14px 35px rgba(0,0,0,0.85), 0 0 25px rgba(250,199,22,0.6)',
                    ],
                  }
            }
            transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 bg-gradient-to-r from-[#FAC716] via-[#FFD233] to-[#FAC716] border-t border-white/80 border-b border-black/30 shadow-[inset_0_2px_0_rgba(255,255,255,0.9)] z-[-1] transition-transform duration-300 group-hover:scale-105"
          />

          {/* Travelling Luxury Sheen Beam in 3D */}
          <motion.div
            style={{ transform: 'translateZ(26px)' }}
            animate={
              reduce
                ? undefined
                : {
                    x: ['-140%', '320%'],
                  }
            }
            transition={{
              duration: 2.2,
              repeat: Infinity,
              repeatDelay: 3.0,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12 pointer-events-none z-20"
          />

          <h1
            className="py-1.5 px-3.5 sm:px-5 relative z-10 text-center whitespace-normal sm:whitespace-nowrap tracking-tight break-words flex items-center justify-center gap-1 sm:gap-2"
            style={{
              fontFamily: "'Ribeat', sans-serif",
              fontStyle: 'normal',
              fontWeight: 600,
              color: 'rgb(255, 255, 255)',
              fontSize: 'clamp(28px, 5.2vw, 52px)',
              lineHeight: 'clamp(40px, 6.4vw, 64px)',
              textShadow: '0 3px 6px rgba(0,0,0,0.8), 0 6px 18px rgba(0,0,0,0.55)',
              transformStyle: 'preserve-3d',
              transform: 'translateZ(38px)',
            }}
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white/90 drop-shadow-md shrink-0 animate-pulse hidden sm:inline-block" />
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
                      initial={{ y: 16, opacity: 0, rotateX: -20, z: 0 }}
                      animate={{
                        y: reduce ? 0 : [0, -11, 2, 0],
                        z: reduce ? 0 : [0, 22, 6, 0],
                        scale: reduce ? 1 : [1, 1.1, 0.98, 1],
                        opacity: 1,
                        rotateX: 0,
                      }}
                      transition={{
                        y: {
                          duration: 2.4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: 0.35 + i * 0.08,
                        },
                        z: {
                          duration: 2.4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: 0.35 + i * 0.08,
                        },
                        scale: {
                          duration: 2.4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: 0.35 + i * 0.08,
                        },
                        opacity: { duration: 0.35, ease: luxuryEase, delay: 0.05 + i * 0.015 },
                        rotateX: { duration: 0.35, ease: luxuryEase, delay: 0.05 + i * 0.015 },
                      }}
                      whileHover={{
                        y: -14,
                        z: 52,
                        scale: 1.32,
                        color: '#FFFDF0',
                        textShadow: '0 0 25px rgba(255,255,255,1), 0 0 45px #FAC716, 0 12px 26px rgba(0,0,0,0.9)',
                        transition: { duration: 0.18 },
                      }}
                    >
                      {ch}
                    </motion.span>
                  );
                })}
                {wi < words.length - 1 ? '\u00A0' : ''}
              </span>
            ))}
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white/90 drop-shadow-md shrink-0 animate-pulse hidden sm:inline-block" />
          </h1>
        </motion.div>

        {/* Luxury Culinary Tag Badge in 3D */}
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: luxuryEase, delay: 0.12 }}
          whileHover={{ scale: 1.06, z: 24, transition: { duration: 0.2 } }}
          style={{ transformStyle: 'preserve-3d', transform: 'translateZ(18px)' }}
          className="mb-2 sm:mb-2.5 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/50 border border-[#FAC716]/40 backdrop-blur-md shadow-[0_0_15px_rgba(250,199,22,0.25)] select-none cursor-default"
        >
          <Flame className="w-3.5 h-3.5 text-[#FAC716] animate-pulse" />
          <span className="text-[10.5px] sm:text-[11.5px] font-extrabold tracking-widest uppercase text-[#FAC716]">
            100% Portuguese Flame-Grilled
          </span>
          <Flame className="w-3.5 h-3.5 text-[#FAC716] animate-pulse" />
        </motion.div>

        {/* Subtitle in 3D */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: luxuryEase, delay: 0.2 }}
          className="mb-6 sm:mb-7 max-w-4xl drop-shadow-md w-full px-4 text-sm sm:text-base md:text-4.5 leading-relaxed md:leading-7.5"
          style={{
            willChange: 'transform, opacity',
            fontFamily: '"Noto Sans", sans-serif',
            fontStyle: 'normal',
            fontWeight: 400,
            color: 'rgb(255,255,255)',
            transformStyle: 'preserve-3d',
            transform: 'translateZ(14px)',
          }}
        >
          {t('subtitle')}
        </motion.p>

        {/* 3D Action Buttons */}
        <motion.div
          style={{
            willChange: 'transform, opacity',
            transformStyle: 'preserve-3d',
            transform: 'translateZ(24px)',
          }}
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: luxuryEase, delay: 0.28 }}
          className="flex flex-row gap-3 sm:gap-5 w-full px-4 sm:px-0 sm:w-auto justify-center"
        >
          <Magnetic className="flex-1 sm:flex-none" disabled={reduce}>
            <Link
              href="https://grillados.bycalibre.ca/location"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden text-black hover:text-white group h-12 sm:h-13 px-5 sm:px-9 bg-[#FAC716] hover:bg-[#EB5250] transition-all duration-300 hover:scale-[1.03] shadow-[0_6px_22px_rgba(250,199,22,0.45)] hover:shadow-[0_8px_32px_rgba(235,82,80,0.7)] btn-chamfer flex-1 sm:flex-none inline-flex items-center justify-center text-center whitespace-nowrap cursor-pointer tracking-wide"
              style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '15px', lineHeight: '16px' }}
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
                  repeatDelay: 2.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 pointer-events-none z-20"
              />
              <ShoppingBag className="w-4 h-4 mr-2 text-current shrink-0 relative z-10 transition-transform duration-300 group-hover:scale-110" />
              <span className="whitespace-nowrap relative z-10">{t('orderNow')}</span>
            </Link>
          </Magnetic>

          <Magnetic className="flex-1 sm:flex-none" disabled={reduce}>
            <Link
              href="https://grillados.bycalibre.ca/location"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden text-black hover:text-white group h-12 sm:h-13 px-5 sm:px-9 bg-[#FAC716] hover:bg-[#EB5250] transition-all duration-300 hover:scale-[1.03] shadow-[0_4px_18px_rgba(250,199,22,0.35)] hover:shadow-[0_8px_32px_rgba(235,82,80,0.7)] btn-chamfer flex-1 sm:flex-none inline-flex items-center justify-center text-center whitespace-nowrap cursor-pointer tracking-wide"
              style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '15px', lineHeight: '16px' }}
            >
              <Utensils className="w-4 h-4 mr-2 text-current shrink-0 relative z-10 transition-transform duration-300 group-hover:scale-110" />
              <span className="whitespace-nowrap relative z-10">{t('viewMenu')}</span>
            </Link>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* ── Swiper Luxury Pagination Dots ── */}
      <div className="hero-swiper-pagination absolute bottom-2 sm:bottom-3 left-0 right-0 z-30 flex items-center justify-center gap-2 pointer-events-auto" />
    </section>
  );
};

export default HeroSection;