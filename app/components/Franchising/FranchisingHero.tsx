"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function FranchisingHero() {
  const t = useTranslations('FranchisingPage');

  return (
    <section className="relative w-full h-[35vh] md:h-[40vh] min-h-75 flex items-center justify-center overflow-hidden">

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

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative inline-block mx-4"
        >
          {/* Yellow skewed background container */}
          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: -2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="absolute inset-0 bg-[#DAAF18] rounded-xl z-[-1] shadow-2xl transform origin-center"
          ></motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="relative px-5 py-3 flex items-center justify-center"
          >
            <h1 
              className="text-white text-center uppercase whitespace-normal sm:whitespace-nowrap drop-shadow-lg"
              style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, color: 'rgb(255, 255, 255)', fontSize: '45px', lineHeight: '60px' }}
            >
              {t('heroHeading')}
            </h1>
          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}
