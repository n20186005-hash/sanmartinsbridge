'use client';
import { useTranslations } from 'next-intl';
export default function Practical() {
 const t=useTranslations('practical');
 return <section id="visit" className="section scroll-mt-24"><h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">{t('title')}</h2><dl className="mb-10"><dt className="font-semibold mb-2">{t('address.label')}</dt><dd style={{color:'var(--text-secondary)'}}>{t('address.value')}</dd></dl><p className="mb-3" style={{color:'var(--text-secondary)'}}>{t('type')}</p><p className="mb-4" style={{color:'var(--text-secondary)'}}>{t('duration')}</p><a className="underline block mb-10" href="https://turismo.toledo.es/recursos/id1493-puente-de-san-martin.html">Turismo Toledo →</a>{(['hours','transport'] as const).map(field=><section key={field} className="mb-10"><h2 className="font-serif text-3xl font-bold mb-4">{t(`${field}.label`)}</h2><p className="leading-relaxed max-w-4xl" style={{color:'var(--text-secondary)'}}>{t(`${field}.value`)}</p></section>)}<h3 className="font-serif text-xl mb-3">{t('accessibility.label')}</h3><p className="max-w-4xl leading-relaxed" style={{color:'var(--text-secondary)'}}>{t('accessibility.value')}</p></section>;
}
