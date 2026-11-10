import { getTranslations } from 'next-intl/server';
import { BridgeExplore, BridgeRoute, BridgeSources } from '@/components/BridgePlanning';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Explore from '@/components/Explore';
import Gallery from '@/components/Gallery';
import Practical from '@/components/Practical';
import NearbyAttractions from '@/components/NearbyAttractions';
import { Locale } from '@/lib/attractions';
import MapEmbed from '@/components/MapEmbed';
import { COORDINATES, GALLERY_IMAGES, MAPS_URL, SITE_URL, SPANISH_SITE_NAME } from '@/lib/site';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  const pageUrl = locale === 'es' ? SITE_URL : `${SITE_URL}/${locale}`;
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': ['TouristAttraction', 'Place'],
      name: SPANISH_SITE_NAME,
      alternateName: "San Martin's Bridge",
      description: t('description'),
      url: pageUrl,
      sameAs: [MAPS_URL],
      image: GALLERY_IMAGES.map((image) => `${SITE_URL}${image}`),
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bajada San Martín',
        postalCode: '45004',
        addressLocality: 'Toledo',
        addressCountry: 'ES',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: COORDINATES.latitude,
        longitude: COORDINATES.longitude,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: SPANISH_SITE_NAME,
          item: pageUrl,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: "San Martin's Bridge",
      url: SITE_URL,
      inLanguage: locale,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <BridgeExplore />
      <About />
      <Practical />
      <MapEmbed />
      <Explore />
      <BridgeRoute />
      <Gallery />
      <NearbyAttractions locale={locale as Locale} />
      <BridgeSources />
    </>
  );
}
