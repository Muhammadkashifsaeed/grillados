import React from 'react';
import Image from 'next/image';

const AboutUsMissionVision = () => {
  return (
    <section className="bg-[#fafafa] pt-4 md:pt-8 pb-4 md:pb-8 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        
        {/* Left Side: Mission */}
        <div className="flex flex-col items-center text-center border-2 border-gray-200 rounded-xl p-6 sm:p-10 shadow-sm bg-white hover:shadow-md transition-shadow">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black font-['Outfit',sans-serif] uppercase mb-4">
            Our Mission
          </h2>
          {/* Yellow Divider */}
          <div className="w-16 h-1 bg-[#DAAF18] mb-8"></div>
          
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium mb-6">
            Our goal is to become the world’s leading brand in fast-paced, casual dining, by combining great quality and a healthy choice for food-lovers globally.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
            Furthermore, our environmentally-friendly approach and community-support initiatives ensure that we give back to the society that support us year after year.
          </p>
        </div>

        {/* Right Side: Vision */}
        <div className="flex flex-col items-center text-center border-2 border-gray-200 rounded-xl p-6 sm:p-10 shadow-sm bg-white hover:shadow-md transition-shadow">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black font-['Outfit',sans-serif] uppercase mb-4">
            Our Vision
          </h2>
          {/* Yellow Divider */}
          <div className="w-16 h-1 bg-[#DAAF18] mb-8"></div>
          
          <ul className="flex flex-col space-y-6">
            <li className="flex items-start gap-4">
              <div className="relative w-6 h-6 flex-shrink-0 mt-1">
                <Image 
                  src="/images/bullseye.png" 
                  alt="Bullseye" 
                  fill 
                  className="object-contain"
                />
              </div>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium capitalize">
                to establish a world-class brand
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="relative w-6 h-6 flex-shrink-0 mt-1">
                <Image 
                  src="/images/bullseye.png" 
                  alt="Bullseye" 
                  fill 
                  className="object-contain"
                />
              </div>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium capitalize">
                to be the leading & fastest growing restaurant-chain globally
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="relative w-6 h-6 flex-shrink-0 mt-1">
                <Image 
                  src="/images/bullseye.png" 
                  alt="Bullseye" 
                  fill 
                  className="object-contain"
                />
              </div>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium capitalize">
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
