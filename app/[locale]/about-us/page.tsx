import React from 'react';
import AboutUsHero from '../../components/AboutUsHero';
import AboutUsStory from '../../components/AboutUsStory';
import AboutUsVoted from '../../components/AboutUsVoted';
import AboutUsSmart from '../../components/AboutUsSmart';
import AboutUsCertified from '../../components/AboutUsCertified';
import AboutUsMissionVision from '../../components/AboutUsMissionVision';
import AboutUsProperty from '../../components/AboutUsProperty';
import FranchisingCarousel from '../../components/Franchising/FranchisingCarousel';

import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { constructPageMetadata } from '../../utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Header' });

  return constructPageMetadata({
    locale,
    pathname: '/about-us',
    title: t('aboutUs').toUpperCase(),
    description: locale === 'fr'
      ? "Découvrez l'histoire de Grillado's, notre passion pour le poulet grillé péri-péri et nos viandes savoureuses au Canada."
      : "Learn about the story of Grillado's, our passion for flame-grilled peri peri chicken and authentic flavors in Canada.",
  });
}

export default function AboutUsPage() {
  return (
    <main className="flex flex-col flex-1 w-full min-h-screen bg-white">
      <AboutUsHero />
      <AboutUsStory />
      <AboutUsVoted />
      <AboutUsSmart />
      <AboutUsCertified />
      <AboutUsMissionVision />
      <AboutUsProperty />
      <FranchisingCarousel />
    </main>
  );
}
