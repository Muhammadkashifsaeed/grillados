import { Metadata } from 'next';

interface PageMetadataOptions {
  locale: string;
  pathname: string; // e.g. '/menu', '/locations', or '/'
  title?: string;
  description?: string;
  keywords?: string[];
  images?: string[];
}

export function constructPageMetadata({
  locale,
  pathname,
  title,
  description,
  keywords,
  images = ['/images/13332603_transparent.png'],
}: PageMetadataOptions): Metadata {
  const cleanPath = pathname === '/' ? '' : pathname.startsWith('/') ? pathname : `/${pathname}`;
  
  const canonical = locale === 'fr' 
    ? (cleanPath ? `/fr${cleanPath}` : '/fr') 
    : (cleanPath || '/');

  const enUrl = cleanPath || '/';
  const frUrl = cleanPath ? `/fr${cleanPath}` : '/fr';

  return {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical,
      languages: {
        en: enUrl,
        fr: frUrl,
        'x-default': enUrl,
      },
    },
    openGraph: {
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      url: canonical,
      siteName: "GRILLADO'S",
      locale: locale === 'fr' ? 'fr_CA' : 'en_CA',
      alternateLocale: locale === 'fr' ? ['en_CA'] : ['fr_CA'],
      images: images.map(img => ({
        url: img,
        alt: title || "GRILLADO'S",
      })),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      images,
    },
  };
}
