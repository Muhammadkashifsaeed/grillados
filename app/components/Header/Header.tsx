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
    <header className="fixed top-0 left-0 z-50 w-full h-[84px] md:h-20 bg-black/80 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.6)] border-b border-white/5 transition-all duration-500">
      <div className="max-w-375 mx-auto px-3 sm:px-4 lg:px-5 h-full flex items-center justify-between gap-2 lg:gap-4">
        
        {/* Left Side: Logo */}
        <Link href="/" className="shrink-0 flex items-center h-full mr-2 ml-1 lg:ml-2">
          <div className="relative h-10 w-28 md:h-15 md:w-37.5 lg:h-16.25 lg:w-41.25 xl:h-17.5 xl:w-45">
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
        <div className="hidden lg:flex flex-1 items-center justify-center lg:pr-8 xl:pr-16 min-w-0 relative z-10">
          <nav className="flex items-center gap-0.5 xl:gap-2 px-1.5 xl:px-3 py-1.5 flex-nowrap">
            <NavItem href="/menu" icon={<Utensils className="w-3 h-3 xl:w-4 xl:h-4" />} label={t('menu')} />
            <NavItem href="/locations" icon={<MapPin className="w-3 h-3 xl:w-4 xl:h-4" />} label={t('locations')} />
            <NavItem href="https://grillados.bycalibre.ca/location" target="_blank" rel="noopener noreferrer" icon={<ShoppingBag className="w-3 h-3 xl:w-4 xl:h-4" />} label={t('orderOnline')} />
            <NavItem href="/deals" icon={<Tag className="w-3 h-3 xl:w-4 xl:h-4" />} label={t('deals')} />
            <NavItem href="/services" icon={<Users className="w-3 h-3 xl:w-4 xl:h-4" />} label={t('services')} />
            <NavItem href="/catering" icon={<Truck className="w-3 h-3 xl:w-4 xl:h-4" />} label={t('cateringServices')} />

            {/* Pages Dropdown */}
            <div className="relative group flex items-center h-full cursor-pointer py-1 pl-1 pr-1 xl:pr-2">
              <div className="pointer-events-none">
                <NavItem href="/pages" icon={<FileText className="w-3 h-3 xl:w-4 xl:h-4" />} label={t('pages')} dropdown />
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 top-12.5 flex flex-col w-48 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden z-50">
                {[
                  { href: '/franchising', label: t('franchising') },
                  { href: '/gallery', label: t('gallery') },
                  { href: '/blogs', label: t('blogs') },
                  { href: '/about-us', label: t('aboutUs') },
                  { href: '/contact-us', label: t('contactUs') }
                ].map((item) => {
                  const isSubActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/');
                  return (
                    <Link 
                      key={item.href} 
                      href={item.href} 
                      className={`px-5 py-3 transition-all text-[11px] xl:text-xs font-bold tracking-wider uppercase ${
                        isSubActive ? 'text-[#E9A33C] bg-white/5 font-extrabold' : 'text-white/90 hover:bg-white/10 hover:text-[#E9A33C]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Language Switcher - Grouped with Nav */}
            <div className="flex items-center gap-3 xl:gap-4 pl-2 xl:pl-3 border-l border-white/20 mr-1 xl:mr-2">
              <button
                type="button"
                onClick={() => switchLanguage('en')}
                className={`transition-all duration-300 w-6 h-4 xl:w-7 xl:h-4.5 rounded-[3px] overflow-hidden border border-white/20 relative ${locale === 'en' ? 'shadow-[0_0_8px_rgba(255,255,255,0.4)] ring-1 ring-white/50 z-10' : 'opacity-90 hover:opacity-100 z-0'}`}
                title="English"
              >
                <Image src="/images/eng.png" alt="English" fill sizes="10vw" className="object-cover" />
              </button>
              <button
                type="button"
                onClick={() => switchLanguage('fr')}
                className={`transition-all duration-300 w-6 h-4 xl:w-7 xl:h-4.5 rounded-[3px] overflow-hidden border border-white/20 relative ${locale === 'fr' ? 'shadow-[0_0_8px_rgba(255,255,255,0.4)] ring-1 ring-white/50 z-10' : 'opacity-90 hover:opacity-100 z-0'}`}
                title="Français"
              >
                <Image src="/images/fre.png" alt="French" fill sizes="10vw" className="object-cover" />
              </button>
            </div>
          </nav>
        </div>

        {/* Right Side: Order Online Button & Mobile Menu */}
        <div className="flex items-center gap-3 md:gap-4 xl:gap-6 h-full py-2 shrink-0 relative z-20">
          
          <Link
            href="https://grillados.bycalibre.ca/location" target="_blank" rel="noopener noreferrer"
            className="h-9 md:h-10 lg:h-11 inline-flex items-center justify-center gap-2 animate-bg-sweep px-3.5 sm:px-5 lg:px-6 rounded-lg shadow-[0_0_15px_rgba(239,113,64,0.3)] hover:shadow-[#EF7140]/50 border border-white/10 transition-all duration-300 transform hover:-translate-y-0.5 tracking-wider uppercase cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 md:w-5 md:h-5 shrink-0 animate-header-btn-text" />
            <span 
              className="whitespace-nowrap animate-header-btn-text uppercase"
              style={{ 
                fontFamily: "'Ribeat', sans-serif", 
                fontStyle: 'normal', 
                fontWeight: 500, 
                fontSize: '16px', 
                lineHeight: '16px' 
              }}
            >
              {t('orderOnline')}
            </span>
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
