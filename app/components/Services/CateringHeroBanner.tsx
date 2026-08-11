"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const CateringHeroBanner = () => {
  const t = useTranslations('CateringHero');

  return (
    <section className="relative w-full h-[500px] lg:h-[650px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/catering_hero_bg.png" 
          alt="Catering Services Buffet" 
          fill 
          priority
          quality={100}
          className="object-cover object-center" 
          sizes="100vw"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none"></div>

      {/* Center Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full">
        
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-[30px]"
        >
          <div className="bg-red-600 rounded-lg py-3 px-6 md:px-8 inline-block shadow-lg">
            <h1 className="text-white font-extrabold tracking-tight text-[28px] sm:text-[34px] md:text-[42px] lg:text-[52px] xl:text-[60px] leading-none">
              {t('heading')}
            </h1>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-white text-base sm:text-lg md:text-xl mb-[30px] max-w-3xl drop-shadow-md font-medium leading-relaxed"
        >
          {t('description')}
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <button 
            aria-label={t('orderNow')}
            className="bg-[#F4C430] hover:bg-[#d72323] hover:text-white text-black font-bold rounded-md h-[52px] px-[32px] flex items-center justify-center hover:scale-[1.03] transition-all duration-300 shadow-md cursor-pointer"
          >
            {t('orderNow')}
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default CateringHeroBanner;
