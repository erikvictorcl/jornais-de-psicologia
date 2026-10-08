import React from 'react';
import { ShieldCheck, Ribbon } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section 
      id="garantia"
      aria-label="Garantia de 7 dias"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-t border-[#E1ECF7] text-center"
    >
      <div className="max-w-[700px] mx-auto">
        
        {/* Shield Icon in Soft Circle */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EDF4FC] border-2 border-[#C8D9EE] flex items-center justify-center mx-auto mb-6 shadow-2xs">
          <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-[#1E56A0] stroke-[2.2]" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#1E2530] tracking-tight leading-snug">
          Você tem 7 dias para conhecer o material
        </h2>

        {/* Description */}
        <p className="mt-4 text-base sm:text-[17px] text-[#5A6578] leading-relaxed max-w-xl mx-auto font-normal">
          Você pode acessar o conteúdo e avaliar com tranquilidade. Se dentro de 7 dias entender que o material não é para você, basta solicitar o reembolso conforme as condições da plataforma.
        </p>

        {/* Bottom Guarantee Badge */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-[#3B73B9]">
          <Ribbon className="w-4 h-4 text-[#3B73B9]" />
          <span>Garantia incondicional de 7 dias</span>
        </div>

      </div>
    </section>
  );
};
