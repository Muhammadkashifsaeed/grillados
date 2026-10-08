"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function FranchisingContent() {
  const t = useTranslations('FranchisingPage');

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 w-full font-['Outfit',sans-serif]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Heading */}
        <h2 
          className="text-center uppercase tracking-wide mb-4 drop-shadow-sm"
          style={{ fontFamily: "'Ribeat', sans-serif", fontWeight: 600, color: 'rgb(23, 23, 23)', fontSize: 'clamp(22px, 3.2vw, 32px)', lineHeight: 'clamp(26px, 4vw, 40px)' }}
        >
          {t('whatWeDo')}
        </h2>
        <h3 
          className="text-center capitalize tracking-wide mb-4 drop-shadow-sm"
          style={{ fontFamily: "'Ribeat', sans-serif", fontWeight: 600, color: 'rgb(250, 199, 22)', fontSize: 'clamp(29px, 4.8vw, 48px)', lineHeight: 'clamp(39px, 6vw, 60px)' }}
        >
          {t('whatWeDoSub')}
        </h3>
        
        {/* Divider */}
        <div className="w-22.5 h-[2px] bg-black mb-12 rounded"></div>
        
        {/* Content Container */}
        <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between">
          
          {/* Left Side: Images */}
          <div className="w-full lg:w-1/2 flex flex-row gap-3.5 sm:gap-6 justify-center items-center py-8">
            <div className="relative flex-1 w-full h-[294px] sm:h-[368px] md:h-[420px] rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.1)] -translate-y-6">
              <Image 
                src="/images/Nos1.png" 
                alt="Grillados Franchise Example 1" 
                fill sizes="(max-width: 1024px) 50vw, 25vw" 
                className="object-cover" 
              />
            </div>
            <div className="relative flex-1 w-full h-[294px] sm:h-[368px] md:h-[420px] rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.1)] translate-y-6">
              <Image 
                src="/images/Nos2.jpg" 
                alt="Grillados Franchise Example 2" 
                fill sizes="(max-width: 1024px) 50vw, 25vw" 
                className="object-cover" 
              />
            </div>
          </div>
          
          {/* Right Side: Paragraphs */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 text-[#727272] text-4 leading-6 font-normal font-['Poppins',sans-serif]">
            <p>
              {t('p1_1')}
              <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: 'rgb(250, 174, 64)', fontSize: '16px', lineHeight: '24px' }}>{t('p1_highlight')}</span>
            </p>
            <p>
              {t('p2_1')}
              <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: 'rgb(250, 174, 64)', fontSize: '16px', lineHeight: '24px' }}>{t('p2_highlight')}</span>
            </p>
            <p>
              {t('p3')}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
