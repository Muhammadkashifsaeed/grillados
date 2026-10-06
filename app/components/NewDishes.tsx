'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Flame, ArrowRight, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const NewDishes = () => {
  const t = useTranslations('NewDishes');
  const videoId = "QpcvfWCcBVY"; // Original video
  const [isPlaying, setIsPlaying] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <section className="w-full bg-white overflow-hidden flex flex-col gap-0 border-t border-gray-200">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-stretch">
        
        <div className="w-full aspect-video md:aspect-auto md:h-full md:min-h-[300px] relative overflow-hidden order-1 bg-black group flex items-center justify-center">
          <iframe
            ref={iframeRef}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&cc_load_policy=0&showinfo=0&enablejsapi=1`}
            title="Grillados New Dishes"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full h-full md:aspect-video opacity-95 transition-opacity duration-700 pointer-events-none"
            style={{ border: 'none' }}
          ></iframe>
          
          {/* Custom Play/Pause Overlay on Hover */}
          <div 
            className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-300"
            onClick={() => {
              if (iframeRef.current && iframeRef.current.contentWindow) {
                const command = isPlaying ? 'pauseVideo' : 'playVideo';
                iframeRef.current.contentWindow.postMessage(JSON.stringify({ event: 'command', func: command, args: [] }), '*');
                setIsPlaying(!isPlaying);
              }
            }}
          >
            <div className="flex items-center justify-center transition-transform duration-300 hover:scale-110 drop-shadow-2xl bg-black/40 rounded-full p-4">
              {isPlaying ? (
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </div>
          </div>

          {/* Subtle Vignette Overlay for premium look */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.6)] z-10"></div>
        </div>

        {/* Right Column: Content */}
        <div className="w-full h-full flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-16 xl:px-24 py-10 lg:py-16 bg-gray-50 order-2">

          {/* Custom SVG Icon */}
          <div className="mb-2 flex justify-center">
            <motion.img src="/images/test-1.svg" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} alt="Grillados Icon" width={72} height={72} className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </div>

          {/* Heading */}
          <div className="text-center">
            <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: 'clamp(22px, 2.8vw, 28px)', lineHeight: 'clamp(24px, 3.6vw, 36px)' }}
              className="mb-2 transform -rotate-2 inline-block text-center tracking-wide capitalize"
            >
              {t('heading')}
            </motion.h2>
          </div>

          {/* Divider Centered */}
          <div className="w-24 h-1 bg-black mx-auto mt-2 mb-4 rounded-full"></div>

          {/* Description */}
          <p className="mb-6 max-w-md" style={{ fontFamily: '"Noto Sans", sans-serif', fontStyle: 'normal', fontWeight: 400, fontSize: '15px', lineHeight: '24px' }}>
            {t('description')}
          </p>

          {/* Buttons: Yellow default, Red on hover */}
          <div className="flex flex-row gap-3 sm:gap-4 w-full justify-center">
            <Link href="https://grillados.bycalibre.ca/location" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white hover: hover: group h-12 sm:h-13 px-4 sm:px-8 bg-[#FAC716] hover:bg-[#EB5250] transition-all duration-300 hover:scale-[1.03] shadow-md rounded-lg flex-1 sm:flex-none inline-flex items-center justify-center text-center whitespace-nowrap" style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '15px', lineHeight: '16px' }}>
              <span>{t('orderNow')}</span>
            </Link>

            <Link href="/menu" className="text-black hover:text-white hover: hover: group h-12 sm:h-13 px-4 sm:px-8 bg-[#FAC716] hover:bg-[#EB5250] transition-all duration-300 hover:scale-[1.03] shadow-md rounded-lg flex-1 sm:flex-none inline-flex items-center justify-center text-center whitespace-nowrap" style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '15px', lineHeight: '16px' }}>
              <span>{t('learnMore')}</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default NewDishes;
