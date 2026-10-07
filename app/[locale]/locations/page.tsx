import React from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import LocationCard from '../../components/LocationCard';
import ComingSoonLocations from '../../components/ComingSoonLocations';

const locations = [
  {
    name: 'Laval',
    image: '/images/amanie.png',
    address: '1228A Bd Curé-Labelle, Laval, QC H7V 2V5, Canada',
    phone: '(450) 688-3399',
    phoneLink: 'tel:+14506883399'
  },
  {
    name: 'Milton',
    image: '/images/sme.png',
    address: '6000 Main St W #9, Milton, ON L9T 9M1, Canada',
    phone: '(905) 878-7770',
    phoneLink: 'tel:+19058787770'
  },
  {
    name: 'Mississauga',
    image: '/images/as2.png',
    address: '5165 Dixie Rd Unit 2B, Mississauga, ON L4W 4G1, Canada',
    phone: '(905) 625-5558',
    phoneLink: 'tel:+19056255558'
  },
  {
    name: 'Cambridge',
    image: '/images/manie.png',
    address: '480 Hespeler Rd Unit 23, Cambridge, ON N1R 7R9, Canada',
    phone: '(519) 621-7771',
    phoneLink: 'tel:+15196217771'
  }
];

export default function LocationsPage() {
  const t = useTranslations('LocationsPage');
  const locale = useLocale();

  // Show Ontario locations first in English, Quebec locations first in French
  const displayLocations = locale === 'en' ? [...locations].reverse() : locations;

  return (
    <main 
      className="flex flex-col flex-1 min-h-screen relative overflow-x-hidden bg-[#0a0a0a]"
      style={{
        backgroundImage: "url('/images/Blackksss.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Light overlay */}
      <div className="absolute inset-0 bg-black/10 z-0 pointer-events-none"></div>

      {/* Hero Section */}
      <div className="relative w-full h-[30vh] md:h-[40vh] min-h-62.5 z-10">
        <Image 
          src="/images/Picture-back-ground.png" 
          alt="Locations Hero" 
          fill 
          priority
          className="object-cover object-center" 
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full mb-24 pt-16">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-16 flex flex-col items-center">
          <h1 
            className="capitalize tracking-wide text-center drop-shadow-xl"
            style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 'clamp(36px, 5vw, 48px)', color: 'rgb(255,255,255)' }}
          >
            {t('availableLocations')}
          </h1>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.6)]"></div>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-5">
          {displayLocations.map((loc, index) => (
            <LocationCard
              key={loc.name}
              name={loc.name}
              image={loc.image}
              address={loc.address}
              phone={loc.phone}
              phoneLink={loc.phoneLink}
              reverse={index % 2 !== 0}
              index={index}
            />
          ))}
        </div>
      </div>
      
      {/* Coming Soon Locations Section */}
      <ComingSoonLocations />
    </main>
  );
}
