"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function FranchisingHero() {
  const t = useTranslations('FranchisingPage');

  return (
    <section className="relative w-full h-[40vh] md:h-[50vh] min-h-[300px] flex items-center justify-center overflow-hidden">

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
            className="absolute inset-0 bg-[#DAAF18] -skew-x-6 md:-skew-x-12 rounded-xl sm:rounded-2xl shadow-2xl transform origin-center z-[-1]"
          ></motion.div>

          {/* Text Content (unskewed/unrotated visually against the container) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="relative px-4 py-2 md:px-6 md:py-3 flex items-center justify-center"
          >
            <h1 className="text-white font-[600] font-['Ribeat',sans-serif] text-center uppercase tracking-wide
                           text-[45px] leading-[60px]
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
