'use client';
import { useTranslations } from 'next-intl';

export default function References() {
  const t = useTranslations('references');

  return (
    <section className="section py-16 border-t" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}>
      <h2 className="font-serif text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
        {t('title')}
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <ul className="space-y-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <li>• {t('sources.google')}</li>
            <li>• {t('sources.unsplash')}</li>
            <li>• {t('sources.wikipedia')}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
