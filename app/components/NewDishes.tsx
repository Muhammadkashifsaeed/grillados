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
    <section className="w-full bg-white overflow-hidden flex flex-col gap-0 border-t border-gray-200">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center">
        
        {/* Left Column: YouTube Video */}
        <div className="w-full relative overflow-hidden aspect-video order-1 shadow-sm">
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
        <div className="w-full h-full flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-12 xl:px-16 py-4 lg:py-0 bg-gray-50 order-2">
          
          {/* Custom SVG Icon */}
          <div className="mb-2 flex justify-center">
            <Image src="/images/test-1.svg" alt="Grillados Icon" width={72} height={72} className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </div>
          
          {/* Heading */}
          <h2
            style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '24px', lineHeight: '32px', color: 'rgb(0,0,0)' }}
            className="mb-3"
          >
            {t('heading')}
          </h2>
          
          {/* Divider Centered */}
          <div className="w-24 h-1 bg-[#fbbc04] mx-auto mt-2 mb-4 rounded-full"></div>
          
          {/* Description */}
          <p className="mb-6 max-w-md" style={{ fontFamily: '"Noto Sans", sans-serif', fontStyle: 'normal', fontWeight: 400, fontSize: '15px', lineHeight: '24px', color: 'rgb(0,0,0)' }}>
            {t('description')}
          </p>
          
          {/* Buttons: Yellow default, Red on hover */}
          <div className="flex flex-row gap-3 sm:gap-4 w-full justify-center">
            <Link href="/order" className="group h-[48px] sm:h-[52px] px-4 sm:px-8 bg-[#DAAF18] hover:bg-[#E04B51] text-zinc-900 hover:text-white rounded-lg transition-all duration-300 shadow-md hover:-translate-y-1 flex-1 sm:flex-none inline-flex items-center justify-center text-center whitespace-nowrap" style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '15px', lineHeight: '16px' }}>
              <span>{t('orderNow')}</span>
            </Link>
            
            <Link href="/menu" className="group h-[48px] sm:h-[52px] px-4 sm:px-8 bg-[#DAAF18] hover:bg-[#E04B51] text-zinc-900 hover:text-white rounded-lg transition-all duration-300 shadow-md hover:-translate-y-1 flex-1 sm:flex-none inline-flex items-center justify-center text-center whitespace-nowrap" style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '15px', lineHeight: '16px' }}>
              <span>{t('learnMore')}</span>
            </Link>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default NewDishes;
