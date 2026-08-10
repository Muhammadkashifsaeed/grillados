import React from 'react';
import AboutUsHero from '../../components/AboutUsHero';
import AboutUsStory from '../../components/AboutUsStory';
import AboutUsVoted from '../../components/AboutUsVoted';
import AboutUsSmart from '../../components/AboutUsSmart';
import AboutUsCertified from '../../components/AboutUsCertified';
import AboutUsMissionVision from '../../components/AboutUsMissionVision';
import AboutUsProperty from '../../components/AboutUsProperty';
import FranchisingCarousel from '../../components/Franchising/FranchisingCarousel';

export default function AboutUsPage() {
  return (
    <main className="flex flex-col flex-1 w-full min-h-screen bg-white">
      <AboutUsHero />
      <AboutUsStory />
      <AboutUsVoted />
      <AboutUsSmart />
      <AboutUsCertified />
      <AboutUsMissionVision />
      <AboutUsProperty />
      <FranchisingCarousel />
    </main>
  );
}
