"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import VoucherModal from './VoucherModal';

const MenuVoucherCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-center justify-center bg-transparent mt-8 mb-12">
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
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black font-['Outfit',sans-serif] uppercase leading-[1.1] mb-2 sm:mb-3 tracking-tight drop-shadow-sm">
              GET UP TO 20% OFF <br className="hidden md:block" />On The Entire Menu.
            </h2>
            <p className="text-black/90 font-bold text-sm sm:text-base md:text-base leading-relaxed max-w-3xl mx-auto xl:mx-0">
              Click on &apos;Get your Voucher Now&apos; and enjoy up to 20% off at all Grillados branches across Canada!
            </p>
          </div>

          {/* Right Action Area */}
          <div className="w-full xl:w-[40%] flex flex-row items-center justify-center xl:justify-end relative z-10 mt-2 xl:mt-0 gap-3 sm:gap-6">

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-auto flex-1 max-w-[280px] sm:max-w-[320px] xl:max-w-[360px] bg-black text-white hover:bg-red-600 font-extrabold text-xs sm:text-sm md:text-base py-3 sm:py-4 px-3 sm:px-6 rounded-xl shadow-xl hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(220,38,38,0.4)] transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 active:scale-95 group border-2 border-black/10 shrink-0"
            >
              <span className="text-lg sm:text-2xl group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300">🎟</span>
              <span className="tracking-wide uppercase text-center whitespace-nowrap">Get your Voucher Now</span>
            </button>

            {/* Decorative Arrow (Outside Button, Pointing Left, Straight) */}
            <div className="opacity-90 animate-pulse shrink-0">
              <svg width="40" height="40" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[60px] sm:h-[50px] xl:w-[80px] xl:h-[60px]">
                <path d="M90 30 L 20 30" stroke="black" strokeWidth="8" strokeLinecap="round" fill="transparent" />
                <path d="M40 10 L 15 30 L 40 50" stroke="black" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="transparent" />
              </svg>
            </div>
          </div>
        </motion.div>

      </div>
      <VoucherModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default MenuVoucherCTA;
