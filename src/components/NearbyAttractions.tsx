import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { attractionSlugs, attractions, labels, Locale, AttractionSlug } from '@/lib/attractions';

export const attractionPhotos = {
  'san-juan-de-los-reyes': {src:'/nearby/san-juan-de-los-reyes-cloister.jpg', width:4000, height:3000, author:'Palickap', license:'CC BY-SA 4.0', licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/', source:'https://commons.wikimedia.org/wiki/File:Toledo,_Monasterio_de_San_Juan_de_los_Reyes,_cloister_05.jpg'},
  'santa-maria-la-blanca': {src:'/nearby/santa-maria-la-blanca-interior.jpg', width:3388, height:5140, author:'José Luiz Bernardes Ribeiro', license:'CC BY-SA 3.0', licenseUrl:'https://creativecommons.org/licenses/by-sa/3.0/', source:'https://commons.wikimedia.org/wiki/File:Interior_-_Santa_Mar%C3%ADa_la_Blanca_-_Toledo.JPG'}
};
export function PhotoCredit({slug}: {slug:AttractionSlug}) {
 const p=attractionPhotos[slug];
 return <figcaption className="text-xs mt-3" style={{color:'var(--text-muted)'}}>© {p.author} · <a className="underline" href={p.licenseUrl}>{p.license}</a> · <a className="underline" href={p.source}>Wikimedia Commons</a></figcaption>;
}
export default function NearbyAttractions({locale, exclude}: {locale:Locale; exclude?:AttractionSlug}) {
 const l=labels[locale];
 return <section id="nearby" className="section"><h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">{l.nearby}</h2><p className="max-w-3xl mb-8" style={{color:'var(--text-secondary)'}}>{l.nearbyIntro}</p><div className="grid md:grid-cols-2 gap-6">{attractionSlugs.filter(s=>s!==exclude).map(slug=>{const a=attractions[slug][locale];const p=attractionPhotos[slug];return <article key={slug} className="rounded-xl border overflow-hidden" style={{borderColor:'var(--border-color)',background:'var(--bg-secondary)'}}><Link href={`/${slug}`}><Image src={p.src} alt={a.name} width={p.width} height={p.height} className="w-full h-64 object-contain" sizes="(max-width:768px) 100vw, 50vw"/><div className="p-6 pb-0"><h3 className="font-serif text-2xl mb-3">{a.name}</h3><p className="leading-relaxed" style={{color:'var(--text-secondary)'}}>{a.intro}</p></div></Link><figure className="p-6 pt-1"><PhotoCredit slug={slug}/></figure></article>})}{exclude && <Link href="/" className="rounded-xl border p-8 flex flex-col justify-center" style={{borderColor:'var(--border-color)',background:'var(--bg-secondary)'}}><h3 className="font-serif text-2xl mb-3">{l.bridge}</h3><p style={{color:'var(--text-secondary)'}}>{l.home} →</p></Link>}</div></section>;
}
