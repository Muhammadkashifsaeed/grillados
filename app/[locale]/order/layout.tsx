import React from 'react';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { constructPageMetadata } from '../../utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Header' });

  return constructPageMetadata({
    locale,
    pathname: '/order',
    title: t('orderOnline').toUpperCase(),
    description: locale === 'fr'
      ? "Commandez en ligne chez Grillado's: choisissez votre succursale préférée et profitez de nos viandes savoureuses."
      : "Order online from Grillado's: select your nearest restaurant location and enjoy our famous peri peri chicken and ribs.",
  });
}

export default function OrderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
