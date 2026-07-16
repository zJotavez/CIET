import React from 'react';
import { GraduationCap, Cpu, Sparkles, BrainCircuit, Scale, Compass } from 'lucide-react';

export default function ThematicAxes() {
  const axes = [
    {
      id: "axis-edu",
      title: "Educação",
      question: "Como ensinar em uma era de respostas instantâneas?",
      description: "Os desafios pedagógicos de cultivar o senso crítico, a dúvida sistemática e o raciocínio complexo quando os sistemas de IA oferecem relatórios e códigos completos prontos.",
      icon: GraduationCap,
      color: "text-blue-400 border-blue-900/30 bg-blue-950/10"
    },
    {
      id: "axis-tec",
      title: "Tecnologia",
      question: "Como utilizar a inovação sem perder o propósito humano?",
      description: "A busca por desenhos tecnológicos e ecossistemas de software que atuem como amplificadores cognitivos democráticos, e não como indutores de dependência e passividade mental.",
      icon: Cpu,
      color: "text-cyan-400 border-cyan-900/30 bg-cyan-950/10"
    },
    {
      id: "axis-hum",
      title: "Desenvolvimento Humano",
      question: "Quais impactos emocionais, sociais e culturais surgem na nova era?",
      description: "Investigações sobre a desmaterialização dos afetos, o aumento expressivo de distúrbios psicológicos em jovens de telas e a necessidade imperiosa de tédio e presença ativa.",
      icon: Sparkles,
      color: "text-indigo-400 border-indigo-900/30 bg-indigo-950/10"
    },
    {
      id: "axis-ai",
      title: "Inteligência Artificial",
      question: "Como conviver com sistemas cada vez mais autônomos?",
      description: "A transição de ferramentas puras de cálculo para agentes digitais proativos dotados de empatia sintética, e de que forma essa proximidade remodela a psique e as relações parassociais.",
      icon: BrainCircuit,
      color: "text-purple-400 border-purple-900/30 bg-purple-950/10"
    },
    {
      id: "axis-eti",
      title: "Ética",
      question: "Quem define os limites da tecnologia?",
      description: "A regulação algorítmica global, a auditoria de preconceitos estruturais em redes neurais e a soberania democrática da humanidade sobre monopólios privados de dados.",
      icon: Scale,
      color: "text-emerald-400 border-emerald-900/30 bg-emerald-950/10"
    },
    {
      id: "axis-fut",
      title: "Futuro",
      question: "Que tipo de sociedade estamos ativamente construindo?",
      description: "Cenários de reestruturação do trabalho, o advento da pós-verdade automatizada e a responsabilidade coletiva em semear bases saudáveis para as próximas gerações.",
      icon: Compass,
      color: "text-rose-400 border-rose-900/30 bg-rose-950/10"
    }
  ];

  return (
    <section className="relative py-24 bg-transparent px-4 sm:px-6 lg:px-8 border-b border-white/5" id="axes-section">
      {/* Background soft lighting */}
      <div className="absolute inset-0 bg-radial from-cyan-950/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-[10px] font-bold font-mono tracking-[0.3em] text-cyan-400 uppercase">Grandes Eixos do Congresso</p>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Nossos Direcionadores de Reflexão
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            As discussões do CIETDH 2026 são organizadas em torno de seis pilares epistemológicos fundamentais para mapear o nosso tempo:
          </p>
        </div>

        {/* Grid of axes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {axes.map((axis) => {
            const IconComponent = axis.icon;
            return (
              <div
                key={axis.id}
                className={`group p-6 rounded-2xl border bg-white/5 border-white/10 shadow-xl hover:border-cyan-500/30 hover:scale-[1.01] transition-all duration-300 relative overflow-hidden flex flex-col justify-between backdrop-blur-sm`}
                id={`axis-card-${axis.id}`}
              >
                {/* Visual glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  <div className={`p-3 rounded-xl border bg-white/5 border-white/10 w-fit ${axis.color.split(' ')[0]} mb-5`}>
                    <IconComponent className="w-6 h-6 shrink-0" />
                  </div>
                  
                  <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono">Eixo Temático</p>
                  <h3 className="text-lg font-bold text-white mt-1 group-hover:text-cyan-400 transition-colors font-display">{axis.title}</h3>
                  <h4 className="text-xs font-semibold text-slate-300 italic mt-2 border-l border-white/10 pl-3 py-0.5">
                    "{axis.question}"
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-4 leading-relaxed text-justify font-light">
                    {axis.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                  <span className="uppercase tracking-wider text-[10px]">Explorar Programação</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
