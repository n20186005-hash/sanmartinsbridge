import { notFound } from 'next/navigation';
import GuidePage from '@/components/GuidePage';
import { toledoOneDayItineraryGuide } from '@/lib/guides';

export function generateStaticParams() {
  return [{ locale: 'en' }];
}

export function generateMetadata() {
  return {
    title: toledoOneDayItineraryGuide.metaTitle,
    description: toledoOneDayItineraryGuide.metaDescription,
    alternates: {
      canonical: '/en/toledo-one-day-itinerary',
    },
  };
}

export default async function ToledoOneDayItineraryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== 'en') {
    notFound();
  }

  return (
    <GuidePage
      content={toledoOneDayItineraryGuide}
      homeHref="/en"
      labels={{
        backHome: 'Back to the main guide',
        relatedGuides: 'Related guides',
        mapsTitle: 'Google Maps',
        mapsDescription:
          'Use Google Maps to keep San Martin’s Bridge as the panoramic finish to your Toledo day trip.',
        mapsCta: 'Open on Google Maps',
      }}
    />
  );
}
