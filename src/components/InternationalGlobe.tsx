import React from 'react';
import { Calendar, Clock, Laptop, Award } from 'lucide-react';

export default function InternationalGlobe() {
  const highlights = [
    {
      id: "h-date",
      title: "15 a 17 de Setembro",
      subtitle: "Três noites de conhecimento",
      description: "Uma imersão acadêmica e humanística noturna concentrada de alta relevância internacional.",
      icon: Calendar,
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      bgImage: "https://images.unsplash.com/photo-1506784951205-3342118c1605?q=80&w=600"
    },
    {
      id: "h-time",
      title: "A partir das 19:00h",
      subtitle: "Programação noturna",
      description: "Planejado especialmente para conciliar com sua rotina de estudos, trabalho e docência.",
      icon: Clock,
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      bgImage: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=600"
    },
    {
      id: "h-online",
      title: "100% Online",
      subtitle: "Participe de onde estiver",
      description: "Transmissão digital de alta estabilidade e fóruns integrados para discussões em tempo real.",
      icon: Laptop,
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
      bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600"
    },
    {
      id: "h-cert",
      title: "Certificação Internacional",
      subtitle: "Carga horária de 30 horas",
      description: "Chancela complementar de alto prestígio válida para contagem acadêmica e progressão funcional.",
      icon: Award,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      bgImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600"
    }
  ];

  return (
    <section className="relative py-24 bg-[#020617] px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/5" id="globe-section">
      
      {/* Background Video - Sem sombras na direita */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/video-inicial.mp4" type="video/mp4" />
        </video>
        
        {/* Left Side Shadow & Blur Fade */}
        <div 
          className="absolute inset-y-0 left-0 w-full lg:w-[75%] bg-gradient-to-r from-[#020617] via-[#020617]/95 to-transparent backdrop-blur-xl"
          style={{
            maskImage: 'linear-gradient(to right, black 65%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 65%, transparent 100%)'
          }}
        ></div>
      </div>

      <div className="absolute inset-0 bg-radial from-blue-950/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[450px]">
        
        {/* Left column: Information list (Em cima da área desfocada) */}
        <div className="lg:col-span-7 space-y-8 text-left order-2 lg:order-1">
          <div className="space-y-4">
            <span className="text-[10px] font-bold font-mono tracking-[0.3em] text-cyan-400 uppercase block drop-shadow-md">Logística & Alcance</span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight drop-shadow-[0_5px_15px_rgba(0,0,0,0.9)]">
              Conhecimento sem fronteiras.
            </h2>
            <p className="text-slate-100 text-sm md:text-base max-w-xl font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Uma estrutura acadêmica completa pensada para garantir o máximo aproveitamento e acessibilidade, unindo o Brasil a centros internacionais de pesquisa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {highlights.map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.id} className="relative flex flex-col justify-end min-h-[160px] text-left rounded-2xl overflow-hidden border border-white/10 group hover:border-white/20 transition-all shadow-xl" id={`highlight-block-${item.id}`}>
                  
                  {/* Background Image dos cards */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${item.bgImage}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>

                  <div className="relative z-10 p-5">
                    <div className={`p-2 rounded-lg border shrink-0 inline-flex mb-3 backdrop-blur-md ${item.color}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-[9px] font-mono text-cyan-400 uppercase font-bold tracking-wider">{item.subtitle}</p>
                      <h3 className="text-base font-bold text-white font-display leading-tight drop-shadow-md">{item.title}</h3>
                      <p className="text-xs text-slate-300 leading-relaxed text-justify font-light drop-shadow-md">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right column: Vazia, mostrando apenas o vídeo puro de fundo */}
        <div className="lg:col-span-5 hidden lg:block order-1 lg:order-2 h-full">
          {/* Espaço vazio intencional */}
        </div>

      </div>
    </section>
  );
}
