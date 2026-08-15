'use client';

import React from 'react';
import { Link } from "@/i18n/routing";
import { ShoppingBag } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const MobileOrderButton = () => {
  const t = useTranslations('Header');

  return (
    <Link 
      href="/order"
      className="lg:hidden fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center justify-center bg-linear-to-b from-[#fbbc04] to-[#d69f00] text-black font-extrabold uppercase py-4 px-1.5 md:py-5 md:px-2 rounded-l-xl shadow-[-4px_0_15px_rgba(251,188,4,0.3)] active:scale-95 border-l-2 border-y-2 border-[#fff5cc]/30 w-[45px] md:w-[50px] h-[135px] md:h-[145px]"
    >
      <ShoppingBag className="w-4 h-4 md:w-5 md:h-5 mb-2 md:mb-3 drop-shadow-md shrink-0" />
      <span 
        className="tracking-widest text-xs md:text-sm drop-shadow-md whitespace-nowrap"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        {t('orderNow') || 'ORDER NOW'}
      </span>
    </Link>
  );
};
