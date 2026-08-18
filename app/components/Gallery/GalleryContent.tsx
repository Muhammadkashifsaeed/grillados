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

  // Videos State
  const [visibleVideos, setVisibleVideos] = useState(6);

  const featuredVideo = "IkFFzzz7Sec";
  const gridVideos = [
    "IkFFzzz7Sec",
    "tPk2299h7AU",
    "-EbmPDiUtIQ",
    "PSIW3mBCrb0",
    "8xszHqRq_8E",
    "XjuvDiLlbDE",
    "J0bQraF2Bhk",
    "W2r3PI_MyPw",
    "1kWV8Z1EQII"
  ];

  const handleLoadMore = () => {
    setVisibleVideos(prev => Math.min(prev + 3, gridVideos.length));
  };

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
          <div className="w-full flex flex-col items-center">
            {/* Featured Video */}
            <a 
              href={`https://www.youtube.com/watch?v=${featuredVideo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full aspect-video mb-12 overflow-hidden shadow-2xl cursor-pointer block"
            >
              <img
                src={`https://img.youtube.com/vi/${featuredVideo}/hqdefault.jpg`}
                alt="Featured Video"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-14 bg-black/70 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Grid Videos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-12">
              {gridVideos.slice(0, visibleVideos).map((vid, idx) => (
                <a 
                  key={idx} 
                  href={`https://www.youtube.com/watch?v=${vid}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full aspect-video overflow-hidden shadow-lg cursor-pointer block"
                >
                  <img
                    src={`https://img.youtube.com/vi/${vid}/hqdefault.jpg`}
                    alt={`Video ${idx + 1}`}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-11 bg-black/70 rounded-lg flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white fill-current ml-1" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 mt-4 w-full">
              {visibleVideos < gridVideos.length && (
                <button 
                  onClick={handleLoadMore}
                  className="px-4 py-3 sm:px-8 sm:py-3 rounded-full font-bold text-xs sm:text-lg bg-black text-white hover:bg-gray-800 transition-all duration-300 shadow-md flex-1 sm:flex-none text-center whitespace-nowrap"
                >
                  Load More
                </button>
              )}
              <a 
                href="https://www.youtube.com/channel/UCwa_w9BuVndNvHcZ9vUb5sA"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 sm:px-8 sm:py-3 rounded-full font-bold text-xs sm:text-lg bg-blue-600 text-white hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-1 sm:gap-2 flex-1 sm:flex-none whitespace-nowrap"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
                Subscribe
              </a>
            </div>
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
