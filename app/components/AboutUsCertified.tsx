import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const AboutUsCertified = () => {
  const t = useTranslations('AboutUsCertified');
  // Cards are managed by translations now
  const rawCards = t.raw('cards') as { heading: string, text: string }[];
  const cards = [
    { id: 1, image: '/images/certified1.png', heading: rawCards[0].heading, text: rawCards[0].text },
    { id: 2, image: '/images/certified2.png', heading: rawCards[1].heading, text: rawCards[1].text },
    { id: 3, image: '/images/certified3.png', heading: rawCards[2].heading, text: rawCards[2].text },
    { id: 4, image: '/images/certified4.png', heading: rawCards[3].heading, text: rawCards[3].text },
  ];

  return (
    <section className="bg-[#fafafa] pt-4 md:pt-8 pb-2 md:pb-4 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Centered Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="capitalize tracking-wide flex flex-col items-center">
            <span 
              className="block"
              style={{ fontFamily: "'Ribeat', sans-serif", fontWeight: 600, color: 'rgb(23, 23, 23)', fontSize: 'clamp(22px, 3.2vw, 32px)', lineHeight: 'clamp(26px, 4vw, 40px)' }}
            >
              {t('heading1')}
            </span>
            <span 
              className="block drop-shadow-sm mt-1"
              style={{ fontFamily: "'Ribeat', sans-serif", fontWeight: 600, color: 'rgb(250, 199, 22)', fontSize: 'clamp(34px, 5.6vw, 56px)', lineHeight: 'clamp(39px, 6vw, 60px)' }}
            >
              {t('heading2')}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 text-center">
          
          {cards.map((card) => (
            <div key={card.id} className="flex flex-col items-center group border-2 border-gray-200 rounded-xl p-4 sm:p-5 shadow-md bg-white hover:shadow-xl transition-shadow">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-3">
                <Image 
                  src={card.image} 
                  alt={card.heading} 
                  fill sizes="100vw" 
                  className="object-contain"
                />
              </div>
              <h3 
                className="mb-2"
                style={{ fontFamily: "'Ribeat', sans-serif", fontWeight: 600, color: 'rgb(23, 23, 23)', fontSize: '20px', lineHeight: '26px' }}
              >
                {card.heading}
              </h3>
              <p 
                style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 400, color: 'rgb(114, 114, 114)', fontSize: '15px', lineHeight: '22px' }}
              >
                {card.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AboutUsCertified;
