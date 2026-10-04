'use client';
import { useTranslations } from 'next-intl';
import { ADDRESS, MAPS_URL } from '@/lib/site';

export default function Reviews() {
  const t = useTranslations('reviews');
  const hero = useTranslations('hero');
  const highlights: string[] = t.raw('highlights');

  return (
    <div style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <section id="reviews" className="section">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h2>
        <p className="mb-10 text-sm leading-relaxed max-w-2xl" style={{ color: 'var(--text-muted)' }}>
          {t('declaration')}
        </p>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="review-card">
            <p className="text-sm font-medium mb-6" style={{ color: 'var(--accent)' }}>
              {t('summaryTitle')}
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <div className="text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>
                  {t('stats.rating')}
                </div>
                <div className="text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {hero('rating')}
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>
                  {t('stats.reviews')}
                </div>
                <div className="text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {hero('reviewCount')}
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>
                  {t('stats.location')}
                </div>
                <div className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {ADDRESS}
                </div>
              </div>
            </div>
          </div>

          <div className="review-card">
            <h3 className="font-serif text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('highlightsTitle')}
            </h3>
            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <span className="mt-1 h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--accent)' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* See all link */}
        <div className="mt-8 text-center">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
            style={{ color: 'var(--accent)' }}
            title={t('seeAll')}
          >
            {t('seeAll')}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </section>
    </div>
  );
}
