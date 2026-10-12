import HeroSection from '../components/HeroSection';
import NewDishesSection from '../components/NewDishesSection';
import NewDishes from '../components/NewDishes';
import AppetizersSection from '../components/AppetizersSection';
import ChickenSpecialsSection from '../components/ChickenSpecialsSection';
import BeefLambSpecialsSection from '../components/BeefLambSpecialsSection';
import PlattersSection from '../components/PlattersSection';
import SandwichesSection from '../components/SandwichesSection';
import HomePromoSections from '../components/HomePromoSections';
import CateringPartnersSection from '../components/CateringPartnersSection';
import ReviewsSection from '../components/ReviewsSection';
import BlogsSection from '../components/BlogsSection';
import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { constructPageMetadata } from '../utils/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return constructPageMetadata({
    locale,
    pathname: '/',
    title: t('title').toUpperCase(),
    description: t('description'),
    keywords: t('keywords').toUpperCase().split(', '),
  });
}

export default function Home() {
  const t = useTranslations('Newsletter');

  return (
    <main className="flex flex-col flex-1 min-h-screen bg-white overflow-x-clip">
      <HeroSection />
      <NewDishesSection />
      <NewDishes />
      <AppetizersSection />
      <ChickenSpecialsSection />
      <BeefLambSpecialsSection />
      <PlattersSection />
      <SandwichesSection />
      <HomePromoSections />
      <CateringPartnersSection />
      <ReviewsSection />
      
      {/* Newsletter / Blogs Section */}
      <section className="flex flex-col items-center justify-center pt-10 pb-2 px-4 sm:px-6 lg:px-8 bg-white text-center">
        <h2
          style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: 'clamp(22px, 2.8vw, 28px)', lineHeight: 'clamp(24px, 3.6vw, 36px)', color: 'rgb(0,0,0)' }}
          className="capitalize tracking-wide mb-6 w-full max-w-full break-words whitespace-normal px-2"
        >
          {t('headingStart')} <span className="text-[#fbbc04]">{t('headingHighlight')}</span>
        </h2>
        <p className="max-w-3xl" style={{ fontFamily: '"Noto Sans", sans-serif', fontStyle: 'normal', fontWeight: 400, fontSize: '17px', lineHeight: '28px', color: 'rgb(0,0,0)' }}>
          {t('description')}
        </p>
      </section>

      {/* Blog Carousel */}
      <BlogsSection />
    </main>
  );
}
