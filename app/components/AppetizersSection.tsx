'use client';

import React from 'react';
import Image from 'next/image';
import { Utensils, ArrowRight, Info } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const AppetizersSection = () => {
  const t = useTranslations('Appetizers');

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="w-full">
        
        <div className="flex flex-col-reverse lg:flex-row items-stretch">
          
          {/* Left Column: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center px-6 md:px-12 lg:px-16 xl:px-24 py-8 md:py-12">
            
            {/* Custom SVG Icon */}
            <div className="mb-4 flex justify-center">
              <Image src="/images/test-1.svg" alt="Grillados Icon" width={96} height={96} className="w-20 h-20 md:w-24 md:h-24 object-contain" />
            </div>
            
            {/* Centered Heading */}
            <h2 className="text-xl md:text-2xl font-extrabold text-zinc-900 font-['Outfit',sans-serif] uppercase tracking-wide mb-6">
              {t('heading')}
            </h2>
            
            {/* Centered Divider */}
            <div className="w-24 h-1.5 bg-black rounded-full mb-8"></div>
            
            {/* Paragraph */}
            <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
              {t('description')}
            </p>
            
            {/* Buttons: Same styling as NewDishes (Yellow default, Red on hover) */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/order" className="group flex items-center justify-center gap-2 bg-[#DAAF18] hover:bg-[#E04B51] text-zinc-900 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
                <span>{t('orderNow')}</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <button className="group flex items-center justify-center gap-2 bg-[#DAAF18] hover:bg-[#E04B51] text-zinc-900 hover:text-white border-transparent px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
                <Info className="w-5 h-5" />
                <span>{t('learnMore')}</span>
              </button>
            </div>
            
          </div>

          {/* Right Column: Image */}
          <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full bg-zinc-50 flex items-center justify-center">
            <Image
              src="/images/smentes.webp"
              alt="Grillado's Appetizers"
              fill sizes="100vw"
              className="object-cover"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AppetizersSection;
