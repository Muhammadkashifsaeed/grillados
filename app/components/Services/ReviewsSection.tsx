"use client";

import React, { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';
import { useTranslations } from 'next-intl';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const getReviewsData = (t: any) => [
  { avatarSrc: "/images/Ali Z.png",        name: "Ali Z",            date: `7 ${t('monthsAgo')}`, review: t('review1') },
  { avatarSrc: "/images/Naz H.png",        name: "Naz H",            date: `7 ${t('monthsAgo')}`, review: t('review2') },
  { avatarSrc: "/images/yttyts.png",       name: "Usama Ismail",     date: `7 ${t('monthsAgo')}`, review: t('ratingOnly') },
  { avatarSrc: "/images/Mohamed Nagy.png", name: "Mohamed Nagy",     date: `7 ${t('monthsAgo')}`, review: t('ratingOnly') },
  { avatarSrc: "/images/mansnsjd.png",     name: "Jeremias Almazan", date: `7 ${t('monthsAgo')}`, review: t('review5') },
  { avatarSrc: "/images/mnsnds.png",       name: "Ashmit Samyal",    date: `7 ${t('monthsAgo')}`, review: t('ratingOnly') },
  { avatarSrc: "/images/aarif-amin.png",   name: "Aarif Amin",       date: `7 ${t('monthsAgo')}`, review: t('ratingOnly') },
];

const ReviewsSection = () => {
  const t = useTranslations('ServiceReviews');
  const reviewsData = getReviewsData(t);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  useEffect(() => {
    const updateMaxIndex = () => {
      let newMax = reviewsData.length - 1;
      if (window.innerWidth >= 1024) newMax = Math.max(0, reviewsData.length - 4);
      else if (window.innerWidth >= 768) newMax = Math.max(0, reviewsData.length - 2);
      
      setMaxIndex(newMax);
      setCurrentIndex((prev) => Math.min(prev, newMax));
    };

    updateMaxIndex();
    window.addEventListener('resize', updateMaxIndex);
    return () => window.removeEventListener('resize', updateMaxIndex);
  }, [reviewsData.length]);

  useEffect(() => {
    if (maxIndex <= 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };
  return (
    <section className="w-full bg-[#FAF7F1] py-14 overflow-hidden">
      <div className="w-full max-w-350 mx-auto px-6 md:px-10">

        {/* Centered Reviews Heading */}
        <div className="flex flex-col items-center mb-10">
          <h2 
            className="leading-tight"
            style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 700, fontSize: 'clamp(24px, 4vw, 40px)', lineHeight: 'clamp(52px, 8vw, 80px)', color: 'rgb(250, 174, 64)' }}
          >
            Reviews
          </h2>
          <div className="w-27.5 h-0.75 bg-black rounded-full mt-2"></div>
        </div>

        {/* Row: {t('good')} panel + auto-scroll carousel */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8 overflow-hidden w-full">

          {/* Left: GOOD block */}
          <div className="flex flex-col items-center md:items-start shrink-0 w-auto md:w-42.5 text-center md:text-left">
            <h3 
              className="mb-1 tracking-tight"
              style={{ fontFamily: "'Poppins', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '24px', lineHeight: 'clamp(24px, 3.4vw, 34px)', color: 'rgb(0,0,0)' }}
            >
              GOOD
            </h3>
            <div className="flex gap-0.5 mb-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#F5A623] fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 text-3 mb-2 font-medium leading-snug">
              {t('basedOn').split('1,779')[0]}<span className="font-bold text-gray-800">1,779{t('basedOn').split('1,779')[1]}</span>
            </p>
            <img src="/images/logoss.svg" alt="Powered by" className="h-4 object-contain opacity-80" />
          </div>

          {/* Divider */}
          <div className="w-full h-px md:w-px md:self-stretch bg-gray-300 shrink-0 my-2 md:my-0"></div>

          {/* Interactive Carousel */}
          <div className="flex-grow overflow-hidden relative w-full group px-1 review-card-container">
            
            {/* Left Arrow */}
            <button 
              onClick={handlePrev}
              className="group/btn absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full text-black hover:bg-black transition-colors opacity-0 md:group-hover:opacity-100"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-black group-hover/btn:text-white transition-colors" />
            </button>

            <div 
              className="flex gap-5 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(calc(-${currentIndex} * (var(--card-width) + 1.25rem)))` }}
            >
              {reviewsData.map((rev, idx) => (
                <div key={idx} className="shrink-0" style={{ width: 'var(--card-width)' }}>
                  <ReviewCard
                    name={rev.name}
                    date={rev.date}
                    review={rev.review}
                    avatarSrc={rev.avatarSrc}
                  />
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button 
              onClick={handleNext}
              className="group/btn absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full text-black hover:bg-black transition-colors opacity-0 md:group-hover:opacity-100"
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-black group-hover/btn:text-white transition-colors" />
            </button>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .review-card-container {
          --card-width: 85%;
        }
        @media (min-width: 768px) {
          .review-card-container {
            --card-width: calc((100% - 1.25rem) / 2);
          }
        }
        @media (min-width: 1024px) {
          .review-card-container {
            --card-width: calc((100% - 3.75rem) / 4);
          }
        }
      `}} />
    </section>
  );
};

export default ReviewsSection;
