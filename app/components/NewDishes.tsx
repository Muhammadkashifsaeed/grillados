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
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center">
        
        {/* Left Column: YouTube Video */}
        <div className="w-full aspect-video relative overflow-hidden order-1 bg-black group">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&playlist=${videoId}&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3`}
            title="Grillados New Dishes"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-90 transition-opacity duration-700"
            style={{ border: 'none' }}
          ></iframe>
          {/* Subtle Vignette Overlay for premium look */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.6)] z-10"></div>
        </div>

        {/* Right Column: Content */}
        <div className="w-full h-full flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-16 xl:px-24 py-10 lg:py-16 bg-gray-50 order-2">

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
          <div className="w-24 h-1 bg-black mx-auto mt-2 mb-4 rounded-full"></div>

          {/* Description */}
          <p className="mb-6 max-w-md" style={{ fontFamily: '"Noto Sans", sans-serif', fontStyle: 'normal', fontWeight: 400, fontSize: '15px', lineHeight: '24px', color: 'rgb(0,0,0)' }}>
            {t('description')}
          </p>

          {/* Buttons: Yellow default, Red on hover */}
          <div className="flex flex-row gap-3 sm:gap-4 w-full justify-center">
            <Link href="/order" className="group h-12 sm:h-13 px-4 sm:px-8 bg-[#DAAF18] hover:bg-[#E04B51] text-zinc-900 hover:text-white rounded-lg transition-all duration-300 shadow-md hover:-translate-y-1 flex-1 sm:flex-none inline-flex items-center justify-center text-center whitespace-nowrap" style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '15px', lineHeight: '16px' }}>
              <span>{t('orderNow')}</span>
            </Link>

            <Link href="/menu" className="group h-12 sm:h-13 px-4 sm:px-8 bg-[#DAAF18] hover:bg-[#E04B51] text-zinc-900 hover:text-white rounded-lg transition-all duration-300 shadow-md hover:-translate-y-1 flex-1 sm:flex-none inline-flex items-center justify-center text-center whitespace-nowrap" style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '15px', lineHeight: '16px' }}>
              <span>{t('learnMore')}</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default NewDishes;
