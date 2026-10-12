import React from 'react';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { constructPageMetadata } from '../../utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Header' });

  return constructPageMetadata({
    locale,
    pathname: '/contact-us',
    title: t('contactUs').toUpperCase(),
    description: locale === 'fr'
      ? "Contactez l'équipe Grillado's Canada pour vos réservations, questions, commentaires ou demandes de traiteur."
      : "Contact the Grillado's Canada team for reservations, feedback, customer support, or catering inquiries.",
  });
}

export default function ContactUsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
