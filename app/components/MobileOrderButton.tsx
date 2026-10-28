'use client';

import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';

export const MobileOrderButton = () => {
  const t = useTranslations('Header');
  const reduce = !!useReducedMotion();

  return (
    <motion.a 
      href="https://grillados.bycalibre.ca/location" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={t('orderNow') || 'ORDER NOW'}
      initial={{ x: 80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 1.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={reduce ? undefined : { x: -6, scale: 1.02 }}
      whileTap={reduce ? undefined : { scale: 0.96 }}
      className="group fixed right-0 top-1/2 -translate-y-1/2 z-[9999] flex flex-col items-center justify-center bg-[#FAC716] hover:bg-[#EB5250] text-black hover:text-white transition-colors duration-400 uppercase py-3.5 px-1.5 sm:py-4 sm:px-2 rounded-l-2xl shadow-[-4px_0_20px_rgba(250,199,22,0.4)] hover:shadow-[-6px_0_30px_rgba(235,82,80,0.65)] border-l-2 border-y-2 border-white/50 hover:border-white/80 w-[44px] md:w-[48px] h-[165px] md:h-[180px] cursor-pointer select-none overflow-hidden"
    >
      {/* Ambient Travelling Sheen across the tab */}
      <motion.div
        animate={
          reduce
            ? undefined
            : {
                y: ['-150%', '250%'],
              }
        }
        transition={{
          duration: 2.8,
          repeat: Infinity,
          repeatDelay: 3.5,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white/40 to-transparent pointer-events-none z-10"
      />

      {/* Icon Badge */}
      <motion.div 
        className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-black/10 group-hover:bg-white/20 flex items-center justify-center mb-2.5 md:mb-3 shrink-0 transition-colors duration-300 relative z-20 shadow-inner"
        whileHover={reduce ? undefined : { rotate: [0, -10, 10, -5, 0] }}
        transition={{ duration: 0.5 }}
      >
        <ShoppingBag className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0 transition-colors duration-300" />
      </motion.div>

      {/* Vertical Text (crisp, zero blur, clean typography) */}
      <span 
        className="tracking-[0.18em] whitespace-nowrap uppercase font-bold select-none relative z-20"
        style={{ 
          writingMode: 'vertical-rl', 
          transform: 'rotate(180deg)', 
          fontFamily: "'Ribeat', sans-serif", 
          fontStyle: 'normal', 
          fontWeight: 700, 
          fontSize: '16px', 
          lineHeight: '16px',
          textShadow: '0 1px 3px rgba(0,0,0,0.25)',
        }}
      >
        {t('orderNow') || 'ORDER NOW'}
      </span>
    </motion.a>
  );
};

