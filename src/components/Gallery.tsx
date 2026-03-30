'use client';
import { useTranslations } from 'next-intl';

const PHOTOS = [
  '/gallery/images (1).jpg',
  '/gallery/images (2).jpg',
  '/gallery/images (3).jpg',
  '/gallery/images (4).jpg',
  '/gallery/images (5).jpg',
  '/gallery/images (6).jpg',
  '/gallery/images (7).jpg',
  '/gallery/images (8).jpg',
];

export default function Gallery() {
  const t = useTranslations('gallery');

  return (
    <section id="gallery" className="section">
      <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
        {t('title')}
      </h2>
      <p className="mb-8" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>

      <div className="gallery-grid">
        {PHOTOS.map((src, i) => (
          <div key={i} className="gallery-item">
            <img src={src} alt={t(`images.${i}.alt`)} loading="lazy" />
            <div className="caption">{t(`images.${i}.caption`)}</div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm" style={{ color: 'var(--text-muted)' }}>
        {t('source')}{' '}
        <a
          href="https://maps.app.goo.gl/S185ouarQPJMV5s37"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent)' }}
          className="hover:underline"
        >
          {t('viewAll')}
        </a>
      </p>
    </section>
  );
}
