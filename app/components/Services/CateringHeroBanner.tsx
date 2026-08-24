"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';

const CateringHeroBanner = () => {
  const t = useTranslations('CateringHero');

  return (
    <section className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
      
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
          className="mb-[30px]"
        >
          <div className="bg-[#EB5250] rounded-lg py-3 px-4 sm:px-6 md:px-8 inline-block shadow-lg max-w-[90vw] md:max-w-none">
            <h1 
              className="tracking-tight text-3xl sm:text-4xl md:text-[55px] leading-snug md:leading-[69px] whitespace-normal sm:whitespace-nowrap break-words"
              style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, color: 'rgb(255, 255, 255)' }}
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
          className="mb-[30px] max-w-3xl drop-shadow-md whitespace-pre-wrap"
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
          <Link 
            href="/order"
            aria-label={t('orderNow')}
            className="bg-[#F4C430] hover:bg-[#d72323] rounded-md h-[52px] px-[32px] flex items-center justify-center hover:scale-[1.03] transition-all duration-300 shadow-md cursor-pointer inline-flex"
            style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '16px', lineHeight: '16px', color: 'rgb(255, 255, 255)' }}
          >
            {t('orderNow')}
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default CateringHeroBanner;
