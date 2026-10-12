import React from 'react';
import FranchisingHero from '../../components/Franchising/FranchisingHero';
import FranchisingContent from '../../components/Franchising/FranchisingContent';
import FranchisingJoinTeam from '../../components/Franchising/FranchisingJoinTeam';
import FranchisingSponsors from '../../components/Franchising/FranchisingSponsors';
import FranchisingForm from '../../components/Franchising/FranchisingForm';
import FranchisingFAQ from '../../components/Franchising/FranchisingFAQ';
import FranchisingCarousel from '../../components/Franchising/FranchisingCarousel';

import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { constructPageMetadata } from '../../utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Header' });

  return constructPageMetadata({
    locale,
    pathname: '/franchising',
    title: t('franchising').toUpperCase(),
    description: locale === 'fr'
      ? "Rejoignez la famille Grillado's! Découvrez nos opportunités de franchise au Canada et devenez partenaire d'un concept à succès."
      : "Join the Grillado's family! Explore restaurant franchise opportunities across Canada and partner with a proven, growing brand.",
  });
}

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
