import type { MetadataRoute } from 'next';
import { getSiteUrlSync } from './utils/seo';

const BASE_URL = getSiteUrlSync();

const routes = [
  { path: '', changeFrequency: 'daily' as const, priority: 1.0 },
  { path: 'menu', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: 'locations', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: 'deals', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: 'catering', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: 'order', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: 'about-us', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: 'franchising', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: 'services', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: 'blogs', changeFrequency: 'daily' as const, priority: 0.8 },
  { path: 'gallery', changeFrequency: 'monthly' as const, priority: 0.6 },
  { path: 'contact-us', changeFrequency: 'monthly' as const, priority: 0.6 },
  { path: 'privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
  { path: 'terms', changeFrequency: 'yearly' as const, priority: 0.3 },
  { path: 'social-tree', changeFrequency: 'monthly' as const, priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const staticEntries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    const enUrl = route.path ? `${BASE_URL}/${route.path}` : BASE_URL;
    const frUrl = route.path ? `${BASE_URL}/fr/${route.path}` : `${BASE_URL}/fr`;

    // English entry
    staticEntries.push({
      url: enUrl,
      lastModified: currentDate,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          en: enUrl,
          fr: frUrl,
        },
      },
    });

    // French entry
    staticEntries.push({
      url: frUrl,
      lastModified: currentDate,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          en: enUrl,
          fr: frUrl,
        },
      },
    });
  }

  return staticEntries;
}
