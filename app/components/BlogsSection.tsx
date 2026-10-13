'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Link } from "@/i18n/routing";
import { Calendar, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

const blogsData = [
  { id: 'grilled-corn-sweet-smoky-juicy-perfection-for-just-5-99', image: '/images/know3.jpeg', tKey: 'blog1' },
  { id: 'creamy-coleslaw-a-cool-crunchy-classic-for-just-5-99', image: '/images/know4.jpeg', tKey: 'blog2' },
  { id: 'peri-fries-recipe-crispy-spicy-snack-youll-crave-every-time', image: '/images/know5.jpeg', tKey: 'blog3' },
  { id: 'masala-fries-recipe-crispy-spicy-street-style-snack-youll-love', image: '/images/know6.jpeg', tKey: 'blog4' },
  { id: 'grillados-bbq-mix-platter-organic-chicken-ribs-sides-for-159-99', image: '/images/know1.jpeg', tKey: 'blog5' },
  { id: 'veggie-nachos-mississaugas-ultimate-vegetarian-appetisers-at-grillados', image: '/images/know2.jpeg', tKey: 'blog6' },
];

const BlogsSection = () => {
  const t = useTranslations('Blogs');

  const totalOriginal = blogsData.length;
  // Duplicate array multiple times for infinite continuous loop
  const extendedBlogsData = React.useMemo(() => Array(20).fill(blogsData).flat(), []);
  const startIndex = 10 * totalOriginal;

  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Touch swipe support for mobile
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sliding Logic
  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Auto-slide every 5.5 seconds
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [nextSlide, isHovered]);

  // Snap back smoothly when idle
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex !== startIndex) {
        setIsTransitioning(false);
        const offset = ((currentIndex % totalOriginal) + totalOriginal) % totalOriginal;
        setCurrentIndex(startIndex + offset);
      }
    }, 1100);
    return () => clearTimeout(timer);
  }, [currentIndex, startIndex, totalOriginal]);

  // Mobile Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsHovered(true);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
    if (touchStartX !== null && touchEndX !== null) {
      const distance = touchStartX - touchEndX;
      const minSwipeDistance = 45;
      if (distance > minSwipeDistance) {
        nextSlide();
      } else if (distance < -minSwipeDistance) {
        prevSlide();
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const activeIndex = ((currentIndex % totalOriginal) + totalOriginal) % totalOriginal;

  return (
    <section className="w-full pt-2 pb-8 md:pt-2 md:pb-10 bg-zinc-50 overflow-hidden">
      <div className="max-w-[1664px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">

        {/* Navigation & Carousel Container */}
        <div
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Carousel Track */}
          <div className="overflow-hidden py-4">
            <div
              className={`flex ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
              style={{ transform: `translateX(calc(-100% * ${currentIndex} / ${itemsPerView}))` }}
            >
              {extendedBlogsData.map((blog, idx) => (
                <div
                  key={`${blog.id}-${idx}`}
                  className="px-2.5 h-full flex flex-col"
                  style={{ minWidth: `calc(100% / ${itemsPerView})` }}
                >
                  <div className="bg-white shadow-md overflow-hidden h-full flex flex-col border border-gray-100/90 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

                    {/* Blog Image */}
                    <Link 
                      href={`/blogs/${blog.id}`} 
                      className="relative w-full bg-gray-100 overflow-hidden border-b border-gray-100 shrink-0 block group/img"
                      style={{ aspectRatio: '2 / 1' }}
                    >
                      <Image
                        src={blog.image}
                        alt={t(`${blog.tKey}.title`)}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover/img:scale-105 transition-transform duration-500 ease-out"
                        quality={95}
                      />
                    </Link>

                    {/* Content */}
                    <div className="px-6 pt-6 pb-6 flex flex-col grow justify-between">
                      <div>
                        {/* Date - Not a link */}
                        <div 
                          className="flex items-center mb-3 w-max select-none" 
                          style={{ fontFamily: '"Noto Sans", sans-serif', fontStyle: 'normal', fontWeight: 500, fontSize: '15px', lineHeight: '24px', color: '#4B5563' }}
                        >
                          <Calendar className="w-4 h-4 mr-2 text-[#FAC716] shrink-0" />
                          <span>{t(`${blog.tKey}.date`)}</span>
                        </div>

                        {/* Title */}
                        <Link href={`/blogs/${blog.id}`} className="block group/title">
                          <h3 
                            className="mb-3 line-clamp-2 min-h-[52px] flex items-center text-black"
                            style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '20px', lineHeight: '26px', color: 'rgb(0, 0, 0)' }}
                          >
                            {t(`${blog.tKey}.title`)}
                          </h3>
                        </Link>

                        {/* Description */}
                        <p 
                          className="mb-4 line-clamp-2 min-h-[50px]"
                          style={{ fontFamily: '"Noto Sans", sans-serif', fontStyle: 'normal', fontWeight: 400, fontSize: '15px', lineHeight: '25px', color: '#4B5563' }}
                        >
                          {t(`${blog.tKey}.description`)}
                        </p>
                      </div>

                      {/* Read More Link - Always black, no red */}
                      <Link 
                        href={`/blogs/${blog.id}`} 
                        className="inline-flex items-center gap-1.5 text-black hover:text-black font-bold w-max group/btn transition-colors mt-auto pt-2"
                      >
                        <span className="text-[15px] text-black">{t('readMore')}</span>
                        <ArrowRight className="w-4 h-4 text-black group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide} 
            className="text-black hover:text-white absolute -left-3 md:-left-6 lg:-left-8 xl:-left-10 top-1/2 -translate-y-1/2 bg-[#FAC716] hover:bg-black p-3 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all z-10 hidden md:flex items-center justify-center cursor-pointer" 
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={nextSlide} 
            className="text-black hover:text-white absolute -right-3 md:-right-6 lg:-right-8 xl:-right-10 top-1/2 -translate-y-1/2 bg-[#FAC716] hover:bg-black p-3 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all z-10 hidden md:flex items-center justify-center cursor-pointer" 
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-5">
          {blogsData.map((blog, dotIdx) => {
            const isActive = activeIndex === dotIdx;
            return (
              <button
                key={blog.id}
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentIndex(startIndex + dotIdx);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive ? 'w-8 bg-[#FAC716]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to blog slide ${dotIdx + 1}`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BlogsSection;
