import React from 'react';
import { HelpCircle, BrainCircuit, UserCheck, MessageCircle, Sliders, ShieldAlert, GraduationCap } from 'lucide-react';

export default function MajorQuestions() {
  const questions = [
    {
      id: "q-1",
      question: "A IA vai substituir o professor?",
      description: "Análise da docência enquanto relação de alteridade, afeto e modelagem de caráter, indo infinitamente além da mera transmissão estruturada de dados frios.",
      icon: GraduationCap,
      color: "from-blue-500/20 to-cyan-500/5 text-cyan-400"
    },
    {
      id: "q-2",
      question: "Estamos aprendendo mais ou apenas acessando respostas?",
      description: "Como a facilidade extrema de obter relatórios prontos pode induzir à atrofia cognitiva e enfraquecer os caminhos biológicos do aprendizado profundo sustentado.",
      icon: BrainCircuit,
      color: "from-purple-500/20 to-indigo-500/5 text-purple-400"
    },
    {
      id: "q-3",
      question: "A tecnologia está nos aproximando ou nos isolando?",
      description: "O surgimento alarmante da solidão conectada e o impacto psicológico da substituição de interações físicas e espontâneas por relacionamentos mediados por algoritmos.",
      icon: MessageCircle,
      color: "from-indigo-500/20 to-blue-500/5 text-indigo-400"
    },
    {
      id: "q-4",
      question: "Quais habilidades permanecerão essencialmente humanas?",
      description: "A ressignificação da criatividade original, empatia ativa, discernimento ético reflexivo e a habilidade de navegar de forma saudável no imponderável.",
      icon: UserCheck,
      color: "from-emerald-500/20 to-cyan-500/5 text-emerald-400"
    },
    {
      id: "q-5",
      question: "Quem define os limites da inteligência artificial?",
      description: "Os impasses democráticos globais e o monopólio técnico atrelado a grandes corporações, ponderando os direitos cognitivos do indivíduo e da sociedade civil organizada.",
      icon: Sliders,
      color: "from-rose-500/20 to-indigo-500/5 text-rose-400"
    },
    {
      id: "q-6",
      question: "Como educar uma geração que crescerá ao lado de algoritmos?",
      description: "Letramento digital crítico precoce, cultivo de hábitos saudáveis de atenção focada e preservação das estruturas socioemocionais em infâncias imersas na rede.",
      icon: ShieldAlert,
      color: "from-amber-500/20 to-cyan-500/5 text-amber-400"
    }
  ];

  return (
    <section className="relative py-24 bg-transparent px-4 sm:px-6 lg:px-8 border-b border-white/5" id="questions-section">
      <div className="absolute top-[30%] left-[-10%] w-96 h-96 rounded-full bg-cyan-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <p className="text-[10px] font-bold font-mono tracking-[0.3em] text-cyan-400 uppercase">Interrogações de Fronteira</p>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            As Grandes Questões do CIETDH 2026
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Mais do que fornecer certezas prontas, nosso objetivo acadêmico é articular as indagações mais cruciais da nossa geração para despertar o livre-arbítrio:
          </p>
        </div>

        {/* Questions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {questions.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white/5 border border-white/10 hover:border-cyan-500/20 p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 shadow-xl relative overflow-hidden group backdrop-blur-sm"
                id={`question-card-${item.id}`}
              >
                {/* Subtle light glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/0 to-cyan-500/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="space-y-4 text-left">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${item.color} w-fit border border-white/10`}>
                    <IconComp className="w-6 h-6 shrink-0" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-display group-hover:text-cyan-400 transition-colors leading-snug">
                    {item.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed text-justify font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">
                  <span>Debate Científico</span>
                  <HelpCircle className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
