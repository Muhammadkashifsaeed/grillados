"use client";

import React from 'react';
import Image from 'next/image';
import { Link } from "@/i18n/routing";
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';

export default function BirthdayCateringSection() {
  const locale = useLocale();
  const t = useTranslations('BirthdayCatering');

  return (
    <section className="relative w-full overflow-hidden bg-white">
      
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 items-stretch">
        
        {/* Left Column: sera.png */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative w-full h-80 sm:h-100 md:h-125 lg:h-150 xl:h-175 overflow-hidden shadow-2xl order-2 md:order-1"
        >
          <Image
            src="/images/father-hand-lights-candles-2023-11-27-05-35-32-utc_11zon-scaled-1.jpg"
            alt="Birthday Catering"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Right Column: culinary.png + Content */}
        <div className="flex flex-col items-center justify-center w-full h-full px-6 md:px-12 lg:px-20 xl:px-24 py-8 md:py-10 order-1 md:order-2">
          
          {/* Top Image: culinary.png (Icon Size) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative w-20 h-20 md:w-25 md:h-25 overflow-hidden mb-6"
          >
            <Image
              src="/images/culinary.png"
              alt="Culinary Delights"
              fill
              className="object-contain"
              sizes="100px"
            />
          </motion.div>

          {/* Bottom Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center text-center"
          >
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

        </div>

      </div>
    </section>
  );
}
