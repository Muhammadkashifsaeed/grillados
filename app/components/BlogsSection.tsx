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
                  className="px-2"
                  style={{ minWidth: `calc(100% / ${itemsPerView})` }}
                >
                  <div className="bg-white shadow-md overflow-hidden h-auto flex flex-col border border-gray-100 rounded-2xl">

                    {/* Blog Image */}
                    <div className="w-full bg-white overflow-hidden border-b border-gray-100">
                      <Image
                        src={blog.image}
                        alt={t(`${blog.tKey}.title`)}
                        width={600}
                        height={400}
                        sizes="100vw"
                        className="w-full h-auto object-contain"
                      />
                    </div>

                    {/* Content */}
                    <div className="px-6 pt-6 pb-3 flex flex-col grow">

                      {/* Date */}
                      <Link href={`/blogs/${blog.id}`} className="flex items-center mb-3 w-max underline hover:text-red-500 transition-colors group" style={{ fontFamily: '"Noto Sans", sans-serif', fontStyle: 'normal', fontWeight: 400, fontSize: '16px', lineHeight: '26px', color: '#000000' }}>
                        <Calendar className="w-5 h-5 mr-2 group-hover:text-red-500 transition-colors" />
                        {t(`${blog.tKey}.date`)}
                      </Link>

                      {/* Title */}
                      <h3 
                        className="mb-3"
                        style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '20px', lineHeight: '26px', color: '#000000' }}
                      >
                        {t(`${blog.tKey}.title`)}
                      </h3>

                      {/* Description */}
                      <p 
                        className="mb-2 line-clamp-2"
                        style={{ fontFamily: '"Noto Sans", sans-serif', fontStyle: 'normal', fontWeight: 400, fontSize: '15px', lineHeight: '25px', color: '#000000' }}
                      >
                        {t(`${blog.tKey}.description`)}
                      </p>

                      {/* Read More Link */}
                      <Link href={`/blogs/${blog.id}`} className="inline-flex items-center gap-1.5 text-black font-bold w-max group hover:opacity-80 transition-opacity">
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
