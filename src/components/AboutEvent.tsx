import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Landmark, BrainCircuit } from 'lucide-react';
import { EventConfig } from '../types';

interface AboutProps {
  config: EventConfig;
}

export default function AboutEvent({ config }: AboutProps) {
  return (
    <section className="relative py-24 bg-transparent px-4 sm:px-6 lg:px-8 border-b border-white/5" id="about-section">
      {/* Abstract background graphics */}
      <div className="absolute top-[30%] left-[5%] w-72 h-72 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10 space-y-16">
        
        {/* Core editorial title provocation */}
        <div className="text-center space-y-4">
          <p className="text-[10px] font-bold font-mono tracking-[0.3em] text-cyan-400 uppercase">Institucional & Contexto</p>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight">
            O maior desafio da era da inteligência artificial pode não ser tecnológico.
          </h2>
          <div className="text-2xl md:text-3xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-wide mt-2">
            Pode ser humano.
          </div>
        </div>

        {/* Storytelling text description with beautiful split column or dynamic blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 items-stretch text-slate-400">
          
          <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-cyan-500/20 transition-all backdrop-blur-sm">
            <div className="absolute top-0 right-0 p-3 text-cyan-500/10 pointer-events-none">
              <BrainCircuit className="w-20 h-20" />
            </div>
            
            <div className="space-y-4 relative z-10">
              <h3 className="text-base font-bold text-white flex items-center gap-2 font-display">
                <Target className="w-5 h-5 text-cyan-400" />
                Reflexão Transdisciplinar
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed text-justify font-light">
                O III Congresso Internacional de Educação, Tecnologia e Desenvolvimento Humano nasce da necessidade premente de compreender as profundas transformações provocadas pela inteligência artificial em todas as esferas de nossas vidas.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed text-justify font-light">
                Durante três noites de discussões ricas e intensas, intelectuais, pesquisadores, educadores, estudantes e profissionais estarão conectados para refletir sobre o impacto das novas tecnologias na educação, nas relações humanas, na ética e no conhecimento.
              </p>
            </div>
          </div>

          <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-blue-500/20 transition-all backdrop-blur-sm">
            <div className="absolute top-0 right-0 p-3 text-blue-500/10 pointer-events-none">
              <Users className="w-20 h-20" />
            </div>

            <div className="space-y-4 relative z-10">
              <h3 className="text-base font-bold text-white flex items-center gap-2 font-display">
                <Landmark className="w-5 h-5 text-blue-400" />
                Espaço Acadêmico e Prático
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed text-justify font-light">
                Mais do que apenas debater os progressos técnicos ou os novos limites algorítmicos, nossa missão primordial é investigar quem estamos nos tornando diante dessa tecnologia, resgatando e protegendo a dignidade essencial do ser humano.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed text-justify font-light">
                Com certificação de peso internacional de 30 horas e o apoio de grandes universidades brasileiras e do exterior, o CIETDH 2026 desenha um manifesto ético em defesa da integridade e emancipação humana na era das respostas automatizadas.
              </p>
            </div>
          </div>

        </div>

        {/* Dynamic event details snippet in bottom banner */}
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-6 backdrop-blur-sm shadow-2xl">
          <div className="text-center sm:text-left">
            <p className="text-[10px] text-slate-500 uppercase font-mono tracking-[0.2em]">Período de Realização Oficial</p>
            <p className="text-sm font-bold text-white mt-1">{config.dateRange} — {config.timeString}</p>
          </div>
          <div className="h-px sm:h-8 w-full sm:w-px bg-white/10" />
          <div className="text-center sm:text-left">
            <p className="text-[10px] text-slate-500 uppercase font-mono tracking-[0.2em]">Acreditação e Apoio</p>
            <p className="text-xs font-semibold text-cyan-400 mt-1 uppercase tracking-wide">Certificação Internacional de Validação Acadêmica</p>
          </div>
          <div className="w-full sm:w-auto">
            <button
              onClick={() => {
                const element = document.getElementById('registration-section');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-6 py-2.5 bg-white hover:bg-cyan-400 text-black font-bold uppercase tracking-widest text-[11px] rounded-full hover:scale-[1.02] transition-all cursor-pointer shadow-lg hover:shadow-cyan-400/20"
              id="about-cta-btn"
            >
              Inscreva-se
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
