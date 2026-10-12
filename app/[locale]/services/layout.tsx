import React from 'react';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { constructPageMetadata } from '../../utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Header' });

  return constructPageMetadata({
    locale,
    pathname: '/services',
    title: t('services').toUpperCase(),
    description: locale === 'fr'
      ? "Découvrez l'ensemble de nos services: restauration sur place, livraison, commandes à emporter et événements chez Grillado's."
      : "Explore all services offered by Grillado's: dine-in, delivery, pickup, catering, and event hosting across Canada.",
  });
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
