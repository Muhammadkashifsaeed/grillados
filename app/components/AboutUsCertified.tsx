import React from 'react';
import Image from 'next/image';

const AboutUsCertified = () => {
  const cards = [
    {
      id: 1,
      image: '/images/certified1.png',
      heading: 'Taste Meets Nutrition',
      text: 'Our chicken is sourced from grain-fed, certified Halal distributors. We prioritize nutrition without compromising on taste.',
    },
    {
      id: 2,
      image: '/images/certified2.png',
      heading: 'Freshness Unleashed',
      text: 'Our chicken is prepared fresh, never frozen. We take pride in meticulously trimming off excess fat, and marinating in our signature sauce for a full 24 hours to create a healthier, flavour-packed dining experience.',
    },
    {
      id: 3,
      image: '/images/certified3.png',
      heading: 'Grilling Magic',
      text: 'Our chicken is masterfully grilled to perfection over an open flame. We are committed to delivering a burst of flavour while keeping cholesterol and fat content low.',
    },
    {
      id: 4,
      image: '/images/certified4.png',
      heading: 'Craft Your Perfect Meal',
      text: 'Our chicken is the perfect canvas for achieving culinary perfection. We offer an array of delectable sauces, including Lemon & Herb, Mild, BBQ, Hot, and Extra Hot, to personalize your healthy dining experience.',
    },
  ];

  return (
    <section className="bg-white pt-16 md:pt-24 pb-4 md:pb-8 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 text-center">
          
          {cards.map((card) => (
            <div key={card.id} className="flex flex-col items-center group border-2 border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-6 transform transition-transform duration-300 group-hover:scale-110">
                <Image 
                  src={card.image} 
                  alt={card.heading} 
                  fill sizes="100vw" 
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black font-['Outfit',sans-serif] mb-4">
                {card.heading}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
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
