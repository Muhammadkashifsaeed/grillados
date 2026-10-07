'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Link } from "@/i18n/routing";
import { Calendar, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

const blogsData = [
  { id: 'grilled-corn-sweet-smoky-juicy-perfection-for-just-5-99', image: '/images/know1.jpeg', tKey: 'blog1' },
  { id: 'creamy-coleslaw-a-cool-crunchy-classic-for-just-5-99', image: '/images/know2.jpeg', tKey: 'blog2' },
  { id: 'peri-fries-recipe-crispy-spicy-snack-youll-crave-every-time', image: '/images/know3.jpeg', tKey: 'blog3' },
  { id: 4, image: '/images/know4.jpeg', tKey: 'blog4' },
  { id: 5, image: '/images/know5.jpeg', tKey: 'blog5' },
  { id: 6, image: '/images/know6.jpeg', tKey: 'blog6' },
];

const BlogsSection = () => {
  const t = useTranslations('Blogs');

  const totalOriginal = blogsData.length;
  // We duplicate the array many times so it never runs out for normal usage
  const extendedBlogsData = React.useMemo(() => Array(20).fill(blogsData).flat(), []);
  const startIndex = 10 * totalOriginal;

  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

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

  // Snap back to middle when idle
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex !== startIndex) {
        setIsTransitioning(false);
        const offset = (currentIndex % totalOriginal + totalOriginal) % totalOriginal;
        setCurrentIndex(startIndex + offset);
      }
    }, 1100);
    return () => clearTimeout(timer);
  }, [currentIndex, startIndex, totalOriginal]);

  return (
    <section className="w-full pt-2 pb-6 md:pt-2 md:pb-8 bg-zinc-50 overflow-hidden">
      <div className="w-full px-6 md:px-8 lg:px-12 xl:px-16">

        {/* Navigation & Container */}
        <div
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Carousel Track */}
          <div className="overflow-hidden py-6">
            <div
              className={`flex ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
              style={{ transform: `translateX(calc(-100% * ${currentIndex} / ${itemsPerView}))` }}
            >
              {extendedBlogsData.map((blog, idx) => (
                <div
                  key={`${blog.id}-${idx}`}
                  className="px-2 h-full flex flex-col"
                  style={{ minWidth: `calc(100% / ${itemsPerView})` }}
                >
                  <div className="bg-white shadow-md overflow-hidden h-full flex flex-col border border-gray-100/80 rounded-2xl transition-shadow duration-300 hover:shadow-lg">

                    {/* Blog Image - Fixed aspect ratio for 100% equal image height */}
                    <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden border-b border-gray-100 shrink-0">
                      <Image
                        src={blog.image}
                        alt={t(`${blog.tKey}.title`)}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>

                    {/* Content - Equal height with flex grow & bottom alignment */}
                    <div className="px-6 pt-6 pb-6 flex flex-col grow justify-between">
                      <div>
                        {/* Date */}
                        <Link href={`/blogs/${blog.id}`} className="flex items-center mb-3 w-max underline hover:text-red-500 transition-colors group" style={{ fontFamily: '"Noto Sans", sans-serif', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', lineHeight: '26px', color: '#000000' }}>
                          <Calendar className="w-5 h-5 mr-2 group-hover:text-red-500 transition-colors shrink-0" />
                          {t(`${blog.tKey}.date`)}
                        </Link>

                        {/* Title - Fixed min-height so 1 line and 2 line titles occupy equal height */}
                        <h3 
                          className="mb-3 line-clamp-2 min-h-[52px] flex items-center"
                          style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '20px', lineHeight: '26px', color: 'rgb(0, 0, 0)' }}
                        >
                          {t(`${blog.tKey}.title`)}
                        </h3>

                        {/* Description - Fixed min-height */}
                        <p 
                          className="mb-4 line-clamp-2 min-h-[50px]"
                          style={{ fontFamily: '"Noto Sans", sans-serif', fontStyle: 'normal', fontWeight: 400, fontSize: '15px', lineHeight: '25px', color: '#000000' }}
                        >
                          {t(`${blog.tKey}.description`)}
                        </p>
                      </div>

                      {/* Read More Link */}
                      <Link href={`/blogs/${blog.id}`} className="inline-flex items-center gap-1.5 text-black font-bold w-max group hover:opacity-80 transition-opacity mt-auto">
                        <span>{t('readMore')}</span>
                        <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button onClick={prevSlide} className="text-black hover:text-white hover: hover: absolute -left-4 md:-left-8 lg:-left-10 xl:-left-12 top-1/2 -translate-y-1/2 bg-[#FAC716] p-3 rounded-full shadow-lg hover:scale-110 transition-all z-10 hidden md:flex" aria-label="Previous slide" >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button onClick={nextSlide} className="text-black hover:text-white hover: hover: absolute -right-4 md:-right-8 lg:-right-10 xl:-right-12 top-1/2 -translate-y-1/2 bg-[#FAC716] p-3 rounded-full shadow-lg hover:scale-110 transition-all z-10 hidden md:flex" aria-label="Next slide" >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
