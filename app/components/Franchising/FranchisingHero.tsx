"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function FranchisingHero() {
  const t = useTranslations('FranchisingPage');

  return (
    <section className="relative w-full h-[25vh] md:h-[40vh] min-h-[220px] md:min-h-[300px] flex items-center justify-center overflow-hidden">

      {/* Background Image with Cinematic Zoom and Float */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1, y: [0, -5, 0] }}
        transition={{
          scale: { duration: 1.5, ease: "easeOut" },
          y: { duration: 6, ease: "easeInOut", repeat: Infinity }
        }}
      >
        <Image
          src="/images/video-1080p-11-2.png"
          alt="Restaurant Services Background"
          fill
          priority
          quality={100}
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark Overlay with subtle premium gradient - Very light for maximum image visibility */}
      <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none"></div>

      {/* Skewed Banner Content */}
      <div className="relative z-20 flex items-center justify-center px-6 text-center">

        <div
          className="z-10 bg-[#FAC716] px-3 sm:px-5 py-1 sm:py-2 rounded-none shadow-lg border-2 border-white/20 inline-block transform -rotate-3 cursor-default"
        >
          <h1 
            className="text-white text-center capitalize whitespace-normal sm:whitespace-nowrap drop-shadow-sm tracking-wide"
            style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, color: 'rgb(255, 255, 255)', fontSize: 'clamp(27px, 4.5vw, 45px)', lineHeight: 'clamp(39px, 6vw, 60px)' }}
          >
            {t('heroHeading')}
          </h1>
        </div>

      </div>

    </section>
  );
}
