"use client";

import React, { useState } from "react";
import { Menu, X, Utensils, MapPin, Tag, Users, Truck, FileText, ShoppingBag, Sparkles, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { NavItem } from "./NavItem";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const t = useTranslations('Header');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    if (newLocale === locale) return;
    router.replace(pathname, { locale: newLocale });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <div className="lg:hidden flex items-center">
      <button
        onClick={toggleMenu}
        className="text-white flex items-center justify-center p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#FAC716]/40 hover:text-[#FAC716] transition-all"
        aria-label="Open Menu"
      >
        <Menu className="w-7 h-7" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity"
          onClick={toggleMenu}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-[100dvh] w-[82vw] sm:w-88 bg-[#1A1410] border-r border-[#FAC716]/30 z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.9)]`}
        style={{ backgroundColor: '#1A1410' }}
      >
        {/* Header inside drawer */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-white/10">
          <div className="relative h-9 w-32">
            <Image
              src="/images/Grillados_new_logo-Yellow-removebg-preview.png"
              alt="Grillado's Logo"
              fill
              sizes="140px"
              className="object-contain object-left filter drop-shadow-[0_0_8px_rgba(250,199,22,0.4)]"
            />
          </div>
          <button
            onClick={toggleMenu}
            className="text-white/80 hover:text-[#FAC716] p-1.5 rounded-lg bg-white/5 border border-white/10 transition-colors"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Links Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-5 flex flex-col gap-4">
          <NavItem href="/menu" icon={<Utensils className="w-4.5 h-4.5" />} label={t('menu')} onClick={toggleMenu} />
          <NavItem href="/locations" icon={<MapPin className="w-4.5 h-4.5" />} label={t('locations')} onClick={toggleMenu} />
          <NavItem href="https://grillados.bycalibre.ca/location" target="_blank" rel="noopener noreferrer" icon={<ShoppingBag className="w-4.5 h-4.5" />} label={t('orderOnline')} onClick={toggleMenu} />
          <NavItem href="/deals" icon={<Tag className="w-4.5 h-4.5" />} label={t('deals')} onClick={toggleMenu} />
          <NavItem href="/services" icon={<Users className="w-4.5 h-4.5" />} label={t('services')} onClick={toggleMenu} />
          <NavItem href="/catering" icon={<Truck className="w-4.5 h-4.5" />} label={t('cateringServices')} onClick={toggleMenu} />
          
          {/* Pages Collapsible */}
          <div className="flex flex-col rounded-2xl bg-white/5 border border-white/10 p-2.5 mt-1">
            <button 
              onClick={() => setIsPagesOpen(!isPagesOpen)}
              className="flex items-center justify-between w-full px-2 py-1.5 text-white hover:text-[#FAC716] transition-colors font-bold group"
            >
              <div className="flex items-center gap-2 font-bold text-xs tracking-wider uppercase text-white group-hover:text-[#FAC716]">
                <FileText className="w-4 h-4 text-[#FAC716]" />
                <span>{t('pages')}</span>
              </div>
              <span className={`text-xs text-[#FAC716] transition-transform duration-300 ${isPagesOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {isPagesOpen && (
              <div className="flex flex-col pl-4 mt-2 gap-2 border-l border-[#FAC716]/30 ml-3">
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
                      onClick={toggleMenu} 
                      className={`flex items-center justify-between py-2 px-3 rounded-lg text-xs font-bold uppercase transition-all ${
                        isSubActive 
                          ? 'text-[#FAC716] bg-[#FAC716]/15 border border-[#FAC716]/30' 
                          : 'text-white/80 hover:text-[#FAC716] hover:bg-white/5'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-3 h-3 text-[#FAC716]" />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Language Switcher */}
          <div className="flex items-center justify-between mt-3 p-3 rounded-2xl bg-black/40 border border-white/10">
            <span className="text-xs font-bold text-white/70 uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FAC716]" /> Language
            </span>
            <div className="flex gap-2.5 items-center">
              <button 
                onClick={() => switchLanguage('en')} 
                className={`flex items-center justify-center transition-all duration-300 w-6 h-4.5 rounded-[3px] overflow-hidden relative ${
                  locale === 'en' 
                    ? 'border border-white/90 ring-1 ring-white/40 shadow-[0_0_6px_rgba(255,255,255,0.35)] scale-105' 
                    : 'border border-white/20 opacity-60 hover:opacity-100'
                }`}
              >
                <Image src="/images/eng.svg" alt="English" fill unoptimized className="object-cover" />
              </button>
              <button 
                onClick={() => switchLanguage('fr')} 
                className={`flex items-center justify-center transition-all duration-300 w-6 h-4.5 rounded-[3px] overflow-hidden relative ${
                  locale === 'fr' 
                    ? 'border border-white/90 ring-1 ring-white/40 shadow-[0_0_6px_rgba(255,255,255,0.35)] scale-105' 
                    : 'border border-white/20 opacity-60 hover:opacity-100'
                }`}
              >
                <Image src="/images/fre.svg" alt="Français" fill unoptimized className="object-cover" />
              </button>
            </div>
          </div>
        </nav>

        {/* Footer Order Button inside Drawer */}
        <div className="p-5 border-t border-white/10">
          <Link
            href="https://grillados.bycalibre.ca/location" target="_blank" rel="noopener noreferrer"
            onClick={toggleMenu}
            className="w-full h-12 flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#FAC716] via-[#FFA800] to-[#EB5250] text-black font-extrabold shadow-xl tracking-wider uppercase text-sm"
          >
            <ShoppingBag className="w-5 h-5 text-black" />
            <span>{t('orderOnline')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

