"use client";

import React from 'react';
import Image from 'next/image';
import { Link } from "@/i18n/routing";
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function EventsCateringSection() {
  const t = useTranslations('EventsCatering');
  const locale = useLocale();
  
  return (
    <section className="relative w-full overflow-hidden bg-white">
      
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 items-stretch">
        
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center text-center order-2 md:order-1 px-6 md:px-12 lg:px-20 xl:px-24 py-12 md:py-16"
        >
          {/* Top Icon: focus.png */}
          <div className="relative w-20 h-20 md:w-25 md:h-25 mb-6">
            <Image
              src="/images/focus.png"
              alt="Focus Icon"
              fill
              className="object-contain"
              sizes="100px"
            />
          </div>

          {/* Heading */}
          <h2 
            className="uppercase leading-tight tracking-wide mb-6 text-center"
            style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '30px', lineHeight: '39px', color: 'rgb(0,0,0)' }}
          >
            Event Catering
          </h2>

          {/* Divider */}
          <div className="w-16 h-1 bg-black rounded-full mb-6 mx-auto"></div>

          {/* Description */}
          <p 
            className="mb-8 text-center"
            style={{ fontFamily: "'Noto Sans', sans-serif", fontStyle: 'normal', fontWeight: 400, fontSize: '17px', lineHeight: '28px', color: 'rgb(0,0,0)' }}
          >
            When a big event comes calling, focus on what matters, and leave the food to us. With a variety of dishes and the best of preparation, Grillado’s is prepared to make your event, a memorable one.
          </p>

          {/* Button */}
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
            className="px-10 py-3 sm:py-4 bg-[#fbbc04] hover:bg-[#d72323] active:scale-95 shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wide rounded-none"
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
          className="relative w-full h-100 sm:h-125 md:h-150 lg:h-175 xl:h-200 overflow-hidden shadow-2xl order-1 md:order-2"
        >
          <Image
            src="/images/akerrs.png"
            alt="Events Catering"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

      </div>
    </section>
  );
}
