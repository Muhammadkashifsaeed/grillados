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
    <section className="relative w-full h-[85vh] min-h-150 flex items-center justify-center overflow-hidden bg-zinc-950 py-6 md:py-8">
      
      {/* Background Image with Cinematic Zoom and floating */}
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
          alt="Premium Fast Food Spread" 
          fill 
          priority
          quality={100}
          className="object-cover object-center" 
          sizes="100vw"
        />
      </motion.div>

      {/* Dark Overlay with subtle gradient for depth */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/60 to-black/80 z-10 pointer-events-none"></div>

      {/* Center Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
        
        {/* Yellow rounded badge behind heading */}
        <div className="mb-8 relative inline-block">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="absolute inset-0 bg-[#DAAF18] rounded-xl z-[-1] shadow-2xl"
            style={{ transformOrigin: 'center' }}
          ></motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-extrabold text-white tracking-tight py-3 px-4 sm:px-5 relative z-10 font-['Outfit',sans-serif] whitespace-nowrap"
          >
            {t('welcome')}
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-100 mb-10 max-w-2xl drop-shadow-md font-medium leading-relaxed"
        >
          {t('subtitle')}
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
        >
          <motion.button 
            whileHover={{ scale: 1.05, y: -4, boxShadow: "0 10px 25px -5px rgba(224,75,81,0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/order')}
            className="group flex items-center justify-center gap-2 bg-[#E04B51] text-white px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300 hover:bg-[#c73f45] shadow-lg"
          >
            <span>{t('orderNow')}</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, y: -4, boxShadow: "0 10px 25px -5px rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/order')}
            className="group flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300 shadow-lg"
          >
            <Menu className="w-6 h-6" />
            <span>{t('viewMenu')}</span>
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
