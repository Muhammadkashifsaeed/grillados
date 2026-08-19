import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const AboutUsSmart = () => {
  const t = useTranslations('AboutUs');
  return (
    <section className="bg-white pt-8 md:pt-12 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Content */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          
          <h2 className="mb-6 flex flex-col">
            <span 
              className="block font-semibold"
              style={{ fontFamily: "'Ribeat', sans-serif", color: 'rgb(23, 23, 23)', fontSize: '25px', lineHeight: '30px' }}
            >
              {t('smartHeading1')}
            </span>
            <span 
              className="block font-semibold drop-shadow-sm mt-1"
              style={{ fontFamily: "'Ribeat', sans-serif", color: 'rgb(250, 199, 22)', fontSize: '48px', lineHeight: '50px' }}
            >
              {t('smartHeading2')}
            </span>
          </h2>

          <p 
            className="font-normal"
            style={{ fontFamily: "'Noto Sans', sans-serif", color: 'rgb(114, 114, 114)', fontSize: '18px', lineHeight: '30px' }}
          >
            At <span className="text-[#FBC18A] font-bold">Grillado’s</span>, we believe healthy food is vital for good health. Our health-conscious menu is designed to cater to your health-conscious lifestyle. <span className="text-[#FBC18A] font-bold">Grillado’s</span> chicken is grilled to perfection, making it the smarter choice for a balanced life.
          </p>
          
        </div>

        {/* Right Side: Image */}
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2 transform transition-transform duration-500 hover:scale-[1.02]">
          <Image 
            src="/images/making.jpg" 
            alt="Making Grillados" 
            fill sizes="100vw" 
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutUsSmart;
