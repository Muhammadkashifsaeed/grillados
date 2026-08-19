import React from 'react';
import { useTranslations } from 'next-intl';

const AboutUsProperty = () => {
  const t = useTranslations('AboutUs');
  return (
    <section className="bg-white pt-4 md:pt-8 pb-4 md:pb-8 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black font-['Outfit',sans-serif] uppercase mb-4">
          {t('propertyHeading')}
        </h2>
        
        {/* Yellow Divider */}
        <div className="w-24 h-1 bg-[#FACC15] mb-8"></div>
        
        <p className="text-gray-700 text-lg sm:text-xl md:text-2xl leading-relaxed font-medium">
          {t('propertyDesc')}
        </p>

      </div>
    </section>
  );
};

export default AboutUsProperty;
