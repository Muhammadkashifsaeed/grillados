'use client';

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { motion } from "framer-motion";
import { Utensils, MapPin, Tag, Users, Truck, FileText, ShoppingBag, ChevronRight, Sparkles } from "lucide-react";
import { NavItem } from "./NavItem";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('Header');
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 15) {
            setIsScrolled(true);
          } else if (window.scrollY < 5) {
            setIsScrolled(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLanguage = (newLocale: string) => {
    if (newLocale === locale) return;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <>
    <motion.header 
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed z-50 left-1/2 -translate-x-1/2 transform-gpu transition-[width,max-width,top,height,border-radius,border-color,box-shadow] duration-500 cubic-bezier(0.16,1,0.3,1) backdrop-blur-2xl ${
        isScrolled
          ? "top-2 sm:top-2.5 w-[94%] sm:w-[93%] lg:w-[94%] xl:w-[95%] max-w-[1440px] rounded-full border border-[#FAC716]/50 shadow-[0_16px_50px_rgba(0,0,0,0.95),0_0_35px_rgba(250,199,22,0.2)] h-[68px] sm:h-[70px] md:h-[72px] lg:h-[74px]"
          : "top-0 w-full max-w-none rounded-none border-b border-[#FAC716]/30 shadow-[0_8px_30px_rgba(0,0,0,0.85)] h-[76px] md:h-[82px] lg:h-[86px]"
      }`}
      style={{ backgroundColor: '#1A1410', willChange: 'width, max-width, top, height, border-radius' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 h-full flex items-center justify-between gap-1.5 sm:gap-2 lg:gap-3 relative z-10">
        
        {/* Left Side: Logo with Dynamic Ambient Aura & Hover Lift */}
        <Link href="/" className="shrink-0 flex items-center h-full mr-2 sm:mr-3 lg:mr-5 xl:mr-8 group relative py-1">
          <div className="absolute inset-0 bg-[#FAC716]/15 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative h-12 w-36 sm:h-13 sm:w-40 md:h-15 md:w-46 lg:h-16 lg:w-50 xl:h-[68px] xl:w-54 transition-all duration-300 group-hover:scale-105 group-hover:brightness-110">
            <Image
              src="/images/Grillados_logo_trimmed.png"
              alt="Grillado's Logo"
              fill
              sizes="(max-width: 640px) 180px, (max-width: 1024px) 240px, 320px"
              className="object-contain object-left scale-100 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] drop-shadow-[0_0_10px_rgba(250,199,22,0.4)] brightness-110 contrast-105 transition-all duration-300"
              priority
            />
          </div>
        </Link>

        {/* Center: Navigation Links (Positioned with elegant gap from logo) */}
        <div className="hidden lg:flex flex-1 items-center justify-start min-w-0 relative z-10">
          <nav className="flex items-center gap-0.5 xl:gap-1 2xl:gap-1.5 flex-nowrap">
            <NavItem href="/menu" icon={<Utensils className="w-3.5 h-3.5 xl:w-4 xl:h-4" />} label={t('menu')} />
            <NavItem href="/locations" icon={<MapPin className="w-3.5 h-3.5 xl:w-4 xl:h-4" />} label={t('locations')} />
            <NavItem href="https://grillados.bycalibre.ca/location" target="_blank" rel="noopener noreferrer" icon={<ShoppingBag className="w-3.5 h-3.5 xl:w-4 xl:h-4" />} label={t('orderOnline')} />
            <NavItem href="/deals" icon={<Tag className="w-3.5 h-3.5 xl:w-4 xl:h-4" />} label={t('deals')} />
            <NavItem href="/services" icon={<Users className="w-3.5 h-3.5 xl:w-4 xl:h-4" />} label={t('services')} />
            <NavItem href="/catering" icon={<Truck className="w-3.5 h-3.5 xl:w-4 xl:h-4" />} label={t('cateringServices')} />

            {/* Pages Dropdown with Glassmorphic Card */}
            <div className="relative group flex items-center h-full cursor-pointer py-1">
              <div className="pointer-events-none">
                <NavItem href="/pages" icon={<FileText className="w-3.5 h-3.5 xl:w-4 xl:h-4" />} label={t('pages')} dropdown />
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 top-11 flex flex-col w-56 bg-[#1A1410]/95 backdrop-blur-2xl border border-[#FAC716]/40 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.95),0_0_25px_rgba(250,199,22,0.15)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out overflow-hidden z-50 p-2 transform group-hover:translate-y-1" style={{ backgroundColor: '#1A1410' }}>
                <div className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#FAC716]/80 border-b border-white/10 mb-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#FAC716]" />
                  <span>Explore Grillado's</span>
                </div>
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
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-200 text-[11px] xl:text-xs font-bold tracking-wider uppercase group/sub ${
                        isSubActive 
                          ? 'text-[#FAC716] bg-gradient-to-r from-[#FAC716]/25 to-transparent font-extrabold border border-[#FAC716]/40 shadow-[0_0_12px_rgba(250,199,22,0.2)]' 
                          : 'text-white/90 hover:text-[#FAC716] hover:bg-white/10'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#FAC716] opacity-0 group-hover/sub:opacity-100 group-hover/sub:translate-x-0.5 transition-all duration-200" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>

        {/* Right Side: Order Online Button, Desktop Language Switcher, & Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 xl:gap-4 shrink-0 relative z-20">

          {/* Desktop Language Switcher Capsule (Vector Crisp Flags, Bareek Ring, Clear Gap) */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 px-2.5 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/15 shrink-0 shadow-inner">
            <button
              type="button"
              onClick={() => switchLanguage('en')}
              className={`transition-all duration-300 w-5.5 h-4 xl:w-6 xl:h-4.5 rounded-[3px] overflow-hidden relative shrink-0 group/flag ${
                locale === 'en' 
                  ? 'border border-white/90 ring-1 ring-white/40 shadow-[0_0_6px_rgba(255,255,255,0.35)] scale-105 z-10' 
                  : 'border border-white/20 opacity-60 hover:opacity-100 hover:border-white/40 z-0'
              }`}
              title="English"
            >
              <Image src="/images/eng.svg" alt="English" fill unoptimized className="object-cover group-hover/flag:scale-110 transition-transform duration-300" />
            </button>
            <button
              type="button"
              onClick={() => switchLanguage('fr')}
              className={`transition-all duration-300 w-5.5 h-4 xl:w-6 xl:h-4.5 rounded-[3px] overflow-hidden relative shrink-0 group/flag ${
                locale === 'fr' 
                  ? 'border border-white/90 ring-1 ring-white/40 shadow-[0_0_6px_rgba(255,255,255,0.35)] scale-105 z-10' 
                  : 'border border-white/20 opacity-60 hover:opacity-100 hover:border-white/40 z-0'
              }`}
              title="Français"
            >
              <Image src="/images/fre.svg" alt="French" fill unoptimized className="object-cover group-hover/flag:scale-110 transition-transform duration-300" />
            </button>
          </div>

          {/* Desktop Order Online Button - Compact, Sleek & Premium */}
          <motion.div
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            className="hidden lg:inline-flex rounded-xl relative group shrink-0"
          >
            {/* Glowing Backdrop Aura */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FAC716] via-[#FF8C00] to-[#EB5250] rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse" />

            <a
              href="https://grillados.bycalibre.ca/location" target="_blank" rel="noopener noreferrer"
              className="relative h-9.5 lg:h-10 flex items-center justify-center gap-2 px-4.5 xl:px-5 rounded-xl bg-gradient-to-r from-[#FAC716] via-[#FFA800] to-[#EB5250] text-black font-extrabold hover:text-white transition-all duration-300 shadow-xl tracking-wider uppercase cursor-pointer overflow-hidden border border-white/30"
            >
              {/* Shimmer Light Reflection effect */}
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />

              <ShoppingBag className="w-4 h-4 xl:w-4.5 xl:h-4.5 shrink-0 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 text-black group-hover:text-white" />
              <span 
                className="whitespace-nowrap uppercase tracking-wider transition-colors duration-300"
                style={{ 
                  fontFamily: "'Ribeat', sans-serif", 
                  fontStyle: 'normal', 
                  fontWeight: 700, 
                  fontSize: '14px', 
                  lineHeight: '14px' 
                }}
              >
                {t('orderOnline')}
              </span>
            </a>
          </motion.div>

          {/* Mobile Order Online Button - Styled matching Order Now button below */}
          <a
            href="https://grillados.bycalibre.ca/location" target="_blank" rel="noopener noreferrer"
            className="lg:hidden relative h-9 sm:h-9.5 inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 rounded-lg bg-[#FAC716] hover:bg-[#EB5250] text-black hover:text-white transition-all duration-300 hover:scale-[1.03] shadow-md tracking-wider uppercase cursor-pointer shrink-0"
            style={{ 
              fontFamily: "'Ribeat', sans-serif", 
              fontStyle: 'normal', 
              fontWeight: 700, 
              fontSize: '13px', 
              lineHeight: '14px' 
            }}
          >
            <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform duration-300" />
            <span className="whitespace-nowrap uppercase tracking-wider">
              {t('orderOnline')}
            </span>
          </a>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center">
            <MobileMenu />
          </div>
        </div>
      </div>
    </motion.header>
    {/* Header placeholder spacer so header has its own space and does not overlap hero section */}
    <div className="h-[76px] md:h-[82px] lg:h-[86px] w-full shrink-0 bg-[#1A1410]" aria-hidden="true" />
    </>
  );
};



