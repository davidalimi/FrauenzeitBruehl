import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Building2 } from 'lucide-react';
import { SectionBackToTop } from './SectionBackToTop';

interface PraxisPhoto {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
}

export function PraxisSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const photos: PraxisPhoto[] = [
    {
      id: 'empfang',
      title: 'Empfang & Willkommensbereich',
      category: 'Empfang & Anmeldung',
      image: `${import.meta.env.BASE_URL}assets/praxis/empfang.png`,
      alt: 'Moderner, heller Empfangsbereich der Praxis Frauenzeit Brühl in der Mühlenstraße'
    },
    {
      id: 'wartebereich',
      title: 'Wartebereich & Spielecke',
      category: 'Wartebereich',
      image: `${import.meta.env.BASE_URL}assets/praxis/wartebereich.png`,
      alt: 'Heller, freundlicher Wartebereich mit Holzbänken, Zeitschriften und Spielecke für Kinder'
    },
    {
      id: 'untersuchung',
      title: 'Ultraschall- & Untersuchungszimmer',
      category: 'Diagnostik & Untersuchung',
      image: `${import.meta.env.BASE_URL}assets/praxis/ultraschall.png`,
      alt: 'Helles Untersuchungszimmer mit modernem Samsung Ultraschallgerät, Untersuchungsstuhl und Laborplatz'
    }
  ];

  // Auto advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, photos.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const currentPhoto = photos[currentIndex];

  return (
    <section id="praxis" className="relative pt-8 sm:pt-12 pb-16 sm:pb-24 border-b border-[#F0E6E8] bg-[#FAF5F6]/40 scroll-mt-24 xl:scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl text-left pb-8">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-pink-900">
            <Building2 className="h-3.5 w-3.5" />
            <span>Praxis · Mühlenstrasse 37 · 50321 Brühl</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#2B2326] sm:text-3xl lg:text-4xl">
            Unsere Praxis
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5C4A4F] leading-relaxed">
            Einblicke in unsere Praxisräume in der Mühlenstraße.
          </p>
        </div>

        {/* Simple Photo Carousel */}
        <div 
          className="relative overflow-hidden rounded-3xl border border-[#E8D2D7] bg-white shadow-md group"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Photo Display */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full max-h-[540px] overflow-hidden bg-neutral-900">
            <img
              src={currentPhoto.image}
              alt={currentPhoto.alt}
              className="h-full w-full object-cover transition-all duration-700"
              onError={(e) => {
                const target = e.currentTarget;
                const imgSrc = currentPhoto.image;
                if (imgSrc && !target.src.includes('public/')) {
                  const rel = imgSrc.startsWith('/') ? imgSrc.slice(1) : imgSrc;
                  target.src = `./public/${rel}`;
                }
              }}
            />

            {/* Subtle Gradient for Caption Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

            {/* Left / Right Chevron Navigation Buttons (shown when multiple photos exist) */}
            {photos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#2B2326] shadow-md hover:bg-white hover:text-pink-900 hover:scale-105 active:scale-95 transition-all cursor-pointer backdrop-blur-xs"
                  aria-label="Vorheriges Bild"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#2B2326] shadow-md hover:bg-white hover:text-pink-900 hover:scale-105 active:scale-95 transition-all cursor-pointer backdrop-blur-xs"
                  aria-label="Nächstes Bild"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            {/* Caption on the Image - Clean Minimal Look */}
            <div className="absolute bottom-5 left-5 right-5 text-left text-white">
              <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-white drop-shadow-md">
                {currentPhoto.title}
              </h3>
            </div>
          </div>

          {/* Dots Indicator (shown when multiple photos exist) */}
          {photos.length > 1 && (
            <div className="py-4 bg-[#FAF5F6] border-t border-[#F0E6E8] flex items-center justify-center gap-2">
              {photos.map((photo, idx) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(idx);
                  }}
                  className={`transition-all rounded-full cursor-pointer ${
                    currentIndex === idx
                      ? 'w-8 h-2.5 bg-pink-900'
                      : 'w-2.5 h-2.5 bg-[#D4C3C7] hover:bg-pink-400'
                  }`}
                  aria-label={`Gehe zu Bild ${idx + 1}: ${photo.title}`}
                />
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Discreet corner up arrow */}
      <SectionBackToTop />
    </section>
  );
}
