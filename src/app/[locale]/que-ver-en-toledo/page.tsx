import { notFound } from 'next/navigation';
import GuidePage from '@/components/GuidePage';
import { queVerEnToledoGuide } from '@/lib/guides';

export function generateStaticParams() {
  return [{ locale: 'es' }];
}

export function generateMetadata() {
  return {
    title: queVerEnToledoGuide.metaTitle,
    description: queVerEnToledoGuide.metaDescription,
    alternates: {
      canonical: '/que-ver-en-toledo',
    },
  };
}

export default async function QueVerEnToledoPage({
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
      content={queVerEnToledoGuide}
      homeHref="/"
      labels={{
        backHome: 'Volver a la guía principal',
        relatedGuides: 'Guías relacionadas',
        mapsTitle: 'Google Maps',
        mapsDescription:
          'Abre la ubicación del Puente de San Martín en Google Maps para integrarlo fácilmente en tu ruta por Toledo.',
        mapsCta: 'Abrir en Google Maps',
      }}
    />
  );
}
