import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const AboutUsStory = () => {
  const t = useTranslations('AboutUs');
  return (
    <section className="bg-[#fafafa] pt-16 md:pt-24 pb-8 md:pb-12 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left Side: Images Composition */}
        <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] flex items-center justify-center">

          {/* First Image (Top Left) */}
          <div className="absolute top-[3%] left-0 w-[48%] h-[70%] sm:h-[75%] md:h-[80%] rounded-2xl overflow-hidden shadow-2xl z-10 border-[6px] border-white">
            <Image
              src="/images/famous1.png"
              alt="Grillados Famous 1"
              fill sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Second Image (Bottom Right) */}
          <div className="absolute bottom-[3%] right-0 w-[48%] h-[70%] sm:h-[75%] md:h-[80%] rounded-2xl overflow-hidden shadow-2xl z-20 border-[6px] border-white">
            <Image
              src="/images/famous2.png"
              alt="Grillados Famous 2"
              fill sizes="100vw"
              className="object-cover"
            />
          </div>

        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col justify-center">
          <h2 className="mb-8 flex flex-col">
            <span
              className="block font-semibold"
              style={{ fontFamily: "'Ribeat', sans-serif", color: 'rgb(23, 23, 23)', fontSize: '25px', lineHeight: '30px' }}
            >
              {t('storyHeading1')}
            </span>
            <span
              className="block font-semibold drop-shadow-sm mt-1"
              style={{ fontFamily: "'Ribeat', sans-serif", color: 'rgb(250, 199, 22)', fontSize: '48px', lineHeight: '50px' }}
            >
              {t('storyHeading2')}
            </span>
          </h2>

          <div className="space-y-6 mb-10">
            <p
              className="font-normal"
              style={{ fontFamily: "'Noto Sans', sans-serif", color: 'rgb(114, 114, 114)', fontSize: '18px', lineHeight: '30px' }}
            >
              {t('storyDesc1')}
            </p>

            <p
              className="font-normal"
              style={{ fontFamily: "'Noto Sans', sans-serif", color: 'rgb(114, 114, 114)', fontSize: '18px', lineHeight: '30px' }}
            >
              {t('storyDesc2')}</p>
          </div>

          {/* Bottom Right Images */}
          <div className="flex flex-wrap gap-5 items-center">
            <div className="relative w-40 h-28 sm:w-56 sm:h-36 rounded-xl overflow-hidden shadow-lg border-2 border-white">
              <Image
                src="/images/keep1.jpg"
                alt="Grillados Keep 1"
                fill sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="relative w-40 h-28 sm:w-56 sm:h-36 rounded-xl overflow-hidden shadow-lg border-2 border-white">
              <Image
                src="/images/keep2.jpg"
                alt="Grillados Keep 2"
                fill sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUsStory;
