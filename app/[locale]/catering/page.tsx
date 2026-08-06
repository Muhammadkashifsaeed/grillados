"use client";

import React from 'react';
import CateringHeroBanner from '../../components/Services/CateringHeroBanner';
import CateringIntroductionSection from '../../components/Services/CateringIntroductionSection';
import CateringPartnersSection from '../../components/CateringPartnersSection';
import CateringOffersSection from '../../components/Services/CateringOffersSection';
import CustomizedOptionsSection from '../../components/Services/CustomizedOptionsSection';
import ReviewsSection from '../../components/Services/ReviewsSection';
import BookEventCTASection from '../../components/Services/BookEventCTASection';

export default function CateringPage() {
  return (
    <main className="flex flex-col flex-1 w-full min-h-screen">
      <CateringHeroBanner />
      <CateringPartnersSection />
      <CateringOffersSection />
      <CateringIntroductionSection />
      <CustomizedOptionsSection />
      <ReviewsSection />
      <BookEventCTASection />
    </main>
  );
}
