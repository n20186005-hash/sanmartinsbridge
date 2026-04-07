'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t py-12 px-4 mt-16" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto text-center">
        
        <div className="mb-10">
          <h3 className="text-sm font-bold mb-6 uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
            {t('officialLinksTitle')}
          </h3>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 text-sm font-medium">
            <a href="https://cultura.castillalamancha.es/patrimonio/catalogo-patrimonio-cultural/puente-de-san-martin-de-toledo" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center justify-center gap-2" style={{ color: 'var(--accent)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"></path><polyline points="21 3 14 3 14 10"></polyline><line x1="21" y1="3" x2="10" y2="14"></line></svg>
              Catálogo de Patrimonio Cultural
            </a>
            <a href="https://www.spain.info/en/places-of-interest/puente-san-martin/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center justify-center gap-2" style={{ color: 'var(--accent)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"></path><polyline points="21 3 14 3 14 10"></polyline><line x1="21" y1="3" x2="10" y2="14"></line></svg>
              Spain.info
            </a>
            <a href="https://www.turismocastillalamancha.es/es/cultura-y-patrimonio/monumentos/toledo/puente-de-san-martin-(toledo)" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center justify-center gap-2" style={{ color: 'var(--accent)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"></path><polyline points="21 3 14 3 14 10"></polyline><line x1="21" y1="3" x2="10" y2="14"></line></svg>
              Turismo Castilla-La Mancha
            </a>
            <a href="https://turismo.toledo.es/recursos/museos-y-monumentos/id1493-puente-de-san-martin.html" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center justify-center gap-2" style={{ color: 'var(--accent)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"></path><polyline points="21 3 14 3 14 10"></polyline><line x1="21" y1="3" x2="10" y2="14"></line></svg>
              Turismo Toledo
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm pt-8 border-t" style={{ borderColor: 'var(--border-color)' }}>
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
