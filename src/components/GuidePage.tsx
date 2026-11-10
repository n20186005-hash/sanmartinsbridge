import { getLocale } from 'next-intl/server';
import { labels as attractionLabels, Locale } from '@/lib/attractions';
import { Link } from '@/i18n/navigation';
import { GuideContent } from '@/lib/guides';
import { MAPS_URL } from '@/lib/site';

interface GuidePageProps {
  content: GuideContent;
  homeHref: string;
  labels: {
    backHome: string;
    relatedGuides: string;
    mapsTitle: string;
    mapsDescription: string;
    mapsCta: string;
  };
}

export default async function GuidePage({ content, homeHref, labels }: GuidePageProps) {
  const locale = await getLocale() as Locale;
  const nearby = attractionLabels[locale];
  return (
    <div className="section" style={{paddingTop:'7rem'}}>
      <Link
        href={homeHref.replace(/^\/en(?=\/|$)/, '') || '/'}
        className="inline-flex items-center gap-2 mb-8 text-sm font-medium hover:opacity-70 transition-opacity"
        style={{ color: 'var(--accent)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        {labels.backHome}
      </Link>

      <header className="max-w-4xl mb-10">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
          {content.title}
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {content.intro}
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3 mb-12">
        {content.highlights.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border p-5"
            style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}
          >
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {item}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-10">
          {content.sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-serif text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                {section.title}
              </h2>
              {section.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mb-4 leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {paragraph}
                </p>
              ))}
              {section.items && (
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <span className="mt-2 h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--accent)' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <aside className="space-y-6">
          <section className="rounded-xl border p-5" style={{borderColor:'var(--border-color)'}}><h2 className="font-serif text-xl mb-4">{nearby.nearby}</h2><div className="space-y-4"><Link href="/san-juan-de-los-reyes" className="block underline">San Juan de los Reyes</Link><Link href="/santa-maria-la-blanca" className="block underline">Santa María la Blanca</Link></div></section>
          <div
            className="rounded-xl border p-5"
            style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}
          >
            <h2 className="font-serif text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              {labels.relatedGuides}
            </h2>
            <div className="space-y-4">
              {content.relatedLinks.map((link) => (
                <Link key={link.href} href={link.href.replace(/^\/en(?=\/|$)/, '') || '/'} className="block">
                  <div className="text-base font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
                    {link.title}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {link.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div
            className="rounded-xl border p-5"
            style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}
          >
            <h2 className="font-serif text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              {labels.mapsTitle}
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              {labels.mapsDescription}
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              {labels.mapsCta}
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
