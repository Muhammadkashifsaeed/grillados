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
      
      {/* Global Unified Background for the Menu Page */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/images/Grilladossss.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      {/* Heavy dark overlay to ensure text readability */}
      <div className="fixed inset-0 bg-black/90 z-0"></div>

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col w-full gap-[2px] bg-black">
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
