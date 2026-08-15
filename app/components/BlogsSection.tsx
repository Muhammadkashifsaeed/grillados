'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Link } from "@/i18n/routing";
import { Calendar, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

const blogsData = [
  { id: 1, image: '/images/know1.jpeg', tKey: 'blog1' },
  { id: 2, image: '/images/know2.jpeg', tKey: 'blog2' },
  { id: 3, image: '/images/know3.jpeg', tKey: 'blog3' },
  { id: 4, image: '/images/know4.jpeg', tKey: 'blog4' },
  { id: 5, image: '/images/know5.jpeg', tKey: 'blog5' },
  { id: 6, image: '/images/know6.jpeg', tKey: 'blog6' },
];

const BlogsSection = () => {
  const t = useTranslations('Blogs');
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

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
    setCurrentIndex((prev) => (prev + itemsPerView >= blogsData.length ? 0 : prev + 1));
  }, [itemsPerView]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, blogsData.length - itemsPerView) : prev - 1));
  }, [itemsPerView]);

  // Auto-slide every 5.5 seconds (paused on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [nextSlide, isHovered]);

  return (
    <section className="w-full py-6 md:py-8 bg-zinc-50 overflow-hidden">
      <div className="w-full px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* Navigation & Container */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Carousel Track */}
          <div className="overflow-hidden px-2 py-6">
            <div 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {blogsData.map((blog) => (
                <div 
                  key={blog.id} 
                  className="px-4"
                  style={{ minWidth: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full flex flex-col border border-gray-100 group">
                    
                    {/* Blog Image */}
                    <div className="relative w-full h-48 sm:h-56 bg-white overflow-hidden border-b border-gray-100">
                      <Image 
                        src={blog.image} 
                        alt={t(`${blog.tKey}.title`)} 
                        fill sizes="100vw" 
                        className="object-contain p-2 transition-transform duration-700 ease-in-out group-hover:scale-110" 
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex flex-col grow">
                      
                      {/* Date */}
                      <div className="flex items-center text-black text-sm font-semibold mb-3 tracking-wider uppercase">
                        <Calendar className="w-4 h-4 mr-2" />
                        {t(`${blog.tKey}.date`)}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-black mb-3 leading-snug font-['Outfit',sans-serif]">
                        {t(`${blog.tKey}.title`)}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-black mb-6 grow leading-relaxed">
                        {t(`${blog.tKey}.description`)}
                      </p>
                      
                      {/* Read More Link */}
                      <Link href={`/blog/${blog.id}`} className="flex items-center text-black font-bold hover:text-red-600 transition-colors group/link mt-auto w-max">
                        {t('readMore')}
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 lg:-ml-6 bg-white p-3 rounded-full shadow-lg border border-gray-100 text-gray-700 hover:text-red-600 hover:scale-110 transition-all z-10 hidden md:flex"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 lg:-mr-6 bg-white p-3 rounded-full shadow-lg border border-gray-100 text-gray-700 hover:text-red-600 hover:scale-110 transition-all z-10 hidden md:flex"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
