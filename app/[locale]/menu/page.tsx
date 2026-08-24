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
        backgroundSize: 'cover', // Scales cleanly to the screen
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', // Keeps it perfectly clean and still while scrolling
      }}
    >
      {/* Content wrapper without the bg-black that was hiding everything */}

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
