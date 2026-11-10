import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import NearbyAttractions, { attractionPhotos, PhotoCredit } from './NearbyAttractions';
import { durationAdvice, attractions, labels, sources, Locale, AttractionSlug } from '@/lib/attractions';
import { SITE_URL } from '@/lib/site';

export default function AttractionPage({slug,locale}: {slug:AttractionSlug;locale:Locale}) {
 const a=attractions[slug][locale], l=labels[locale], photo=attractionPhotos[slug];
 const mapQuery=encodeURIComponent(a.address);
 const pageUrl=`${SITE_URL}${locale==='es'?'':`/${locale}`}/${slug}`;
 const structuredData=[{'@context':'https://schema.org','@type':'TouristAttraction',name:a.name,description:a.intro,url:pageUrl,image:`${SITE_URL}${photo.src}`,address:{'@type':'PostalAddress',streetAddress:a.address,addressLocality:'Toledo',addressCountry:'ES'},sameAs:sources[slug].map(s=>s.url)}, {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:l.bridge,item:`${SITE_URL}${locale==='es'?'':`/${locale}`}`},{'@type':'ListItem',position:2,name:a.name,item:pageUrl}]}];
 const block=(title:string,paragraphs:string[]) => <section className="mb-10"><h2 className="font-serif text-3xl font-bold mb-5">{title}</h2>{paragraphs.map(p=><p key={p} className="leading-relaxed mb-4" style={{color:'var(--text-secondary)'}}>{p}</p>)}</section>;
 return <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/>
 <div className="section" style={{paddingTop:'7rem'}}><Link href="/" className="text-sm underline" style={{color:'var(--accent)'}}>← {l.home}</Link><header className="max-w-4xl mt-8 mb-10"><h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">{a.name}</h1><p className="text-lg leading-relaxed" style={{color:'var(--text-secondary)'}}>{a.intro}</p><nav className="flex flex-wrap gap-5 mt-6 text-sm underline" aria-label={a.name}><a href="#visit">{l.visit}</a><a href="#map">{l.maps}</a><a href="#nearby">{l.nearby}</a></nav></header>
 <figure className="mb-14 rounded-xl overflow-hidden"><Image src={photo.src} alt={a.name} width={photo.width} height={photo.height} sizes="(max-width:1024px) 100vw, 1000px" className="w-full max-h-[650px] object-contain" priority/><PhotoCredit slug={slug}/></figure>
 <section className="mb-14"><h2 className="font-serif text-3xl font-bold mb-7">{l.explore}</h2><h3 className="font-serif text-2xl mb-4">{l.tips}</h3><p className="mb-8 leading-relaxed" style={{color:'var(--text-secondary)'}}>{a.highlights[2].text}</p><h3 className="font-serif text-2xl mb-4">{l.features}</h3><div className="grid md:grid-cols-2 gap-6">{a.highlights.slice(0,2).map(h=><article key={h.title} className="border rounded-xl p-6" style={{borderColor:'var(--border-color)',background:'var(--bg-secondary)'}}><h4 className="font-serif text-xl font-semibold mb-3">{h.title}</h4><p className="leading-relaxed" style={{color:'var(--text-secondary)'}}>{h.text}</p></article>)}</div></section>
 {block(l.about,[a.about])}
 <section className="mb-10"><h2 className="font-serif text-3xl font-bold mb-5">{l.basic}</h2><p style={{color:'var(--text-secondary)'}}>{a.address}</p><p className="mt-3" style={{color:'var(--text-secondary)'}}>{l.type}</p><p className="mt-3" style={{color:'var(--text-secondary)'}}>{durationAdvice[slug][locale]}</p><a className="underline inline-block mt-4" href={sources[slug][sources[slug].length-1].url}>Toledo Monumental →</a></section>
 <div id="visit" className="scroll-mt-24">{block(l.visit,a.visit)}</div>{block(l.transport,a.transport)}
 <h2 className="font-serif text-3xl font-bold mb-5">{l.mapSection}</h2><div id="map" className="map-container mb-5 scroll-mt-24"><iframe title={`${l.maps}: ${a.name}`} src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`} width="900" height="450" loading="lazy" style={{border:0}} referrerPolicy="no-referrer-when-downgrade"/></div><a className="btn-primary mb-12 inline-flex" href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noopener noreferrer">{l.maps}</a>
 {block(l.culture,a.culture)}{block(l.route,a.route)}
 </div><NearbyAttractions locale={locale} exclude={slug}/><div className="section"><section className="border-t pt-8" style={{borderColor:'var(--border-color)'}}><h2 className="font-serif text-2xl mb-4">{l.sources}</h2><ul className="space-y-3">{sources[slug].map(s=><li key={s.url}><a className="underline" style={{color:'var(--accent)'}} href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a></li>)}{slug==='santa-maria-la-blanca'&&<li><a className="underline" style={{color:'var(--accent)'}} href="https://www.cultura.gob.es/msefardi/visita/horario.html">Museo Sefardí</a></li>}</ul><p className="text-sm mt-5" style={{color:'var(--text-muted)'}}>{l.checked}</p></section></div>
 </>;
}
