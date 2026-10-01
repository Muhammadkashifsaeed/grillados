"use client";

import Image from 'next/image';
import { ArrowRight, Menu, ChevronDown } from 'lucide-react';
import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useRouter, Link } from '@/i18n/routing';

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

      {/* Black overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none"></div>

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
            className="absolute inset-0 bg-[#D8AC15] rounded-xl z-[-1] shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
          ></div>
          
          <h1
            className="text-white py-1 px-2 sm:px-3 relative z-10 text-center whitespace-normal sm:whitespace-nowrap tracking-tight text-4xl sm:text-5xl md:text-[66px] leading-tight md:leading-[1.2] break-words"
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
          <Link 
            href="https://grillados.bycalibre.ca/location" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-1 sm:gap-2 bg-[#D8AC15] hover:bg-[#EB5250] text-zinc-900 hover:text-white px-4 py-3 sm:px-8 sm:py-4 rounded-lg transition-all duration-300 shadow-md hover:-translate-y-1 hover:shadow-xl flex-1 sm:flex-none text-3.75 sm:text-5"
            style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, lineHeight: '20px', color: 'rgb(255,255,255)' }}
          >
            <span className="whitespace-nowrap">{t('orderNow')}</span>
          </Link>
          
          <Link 
            href="https://grillados.bycalibre.ca/location" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-1 sm:gap-2 bg-[#D8AC15] hover:bg-[#EB5250] text-zinc-900 hover:text-white px-4 py-3 sm:px-8 sm:py-4 rounded-lg transition-all duration-300 shadow-md hover:-translate-y-1 hover:shadow-xl flex-1 sm:flex-none text-3.75 sm:text-5"
            style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, lineHeight: '20px', color: 'rgb(255,255,255)' }}
          >
            <span className="whitespace-nowrap">{t('viewMenu')}</span>
          </Link>
        </motion.div>

      </div>

    </section>
  );
};

export default HeroSection;
