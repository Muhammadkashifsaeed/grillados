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

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 10000, stopOnInteraction: false })
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <main 
      className="flex flex-col flex-1 min-h-screen relative overflow-x-hidden bg-[#0a0a0a]"
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
                  className="flex-[0_0_100%] min-w-0 relative w-full aspect-[21/9] md:aspect-[21/9]"
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
          <button type="button" onClick={scrollPrev} className="text-black hover:text-white hover: hover: absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-[#FAC716] /80 backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 shadow-md border border-white/20" aria-label="Previous image" >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 -ml-0.5" />
          </button>

          {/* Right Arrow */}
          <button type="button" onClick={scrollNext} className="text-black hover:text-white hover: hover: absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-[#FAC716] /80 backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 shadow-md border border-white/20" aria-label="Next image" >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 -mr-0.5" />
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-2 sm:bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 z-20">
            {dealImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => emblaApi?.scrollTo(idx)}
                className="text-black hover:text-white w-3 h-3 rounded-full bg-white/40 hover:bg-[#FAC716] transition-colors shadow-lg"
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
