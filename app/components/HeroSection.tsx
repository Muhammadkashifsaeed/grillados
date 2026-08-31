"use client";

import Image from 'next/image';
import { ArrowRight, Menu, ChevronDown } from 'lucide-react';
import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useRouter } from '@/i18n/routing';

const HeroSection = () => {
  const t = useTranslations('Hero');
  const router = useRouter();

  return (
    <section className="relative w-full h-[40vh] lg:h-[55vh] xl:h-[60vh] min-h-87.5 md:min-h-100 flex items-center justify-center overflow-hidden bg-zinc-950 py-6 md:py-8">
      
      {/* Background Image with Cinematic Zoom and floating */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image 
          src="/images/website-main-banner2.webp" 
          alt="Grillado's Premium Grilled Chicken and Portuguese Food" 
          fill 
          priority
          quality={100}
          className="object-cover object-center" 
          sizes="100vw"
        />
      </motion.div>

      {/* Very light overlay just to ensure text readability without darkening the image too much */}
      <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none"></div>

      {/* Center Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
        
        {/* Yellow rounded badge behind heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: -2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mb-8 relative inline-block mx-4 sm:mx-0 max-w-[90vw] sm:max-w-none"
        >
          <div 
            className="absolute inset-0 bg-[#DAAF18] rounded-xl z-[-1] shadow-2xl"
          ></div>
          
          <h1
            className="text-white py-3 px-3 sm:px-5 relative z-10 text-center whitespace-normal sm:whitespace-nowrap text-3xl sm:text-4xl md:text-13.75 leading-snug md:leading-17.5 break-words"
            style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, color: 'rgb(255,255,255)' }}
          >
            {t('welcome')}
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="mb-10 max-w-4xl drop-shadow-md w-full px-4 text-sm sm:text-base md:text-4.5 leading-relaxed md:leading-7.5"
          style={{ fontFamily: '"Noto Sans", sans-serif', fontStyle: 'normal', fontWeight: 400, color: 'rgb(255,255,255)' }}
        >
          {t('subtitle')}
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
          className="flex flex-row gap-3 sm:gap-5 w-full px-4 sm:px-0 sm:w-auto justify-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05, y: -4, boxShadow: "0 10px 25px -5px rgba(224,75,81,0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/order')}
            className="group flex items-center justify-center gap-1 sm:gap-2 bg-[#E04B51] text-white px-3 py-3 sm:px-8 sm:py-4 rounded-md transition-colors duration-300 hover:bg-[#c73f45] shadow-lg flex-1 sm:flex-none text-3.75 sm:text-5"
            style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, lineHeight: '20px', color: 'rgb(255,255,255)' }}
          >
            <span className="whitespace-nowrap">{t('orderNow')}</span>
            <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform shrink-0" />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, y: -4, boxShadow: "0 10px 25px -5px rgba(224,75,81,0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/order')}
            className="group flex items-center justify-center gap-1 sm:gap-2 bg-[#E04B51] text-white px-3 py-3 sm:px-8 sm:py-4 rounded-md transition-colors duration-300 hover:bg-[#c73f45] shadow-lg flex-1 sm:flex-none text-3.75 sm:text-5"
            style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, lineHeight: '20px', color: 'rgb(255,255,255)' }}
          >
            <Menu className="w-4 h-4 sm:w-6 sm:h-6 shrink-0" />
            <span className="whitespace-nowrap">{t('viewMenu')}</span>
          </motion.button>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-center pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default HeroSection;
