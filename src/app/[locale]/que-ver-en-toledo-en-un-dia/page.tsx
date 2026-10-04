import { notFound } from 'next/navigation';
import GuidePage from '@/components/GuidePage';
import { queVerEnToledoEnUnDiaGuide } from '@/lib/guides';

export function generateStaticParams() {
  return [{ locale: 'es' }];
}

export function generateMetadata() {
  return {
    title: queVerEnToledoEnUnDiaGuide.metaTitle,
    description: queVerEnToledoEnUnDiaGuide.metaDescription,
    alternates: {
      canonical: '/que-ver-en-toledo-en-un-dia',
    },
  };
}

export default async function QueVerEnToledoEnUnDiaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== 'es') {
    notFound();
  }

  return (
    <GuidePage
      content={queVerEnToledoEnUnDiaGuide}
      homeHref="/"
      labels={{
        backHome: 'Volver a la guía principal',
        relatedGuides: 'Guías relacionadas',
        mapsTitle: 'Google Maps',
        mapsDescription:
          'Usa Google Maps para enlazar esta ruta a pie con el Puente de San Martín y ajustar el final del día según la luz o el cansancio.',
        mapsCta: 'Abrir en Google Maps',
      }}
    />
  );
}
