import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { UtensilsCrossed } from "lucide-react";
import BackToTopButton from "./BackToTopButton";
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

const LinktreeIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
    <path d="M13.736 5.853l4.005-4.117 2.325 2.38-4.2 4.005h5.908v3.305h-5.937l4.229 4.108-2.325 2.334-5.74-5.769v10.622h-3.32V11.905L2.94 17.674l-2.325-2.325 4.229-4.108H-.908V7.936h5.908l-4.2-4.005 2.325-2.38 4.005 4.117V.132h3.32v5.72z"/>
  </svg>
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
            src="/images/Picture-background.png"
            alt="Colorful Fast Food Background"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-350 mx-auto px-6 pt-20 pb-12 lg:px-8 flex flex-col items-center">
          
          {/* Top Row: 4 Columns */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            
            {/* Column 1 */}
            <div className="flex flex-col items-start gap-6">
              <Image
                src="/images/saman.png"
                alt="Grillado's Logo"
                width={200}
                height={70}
                className="w-56 h-auto scale-110 transform-gpu origin-left"
              />
              <div className="flex items-center gap-3 mt-4">
                <Link href="https://www.facebook.com/Grillados?mibextid=2JQ9oc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <FacebookIcon />
                </Link>
                <Link href="https://www.tiktok.com/@grilladoscanada?_t=8fuUZP3nFIc&_r=1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <TikTokIcon />
                </Link>
                <Link href="https://www.instagram.com/grilladoscanada?igshid=NGVhN2U2NjQ0Yg%3D%3D" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <InstagramIcon />
                </Link>
                <Link href="https://www.youtube.com/channel/UCwa_w9BuVndNvHcZ9vUb5sA" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <YoutubeIcon />
                </Link>
                <Link href="#" title="Bio Links" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <LinktreeIcon />
                </Link>
              </div>
            </div>

            {/* Columns 2 & 3 Wrapper for Mobile Side-by-Side */}
            <div className="w-full grid grid-cols-2 gap-8 lg:gap-8 lg:col-span-2">
              {/* Column 2 */}
              <div className="flex flex-col gap-6">
                <h3 className="text-lg sm:text-xl font-bold tracking-wider uppercase">{t('menuHeading')}</h3>
                <ul className="flex flex-col gap-4">
                  <li><Link href="/order" className="hover:text-[#DAAF18] transition-colors duration-300 text-sm sm:text-base">{t('orderOnline')}</Link></li>
                  <li><Link href="/franchising" className="hover:text-[#DAAF18] transition-colors duration-300 text-sm sm:text-base">{t('franchising')}</Link></li>
                  <li><Link href="/about-us" className="hover:text-[#DAAF18] transition-colors duration-300 text-sm sm:text-base">{t('aboutUs')}</Link></li>
                  <li><Link href="/contact-us" className="hover:text-[#DAAF18] transition-colors duration-300 text-sm sm:text-base">{t('contact')}</Link></li>
                </ul>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-6">
                <h3 className="text-lg sm:text-xl font-bold tracking-wider uppercase">{t('locationsHeading')}</h3>
                <ul className="flex flex-col gap-4">
                  <li><a href="https://www.google.com/maps/place/Grillado's+Cambridge+Halal+Steak+%26+BBQ/@43.3981375,-80.3262932,17z/data=!4m16!1m9!3m8!1s0x882b89ca29555555:0x883188bb847c75f1!2s480+Hespeler+Rd+Unit+23,+Cambridge,+ON+N1R+7R9,+Canada!3b1!8m2!3d43.3981182!4d-80.3265331!10e3!16s%2Fg%2F11sn009qp1!3m5!1s0x882b89121d736a31:0x2a5f4735f29c1fc!8m2!3d43.3987651!4d-80.3263276!16s%2Fg%2F11vpqz7x3v?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-[#DAAF18] transition-colors duration-300 text-sm sm:text-base">{t('cambridge')}</a></li>
                  <li><a href="https://www.google.com/maps/place/1228a+Bd+du+Curé-Labelle,+Laval,+QC+H7V+2V5,+Canada/@45.5456049,-73.7540548,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc923a88442e81d:0x88138a1d2d083eff!8m2!3d45.5456049!4d-73.7540548!16s%2Fg%2F11fp0lfn35?entry=ttu" target="_blank" rel="noopener noreferrer" className="hover:text-[#DAAF18] transition-colors duration-300 text-sm sm:text-base">{t('laval')}</a></li>
                  <li><a href="https://www.google.com/maps/place/6000+Main+St+W+%239,+Milton,+ON+L9T+9M1,+Canada/@43.4955417,-79.8962679,16z/data=!4m5!3m4!1s0x882b65600fbfcb4b:0x4318f46d8eecba17!8m2!3d43.495796!4d-79.8961919?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-[#DAAF18] transition-colors duration-300 text-sm sm:text-base">{t('milton')}</a></li>
                  <li><a href="https://www.google.com/maps/place/Grillados+Grilled+Beef+Back+Ribs+%26+Chicken/@43.6400885,-79.627836,16z/data=!4m6!3m5!1s0x882b397f951bead7:0xd3c9b67ec4658cc1!8m2!3d43.6399698!4d-79.6249145!16s%2Fg%2F11rd5rg27d?entry=tts&g_ep=EgoyMDI1MTAwNy4wIPu8ASoASAFQAw%3D%3D&skid=c7ef8e32-33cb-4a19-8eff-4da1090a6f23" target="_blank" rel="noopener noreferrer" className="hover:text-[#DAAF18] transition-colors duration-300 text-sm sm:text-base">{t('mississauga')}</a></li>
                </ul>
              </div>
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
                <li><Link href="/terms" className="hover:text-[#DAAF18] transition-colors duration-300 text-sm">{t('termsAndConditions')}</Link></li>
                <li><Link href="/privacy" className="hover:text-[#DAAF18] transition-colors duration-300 text-sm">{t('privacyPolicy')}</Link></li>
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
        {/* Back to top button */}
        <BackToTopButton />
      </footer>

      {/* Floating Order Button */}
      <div className="hidden lg:flex fixed top-1/2 right-0 -translate-y-1/2 z-50">
        <Link 
          href="/order"
          className="bg-[#DAAF18] hover:bg-[#d72323] hover:text-white text-black font-bold py-4 px-2 rounded-l-lg shadow-lg transition-all duration-300 flex flex-col items-center gap-3 cursor-pointer"
        >
          <UtensilsCrossed className="w-5 h-5" />
          <span className="writing-vertical-rl text-sm tracking-widest whitespace-nowrap rotate-180" style={{ writingMode: 'vertical-rl' }}>
            {t('orderNow')}
          </span>
        </Link>
      </div>
    </>
  );
};
