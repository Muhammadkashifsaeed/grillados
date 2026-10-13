"use client";

import React, { useState } from "react";
import { Menu, X, Utensils, MapPin, Tag, Users, Truck, FileText, ShoppingBag, Sparkles, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';

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

  const DrawerLink = ({ href, icon, label, isExternal = false }: { href: string; icon: React.ReactNode; label: string; isExternal?: boolean }) => {
    const isActive = !isExternal && (pathname === href || (pathname.startsWith(href) && href !== '/'));
    return (
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        onClick={toggleMenu}
        className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-200 font-bold text-xs tracking-wider uppercase group ${
          isActive
            ? 'text-black bg-white/95 border border-white shadow-md'
            : 'text-white hover:text-black hover:bg-white/20 border border-transparent'
        }`}
      >
        <div className="flex items-center gap-2.5">
          <span className={`transition-transform duration-200 group-hover:scale-110 ${isActive ? 'text-black' : 'text-[#FAC716]'}`}>
            {icon}
          </span>
          <span className="text-current">{label}</span>
        </div>
        <ChevronRight className={`w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 ${isActive ? 'text-black opacity-100' : 'text-white/60 opacity-0 group-hover:opacity-100'}`} />
      </Link>
    );
  };

  return (
    <div className="lg:hidden flex items-center">
      {/* 3 lines hamburger icon: pure white, no hover effects */}
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center p-1 text-white cursor-pointer select-none"
        aria-label="Open Menu"
      >
        <Menu className="w-6.5 h-6.5 text-white stroke-[2.2]" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity"
          onClick={toggleMenu}
        />
      )}

      {/* Drawer with Brand Red Background (#EB5250) */}
      <div
        className={`fixed top-0 left-0 h-[100dvh] w-[84vw] sm:w-88 bg-[#EB5250] border-r border-black/20 z-50 transform transition-all duration-300 ease-out ${
          isOpen ? "translate-x-0 opacity-100 visible" : "-translate-x-full opacity-0 invisible pointer-events-none"
        } flex flex-col shadow-[20px_0_60px_rgba(0,0,0,0.95)]`}
        style={{ backgroundColor: '#EB5250' }}
      >
        {/* Header inside drawer */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-white/20 bg-black/15">
          <div className="flex items-center gap-2.5 text-white font-extrabold text-base tracking-wider uppercase">
            <Menu className="w-5 h-5 text-white stroke-[2.2]" />
            <span>{t('menu')}</span>
          </div>
          <button
            onClick={toggleMenu}
            className="text-white hover:text-black p-2 rounded-xl bg-white/10 hover:bg-white/25 border border-white/20 transition-all active:scale-95"
            aria-label="Close Menu"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Links Navigation */}
        <nav className="flex-1 overflow-y-auto py-5 px-4 flex flex-col gap-2">
          <DrawerLink href="/menu" icon={<Utensils className="w-4.5 h-4.5" />} label={t('menu')} />
          <DrawerLink href="/locations" icon={<MapPin className="w-4.5 h-4.5" />} label={t('locations')} />
          <DrawerLink href="https://grillados.bycalibre.ca/location" isExternal icon={<ShoppingBag className="w-4.5 h-4.5" />} label={t('orderOnline')} />
          <DrawerLink href="/deals" icon={<Tag className="w-4.5 h-4.5" />} label={t('deals')} />
          <DrawerLink href="/services" icon={<Users className="w-4.5 h-4.5" />} label={t('services')} />
          <DrawerLink href="/catering" icon={<Truck className="w-4.5 h-4.5" />} label={t('cateringServices')} />
          
          {/* Pages Collapsible */}
          <div className="flex flex-col rounded-2xl bg-black/15 border border-white/20 p-2.5 mt-1">
            <button 
              onClick={() => setIsPagesOpen(!isPagesOpen)}
              className="flex items-center justify-between w-full px-2 py-1.5 text-white hover:text-black transition-colors font-bold group"
            >
              <div className="flex items-center gap-2.5 font-bold text-xs tracking-wider uppercase text-white group-hover:text-black">
                <FileText className="w-4 h-4 text-[#FAC716]" />
                <span>{t('pages')}</span>
              </div>
              <span className={`text-xs text-[#FAC716] transition-transform duration-300 ${isPagesOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {isPagesOpen && (
              <div className="flex flex-col pl-3 mt-2 gap-1.5 border-l border-white/30 ml-2.5">
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
                      className={`flex items-center justify-between py-2 px-3 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all ${
                        isSubActive 
                          ? 'text-black bg-white/95 border border-white shadow-sm' 
                          : 'text-white hover:text-black hover:bg-white/20'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Language Switcher */}
          <div className="flex items-center justify-between mt-3 p-3.5 rounded-2xl bg-black/20 border border-white/20 shadow-inner">
            <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#FAC716]" /> Language
            </span>
            <div className="flex gap-2 items-center">
              <button 
                onClick={() => switchLanguage('en')} 
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all duration-300 ${
                  locale === 'en' 
                    ? 'bg-white text-black font-extrabold shadow-md border border-white' 
                    : 'bg-black/20 border border-white/20 text-white/90 hover:text-white'
                }`}
                title="English"
              >
                <div className="w-5 h-3.5 rounded-[2px] overflow-hidden relative">
                  <Image src="/images/eng.svg" alt="English" fill unoptimized className="object-cover" />
                </div>
                <span className="text-xs uppercase font-extrabold tracking-wider">EN</span>
              </button>
              <button 
                onClick={() => switchLanguage('fr')} 
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all duration-300 ${
                  locale === 'fr' 
                    ? 'bg-white text-black font-extrabold shadow-md border border-white' 
                    : 'bg-black/20 border border-white/20 text-white/90 hover:text-white'
                }`}
                title="Français"
              >
                <div className="w-5 h-3.5 rounded-[2px] overflow-hidden relative">
                  <Image src="/images/fre.svg" alt="Français" fill unoptimized className="object-cover" />
                </div>
                <span className="text-xs uppercase font-extrabold tracking-wider">FR</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Footer Order Button inside Drawer */}
        <div className="p-4 border-t border-white/20 bg-black/20">
          <Link
            href="https://grillados.bycalibre.ca/location" target="_blank" rel="noopener noreferrer"
            onClick={toggleMenu}
            className="w-full h-11.5 flex items-center justify-center gap-2 rounded-xl bg-[#FAC716] hover:bg-[#e0a218] text-black font-extrabold shadow-xl tracking-wider uppercase text-sm border border-white/30"
          >
            <ShoppingBag className="w-4.5 h-4.5 text-black" />
            <span style={{ fontFamily: "'Ribeat', sans-serif" }}>{t('orderOnline')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
