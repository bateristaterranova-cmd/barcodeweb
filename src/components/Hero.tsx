import React from 'react';

interface HeroProps {
  onOpenGenerator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenGenerator }) => {
  return (
    <div className="relative z-10 flex flex-col items-center text-center mt-32 px-6 pb-20 no-print transition-colors duration-300">
      
      {/* Tagline Pill */}
      <div className="flex items-center space-x-3 bg-[rgba(85,80,110,0.4)] backdrop-blur-[10px] border border-[rgba(164,132,215,0.5)] rounded-[10px] h-[38px] px-1.5 pr-4 shadow-sm select-none">
        <div className="bg-[#7b39fc] text-white font-['Cabin'] font-medium text-[14px] px-2.5 py-0.5 rounded-[6px]">
          Offline
        </div>
        <span className="text-white font-['Cabin'] font-medium text-[14px]">
          Listo para Villacorp ML-400 L
        </span>
      </div>

      {/* Headline */}
      <h1 className="mt-8 mx-auto max-w-[800px] font-['Instrument_Serif'] leading-[1.1] text-5xl md:text-[96px] text-black dark:text-white transition-colors duration-300">
        Genera etiquetas térmicas al instante <i className="italic">y</i> sin complicaciones
      </h1>

      {/* Subtext */}
      <p className="mt-6 mx-auto max-w-[662px] font-['Inter'] font-normal text-[18px] text-black/70 dark:text-white/70 transition-colors duration-300 leading-relaxed">
        Transforma tus códigos de producto originales en códigos de barras Code 128 altamente legibles con nombres de modelo personalizados. Rápido, adaptable y funciona completamente sin conexión.
      </p>

      {/* Button Row */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          onClick={onOpenGenerator}
          className="w-full sm:w-auto bg-[#7b39fc] text-white font-['Cabin'] font-medium text-[16px] px-8 py-3.5 rounded-[10px] hover:bg-[#6c2ee0] transition-colors shadow-md hover:shadow-lg"
        >
          Iniciar Generador
        </button>
        <button
          className="w-full sm:w-auto bg-[#2b2344] text-[#f6f7f9] font-['Cabin'] font-medium text-[16px] px-8 py-3.5 rounded-[10px] hover:bg-[#1a152d] transition-colors shadow-md border border-transparent dark:border-white/10"
        >
          Ver Ajustes de Impresión
        </button>
      </div>

    </div>
  );
};
