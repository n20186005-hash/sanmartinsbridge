'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t py-10 px-4 mt-16" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8 max-w-3xl mx-auto">
          <p className="text-sm leading-relaxed font-medium mb-4" style={{ color: 'var(--text-primary)' }}>
            {t('management')}
          </p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-sm font-bold mb-4 uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
            {t('officialLinksTitle')}
          </h3>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 text-sm">
            <a href="https://cultura.castillalamancha.es/patrimonio/catalogo-patrimonio-cultural/puente-de-san-martin-de-toledo" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--accent)' }}>
              Catálogo de Patrimonio Cultural (Castilla-La Mancha)
            </a>
            <a href="https://www.spain.info/en/places-of-interest/puente-san-martin/" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--accent)' }}>
              Spain.info
            </a>
            <a href="https://www.turismocastillalamancha.es/es/cultura-y-patrimonio/monumentos/toledo/puente-de-san-martin-(toledo)" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--accent)' }}>
              Turismo Castilla-La Mancha
            </a>
            <a href="https://turismo.toledo.es/recursos/museos-y-monumentos/id1493-puente-de-san-martin.html" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--accent)' }}>
              Turismo Toledo
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm pt-6 border-t" style={{ borderColor: 'var(--border-color)' }}>
          <Link href="/privacy-policy" className="hover:underline" style={{ color: 'var(--text-muted)' }}>
            {t('privacy')}
          </Link>
          <Link href="/terms-of-service" className="hover:underline" style={{ color: 'var(--text-muted)' }}>
            {t('terms')}
          </Link>
          <Link href="/cookie-settings" className="hover:underline" style={{ color: 'var(--text-muted)' }}>
            {t('cookies')}
          </Link>
        </div>
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
          {t('copyright')}
        </p>
      </div>
    </footer>
  );
}
