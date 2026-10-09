import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { UtensilsCrossed } from "lucide-react";
import { FaFacebookF, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa6";
import { SiLinktree } from "react-icons/si";

export const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <>
      <footer className="relative w-full overflow-hidden text-white border-t border-white/20">
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
        <div className="relative z-10 max-w-350 mx-auto px-4 sm:px-6 pt-6 pb-4 lg:pt-10 lg:pb-6 lg:px-8 flex flex-col items-center">
          
          {/* Top Row: 4 Columns */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 mb-6 lg:mb-8">
            
            {/* Column 1 */}
            <div className="flex flex-col items-start gap-4 lg:gap-6">
              <Image
                src="/images/Grillados_new_logo-Yellow-removebg-preview.png"
                alt="Grillado's Logo"
                width={260}
                height={90}
                className="w-50 sm:w-58 lg:w-66 h-auto object-contain filter drop-shadow-[0_4px_15px_rgba(0,0,0,0.6)]"
              />
              <div className="flex items-center gap-3 mt-4">
                <a href="https://www.facebook.com/Grillados?mibextid=2JQ9oc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <FaFacebookF className="w-5 h-5 text-white" />
                </a>
                <a href="https://www.tiktok.com/@grilladoscanada?_t=8fuUZP3nFIc&_r=1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <FaTiktok className="w-5 h-5 text-white" />
                </a>
                <a href="https://www.instagram.com/grilladoscanada?igshid=NGVhN2U2NjQ0Yg%3D%3D" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <FaInstagram className="w-5 h-5 text-white" />
                </a>
                <a href="https://www.youtube.com/channel/UCwa_w9BuVndNvHcZ9vUb5sA" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <FaYoutube className="w-5 h-5 text-white" />
                </a>
                <a href="https://lnk.bio/grillados" target="_blank" rel="noopener noreferrer" title="Bio Links" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <SiLinktree className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Columns 2 & 3 Wrapper for Mobile Side-by-Side */}
            <div className="w-full grid grid-cols-2 gap-4 sm:gap-8 lg:col-span-2">
              {/* Column 2 */}
              <div className="flex flex-col gap-3 lg:gap-6">
                <h3 className="text-base sm:text-xl font-bold tracking-wider uppercase">{t('menuHeading')}</h3>
                <ul className="flex flex-col gap-2 lg:gap-4 uppercase">
                  <li><Link href="https://grillados.bycalibre.ca/location" target="_blank" rel="noopener noreferrer" className="hover:text-[#FAC716] transition-colors duration-300 text-sm sm:text-base">{t('orderOnline')}</Link></li>
                  <li><Link href="/franchising" className="hover:text-[#FAC716] transition-colors duration-300 text-sm sm:text-base">{t('franchising')}</Link></li>
                  <li><Link href="/about-us" className="hover:text-[#FAC716] transition-colors duration-300 text-sm sm:text-base">{t('aboutUs')}</Link></li>
                  <li><Link href="/contact-us" className="hover:text-[#FAC716] transition-colors duration-300 text-sm sm:text-base">{t('contact')}</Link></li>
                </ul>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-3 lg:gap-6">
                <h3 className="text-base sm:text-xl font-bold tracking-wider capitalize">{t('locationsHeading')}</h3>
                <ul className="flex flex-col gap-2 lg:gap-4 uppercase">
                  <li><a href="tel:+15196217771" className="hover:text-[#FAC716] transition-colors duration-300 text-sm sm:text-base">{t('cambridge')}</a></li>
                  <li><a href="tel:+14506883399" className="hover:text-[#FAC716] transition-colors duration-300 text-sm sm:text-base">{t('laval')}</a></li>
                  <li><a href="tel:+19058787770" className="hover:text-[#FAC716] transition-colors duration-300 text-sm sm:text-base">{t('milton')}</a></li>
                  <li><a href="tel:+19056255558" className="hover:text-[#FAC716] transition-colors duration-300 text-sm sm:text-base">{t('mississauga')}</a></li>
                </ul>
              </div>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-4 lg:gap-6">
              <Image
                src="/images/hma.png"
                alt="HMA Certification"
                width={120}
                height={120}
                className="w-24 h-auto"
              />
              <ul className="flex flex-col gap-4 mt-2 uppercase">
                <li><Link href="/terms" className="hover:text-[#FAC716] transition-colors duration-300 text-sm">{t('termsAndConditions')}</Link></li>
                <li><Link href="/privacy" className="hover:text-[#FAC716] transition-colors duration-300 text-sm">{t('privacyPolicy')}</Link></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 w-full bg-black/40 backdrop-blur-md py-4 px-4 flex items-center justify-center border-t border-white/10">
          <p className="text-center text-sm tracking-wide text-white/90 uppercase">
            {t('copyright')}
          </p>
        </div>
      </footer>

      {/* Floating Order Button */}
      <div className="hidden lg:flex fixed top-1/2 right-0 -translate-y-1/2 z-50">
        <Link href="https://grillados.bycalibre.ca/location" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white hover: hover: bg-[#FAC716] hover:bg-[#EB5250] transition-all duration-300 hover:scale-[1.03] shadow-md font-bold py-4 px-2 rounded-l-lg flex flex-col items-center gap-3 cursor-pointer" >
          <UtensilsCrossed className="w-5 h-5" />
          <span className="writing-vertical-rl text-sm tracking-widest whitespace-nowrap rotate-180 uppercase" style={{ writingMode: 'vertical-rl' }}>
            {t('orderNow')}
          </span>
        </Link>
      </div>
    </>
  );
};
