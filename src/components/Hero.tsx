import React from 'react';
import { ArrowRight, Laptop, Smartphone, Check } from 'lucide-react';

interface HeroProps {
  onCtaClick?: () => void;
  onPreviewOpen?: (mapTitle: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick, onPreviewOpen }) => {
  const scrollToOffers = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      const el = document.getElementById('ofertas');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 5 Vertical Newspaper Sheets in the Hero fan composition
  const foregroundCards = [
    {
      id: 'hero-card-1',
      title: 'Jornal das Emoções - Edição 1',
      src: '/images/jornal-1-260.webp',
      srcSet: '/images/jornal-1-260.webp 260w, /images/jornal-1-420.webp 420w, /images/jornal-1-600.webp 600w',
      alt: 'Jornal das Emoções - Folha 1',
      rotation: '-rotate-[3deg]',
      translateY: 'translate-y-2 sm:translate-y-3.5',
      zIndex: 'z-[20]',
      scale: 'scale-[0.98]',
    },
    {
      id: 'hero-card-2',
      title: 'Jornal das Emoções - Edição 2',
      src: '/images/jornal-2-260.webp',
      srcSet: '/images/jornal-2-260.webp 260w, /images/jornal-2-420.webp 420w, /images/jornal-2-600.webp 600w',
      alt: 'Jornal das Emoções - Folha 2',
      rotation: '-rotate-[1.5deg]',
      translateY: 'translate-y-1',
      zIndex: 'z-[26]',
      scale: 'scale-[1.0]',
    },
    {
      id: 'hero-card-3',
      title: 'Jornal das Emoções - Edição 3',
      src: '/images/jornal-3-260.webp',
      srcSet: '/images/jornal-3-260.webp 260w, /images/jornal-3-420.webp 420w, /images/jornal-3-600.webp 600w',
      alt: 'Jornal das Emoções - Folha Central',
      rotation: 'rotate-0',
      translateY: '-translate-y-1 sm:-translate-y-2.5',
      zIndex: 'z-[35]', // Center card stands in front with greatest highlight
      scale: 'scale-[1.05] sm:scale-[1.08]',
    },
    {
      id: 'hero-card-4',
      title: 'Jornal das Emoções - Edição 4',
      src: '/images/jornal-4-260.webp',
      srcSet: '/images/jornal-4-260.webp 260w, /images/jornal-4-420.webp 420w, /images/jornal-4-600.webp 600w',
      alt: 'Jornal das Emoções - Folha 4',
      rotation: 'rotate-[1.5deg]',
      translateY: 'translate-y-1',
      zIndex: 'z-[26]',
      scale: 'scale-[1.0]',
    },
    {
      id: 'hero-card-5',
      title: 'Jornal das Emoções - Edição 5',
      src: '/images/jornal-5-260.webp',
      srcSet: '/images/jornal-5-260.webp 260w, /images/jornal-5-420.webp 420w, /images/jornal-5-600.webp 600w',
      alt: 'Jornal das Emoções - Folha 5',
      rotation: 'rotate-[3deg]',
      translateY: 'translate-y-2 sm:translate-y-3.5',
      zIndex: 'z-[20]',
      scale: 'scale-[0.98]',
    },
  ];

  return (
    <header id="hero-section" className="pt-8 pb-12 sm:pt-12 sm:pb-18 px-3 sm:px-6 overflow-hidden">
      <div className="max-w-[1140px] mx-auto">
        {/* Main Central Card Container */}
        <div 
          id="hero-card"
          className="bg-white rounded-[20px] border border-[#E1ECF7] shadow-[0_8px_30px_rgba(30,86,160,0.06)] p-5 sm:p-10 md:p-12 text-center transition-all duration-300 overflow-hidden"
        >
          {/* 2. Main Title (H1) */}
          <h1 
            id="hero-heading"
            className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[58px] font-black text-[#111827] tracking-tight leading-[1.12] max-w-4xl mx-auto drop-shadow-[0_1px_1px_rgba(0,0,0,0.04)]"
          >
            Trabalhe as <span className="text-[#1E56A0] underline decoration-[#93B8E8]/50 decoration-wavy decoration-2">Emoções</span> com <span className="text-[#1E56A0] font-black">+100</span> Jornais de Psicologia
          </h1>

          {/* 4. UNIFIED PRODUCT MOCKUP COMPOSITION */}
          {/* Laptop with open screen + smartphone at side, with 5 horizontal maps positioned prominently in front */}
          <div 
            id="hero-mockup-container"
            className="mt-8 sm:mt-11 mb-6 sm:mb-9 relative w-full max-w-[1040px] mx-auto select-none"
          >
            {/* Ambient Soft Glow Behind Mockup */}
            <div 
              className="absolute inset-x-8 top-12 bottom-6 bg-gradient-to-b from-[#EDF4FC]/90 via-[#E1ECF7]/40 to-transparent -z-10 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative flex flex-col items-center">
              
              {/* BACK LAYER: CENTRAL LAPTOP + SMARTPHONE */}
              <div className="relative w-full flex justify-center items-end px-2">
                
                {/* 1. CENTRAL NOTEBOOK (AT THE BACK WITH SCREEN + HORIZONTAL MACBOOK KEYBOARD BASE) */}
                <div className="relative z-10 w-full max-w-[320px] sm:max-w-[490px] md:max-w-[600px] lg:max-w-[660px]">
                  
                  {/* Laptop Lid / Screen */}
                  <div className="bg-[#1D1E22] rounded-t-[14px] sm:rounded-t-[18px] p-2 sm:p-2.5 shadow-[0_15px_40px_rgba(0,0,0,0.22)] border-t border-x border-[#3F424A] relative">
                    {/* Camera dot */}
                    <div className="absolute top-1 sm:top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#33373F] flex items-center justify-center">
                      <div className="w-0.5 h-0.5 rounded-full bg-emerald-500/80" />
                    </div>

                    {/* Screen View */}
                    <div className="bg-[#0F1012] rounded-t-sm sm:rounded-md overflow-hidden aspect-[1672/941] flex items-center justify-center border border-[#2D3039] relative">
                      <img 
                        src="/images/hero-laptop-960.webp" 
                        srcSet="/images/hero-laptop-640.webp 640w, /images/hero-laptop-960.webp 960w, /images/hero-laptop-1280.webp 1280w"
                        sizes="(max-width: 640px) 310px, (max-width: 768px) 480px, 650px"
                        width={1672}
                        height={941}
                        alt="Visualização do Jornal das Emoções no computador" 
                        className="w-full h-full object-contain select-none block"
                        loading="eager"
                        fetchPriority="high"
                        decoding="sync"
                      />
                    </div>

                    {/* Bottom Bezel with MacBook Air branding (matching reference image) */}
                    <div className="pt-1 sm:pt-1.5 pb-0.5 flex justify-center items-center" aria-hidden="true">
                      <span className="text-[7px] sm:text-[9px] font-medium tracking-wider text-[#A3A8B3] font-sans">
                        MacBook Air
                      </span>
                    </div>
                  </div>

                  {/* Dark Hinge */}
                  <div className="w-[85%] mx-auto h-1 sm:h-1.5 bg-[#121316] rounded-t-sm shadow-inner" aria-hidden="true" />

                  {/* Laptop Aluminum Unibody Base (Horizontal, frontal perspective matching reference) */}
                  <div className="relative w-[102.5%] -ml-[1.25%] bg-gradient-to-b from-[#8C929C] via-[#9AA0A9] to-[#767C85] rounded-b-md sm:rounded-b-lg border-t border-[#A8AEB7] shadow-[0_12px_28px_rgba(0,0,0,0.25)] pt-1 sm:pt-1.5 pb-1.5 sm:pb-2.5 px-2.5 sm:px-5 flex flex-col items-center" aria-hidden="true">
                    
                    {/* Horizontal Keyboard Well (flat frontal chiclet strip) */}
                    <div className="w-full max-w-[560px] bg-[#121316] rounded-[2px] sm:rounded-[4px] p-0.5 sm:p-1 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)] border border-[#27292F]">
                      <div className="flex flex-col gap-[1px] sm:gap-[1.5px]">
                        
                        {/* Row 1: Function / Esc keys */}
                        <div className="grid grid-cols-14 gap-[1px] sm:gap-[1.5px] h-1 sm:h-1.5">
                          <div className="bg-[#1C1D21] rounded-[1px] border-b border-black flex items-center justify-center">
                            <span className="text-[3px] sm:text-[4px] text-[#A0A4AE] scale-75">esc</span>
                          </div>
                          {Array.from({ length: 12 }).map((_, i) => (
                            <div key={`fn-${i}`} className="bg-[#1E1F24] rounded-[1px] border-b border-black" />
                          ))}
                          <div className="bg-[#151619] rounded-[1px] border-b border-black" />
                        </div>

                        {/* Row 2: Numbers row */}
                        <div className="grid grid-cols-14 gap-[1px] sm:gap-[1.5px] h-1 sm:h-2">
                          {['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '⌫'].map((k, i) => (
                            <div key={`n-${i}`} className="bg-[#1E1F24] rounded-[1px] border-b border-black shadow-[0_0.5px_1px_rgba(0,0,0,0.6)] flex items-center justify-center text-[4px] sm:text-[6px] text-[#C4C8D2] font-mono leading-none">
                              {k}
                            </div>
                          ))}
                        </div>

                        {/* Row 3: QWERTY row */}
                        <div className="grid grid-cols-14 gap-[1px] sm:gap-[1.5px] h-1 sm:h-2">
                          {['⇥', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'].map((k, i) => (
                            <div key={`q-${i}`} className="bg-[#1E1F24] rounded-[1px] border-b border-black shadow-[0_0.5px_1px_rgba(0,0,0,0.6)] flex items-center justify-center text-[4px] sm:text-[6px] text-[#C4C8D2] font-mono leading-none">
                              {k}
                            </div>
                          ))}
                        </div>

                        {/* Row 4: ASDF row */}
                        <div className="grid grid-cols-13 gap-[1px] sm:gap-[1.5px] h-1 sm:h-2">
                          {['⇪', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', '⏎'].map((k, i) => (
                            <div key={`a-${i}`} className={`bg-[#1E1F24] rounded-[1px] border-b border-black shadow-[0_0.5px_1px_rgba(0,0,0,0.6)] flex items-center justify-center text-[4px] sm:text-[6px] text-[#C4C8D2] font-mono leading-none ${i === 0 || i === 12 ? 'col-span-1.5 bg-[#18191D]' : ''}`}>
                              {k}
                            </div>
                          ))}
                        </div>

                        {/* Row 5: ZXCV row */}
                        <div className="grid grid-cols-12 gap-[1px] sm:gap-[1.5px] h-1 sm:h-2">
                          {['⇧', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '⇧'].map((k, i) => (
                            <div key={`z-${i}`} className={`bg-[#1E1F24] rounded-[1px] border-b border-black shadow-[0_0.5px_1px_rgba(0,0,0,0.6)] flex items-center justify-center text-[4px] sm:text-[6px] text-[#C4C8D2] font-mono leading-none ${i === 0 || i === 11 ? 'bg-[#18191D]' : ''}`}>
                              {k}
                            </div>
                          ))}
                        </div>

                        {/* Row 6: Spacebar and modifier row */}
                        <div className="flex gap-[1px] sm:gap-[1.5px] h-1 sm:h-2 justify-center">
                          <div className="w-3 sm:w-6 bg-[#18191D] rounded-[1px] border-b border-black flex items-center justify-center text-[3px] sm:text-[5px] text-[#9EA3AE]">
                            fn
                          </div>
                          <div className="w-3 sm:w-6 bg-[#18191D] rounded-[1px] border-b border-black flex items-center justify-center text-[3px] sm:text-[5px] text-[#9EA3AE]">
                            ⌃
                          </div>
                          <div className="w-3 sm:w-6 bg-[#18191D] rounded-[1px] border-b border-black flex items-center justify-center text-[3px] sm:text-[5px] text-[#9EA3AE]">
                            ⌥
                          </div>
                          <div className="w-4 sm:w-7 bg-[#18191D] rounded-[1px] border-b border-black flex items-center justify-center text-[3px] sm:text-[5px] text-[#9EA3AE]">
                            ⌘
                          </div>
                          {/* Wide Horizontal Spacebar */}
                          <div className="flex-1 max-w-[140px] sm:max-w-[210px] bg-[#222429] rounded-[1px] border-b border-black shadow-[0_0.5px_1px_rgba(0,0,0,0.6)]" />
                          <div className="w-4 sm:w-7 bg-[#18191D] rounded-[1px] border-b border-black flex items-center justify-center text-[3px] sm:text-[5px] text-[#9EA3AE]">
                            ⌘
                          </div>
                          <div className="w-3 sm:w-6 bg-[#18191D] rounded-[1px] border-b border-black flex items-center justify-center text-[3px] sm:text-[5px] text-[#9EA3AE]">
                            ⌥
                          </div>
                          <div className="w-5 sm:w-8 grid grid-cols-2 gap-[1px]">
                            <div className="bg-[#18191D] rounded-[1px] border-b border-black" />
                            <div className="bg-[#18191D] rounded-[1px] border-b border-black" />
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Compact Glass Trackpad (shallow horizontal, not dominating) */}
                    <div className="w-20 sm:w-36 h-1.5 sm:h-2.5 bg-[#9AA0AA]/30 rounded-[2px] sm:rounded-[3px] mt-1 sm:mt-1.5 border border-[#7D838E]/50 shadow-inner" />

                    {/* Front Edge Lip Notch */}
                    <div className="w-8 sm:w-14 h-0.5 sm:h-1 bg-[#616670] rounded-full mt-0.5 sm:mt-1 opacity-80" />
                  </div>
                </div>

                {/* 2. SMARTPHONE (OVERLAPPING LEFT SIDE) */}
                <div className="absolute left-0.5 sm:left-3 md:left-6 bottom-3 sm:bottom-6 z-20 w-16 sm:w-24 md:w-28 lg:w-32 bg-[#1C1D21] rounded-[14px] sm:rounded-[22px] p-1 sm:p-1.5 shadow-[0_14px_35px_rgba(0,0,0,0.3)] border-2 border-[#1E56A0]/40 transform -rotate-[3deg] hover:rotate-0 transition-transform duration-300">
                  <div className="bg-black rounded-[10px] sm:rounded-[16px] overflow-hidden aspect-[941/1672] flex flex-col text-left border border-white/10 relative">
                    {/* Subtle speaker notch */}
                    <div className="w-5 sm:w-7 h-0.5 sm:h-1 bg-zinc-700/80 rounded-full mx-auto my-0.5 absolute top-1 left-1/2 -translate-x-1/2 z-10" />
                    
                    {/* Phone screen preview */}
                    <div className="w-full h-full relative overflow-hidden bg-black flex items-center justify-center">
                      <img 
                        src="/images/hero-phone-240.webp" 
                        srcSet="/images/hero-phone-240.webp 240w, /images/hero-phone-420.webp 420w"
                        sizes="(max-width: 640px) 80px, 128px"
                        width={941}
                        height={1672}
                        alt="Visualização mobile do Jornal das Emoções no celular" 
                        className="w-full h-full object-contain select-none block"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* FOREGROUND LAYER: 5 VERTICAL JOURNAL SHEETS */}
              {/* Positioned prominently in front of the laptop base with elegant fan overlap */}
              <div 
                id="hero-cards-showcase-row"
                className="relative -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 z-30 w-full flex items-end justify-center -space-x-5 min-[360px]:-space-x-6 min-[390px]:-space-x-7 min-[440px]:-space-x-8 sm:-space-x-10 md:-space-x-12 lg:-space-x-14 xl:-space-x-16 px-1 mx-auto select-none pointer-events-none"
              >
                {foregroundCards.map((card, idx) => (
                  <div
                    key={card.id}
                    id={card.id}
                    className={`relative shrink-0 w-[82px] min-[360px]:w-[92px] min-[390px]:w-[102px] min-[440px]:w-[114px] sm:w-[152px] md:w-[192px] lg:w-[222px] xl:w-[242px] aspect-[1055/1491] rounded-[3px] sm:rounded-[6px] overflow-hidden bg-white shadow-[0_14px_32px_rgba(18,25,35,0.28)] border border-black/8 ${card.rotation} ${card.translateY} ${card.zIndex} ${card.scale}`}
                    style={{
                      filter: 'drop-shadow(0 6px 16px rgba(30, 86, 160, 0.18))',
                    }}
                  >
                    <img
                      src={card.src}
                      srcSet={card.srcSet}
                      sizes="(max-width: 640px) 115px, (max-width: 1024px) 192px, 242px"
                      width={1055}
                      height={1491}
                      alt={card.alt}
                      className="w-full h-full object-contain select-none block bg-white"
                      loading="eager"
                      fetchPriority={idx === 2 ? 'high' : 'auto'}
                      decoding="async"
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* 5. MAIN CALL TO ACTION (CTA) */}
          <div className="flex flex-col items-center mt-6 sm:mt-8">
            <button
              id="hero-cta-button"
              type="button"
              onClick={scrollToOffers}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#15803D] hover:bg-[#166534] active:scale-[0.99] text-white font-bold text-base sm:text-lg rounded-[11px] shadow-[0_6px_20px_rgba(22,163,74,0.35)] hover:shadow-[0_10px_26px_rgba(22,163,74,0.45)] transition-all duration-200 w-full sm:w-auto min-w-[280px] cursor-pointer group"
            >
              <span>Quero os Jornais</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Microcopy below CTA */}
            <div 
              id="hero-microcopy"
              className="mt-4 flex flex-wrap items-center justify-center gap-y-1.5 gap-x-4 text-xs sm:text-[13px] font-medium text-[#475569]"
            >
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#15803D]" />
                Acesso digital
              </span>
              <span className="text-[#93B8E8] hidden sm:inline" aria-hidden="true">&bull;</span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#15803D]" />
                Material pronto
              </span>
              <span className="text-[#93B8E8] hidden sm:inline" aria-hidden="true">&bull;</span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#15803D]" />
                Dentro e fora da sessão
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
