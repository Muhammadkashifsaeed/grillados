'use client';

import React, { useState, useRef } from 'react';
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
        
        {/* Left Column: YouTube Video */}
        <div className="w-full h-full min-h-[300px] relative overflow-hidden order-1 bg-black group flex items-center justify-center">
          <iframe
            ref={iframeRef}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&playlist=${videoId}&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&cc_load_policy=0&showinfo=0&enablejsapi=1`}
            title="Grillados New Dishes"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full aspect-video opacity-90 transition-opacity duration-700 pointer-events-none"
            style={{ border: 'none' }}
          ></iframe>
          
          {/* Custom Play/Pause Overlay */}
          <div 
            className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer"
            onClick={() => {
              if (iframeRef.current && iframeRef.current.contentWindow) {
                const command = isPlaying ? 'pauseVideo' : 'playVideo';
                iframeRef.current.contentWindow.postMessage(JSON.stringify({ event: 'command', func: command, args: [] }), '*');
                setIsPlaying(!isPlaying);
              }
            }}
          >
            {!isPlaying && (
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#EB5250] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            )}
          </div>

          {/* Subtle Vignette Overlay for premium look */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.6)] z-10"></div>
        </div>

        {/* Right Column: Content */}
        <div className="w-full h-full flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-16 xl:px-24 py-10 lg:py-16 bg-gray-50 order-2">

          {/* Custom SVG Icon */}
          <div className="mb-2 flex justify-center">
            <Image src="/images/test-1.svg" alt="Grillados Icon" width={72} height={72} className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </div>

          {/* Heading */}
          <div className="text-center">
            <h2
              style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '28px', lineHeight: '36px', color: 'rgb(0,0,0)' }}
              className="mb-2 inline-block text-center tracking-wide uppercase"
            >
              {t('heading')}
            </h2>
          </div>

          {/* Divider Centered */}
          <div className="w-24 h-1 bg-black mx-auto mt-2 mb-4 rounded-full"></div>

          {/* Description */}
          <p className="mb-6 max-w-md" style={{ fontFamily: '"Noto Sans", sans-serif', fontStyle: 'normal', fontWeight: 400, fontSize: '15px', lineHeight: '24px', color: 'rgb(0,0,0)' }}>
            {t('description')}
          </p>

          {/* Button: Yellow default, Red on hover */}
          <div className="flex flex-row gap-3 sm:gap-4 w-full justify-center">
            <Link href="https://grillados.bycalibre.ca/location" target="_blank" rel="noopener noreferrer" className="group h-12 sm:h-13 px-6 sm:px-10 bg-[#DAAF18] hover:bg-[#EB5250] text-zinc-900 hover:text-white rounded-lg transition-all duration-300 shadow-md hover:-translate-y-1 inline-flex items-center justify-center text-center whitespace-nowrap" style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '15px', lineHeight: '16px' }}>
              <span>Order Online</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default NewDishes;
