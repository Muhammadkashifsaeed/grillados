'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Flame, ArrowRight, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const NewDishes = () => {
  const t = useTranslations('NewDishes');
  const videoId = "QpcvfWCcBVY"; // Original video

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="w-full">
        
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Left Column: YouTube Video */}
          <div className="w-full lg:w-1/2 relative overflow-hidden aspect-video shrink-0 bg-zinc-900 self-end">
            {/* 16:9 Aspect Ratio container prevents black bars, full 100% width/height shows everything clearly */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&playlist=${videoId}&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3`}
                title="Grillados New Dishes"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-full"
                style={{ border: 'none' }}
              ></iframe>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center px-6 md:px-12 lg:px-16 xl:px-24 py-4 md:py-6">
            
            {/* Custom SVG Icon */}
            <div className="mb-4 flex justify-center">
              <Image src="/images/test-1.svg" alt="Grillados Icon" width={96} height={96} className="w-20 h-20 md:w-24 md:h-24 object-contain" />
            </div>
            
            {/* Heading */}
            <h2 className="text-xl md:text-2xl font-extrabold text-zinc-900 font-['Outfit',sans-serif] uppercase tracking-wide mb-6">
              {t('heading')}
            </h2>
            
            {/* Divider Centered */}
            <div className="w-24 h-1.5 bg-black rounded-full mb-8"></div>
            
            {/* Description */}
            <p className="text-base md:text-base text-gray-600 mb-10 leading-relaxed max-w-lg">
              {t('description')}
            </p>
            
            {/* Buttons: Yellow default, Red on hover */}
            <div className="flex flex-row gap-2 sm:gap-5 justify-center w-full">
              <Link href="/order" className="group flex items-center justify-center gap-1 sm:gap-2 bg-[#DAAF18] hover:bg-[#E04B51] text-zinc-900 hover:text-white px-4 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-xs sm:text-lg transition-colors duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 flex-1 sm:flex-none">
                <span>{t('orderNow')}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link href="/menu" className="group flex items-center justify-center gap-1 sm:gap-2 bg-[#DAAF18] hover:bg-[#E04B51] text-zinc-900 hover:text-white border-transparent px-4 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-xs sm:text-lg transition-colors duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 flex-1 sm:flex-none">
                <Info className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="whitespace-nowrap">{t('learnMore')}</span>
              </Link>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default NewDishes;
