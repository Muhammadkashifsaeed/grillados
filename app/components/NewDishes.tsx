'use client';

import React from 'react';
import { Flame, ArrowRight, Info } from 'lucide-react';
import { useTranslations } from 'next-intl';

const NewDishes = () => {
  const t = useTranslations('NewDishes');

  return (
    <section className="w-full py-8 md:py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Column: YouTube Video */}
          <div className="w-full lg:w-1/2 relative overflow-hidden shadow-xl aspect-video flex-shrink-0 bg-zinc-900">
            {/* 16:9 Aspect Ratio container prevents black bars, full 100% width/height shows everything clearly */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              <iframe
                src="https://www.youtube.com/embed/QpcvfWCcBVY?autoplay=1&mute=1&loop=1&controls=0&playlist=QpcvfWCcBVY&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3"
                title="Grillados New Dishes"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-full"
                style={{ border: 'none' }}
              ></iframe>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
            
            {/* Large Red Icon (Filled completely) */}
            <div className="text-red-600 mb-4">
              <Flame className="w-16 h-16 md:w-20 md:h-20" strokeWidth={1} fill="currentColor" />
            </div>
            
            {/* Heading */}
            <h2 className="text-xl md:text-2xl font-extrabold text-zinc-900 font-['Outfit',sans-serif] uppercase tracking-wide mb-6">
              {t('heading')}
            </h2>
            
            {/* Divider Centered */}
            <div className="w-24 h-1.5 bg-black rounded-full mb-8"></div>
            
            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
              {t('description')}
            </p>
            
            {/* Buttons: Yellow default, Red on hover */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <button className="group flex items-center justify-center gap-2 bg-yellow-400 hover:bg-red-600 text-zinc-900 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
                <span>{t('orderNow')}</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button className="group flex items-center justify-center gap-2 bg-yellow-400 hover:bg-red-600 text-zinc-900 hover:text-white border-transparent px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
                <Info className="w-5 h-5" />
                <span>{t('learnMore')}</span>
              </button>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default NewDishes;
