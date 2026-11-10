'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { HERO_IMAGE, MAPS_URL } from '@/lib/site';

export default function Hero() {
  const t = useTranslations('hero');

  const tags: string[] = t.raw('tags');

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt={t('title')}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'var(--hero-overlay)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto pt-16">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 leading-tight">
          {t('title')}
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-6 font-light">
          {t('subtitle')}
        </p>

        {/* Google Maps link */}
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium hover:bg-white/30 transition-colors mb-8"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          {t('openMaps')}
        </a>

        <div className="flex flex-wrap justify-center gap-5 text-sm underline mb-8"><a href="#visit">{t('visit')}</a><a href="#map">{t('map')}</a><a href="#nearby">{t('nearby')}</a></div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2">
          {tags.map((tag: string, i: number) => (
            <span key={i} className="px-3 py-1 bg-white/15 backdrop-blur-sm rounded-full text-xs font-medium tracking-wide">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
    </section>
  );
}
