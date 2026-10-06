import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const AboutUsMissionVision = () => {
  const t = useTranslations('AboutUs');
  return (
    <section className="bg-[#fafafa] pt-2 md:pt-4 pb-4 md:pb-8 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        
        {/* Left Side: Mission */}
        <div className="flex flex-col items-center text-center border-2 border-gray-200 rounded-xl p-4 sm:p-6 shadow-md bg-white hover:shadow-xl transition-shadow">
          <h2 
            className="capitalize mb-4"
            style={{ fontFamily: "'Ribeat', sans-serif", fontWeight: 600, color: 'rgb(35, 31, 30)', fontSize: 'clamp(29px, 4.8vw, 48px)', lineHeight: 'clamp(31px, 4.7vw, 47px)' }}
          >
            Our Mission
          </h2>
          {/* Yellow Divider */}
          <div className="w-16 h-1 bg-[#FACC15] mb-5"></div>
          
          <p 
            className="mb-3"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: 'rgb(23, 23, 23)', fontSize: '16px', lineHeight: '24px' }}
          >
            Our goal is to become the world’s leading brand in fast-paced, casual dining, by combining great quality and a healthy choice for food-lovers globally.
          </p>
          <p 
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: 'rgb(23, 23, 23)', fontSize: '16px', lineHeight: '24px' }}
          >
            Furthermore, our environmentally-friendly approach and community-support initiatives ensure that we give back to the society that support us year after year.
          </p>
        </div>

        {/* Right Side: Vision */}
        <div className="flex flex-col items-center text-center border-2 border-gray-200 rounded-xl p-4 sm:p-6 shadow-md bg-white hover:shadow-xl transition-shadow">
          <h2 
            className="capitalize mb-4"
            style={{ fontFamily: "'Ribeat', sans-serif", fontWeight: 600, color: 'rgb(35, 31, 30)', fontSize: 'clamp(29px, 4.8vw, 48px)', lineHeight: 'clamp(31px, 4.7vw, 47px)' }}
          >
            Our Vision
          </h2>
          {/* Yellow Divider */}
          <div className="w-16 h-1 bg-[#FACC15] mb-5"></div>
          
          <ul className="flex flex-col space-y-3">
            <li className="flex items-start gap-4">
              <div className="relative w-6 h-6 flex-shrink-0 mt-1">
                <Image 
                  src="/images/bullseye.png" 
                  alt="Bullseye" 
                  fill sizes="100vw" 
                  className="object-contain"
                />
              </div>
              <p 
                className="capitalize"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: 'rgb(23, 23, 23)', fontSize: '16px', lineHeight: '24px' }}
              >
                to establish a world-class brand
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="relative w-6 h-6 flex-shrink-0 mt-1">
                <Image 
                  src="/images/bullseye.png" 
                  alt="Bullseye" 
                  fill sizes="100vw" 
                  className="object-contain"
                />
              </div>
              <p 
                className="capitalize"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: 'rgb(23, 23, 23)', fontSize: '16px', lineHeight: '24px' }}
              >
                to be the leading & fastest growing restaurant-chain globally
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="relative w-6 h-6 flex-shrink-0 mt-1">
                <Image 
                  src="/images/bullseye.png" 
                  alt="Bullseye" 
                  fill sizes="100vw" 
                  className="object-contain"
                />
              </div>
              <p 
                className="capitalize"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: 'rgb(23, 23, 23)', fontSize: '16px', lineHeight: '24px' }}
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
