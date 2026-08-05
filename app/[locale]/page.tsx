import HeroSection from '../components/HeroSection';
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
        <h2 className="text-2xl md:text-4xl font-extrabold text-zinc-900 font-['Outfit',sans-serif] uppercase tracking-wide mb-6">
          {t('headingStart')} <span className="text-[#fbbc04]">{t('headingHighlight')}</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-3xl leading-relaxed">
          {t('description')}
        </p>
      </section>

      {/* Blog Carousel */}
      <BlogsSection />
    </main>
  );
}
