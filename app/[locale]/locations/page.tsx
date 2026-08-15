import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import LocationCard from '../../components/LocationCard';
import ComingSoonLocations from '../../components/ComingSoonLocations';

const locations = [
  {
    name: 'Montréal',
    image: '/images/as1.png',
    address: '2079 Sainte-Catherine St. West, Montreal, QC H3H 1M6, Canada',
    phone: '(514) 933-9399',
    phoneLink: 'tel:+15149339399'
  },
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
    <main className="flex flex-col flex-1 min-h-screen bg-[#0a0a0a] relative overflow-hidden pb-12">
      {/* Background Texture for the rest of the page */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/Black-Background.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat'
        }}
      ></div>

      {/* Hero Section */}
      <div className="relative w-full h-[40vh] min-h-[300px] md:h-[50vh] mb-12 flex items-center justify-center z-10">
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/images/Picture-back-ground.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        {/* Optional overlay if needed, currently transparent */}
        {/* <div className="absolute inset-0 bg-black/30 z-0"></div> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-24">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-24 flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit',sans-serif] uppercase tracking-wide text-center">
            {t('availableLocations')}
          </h1>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto mt-6"></div>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12">
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
