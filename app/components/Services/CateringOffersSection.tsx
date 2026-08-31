"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import CateringOfferCard, { CateringOfferProps } from './CateringOfferCard';

const offers: CateringOfferProps[] = [
  {
    headingKey: 'offer1',
    titleKey: 'title1',
    descKey: 'desc1',
    imageSrc: '/images/garlic.png',
    headingColor: '#F5A623', // "Offer 1 Heading Color #F5A623"
  },
  {
    headingKey: 'offer2',
    titleKey: 'title2',
    descKey: 'desc2',
    imageSrc: '/images/large.png',
    headingColor: '#FF7F00', // "Orange color"
  }
];

const CateringOffersSection = () => {
  const tPartners = useTranslations('CateringPartners');

  return (
    <section className="w-full bg-zinc-50 border-t border-gray-200 relative">
      <div className="w-full px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col">
        
        {/* Made with Love Section */}
        <div className="w-full px-6 md:px-8 lg:px-12 xl:px-16 mb-16 flex flex-col items-center text-center">
          <h3 
            className="tracking-tight"
            style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '30px', lineHeight: '39px', color: 'rgb(0,0,0)' }}
          >
            {tPartners('madeWithLove')}
          </h3>
          <div className="w-24 h-0.5 bg-black my-6"></div>
          <h4 
            className="mb-4 tracking-wide"
            style={{ fontFamily: "'Poppins', sans-serif", fontStyle: 'normal', fontWeight: 700, fontSize: '16px', lineHeight: '26px', color: 'rgb(0,0,0)' }}
          >
            {tPartners('smallHeading')}
          </h4>
          <p 
            className="whitespace-pre-wrap max-w-5xl mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif", fontStyle: 'normal', fontWeight: 400, fontSize: '16px', lineHeight: '26px', color: 'rgb(0,0,0)' }}
          >
            {tPartners('description')}
          </p>
        </div>

        <div className="flex flex-col gap-10 md:gap-16 pb-16">
          {offers.map((offer, index) => (
            <div 
              key={index} 
              className="sticky"
              style={{ top: '120px', zIndex: 10 + index }}
            >
              <CateringOfferCard 
                {...offer}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CateringOffersSection;
