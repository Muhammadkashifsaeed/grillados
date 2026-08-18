'use client';

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Utensils, MapPin, Tag, Users, Truck, FileText, ShoppingBag } from "lucide-react";
import { NavItem } from "./NavItem";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('Header');

  const switchLanguage = (newLocale: string) => {
    if (newLocale === locale) return;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header className="sticky top-0 z-50 w-full h-20 bg-black shadow-xl border-b border-white/5">
      <div className="max-w-375 mx-auto px-2 lg:px-3 h-full flex items-center justify-between gap-1 lg:gap-2">
        
        {/* Left Side: Logo */}
        <Link href="/" className="shrink-0 flex items-center h-full py-2 group mr-2">
          <div className="relative h-[55px] w-35 md:h-15 md:w-[150px] lg:h-[65px] lg:w-[165px] xl:h-17.5 xl:w-[180px] transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/saman.png"
              alt="Grillado's Logo"
              fill
              sizes="(max-width: 768px) 150px, 180px"
              className="object-contain object-left scale-110"
              priority
            />
          </div>
        </Link>

        {/* Center: Navigation & Language Switcher (Desktop Only) */}
        <div className="hidden lg:flex flex-1 items-center justify-center min-w-0 relative z-10">
          <nav className="flex items-center gap-0.5 xl:gap-2 bg-white/5 px-1.5 xl:px-3 py-1.5 rounded-2xl backdrop-blur-sm border border-white/5 flex-nowrap">
            <NavItem href="/menu" icon={<Utensils className="w-3 h-3 xl:w-4 xl:h-4" />} label={t('menu')} />
            <NavItem href="/locations" icon={<MapPin className="w-3 h-3 xl:w-4 xl:h-4" />} label={t('locations')} />
            <NavItem href="/order" icon={<ShoppingBag className="w-3 h-3 xl:w-4 xl:h-4" />} label={t('orderOnline')} />
            <NavItem href="/deals" icon={<Tag className="w-3 h-3 xl:w-4 xl:h-4" />} label={t('deals')} />
            <NavItem href="/services" icon={<Users className="w-3 h-3 xl:w-4 xl:h-4" />} label={t('services')} />
            <NavItem href="/catering" icon={<Truck className="w-3 h-3 xl:w-4 xl:h-4" />} label={t('cateringServices')} />

            {/* Pages Dropdown */}
            <div className="relative group flex items-center h-full cursor-pointer py-1 pl-1 pr-1 xl:pr-2">
              <div className="pointer-events-none">
                <NavItem href="/pages" icon={<FileText className="w-3 h-3 xl:w-4 xl:h-4" />} label={t('pages')} dropdown />
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 top-12.5 flex flex-col w-48 bg-[#1b140f] border border-[#DAAF18]/30 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden z-50">
                <Link href="/franchising" className="px-5 py-3 text-white hover:bg-[#DAAF18] hover:text-black transition-colors text- xl:text-xs font-bold tracking-wide uppercase">{t('franchising')}</Link>
                <Link href="/gallery" className="px-5 py-3 text-white hover:bg-[#DAAF18] hover:text-black transition-colors text- xl:text-xs font-bold tracking-wide uppercase">{t('gallery')}</Link>
                <Link href="/blogs" className="px-5 py-3 text-white hover:bg-[#DAAF18] hover:text-black transition-colors text- xl:text-xs font-bold tracking-wide uppercase">{t('blogs')}</Link>
                <Link href="/about-us" className="px-5 py-3 text-white hover:bg-[#DAAF18] hover:text-black transition-colors text- xl:text-xs font-bold tracking-wide uppercase">{t('aboutUs')}</Link>
                <Link href="/contact-us" className="px-5 py-3 text-white hover:bg-[#DAAF18] hover:text-black transition-colors text- xl:text-xs font-bold tracking-wide uppercase">{t('contactUs')}</Link>
              </div>
            </div>

            {/* Language Switcher - Grouped with Nav */}
            <div className="flex items-center gap-0.5 xl:gap-1 pl-1.5 xl:pl-2 border-l border-white/20 mr-1 xl:mr-2">
              <button
                type="button"
                onClick={() => switchLanguage('en')}
                className={`transition-all duration-300 w-5 h-3 xl:w-6 xl:h-3.5 relative ${locale === 'en' ? 'scale-110 drop-shadow-[0_0_4px_rgba(247,180,28,0.8)]' : 'opacity-60 hover:opacity-100 hover:scale-110'}`}
                title="English"
              >
                <Image src="/images/eng.png" alt="English" fill sizes="10vw" className="object-contain" />
              </button>
              <button
                type="button"
                onClick={() => switchLanguage('fr')}
                className={`transition-all duration-300 w-5 h-3 xl:w-6 xl:h-3.5 relative ${locale === 'fr' ? 'scale-110 drop-shadow-[0_0_4px_rgba(247,180,28,0.8)]' : 'opacity-60 hover:opacity-100 hover:scale-110'}`}
                title="Français"
              >
                <Image src="/images/fre.png" alt="French" fill sizes="10vw" className="object-contain" />
              </button>
            </div>
          </nav>
        </div>

        {/* Right Side: Order Online Button & Mobile Menu */}
        <div className="flex items-center gap-2 xl:gap-4 h-full py-2 shrink-0 ml-2 relative z-20">
          
          <Link
            href="/order"
            className="h-8 md:h-10 lg:h-full inline-flex items-center justify-center gap-1 xl:gap-1.5 bg-linear-to-r from-[#fa9e42] to-[#f47f23] hover:from-[#f47f23] hover:to-[#e66c0e] text-white font-extrabold px-2 sm:px-3 lg:px-2.5 xl:px-3 rounded-lg xl:rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-0.5 tracking-wider uppercase border border-orange-400/50 animate-text-blink"
          >
            <ShoppingBag className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
            <div className="flex flex-col text-left">
              <span className="text-[10px] sm:text-xs md:text-sm xl:text-xs whitespace-nowrap">{t('orderOnline')}</span>
            </div>
          </Link>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};
