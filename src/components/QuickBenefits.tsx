import React from 'react';
import { Check } from 'lucide-react';

export const QuickBenefits: React.FC = () => {
  const benefitCards = [
    // 2 cards sobre o material e benefícios para o paciente
    {
      id: 'benefit-assuntos-1',
      text: 'Mais de 100 emoções apresentadas de forma leve e criativa para a criança reconhecer e dar nome ao que sente',
    },
    {
      id: 'benefit-assuntos-2',
      text: 'Espaço acolhedor para desabafar, estimular bons sentimentos, lidar com os difíceis e se expressar melhor',
    },
    // 2 cards apontando vantagens para o psicólogo
    {
      id: 'benefit-vantagem-1',
      text: 'Conduza a sessão com mais clareza, fortaleça o vínculo e entenda o que se passa por dentro da criança',
    },
    {
      id: 'benefit-vantagem-2',
      text: 'Material pronto e profissional para usar dentro e fora da sessão, sem precisar criar atividades do zero',
    },
  ];

  return (
    <section 
      id="beneficios" 
      aria-label="Benefícios do Jornal das Emoções"
      className="py-14 sm:py-20 px-4 sm:px-6 bg-transparent overflow-hidden"
    >
      <div className="max-w-[980px] mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-9 sm:mb-12">
          <h2 
            id="heading-assuntos-abordados"
            className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#1E2530] tracking-tight leading-tight"
          >
            Com esse material você <span className="text-[#1E56A0]">tem acesso a:</span>
          </h2>
          {/* Centered Accent Bar */}
          <div className="w-12 h-1 bg-[#1E56A0] mx-auto mt-3.5 sm:mt-4 rounded-full" />
        </div>

        {/* CONTAINER DOS CARDS COM A ÁRVORE PIXELADA EM TOM AZUL */}
        <div className="relative py-4 sm:py-6 md:py-8">
          
          {/* ÁRVORE EM DESIGN PIXELADO - TAMANHO VERTICAL AUMENTADO */}
          <div 
            className="absolute -top-6 min-[400px]:-top-10 sm:-top-14 md:-top-16 -bottom-6 min-[400px]:-bottom-10 sm:-bottom-14 md:-bottom-16 left-1/2 -translate-x-1/2 pointer-events-none z-0 select-none flex items-center justify-center w-[340px] min-[400px]:w-[420px] sm:w-[560px] md:w-[720px] lg:w-[840px] h-[calc(100%+48px)] min-[400px]:h-[calc(100%+80px)] sm:h-[calc(100%+112px)] md:h-[calc(100%+128px)]" 
            aria-hidden="true"
          >
            <img 
              src="/images/tall-pixel-tree-420.webp" 
              srcSet="/images/tall-pixel-tree-420.webp 420w, /images/tall-pixel-tree-768.webp 768w"
              sizes="(max-width: 640px) 420px, 768px"
              width={768}
              height={1376}
              alt=""
              className="w-full h-full object-fill sm:object-contain mix-blend-multiply opacity-80 sm:opacity-85 md:opacity-90"
              style={{
                filter: 'hue-rotate(-60deg) drop-shadow(0 10px 28px rgba(30,86,160,0.20)) contrast(1.06)',
              }}
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* OS 4 CARDS EM PRIMEIRO PLANO */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5 md:gap-x-14 lg:gap-x-18 md:gap-y-6">
            {benefitCards.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="bg-white/95 backdrop-blur-xs rounded-[16px] sm:rounded-[20px] p-5 sm:p-6 border border-[#E1ECF7] shadow-[0_4px_18px_rgba(30,86,160,0.06)] hover:border-[#1E56A0]/40 hover:shadow-[0_8px_24px_rgba(30,86,160,0.12)] transition-all duration-200 flex items-center gap-4 sm:gap-5"
              >
                {/* Soft Green Rounded Box with Green Check */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>

                {/* Text com fonte e tamanho idênticos aos anteriores */}
                <p className="text-sm sm:text-base font-semibold text-[#1E2530] leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Big Rounded Banner */}
        <div 
          id="benefits-highlight-box"
          className="mt-6 sm:mt-8 bg-[#1E56A0] text-white rounded-[18px] sm:rounded-[24px] p-6 sm:p-7 text-center shadow-[0_10px_28px_rgba(30,86,160,0.2)] border border-[#3B73B9]/40"
        >
          <p className="text-sm sm:text-base md:text-lg font-bold leading-relaxed max-w-2xl mx-auto">
            Não é mais uma atividade genérica: o jornal ajuda a criança a transformar o que sente em palavras
          </p>
        </div>

      </div>
    </section>
  );
};
