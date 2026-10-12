import React from 'react';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { constructPageMetadata } from '../../utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Header' });

  return constructPageMetadata({
    locale,
    pathname: '/catering',
    title: t('cateringServices').toUpperCase(),
    description: locale === 'fr'
      ? "Services de traiteur Grillado's pour mariages, anniversaires, événements corporatifs et célébrations privées au Canada."
      : "Grillado's catering services for weddings, birthdays, corporate events, and private gatherings across Canada.",
  });
}

export default function CateringLayout({ children }: { children: React.ReactNode }) {
  return children;
}
