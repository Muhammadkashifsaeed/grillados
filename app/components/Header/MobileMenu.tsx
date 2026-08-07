"use client";

import React, { useState } from "react";
import { Menu, X, Utensils, MapPin, Tag, Users, Truck, FileText, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { NavItem } from "./NavItem";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
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
        className="text-white hover:text-[#DAAF18] transition-colors"
        aria-label="Open Menu"
      >
        <Menu className="w-8 h-8" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 transition-opacity"
          onClick={toggleMenu}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[80vw] sm:w-87.5 bg-[#1b140f] border-l border-white/10 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        <div className="flex justify-between items-center p-5 border-b border-white/10">
          <Image
            src="/images/saman.png"
            alt="Grillado's Logo"
            width={120}
            height={40}
            className="w-auto h-10 scale-110 ml-2"
          />
          <button
            onClick={toggleMenu}
            className="text-white hover:text-[#DAAF18] transition-colors"
            aria-label="Close Menu"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-5 flex flex-col gap-6">
          <NavItem href="/menu" icon={<Utensils className="w-5 h-5" />} label={t('menu')} />
          <NavItem href="/locations" icon={<MapPin className="w-5 h-5" />} label={t('locations')} />
          <NavItem href="/order" icon={<ShoppingBag className="w-5 h-5" />} label={t('orderOnline')} />
          <NavItem href="/deals" icon={<Tag className="w-5 h-5" />} label={t('deals')} />
          <NavItem href="/services" icon={<Users className="w-5 h-5" />} label={t('services')} />
          <NavItem href="/catering" icon={<Truck className="w-5 h-5" />} label={t('cateringServices')} />
          <NavItem href="/pages" icon={<FileText className="w-5 h-5" />} label={t('pages')} dropdown />
          
          <div className="flex gap-4 items-center mt-2 pl-2">
            <button onClick={() => switchLanguage('en')} className={`flex items-center gap-2 transition-opacity ${locale === 'en' ? 'scale-110 drop-shadow-[0_0_4px_rgba(247,180,28,0.8)]' : 'opacity-60 hover:opacity-100 hover:scale-110'}`}>
              <span className="text-xl">🇬🇧</span>
            </button>
            <button onClick={() => switchLanguage('fr')} className={`flex items-center gap-2 transition-opacity ${locale === 'fr' ? 'scale-110 drop-shadow-[0_0_4px_rgba(247,180,28,0.8)]' : 'opacity-60 hover:opacity-100 hover:scale-110'}`}>
              <span className="text-xl">🇫🇷</span>
            </button>
          </div>
        </nav>

        <div className="p-5 border-t border-white/10">
          <Link
            href="/order"
            className="flex items-center justify-center w-full bg-[#DAAF18] hover:bg-[#b89214] text-black font-bold py-4 rounded-xl transition-all duration-300"
            onClick={toggleMenu}
          >
            {t('orderNow')}
          </Link>
        </div>
      </div>
    </div>
  );
};
