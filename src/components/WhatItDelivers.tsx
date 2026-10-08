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

  // SVG paths para as 4 peças de quebra-cabeça 2x2 (viewBox 0 0 200 200, com pinos externos indo até 232 e recortes internos entrando até 32)
  const puzzlePaths = [
    // Peça 1 (Superior Esquerda): Topo reto, Esquerda reta, Direita com PINO para fora, Base com PINO para fora
    `M 16,0 L 184,0 Q 200,0 200,16 L 200,74 C 200,80 196,84 210,80 C 222,74 232,84 232,100 C 232,116 222,126 210,120 C 196,116 200,120 200,126 L 200,184 Q 200,200 184,200 L 126,200 C 120,200 116,196 120,210 C 126,222 116,232 100,232 C 84,232 74,222 80,210 C 84,196 80,200 74,200 L 16,200 Q 0,200 0,184 L 0,16 Q 0,0 16,0 Z`,

    // Peça 2 (Superior Direita): Topo reto, Direita reta, Base com PINO para fora, Esquerda com RECORTE para dentro
    `M 16,0 L 184,0 Q 200,0 200,16 L 200,184 Q 200,200 184,200 L 126,200 C 120,200 116,196 120,210 C 126,222 116,232 100,232 C 84,232 74,222 80,210 C 84,196 80,200 74,200 L 16,200 Q 0,200 0,184 L 0,126 C 0,120 -4,116 10,120 C 22,126 32,116 32,100 C 32,84 22,74 10,80 C -4,84 0,80 0,74 L 0,16 Q 0,0 16,0 Z`,

    // Peça 3 (Inferior Esquerda): Topo com RECORTE para dentro, Direita com PINO para fora, Base reta, Esquerda reta
    `M 16,0 L 74,0 C 80,0 84,-4 80,10 C 74,22 84,32 100,32 C 116,32 126,22 120,10 C 116,-4 120,0 126,0 L 184,0 Q 200,0 200,16 L 200,74 C 200,80 196,84 210,80 C 222,74 232,84 232,100 C 232,116 222,126 210,120 C 196,116 200,120 200,126 L 200,184 Q 200,200 184,200 L 16,200 Q 0,200 0,184 L 0,16 Q 0,0 16,0 Z`,

    // Peça 4 (Inferior Direita): Topo com RECORTE para dentro, Direita reta, Base reta, Esquerda com RECORTE para dentro
    `M 16,0 L 74,0 C 80,0 84,-4 80,10 C 74,22 84,32 100,32 C 116,32 126,22 120,10 C 116,-4 120,0 126,0 L 184,0 Q 200,0 200,16 L 200,184 Q 200,200 184,200 L 16,200 Q 0,200 0,184 L 0,126 C 0,120 -4,116 10,120 C 22,126 32,116 32,100 C 32,84 22,74 10,80 C -4,84 0,80 0,74 L 0,16 Q 0,0 16,0 Z`,
  ];

  return (
    <section 
      id="bonus-exclusivos"
      aria-label="Bônus exclusivos inclusos"
      className="py-12 sm:py-18 px-3 sm:px-6 bg-transparent"
    >
      <div className="max-w-[780px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 bg-[#EDF4FC] text-[#1E56A0] px-3.5 py-1.5 rounded-full border border-[#93B8E8]/40 text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 shadow-xs">
            <span className="text-base leading-none">🎁</span>
            <span>BÔNUS EXCLUSIVOS</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#1E2530] tracking-tight leading-tight">
            E tem mais! Leve também:
          </h2>
        </div>

        {/* 2x2 Jigsaw Puzzle Grid */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 max-w-[750px] mx-auto">
          {bonuses.map((bonus, index) => {
            const hasTopSocket = index === 2 || index === 3;
            const hasLeftSocket = index === 1 || index === 3;
            const zIndexClass =
              index === 0 ? 'z-30' : index === 1 || index === 2 ? 'z-20' : 'z-10';

            return (
              <div 
                key={bonus.id}
                id={`bonus-card-${bonus.id}`}
                className={`relative flex flex-col items-center text-center justify-between transition-transform duration-300 hover:scale-[1.01] group ${zIndexClass} ${
                  hasTopSocket ? 'pt-5 sm:pt-7 pb-3 sm:pb-4' : 'pt-2.5 sm:pt-3.5 pb-3 sm:pb-4'
                } ${
                  hasLeftSocket ? 'pl-5 sm:pl-8 pr-2.5 sm:pr-4' : 'px-2.5 sm:px-4'
                }`}
              >
                {/* Silhueta de Quebra-Cabeça em SVG (Fundo Branco + Borda Suave + Sombra) */}
                <svg
                  viewBox="0 0 200 200"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-0 drop-shadow-[0_5px_16px_rgba(30,86,160,0.10)]"
                >
                  <path
                    d={puzzlePaths[index]}
                    fill="#FFFFFF"
                    stroke="#B8D0EB"
                    strokeWidth="1.6"
                     vectorEffect="non-scaling-stroke"
                    className="group-hover:stroke-[#1E56A0]/60 transition-colors duration-300"
                  />
                </svg>

                {/* Top Badge */}
                <div className="w-full flex justify-end mb-1 relative z-10">
                  <span className="bg-[#EDF4FC] text-[#1E56A0] text-[9px] sm:text-[11px] font-bold tracking-wider uppercase px-2 sm:px-2.5 py-0.5 rounded-full border border-[#93B8E8]/40">
                    {bonus.badge}
                  </span>
                </div>

                {/* Moldura da Imagem */}
                <div className="w-[125px] min-[380px]:w-[148px] sm:w-[210px] md:w-[235px] aspect-[5/4] rounded-[12px] sm:rounded-[16px] overflow-hidden bg-[#FAF8F5] border border-[#E1ECF7] p-1 sm:p-1.5 shadow-2xs group-hover:border-[#1E56A0]/40 transition-all duration-300 flex items-center justify-center my-0.5 relative z-10">
                  <img 
                    src={bonus.image} 
                    alt={bonus.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain rounded-[8px] sm:rounded-[12px] select-none block"
                    loading="lazy"
                  />
                </div>

                {/* Text Details */}
                <div className="mt-1.5 sm:mt-2 w-full relative z-10">
                  <h3 className="text-xs sm:text-sm md:text-[15px] font-extrabold text-[#1E56A0] tracking-tight leading-tight">
                    {bonus.name}
                  </h3>
                </div>
              </div>
            );
          })}
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
