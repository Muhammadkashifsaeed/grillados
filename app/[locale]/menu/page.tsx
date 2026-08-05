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

export default function MenuPage() {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-[#0a0a0a] overflow-hidden pt-[80px]">
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
    </main>
  );
}
