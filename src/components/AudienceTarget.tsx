import React from 'react';
import { UserCheck, GraduationCap, Microscope, ClipboardList, Laptop, Compass } from 'lucide-react';

export default function AudienceTarget() {
  const targets = [
    {
      id: "t-prof",
      title: "Professores e Educadores",
      description: "Que desejam compreender as transformações pedagógicas profundas na era da IA e aprender a utilizar tecnologias sem comprometer a emancipação cognitiva do estudante.",
      icon: GraduationCap,
      color: "text-blue-400 border-blue-900/35 bg-blue-950/10"
    },
    {
      id: "t-pesq",
      title: "Pesquisadores e Acadêmicos",
      description: "Que investigam ativamente os impactos sociais, neurológicos, éticos e epistemológicos provocados pela onipresença dos algoritmos e redes neurais artificiais na modernidade.",
      icon: Microscope,
      color: "text-cyan-400 border-cyan-900/35 bg-cyan-950/10"
    },
    {
      id: "t-est",
      title: "Estudantes Graduação e Pós",
      description: "De pedagogia, psicologia, filosofia, ciências sociais ou tecnologia que buscam ampliar sua bagagem de conhecimentos teóricos, obter certificações e debater tendências reais de futuro.",
      icon: UserCheck,
      color: "text-indigo-400 border-indigo-900/35 bg-indigo-950/10"
    },
    {
      id: "t-gest",
      title: "Gestores Escolares e Diretores",
      description: "Que precisam formular e estruturar diretrizes éticas curriculares institucionais, políticas internas saudáveis de uso de telas e preparar o corpo docente para transformações inevitáveis.",
      icon: ClipboardList,
      color: "text-purple-400 border-purple-900/35 bg-purple-950/10"
    },
    {
      id: "t-tech",
      title: "Profissionais de Tecnologia",
      description: "Engenheiros, designers ou programadores que desejam refletir criticamente sobre o impacto ético e social humano das inovações e sistemas autônomos que desenvolvem.",
      icon: Laptop,
      color: "text-emerald-400 border-emerald-900/35 bg-emerald-950/10"
    },
    {
      id: "t-fut",
      title: "Pessoas que Pensam o Futuro",
      description: "Cidadãos conscientes que desejam ir além do consumo passivo e debater ativamente qual direção nossa sociedade, inteligência e cultura estão tomando diante das máquinas.",
      icon: Compass,
      color: "text-rose-400 border-rose-900/35 bg-rose-950/10"
    }
  ];

  return (
    <section className="relative py-24 bg-transparent px-4 sm:px-6 lg:px-8 border-b border-white/5" id="target-section">
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 rounded-full bg-indigo-900/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <p className="text-[10px] font-bold font-mono tracking-[0.3em] text-cyan-400 uppercase">Público-Alvo do Congresso</p>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Para quem é o CIETDH 2026?
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Seja você um profissional consolidado, um pesquisador das ciências humanas ou um entusiasta do amanhã, o CIETDH é o seu espaço de debate e capacitação:
          </p>
        </div>

        {/* Target Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {targets.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:scale-[1.01] flex flex-col justify-between transition-all duration-300 shadow-xl text-left group backdrop-blur-sm"
                id={`target-card-${item.id}`}
              >
                <div className="space-y-4">
                  <div className={`p-3 rounded-xl border bg-white/5 border-white/10 w-fit ${item.color.split(' ')[0]}`}>
                    <IconComponent className="w-5 h-5 shrink-0" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-display group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed text-justify font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 mt-6 flex items-center gap-1 text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Espaço de Diálogo Pleno</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
