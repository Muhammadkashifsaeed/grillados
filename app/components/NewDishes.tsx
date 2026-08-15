'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Flame, ArrowRight, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const NewDishes = () => {
  const t = useTranslations('NewDishes');
  const [currentVideo, setCurrentVideo] = useState(0);

  // Array of video IDs for the carousel
  const videoIds = [
    "QpcvfWCcBVY", // Original video
    "M7lc1UVf-VE", // Placeholder food video 1
    "tgbNymZ7vqY"  // Placeholder food video 2
  ];

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev === videoIds.length - 1 ? 0 : prev + 1));
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev === 0 ? videoIds.length - 1 : prev - 1));
  };

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="w-full">
        
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Left Column: YouTube Video Carousel */}
          <div className="w-full lg:w-1/2 relative overflow-hidden aspect-video shrink-0 bg-zinc-900 group self-end">
            {/* 16:9 Aspect Ratio container prevents black bars, full 100% width/height shows everything clearly */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              <iframe
                key={videoIds[currentVideo]}
                src={`https://www.youtube.com/embed/${videoIds[currentVideo]}?autoplay=1&mute=1&loop=1&controls=0&playlist=${videoIds[currentVideo]}&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3`}
                title="Grillados New Dishes"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-full"
                style={{ border: 'none' }}
              ></iframe>
            </div>

            {/* Carousel Navigation Buttons Overlay */}
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={prevVideo}
                className="w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-[#E04B51] rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-colors shadow-lg z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextVideo}
                className="w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-[#E04B51] rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-colors shadow-lg z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
              {videoIds.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentVideo(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentVideo === idx ? 'bg-[#E04B51] w-8' : 'bg-white/50 hover:bg-white'}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center px-6 md:px-12 lg:px-16 xl:px-24 py-4 md:py-6">
            
            {/* Custom SVG Icon */}
            <div className="mb-4 flex justify-center">
              <Image src="/images/test-1.svg" alt="Grillados Icon" width={96} height={96} className="w-20 h-20 md:w-24 md:h-24 object-contain" />
            </div>
            
            {/* Heading */}
            <h2 className="text-xl md:text-2xl font-extrabold text-zinc-900 font-['Outfit',sans-serif] uppercase tracking-wide mb-6">
              {t('heading')}
            </h2>
            
            {/* Divider Centered */}
            <div className="w-24 h-1.5 bg-black rounded-full mb-8"></div>
            
            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
              {t('description')}
            </p>
            
            {/* Buttons: Yellow default, Red on hover */}
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
          
        </div>
      </div>
    </section>
  );
};

export default NewDishes;
