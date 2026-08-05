"use client";

import React from 'react';
import ServicesHero from '../../components/Services/ServicesHero';
import WeddingCateringSection from '../../components/Services/WeddingCateringSection';
import BirthdayCateringSection from '../../components/Services/BirthdayCateringSection';
import EventsCateringSection from '../../components/Services/EventsCateringSection';
import GiftCardsSection from '../../components/Services/GiftCardsSection';
import DeliveryPickupSection from '../../components/Services/DeliveryPickupSection';
import ContactCateringSection from '../../components/Services/ContactCateringSection';

export default function ServicesPage() {
  return (
    <main className="flex flex-col flex-1 w-full min-h-screen">
      <ServicesHero />
      <WeddingCateringSection />
      <BirthdayCateringSection />
      <EventsCateringSection />
      <GiftCardsSection />
      <DeliveryPickupSection />
      <ContactCateringSection />
    </main>
  );
}
