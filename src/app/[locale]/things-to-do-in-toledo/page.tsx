import { notFound } from 'next/navigation';
import GuidePage from '@/components/GuidePage';
import { thingsToDoInToledoGuide } from '@/lib/guides';

export function generateStaticParams() {
  return [{ locale: 'en' }];
}

export function generateMetadata() {
  return {
    title: thingsToDoInToledoGuide.metaTitle,
    description: thingsToDoInToledoGuide.metaDescription,
    alternates: {
      canonical: '/en/things-to-do-in-toledo',
    },
  };
}

export default async function ThingsToDoInToledoPage({
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
      content={thingsToDoInToledoGuide}
      homeHref="/en"
      labels={{
        backHome: 'Back to the main guide',
        relatedGuides: 'Related guides',
        mapsTitle: 'Google Maps',
        mapsDescription:
          'Open San Martin’s Bridge in Google Maps and slot it directly into your Toledo walking route.',
        mapsCta: 'Open on Google Maps',
      }}
    />
  );
}
