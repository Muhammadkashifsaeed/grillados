'use client';

import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const MobileOrderButton = () => {
  const t = useTranslations('Header');

  return (
    <a 
      href="https://grillados.bycalibre.ca/location" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={t('orderNow') || 'ORDER NOW'}
      className="group fixed right-0 top-1/2 -translate-y-1/2 z-[9999] flex flex-col items-center justify-center bg-[#FAC716] hover:bg-[#EB5250] text-black hover:text-white transition-colors duration-300 uppercase py-3.5 px-1.5 sm:py-4 sm:px-2 rounded-l-2xl shadow-[-4px_0_16px_rgba(250,199,22,0.35)] hover:shadow-[-4px_0_20px_rgba(235,82,80,0.5)] border-l-2 border-y-2 border-white/40 hover:border-white/60 w-[44px] md:w-[48px] h-[165px] md:h-[180px] cursor-pointer select-none"
    >
      {/* Icon Badge */}
      <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-black/10 group-hover:bg-white/20 flex items-center justify-center mb-2.5 md:mb-3 shrink-0 transition-colors duration-300">
        <ShoppingBag className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0 transition-colors duration-300" />
      </div>

      {/* Vertical Text (crisp, zero blur, no duplicate ghost drop-shadow) */}
      <span 
        className="tracking-[0.16em] whitespace-nowrap uppercase font-bold select-none"
        style={{ 
          writingMode: 'vertical-rl', 
          transform: 'rotate(180deg)', 
          fontFamily: "'Ribeat', sans-serif", 
          fontStyle: 'normal', 
          fontWeight: 700, 
          fontSize: '16px', 
          lineHeight: '16px' 
        }}
      >
        {t('orderNow') || 'ORDER NOW'}
      </span>
    </a>
  );
};

