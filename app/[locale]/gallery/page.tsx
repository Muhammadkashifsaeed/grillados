import React from 'react';
import GalleryHero from '../../components/Gallery/GalleryHero';
import GalleryContent from '../../components/Gallery/GalleryContent';

export default function GalleryPage() {
  return (
    <main className="flex flex-col flex-1 w-full min-h-screen">
      <GalleryHero />
      <GalleryContent />
    </main>
  );
}
