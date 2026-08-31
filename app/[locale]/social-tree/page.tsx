import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Globe } from 'lucide-react';
import { useTranslations } from 'next-intl';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const GmailIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
  </svg>
);

export default function SocialTreePage() {
  const t = useTranslations('SocialTree');
  
  const socialLinks = [
    { label: t('orderNow'), url: '/order' },
    { label: t('website'), url: '/' },
    { label: 'INSTAGRAM', url: 'https://www.instagram.com/grilladoscanada' },
    { label: 'TIKTOK', url: 'https://www.tiktok.com/@grilladoscanada' },
    { label: 'FACEBOOK', url: 'https://www.facebook.com/Grillados' },
    { label: 'YOUTUBE', url: 'https://www.youtube.com/channel/UCwa_w9BuVndNvHcZ9vUb5sA' },
    { label: 'PINTEREST', url: 'https://www.pinterest.com/' },
    { label: 'THREADS', url: 'https://www.threads.net/' },
    { label: 'LINKEDIN', url: 'https://www.linkedin.com/company/' },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 flex flex-col items-center">
      {/* Container */}
      <div className="w-full max-w-lg mx-auto flex flex-col items-center gap-6">
        
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-widest text-center mt-4">
          GRILLADOS SOCIAL TREE
        </h1>

        {/* Profile Section */}
        <div className="flex flex-col items-center gap-4 mt-6">
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-[#DAAF18] shadow-[0_0_20px_rgba(218,175,24,0.3)]">
            <Image 
              src="/images/-276.jpg" 
              alt="Grillados Profile" 
              fill 
              sizes="(max-width: 768px) 144px, 176px"
              className="object-cover"
              priority
            />
          </div>
          <p className="text-xl font-bold text-gray-200 tracking-wider">
            @grilladoscanada
          </p>
        </div>

        {/* Social Icons Row */}
        <div className="flex items-center justify-center flex-wrap gap-5 mt-4 mb-6">
          <Link href="https://www.instagram.com/grilladoscanada" target="_blank" className="text-white hover:text-[#DAAF18] hover:scale-110 transition-all duration-300">
            <InstagramIcon className="w-7 h-7" />
          </Link>
          <Link href="https://www.facebook.com/Grillados" target="_blank" className="text-white hover:text-[#DAAF18] hover:scale-110 transition-all duration-300">
            <FacebookIcon className="w-7 h-7" />
          </Link>
          <Link href="https://www.tiktok.com/@grilladoscanada" target="_blank" className="text-white hover:text-[#DAAF18] hover:scale-110 transition-all duration-300">
            <TikTokIcon className="w-7 h-7" />
          </Link>
          <Link href="#" target="_blank" className="text-white hover:text-[#DAAF18] hover:scale-110 transition-all duration-300">
            <WhatsAppIcon className="w-7 h-7" />
          </Link>
          <a href="mailto:info@grillados.ca" className="text-white hover:text-[#DAAF18] hover:scale-110 transition-all duration-300">
            <GmailIcon className="w-7 h-7" />
          </a>
          <Link href="/" className="text-white hover:text-[#DAAF18] hover:scale-110 transition-all duration-300">
            <Globe className="w-7 h-7" />
          </Link>
        </div>

        {/* Links List */}
        <div className="w-full flex flex-col gap-5 mt-4 mb-20">
          {socialLinks.map((link, index) => (
            <Link 
              key={index}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : undefined}
              className="group relative w-full bg-[#1b140f] border-2 border-white/10 hover:border-[#DAAF18] rounded-[2rem] py-5 px-4 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(218,175,24,0.15)] hover:-translate-y-1 overflow-hidden"
            >
              {/* Left Image 1333 */}
              <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-13 h-13 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden z-10 group-hover:scale-105 transition-transform duration-300 border border-gray-100">
                <div className="relative w-10 h-10">
                  <Image 
                    src="/images/1333.png" 
                    alt="Grillados Logo Icon" 
                    fill 
                    sizes="40px"
                    className="object-contain"
                  />
                </div>
              </div>
              
              {/* Button Label */}
              <span className="text-white font-extrabold tracking-[0.2em] uppercase text-sm md:text-base pl-12 pr-4 relative z-10 group-hover:text-[#DAAF18] transition-colors duration-300">
                {link.label}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
