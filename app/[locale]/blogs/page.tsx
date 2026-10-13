import React from 'react';
import BlogsHeroBanner from '../../components/BlogsHeroBanner';
import { ExploreArticles } from '../../components/ExploreArticles';

import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { constructPageMetadata } from '../../utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Header' });

  return constructPageMetadata({
    locale,
    pathname: '/blogs',
    title: `${t('blogs').toUpperCase()} | GRILLADOS`,
    description: locale === 'fr'
      ? "Lisez nos articles sur la cuisine portugaise, les secrets du poulet grillé et les actualités de Grillado's Canada."
      : "Read our latest articles on Portuguese cuisine, grilled chicken recipes, tips, and Grillado's Canada news.",
    keywords: [
      "Grillados Blogs",
      "Grillados Canada",
      "Halal Restaurant Canada",
      "Grilled Chicken Recipes",
      "Peri Peri Chicken",
      "Mississauga Food Blog",
    ],
  });
}

export default function BlogsPage() {
  return (
    <main className="flex flex-col flex-1 w-full min-h-screen bg-[#121212]">
      <BlogsHeroBanner />
      <ExploreArticles />
    </main>
  );
}
