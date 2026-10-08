import React from 'react';
import { Check, X, Shield, Clock, Download, Infinity as InfinityIcon } from 'lucide-react';

interface PricingOffersProps {
  onSelectPlan?: (planName: string) => void;
}

export const PricingOffers: React.FC<PricingOffersProps> = ({ onSelectPlan }) => {
  return (
    <section 
      id="ofertas"
      aria-label="Tabela de Ofertas do Produto"
      className="pt-8 sm:pt-12 pb-16 sm:pb-24 px-4 sm:px-6 bg-transparent"
    >
      <div className="max-w-[960px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-extrabold text-[#1E2530] tracking-tight">
            Escolha a melhor opção para você
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5A6578]">
            Acesso digital imediato a todo o acervo organizado do Jornal das Emoções.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-[13px] font-semibold text-[#1E2530]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white rounded-full border border-[#E1ECF7] shadow-2xs">
              <Check className="w-4 h-4 text-[#16A34A] stroke-[2.8]" />
              <span>Acesso imediato ao e-mail</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white rounded-full border border-[#E1ECF7] shadow-2xs">
              <Shield className="w-4 h-4 text-[#16A34A] stroke-[2.2]" />
              <span>Garantia Incondicional de 7 Dias</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid (Matching Reference Design with Brand Colors) */}
        <div 
          id="planos-precos"
          className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8 items-stretch max-w-[880px] mx-auto scroll-mt-20"
        >
          
          {/* 1. PACOTE BÁSICO */}
          <div 
            id="plano-basico"
            className="bg-white rounded-[24px] sm:rounded-[28px] border border-[#E1ECF7] p-6 sm:p-7 md:p-8 shadow-[0_8px_30px_rgba(30,86,160,0.06)] hover:border-[#93B8E8] transition-all flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E2530] tracking-tight mb-2">
                  - Básico
                </h3>

                {/* Strikethrough Price */}
                <p className="text-sm font-bold text-[#7B8798] line-through">
                  R$ 37,90
                </p>

                {/* Main Price */}
                <p className="text-4xl sm:text-5xl font-black text-[#16A34A] tracking-tight mt-0.5">
                  R$ 10
                </p>

                {/* Billing Frequency */}
                <p className="text-xs sm:text-sm font-semibold text-[#5A6578] mt-0.5">
                  único
                </p>

                {/* Economize Badge */}
                <div className="flex justify-center mt-3 mb-6">
                  <span className="inline-block bg-[#DCFCE7] text-[#15803D] text-[11px] sm:text-xs font-black tracking-wider uppercase px-3.5 py-1 rounded-full border border-[#86EFAC]/70 shadow-2xs">
                    ECONOMIZE R$ 27,90
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#EBF2FA] w-full mb-6" />

              {/* Included Features List */}
              <div className="space-y-3.5">
                <div className="flex items-center gap-3 text-left">
                  <Check className="w-5 h-5 text-[#1E2530] shrink-0 stroke-[2.8]" />
                  <span className="text-sm sm:text-[15px] font-bold text-[#1E2530]">
                    +100 Jornais das Emoções para Atendimento
                  </span>
                </div>

                <div className="flex items-center gap-3 text-left">
                  <Check className="w-5 h-5 text-[#1E2530] shrink-0 stroke-[2.8]" />
                  <span className="text-sm sm:text-[15px] font-bold text-[#1E2530]">
                    Prontos para aplicar dentro e fora da sessão
                  </span>
                </div>

                <div className="flex items-center gap-3 text-left">
                  <InfinityIcon className="w-5 h-5 text-[#1E56A0] shrink-0 stroke-[2.8]" />
                  <span className="text-sm sm:text-[15px] font-bold text-[#1E2530]">
                    Acesso vitalício ao material principal
                  </span>
                </div>
              </div>

              {/* Not Included Header & Items */}
              <div className="mt-7 pt-5 border-t border-[#EBF2FA]">
                <p className="text-[11px] font-extrabold text-[#8C98A9] uppercase tracking-wider mb-3">
                  NÃO INCLUSOS NESTE PACOTE:
                </p>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 text-left text-xs sm:text-sm text-[#8C98A9] line-through">
                    <X className="w-4 h-4 text-[#93B8E8] shrink-0 stroke-[2.2]" />
                    <span>Todos os 4 Bônus Exclusivos</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-left text-xs sm:text-sm text-[#8C98A9] line-through">
                    <X className="w-4 h-4 text-[#93B8E8] shrink-0 stroke-[2.2]" />
                    <span>Cartões e Dinâmicas de Vínculo Infantil</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-left text-xs sm:text-sm text-[#8C98A9] line-through">
                    <X className="w-4 h-4 text-[#93B8E8] shrink-0 stroke-[2.2]" />
                    <span>Atualizações contínuas de conteúdo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section: Delivery Badge + Button */}
            <div className="mt-8 pt-4">
              {/* Delivery Notification Box */}
              <div className="bg-[#F0FDF4] border border-[#86EFAC]/80 rounded-[12px] sm:rounded-[14px] p-3 text-center flex items-center justify-center gap-2 mb-4">
                <Download className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#16A34A] shrink-0" />
                <p className="text-xs sm:text-[13px] font-bold text-[#15803D] italic leading-tight">
                  Receba o link de download instantâneo no seu e-mail e WhatsApp.
                </p>
              </div>

              {/* CTA Button */}
              <button
                type="button"
                onClick={() => onSelectPlan?.('Pacote Básico')}
                className="w-full py-3.5 sm:py-4 px-6 bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.99] text-white font-extrabold text-base sm:text-lg rounded-[14px] sm:rounded-[16px] shadow-[0_8px_24px_rgba(22,163,74,0.32)] hover:shadow-[0_12px_28px_rgba(22,163,74,0.42)] transition-all cursor-pointer text-center"
              >
                Quero o básico
              </button>
            </div>
          </div>

          {/* 2. PACOTE COMPLETO (Highlighted Card) */}
          <div 
            id="plano-completo"
            className="bg-white rounded-[24px] sm:rounded-[28px] border-2 sm:border-[2.5px] border-[#1E56A0] p-6 sm:p-7 md:p-8 shadow-[0_12px_40px_rgba(30,86,160,0.16)] transition-all flex flex-col justify-between relative"
          >
            <div>
              {/* Header */}
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E2530] tracking-tight mb-2">
                  Completo
                </h3>

                {/* Strikethrough Price */}
                <p className="text-sm font-bold text-[#7B8798] line-through">
                  R$ 127,00
                </p>

                {/* Main Price */}
                <p className="text-4xl sm:text-5xl font-black text-[#16A34A] tracking-tight mt-0.5">
                  R$ 19,90
                </p>

                {/* Billing Frequency */}
                <p className="text-xs sm:text-sm font-semibold text-[#5A6578] mt-0.5">
                  único
                </p>

                {/* Economize Badge */}
                <div className="flex justify-center mt-3 mb-6">
                  <span className="inline-block bg-[#DCFCE7] text-[#15803D] text-[11px] sm:text-xs font-black tracking-wider uppercase px-3.5 py-1 rounded-full border border-[#86EFAC]/70 shadow-2xs">
                    ECONOMIZE R$ 107,10
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#EBF2FA] w-full mb-6" />

              {/* Included Features List */}
              <div className="space-y-3.5">
                <div className="flex items-center gap-3 text-left">
                  <Check className="w-5 h-5 text-[#16A34A] shrink-0 stroke-[3]" />
                  <span className="text-sm sm:text-[15px] font-extrabold text-[#1E2530]">
                    +100 Jornais das Emoções + Todos os Bônus Exclusivos!
                  </span>
                </div>

                <div className="flex items-center gap-3 text-left">
                  <Check className="w-5 h-5 text-[#16A34A] shrink-0 stroke-[3]" />
                  <span className="text-sm sm:text-[15px] font-extrabold text-[#1E2530]">
                    Prontos para aplicar dentro e fora da sessão
                  </span>
                </div>

                <div className="flex items-center gap-3 text-left">
                  <InfinityIcon className="w-5 h-5 text-[#1E56A0] shrink-0 stroke-[2.8]" />
                  <span className="text-sm sm:text-[15px] font-extrabold text-[#1E2530]">
                    Acesso vitalício ao material principal e bônus
                  </span>
                </div>
              </div>

              {/* Exclusive Bonuses Container Box */}
              <div className="mt-6 p-3.5 sm:p-4 bg-[#F4F8FD] border border-[#D6E4F5] rounded-[18px]">
                <p className="text-xs sm:text-[13px] font-black text-[#1E56A0] uppercase tracking-wide flex items-center gap-1.5 mb-3">
                  <span className="text-sm">🎁</span>
                  <span>BÔNUS EXCLUSIVOS (VALOR: R$ 97,24 POR R$ 0,00):</span>
                </p>

                <div className="space-y-2">
                  <div className="bg-white rounded-[12px] p-2.5 sm:p-3 border border-[#E1ECF7] shadow-2xs flex items-center gap-2.5 text-left">
                    <span className="text-base sm:text-lg leading-none" role="img" aria-label="atividades">🧠</span>
                    <span className="text-xs sm:text-[13px] font-bold text-[#1E2530]">
                      100 Atividades de Estimulação Cognitiva
                    </span>
                  </div>

                  <div className="bg-white rounded-[12px] p-2.5 sm:p-3 border border-[#E1ECF7] shadow-2xs flex items-center gap-2.5 text-left">
                    <span className="text-base sm:text-lg leading-none" role="img" aria-label="cartas">🗂️</span>
                    <span className="text-xs sm:text-[13px] font-bold text-[#1E2530]">
                      Cartas das Emoções — 50 Cartas Ilustradas
                    </span>
                  </div>

                  <div className="bg-white rounded-[12px] p-2.5 sm:p-3 border border-[#E1ECF7] shadow-2xs flex items-center gap-2.5 text-left">
                    <span className="text-base sm:text-lg leading-none" role="img" aria-label="termômetro">🌡️</span>
                    <span className="text-xs sm:text-[13px] font-bold text-[#1E2530]">
                      Termômetro das Emoções
                    </span>
                  </div>

                  <div className="bg-white rounded-[12px] p-2.5 sm:p-3 border border-[#E1ECF7] shadow-2xs flex items-center gap-2.5 text-left">
                    <span className="text-base sm:text-lg leading-none" role="img" aria-label="guia">📘</span>
                    <span className="text-xs sm:text-[13px] font-bold text-[#1E2530]">
                      Guia de Conversa com os Pais
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section: Delivery Badge + Button + Limited Time Guarantee */}
            <div className="mt-8 pt-4">
              {/* Delivery Notification Box */}
              <div className="bg-[#F0FDF4] border border-[#86EFAC]/80 rounded-[12px] sm:rounded-[14px] p-3 text-center flex items-center justify-center gap-2 mb-4">
                <Download className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#16A34A] shrink-0" />
                <p className="text-xs sm:text-[13px] font-bold text-[#15803D] italic leading-tight">
                  Receba o link de download instantâneo no seu e-mail e WhatsApp.
                </p>
              </div>

              {/* CTA Button */}
              <a
                href="https://pay.wiapy.com/8DCci2o90bBY"
                target="_self"
                className="block w-full py-3.5 sm:py-4 px-6 bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.99] text-white font-extrabold text-base sm:text-lg rounded-[14px] sm:rounded-[16px] shadow-[0_8px_24px_rgba(22,163,74,0.35)] hover:shadow-[0_12px_30px_rgba(22,163,74,0.45)] transition-all cursor-pointer text-center no-underline"
              >
                Quero o Completo
              </a>

              {/* Limited Time Notice */}
              <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] font-bold tracking-wider text-[#5A6578] uppercase">
                <Clock className="w-3.5 h-3.5 text-[#5A6578]" />
                <span>OFERTA ESPECIAL DISPONÍVEL POR TEMPO LIMITADO</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

