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

import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function MenuPage() {
  const t = useTranslations('Header');

  return (
    <main className="flex flex-col flex-1 min-h-screen bg-[#0a0a0a] overflow-x-hidden pt-20 relative">
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

      {/* Floating Vertical Order Now Button */}
      <Link 
        href="/order"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center justify-center bg-linear-to-b from-[#fbbc04] to-[#d69f00] text-black font-extrabold uppercase py-5 px-1.5 rounded-l-xl shadow-[-4px_0_15px_rgba(251,188,4,0.3)] transition-transform hover:-translate-x-1 active:scale-95 border-l-2 border-y-2 border-[#fff5cc]/30"
      >
        <ShoppingBag className="w-5 h-5 mb-3 drop-shadow-md" />
        <span 
          className="tracking-widest text-sm drop-shadow-md"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          {t('orderNow') || 'ORDER NOW'}
        </span>
      </Link>
    </main>
  );
}
