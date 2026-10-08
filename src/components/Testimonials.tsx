import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Maximize2, X } from 'lucide-react';

export interface TestimonialImageItem {
  id: string;
  directUrl: string;
  originalLink: string;
  alt: string;
  label: string;
}

export const testimonialList: TestimonialImageItem[] = [
  {
    id: 'dep-1',
    directUrl: 'https://i.imgur.com/9efrp1L.jpeg',
    originalLink: 'https://imgur.com/a/9ExOobb',
    alt: 'Depoimento real de profissional sobre o Jornal das Emoções',
    label: 'Depoimento 1',
  },
  {
    id: 'dep-2',
    directUrl: 'https://i.imgur.com/W5FShW3.jpeg',
    originalLink: 'https://imgur.com/a/TynEO8Y',
    alt: 'Depoimento real elogiando a leveza e criatividade do material no atendimento infantil',
    label: 'Depoimento 2',
  },
  {
    id: 'dep-3',
    directUrl: 'https://i.imgur.com/M47RCe6.jpeg',
    originalLink: 'https://imgur.com/a/gpzAMjS',
    alt: 'Feedback espontâneo sobre o vínculo e expressão emocional das crianças',
    label: 'Depoimento 3',
  },
  {
    id: 'dep-4',
    directUrl: 'https://i.imgur.com/uOLBd8i.jpeg',
    originalLink: 'https://imgur.com/a/Zqfv37s',
    alt: 'Relato real sobre a praticidade das atividades prontas na sessão',
    label: 'Depoimento 4',
  },
  {
    id: 'dep-5',
    directUrl: 'https://i.imgur.com/7DxXsi3.jpeg',
    originalLink: 'https://imgur.com/a/3bV2k4s',
    alt: 'Depoimento real recomendando o Jornal das Emoções',
    label: 'Depoimento 5',
  },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomModalIndex, setZoomModalIndex] = useState<number | null>(null);

  // Touch swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialList.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === testimonialList.length - 1 ? 0 : prev + 1));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (zoomModalIndex !== null) {
        if (e.key === 'Escape') setZoomModalIndex(null);
        if (e.key === 'ArrowLeft') {
          setZoomModalIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : testimonialList.length - 1));
        }
        if (e.key === 'ArrowRight') {
          setZoomModalIndex((prev) => (prev !== null && prev < testimonialList.length - 1 ? prev + 1 : 0));
        }
        return;
      }

      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext, zoomModalIndex]);

  // Touch swipe handlers
  const minSwipeDistance = 45;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <section 
      id="depoimentos"
      aria-label="Depoimentos reais de alunos e profissionais"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-transparent overflow-hidden select-none"
    >
      <div className="max-w-[1140px] mx-auto">
        
        {/* Header da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#EDF4FC] text-[#1E56A0] px-3.5 py-1.5 rounded-full border border-[#93B8E8]/40 text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 shadow-xs">
            <span className="text-base leading-none">💬</span>
            <span>PROVA SOCIAL REAL</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-extrabold text-[#1E2530] tracking-tight leading-tight">
            Quem já viu, aprovou
          </h2>
          
          <p className="mt-2 text-sm sm:text-base text-[#5A6578] leading-relaxed max-w-xl mx-auto">
            Veja relatos reais de psicólogos e profissionais que já utilizam e recomendam o Jornal das Emoções nos atendimentos.
          </p>

          {/* Rating Badge */}
          <div className="mt-3.5 inline-flex items-center gap-1.5 bg-white px-4 py-1.5 rounded-full border border-[#E1ECF7] shadow-xs text-xs sm:text-sm font-bold text-[#1E2530]">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-[#1E56A0] ml-1">4.9/5</span>
            <span className="text-[#5A6578] font-normal">&bull; Satisfação comprovada</span>
          </div>
        </div>

        {/* 3D Coverflow Carousel Container */}
        <div 
          className="relative w-full max-w-[960px] mx-auto h-[510px] min-[400px]:h-[560px] sm:h-[600px] md:h-[630px] flex items-center justify-center touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          
          {/* Botão Anterior (Design Circular Escuro Fiel à Referência) */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Depoimento anterior"
            className="absolute left-1 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#273244] hover:bg-[#1B2433] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.32)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Botão Próximo (Design Circular Escuro Fiel à Referência) */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Próximo depoimento"
            className="absolute right-1 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#273244] hover:bg-[#1B2433] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.32)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Cards Stack (Center active, left and right visible behind with click-to-activate) */}
          <div className="relative w-full h-full flex items-center justify-center">
            {testimonialList.map((item, index) => {
              const total = testimonialList.length;
              let diff = (index - currentIndex) % total;
              if (diff > total / 2) diff -= total;
              if (diff < -total / 2) diff += total;

              const isCenter = diff === 0;
              const isLeft = diff === -1;
              const isRight = diff === 1;

              // Hide cards that are beyond left/right
              if (!isCenter && !isLeft && !isRight) {
                return null;
              }

              let transformClass = '';
              let zIndexClass = 'z-10';
              let opacityClass = 'opacity-35 hover:opacity-70 cursor-pointer filter brightness-95';

              if (isCenter) {
                transformClass = 'translate-x-0 scale-100';
                zIndexClass = 'z-30';
                opacityClass = 'opacity-100 shadow-[0_20px_50px_rgba(0,0,0,0.22)] cursor-pointer filter brightness-100';
              } else if (isLeft) {
                transformClass = '-translate-x-[52%] sm:-translate-x-[64%] md:-translate-x-[72%] scale-[0.82] sm:scale-[0.85]';
                zIndexClass = 'z-10';
              } else if (isRight) {
                transformClass = 'translate-x-[52%] sm:translate-x-[64%] md:translate-x-[72%] scale-[0.82] sm:scale-[0.85]';
                zIndexClass = 'z-10';
              }

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (isLeft) {
                      handlePrev();
                    } else if (isRight) {
                      handleNext();
                    } else if (isCenter) {
                      setZoomModalIndex(index);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={
                    isCenter 
                      ? 'Depoimento atual. Clique para ampliar.' 
                      : isLeft 
                      ? 'Clique para ir ao depoimento anterior.' 
                      : 'Clique para ir ao próximo depoimento.'
                  }
                  className={`absolute top-1/2 -translate-y-1/2 transition-all duration-400 ease-out origin-center w-[250px] min-[400px]:w-[275px] sm:w-[305px] md:w-[325px] ${transformClass} ${zIndexClass} ${opacityClass}`}
                >
                  {/* Smartphone Frame Container */}
                  <div className="relative aspect-[941/1672] w-full rounded-[22px] sm:rounded-[26px] overflow-hidden bg-white border border-[#C8D9EE]/70 shadow-lg group">
                    <img
                      src={item.directUrl}
                      alt={item.alt}
                      referrerPolicy="no-referrer"
                      loading={isCenter ? 'eager' : 'lazy'}
                      className="w-full h-full object-contain block bg-[#FAF8F5]"
                    />

                    {/* Dica de clique para ampliar no card central */}
                    {isCenter && (
                      <div className="absolute inset-0 bg-[#1E56A0]/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-[#1E56A0] text-xs font-bold shadow-md transform translate-y-1 group-hover:translate-y-0 transition-transform">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Clique para ampliar</span>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Dots Pagination */}
        <div className="mt-5 flex flex-col items-center justify-center gap-2.5">
          <div className="flex items-center justify-center gap-2">
            {testimonialList.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setCurrentIndex(dotIdx)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === dotIdx ? 'w-8 bg-[#1E56A0]' : 'w-2.5 bg-[#C8D9EE] hover:bg-[#93B8E8]'
                }`}
                aria-label={`Ir para depoimento ${dotIdx + 1}`}
              />
            ))}
          </div>

          <p className="text-xs text-[#7B8798] flex items-center gap-1.5">
            <span>👆</span>
            <span>Clique nos depoimentos laterais ou nas setas para navegar</span>
          </p>
        </div>

      </div>

      {/* Modal Lightbox de Zoom para Leitura Completa */}
      {zoomModalIndex !== null && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada do depoimento"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setZoomModalIndex(null)}
        >
          {/* Modal Container */}
          <div 
            className="relative max-w-[480px] w-full max-h-[92vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              type="button"
              onClick={() => setZoomModalIndex(null)}
              aria-label="Fechar visualização"
              className="absolute -top-12 right-0 text-white/90 hover:text-white bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-md transition-all cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Image Box */}
            <div className="relative w-full max-h-[82vh] rounded-[22px] sm:rounded-[28px] overflow-hidden bg-white shadow-2xl border border-white/20 flex items-center justify-center p-2">
              <img
                src={testimonialList[zoomModalIndex].directUrl}
                alt={testimonialList[zoomModalIndex].alt}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[80vh] object-contain rounded-[16px] sm:rounded-[22px]"
              />
            </div>

            {/* Bottom Modal Navigation */}
            <div className="mt-3 flex items-center justify-between w-full text-white text-xs px-2">
              <button
                type="button"
                onClick={() => setZoomModalIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : testimonialList.length - 1))}
                className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
              </button>

              <span className="font-semibold text-white/80">
                {zoomModalIndex + 1} de {testimonialList.length}
              </span>

              <button
                type="button"
                onClick={() => setZoomModalIndex((prev) => (prev !== null && prev < testimonialList.length - 1 ? prev + 1 : 0))}
                className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer"
              >
                <span>Próximo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
