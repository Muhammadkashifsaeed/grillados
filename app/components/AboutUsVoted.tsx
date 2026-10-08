"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const AboutUsVoted = () => {
  const t = useTranslations('AboutUs');
  return (
    <section className="relative bg-[#fafafa] py-8 md:py-12 px-4 sm:px-6 lg:px-8 w-full flex justify-center items-center overflow-hidden">
      
      {/* Left Corner Fixed Image */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[10%] top-1/2 -translate-y-1/2 w-16 h-16 sm:w-24 sm:h-24 opacity-80 pointer-events-none hidden md:block"
      >
        <Image 
          src="/images/was.png" 
          alt="Was Decoration" 
          fill sizes="(max-width: 640px) 64px, 96px" 
          className="object-contain object-left"
        />
      </motion.div>

      {/* Center Box */}
      <div className="relative z-10 w-full max-w-xl min-h-56 bg-[#808080] border-2 border-[#FACC15] rounded-xl shadow-xl px-8 py-5 sm:px-10 sm:py-6 text-center flex flex-col items-center justify-center mx-4 sm:mx-12">
        
        <p 
          className="mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
          style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 400, color: 'rgb(255, 255, 255)', fontSize: '20px', lineHeight: '24px' }}
        >
          {t.rich('votedText1', { span: (chunks) => <span className="text-[#FACC15] font-bold">{chunks}</span> })}
        </p>

        <h2 
          className="font-semibold capitalize tracking-wide mb-3 drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)] whitespace-normal sm:whitespace-nowrap text-xl sm:text-7 leading-snug sm:leading-9 break-words text-center"
          style={{ fontFamily: "'Ribeat', sans-serif", color: 'rgb(250, 199, 22)' }}
        >
          {t('votedText2')}
        </h2>

        <p 
          className="italic font-normal opacity-100 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
          style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 400, color: 'rgb(255, 240, 240)', fontSize: '16px', lineHeight: '24px' }}
        >
          {t.rich('votedText3', { span: (chunks) => <span style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 700, fontStyle: 'italic', color: 'rgb(255, 240, 240)', fontSize: '16px', lineHeight: '24px' }}>{chunks}</span> })}
        </p>

      </div>
      
    </section>
  );
};

export default AboutUsVoted;
