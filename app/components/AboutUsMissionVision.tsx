import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const AboutUsMissionVision = () => {
  const t = useTranslations('AboutUs');
  return (
    <section className="bg-[#fafafa] pt-2 md:pt-4 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        
        {/* Left Side: Mission */}
        <div className="flex flex-col items-center text-center border border-gray-200/80 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm bg-white hover:shadow-md transition-all">
          <h2 
            className="capitalize mb-4"
            style={{ fontFamily: "'Ribeat', sans-serif", fontWeight: 600, color: 'rgb(35, 31, 30)', fontSize: 'clamp(29px, 4.8vw, 48px)', lineHeight: 'clamp(31px, 4.7vw, 47px)' }}
          >
            Our Mission
          </h2>
          {/* Yellow Divider */}
          <div className="w-16 h-1 bg-[#FACC15] mb-6 rounded-full"></div>
          
          <p 
            className="mb-4"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: 'rgb(23, 23, 23)', fontSize: '16px', lineHeight: '26px' }}
          >
            Our goal is to become the world’s leading brand in fast-paced, casual dining, by combining great quality and a healthy choice for food-lovers globally.
          </p>
          <p 
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: 'rgb(23, 23, 23)', fontSize: '16px', lineHeight: '26px' }}
          >
            Furthermore, our environmentally-friendly approach and community-support initiatives ensure that we give back to the society that support us year after year.
          </p>
        </div>

        {/* Right Side: Vision */}
        <div className="flex flex-col items-center text-center border border-gray-200/80 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm bg-white hover:shadow-md transition-all">
          <h2 
            className="capitalize mb-4"
            style={{ fontFamily: "'Ribeat', sans-serif", fontWeight: 600, color: 'rgb(35, 31, 30)', fontSize: 'clamp(29px, 4.8vw, 48px)', lineHeight: 'clamp(31px, 4.7vw, 47px)' }}
          >
            Our Vision
          </h2>
          {/* Yellow Divider */}
          <div className="w-16 h-1 bg-[#FACC15] mb-6 rounded-full"></div>
          
          <ul className="flex flex-col space-y-4 w-full">
            <li className="flex items-start gap-4">
              <div className="relative w-6 h-6 flex-shrink-0 mt-0.5">
                <Image 
                  src="/images/bullseye.png" 
                  alt="Bullseye" 
                  fill sizes="24px" 
                  className="object-contain"
                />
              </div>
              <p 
                className="capitalize text-left"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: 'rgb(23, 23, 23)', fontSize: '16px', lineHeight: '26px' }}
              >
                to establish a world-class brand
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="relative w-6 h-6 flex-shrink-0 mt-0.5">
                <Image 
                  src="/images/bullseye.png" 
                  alt="Bullseye" 
                  fill sizes="24px" 
                  className="object-contain"
                />
              </div>
              <p 
                className="capitalize text-left"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: 'rgb(23, 23, 23)', fontSize: '16px', lineHeight: '26px' }}
              >
                to be the leading & fastest growing restaurant-chain globally
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="relative w-6 h-6 flex-shrink-0 mt-0.5">
                <Image 
                  src="/images/bullseye.png" 
                  alt="Bullseye" 
                  fill sizes="24px" 
                  className="object-contain"
                />
              </div>
              <p 
                className="capitalize text-left"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: 'rgb(23, 23, 23)', fontSize: '16px', lineHeight: '26px' }}
              >
                to be synonymous with quality and customer care
              </p>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default AboutUsMissionVision;
