import React from 'react';
import GalleryHero from '../../components/Gallery/GalleryHero';
import GalleryContent from '../../components/Gallery/GalleryContent';

import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { constructPageMetadata } from '../../utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Header' });

  return constructPageMetadata({
    locale,
    pathname: '/gallery',
    title: t('gallery').toUpperCase(),
    description: locale === 'fr'
      ? "Parcourez notre galerie photo: plats appétissants, poulet grillé et ambiance chez Grillado's."
      : "Explore our food gallery: mouth-watering dishes, flame-grilled chicken, and restaurant moments at Grillado's.",
  });
}

export default function GalleryPage() {
  return (
    <main className="flex flex-col flex-1 w-full min-h-screen">
      <GalleryHero />
      <GalleryContent />
    </main>
  );
}
