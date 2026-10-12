import React from 'react';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { constructPageMetadata } from '../../utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Header' });

  return constructPageMetadata({
    locale,
    pathname: '/deals',
    title: t('deals').toUpperCase(),
    description: locale === 'fr'
      ? "Découvrez nos offres spéciales et rabais exclusifs chez Grillado's Canada."
      : "Discover our latest specials, crazy lunch deals, and promotions at Grillado's Canada.",
  });
}

export default function DealsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
