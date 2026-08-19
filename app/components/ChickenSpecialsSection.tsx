
'use client';

import React from 'react';
import Image from 'next/image';
import { Flame, ArrowRight, Info } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const ChickenSpecialsSection = () => {
  const t = useTranslations('ChickenSpecials');
  return (
    <section className="w-full bg-gray-50 py-8 lg:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="flex flex-col lg:flex-row items-stretch bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">

          {/* Left Column: Image */}
          <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full bg-zinc-50 flex items-center justify-center">
            <Image
              src="/images/dishes.webp"
              alt="Grillado's Chicken Specials"
              fill sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center px-6 md:px-12 lg:px-16 xl:px-24 py-8 md:py-12">

            {/* Custom SVG Icon */}
            <div className="mb-4 flex justify-center">
              <Image src="/images/test-1.svg" alt="Grillados Icon" width={96} height={96} className="w-20 h-20 md:w-24 md:h-24 object-contain" />
            </div>

            {/* Centered Heading */}
            <h2
              style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '28px', lineHeight: '36px', color: 'rgb(0,0,0)' }}
              className="uppercase tracking-wide mb-6"
            >
              {t('title')}
            </h2>

            {/* Centered Black Divider */}
            <div className="w-24 h-1.5 bg-black rounded-md mb-8"></div>

            {/* Paragraph */}
            <p className="mb-10 max-w-lg" style={{ fontFamily: '"Noto Sans", sans-serif', fontStyle: 'normal', fontWeight: 400, fontSize: '17px', lineHeight: '28px', color: 'rgb(0,0,0)' }}>
              {t('desc')}
            </p>

            {/* Buttons: Match previous sections (Yellow default, Red on hover) */}
            <div className="flex flex-row gap-2 sm:gap-5 justify-center w-full">
              <Link href="/order" className="group flex items-center justify-center gap-1 sm:gap-2 bg-[#DAAF18] hover:bg-[#E04B51] text-zinc-900 hover:text-white px-4 py-3 sm:px-8 sm:py-4 rounded-md transition-colors duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 flex-1 sm:flex-none" style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '20px', lineHeight: '20px', color: 'rgb(255,255,255)' }}>
                <span>{t('order')}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link href="/menu#chicken-specials" className="group flex items-center justify-center gap-1 sm:gap-2 bg-[#DAAF18] hover:bg-[#E04B51] text-zinc-900 hover:text-white border-transparent px-4 py-3 sm:px-8 sm:py-4 rounded-md transition-colors duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 flex-1 sm:flex-none" style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '20px', lineHeight: '20px', color: 'rgb(255,255,255)' }}>
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

export default ChickenSpecialsSection;
