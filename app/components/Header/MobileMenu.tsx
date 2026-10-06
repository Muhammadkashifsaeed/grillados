"use client";

import React, { useState } from "react";
import { Menu, X, Utensils, MapPin, Tag, Users, Truck, FileText, ShoppingBag } from "lucide-react";
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
        className="text-white flex items-center justify-center p-2"
        aria-label="Open Menu"
      >
        <Menu className="w-8 h-8" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-[100dvh] bg-black/60 z-40 transition-opacity"
          onClick={toggleMenu}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-[100dvh] w-[80vw] sm:w-87.5 bg-black border-l border-white/10 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        <div className="flex justify-between items-center p-5 border-b border-white/10">
          <Image
            src="/images/saman.png"
            alt="Grillado's Logo"
            width={120}
            height={40}
            style={{ width: "auto", height: "auto" }}
            className="h-10 scale-110 -ml-2"
          />
          <button
            onClick={toggleMenu}
            className="text-white hover:text-[#FAC716] transition-colors"
            aria-label="Close Menu"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-5 flex flex-col gap-6">
          <NavItem href="/menu" icon={<Utensils className="w-5 h-5" />} label={t('menu')} />
          <NavItem href="/locations" icon={<MapPin className="w-5 h-5" />} label={t('locations')} />
          <NavItem href="https://grillados.bycalibre.ca/location" target="_blank" rel="noopener noreferrer" icon={<ShoppingBag className="w-5 h-5" />} label={t('orderOnline')} />
          <NavItem href="/deals" icon={<Tag className="w-5 h-5" />} label={t('deals')} />
          <NavItem href="/services" icon={<Users className="w-5 h-5" />} label={t('services')} />
          <NavItem href="/catering" icon={<Truck className="w-5 h-5" />} label={t('cateringServices')} />
          
          <div className="flex flex-col">
            <button 
              onClick={() => setIsPagesOpen(!isPagesOpen)}
              className="flex items-center justify-between w-full text-white hover:text-[#FAC716] transition-colors py-2"
            >
              <div className="flex items-center gap-1.5 font-bold text-sm tracking-wide uppercase">
                <FileText className="w-5 h-5 opacity-90" />
                <span>{t('pages')}</span>
              </div>
              <span className={`text-xs transition-transform ${isPagesOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {isPagesOpen && (
              <div className="flex flex-col pl-6 mt-2 gap-3 border-l border-white/10 ml-2">
                <Link href="/franchising" onClick={toggleMenu} className="text-sm text-white/80 hover:text-[#FAC716] transition-colors font-bold uppercase">{t('franchising')}</Link>
                <Link href="/gallery" onClick={toggleMenu} className="text-sm text-white/80 hover:text-[#FAC716] transition-colors font-bold uppercase">{t('gallery')}</Link>
                <Link href="/blogs" onClick={toggleMenu} className="text-sm text-white/80 hover:text-[#FAC716] transition-colors font-bold uppercase">{t('blogs')}</Link>
                <Link href="/about-us" onClick={toggleMenu} className="text-sm text-white/80 hover:text-[#FAC716] transition-colors font-bold uppercase">{t('aboutUs')}</Link>
                <Link href="/contact-us" onClick={toggleMenu} className="text-sm text-white/80 hover:text-[#FAC716] transition-colors font-bold uppercase">{t('contactUs')}</Link>
              </div>
            )}
          </div>
          <div className="flex gap-4 items-center mt-2 pl-2">
            <button onClick={() => switchLanguage('en')} className={`flex items-center justify-center transition-all duration-300 w-8 h-[22px] rounded-[3px] overflow-hidden border border-white/20 relative ${locale === 'en' ? 'shadow-[0_0_8px_rgba(255,255,255,0.4)] ring-1 ring-white/50 z-10' : 'opacity-90 hover:opacity-100 z-0'}`}>
              <Image src="/images/eng.png" alt="English" fill sizes="20vw" className="object-cover" />
            </button>
            <button onClick={() => switchLanguage('fr')} className={`flex items-center justify-center transition-all duration-300 w-8 h-[22px] rounded-[3px] overflow-hidden border border-white/20 relative ${locale === 'fr' ? 'shadow-[0_0_8px_rgba(255,255,255,0.4)] ring-1 ring-white/50 z-10' : 'opacity-90 hover:opacity-100 z-0'}`}>
              <Image src="/images/fre.png" alt="Français" fill sizes="20vw" className="object-cover" />
            </button>
          </div>
        </nav>


      </div>
    </div>
  );
};
