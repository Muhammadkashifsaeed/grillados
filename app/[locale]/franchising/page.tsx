import React from 'react';
import FranchisingHero from '../../components/Franchising/FranchisingHero';
import FranchisingContent from '../../components/Franchising/FranchisingContent';
import FranchisingJoinTeam from '../../components/Franchising/FranchisingJoinTeam';
import FranchisingSponsors from '../../components/Franchising/FranchisingSponsors';
import FranchisingForm from '../../components/Franchising/FranchisingForm';
import FranchisingFAQ from '../../components/Franchising/FranchisingFAQ';
import FranchisingCarousel from '../../components/Franchising/FranchisingCarousel';

export default function FranchisingPage() {
  return (
    <main className="flex flex-col flex-1 w-full min-h-screen">
      <FranchisingHero />
      <FranchisingContent />
      <FranchisingSponsors />
      <FranchisingJoinTeam />
      <FranchisingForm />
      <FranchisingFAQ />
      <FranchisingCarousel />
    </main>
  );
}
