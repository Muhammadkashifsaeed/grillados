'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NewDishesSection = () => {
  const t = useTranslations('NewDishesSection');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);

  // Extend the array so we can slide infinitely (or at least give the illusion)
  const images = [
    { src: "/images/cd-1.webp", alt: "Grillado's Dish 1" },
    { src: "/images/cd-2.webp", alt: "Grillado's Dish 2" },
    { src: "/images/cd-1.webp", alt: "Grillado's Dish 1" },
    { src: "/images/cd-2.webp", alt: "Grillado's Dish 2" },
    { src: "/images/cd-1.webp", alt: "Grillado's Dish 1" },
    { src: "/images/cd-2.webp", alt: "Grillado's Dish 2" }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1); // 1 item on mobile
      } else {
        setItemsPerView(2); // 2 items on desktop/tablet
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = images.length - itemsPerView;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="w-full pt-12 md:pt-16 pb-4 md:pb-8 bg-gray-50 overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2
          style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '28px', lineHeight: '36px', color: 'rgb(0,0,0)' }}
          className="text-center uppercase tracking-wide mb-2"
        >
          {t('heading')}
        </h2>
        
        {/* Divider */}
        <div 
          className="w-24 h-1 bg-[#fbbc04] mx-auto mt-2 mb-4 rounded-full"
        ></div>

        {/* Carousel Gallery */}
        <div className="relative w-full group py-4">
          
          <div className="overflow-hidden relative z-10">
            <div 
              className="flex transition-transform duration-500 ease-in-out w-full"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {images.map((image, idx) => (
                <div 
                  key={idx} 
                  className="shrink-0 relative flex items-center justify-center border-r-[4px] border-white"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    width={1200}
                    height={800}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-auto object-contain drop-shadow-2xl"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Left Button */}
          <button 
            onClick={prevSlide}
            className="absolute left-[-15px] md:left-[-25px] top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.1)] flex items-center justify-center text-gray-800 hover:bg-gray-50 z-10 border border-gray-100"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          {/* Right Button */}
          <button 
            onClick={nextSlide}
            className="absolute right-[-15px] md:right-[-25px] top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.1)] flex items-center justify-center text-gray-800 hover:bg-gray-50 z-10 border border-gray-100"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

        </div>

      </div>
    </section>
  );
};

export default NewDishesSection;
