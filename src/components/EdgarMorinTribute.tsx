import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, BookOpen, Clock, Calendar, Sparkles, Brain, CheckCircle } from 'lucide-react';
import { SiteContent } from '../types';

interface MorinTributeProps {
  content: SiteContent;
}

const SABER_COLORS = [
  { activeBg: "bg-blue-500/10", activeBorder: "border-blue-500/50", text: "text-blue-400", shadow: "shadow-blue-500/10", badge: "bg-blue-900/60 text-blue-200 border-blue-500/40" },
  { activeBg: "bg-emerald-500/10", activeBorder: "border-emerald-500/50", text: "text-emerald-400", shadow: "shadow-emerald-500/10", badge: "bg-emerald-900/60 text-emerald-200 border-emerald-500/40" },
  { activeBg: "bg-amber-500/10", activeBorder: "border-amber-500/50", text: "text-amber-400", shadow: "shadow-amber-500/10", badge: "bg-amber-900/60 text-amber-200 border-amber-500/40" },
  { activeBg: "bg-rose-500/10", activeBorder: "border-rose-500/50", text: "text-rose-400", shadow: "shadow-rose-500/10", badge: "bg-rose-900/60 text-rose-200 border-rose-500/40" },
  { activeBg: "bg-fuchsia-500/10", activeBorder: "border-fuchsia-500/50", text: "text-fuchsia-400", shadow: "shadow-fuchsia-500/10", badge: "bg-fuchsia-900/60 text-fuchsia-200 border-fuchsia-500/40" },
  { activeBg: "bg-cyan-500/10", activeBorder: "border-cyan-500/50", text: "text-cyan-400", shadow: "shadow-cyan-500/10", badge: "bg-cyan-900/60 text-cyan-200 border-cyan-500/40" },
  { activeBg: "bg-indigo-500/10", activeBorder: "border-indigo-500/50", text: "text-indigo-400", shadow: "shadow-indigo-500/10", badge: "bg-indigo-900/60 text-indigo-200 border-indigo-500/40" }
];

const SABER_IMAGES = [
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800",
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=800",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800",
  "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800"
];

export default function EdgarMorinTribute({ content }: MorinTributeProps) {
  const [activeSaber, setActiveSaber] = useState<string>("saber-1");

  // Selected saber details
  const selectedIndex = content.saberes.findIndex(s => s.id === activeSaber);
  const selectedSaber = content.saberes[selectedIndex] || content.saberes[0];
  const activeColor = SABER_COLORS[selectedIndex] || SABER_COLORS[0];
  const activeBgImage = SABER_IMAGES[selectedIndex] || SABER_IMAGES[0];

  return (
    <section className="relative py-24 bg-transparent px-4 sm:px-6 lg:px-8 border-b border-white/5" id="morin-tribute-section">
      
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/bg-section.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/50 to-[#020617]/90"></div>
      </div>

      {/* Visual neon gradients */}
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 rounded-full bg-purple-900/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-96 h-96 rounded-full bg-blue-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        
        {/* Core Tribute Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Descriptive texts */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-[10px] font-bold tracking-[0.3em] text-purple-400 uppercase font-mono block">
              Tributo de Abertura Oficial
            </span>
            <h3 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
              {content.morinSectionTitle}
            </h3>
            <h4 className="text-lg md:text-xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300 mt-2">
              {content.morinSectionSubtitle}
            </h4>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed text-justify font-light">
              {content.morinSectionText}
            </p>

            {/* Event Time Stamp */}
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 backdrop-blur-sm shadow-xl">
              <div className="p-2.5 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-xl shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[9px] text-slate-500 uppercase font-mono font-bold tracking-wider">{content.morinDetails}</p>
                <p className="text-sm font-bold text-white mt-0.5">{content.morinTime}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Edgar Morin Photo or Editorial illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-500 opacity-20 group-hover:opacity-40 transition-opacity blur-md" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border border-white/10 bg-[#020617] shadow-2xl">
                {/* Imagem de Inteligência Artificial / Cyber-Cérebro */}
                <img
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600&h=600"
                  alt="Solenidade de Abertura - IA e Condição Humana"
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-90 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                
                {/* Text details in image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent p-6 flex flex-col justify-end text-left">
                  <span className="text-[9px] font-mono font-bold text-purple-400 uppercase tracking-widest">Solenidade de Abertura</span>
                  <h5 className="text-base font-bold text-white mt-1 leading-tight font-display">Complexidade e Condição Humana</h5>
                  <p className="text-xs text-slate-400 mt-1 font-light">Conferência Magna em homenagem a Edgar Morin.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* The Seven Saberes Interactive Grid */}
        <div className="space-y-6 pt-6">
          <div className="text-center md:text-left">
            <h4 className="text-lg md:text-xl font-display font-extrabold text-white">Os Sete Saberes para a Educação do Futuro</h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-light">Clique em qualquer saber abaixo para revelar como seu desafio conceitual se relaciona com a inteligência artificial:</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column (was Right before): Details Card with Background Image */}
            <div className="lg:col-span-7 border border-white/10 rounded-2xl flex flex-col justify-between shadow-2xl relative overflow-hidden text-left backdrop-blur-sm order-2 lg:order-1 transition-all duration-500 group">
              
              {/* Background Image of the Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBgImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 bg-cover bg-center pointer-events-none transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url('${activeBgImage}')` }}
                />
              </AnimatePresence>
              
              {/* Dark Gradient Overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40 pointer-events-none"></div>

              <div className="p-6 md:p-8 relative z-10 flex flex-col h-full justify-between">
                
                <div className="space-y-4">
                  <span className={`text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded-lg border backdrop-blur-md ${activeColor.text} bg-[#020617]/50 border-white/10`}>
                    Saber {selectedSaber.number}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold font-display text-white mt-2 drop-shadow-md">
                    {selectedSaber.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-[#020617]/60 p-4 rounded-xl border border-white/10 font-light backdrop-blur-sm shadow-xl drop-shadow-lg">
                    <span className="font-semibold text-white block mb-1">Preceito de Edgar Morin:</span>
                    {selectedSaber.description}
                  </p>
                  
                  {/* The AI Challenge Relationship Section */}
                  <div className="bg-[#020617]/80 border border-white/10 p-5 rounded-xl mt-4 relative backdrop-blur-md shadow-2xl">
                    <span className={`absolute -top-3 left-4 text-[9px] font-bold tracking-wider font-mono uppercase bg-[#020617] border border-white/10 ${activeColor.text} px-2 py-0.5 rounded-lg shadow-lg`}>
                      Desafio na Era da IA
                    </span>
                    <p className="text-xs sm:text-sm text-white mt-1 leading-relaxed text-justify font-light drop-shadow-md">
                      {selectedSaber.connectionToAI}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                  <p className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">
                    Educação & Complexidade — CIETDH 2026
                  </p>
                  <div className={`flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider ${activeColor.text}`}>
                    <CheckCircle className="w-4 h-4" />
                    <span>Saber Conectado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (was Left before): Buttons (os 7 passos) */}
            <div className="lg:col-span-5 flex flex-col gap-2 order-1 lg:order-2">
              {content.saberes.map((saber, idx) => {
                const isActive = activeSaber === saber.id;
                const c = SABER_COLORS[idx % SABER_COLORS.length];
                
                return (
                  <button
                    key={saber.id}
                    onClick={() => setActiveSaber(saber.id)}
                    className={`flex items-center gap-4 p-3 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                      isActive
                        ? `${c.activeBg} ${c.activeBorder} shadow-md ${c.shadow}`
                        : "bg-transparent border-transparent hover:border-white/10 hover:bg-white/5"
                    }`}
                    id={`saber-selector-${saber.id}`}
                  >
                    <span className={`text-[10px] font-mono font-bold px-2 py-1 rounded-lg transition-colors ${isActive ? c.badge : 'bg-white/5 text-slate-500 border border-white/5'}`}>
                      {saber.number}
                    </span>
                    <h5 className={`text-xs sm:text-sm font-semibold leading-tight font-display transition-colors ${isActive ? 'text-white' : 'text-slate-400'}`}>
                      {saber.title}
                    </h5>
                  </button>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
