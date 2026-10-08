import React from 'react';

export const WhatItDelivers: React.FC = () => {
  const bonuses = [
    {
      id: 'bonus-1',
      badge: 'BÔNUS Nº 1',
      name: '100 Atividades de Estimulação Cognitiva',
      image: 'https://i.imgur.com/w9rdGZW.jpeg',
      description: 'Acervo prático com 100 atividades para estimular atenção, memória, concentração e raciocínio infantil nas sessões.',
    },
    {
      id: 'bonus-2',
      badge: 'BÔNUS Nº 2',
      name: 'Cartas das Emoções — 50 Cartas Ilustradas',
      image: 'https://i.imgur.com/zzWMYcZ.jpeg',
      description: '50 cartas ilustradas com rostinhos e situações do dia a dia, utilizadas para ajudar a criança a reconhecer, apontar, escolher e nomear suas emoções.',
    },
    {
      id: 'bonus-3',
      badge: 'BÔNUS Nº 3',
      name: 'Termômetro das Emoções',
      image: 'https://i.imgur.com/j1Y8tNh.jpeg',
      description: 'Recurso visual ilustrado para ajudar a criança a identificar a intensidade das emoções e desenvolver a percepção e a regulação emocional.',
    },
    {
      id: 'bonus-4',
      badge: 'BÔNUS Nº 4',
      name: 'Guia de Conversa com os Pais',
      image: 'https://i.imgur.com/xqQSyr2.jpeg',
      description: 'Guia de apoio para profissionais, contendo um modelo de devolutiva e orientações para facilitar a comunicação com os responsáveis pela criança.',
    },
  ];

  return (
    <section 
      id="bonus-exclusivos"
      aria-label="Bônus exclusivos inclusos"
      className="py-12 sm:py-20 px-4 sm:px-6 bg-transparent"
    >
      <div className="max-w-[960px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-9 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#EDF4FC] text-[#1E56A0] px-3.5 py-1.5 rounded-full border border-[#93B8E8]/40 text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 shadow-xs">
            <span className="text-base leading-none">🎁</span>
            <span>BÔNUS EXCLUSIVOS</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#1E2530] tracking-tight leading-tight">
            E tem mais! Leve também:
          </h2>
        </div>

        {/* 2x2 Bonuses Grid com Imagens em Proporção Confortável e Visível */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {bonuses.map((bonus) => (
            <div 
              key={bonus.id}
              id={`bonus-card-${bonus.id}`}
              className="bg-white rounded-[20px] sm:rounded-[26px] p-5 sm:p-6 border border-[#E1ECF7] shadow-[0_5px_20px_rgba(30,86,160,0.06)] hover:shadow-[0_10px_28px_rgba(30,86,160,0.11)] hover:-translate-y-1 transition-all duration-300 relative flex flex-col items-center text-center justify-between group"
            >
              {/* Top Badge */}
              <div className="w-full flex justify-end mb-1.5 sm:mb-2">
                <span className="bg-[#EDF4FC] text-[#1E56A0] text-[10px] sm:text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border border-[#93B8E8]/30">
                  {bonus.badge}
                </span>
              </div>

              {/* Moldura da Imagem (Tamanho equilibrado: bem visível sem ser gigante) */}
              <div className="w-[190px] min-[380px]:w-[220px] min-[440px]:w-[240px] sm:w-[250px] md:w-[260px] aspect-square rounded-[16px] sm:rounded-[20px] overflow-hidden bg-[#FAF8F5] border border-[#E1ECF7] p-2 sm:p-2.5 shadow-xs group-hover:border-[#1E56A0]/40 group-hover:shadow-[0_6px_20px_rgba(30,86,160,0.12)] group-hover:scale-[1.02] transition-all duration-300 flex items-center justify-center my-1.5 sm:my-2">
                <img 
                  src={bonus.image} 
                  alt={bonus.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain rounded-[12px] sm:rounded-[15px] select-none block"
                  loading="lazy"
                />
              </div>

              {/* Text Details */}
              <div className="mt-3 sm:mt-4 w-full">
                <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-[#1E56A0] tracking-tight leading-snug mb-1.5">
                  {bonus.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#5A6578] leading-relaxed max-w-sm mx-auto">
                  {bonus.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner Below Cards */}
        <div 
          id="deliveries-highlight-banner"
          className="mt-8 sm:mt-10 max-w-[460px] mx-auto bg-gradient-to-b from-[#235DA8] to-[#17427A] border border-[#3472C2] rounded-[20px] sm:rounded-[22px] py-4 sm:py-5 px-5 sm:px-7 text-center shadow-[0_8px_24px_rgba(30,86,160,0.24)]"
        >
          {/* Top Label */}
          <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] text-[#FAF8F5]/90 uppercase mb-0.5">
            VALOR TOTAL DOS BÔNUS
          </p>

          {/* Strikethrough Value */}
          <p className="text-base sm:text-lg md:text-xl font-bold text-[#FAF8F5]/70 line-through decoration-[#FAF8F5]/60 decoration-2 mb-1">
            R$ 97,24
          </p>

          {/* Main Action Line */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap text-base sm:text-lg md:text-xl font-extrabold text-white tracking-tight">
            <span>Inclusos</span>
            <span className="bg-white text-[#1E56A0] px-2.5 py-0.5 rounded-[7px] shadow-2xs uppercase font-black text-xs sm:text-sm tracking-wide">
              GRÁTIS
            </span>
            <span>no Completo!</span>
          </div>
        </div>

      </div>
    </section>
  );
};
