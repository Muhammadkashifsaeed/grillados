"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const BookEventCTASection = () => {
  const t = useTranslations('BookEventCTA');

  return (
    <section className="relative w-full min-h-[450px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image - Reused from Hero */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/vecteezy_ai-generated-banque.jpg" 
          alt="Grillado Catering Book Event" 
          fill 
          priority
          quality={100}
          className="object-cover object-center" 
          sizes="100vw"
        />
      </div>

      {/* Dark Overlay - Identical to Hero */}
      <div className="absolute inset-0 bg-black/65 z-10 pointer-events-none"></div>

      {/* Content Center */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full w-full px-6 md:px-8 lg:px-12 xl:px-16 text-center py-10">
        
        {/* Small Title */}
        <motion.h3 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-[#F5A623] text-[32px] md:text-[42px] lg:text-[54px] font-bold font-['Outfit',sans-serif] mb-2"
        >
          {t('smallTitle')}
        </motion.h3>

        {/* Main Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white font-bold uppercase tracking-wide text-[40px] md:text-[56px] lg:text-[72px] leading-tight"
        >
          {t('mainTitle')}
        </motion.h2>

        {/* Divider */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-[120px] h-[3px] bg-white rounded-full my-6"
        ></motion.div>

        {/* Description Paragraphs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white text-[18px] leading-relaxed max-w-[700px] mb-10"
        >
          <p className="mb-2">{t('p1')}</p>
          <p className="mb-2">{t('p2')}</p>
          <p>{t('p3')}</p>
        </motion.div>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#fbbc04] hover:bg-[#d72323] hover:text-white text-black font-bold rounded-lg h-[56px] px-10 shadow-md transition-all duration-300 hover:scale-[1.03] w-full max-w-[320px] md:w-auto cursor-pointer"
        >
          {t('button')}
        </motion.button>

      </div>
    </section>
  );
};

export default BookEventCTASection;
