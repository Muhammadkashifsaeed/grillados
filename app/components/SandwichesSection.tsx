'use client';

import React from 'react';
import Image from 'next/image';
import { Flame, ArrowRight, Info } from 'lucide-react';
import { useTranslations } from 'next-intl';

const SandwichesSection = () => {
  const t = useTranslations('Sandwiches');

  return (
    <section className="w-full py-8 md:py-10 bg-zinc-50 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
            
            {/* Small Red Flame Icon Centered */}
            <div className="text-red-600 mb-4">
              <Flame className="w-16 h-16 md:w-20 md:h-20" strokeWidth={1} fill="currentColor" />
            </div>
            
            {/* Centered Heading */}
            <h2 className="text-xl md:text-2xl font-extrabold text-zinc-900 font-['Outfit',sans-serif] uppercase tracking-wide mb-6">
              {t('heading')}
            </h2>
            
            {/* Centered Black Divider */}
            <div className="w-24 h-1.5 bg-black rounded-full mb-8"></div>
            
            {/* Paragraph */}
            <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
              {t('description')}
            </p>
            
            {/* Buttons: Match previous sections (Yellow default, Red on hover) */}
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

          {/* Right Column: Image */}
          <div className="w-full lg:w-1/2 overflow-hidden shadow-xl flex items-center justify-center bg-zinc-50">
            <Image 
              src="/images/zesty.jpg" 
              alt="Grillado's Sandwiches" 
              width={1000}
              height={1000}
              className="w-full h-auto object-contain" 
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SandwichesSection;
