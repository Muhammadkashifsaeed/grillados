"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';

const CateringHeroBanner = () => {
  const t = useTranslations('CateringHero');

  return (
    <section className="relative w-full h-100 lg:h-125 flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/vecteezy_ai-generated-banque.jpg" 
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
          className="mb-7.5"
        >
          <div className="bg-[#EB5250] rounded-none px-2 py-1 inline-block shadow-lg max-w-[90vw] md:max-w-none">
            <h1 
              className="tracking-tight whitespace-normal sm:whitespace-nowrap break-words"
              style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, color: 'rgb(255, 255, 255)', fontSize: 'clamp(33px, 5.5vw, 55px)', lineHeight: 'clamp(45px, 6.9vw, 69px)' }}
            >
              {t('heading')}
            </h1>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mb-7.5 max-w-3xl drop-shadow-md whitespace-pre-wrap"
          style={{ fontFamily: "'Noto Sans', sans-serif", fontStyle: 'normal', fontWeight: 400, fontSize: '18px', lineHeight: '30px', color: 'rgb(255, 255, 255)' }}
        >
          {t('description')}
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <Link href="https://grillados.bycalibre.ca/location" target="_blank" rel="noopener noreferrer" aria-label={t('orderNow')} className="text-black hover:text-white bg-[#FAC716] hover:bg-[#EB5250] rounded-md h-13 px-8 flex items-center justify-center hover:scale-[1.03] transition-all duration-300 shadow-md cursor-pointer inline-flex" style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '16px', lineHeight: '16px' }} >
            {t('orderNow')}
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default CateringHeroBanner;
