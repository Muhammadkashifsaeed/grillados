"use client";

import React from 'react';
import ReviewCard from './ReviewCard';
import { useTranslations } from 'next-intl';

const getReviewsData = (t: any) => [
  { avatarSrc: "/images/Ali Z.png",        name: "Ali Z",            date: `7 ${t('monthsAgo')}`, review: t('review1') },
  { avatarSrc: "/images/Naz H.png",        name: "Naz H",            date: `7 ${t('monthsAgo')}`, review: t('review2') },
  { avatarSrc: "/images/yttyts.png",       name: "Usama Ismail",     date: `7 ${t('monthsAgo')}`, review: t('ratingOnly') },
  { avatarSrc: "/images/Mohamed Nagy.png", name: "Mohamed Nagy",     date: `7 ${t('monthsAgo')}`, review: t('ratingOnly') },
  { avatarSrc: "/images/mansnsjd.png",     name: "Jeremias Almazan", date: `7 ${t('monthsAgo')}`, review: t('review5') },
  { avatarSrc: "/images/mnsnds.png",       name: "Ashmit Samyal",    date: `7 ${t('monthsAgo')}`, review: t('ratingOnly') },
  { avatarSrc: "/images/Aarif Amin.png",   name: "Aarif Amin",       date: `7 ${t('monthsAgo')}`, review: t('ratingOnly') },
];

// Duplicate for seamless infinite loop


const ReviewsSection = () => {
  const t = useTranslations('ServiceReviews');
  const reviewsData = getReviewsData(t);
  const allCards = [...reviewsData, ...reviewsData];
  return (
    <section className="w-full bg-[#FDF8F1] py-14 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10">

        {/* Centered Reviews Heading */}
        <div className="flex flex-col items-center mb-10">
          <h2 
            className="leading-tight"
            style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 700, fontSize: '35px', lineHeight: '46px', color: 'rgb(250, 174, 64)' }}
          >
            Reviews
          </h2>
          <div className="w-[110px] h-[3px] bg-black rounded-full mt-2"></div>
        </div>

        {/* Row: {t('good')} panel + auto-scroll carousel */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8 overflow-hidden w-full">

          {/* Left: GOOD block */}
          <div className="flex flex-col items-center md:items-start shrink-0 w-auto md:w-[170px] text-center md:text-left">
            <h3 
              className="mb-1 tracking-tight"
              style={{ fontFamily: "'Poppins', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '24px', lineHeight: '34px', color: 'rgb(0,0,0)' }}
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
            <p className="text-gray-600 text-[12px] mb-2 font-medium leading-snug">
              {t('basedOn').split('1,779')[0]}<span className="font-bold text-gray-800">1,779{t('basedOn').split('1,779')[1]}</span>
            </p>
            <img src="/images/logoss.svg" alt="Powered by" className="h-4 object-contain opacity-80" />
          </div>

          {/* Divider */}
          <div className="w-full h-px md:w-px md:self-stretch bg-gray-300 shrink-0 my-2 md:my-0"></div>

          {/* Auto-scrolling Carousel */}
          <div className="flex-grow overflow-hidden relative w-full">
            <div className="flex gap-5 reviews-marquee">
              {allCards.map((rev, idx) => (
                <div key={idx} className="w-[280px] shrink-0">
                  <ReviewCard
                    name={rev.name}
                    date={rev.date}
                    review={rev.review}
                    avatarSrc={rev.avatarSrc}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes reviewsScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .reviews-marquee {
          animation: reviewsScroll 28s linear infinite;
          width: max-content;
        }
      `}} />
    </section>
  );
};

export default ReviewsSection;
