import React from 'react';
import { ArrowRight } from 'lucide-react';

interface IntermediateCTAProps {
  onCtaClick?: () => void;
}

export const IntermediateCTA: React.FC<IntermediateCTAProps> = ({ onCtaClick }) => {
  const handleClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="cta-intermediario"
      aria-label="Chamada intermediária"
      className="bg-white py-5 sm:py-7 md:py-9 px-1.5 sm:px-4 md:px-6"
    >
      <div className="w-full max-w-[1140px] mx-auto bg-[#1E56A0] rounded-xl sm:rounded-2xl md:rounded-3xl py-4 sm:py-5 md:py-6 px-4 sm:px-8 md:px-12 text-white shadow-[0_8px_24px_rgba(30,86,160,0.16)] border border-[#2B6CB0] flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 md:gap-8 text-center md:text-left">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold tracking-tight text-[#FAF8F5] leading-snug max-w-xl">
          Pronto para deixar seu atendimento mais leve e criativo?
        </h2>

        <div className="shrink-0">
          <button
            type="button"
            onClick={handleClick}
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-[#15803D] hover:bg-[#166534] text-white font-extrabold text-sm sm:text-base rounded-full shadow-[0_6px_20px_rgba(22,163,74,0.35)] hover:shadow-[0_10px_26px_rgba(22,163,74,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer group whitespace-nowrap"
          >
            <span>Começar agora</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
