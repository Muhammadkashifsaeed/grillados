import HeroSection from '../components/HeroSection';
import NewDishesSection from '../components/NewDishesSection';
import NewDishes from '../components/NewDishes';
import AppetizersSection from '../components/AppetizersSection';
import ChickenSpecialsSection from '../components/ChickenSpecialsSection';
import BeefLambSpecialsSection from '../components/BeefLambSpecialsSection';
import PlattersSection from '../components/PlattersSection';
import SandwichesSection from '../components/SandwichesSection';
import CateringPartnersSection from '../components/CateringPartnersSection';
import ReviewsSection from '../components/ReviewsSection';
import BlogsSection from '../components/BlogsSection';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Newsletter');

  return (
    <main className="flex flex-col flex-1 min-h-screen bg-white overflow-hidden">
      <HeroSection />
      <NewDishesSection />
      <NewDishes />
      <AppetizersSection />
      <ChickenSpecialsSection />
      <BeefLambSpecialsSection />
      <PlattersSection />
      <SandwichesSection />
      <CateringPartnersSection />
      <ReviewsSection />
      
      {/* Newsletter / Blogs Section */}
      <section className="flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8 bg-white text-center">
        <h2
          style={{ fontFamily: "'Ribeat', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '28px', lineHeight: '36px', color: 'rgb(0,0,0)' }}
          className="uppercase tracking-wide mb-6"
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
