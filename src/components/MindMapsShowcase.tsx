import React from 'react';
import { MindMapItem } from '../types';

interface MindMapsShowcaseProps {
  onSelectMap?: (map: MindMapItem) => void;
}

export interface ShowcaseMindMapItem extends MindMapItem {
  sheetNumber?: string;
  badgeLabel?: string;
  srcSet?: string;
}

// 7 Optimized Local WebP URLs
const imgurJornal1 = '/images/jornal-1-260.webp';
const imgurJornal2 = '/images/jornal-2-260.webp';
const imgurJornal3 = '/images/jornal-3-260.webp';
const imgurJornal4 = '/images/jornal-4-260.webp';
const imgurJornal5 = '/images/jornal-5-260.webp';
const imgurJornal6 = '/images/jornal-6-260.webp';
const imgurJornal7 = '/images/jornal-7-260.webp';

// All 7 individual Jornais das Emoções
export const sampleMindMaps: ShowcaseMindMapItem[] = [
  {
    id: 'showcase-1',
    title: 'Jornal das Emoções — Edição 1',
    category: 'Expressão Emocional',
    authorOrSchool: 'Psicologia Infantil',
    description: 'Atividade para reconhecer momentos felizes, conquistas e estimular bons sentimentos na criança.',
    branches: ['Reconhecer o que Sente', 'Onde Sinto no Corpo', 'Momentos Especiais'],
    previewUrl: imgurJornal1,
    srcSet: '/images/jornal-1-260.webp 260w, /images/jornal-1-420.webp 420w, /images/jornal-1-600.webp 600w',
    accentColor: '#1E56A0',
  },
  {
    id: 'showcase-2',
    title: 'Jornal das Emoções — Edição 2',
    category: 'Acolhimento Infantil',
    authorOrSchool: 'Psicologia Infantil',
    description: 'Espaço seguro para a criança desabafar, dar nome às emoções e se sentir compreendida.',
    branches: ['Dar Nome ao que Sente', 'Espaço para Desabafar', 'O que Me Acalma'],
    previewUrl: imgurJornal2,
    srcSet: '/images/jornal-2-260.webp 260w, /images/jornal-2-420.webp 420w, /images/jornal-2-600.webp 600w',
    accentColor: '#3B73B9',
  },
  {
    id: 'showcase-3',
    title: 'Jornal das Emoções — Edição 3',
    category: 'Regulação Emocional',
    authorOrSchool: 'Psicologia Infantil',
    description: 'Ajuda a criança a entender sentimentos difíceis e transformar a frustração em palavras.',
    branches: ['Gatilhos Emocionais', 'Expressão Segura', 'Como Voltar à Calma'],
    previewUrl: imgurJornal3,
    srcSet: '/images/jornal-3-260.webp 260w, /images/jornal-3-420.webp 420w, /images/jornal-3-600.webp 600w',
    accentColor: '#1E56A0',
  },
  {
    id: 'showcase-4',
    title: 'Jornal das Emoções — Edição 4',
    category: 'Segurança Afetiva',
    authorOrSchool: 'Psicologia Infantil',
    description: 'Exploração leve e criativa dos sentimentos infantis e recursos internos de proteção.',
    branches: ['O que Me Preocupa', 'Rede de Apoio', 'Descobrindo a Coragem'],
    previewUrl: imgurJornal4,
    srcSet: '/images/jornal-4-260.webp 260w, /images/jornal-4-420.webp 420w, /images/jornal-4-600.webp 600w',
    accentColor: '#1E56A0',
  },
  {
    id: 'showcase-5',
    title: 'Jornal das Emoções — Edição 5',
    category: 'Autoconhecimento',
    authorOrSchool: 'Psicologia Infantil',
    description: 'Atividade prática para organizar pensamentos e sentimentos dentro e fora da sessão.',
    branches: ['Pensamentos Lá Dentro', 'Sinais do Corpo', 'Respiração e Presença'],
    previewUrl: imgurJornal5,
    srcSet: '/images/jornal-5-260.webp 260w, /images/jornal-5-420.webp 420w, /images/jornal-5-600.webp 600w',
    accentColor: '#3B73B9',
  },
  {
    id: 'showcase-6',
    title: 'Jornal das Emoções — Edição 6',
    category: 'Bem-Estar Infantil',
    authorOrSchool: 'Psicologia Infantil',
    description: 'Estimula a percepção de serenidade, segurança e autorregulação no processo terapêutico.',
    branches: ['Meu Lugar Seguro', 'O que Traz Paz', 'Vínculo Terapêutico'],
    previewUrl: imgurJornal6,
    srcSet: '/images/jornal-6-260.webp 260w, /images/jornal-6-420.webp 420w, /images/jornal-6-600.webp 600w',
    accentColor: '#1E56A0',
  },
  {
    id: 'showcase-7',
    title: 'Jornal das Emoções — Edição 7',
    category: 'Expressão e Vínculo',
    authorOrSchool: 'Psicologia Infantil',
    description: 'Facilita a comunicação da criança no tempo dela, fortalecendo o vínculo com o psicólogo.',
    branches: ['No Tempo da Criança', 'Expressão sem Julgamento', 'Autoconfiança'],
    previewUrl: imgurJornal7,
    srcSet: '/images/jornal-7-260.webp 260w, /images/jornal-7-420.webp 420w, /images/jornal-7-600.webp 600w',
    accentColor: '#3B73B9',
  },
];

// ROW 1 & ROW 2 using the 7 individual newspapers
export const row1Maps: ShowcaseMindMapItem[] = sampleMindMaps;
export const row2Maps: ShowcaseMindMapItem[] = [
  sampleMindMaps[3],
  sampleMindMaps[4],
  sampleMindMaps[5],
  sampleMindMaps[6],
  sampleMindMaps[0],
  sampleMindMaps[1],
  sampleMindMaps[2],
];

export const MindMapsShowcase: React.FC<MindMapsShowcaseProps> = ({ onSelectMap }) => {
  return (
    <section 
      id="mapas-por-dentro"
      aria-label="Vitrine do Jornal das Emoções"
      className="pt-10 sm:pt-14 md:pt-16 pb-0 bg-white border-t border-[#E1ECF7]/80 overflow-hidden relative select-none"
    >
      {/* Header Section (Matching Image Reference with Brand Colors) */}
      <div className="max-w-[800px] mx-auto text-center px-4 sm:px-6 mb-7 sm:mb-9 md:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#1E2530] tracking-tight leading-tight">
          Veja os jornais por dentro
        </h2>
        
        {/* Accent Bar Underline */}
        <div className="w-14 sm:w-16 h-1 sm:h-1.5 bg-[#1E56A0] rounded-full mx-auto mt-2.5 sm:mt-3" />
      </div>

      {/* FAIXA AZUL COM ONDULAÇÃO UNIFORME E SUAVE */}
      <div className="relative w-full overflow-hidden py-1 sm:py-2">
        <div className="animate-snake-banner bg-[#1E56A0] py-8 sm:py-12 md:py-14 relative w-full shadow-[inset_0_2px_12px_rgba(0,0,0,0.16)]">
          <div className="space-y-4 sm:space-y-6">
            
            {/* FILEIRA 1: Movimento contínuo para a DIREITA com ondulação uniforme */}
            <div className="relative w-full overflow-visible py-1.5 sm:py-2.5">
              <div className="animate-marquee-right flex gap-3.5 sm:gap-5 md:gap-6 items-center">
                {/* First Set */}
                {row1Maps.map((map, idx) => (
                  <CleanMindMapCard 
                    key={`r1-set1-${map.id}-${idx}`}
                    map={map}
                    waveClass="animate-snake-card-1"
                    animationDelay={`${(idx % row1Maps.length) * -0.5}s`}
                  />
                ))}
                {/* Duplicated Set for Seamless Infinite Loop */}
                {row1Maps.map((map, idx) => (
                  <CleanMindMapCard 
                    key={`r1-set2-${map.id}-${idx}`}
                    map={map}
                    aria-hidden={true}
                    waveClass="animate-snake-card-1"
                    animationDelay={`${((idx + row1Maps.length) % (row1Maps.length * 2)) * -0.5}s`}
                  />
                ))}
              </div>
            </div>

            {/* FILEIRA 2: Movimento contínuo para a ESQUERDA com ondulação uniforme */}
            <div className="relative w-full overflow-visible py-1.5 sm:py-2.5">
              <div className="animate-marquee-left flex gap-3.5 sm:gap-5 md:gap-6 items-center">
                {/* First Set */}
                {row2Maps.map((map, idx) => (
                  <CleanMindMapCard 
                    key={`r2-set1-${map.id}-${idx}`}
                    map={map}
                    waveClass="animate-snake-card-2"
                    animationDelay={`${(idx % row2Maps.length) * -0.5}s`}
                  />
                ))}
                {/* Duplicated Set for Seamless Infinite Loop */}
                {row2Maps.map((map, idx) => (
                  <CleanMindMapCard 
                    key={`r2-set2-${map.id}-${idx}`}
                    map={map}
                    aria-hidden={true}
                    waveClass="animate-snake-card-2"
                    animationDelay={`${((idx + row2Maps.length) % (row2Maps.length * 2)) * -0.5}s`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// Subcomponent: Pure Mind Map Sheet in Horizontal Proportion (Original Aspect Ratio) with Snake Wave
interface CleanMindMapCardProps {
  map: ShowcaseMindMapItem;
  'aria-hidden'?: boolean;
  waveClass?: string;
  animationDelay?: string;
}

const CleanMindMapCard: React.FC<CleanMindMapCardProps> = ({ 
  map, 
  'aria-hidden': ariaHidden,
  waveClass = '',
  animationDelay = '0s',
}) => {
  return (
    <div
      aria-hidden={ariaHidden}
      className={`shrink-0 ${waveClass}`}
      style={{
        animationDelay,
      }}
    >
      <div className="w-[170px] sm:w-[215px] md:w-[250px] lg:w-[280px] aspect-[1055/1491] bg-white rounded-md sm:rounded-lg border border-white/25 overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.22)] flex items-center justify-center p-0.5 sm:p-1 select-none pointer-events-none hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] transition-shadow">
        <div className="w-full h-full rounded-[3px] sm:rounded-md overflow-hidden bg-white flex items-center justify-center">
          <img 
            src={map.previewUrl} 
            srcSet={map.srcSet}
            sizes="(max-width: 640px) 170px, (max-width: 768px) 215px, 280px"
            width={1055}
            height={1491}
            alt={ariaHidden ? '' : `Jornal das Emoções - ${map.title}`}
            className="w-full h-full object-contain select-none block"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
};
