"use client";

import React, { useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CrazyLunchDeals from '../../components/Deals/CrazyLunchDeals';
import NewsletterSection from '../../components/Deals/NewsletterSection';

import { useLocale } from 'next-intl';

export default function DealsPage() {
  const locale = useLocale();

  const dealImages = locale === 'en'
    ? [
        { src: '/images/mon-to-friday-22-07-26-3rd-var-2nd.webp', alt: 'Monday to Friday Deal' },
        { src: '/images/deals1.webp', alt: 'Deal 1' },
        { src: '/images/deals2.webp', alt: 'Deal 2' },
      ]
    : [
        { src: '/images/deals1.webp', alt: 'Deal 1' },
        { src: '/images/deals2.webp', alt: 'Deal 2' },
      ];

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 8000, stopOnInteraction: false })
  ]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <main 
      className="flex flex-col flex-1 min-h-screen relative overflow-x-hidden bg-[#0a0a0a] pt-[68px] md:pt-[72px] lg:pt-[76px]"
      style={{
        backgroundImage: "url('/images/Blackksss.png')",
        backgroundSize: '120% auto',
        backgroundPosition: 'top center',
        backgroundRepeat: 'repeat-y',
      }}
    >
      {/* Light overlay */}
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>

      <div className="relative z-10 w-full flex flex-col items-center group">
          
          {/* Embla Carousel Container */}
          <div 
            className="w-full overflow-hidden" 
            ref={emblaRef}
          >
            <div className="flex touch-pan-y">
              {dealImages.map((image, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] min-w-0 relative w-full aspect-[21/9]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={index === 0}
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Left Arrow */}
          <button 
            type="button" 
            onClick={scrollPrev} 
            className="text-white hover:text-black absolute left-2 md:left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-black/60 hover:bg-[#FAC716] backdrop-blur-md transition-all duration-300 opacity-80 sm:opacity-0 group-hover:opacity-100 shadow-[0_4px_20px_rgba(0,0,0,0.7)] border border-white/20 hover:border-[#FAC716] hover:scale-105 active:scale-95" 
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 -ml-0.5" />
          </button>

          {/* Right Arrow */}
          <button 
            type="button" 
            onClick={scrollNext} 
            className="text-white hover:text-black absolute right-2 md:right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-black/60 hover:bg-[#FAC716] backdrop-blur-md transition-all duration-300 opacity-80 sm:opacity-0 group-hover:opacity-100 shadow-[0_4px_20px_rgba(0,0,0,0.7)] border border-white/20 hover:border-[#FAC716] hover:scale-105 active:scale-95" 
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 -mr-0.5" />
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-2.5 sm:bottom-4 md:bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-2.5 z-20 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-lg">
            {dealImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => emblaApi?.scrollTo(idx)}
                className={`transition-all duration-300 rounded-full h-2.5 ${
                  selectedIndex === idx
                    ? 'w-7 sm:w-8 bg-[#FAC716] shadow-[0_0_12px_rgba(250,199,22,0.9)]'
                    : 'w-2.5 bg-white/45 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      {/* New Crazy Lunch Deals Section */}
      <div className="relative z-10">
        <CrazyLunchDeals />
      </div>
      
      {/* Newsletter Section */}
      <div className="relative z-10">
        <NewsletterSection />
      </div>
    </main>
  );
}
