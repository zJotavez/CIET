import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Play, Volume2, Ticket } from 'lucide-react';

export default function AboutEventVideoSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative py-32 bg-[#020617] overflow-hidden" id="about-event-section">
      
      {/* Background Image with Parallax & Dark Overlay & Top Gradient Fade */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/bg-section.jpg')] bg-cover bg-center opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-950/40"></div>
        {/* Degradê no topo para mesclar suavemente com a cor sólida da Home */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#020617] via-[#020617]/80 to-transparent z-10"></div>
      </div>

      {/* Crossing Looping Text Marquees (Linhas se cruzando) */}
      <div className="absolute top-0 left-0 w-full h-32 z-20 pointer-events-none flex items-center justify-center overflow-hidden">
        {/* Faixa 1 (Inclinada para cima) */}
        <div className="absolute w-[120%] bg-cyan-900/40 border-y border-cyan-500/30 py-3 backdrop-blur-sm -rotate-2 transform-origin-center">
          <motion.div
            className="flex whitespace-nowrap gap-16"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={`track-1-${i}`} className="flex gap-16 items-center text-cyan-300 font-mono text-sm uppercase tracking-[0.2em] font-bold">
                <span>◆ CIETDH 2026</span>
                <span>◆ INOVAÇÃO E ÉTICA</span>
                <span>◆ CIÊNCIA E TEOLOGIA</span>
                <span>◆ O FUTURO DO CONHECIMENTO</span>
                <span>◆ O EVENTO PREMIUM</span>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Faixa 2 (Inclinada para baixo - cruzando) */}
        <div className="absolute w-[120%] bg-blue-900/40 border-y border-blue-400/30 py-3 backdrop-blur-sm rotate-2 transform-origin-center mix-blend-screen">
          <motion.div
            className="flex whitespace-nowrap gap-16"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={`track-2-${i}`} className="flex gap-16 items-center text-blue-200 font-mono text-sm uppercase tracking-[0.2em] font-bold">
                <span>◆ TRANSFORMAÇÃO</span>
                <span>◆ LIDERANÇA GLOBAL</span>
                <span>◆ CONEXÕES PROFUNDAS</span>
                <span>◆ PENSAMENTO CRÍTICO</span>
                <span>◆ EXPERIÊNCIA IMERSIVA</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Premium Text & Mini Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            className="relative z-10 space-y-10"
          >
            {/* Texts */}
            <div className="space-y-6">
              
              {/* Title with Text Shadow */}
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-medium tracking-tight leading-tight text-white drop-shadow-[0_4px_10px_rgba(0,0,0,1)]" style={{ fontFamily: 'Georgia, serif' }}>
                Conheça o <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 drop-shadow-[0_2px_15px_rgba(6,182,212,0.4)]">CIETDH 2026</span>
              </h2>
              
              {/* Paragraphs with Text Shadow */}
              <p className="text-slate-200 leading-relaxed font-light text-lg sm:text-xl drop-shadow-[0_2px_6px_rgba(0,0,0,1)] max-w-xl">
                Um encontro internacional exclusivo, dedicado à exploração das novas fronteiras da ciência e teologia. Preparamos uma experiência imersiva com os maiores especialistas mundiais.
              </p>
            </div>

            {/* Mini Cards Container */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-4 pt-2">
              {/* Mini Card 1 - Global */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                className="relative overflow-hidden rounded-2xl p-4 sm:p-6 shadow-xl hover:-translate-y-1 hover:shadow-cyan-500/20 transition-all duration-300 group border border-white/10 min-h-[100px] sm:min-h-[140px] flex flex-col justify-end"
              >
                <div className="absolute inset-0 bg-[url('/global_card_bg.jpg')] bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
                <div className="relative z-10">
                  <h4 className="text-white font-bold text-sm sm:text-lg mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Escala Global</h4>
                  <p className="text-slate-300 text-[10px] sm:text-sm font-light drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] leading-tight">Especialistas e líderes de todo o mundo.</p>
                </div>
              </motion.div>
              
              {/* Mini Card 2 - Inovação */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                className="relative overflow-hidden rounded-2xl p-4 sm:p-6 shadow-xl hover:-translate-y-1 hover:shadow-blue-500/20 transition-all duration-300 group border border-white/10 min-h-[100px] sm:min-h-[140px] flex flex-col justify-end"
              >
                <div className="absolute inset-0 bg-[url('/innovation_card_bg.jpg')] bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
                <div className="relative z-10">
                  <h4 className="text-white font-bold text-sm sm:text-lg mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Foco em Inovação</h4>
                  <p className="text-slate-300 text-[10px] sm:text-sm font-light drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] leading-tight">O futuro do conhecimento, ciência e ética.</p>
                </div>
              </motion.div>
            </div>

            {/* Subscription Button CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-4"
            >
              <a
                href="https://www.even3.com.br/congresso-internacional-de-educacao-tecnologia-e-desenvolvimento-humano-747666/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold uppercase tracking-widest text-sm rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden cursor-pointer"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                
                <Ticket className="w-5 h-5" />
                Garantir Minha Vaga
              </a>
            </motion.div>

          </motion.div>

          {/* Right Side: Phone Video */}
          <div className="relative w-full flex items-center justify-center min-h-[600px] perspective-[1000px] lg:justify-end">
            <motion.div
              initial={{ opacity: 0, rotateY: -10, scale: 0.95 }}
              whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, type: "spring", bounce: 0.5 }}
              className="relative w-full max-w-[280px] sm:max-w-[420px] aspect-[9/16] rounded-[3.5rem] overflow-hidden bg-black border-[10px] border-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,1),_0_0_0_12px_rgba(255,255,255,0.02),_0_20px_60px_rgba(6,182,212,0.3)] group hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_60px_120px_-20px_rgba(0,0,0,1),_0_0_0_12px_rgba(255,255,255,0.03),_0_30px_70px_rgba(6,182,212,0.5)] transition-all duration-700 ease-out z-20"
            >
              {/* Phone Notch/Dynamic Island mockup */}
              <div className="absolute top-0 inset-x-0 flex justify-center z-20 pt-3">
                <div className="w-28 h-7 bg-black rounded-full shadow-inner relative flex items-center justify-between px-2">
                  <div className="w-2 h-2 rounded-full bg-blue-900/50"></div>
                  <div className="w-3 h-3 rounded-full bg-cyan-950/80 border border-white/5"></div>
                </div>
              </div>
              {/* Contêiner clicável para alternar o mudo */}
              <div 
                onClick={toggleMute} 
                className="w-full h-full relative cursor-pointer"
              >
                <video 
                  ref={videoRef}
                  autoPlay 
                  loop 
                  muted={isMuted} 
                  playsInline 
                  className="w-full h-full object-contain sm:object-cover"
                >
                  <source src="/Video atualizado.mp4" type="video/mp4" />
                </video>
                
                {/* Audio Toggle Button Overlay - visível apenas quando mutado */}
                {isMuted && (
                  <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-black/20 hover:bg-black/35 transition-colors">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/90 to-blue-600/90 rounded-full flex items-center justify-center backdrop-blur-md shadow-[0_10px_30px_rgba(6,182,212,0.4)] hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white ml-1 drop-shadow-md" />
                    </div>
                    <span className="mt-4 text-xs font-bold text-white uppercase tracking-[0.2em] bg-black/60 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10 shadow-lg animate-pulse">
                      Ouvir Mensagem
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
