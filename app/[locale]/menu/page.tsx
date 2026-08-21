import React from 'react';
import AppetizersMenuSection from '../../components/AppetizersMenuSection';
import ChickenSpecialsMenuSection from '../../components/ChickenSpecialsMenuSection';
import BeefLambSpecialsMenuSection from '../../components/BeefLambSpecialsMenuSection';
import PlateauxMenuSection from '../../components/PlateauxMenuSection';
import AccompagnementsMenuSection from '../../components/AccompagnementsMenuSection';
import ComboDePouletMenuSection from '../../components/ComboDePouletMenuSection';
import SandwichSaladMenuSection from '../../components/SandwichSaladMenuSection';
import GarnishedRiceSauceMenuSection from '../../components/GarnishedRiceSauceMenuSection';
import SpecialtyDrinksMenuSection from '../../components/SpecialtyDrinksMenuSection';
import DessertMenuSection from '../../components/DessertMenuSection';

import { Link } from "@/i18n/routing";
import { ShoppingBag } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function MenuPage() {
  const t = useTranslations('Header');

  return (
    <main 
      className="flex flex-col flex-1 min-h-screen relative overflow-x-hidden"
      style={{
        backgroundImage: "url('/images/Blackksss.png')",
        backgroundSize: '120% auto', // Zoomed in a bit as requested ("zome kr ky enhance kro")
        backgroundPosition: 'top center',
        backgroundRepeat: 'repeat-y', // So it repeats down the long page while scrolling
      }}
    >
      {/* Light overlay just in case text needs a bit of contrast, but much lighter than before */}
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>

      {/* Content wrapper without the bg-black that was hiding everything */}
      <div className="relative z-10 flex flex-col w-full gap-[2px]">
        <AppetizersMenuSection />
        <ChickenSpecialsMenuSection />
        <BeefLambSpecialsMenuSection />
        <PlateauxMenuSection />
        <AccompagnementsMenuSection />
        <ComboDePouletMenuSection />
        <SandwichSaladMenuSection />
        <GarnishedRiceSauceMenuSection />
        <SpecialtyDrinksMenuSection />
        <DessertMenuSection />
      </div>
    </main>
  );
}
