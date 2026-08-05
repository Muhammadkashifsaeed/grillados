import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { UtensilsCrossed } from "lucide-react";
// Since lucide doesn't have TikTok and Yelp directly, using generic placeholders or available equivalents.
// For Yelp, we can use a Star, and for TikTok we can use a Music/Video icon, or we can use custom SVG if provided. 
// I'll use generic Lucide icons that represent media well, or text if needed. Let's use custom SVGs for those if possible.

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
);

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const YelpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z" />
  </svg>
);

export const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <>
      <footer className="relative w-full overflow-hidden text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/footer_colorful_bg.png"
            alt="Colorful Fast Food Background"
            fill
            className="object-cover object-center opacity-70"
          />
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-20 pb-12 lg:px-8 flex flex-col items-center">
          
          {/* Top Row: 4 Columns */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            
            {/* Column 1 */}
            <div className="flex flex-col items-start gap-6">
              <Image
                src="/images/logo.png"
                alt="Grillado's Logo"
                width={200}
                height={70}
                className="w-48 h-auto"
              />
              <div className="flex items-center gap-3 mt-4">
                <Link href="#" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <FacebookIcon />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <TikTokIcon />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <InstagramIcon />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <YoutubeIcon />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <YelpIcon />
                </Link>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-bold tracking-wider uppercase">{t('menuHeading')}</h3>
              <ul className="flex flex-col gap-4">
                <li><Link href="/order" className="hover:text-yellow-400 transition-colors duration-300">{t('orderOnline')}</Link></li>
                <li><Link href="/franchising" className="hover:text-yellow-400 transition-colors duration-300">{t('franchising')}</Link></li>
                <li><Link href="/about" className="hover:text-yellow-400 transition-colors duration-300">{t('aboutUs')}</Link></li>
                <li><Link href="/contact" className="hover:text-yellow-400 transition-colors duration-300">{t('contact')}</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-bold tracking-wider uppercase">{t('locationsHeading')}</h3>
              <ul className="flex flex-col gap-4">
                <li><Link href="/locations/cambridge" className="hover:text-yellow-400 transition-colors duration-300">{t('cambridge')}</Link></li>
                <li><Link href="/locations/laval" className="hover:text-yellow-400 transition-colors duration-300">{t('laval')}</Link></li>
                <li><Link href="/locations/milton" className="hover:text-yellow-400 transition-colors duration-300">{t('milton')}</Link></li>
                <li><Link href="/locations/mississauga" className="hover:text-yellow-400 transition-colors duration-300">{t('mississauga')}</Link></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-6">
              <Image
                src="/images/hma.png"
                alt="HMA Certification"
                width={120}
                height={120}
                className="w-24 h-auto"
              />
              <ul className="flex flex-col gap-4 mt-2">
                <li><Link href="/terms" className="hover:text-yellow-400 transition-colors duration-300 text-sm">{t('termsAndConditions')}</Link></li>
                <li><Link href="/privacy" className="hover:text-yellow-400 transition-colors duration-300 text-sm">{t('privacyPolicy')}</Link></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 w-full bg-black/40 backdrop-blur-md py-4 px-4 flex items-center justify-center border-t border-white/10">
          <p className="text-center text-sm tracking-wide text-white/90">
            {t('copyright')}
          </p>
        </div>
      </footer>

      {/* Floating Order Button */}
      <div className="hidden lg:flex fixed top-1/2 right-0 -translate-y-1/2 z-50">
        <Link 
          href="/order"
          className="bg-[#f7b41c] hover:bg-[#e0a218] text-black font-bold py-6 px-3 rounded-l-xl shadow-lg transition-all duration-300 flex flex-col items-center gap-4"
        >
          <UtensilsCrossed className="w-6 h-6" />
          <span className="writing-vertical-rl text-lg tracking-widest whitespace-nowrap rotate-180" style={{ writingMode: 'vertical-rl' }}>
            {t('orderNow')}
          </span>
        </Link>
      </div>
    </>
  );
};
