import React from 'react';
import { useTranslations } from 'next-intl';

const AboutUsProperty = () => {
  const t = useTranslations('AboutUs');
  return (
    <section className="bg-white pt-4 md:pt-8 pb-4 md:pb-8 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        <h2 
          className="uppercase mb-4"
          style={{ fontFamily: "'Ribeat', sans-serif", fontWeight: 600, color: 'rgb(35, 31, 30)', fontSize: '56px', lineHeight: '60px' }}
        >
          {t('propertyHeading')}
        </h2>
        
        {/* Yellow Divider */}
        <div className="w-24 h-1 bg-[#FACC15] mb-8"></div>
        
        <p 
          style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 400, color: 'rgb(114, 114, 114)', fontSize: '18px', lineHeight: '30px' }}
        >
          {t('propertyDesc')}
        </p>

      </div>
    </section>
  );
};

export default AboutUsProperty;
