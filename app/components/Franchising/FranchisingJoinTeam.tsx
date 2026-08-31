"use client";

import React from 'react';
import { useTranslations } from 'next-intl';

export default function FranchisingJoinTeam() {
  const t = useTranslations('FranchisingPage');

  const stepsLeft = [1, 2, 3, 4];
  const stepsRight = [5, 6, 7, 8];

  const StepItem = ({ num }: { num: number }) => (
    <div className="flex flex-col gap-2 mb-10">
      <h3 className="text-[#FAC716] text-5 leading-6.5 font-semibold font-['Ribeat',sans-serif]">
        <span className="text-black">{t(`step${num}_num`)} </span>
        <span>{t(`step${num}_title`)}</span>
      </h3>
      <p className="text-gray-500 text-base md:text-base leading-relaxed">
        {t(`step${num}_desc`)}
      </p>
    </div>
  );

  return (
    <section className="bg-white py-16 px-6 sm:px-8 lg:px-12 w-full font-['Outfit',sans-serif]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <h2 className="text-[#000000] text-12 leading-16.25 font-semibold font-['Ribeat',sans-serif] text-center uppercase tracking-wide mb-4 drop-shadow-sm">
          {t('joinTeamHeading')}
        </h2>
        
        {/* Short Centered Red Divider */}
        <div className="w-22.5 h-0.75 bg-red-600 mb-16 rounded"></div>

        {/* Two-Column Layout */}
        <div className="w-full flex flex-col md:flex-row relative">
          
          {/* Vertical Divider (Hidden on Mobile) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#6B4226] -translate-x-1/2"></div>
          
          {/* Left Column (Steps 1-4) */}
          <div className="w-full md:w-1/2 flex flex-col md:pr-12 lg:pr-16">
            {stepsLeft.map((num) => (
              <StepItem key={num} num={num} />
            ))}
          </div>

          {/* Right Column (Steps 5-8) */}
          <div className="w-full md:w-1/2 flex flex-col md:pl-12 lg:pl-16">
            {stepsRight.map((num) => (
              <StepItem key={num} num={num} />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
