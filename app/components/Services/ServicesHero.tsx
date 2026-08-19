"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function ServicesHero() {
  const t = useTranslations('ServicesHero');
  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-zinc-950 py-6 md:py-8">
      
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
          src="/images/catering-wedding.jpg"
          alt="Restaurant Services Background"
          fill
          priority
          quality={100}
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark Overlay with subtle gradient for depth */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/60 to-black/80 z-10 pointer-events-none"></div>

      {/* Center Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
        
        {/* Yellow rounded badge behind heading */}
        <div className="relative inline-block max-w-[90vw]">
          <motion.h1 
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="tracking-tight py-3 px-6 rounded-xl bg-[#DAAF18] shadow-2xl relative z-10 uppercase text-center whitespace-normal md:whitespace-nowrap"
            style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '45px', lineHeight: '60px', color: 'rgb(255,255,255)' }}
          >
            {t('titlePart1')}<br className="block md:hidden" /> {t('titlePart2')}
          </motion.h1>
        </div>

      </div>
      
    </section>
  );
}
