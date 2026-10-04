import { notFound } from 'next/navigation';
import GuidePage from '@/components/GuidePage';
import { comoLlegarPuenteSanMartinGuide } from '@/lib/guides';

export function generateStaticParams() {
  return [{ locale: 'es' }];
}

export function generateMetadata() {
  return {
    title: comoLlegarPuenteSanMartinGuide.metaTitle,
    description: comoLlegarPuenteSanMartinGuide.metaDescription,
    alternates: {
      canonical: '/como-llegar-puente-san-martin',
    },
  };
}

export default async function ComoLlegarPuenteSanMartinPage({
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
      content={comoLlegarPuenteSanMartinGuide}
      homeHref="/"
      labels={{
        backHome: 'Volver a la guía principal',
        relatedGuides: 'Guías relacionadas',
        mapsTitle: 'Google Maps',
        mapsDescription:
          'Abre la ubicación del Puente de San Martín en Google Maps para seguir el acceso más cómodo según vengas andando, en coche o desde la estación.',
        mapsCta: 'Abrir en Google Maps',
      }}
    />
  );
}
