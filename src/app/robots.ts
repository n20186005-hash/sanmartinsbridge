import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/privacy-policy',
          '/terms-of-service',
          '/cookie-settings',
          '/en/privacy-policy',
          '/en/terms-of-service',
          '/en/cookie-settings',
          '/fr/privacy-policy',
          '/fr/terms-of-service',
          '/fr/cookie-settings',
          '/zh-Hant/privacy-policy',
          '/zh-Hant/terms-of-service',
          '/zh-Hant/cookie-settings',
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
