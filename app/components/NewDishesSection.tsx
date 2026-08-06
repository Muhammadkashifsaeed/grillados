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
    <section className="w-full pt-8 md:pt-16 pb-4 md:pb-6 bg-white overflow-hidden">
      <div className="w-full px-6 md:px-10 lg:px-16 mx-auto">
        
        {/* Heading */}
        <h2 
          className="text-center font-bold text-zinc-900 font-['Outfit',sans-serif] uppercase tracking-wide
                     text-xl md:text-3xl lg:text-4xl leading-tight mb-2"
        >
          {t('heading')}
        </h2>
        
        {/* Divider */}
        <div 
          className="w-[140px] h-[3px] bg-black rounded-full mx-auto mb-2"
        ></div>

        {/* Carousel Gallery */}
        <div className="relative w-full group">
          
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out w-full"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {images.map((image, idx) => (
                <div 
                  key={idx} 
                  className="shrink-0 relative h-[250px] md:h-[300px] lg:h-[320px]"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    fill 
                    className="object-cover"
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
