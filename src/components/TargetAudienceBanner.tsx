import React, { memo } from 'react';

export const TargetAudienceBanner: React.FC = memo(() => {
  const audiences = [
    'Psicólogos(as)',
    'Psicopedagogos(as)',
    'Terapeutas Ocupacionais',
    'Educadores(as)',
    'Pais e Mães',
  ];

  const renderBannerSegment = (isAriaHidden = false) => (
    <div 
      className="flex items-center gap-3.5 sm:gap-5 shrink-0 pr-10 sm:pr-14 text-white font-bold text-sm sm:text-[15px] md:text-base tracking-wide whitespace-nowrap select-none"
      aria-hidden={isAriaHidden}
    >
      {/* Título sem emoji e sem bordas arredondadas */}
      <span className="font-extrabold uppercase text-xs sm:text-[13.5px] md:text-sm tracking-wider text-white">
        FEITO PARA QUEM CUIDA DO DESENVOLVIMENTO INFANTIL:
      </span>

      {/* Profissões e responsáveis com separadores */}
      {audiences.map((item, index) => (
        <React.Fragment key={index}>
          <span className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.18)] font-semibold">
            {item}
          </span>
          <span className="text-white/70 text-xs sm:text-sm" aria-hidden="true">
            •
          </span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div 
      id="faixa-publico-alvo"
      role="region"
      aria-label="Público-alvo do Jornal das Emoções"
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#0284C7] border-y border-[#38BDF8]/40 shadow-[0_2px_12px_rgba(2,132,199,0.22)] py-4 sm:py-5 md:py-5.5 rounded-none select-none"
      style={{ contain: 'paint' }}
    >
      {/* Sombras suaves nas laterais para entrada e saída harmônica sem bordas arredondadas */}
      <div 
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#0284C7] to-transparent z-10" 
        aria-hidden="true"
      />
      <div 
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#0284C7] to-transparent z-10" 
        aria-hidden="true"
      />

      {/* Carrossel contínuo em linha reta infinita acelerado por GPU */}
      <div className="flex w-max animate-banner-carousel items-center">
        {renderBannerSegment(false)}
        {renderBannerSegment(false)}
        {renderBannerSegment(true)}
        {renderBannerSegment(true)}
      </div>
    </div>
  );
});
