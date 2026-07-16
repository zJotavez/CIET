import React from 'react';
import { Presentation, BookOpen, MessageSquare, Compass, ShieldCheck } from 'lucide-react';

export default function ExperienceOverview() {
  const formats = [
    {
      id: "f-palestras",
      title: "Palestras e Conferências",
      subtitle: "Grandes reflexões teóricas",
      description: "Sessões integradas com pesquisadores internacionais, trazendo as teses de fronteira e os mais recentes dados empíricos do impacto cognitivo e psicológico da IA no mundo.",
      icon: Presentation,
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: "f-minicursos",
      title: "Minicursos Acadêmicos",
      subtitle: "Experiências de aprofundamento",
      description: "Aulas focadas em capacitação prática, metodologias ativas de ensino na era algorítmica e ferramentas para resgate de atenção e tédio criativo na infância.",
      icon: BookOpen,
      color: "from-cyan-500 to-indigo-500"
    },
    {
      id: "f-mesas",
      title: "Mesas-redondas e Painéis",
      subtitle: "Diferentes perspectivas acadêmicas",
      description: "Debates interdisciplinares unindo filósofos, sociólogos, engenheiros e psicólogos para confrontar as divergências conceituais e éticas de problemas altamente complexos.",
      icon: MessageSquare,
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: "f-imersao",
      title: "Imersão Cultural",
      subtitle: "Conhecimento além do tradicional",
      description: "Intervenções reflexivas, tributos solenes de abertura e encerramento para integrar arte, sensibilidade estética e a herança humanista à nossa formação acadêmica.",
      icon: Compass,
      color: "from-purple-500 to-rose-500"
    }
  ];

  return (
    <section className="relative py-24 bg-transparent px-4 sm:px-6 lg:px-8 border-b border-white/5" id="experience-section">
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 rounded-full bg-blue-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <p className="text-[10px] font-bold font-mono tracking-[0.3em] text-cyan-400 uppercase">Diferenciais Pedagógicos</p>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            O CIETDH não será apenas uma sequência de palestras.
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Nossa arquitetura de aprendizagem foi desenhada de forma transdisciplinar para garantir profundidade acadêmica e aplicação prática no seu cotidiano:
          </p>
        </div>

        {/* Formats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {formats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white/5 border border-white/10 hover:border-white/20 p-6 sm:p-8 rounded-2xl flex gap-6 items-start hover:-translate-y-0.5 transition-all duration-300 shadow-xl text-left relative overflow-hidden group backdrop-blur-sm"
                id={`format-card-${item.id}`}
              >
                {/* Visual side accent */}
                <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${item.color}`} />

                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-cyan-400 group-hover:text-cyan-300 transition-colors shrink-0">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest leading-none block">
                    {item.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-white font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed text-justify font-light">
                    {item.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
