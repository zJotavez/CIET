import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Check, Calendar, Clock, Laptop, Award, ShieldCheck, Ticket } from 'lucide-react';
import { EventConfig } from '../types';

interface InscricaoCardProps {
  config: EventConfig;
}

export default function InscricaoCard({ config }: InscricaoCardProps) {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);
  const [isExpired, setIsExpired] = useState<boolean>(false);

  useEffect(() => {
    if (!config.showCountdown || !config.countdownDate) {
      setTimeLeft(null);
      return;
    }

    const calculateTimeLeft = () => {
      const difference = +new Date(config.countdownDate) - +new Date();
      if (difference <= 0) {
        setIsExpired(true);
        setTimeLeft(null);
        return;
      }

      setIsExpired(false);
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [config.countdownDate, config.showCountdown]);

  const checklist = [
    "Três noites de programação científica e debates de fronteira",
    "Palestras com convidados de Oxford, Sorbonne, MIT e USP",
    "Acesso exclusivo às gravações por 6 meses",
    "Programação 100% online em plataforma de alta estabilidade",
    "Certificação internacional oficial de 30 horas inclusa"
  ];

  return (
    <section className="relative py-24 bg-transparent px-4 sm:px-6 lg:px-8 overflow-hidden" id="registration-section">
      {/* Background visual glow */}
      <div className="absolute top-[30%] left-[10%] w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-12">
        
        {/* Header */}
        <div className="space-y-4">
          <span className="text-[10px] font-bold font-mono tracking-[0.3em] text-cyan-400 uppercase block">Garantia de Vaga Oficial</span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            O futuro já começou.
          </h2>
          <h3 className="text-lg md:text-xl font-medium text-slate-300 max-w-xl mx-auto font-display">
            Agora precisamos decidir qual será o nosso papel nele.
          </h3>
        </div>

        {/* Checkout Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch max-w-3xl mx-auto">
          
          {/* Main Checkout Ticket */}
          <div className="md:col-span-12 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 text-left flex flex-col justify-between shadow-2xl relative overflow-hidden backdrop-blur-md">
            {/* Top horizontal gradient line */}
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600" />
            
            <div className="space-y-6">
              
              {/* Card Title Header */}
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-white/5 pb-6">
                <div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-lg">
                    LOTE ATUAL PROMOCIONAL
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold font-display text-white mt-2 leading-none">Inscrição Integral CIETDH 2026</h4>
                  <p className="text-xs text-slate-400 mt-1 font-light">Garante acesso completo a todas as noites, gravações e certificação oficial.</p>
                </div>
                <div className="text-left sm:text-right">
                  {/* Original price slash */}
                  {config.originalPrice > config.registrationPrice && (
                    <p className="text-xs text-slate-500 line-through">R$ {config.originalPrice.toFixed(2).replace('.', ',')}</p>
                  )}
                  <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300 font-display">
                    R$ {config.registrationPrice.toFixed(2).replace('.', ',')}
                  </p>
                  <p className="text-[10px] text-slate-500 font-mono tracking-wider">Taxa única — sem mensalidades</p>
                </div>
              </div>

              {/* Bullet Checklist */}
              <ul className="space-y-3">
                {checklist.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-xs sm:text-sm text-slate-300 font-light" id={`checklist-item-${idx}`}>
                    <div className="p-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full mt-0.5 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-justify">{item}</span>
                  </li>
                ))}
              </ul>

            </div>

            {/* Inscrição Button and Urgência Block */}
            <div className="pt-8 border-t border-white/5 mt-8 space-y-6">
              <a
                href={config.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 hover:scale-[1.01] text-[#020617] font-bold font-sans rounded-xl text-center hover:shadow-lg hover:shadow-cyan-400/20 transition-all flex justify-center items-center gap-2 group text-sm uppercase tracking-widest font-mono shadow-md cursor-pointer"
                id="registration-card-cta-btn"
              >
                <Ticket className="w-4 h-4 shrink-0 text-[#020617] group-hover:rotate-12 transition-transform" />
                GARANTIR MINHA INSCRIÇÃO OFICIAL
              </a>

              {/* Countdown Urgência Block */}
              {config.showCountdown && (
                <div className="bg-[#020617]/50 border border-white/5 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left backdrop-blur-sm" id="countdown-urgency-block">
                  <div>
                    <p className="text-xs font-bold text-slate-200">Condição especial por tempo limitado</p>
                    <p className="text-[11px] text-slate-400 mt-0.5 font-light">O lote atual promocional poderá virar sem aviso prévio. Garanta seu desconto.</p>
                  </div>
                  
                  {isExpired ? (
                    <div className="text-xs font-mono font-bold uppercase text-red-400 bg-red-950/30 border border-red-900/30 px-3 py-1.5 rounded-lg">
                      Lote Promocional Expirado
                    </div>
                  ) : timeLeft ? (
                    <div className="flex gap-2 text-center select-none" id="countdown-timer-visual">
                      <div className="p-2 bg-[#020617] rounded-lg border border-white/10 w-12 shrink-0">
                        <p className="text-base font-bold text-white font-mono leading-none">{String(timeLeft.days).padStart(2, '0')}</p>
                        <p className="text-[8px] font-mono text-slate-500 mt-1 uppercase tracking-wider">DIAS</p>
                      </div>
                      <div className="p-2 bg-[#020617] rounded-lg border border-white/10 w-12 shrink-0">
                        <p className="text-base font-bold text-white font-mono leading-none">{String(timeLeft.hours).padStart(2, '0')}</p>
                        <p className="text-[8px] font-mono text-slate-500 mt-1 uppercase tracking-wider">HORAS</p>
                      </div>
                      <div className="p-2 bg-[#020617] rounded-lg border border-white/10 w-12 shrink-0">
                        <p className="text-base font-bold text-white font-mono leading-none">{String(timeLeft.minutes).padStart(2, '0')}</p>
                        <p className="text-[8px] font-mono text-slate-500 mt-1 uppercase tracking-wider">MINS</p>
                      </div>
                      <div className="p-2 bg-[#020617] rounded-lg border border-white/10 w-12 shrink-0">
                        <p className="text-base font-bold text-cyan-400 font-mono leading-none animate-pulse">{String(timeLeft.seconds).padStart(2, '0')}</p>
                        <p className="text-[8px] font-mono text-slate-500 mt-1 uppercase tracking-wider">SEGS</p>
                      </div>
                    </div>
                  ) : null}
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
