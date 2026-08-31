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
    <main className="flex flex-col flex-1 min-h-screen relative overflow-x-hidden">
      <div 
        className="fixed inset-0 z-0 pointer-events-none scale-[1.5] md:scale-100 origin-center transition-transform duration-500"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.3)), url('/images/Blackksss.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
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
