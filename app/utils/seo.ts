import { Metadata } from 'next';
import { headers } from 'next/headers';

export const PRODUCTION_SITE_URL = 'https://grillados.ca';

/**
 * Returns the effective site URL for metadata generation.
 * - Respects NEXT_PUBLIC_SITE_URL if configured
 * - Automatically detects local dev / audit requests on localhost:3000 so canonical tags match the URL
 * - In production, defaults to https://grillados.ca
 */
export async function getSiteUrl(): Promise<string> {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '');
  }

  try {
    const headersList = await headers();
    const host = headersList.get('x-forwarded-host') || headersList.get('host');
    if (host) {
      if (host.includes('localhost') || host.includes('127.0.0.1')) {
        const proto = headersList.get('x-forwarded-proto') || 'http';
        return `${proto}://${host}`;
      }
    }
  } catch {
    // headers() is unavailable during build/static generation
  }

  if (process.env.NODE_ENV === 'development') {
    const port = process.env.PORT || '3000';
    return `http://localhost:${port}`;
  }

  return PRODUCTION_SITE_URL;
}

/**
 * Synchronous version for static route files (robots.ts, sitemap.ts)
 */
export function getSiteUrlSync(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '');
  }
  if (process.env.NODE_ENV === 'development') {
    const port = process.env.PORT || '3000';
    return `http://localhost:${port}`;
  }
  return PRODUCTION_SITE_URL;
}

interface PageMetadataOptions {
  locale: string;
  pathname: string; // e.g. '/menu', '/locations', or '/'
  title?: string;
  description?: string;
  keywords?: string[];
  images?: string[];
  type?: 'website' | 'article';
  publishedTime?: string;
}

export function constructPageMetadata({
  locale,
  pathname,
  title,
  description,
  keywords,
  images = ['/images/hero-bg-new.png'],
  type = 'website',
  publishedTime,
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
      type,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      images,
    },
  };
}
