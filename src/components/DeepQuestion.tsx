import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BrainCircuit, BookOpen, Briefcase, Paintbrush, MessageSquare, ToggleLeft, HelpCircle } from 'lucide-react';

export default function DeepQuestion() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 0,
      text: "Ela muda como aprendemos.",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-400",
      description: "Aulas personalizadas, tutores sintéticos e respostas instantâneas reconfiguram a atenção e a curiosidade intelectual."
    },
    {
      id: 1,
      text: "Como trabalhamos.",
      icon: Briefcase,
      color: "from-cyan-500 to-teal-400",
      description: "Automação cognitiva e copilotos digitais redefinem a produtividade, a especialidade técnica e o valor do esforço."
    },
    {
      id: 2,
      text: "Como criamos.",
      icon: Paintbrush,
      color: "from-purple-500 to-indigo-400",
      description: "Algoritmos geram arte, textos e músicas, desafiando a própria essência da originalidade e do gênio criativo humano."
    },
    {
      id: 3,
      text: "Como nos comunicamos.",
      icon: MessageSquare,
      color: "from-indigo-500 to-blue-400",
      description: "Filtros atencionais e avatares hiper-realistas intermediam nossas relações, gerando bolhas de confirmação extrema."
    },
    {
      id: 4,
      text: "Como tomamos decisões.",
      icon: ToggleLeft,
      color: "from-blue-500 to-purple-400",
      description: "Sistemas preditivos decidem quem recebe crédito, quem é contratado e o que consumimos, terceirizando o livre-arbítrio."
    }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-transparent overflow-hidden px-4 sm:px-6 lg:px-8 border-b border-white/5" id="provocation-section">
      {/* Background elements */}
      <div className="absolute inset-0 bg-radial from-blue-900/10 via-transparent to-transparent opacity-40" />
      <div className="absolute top-[40%] right-[5%] w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="absolute bottom-0 left-[10%] w-72 h-72 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Intro */}
        <div className="text-center space-y-4 mb-12">
          <span className="text-[10px] font-bold tracking-[0.3em] text-cyan-400 uppercase font-mono">Narrativa Central</span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            A Inteligência Artificial está mudando o mundo.
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-light">
            Explore abaixo as dimensões dessa transformação silenciosa e constante em nossa sociedade:
          </p>
        </div>

        {/* Interactive Steps Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          
          {/* Steps list */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-white/10 border-cyan-500/50 shadow-lg shadow-cyan-500/5"
                      : "bg-transparent border-transparent hover:border-white/10 hover:bg-white/5"
                  }`}
                  id={`provocation-step-${idx}`}
                >
                  <div className={`p-2.5 rounded-lg bg-white/5 border ${isActive ? 'border-cyan-500/50 text-cyan-400' : 'border-white/5 text-slate-500'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`text-sm font-semibold tracking-wide font-display ${isActive ? 'text-white' : 'text-slate-400'}`}>
                      {step.text}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Details screen representing AI and Human development */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl relative min-h-[250px] flex flex-col justify-between shadow-2xl backdrop-blur-sm overflow-hidden text-left">
            <div className="absolute top-0 right-0 p-4 opacity-5 text-cyan-400 pointer-events-none">
              <BrainCircuit className="w-40 h-40" />
            </div>

            <div className="space-y-4 relative z-10">
              <span className={`text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded-lg text-white bg-gradient-to-r ${steps[activeStep].color}`}>
                Transformação em Foco
              </span>
              <h3 className="text-xl md:text-2xl font-display font-extrabold text-white mt-1.5">
                {steps[activeStep].text}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                {steps[activeStep].description}
              </p>
            </div>

            <div className="pt-6 border-t border-white/5 mt-6 relative z-10 flex items-center justify-between">
              <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">
                Interação {activeStep + 1} de 5
              </p>
              <div className="flex gap-1">
                {steps.map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-1 rounded-full transition-all duration-300 ${activeStep === idx ? 'w-6 bg-cyan-400' : 'w-2 bg-slate-800'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* The ultimate question display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center p-8 md:p-12 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden backdrop-blur-sm shadow-2xl"
          id="grand-question-card"
        >
          <div className="absolute top-[-20%] left-[-10%] w-64 h-64 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
          
          <div className="inline-flex p-3 bg-red-500/10 border border-red-500/20 rounded-2xl mb-4 text-red-400 animate-pulse">
            <HelpCircle className="w-8 h-8" />
          </div>

          <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.25em]">O Enigma Essencial do CIETDH</p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-white to-orange-200 mt-2 max-w-2xl mx-auto leading-tight">
            Mas o que essa transformação está fazendo conosco?
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-3 max-w-xl mx-auto leading-relaxed font-light">
            Estamos evoluindo intelectualmente ou terceirizando o próprio ato de pensar? O maior dilema da era da IA não é tecnológico, é humano.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
