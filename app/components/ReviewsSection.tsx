'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

const reviews = [
  {
    name: 'Ali Z',
    time: '7 months ago',
    rating: 5,
    text: "Harprith provided amazing services. Great food.",
    image: null, // AliZ.png doesn't exist, will fallback
  },
  {
    name: 'Naz H',
    time: '7 months ago',
    rating: 5,
    text: "Good",
    image: '/images/Naz H.png',
  },
  {
    name: 'Mohamed Nagy',
    time: '7 months ago',
    rating: 5,
    text: "This user only left a rating.",
    image: '/images/Mohamed Nagy.png',
  },
  {
    name: 'Usama Ismail',
    time: '7 months ago',
    rating: 5,
    text: "This user only left a rating.",
    image: '/images/Usama Ismail.png',
  },
  {
    name: 'Jeremias Almazan',
    time: '7 months ago',
    rating: 5,
    text: "Great Customer Service and food was so delicious and cooked with perfection! Highly recommend",
    image: null, // Will use Initial
  },
  {
    name: 'Ashmit Samyal',
    time: '7 months ago',
    rating: 5,
    text: "This user only left a rating.",
    image: null, // Will use Initial
  },
  {
    name: 'Aarif Amin',
    time: '6 months ago',
    rating: 5,
    text: "This user only left a rating.",
    image: null,
  }
];

const getInitialColor = (name: string) => {
  const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];
  const charCode = name.charCodeAt(0) || 0;
  return colors[charCode % colors.length];
};

const ReviewsSection = () => {
  const t = useTranslations('Reviews');
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

  // Responsive Carousel Logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Tablet
      } else {
        setItemsPerView(3); // Desktop
      }
    };
    
    // Initial check
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Autoplay Logic (Pause on hover, 5.5s delay)
  useEffect(() => {
    if (isHovered) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, 5500); // 5.5 seconds between slides
    
    return () => clearInterval(timer);
  }, [nextSlide, isHovered]);

  return (
    <section className="w-full py-8 md:py-10 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 font-['Outfit',sans-serif] uppercase tracking-wide mb-4">
            {t('heading')}
          </h2>
          <p className="text-gray-500 text-sm md:text-base tracking-widest uppercase">
            {t('subtitle')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-stretch">
          
          {/* Left Side: Fixed Google Rating Summary */}
          <div className="w-full lg:w-1/4 xl:w-1/5 flex-shrink-0 flex flex-col justify-center items-center lg:items-start text-center lg:text-left bg-white p-8 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-2xl text-gray-800">Google</span>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#fbbc04] text-[#fbbc04]" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              <span className="font-bold text-gray-900">{t('basedOn').split('1,779')[0]}1,779{t('basedOn').split('1,779')[1] || ' reviews'}</span>
            </p>
            
            {/* Added based.svg Image */}
            <div className="w-32 h-auto relative mt-2">
              <Image 
                src="/images/based.svg" 
                alt="Powered by Google" 
                width={128} 
                height={40} 
                className="object-contain" 
              />
            </div>
          </div>

          {/* Right Side: Carousel Container */}
          <div 
            className="relative w-full lg:w-3/4 xl:w-4/5 mx-auto lg:mx-0 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
            
            <div className="overflow-hidden relative px-2 py-4 h-full flex items-stretch">
              <div 
                className="flex transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] items-stretch w-full"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
              >
                {reviews.map((review, idx) => (
                  <div 
                    key={idx} 
                    className="flex-shrink-0 px-3 flex justify-center w-full md:w-1/2 lg:w-1/3"
                  >
                    
                    {/* Google Review Card - Matches Google Widget exactly */}
                    <div className="bg-white rounded-[16px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 w-full relative border border-gray-100 flex flex-col h-full min-h-[220px]">
                      
                      {/* Google Icon Top Right */}
                      <div className="absolute top-6 right-6 w-6 h-6 opacity-90">
                        <svg viewBox="0 0 48 48" className="w-full h-full">
                          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                          <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                          <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                          <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                        </svg>
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        
                        {/* Avatar - Exact 48px by 48px */}
                        {review.image ? (
                          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                            <Image src={review.image} alt={review.name} fill className="object-cover" />
                          </div>
                        ) : (
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-medium text-xl flex-shrink-0 ${getInitialColor(review.name)}`}>
                            {review.name.charAt(0).toUpperCase()}
                          </div>
                        )}
                        
                        {/* Name & Time */}
                        <div className="flex flex-col justify-center">
                          <h3 className="font-semibold text-gray-900 text-[15px] leading-tight mb-0.5">{review.name}</h3>
                          <span className="text-gray-500 text-[13px] leading-tight">{review.time}</span>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex gap-[2px] mb-3">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#fbbc04] text-[#fbbc04]" />
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="text-gray-900 text-[14px] leading-[1.4] flex-1">
                        {review.text === "This user only left a rating." ? t('ratingOnly') : review.text}
                      </p>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons (Fade in on hover) */}
            <button 
              onClick={prevSlide}
              className={`absolute left-[-15px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.1)] flex items-center justify-center text-gray-800 hover:bg-gray-50 hover:scale-105 transition-all z-10 border border-gray-100 ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100 md:opacity-0 md:group-hover:opacity-100'}`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button 
              onClick={nextSlide}
              className={`absolute right-[-15px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.1)] flex items-center justify-center text-gray-800 hover:bg-gray-50 hover:scale-105 transition-all z-10 border border-gray-100 ${currentIndex >= maxIndex ? 'opacity-0 pointer-events-none' : 'opacity-100 md:opacity-0 md:group-hover:opacity-100'}`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
