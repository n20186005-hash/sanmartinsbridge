'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function About() {
  const t = useTranslations('about');
  const highlights: string[] = t.raw('highlights.items');
  const visitPlanning: string[] = t.raw('visitPlanning.items');
  const guideLinks: Array<{ title: string; description: string; href: string }> = t.raw('guideLinks.items');

  return (
    <section id="about" className="section">
      <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
        {t('title')}
      </h2>
      <p className="text-lg leading-relaxed mb-8 max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
        {t('description')}
      </p>

      {guideLinks.length > 0 && (
        <>
          <h3 className="font-serif text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
            {t('guideLinks.title')}
          </h3>
          <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
            {guideLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="rounded-xl border p-5 transition-opacity hover:opacity-80"
                style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}
              >
                <div className="font-serif text-xl mb-2" style={{ color: 'var(--text-primary)' }}>
                  {item.title}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
