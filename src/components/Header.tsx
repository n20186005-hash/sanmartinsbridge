'use client';
import { useLocale, useTranslations } from 'next-intl';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const t = useTranslations('header');
  const locale = useLocale();
  const homePath = locale === 'es' ? '' : `/${locale}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ backgroundColor: 'color-mix(in srgb, var(--bg-primary) 85%, transparent)' }}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href={`${homePath || '/'}#top`} className="font-serif text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
          San Martin's Bridge
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: 'var(--text-secondary)' }}>
          <a href={`${homePath || '/'}#about`} className="hover:opacity-70 transition-opacity">{t('home')}</a>
          <a href={`${homePath || '/'}#gallery`} className="hover:opacity-70 transition-opacity">{t('gallery')}</a>
          <a href={`${homePath || '/'}#reviews`} className="hover:opacity-70 transition-opacity">{t('reviews')}</a>
          <a href={`${homePath || '/'}#map`} className="hover:opacity-70 transition-opacity">{t('map')}</a>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
