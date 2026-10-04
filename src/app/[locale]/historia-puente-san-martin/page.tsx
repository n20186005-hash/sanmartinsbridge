import { notFound } from 'next/navigation';
import GuidePage from '@/components/GuidePage';
import { historiaPuenteSanMartinGuide } from '@/lib/guides';

export function generateStaticParams() {
  return [{ locale: 'es' }];
}

export function generateMetadata() {
  return {
    title: historiaPuenteSanMartinGuide.metaTitle,
    description: historiaPuenteSanMartinGuide.metaDescription,
    alternates: {
      canonical: '/historia-puente-san-martin',
    },
  };
}

export default async function HistoriaPuenteSanMartinPage({
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
      content={historiaPuenteSanMartinGuide}
      homeHref="/"
      labels={{
        backHome: 'Volver a la guía principal',
        relatedGuides: 'Guías relacionadas',
        mapsTitle: 'Google Maps',
        mapsDescription:
          'Consulta la ubicación oficial en Google Maps mientras recorres el puente y su entorno histórico sobre el río Tajo.',
        mapsCta: 'Abrir en Google Maps',
      }}
    />
  );
}
