"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function FranchisingHero() {
  const t = useTranslations('FranchisingPage');

  return (
    <section className="relative w-full h-87.5 sm:h-100 md:h-112.5 lg:h-125 flex items-center justify-center overflow-hidden">
      
      {/* Background Image with Cinematic Zoom and Float */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1, y: [0, -10, 0] }}
        transition={{ 
          scale: { duration: 1.5, ease: "easeOut" },
          y: { duration: 6, ease: "easeInOut", repeat: Infinity }
        }}
      >
        <Image
          src="/images/hero-bg-new.png"
          alt="Restaurant Services Background"
          fill
          priority
          quality={100}
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark Overlay with subtle premium gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/50 to-black/70 z-10 pointer-events-none"></div>

      {/* Skewed Banner Content */}
      <div className="relative z-20 w-full w-full px-6 md:px-8 lg:px-12 xl:px-16 flex items-center justify-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          {/* Yellow skewed background container */}
          <motion.div 
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: -2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="absolute inset-0 bg-[#f7b41c] -skew-x-6 md:-skew-x-12 rounded-xl sm:rounded-2xl shadow-2xl transform origin-center z-[-1]"
          ></motion.div>
          
          {/* Text Content (unskewed/unrotated visually against the container) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="relative px-6 py-4 sm:px-10 sm:py-6 md:px-16 md:py-8 flex items-center justify-center"
          >
            <h1 className="text-white font-extrabold font-['Outfit',sans-serif] text-center uppercase tracking-wide
                           text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                           drop-shadow-lg"
            >
              {t('heroHeading')}
            </h1>
          </motion.div>

        </motion.div>

      </div>
      
    </section>
  );
}
