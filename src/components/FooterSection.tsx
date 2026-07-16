import React from 'react';
import { Globe, GraduationCap, Scale, Shield } from 'lucide-react';
import { EventConfig } from '../types';

interface FooterProps {
  config: EventConfig;
  onScrollToSection: (id: string) => void;
}

export default function FooterSection({ config, onScrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-transparent border-t border-white/5 pt-16 pb-8 px-4 sm:px-6 lg:px-8 text-slate-400" id="footer-section">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5 text-left">
        
        {/* Brand / Title column */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3 text-cyan-400">
            <img src="/logo-cietdh.png" alt="CIETDH Logo" className="h-10 w-auto object-contain brightness-0 invert" />
            <span className="font-display font-extrabold text-sm sm:text-base text-white tracking-widest uppercase">CIETDH 2026</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 font-medium font-display">
            III Congresso Internacional de Educação, Tecnologia e Desenvolvimento Humano
          </p>
          <p className="text-xs text-slate-500 max-w-sm leading-relaxed text-justify font-light">
            Um encontro internacional transdisciplinar em defesa do humanismo, ética e da soberania cognitiva humana face ao progresso tecnológico exponencial das redes de inteligência artificial.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-white font-mono">Navegação Rápida</h4>
          <ul className="space-y-2 text-xs font-medium">
            <li>
              <button onClick={() => onScrollToSection('hero-section')} className="hover:text-cyan-400 cursor-pointer text-left transition-colors font-light">Início / Topo</button>
            </li>
            <li>
              <button onClick={() => onScrollToSection('about-section')} className="hover:text-cyan-400 cursor-pointer text-left transition-colors font-light">Sobre o Congresso</button>
            </li>
            <li>
              <button onClick={() => onScrollToSection('speakers-grid-section')} className="hover:text-cyan-400 cursor-pointer text-left transition-colors font-light">Corpo de Palestrantes</button>
            </li>
            <li>
              <button onClick={() => onScrollToSection('schedule-section')} className="hover:text-cyan-400 cursor-pointer text-left transition-colors font-light">Programação Completa</button>
            </li>
            <li>
              <button onClick={() => onScrollToSection('faq-section')} className="hover:text-cyan-400 cursor-pointer text-left transition-colors font-light">Perguntas Frequentes</button>
            </li>
          </ul>
        </div>

        {/* Institutional details */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-white font-mono">Inscrições Oficiais</h4>
          <p className="text-xs text-slate-400 leading-relaxed text-justify font-light">
            A venda de ingressos e emissão oficial de credenciais de participação com certificação de 30 horas é operada exclusivamente via plataforma Even3.
          </p>
          
          <div className="pt-2">
            <a
              href={config.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:border-white/20 text-slate-200 hover:text-white rounded-xl text-xs font-bold transition-all cursor-pointer backdrop-blur-sm"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              Ver Página Even3 Oficial
            </a>
          </div>
        </div>

      </div>

      {/* Under footer */}
      <div className="max-w-6xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p className="text-slate-500 font-light">
          &copy; {currentYear} CIETDH — Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-6 text-slate-500 font-medium">
          <span className="flex items-center gap-1 font-light">
            <Shield className="w-3.5 h-3.5 text-slate-600" />
            Ambiente Seguro Even3
          </span>
        </div>
      </div>
    </footer>
  );
}
