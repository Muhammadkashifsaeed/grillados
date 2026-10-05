"use client";

import React from 'react';
import Image from 'next/image';
import { Link } from "@/i18n/routing";
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';

export default function WeddingCateringSection() {
  const locale = useLocale();
  const t = useTranslations('WeddingCatering');
  
  return (
    <section className="relative w-full overflow-hidden bg-white">
      
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 items-stretch">
        
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center text-center order-1 md:order-1 px-6 md:px-12 lg:px-20 xl:px-24 py-8 md:py-10"
        >
          {/* Divider */}
          <div className="w-37.5 mb-6 flex justify-center">
             <Image 
               src="/images/catering.png" 
               alt="Divider" 
               width={200} 
               height={20} 
               className="w-full h-auto object-contain"
             />
          </div>

          {/* Heading */}
          <div className="text-center">
<h2 
            className="uppercase leading-tight tracking-wide mb-4 text-center transform -rotate-2 inline-block text-center"
            style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: 'clamp(22px, 3vw, 30px)', lineHeight: 'clamp(25px, 3.9vw, 39px)', color: 'rgb(0,0,0)' }}
          >
            {t('heading')}
          </h2>
</div>

          {/* Divider */}
          <div className="w-16 h-1 bg-black rounded-full mb-6 mx-auto"></div>

          {/* Description */}
          <p 
            className="mb-8 text-center max-w-[380px] mx-auto"
            style={{ fontFamily: "'Noto Sans', sans-serif", fontStyle: 'normal', fontWeight: 400, fontSize: '17px', lineHeight: '28px', color: 'rgb(0,0,0)' }}
          >
            {t('description')}
          </p>

          {/* Button */}
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
            className="px-10 py-3 sm:py-4 bg-[#FAC716] hover:bg-[#EB5250] text-black hover:text-white hover:text-white transition-all duration-300 hover:scale-[1.03] shadow-md uppercase tracking-wide rounded-none"
            style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '16px', lineHeight: '16px', color: 'rgb(255,255,255)' }}
          >
              {t('contactUs')}
          </button>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative w-full h-80 sm:h-100 md:h-125 lg:h-150 xl:h-175 overflow-hidden shadow-2xl order-2 md:order-2"
        >
          <Image
            src="/images/vase-with-flowers-and-leaves-2024-09-22-22-21-33-utc_11zon-scaled-1.jpg"
            alt="Wedding Catering Service"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

      </div>
    </section>
  );
}
