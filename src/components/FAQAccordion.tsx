import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="relative py-24 bg-transparent px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden" id="faq-section">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/bg-section.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/50 to-[#020617]/90"></div>
      </div>

      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-cyan-950/10 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <p className="text-[10px] font-bold font-mono tracking-[0.3em] text-cyan-400 uppercase">Esclarecimentos</p>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Perguntas Frequentes — FAQ
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Tem alguma dúvida acadêmica ou logística sobre as transmissões, certificados ou inscrições? Encontre as respostas rápidas abaixo:
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.filter(f => !f.question.toLowerCase().includes("valor")).map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl overflow-hidden transition-all duration-200 backdrop-blur-sm shadow-xl text-left"
                id={`faq-item-${faq.id}`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span className="font-bold text-slate-100 text-sm sm:text-base leading-snug transition-colors font-display">
                      {faq.question}
                    </span>
                  </div>
                  <div className="p-1.5 bg-white/5 border border-white/10 text-slate-400 rounded-full shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-cyan-400" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Collapsible Answer Block */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-3 border-t border-white/5">
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed text-justify font-light">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
