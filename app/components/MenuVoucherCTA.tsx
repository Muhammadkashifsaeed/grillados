"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import VoucherModal from './VoucherModal';
import { useTranslations } from 'next-intl';

const MenuVoucherCTA = () => {
  const t = useTranslations('Voucher');
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="w-full relative overflow-visible flex flex-col items-center justify-center bg-transparent mt-4 lg:mt-6 mb-6 lg:mb-8 px-2 md:px-0 z-30">
      <div className="w-full">

        {/* CTA Banner Section */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative bg-[#FAAE40] rounded-[2rem] p-4 sm:p-6 md:p-8 flex flex-col xl:flex-row items-center justify-between shadow-[0_15px_30px_rgba(0,0,0,0.4)] border-4 border-[#fff1aa]/30 w-full z-20"
        >
          {/* Subtle noise/texture overlay for premium feel */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay rounded-[2rem] pointer-events-none"></div>

          {/* Left Content Area */}
          <div className="w-full xl:w-[60%] flex flex-col text-center xl:text-left mb-4 xl:mb-0 relative z-10">
            <h2 
              className="uppercase mb-2 sm:mb-3 tracking-tight drop-shadow-sm"
              style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '45px', lineHeight: '45px', color: 'rgb(0,0,0)' }}
            >
              {t('getUpToText')} <span className="drop-shadow-lg text-black">{t('discountText')}</span> <br className="hidden md:block" />{t('onEntireMenu')}
            </h2>
            <p 
              className="max-w-3xl mx-auto xl:mx-0"
              style={{ fontFamily: '"Poppins", sans-serif', fontStyle: 'normal', fontWeight: 400, fontSize: '18px', lineHeight: '30px', color: 'rgb(0,0,0)' }}
            >
              {t('clickToGet')}
            </p>
          </div>

          {/* Right Action Area */}
          <div className="w-full xl:w-[40%] flex flex-row items-center justify-center xl:justify-end relative z-10 mt-2 xl:mt-0 gap-3 sm:gap-6">

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-auto flex-1 max-w-70 sm:max-w-80 xl:max-w-90 bg-black text-white hover:bg-red-600 font-extrabold text-xs sm:text-sm md:text-base py-3 sm:py-4 px-3 sm:px-6 rounded-xl shadow-xl hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(220,38,38,0.4)] transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 active:scale-95 group border-2 border-black/10 shrink-0"
            >
              <span className="text-lg sm:text-2xl group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300">🎟</span>
              <span 
                className="uppercase text-center whitespace-nowrap"
                style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '20px', lineHeight: '20px', color: 'rgb(255,255,255)' }}
              >
                {t('getVoucherNow')}
              </span>
            </button>

            {/* Decorative Arrow */}
            <div 
              className="opacity-90 animate-pulse shrink-0 flex items-center justify-center"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', lineHeight: '26px', color: 'rgb(51,65,85)' }}
            >
              ←
            </div>
          </div>
        </motion.div>

      </div>
      <VoucherModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default MenuVoucherCTA;
