import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Award, Quote, Sparkles, User, Calendar, BookOpen, ChevronRight, Play, Volume2 } from 'lucide-react';
import { Speaker } from '../types';

interface FeaturedSpeakerSpotlightProps {
  type: 'first' | 'morin' | 'final';
  speaker: Speaker | undefined;
  allSpeakers?: Speaker[];
  onOpenSpeakerModal: (speaker: Speaker) => void;
}

export default function FeaturedSpeakerSpotlight({ type, speaker, allSpeakers = [], onOpenSpeakerModal }: FeaturedSpeakerSpotlightProps) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  if (!speaker) return null;

  // Render for Moment 2 (First Strategic Spotlight)
  if (type === 'first') {
    return (
      <section className="relative py-20 bg-transparent border-b border-white/5 overflow-hidden px-4 sm:px-6 lg:px-8" id="featured-spotlight-1">
        {/* Subtle background nodes */}
        <div className="absolute top-[10%] left-[-5%] w-80 h-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-5%] w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center md:text-left mb-10">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">Presença Internacional Confirmada</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Big styled portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 opacity-20 group-hover:opacity-40 transition-opacity blur-md" />
                
                <div className="relative w-72 h-88 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border border-white/10 bg-[#020617] shadow-2xl">
                  {speaker.videoUrl ? (
                    <div 
                      onClick={toggleMute}
                      className="w-full h-full relative cursor-pointer group-hover:scale-105 transition-transform duration-500"
                    >
                      <video 
                        ref={videoRef}
                        autoPlay 
                        loop 
                        muted={isMuted} 
                        playsInline
                        disablePictureInPicture
                        disableRemotePlayback 
                        className="w-full h-full object-cover"
                      >
                        <source src={speaker.videoUrl} type="video/mp4" />
                      </video>
                      {isMuted && (
                        <div className="absolute inset-0 m-auto w-14 h-14 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center backdrop-blur-md transition-all z-20 hover:scale-110 pointer-events-none">
                          <Volume2 className="w-6 h-6 text-white" />
                        </div>
                      )}
                    </div>
                  ) : (
                    <img
                      src={speaker.photoUrl}
                      alt={speaker.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
                    />
                  )}
                  
                  {/* Glass Card Details Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent pt-12 text-left">
                    <p className="text-[9px] font-bold text-cyan-400 tracking-widest uppercase font-mono">{speaker.country}</p>
                    <h4 className="text-lg font-bold text-white mt-1 leading-tight font-display">{speaker.academicTitle} {speaker.name}</h4>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-1 font-light">{speaker.institution}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Quote and mini biography */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">


              {/* Spectacular Quote */}
              <div className="relative">
                <Quote className="absolute -top-6 -left-4 w-12 h-12 text-blue-500/10 pointer-events-none" />
                <blockquote className="text-lg md:text-2xl font-display font-medium text-slate-100 leading-relaxed italic relative z-10 pl-4 border-l-2 border-cyan-400">
                  "{speaker.quote}"
                </blockquote>
              </div>

              {/* Quick lecture tag */}
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm shadow-xl">
                <p className="text-[9px] font-mono text-cyan-400 uppercase font-bold tracking-wider">Conferência no CIETDH 2026</p>
                <h5 className="text-sm sm:text-base font-bold text-white mt-1 leading-snug font-display">{speaker.lectureTitle}</h5>
                <p className="text-xs text-slate-400 mt-1 font-light">Conferência magna com sessão interativa de perguntas e respostas.</p>
              </div>


            </div>
          </div>
        </div>
      </section>
    );
  }

  // Render for Moment 4 (Edgar Morin Tribute Connected Speaker)
  if (type === 'morin') {
    return (
      <section className="relative py-16 bg-transparent border-y border-white/5 overflow-hidden px-4 sm:px-6 lg:px-8" id="featured-spotlight-morin">
        <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl relative overflow-hidden backdrop-blur-sm">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left side: Avatar details */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative group cursor-pointer" onClick={() => onOpenSpeakerModal(speaker)}>
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-20 blur-sm group-hover:opacity-40 transition-opacity" />
                <img
                  src={speaker.photoUrl}
                  alt={speaker.name}
                  referrerPolicy="no-referrer"
                  className="relative w-32 h-32 rounded-full object-cover border-2 border-white/10 bg-[#020617]"
                />
              </div>
              <h4 className="text-base font-bold text-white mt-4 leading-tight font-display">{speaker.academicTitle} {speaker.name}</h4>
              <p className="text-xs text-slate-300 mt-1 font-medium font-light">{speaker.institution}</p>
              <p className="text-[9px] text-slate-400 font-mono mt-1 uppercase tracking-widest">{speaker.country}</p>
            </div>

            {/* Right side: Connection Text */}
            <div className="md:col-span-8 space-y-4 text-left">
              <span className="text-[9px] font-bold text-purple-400 uppercase font-mono tracking-widest bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-full inline-block">
                Conexão com a Homenagem
              </span>
              <h3 className="text-lg md:text-xl font-display font-extrabold text-white leading-snug">
                Uma leitura contemporânea do pensamento de Edgar Morin
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed text-justify font-light">
                {speaker.shortBio} {speaker.name} trará a herança teórica dos Sete Saberes de Edgar Morin para a arena algorítmica moderna, demonstrando a necessidade imperiosa de uma pedagogia que não ignore a incerteza e preserve a complexidade natural do indivíduo.
              </p>
              
              <div className="p-3 bg-[#020617]/50 border border-white/5 rounded-xl flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[9px] font-mono text-slate-500 uppercase font-bold tracking-wider">Tema da Conferência Magna de Abertura</p>
                  <p className="text-xs font-semibold text-white mt-0.5 font-display">{speaker.lectureTitle}</p>
                </div>
              </div>

              <button
                onClick={() => onOpenSpeakerModal(speaker)}
                className="text-xs font-bold text-purple-400 hover:text-purple-300 inline-flex items-center gap-1 mt-1 group cursor-pointer"
                id="spotlight-morin-details-btn"
              >
                Conhecer o professor convidado
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Render for Moment 6 (Cinematic Spotlight before subscription card)
  const otherConfirmedSpeakers = allSpeakers.filter(s => s.id !== speaker.id).slice(0, 4);

  return (
    <section className="relative py-20 bg-transparent overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-white/5" id="featured-spotlight-final">
      {/* Visual backdrops */}
      <div className="absolute top-[30%] right-[-10%] w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center md:text-left mb-10">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">Uma das Vozes Mais Relevantes Confirmadas</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 text-left order-2 lg:order-1">
            <span className="text-[9px] font-mono font-bold text-blue-400 uppercase tracking-widest">
              Liderança Intelectual
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white leading-tight">
              {speaker.academicTitle} {speaker.name}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-slate-400 flex items-center gap-1.5 leading-none">
              <span>{speaker.institution}</span>
              <span className="text-slate-600">|</span>
              <span>{speaker.country}</span>
            </p>
            
            <p className="text-sm text-slate-300 leading-relaxed text-justify font-light">
              {speaker.fullBio || speaker.shortBio}
            </p>

            {/* Quote accent */}
            <div className="border-l-2 border-cyan-500 pl-4 py-1 italic text-xs sm:text-sm text-slate-300 bg-white/5 p-3 rounded-r-xl border border-white/5">
              "{speaker.quote}"
            </div>

            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <p className="text-[9px] font-mono text-cyan-400 uppercase font-bold tracking-wider">Conferência no CIETDH 2026</p>
              <h5 className="text-sm sm:text-base font-bold text-white mt-1 font-display">{speaker.lectureTitle}</h5>
              <p className="text-xs text-slate-400 mt-1 font-light">Conferência magna com sessão interativa de perguntas e respostas.</p>
            </div>




          </div>

          {/* Right: Big cinematic image */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative group">
              {/* Outer neon border glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 opacity-20 group-hover:opacity-40 transition-opacity blur-md" />
              
              <div className="relative w-72 h-96 sm:w-80 sm:h-104 rounded-3xl overflow-hidden border border-white/10 bg-[#020617]">
                {speaker.videoUrl ? (
                  <div 
                    onClick={toggleMute}
                    className="w-full h-full relative cursor-pointer group-hover:scale-105 transition-transform duration-500"
                  >
                    <video 
                      ref={videoRef}
                      autoPlay 
                      loop 
                      muted={isMuted} 
                      playsInline
                      disablePictureInPicture
                      disableRemotePlayback 
                      className="w-full h-full object-cover"
                    >
                      <source src={speaker.videoUrl} type="video/mp4" />
                    </video>
                    {isMuted && (
                      <div className="absolute inset-0 m-auto w-14 h-14 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center backdrop-blur-md transition-all z-20 hover:scale-110 pointer-events-none">
                        <Volume2 className="w-6 h-6 text-white" />
                      </div>
                    )}
                  </div>
                ) : (
                  <img
                    src={speaker.photoUrl}
                    alt={speaker.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                
                {/* Visual filter overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
