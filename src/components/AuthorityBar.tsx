import React from 'react';

export default function AuthorityBar() {
  const items = [
    "3 noites de conhecimento profundo",
    "Participação acadêmica internacional",
    "Certificação de 30 horas inclusa",
    "Palestras, minicursos e debates",
    "Transmissão 100% online e ao vivo",
    "Acesso a gravações por 6 meses",
    "Homenagem oficial a Edgar Morin",
    "Discussão de fronteira sobre IA e Humanismo"
  ];

  // Repeat items to ensure continuous layout on large screens
  const doubledItems = [...items, ...items, ...items];

  return (
    <div className="relative bg-white/5 py-4 border-y border-white/10 overflow-hidden w-full backdrop-blur-md" id="authority-bar">
      {/* Visual background gloss */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent mix-blend-screen pointer-events-none" />

      <div className="flex whitespace-nowrap overflow-hidden select-none">
        <div className="flex animate-[marquee_45s_linear_infinite] gap-12 text-xs font-mono font-bold tracking-widest text-slate-300 uppercase">
          {doubledItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 shrink-0">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 animate-pulse shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333333%); }
        }
      `}</style>
    </div>
  );
}
