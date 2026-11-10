import { MetadataRoute } from 'next';
import { attractionSlugs } from '@/lib/attractions';
import { routing } from '@/i18n/routing';
import { SITE_URL } from '@/lib/site';

const routes = [
  '',
  '/en',
  '/fr',
  '/zh-Hant',
  '/que-ver-en-toledo',
  '/que-ver-en-toledo-en-un-dia',
  '/como-llegar-puente-san-martin',
  '/historia-puente-san-martin',
  '/en/things-to-do-in-toledo',
  '/en/toledo-one-day-itinerary',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const attractionRoutes = routing.locales.flatMap(locale => attractionSlugs.map(slug => `${locale === 'es' ? '' : `/${locale}`}/${slug}`));
  return [...routes, ...attractionRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
