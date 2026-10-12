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
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { constructPageMetadata } from '../../utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Header' });

  return constructPageMetadata({
    locale,
    pathname: '/menu',
    title: t('menu').toUpperCase(),
    description: locale === 'fr'
      ? "Découvrez notre menu complet: poulet grillé péri-péri, travers de bœuf, sandwichs et desserts chez Grillado's Canada."
      : "Explore our full menu featuring grilled peri peri chicken, beef back ribs, sandwiches, and desserts at Grillado's Canada.",
  });
}

export default function MenuPage() {
  return (
    <main 
      className="flex flex-col flex-1 min-h-screen relative overflow-x-hidden bg-size-[250%_auto] md:bg-size-[100%_auto] bg-top bg-repeat-y pt-20 md:pt-22"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.3)), url('/images/Blackksss.png')",
      }}
    >
      {/* Content wrapper without the bg-black that was hiding everything */}
      <div className="relative z-10 flex flex-col w-full gap-0.5">
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
