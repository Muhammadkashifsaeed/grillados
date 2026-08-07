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
        <h2 className="text-3xl md:text-5xl font-extrabold text-center uppercase tracking-wide mb-2 text-black drop-shadow-sm">
          {t('whatWeDo')}
        </h2>
        <h3 className="text-2xl md:text-4xl font-extrabold text-center uppercase tracking-wide mb-4 text-[#f7b41c] drop-shadow-sm">
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
                fill 
                className="object-cover" 
              />
            </div>
            <div className="relative flex-1 w-full h-[280px] sm:h-[350px] md:h-[400px] rounded-[20px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.1)] translate-y-6">
              <Image 
                src="/images/Nos2.jpg" 
                alt="Grillados Franchise Example 2" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
          
          {/* Right Side: Paragraphs */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 text-gray-800 text-lg md:text-xl leading-relaxed">
            <p>
              {t('p1_1')}
              <span className="text-[#f7b41c] font-bold">{t('p1_highlight')}</span>
            </p>
            <p>
              {t('p2_1')}
              <span className="text-[#f7b41c] font-bold">{t('p2_highlight')}</span>
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
