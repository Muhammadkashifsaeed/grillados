"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const BlogsHeroBanner = () => {
  const t = useTranslations('BlogsHero');
  return (
    <section className="relative w-full h-62.5 md:h-75 lg:h-87.5 flex items-center justify-center overflow-hidden bg-black">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/WhatsApp-Image.jpeg" 
          alt="Blogs Background" 
          fill 
          priority
          quality={100}
          className="object-cover object-center" 
          sizes="100vw"
        />
      </div>

      {/* Dark Overlay for better text readability (lightened for visibility) */}
      <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none"></div>

      {/* Center Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full px-4">
        
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-2"
        >
          <h1 className="text-[#FFFFFF] text-13 leading-8.5 font-bold font-['Ribeat',sans-serif] tracking-tight drop-shadow-lg uppercase">
            {t('title')}
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-[#FFFFFF] text-6 leading-10 font-normal font-['Poppins',sans-serif] max-w-2xl drop-shadow-md"
        >
          {t('subtitle')}
        </motion.p>

      </div>
    </section>
  );
};

export default BlogsHeroBanner;
