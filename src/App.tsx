import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { QuickBenefits } from './components/QuickBenefits';
import { MindMapsShowcase, sampleMindMaps } from './components/MindMapsShowcase';
import { IntermediateCTA } from './components/IntermediateCTA';
import { WhatItDelivers } from './components/WhatItDelivers';
import { PricingOffers } from './components/PricingOffers';
import { AccessSteps } from './components/AccessSteps';
import { Testimonials } from './components/Testimonials';
import { Guarantee } from './components/Guarantee';
import { MapPreviewModal } from './components/MapPreviewModal';
import { UpgradeModal } from './components/UpgradeModal';
import { MindMapItem } from './types';

export default function App() {
  const [selectedMap, setSelectedMap] = useState<MindMapItem | null>(null);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  const [notification, setNotification] = useState<string | null>(null);

  const scrollToOffers = () => {
    const el = document.getElementById('ofertas');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePreviewOpenByTitle = (title: string) => {
    const found = sampleMindMaps.find((m) => m.title.toLowerCase().includes(title.toLowerCase()));
    if (found) {
      setSelectedMap(found);
    } else {
      setSelectedMap(sampleMindMaps[0]);
    }
  };

  const proceedToCheckout = (planName: string) => {
    setNotification(`Opção selecionada: ${planName}. O link de checkout oficial será inserido aqui.`);
    setTimeout(() => {
      setNotification(null);
    }, 4500);
  };

  const handleSelectPlan = (planName: string) => {
    if (planName === 'Pacote Básico') {
      setIsUpgradeModalOpen(true);
      return;
    }
    proceedToCheckout(planName);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-[#D2E4FA] bg-textured-blue text-[#1E2530] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. FAIXA SUPERIOR */}
      <TopBar />

      {/* 2. HERO */}
      <Hero 
        onCtaClick={scrollToOffers}
      />

      {/* 3. BENEFÍCIOS RÁPIDOS & BOX DE DESTAQUE */}
      <QuickBenefits />

      {/* 4. APRESENTAÇÃO DOS MAPAS MENTAIS POR DENTRO */}
      <MindMapsShowcase />

      {/* 5. CTA INTERMEDIÁRIO */}
      <IntermediateCTA 
        onCtaClick={scrollToOffers}
      />

      {/* 6. CONTEÚDO / O QUE O MATERIAL ENTREGA & FAIXA DE DESTAQUE */}
      <WhatItDelivers />

      {/* 7. SEÇÃO DE OFERTAS (PACOTE BÁSICO & PACOTE COMPLETO) */}
      <PricingOffers 
        onSelectPlan={handleSelectPlan}
      />

      {/* 9. COMO O CLIENTE RECEBERÁ O ACESSO */}
      <AccessSteps />

      {/* 10. DEPOIMENTOS */}
      <Testimonials />

      {/* 11. GARANTIA */}
      <Guarantee />

      {/* Rodapé institucional discreto */}
      <footer className="border-t border-[#E1ECF7] py-8 px-4 sm:px-6 bg-white text-center text-xs text-[#5A6578]">
        <div className="max-w-[1040px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} Jornal das Emoções. Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-[#7B8798]">
            Material terapêutico infantil para uso dentro e fora da sessão.
          </p>
        </div>
      </footer>

      {/* Modal de Pré-visualização dos Mapas */}
      <MapPreviewModal 
        map={selectedMap}
        onClose={() => setSelectedMap(null)}
        onSelectPlan={scrollToOffers}
      />

      {/* Popup de Upgrade para o Pacote Bônus */}
      <UpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
        onSelectBonusPackage={() => setIsUpgradeModalOpen(false)}
        onContinueBasicPackage={() => setIsUpgradeModalOpen(false)}
      />

      {/* In-app Notification Toast */}
      {notification && (
        <div 
          role="status"
          className="fixed bottom-5 right-5 z-50 max-w-sm bg-[#1E2530] text-white text-xs sm:text-sm px-4 py-3 rounded-xl shadow-2xl border border-[#1E56A0] flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          <span>{notification}</span>
          <button 
            type="button" 
            onClick={() => setNotification(null)}
            className="text-[#93B8E8] hover:text-white font-bold text-xs"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
