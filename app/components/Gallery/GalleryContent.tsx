"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Masonry from 'react-masonry-css';
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";

export default function GalleryContent() {
  const t = useTranslations('Gallery');
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  
  // Lightbox State
  const [index, setIndex] = useState(-1);

  // Generate array of 37 images: cable1.png to cable37.png
  const images = Array.from({ length: 37 }, (_, i) => ({
    src: `/images/cable${i + 1}.png`,
    alt: `Grillado's Gallery ${i + 1}`
  }));

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    768: 2,
    500: 1
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 w-full min-h-[60vh]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Filter Buttons */}
        <div className="flex items-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('photos')}
            className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
              activeTab === 'photos'
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-red-600 hover:text-red-600'
            }`}
          >
            {t('btnPhotos')}
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
              activeTab === 'videos'
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-red-600 hover:text-red-600'
            }`}
          >
            {t('btnVideos')}
          </button>
        </div>

        {/* Photos Tab Content */}
        {activeTab === 'photos' && (
          <div className="w-full">
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="flex w-auto -ml-5"
              columnClassName="pl-5 bg-clip-padding"
            >
              {images.map((img, idx) => (
                <div 
                  key={idx} 
                  className="mb-5 overflow-hidden cursor-pointer"
                  onClick={() => setIndex(idx)}
                >
                  <div className="relative w-full">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={600}
                      height={800} // Providing placeholder dims; Image layout responsive handles actual sizing
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </Masonry>
          </div>
        )}

        {/* Videos Tab Content */}
        {activeTab === 'videos' && (
          <div className="w-full flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 mb-6 text-gray-300">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">{t('btnVideos')}</h3>
            <p className="text-gray-500 text-lg">{t('videosComingSoon')}</p>
          </div>
        )}
      </div>

      {/* Lightbox Component */}
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={images}
        plugins={[Zoom, Fullscreen]}
      />
    </section>
  );
}
