import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { EventConfig, Speaker } from '../types';

interface HeroProps {
  config: EventConfig;
  speakers: Speaker[];
  onOpenSpeakerModal: (speaker: Speaker) => void;
  onScrollToSection: (id: string) => void;
}

export default function Hero({ config, onScrollToSection }: HeroProps) {

  return (
    <section className="relative aspect-video sm:aspect-auto sm:min-h-screen bg-[#020617] flex flex-col justify-center overflow-hidden sm:pt-28 sm:pb-12 px-0 sm:px-6 lg:px-8" id="hero-section">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover contrast-125 saturate-[1.2] brightness-110"
        >
          <source src="/video-inicial.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Decorative Glow Elements */}
      <div className="absolute top-[20%] right-[10%] w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl z-0" />
      <div className="absolute bottom-[30%] left-[5%] w-80 h-80 rounded-full bg-blue-500/10 blur-3xl z-0" />

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Side: Empty */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left">
        </div>

        {/* O vídeo do celular foi removido desta seção para ir para AboutEventVideoSection */}
      </div>

      {/* Bounce scroll down button */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
        <button
          onClick={() => onScrollToSection('authority-bar')}
          className="p-1 rounded-full hover:bg-slate-900 border border-slate-900/50 transition-all text-slate-400 hover:text-white cursor-pointer"
          id="scroll-to-content-btn"
        >
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
