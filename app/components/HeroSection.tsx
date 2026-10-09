"use client";

import Image from 'next/image';
import React, { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';

const HeroSection = () => {
  const t = useTranslations('Hero');

  // Generate 54 high-density GPU-accelerated particles (27 Sparkle Stars + 27 Glowing Orbs "Goles")
  const heroParticles = useMemo(() => {
    const colors = [
      '#FAC716', // Super Gold
      '#FF3B30', // Flame Red
      '#FF9500', // Electric Amber
      '#00F2FE', // Cyan Crystal
      '#FF007F', // Neon Magenta
      '#9D00FF', // Electric Violet
    ];

    return Array.from({ length: 54 }).map((_, i) => ({
      id: i,
      isStar: i % 2 === 0, // 50% SVG Sparkle Stars, 50% Glowing Orbs (Circles)
      size: 22 + (i % 8) * 6, // 22px to 64px extra-bold glowing elements
      left: `${(i * 1.85 + 0.5) % 98}%`,
      delay: (i * 0.18) % 5.5,
      duration: 5.0 + (i % 5) * 1.4, // 5.0s to 10.6s steady silky ascent
      color: colors[i % colors.length],
      sway: (i % 2 === 0 ? 1 : -1) * (28 + (i % 5) * 18),
    }));
  }, []);

  return (
    <section className="relative w-full h-[85vh] md:h-[50vh] lg:h-[55vh] xl:h-[60vh] min-h-[700px] md:min-h-100 flex items-center justify-center overflow-hidden bg-zinc-950 py-6 md:py-8 select-none">
      
      {/* 1. Silky Smooth GPU-Accelerated Ken-Burns Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ willChange: 'transform' }}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ 
          duration: 16, 
          ease: "easeInOut", 
          repeat: Infinity,
        }}
      >
        {/* Desktop Image */}
        <div className="hidden md:block w-full h-full relative">
          <Image 
            src="/images/website-main-banner2.webp" 
            alt="Grillado's Premium Grilled Chicken and Portuguese Food" 
            fill 
            priority
            quality={100}
            unoptimized={true}
            className="object-cover object-center" 
            sizes="100vw"
          />
        </div>
        
        {/* Mobile Image */}
        <div className="block md:hidden w-full h-full relative">
          <Image 
            src="/images/website-main-banner-Mobile-1.webp" 
            alt="Grillado's Premium Grilled Chicken and Portuguese Food" 
            fill 
            priority
            quality={100}
            unoptimized={true}
            className="object-cover object-center" 
            sizes="100vw"
          />
        </div>
      </motion.div>

      {/* 2. Light Crisp Overlay to preserve image brightness */}
      <div className="absolute inset-0 bg-black/10 md:bg-black/45 z-10 pointer-events-none"></div>

      {/* 3. Supercharged Multi-Spectrum Ambient Pulsing Radial Glow Lights */}
      <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center overflow-hidden">
        {/* Left Golden Cyan Glow */}
        <motion.div
          style={{ willChange: 'transform, opacity' }}
          animate={{
            scale: [0.9, 1.4, 0.9],
            opacity: [0.55, 0.9, 0.55],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] rounded-full bg-gradient-to-r from-[#FAC716]/55 via-[#00F2FE]/35 to-transparent blur-3xl absolute -left-28"
        />

        {/* Right Red Magenta Glow */}
        <motion.div
          style={{ willChange: 'transform, opacity' }}
          animate={{
            scale: [1.4, 0.9, 1.4],
            opacity: [0.6, 0.95, 0.6],
          }}
          transition={{
            duration: 7,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="w-[550px] h-[550px] sm:w-[850px] sm:h-[850px] rounded-full bg-gradient-to-l from-[#FF007F]/50 via-[#FF5500]/40 to-transparent blur-3xl absolute -right-28"
        />
      </div>

      {/* 4. Silky-Smooth 60FPS Multi-Color Stars AND Orbs ("Goles") Stream Layer */}
      <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden">
        {heroParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute flex items-center justify-center pointer-events-none"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.left,
              bottom: '-14%',
              color: particle.color,
              willChange: 'transform, opacity',
            }}
            animate={{
              y: ['0vh', '-115vh'],
              x: [0, particle.sway, 0],
              opacity: [0, 0.98, 0.98, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: particle.duration,
              ease: "linear",
              repeat: Infinity,
              delay: particle.delay,
            }}
          >
            {particle.isStar ? (
              /* 4-pointed Glowing SVG Sparkle Star */
              <svg 
                className="w-full h-full fill-current drop-shadow-[0_0_18px_currentColor] drop-shadow-[0_0_35px_currentColor]" 
                viewBox="0 0 24 24"
              >
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
              </svg>
            ) : (
              /* Glowing Circle / Orb ("Gole") Particle */
              <div 
                className="w-full h-full rounded-full" 
                style={{ 
                  backgroundColor: particle.color, 
                  boxShadow: `0 0 22px ${particle.color}, 0 0 45px ${particle.color}` 
                }} 
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* 5. Center Content with Fluid Staggered Entrance & Smooth Floating Animations */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
        
        {/* Yellow Title Badge with Fluid Pop Entrance & Smooth Mid-Air Float */}
        <motion.div 
          style={{ willChange: 'transform, opacity' }}
          initial={{ opacity: 0, y: -45, scale: 0.85 }}
          animate={{ 
            opacity: 1, 
            y: [0, -14, 0], 
            scale: 1,
          }}
          transition={{ 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1],
            y: { duration: 4.5, ease: "easeInOut", repeat: Infinity }
          }}
          className="mb-8 relative inline-block mx-4 sm:mx-0 max-w-[90vw] sm:max-w-none group cursor-pointer"
        >
          {/* Smooth Pulsing Glow Border Frame */}
          <motion.div 
            animate={{
              boxShadow: [
                '0 10px 30px rgba(0,0,0,0.85)',
                '0 25px 70px rgba(250,199,22,0.9)',
                '0 10px 30px rgba(0,0,0,0.85)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[#FAC716] rounded-none z-[-1] transition-transform duration-300 group-hover:scale-105"
          />

          <h1
            className="py-1 px-2 sm:px-3 relative z-10 text-center whitespace-normal sm:whitespace-nowrap tracking-tight break-words"
            style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, color: 'rgb(255, 255, 255)', fontSize: 'clamp(33px, 5.5vw, 55px)', lineHeight: 'clamp(45px, 6.9vw, 69px)' }}
          >
            {t('welcome')}
          </h1>
        </motion.div>

        {/* Subtitle Text with Fluid Fade Up */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mb-10 max-w-4xl drop-shadow-md w-full px-4 text-sm sm:text-base md:text-4.5 leading-relaxed md:leading-7.5"
          style={{ willChange: 'transform, opacity', fontFamily: '"Noto Sans", sans-serif', fontStyle: 'normal', fontWeight: 400, color: 'rgb(255,255,255)' }}
        >
          {t('subtitle')}
        </motion.p>

        {/* Action Buttons with High-Strength Pulse Glow */}
        <motion.div 
          style={{ willChange: 'transform, opacity' }}
          initial={{ opacity: 0, y: 35, scale: 0.88 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.38 }}
          className="flex flex-row gap-3 sm:gap-5 w-full px-4 sm:px-0 sm:w-auto justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.06, y: -4 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(250,199,22,0.45)',
                '0 0 45px rgba(250,199,22,0.95)',
                '0 0 20px rgba(250,199,22,0.45)'
              ]
            }}
            transition={{
              boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
              type: "spring", stiffness: 350, damping: 16 
            }}
            className="flex-1 sm:flex-none rounded-lg"
          >
            <Link 
              href="https://grillados.bycalibre.ca/location" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative overflow-hidden text-black hover:text-white group flex items-center justify-center gap-1.5 sm:gap-2 bg-[#FAC716] hover:bg-[#EB5250] transition-colors duration-300 shadow-xl rounded-lg px-4 py-3 sm:px-8 sm:py-4 w-full text-3.75 sm:text-5" 
              style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, lineHeight: '20px' }}
            >
              <span className="whitespace-nowrap relative z-10">{t('orderNow')}</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1.5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.06, y: -4 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(250,199,22,0.45)',
                '0 0 45px rgba(250,199,22,0.95)',
                '0 0 20px rgba(250,199,22,0.45)'
              ]
            }}
            transition={{
              boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
              type: "spring", stiffness: 350, damping: 16 
            }}
            className="flex-1 sm:flex-none rounded-lg"
          >
            <Link 
              href="https://grillados.bycalibre.ca/location" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative overflow-hidden text-black hover:text-white group flex items-center justify-center gap-1.5 sm:gap-2 bg-[#FAC716] hover:bg-[#EB5250] transition-colors duration-300 shadow-xl rounded-lg px-4 py-3 sm:px-8 sm:py-4 w-full text-3.75 sm:text-5" 
              style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, lineHeight: '20px' }}
            >
              <span className="whitespace-nowrap relative z-10">{t('viewMenu')}</span>
            </Link>
          </motion.div>
        </motion.div>

      </div>

    </section>
  );
};

export default HeroSection;











