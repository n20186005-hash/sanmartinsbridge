import {notFound} from 'next/navigation';
import AttractionPage from '@/components/AttractionPage';
import {attractionSlugs, attractions, AttractionSlug, Locale} from '@/lib/attractions';
import {routing} from '@/i18n/routing';
import {SITE_URL} from '@/lib/site';
import {attractionPhotos} from '@/components/NearbyAttractions';
// The parent layout generates locales; this segment generates only attractions.
// Keep runtime rendering enabled for OpenNext cache misses. Both entry points
// below reject unknown locales and attraction slugs with notFound().
export function generateStaticParams() {
 return attractionSlugs.map(attraction => ({attraction}));
}
function valid(slug:string,locale:string):slug is AttractionSlug {return attractionSlugs.includes(slug as AttractionSlug)&&routing.locales.includes(locale as Locale);}
export async function generateMetadata({params}:{params:Promise<{locale:string;attraction:string}>}) {
 const {locale,attraction}=await params;if(!valid(attraction,locale))notFound();
 const a=attractions[attraction][locale as Locale];
 const path=`${locale==='es'?'':`/${locale}`}/${attraction}`;
 return {title:`${a.name} | Toledo`,description:a.intro,alternates:{canonical:path,languages:Object.fromEntries([...routing.locales.map(l=>[l,`${l==='es'?'':`/${l}`}/${attraction}`]),['x-default',`/${attraction}`]])},openGraph:{title:a.name,description:a.intro,url:`${SITE_URL}${path}`,images:[{url:attractionPhotos[attraction].src,alt:a.name}]},twitter:{card:'summary_large_image',title:a.name,description:a.intro,images:[attractionPhotos[attraction].src]}};
}
export default async function Page({params}:{params:Promise<{locale:string;attraction:string}>}) {const {locale,attraction}=await params;if(!valid(attraction,locale))notFound();return <AttractionPage slug={attraction} locale={locale as Locale}/>;}
