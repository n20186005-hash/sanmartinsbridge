'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { GALLERY_IMAGES, MAPS_URL } from '@/lib/site';

export default function Gallery() {
  const t = useTranslations('gallery');
  const images = t.raw('images') as Array<{ alt: string; caption: string }>;
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const closeLightbox = () => setLightboxImage(null);

  return (
    <section id="gallery" className="section">
      <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
        {t('title')}
      </h2>
      <p className="mb-8" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={12}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="gallery-swiper"
        >
          {GALLERY_IMAGES.map((src, i) => (
            <SwiperSlide key={i}>
              <div 
                className="gallery-item cursor-pointer"
                onDoubleClick={() => setLightboxImage(src)}
              >
                <Image
                  src={src} 
                  alt={images[i]?.alt ?? t('title')}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="w-full h-full object-cover select-none"
                />
                <div className="caption">
                  {images[i]?.caption ?? `${t('title')} ${i + 1}`}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <p className="mt-6 text-sm text-center" style={{ color: 'var(--text-muted)' }}>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent)' }}
          className="hover:underline"
        >
          {t('viewAll')}
        </a>
      </p>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-pointer"
          onClick={closeLightbox}
          style={{ backdropFilter: 'blur(4px)' }}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 p-2"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <Image
              src={lightboxImage} 
              alt="Enlarged view" 
              width={1600}
              height={1200}
              className="max-w-full max-h-full object-contain shadow-2xl rounded-lg cursor-default"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </div>
        </div>
      )}
    </section>
  );
}
