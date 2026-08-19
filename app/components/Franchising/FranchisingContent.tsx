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
        <h2 className="text-[#171717] text-[32px] leading-[40px] font-semibold font-['Ribeat',sans-serif] text-center uppercase tracking-wide mb-2 drop-shadow-sm">
          {t('whatWeDo')}
        </h2>
        <h3 className="text-[#FAC716] text-[48px] leading-[60px] font-semibold font-['Ribeat',sans-serif] text-center uppercase tracking-wide mb-4 drop-shadow-sm">
          {t('whatWeDoSub')}
        </h3>
        
        {/* Divider */}
        <div className="w-24 h-1 bg-black mb-12 rounded"></div>
        
        {/* Content Container */}
        <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between">
          
          {/* Left Side: Images */}
          <div className="w-full lg:w-1/2 flex flex-row gap-[24px] justify-center items-center py-8">
            <div className="relative flex-1 w-full h-[280px] sm:h-[350px] md:h-[400px] rounded-[20px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.1)] -translate-y-6">
              <Image 
                src="/images/Nos1.png" 
                alt="Grillados Franchise Example 1" 
                fill sizes="100vw" 
                className="object-cover" 
              />
            </div>
            <div className="relative flex-1 w-full h-[280px] sm:h-[350px] md:h-[400px] rounded-[20px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.1)] translate-y-6">
              <Image 
                src="/images/Nos2.jpg" 
                alt="Grillados Franchise Example 2" 
                fill sizes="100vw" 
                className="object-cover" 
              />
            </div>
          </div>
          
          {/* Right Side: Paragraphs */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 text-[#727272] text-[16px] leading-[24px] font-normal font-['Poppins',sans-serif]">
            <p>
              {t('p1_1')}
              <span className="text-[#DAAF18] font-bold">{t('p1_highlight')}</span>
            </p>
            <p>
              {t('p2_1')}
              <span className="text-[#DAAF18] font-bold">{t('p2_highlight')}</span>
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
